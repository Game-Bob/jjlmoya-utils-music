import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { AudioStorageCalculatorUI } from '../ui';

const slug = 'audio-storage-calculator';
const title = 'Audio Storage Calculator: WAV, FLAC and MP3 File Size';
const description =
  'Estimate the disk space needed for your audio recordings in WAV, FLAC and MP3 based on sample rate and bit depth.';

const faqData = [
  {
    question: 'How much space does one hour of audio at 44.1 kHz 16-bit take?',
    answer:
      'In stereo (CD quality), one hour of audio takes approximately 635 MB of disk space uncompressed (WAV/AIFF).',
  },
  {
    question: 'Why does WAV format take up so much space?',
    answer:
      "WAV is an uncompressed 'lossless' format, meaning it stores every audio sample individually to preserve maximum fidelity without reducing data.",
  },
  {
    question: 'What is better for saving space: FLAC or MP3?',
    answer:
      'FLAC saves up to 50% of space without losing quality (lossless compression). MP3 saves up to 80-90% but removes imperceptible audio information (lossy compression).',
  },
  {
    question: 'How to calculate the space needed for a 2-hour podcast?',
    answer:
      'If you record in Mono at 48 kHz / 24-bit, you will need about 988 MB. The calculator lets you adjust these parameters precisely for your equipment.',
  },
];

const howToData = [
  {
    name: 'Configure the audio',
    text: 'Choose the sample rate (kHz), bit depth and number of channels.',
  },
  {
    name: 'Enter the duration',
    text: 'Enter the hours, minutes and seconds you estimate the recording will last.',
  },
  {
    name: 'Analyze results',
    text: 'Observe the resulting size in MB or GB and compare it with different formats like FLAC or MP3.',
  },
  {
    name: 'Evaluate capacity',
    text: 'Check what percentage of your SD card or hard drive storage the recording will occupy.',
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema: WithContext<HowToThing> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howToData.map((step, i) => ({
    '@type': 'HowToStep',
    position: i + 1,
    name: step.name,
    text: step.text,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
};

export const content: ToolLocaleContent<AudioStorageCalculatorUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  ui: {
    labelConfig: 'Audio Configuration',
    labelHz: 'Sample Rate (kHz)',
    labelBits: 'Bit Depth',
    labelChannels: 'Channels',
    labelDuration: 'Recording Duration',
    labelHours: 'Hours',
    labelMinutes: 'Minutes',
    labelSeconds: 'Seconds',
    labelCapacity: 'Available Storage (in GB)',
    toggleLabelSpace: 'Calculate how much I can record with my free space',
    labelComparison: 'Format & Storage Comparison',
    thFormat: 'Format',
    thQuality: 'Quality',
    thSize: 'Estimated Size',
    qualityWav: 'Uncompressed (Lossless)',
    qualityFlac: 'Lossless Compression',
    qualityMp3High: 'High Quality (Lossy)',
    qualityMp3Std: 'Standard Quality / Voice',
    labelDevices: 'Percentage used on common devices',
    device32: '32GB SD Card',
    device128: '128GB Storage',
    device1tb: '1TB Hard Drive',
    btnCopy: 'Copy Summary',
    optHz44100: '44.1 kHz (CD)',
    optHz48000: '48 kHz (Video Standard)',
    optHz88200: '88.2 kHz',
    optHz96000: '96 kHz (High Resolution)',
    optHz192000: '192 kHz (Ultra HD)',
    optBits16: '16-bit (CD / Standard)',
    optBits24: '24-bit (Producers / Film)',
    optBits32: '32-bit (Floating Point)',
    optCh1: 'Mono (1 channel)',
    optCh2: 'Stereo (2 channels)',
    optCh6: '5.1 Surround (6 channels)',
    optCh8: '7.1 Surround (8 channels)',
    labelDurationSet: 'Configured duration: {time}',
    labelRecordingPossible: 'Recording possible with {gb} GB configured',
    toggleLabelTime: 'Back to duration calculation',
    labelSpaceAvailable: 'Available Space',
    copyDone: 'Summary Copied!',
    summarySpace:
      'The {t} recording at {bits}-bit/{hz} in {channels} mode will take approximately {result}.',
    summaryTime:
      'With {space} GB available, you can record up to {result} of audio at {bits}-bit/{hz} {channels}.',
  },
  seo: [
    {
      type: 'summary',
      title: 'Digital Sound Storage Calculator',
      items: [
        '<strong>WAV to MP3</strong>: Calculate the size of files with and without compression.',
        '<strong>Audio Resolution</strong>: Adjust frequency (kHz) and bits (16/24/32).',
        '<strong>Reverse calculation</strong>: How much can I record with my remaining space?',
        '<strong>Professional Formats</strong>: Estimation for FLAC and 192kHz mastering.',
      ],
    },
    { type: 'title', text: 'How is the size of an audio recording calculated?', level: 2 },
    {
      type: 'paragraph',
      html: 'The size of an uncompressed digital audio file (such as WAV or AIFF) depends on three fundamental technical factors: <strong>Sample Rate</strong> — how many times per second the sound wave is "measured" (e.g. 44.1 kHz or 48 kHz); <strong>Bit Depth</strong> — the resolution of each measurement, with greater dynamic range and lower noise at higher bits; and <strong>Channels</strong> — whether the recording is Mono (1), Stereo (2) or Multichannel (Surround). The standard mathematical formula is the <strong>Bitrate</strong>; multiplied by the duration in seconds, it gives the total raw file size.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'CD Quality',
          description:
            '16-bit / 44.1 kHz. Takes approximately 10.1 MB per minute in stereo. The historic standard of the music industry.',
        },
        {
          title: 'Pro Recording',
          description:
            '24-bit / 48 kHz. The standard for video and film. Takes about 16.5 MB per minute. More headroom for mixing.',
        },
        {
          title: 'High Resolution',
          description:
            '24-bit / 96 kHz. Used in mastering. Doubles the standard recording size up to 33 MB per minute.',
        },
      ],
    },
    { type: 'title', text: 'Why does 24-bit audio take 50% more space than 16-bit?', level: 2 },
    {
      type: 'paragraph',
      html: 'Each audio sample in 16-bit uses 2 bytes (16 ÷ 8) to store the amplitude. Audio at 24-bit uses 3 bytes per sample. This means that, for the same sample rate, a 24-bit file will be exactly 50% larger than a 16-bit file. If a one-hour recording at 16-bit/44.1kHz takes 635 MB, the same recording at 24-bit/44.1kHz will rise to 953 MB.',
    },
    {
      type: 'tip',
      title: 'Is the extra space worth it?',
      html: 'Despite taking more space, 24-bit audio offers a dynamic range of 144 dB versus 96 dB for 16-bit. This provides a much lower "noise floor", allowing weaker signals to be recorded without background noise becoming an issue — vital during professional mixing and mastering.',
    },
    { type: 'title', text: 'WAV vs FLAC vs MP3: The impact on disk', level: 2 },
    {
      type: 'paragraph',
      html: '<strong>WAV / AIFF</strong> are uncompressed formats that preserve every bit of the original recording but are the heaviest. <strong>FLAC</strong> applies lossless compression, reducing the original size by 40-60% without sacrificing quality. <strong>MP3 / AAC</strong> apply lossy compression, removing imperceptible frequencies; an MP3 at 320 kbps takes approximately 22% of the original WAV.',
    },
    {
      type: 'table',
      headers: ['Quality', 'Frequency', 'Bits', 'MB per Minute (Stereo)'],
      rows: [
        ['Phone Call', '8 kHz', '8-bit', '0.94 MB'],
        ['FM Radio', '32 kHz', '16-bit', '7.32 MB'],
        ['Original CD', '44.1 kHz', '16-bit', '10.09 MB'],
        ['Video Studio', '48 kHz', '24-bit', '16.48 MB'],
        ['High Fidelity', '96 kHz', '24-bit', '32.96 MB'],
      ],
    },
    { type: 'title', text: 'Calculation formula for technicians', level: 2 },
    {
      type: 'paragraph',
      html: 'If you need to perform the calculation manually or implement it in your own software, this is the logic our calculator follows:',
    },
    {
      type: 'code',
      ariaLabel: 'Audio storage calculation logic',
      code: `const sampleRate = 48000;\nconst bitDepth = 24;\nconst channels = 2;\nconst seconds = 3600;\n\nconst bitsPerSecond = sampleRate * bitDepth * channels;\nconst totalBytes = (bitsPerSecond * seconds) / 8;`,
    },
    { type: 'title', text: 'Use cases for this tool', level: 2 },
    {
      type: 'list',
      items: [
        'Podcasting: Avoid running out of space on your portable recorder during a long interview.',
        'Music Studio: Calculate how many GB of free space you need before opening a 40-track session at 96kHz.',
        'Digital Sound Engineering: Verify that the transfer bitrate is compatible with your hardware.',
        'Film Post-production: Estimate the size of 5.1 multichannel takes for network file delivery.',
        'Archiving: Determine the capacity needed to digitize a collection of analog tapes at Master quality.',
      ],
    },
  ],
};
