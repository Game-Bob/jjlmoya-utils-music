export const validation = {
  reviewedAt: '2026-09-07',
  methodology: 'Timing is scheduled with the Web Audio API clock and checked against the configured BPM and beat pattern.',
  sources: ['https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API'],
  referenceCases: ['40 BPM, 120 BPM and 240 BPM across 4/4 and 6/8 patterns.'],
  limitations: 'Browser scheduling, device load, audio hardware and the operating system can affect audible timing.',
} as const;
