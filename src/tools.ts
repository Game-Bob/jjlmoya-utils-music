export { ALL_ENTRIES } from './entries';
import type { ToolDefinition } from './types';
import { METRONOME_TOOL } from './tool/metronome';
import { BPM_CALCULATOR_TOOL } from './tool/bpmCalculator';
import { PHASE_DISTANCE_TOOL } from './tool/phaseDistance';
import { FREQUENCY_NOTE_CONVERTER_TOOL } from './tool/frequencyNoteConverter';
import { AUDIO_STORAGE_CALCULATOR_TOOL } from './tool/audioStorageCalculator';
import { MUSIC_NOTE_EQUIVALENCY_TOOL } from './tool/musicNoteEquivalency';
import { GUITAR_STRING_TENSION_CALCULATOR_TOOL } from './tool/guitarStringTensionCalculator';
import { SETLIST_RUNTIME_CALCULATOR_TOOL } from './tool/setlistRuntimeCalculator';
import { MP3_A_OGG_TOOL } from './tool/mp3AOgg';
import { WAV_A_OGG_TOOL } from './tool/wavAOgg';
import { OGG_A_MP3_TOOL } from './tool/oggAMp3';
import { OGG_A_WAV_TOOL } from './tool/oggAWav';
import { MP3_A_WAV_TOOL } from './tool/mp3AWav';
import { WAV_A_MP3_TOOL } from './tool/wavAMp3';

export const ALL_TOOLS: ToolDefinition[] = [METRONOME_TOOL, BPM_CALCULATOR_TOOL, PHASE_DISTANCE_TOOL, FREQUENCY_NOTE_CONVERTER_TOOL, AUDIO_STORAGE_CALCULATOR_TOOL, MUSIC_NOTE_EQUIVALENCY_TOOL, GUITAR_STRING_TENSION_CALCULATOR_TOOL, SETLIST_RUNTIME_CALCULATOR_TOOL, MP3_A_OGG_TOOL, WAV_A_OGG_TOOL, OGG_A_MP3_TOOL, OGG_A_WAV_TOOL, MP3_A_WAV_TOOL, WAV_A_MP3_TOOL];
