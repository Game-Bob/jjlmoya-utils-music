import type { MusicToolEntry, ToolLocaleContent } from '../../types';
import type { AudioConverterUI } from '../../shared/AudioConverter.astro';
import { createAudioLocaleLoaders } from '../../shared/audio-content';
export type OggAMp3LocaleContent = ToolLocaleContent<AudioConverterUI>;
export const oggAMp3: MusicToolEntry<AudioConverterUI> = { id: 'ogg-a-mp3', icons: { bg: 'mdi:music-box', fg: 'mdi:file-music' }, i18n: createAudioLocaleLoaders('ogg', 'mp3') };
