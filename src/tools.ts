import type { ToolDefinition } from './types';
import { METRONOME_TOOL } from './tool/metronome';
import { BPM_CALCULATOR_TOOL } from './tool/bpmCalculator';
import { PHASE_DISTANCE_TOOL } from './tool/phaseDistance';
import { FREQUENCY_NOTE_CONVERTER_TOOL } from './tool/frequencyNoteConverter';
import { AUDIO_STORAGE_CALCULATOR_TOOL } from './tool/audioStorageCalculator';
import { MUSIC_NOTE_EQUIVALENCY_TOOL } from './tool/musicNoteEquivalency';

export const ALL_TOOLS: ToolDefinition[] = [METRONOME_TOOL, BPM_CALCULATOR_TOOL, PHASE_DISTANCE_TOOL, FREQUENCY_NOTE_CONVERTER_TOOL, AUDIO_STORAGE_CALCULATOR_TOOL, MUSIC_NOTE_EQUIVALENCY_TOOL];


export const ALL_ENTRIES = ALL_TOOLS.map(t => t.entry);
