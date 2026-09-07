import type { MusicToolEntry, ToolLocaleContent } from '../../types';
import type { AudioConverterUI } from '../../shared/AudioConverter.astro';
import { createAudioLocaleLoaders } from '../../shared/audio-content';
export type WavAOggLocaleContent = ToolLocaleContent<AudioConverterUI>;
export const wavAOgg: MusicToolEntry<AudioConverterUI> = { id: 'wav-a-ogg', icons: { bg: 'mdi:music-box', fg: 'mdi:file-music' }, i18n: createAudioLocaleLoaders('wav', 'ogg') };
