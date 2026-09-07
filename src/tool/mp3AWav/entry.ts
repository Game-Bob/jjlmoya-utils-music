import type { MusicToolEntry, ToolLocaleContent } from '../../types';
import type { AudioConverterUI } from '../../shared/AudioConverter.astro';
import { createAudioLocaleLoaders } from '../../shared/audio-content';
export type Mp3AWavLocaleContent = ToolLocaleContent<AudioConverterUI>;
export const mp3AWav: MusicToolEntry<AudioConverterUI> = { id: 'mp3-a-wav', icons: { bg: 'mdi:music-box', fg: 'mdi:file-music' }, i18n: createAudioLocaleLoaders('mp3', 'wav') };
