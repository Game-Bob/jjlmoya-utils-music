import type { MusicToolEntry, ToolLocaleContent } from '../../types';
import type { AudioConverterUI } from '../../shared/AudioConverter.astro';
import { createAudioLocaleLoaders } from '../../shared/audio-content';
export type OggAWavLocaleContent = ToolLocaleContent<AudioConverterUI>;
export const oggAWav: MusicToolEntry<AudioConverterUI> = { id: 'ogg-a-wav', icons: { bg: 'mdi:music-box', fg: 'mdi:file-music' }, i18n: createAudioLocaleLoaders('ogg', 'wav') };
