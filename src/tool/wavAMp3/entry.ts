import type { MusicToolEntry, ToolLocaleContent } from '../../types';
import type { AudioConverterUI } from '../../shared/AudioConverter.astro';
import { createAudioLocaleLoaders } from '../../shared/audio-content';
export type WavAMp3LocaleContent = ToolLocaleContent<AudioConverterUI>;
export const wavAMp3: MusicToolEntry<AudioConverterUI> = { id: 'wav-a-mp3', icons: { bg: 'mdi:music-box', fg: 'mdi:file-music' }, i18n: createAudioLocaleLoaders('wav', 'mp3') };
