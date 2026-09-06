import { describe, expect, it } from 'vitest';
import {
  calculateSetlistRuntime,
  formatClockTime,
  formatDuration,
  parseDuration,
} from './logic';

const song = (id: string, title: string, duration: string, pauseMinutes = 1) => ({
  id,
  title,
  duration,
  pauseMinutes,
  kind: 'song' as const,
});

describe('setlist runtime logic', () => {
  it('parses common duration formats and rejects malformed values', () => {
    expect(parseDuration('4:05')).toBe(245);
    expect(parseDuration('1:04:05')).toBe(3845);
    expect(parseDuration('90')).toBe(90);
    expect(parseDuration('4:70')).toBeNull();
    expect(parseDuration('')).toBeNull();
  });

  it('calculates songs, transitions, finish time and margin', () => {
    const result = calculateSetlistRuntime('20:00', 30, [
      song('one', 'First song', '4:00'),
      song('two', 'Second song', '5:30'),
    ]);

    expect(result.valid).toBe(true);
    expect(result.totalSeconds).toBe(630);
    expect(result.songSeconds).toBe(570);
    expect(result.pauseSeconds).toBe(60);
    expect(result.finishTime).toBe('20:10');
    expect(result.marginSeconds).toBe(1170);
    expect(result.items[0]?.pauseAfterSeconds).toBe(60);
    expect(result.items[1]?.pauseAfterSeconds).toBe(0);
  });

  it('does not count an excluded encore', () => {
    const result = calculateSetlistRuntime('22:30', 30, [
      song('one', 'Main set', '45:00'),
      { id: 'encore', title: 'Encore', duration: '5:00', pauseMinutes: 1, kind: 'encore', included: false },
    ]);

    expect(result.valid).toBe(true);
    expect(result.items).toHaveLength(1);
    expect(result.finishTime).toBe('23:15');
  });

  it('flags overrun and invalid fields', () => {
    const over = calculateSetlistRuntime('23:55', 15, [song('one', 'Long song', '20:00', 0)]);
    expect(over.status).toBe('over');
    expect(over.marginSeconds).toBe(-300);
    expect(over.finishTime).toBe('00:15');

    const invalid = calculateSetlistRuntime('bad', 10, [song('one', '', '2:80')]);
    expect(invalid.valid).toBe(false);
    expect(invalid.errorCodes).toEqual(expect.arrayContaining(['start-time', 'slot-minutes', 'title:one', 'duration:one']));
  });

  it('formats clock times and readable durations', () => {
    expect(formatClockTime(23 * 60 + 59, 90)).toBe('00:00');
    expect(formatDuration(90)).toBe('1m 30s');
    expect(formatDuration(3661)).toBe('1h 1m 1s');
  });
});
