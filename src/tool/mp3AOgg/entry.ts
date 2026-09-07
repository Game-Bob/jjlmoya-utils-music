import type { MusicToolEntry, ToolLocaleContent } from '../../types';
import type { AudioConverterUI } from '../../shared/AudioConverter.astro';
import { createAudioLocaleLoaders } from '../../shared/audio-content';

export type Mp3AOggLocaleContent = ToolLocaleContent<AudioConverterUI>;
export const mp3AOgg: MusicToolEntry<AudioConverterUI> = {
  id: 'mp3-a-ogg', icons: { bg: 'mdi:music-box', fg: 'mdi:file-music' }, i18n: createAudioLocaleLoaders('mp3', 'ogg'),
};
