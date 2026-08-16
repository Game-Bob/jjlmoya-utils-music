import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PhaseDistanceUI } from '../ui';

const slug = 'kalkulator-jarak-fase';
const title = 'Kalkulator Jarak Fase untuk Mikrofon';
const description =
  'Hitung penundaan dan kompensasi untuk menyelaraskan mikrofon. Hindari pembatalan fase dan penyaringan sisir dengan presisi hingga sampel serta penyesuaian suhu.';

const faqData = [
  { question: 'Apa itu pembatalan fase dalam audio?', answer: 'Pembatalan fase terjadi ketika dua sinyal dari sumber yang sama tiba pada waktu berbeda. Gelombang yang tidak selaras dapat membuat suara tipis dan kehilangan isi.' },
  { question: 'Mengapa suhu memengaruhi perhitungan?', answer: 'Suara merambat melalui udara dan kecepatannya berubah mengikuti suhu. Penyesuaian suhu membantu menghitung jeda antara mikrofon dengan tepat.' },
  { question: 'Apakah membalik fase sama dengan membalik polaritas?', answer: 'Tidak. Polaritas adalah perubahan listrik sebesar 180 derajat, sedangkan fase adalah pergeseran waktu. Alat ini dapat mensimulasikan keduanya.' },
  { question: 'Apa itu penyaringan sisir?', answer: 'Penyaringan sisir muncul saat sinyal digabungkan dengan salinan yang tertunda. Respons frekuensinya membentuk puncak dan lembah seperti gigi sisir.' },
  { question: 'Apa aturan 3:1 dalam teknik mikrofon?', answer: 'Saat dua mikrofon dipakai untuk sumber berbeda, jarak antarmikrofon sebaiknya setidaknya tiga kali jarak setiap mikrofon ke sumbernya.' },
  { question: 'Lebih baik menyelaraskan mikrofon secara fisik atau dengan perangkat lunak?', answer: 'Penyelarasan fisik saat merekam adalah pilihan utama. Penundaan digital pada DAW memberi presisi tingkat sampel yang sulit dicapai secara manual.' },
];

const howToData = [
  { name: 'Ukur jaraknya', text: 'Ukur jarak dari sumber suara, misalnya snare, ke setiap mikrofon.' },
  { name: 'Atur lingkungan', text: 'Masukkan suhu ruangan dan laju sampel proyek agar perhitungannya mengikuti kondisi fisik.' },
  { name: 'Analisis grafik', text: 'Amati respons frekuensi untuk menemukan pembatalan kritis pada rentang yang terdengar.' },
  { name: 'Terapkan kompensasi', text: 'Salin nilai milidetik atau sampel ke plugin penundaan untuk menyelaraskan trek.' },
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

export const content: ToolLocaleContent<PhaseDistanceUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  ui: {
    labelTemp: 'Temperature (°C) / Sound',
    btnAuto: 'Auto',
    labelSampleRate: 'Sample Rate (kHz)',
    labelUnits: 'Unit System',
    optMetric: 'Metric (m/cm)',
    optImperial: 'Imperial (ft/in)',
    labelDistA: 'Microphone A Distance',
    labelDistB: 'Microphone B Distance',
    labelPresets: 'Quick Presets',
    presetCoincident: 'Coincident (XY)',
    presetSnare: 'Snare',
    presetAmbient: 'Ambient',
    btnInvert: 'Invert Phase (Φ)',
    labelGain: 'Relative Gain Mic B:',
    btnCopy: 'Copy Samples',
    labelDelay: 'Required Delay',
    unitMs: 'milliseconds (ms)',
    labelCompensation: 'Compensation',
    unitSamples: 'Samples',
    labelPhaseStatus: 'Phase Status',
    textLoading: 'Loading...',
    statusInPhase: 'IN PHASE',
    statusInPhaseDesc: 'Signals perfectly aligned.',
    statusCritical: 'CRITICAL CANCELLATION',
    statusCriticalDesc: 'Significant comb filtering in low/mid range.',
    statusOffAxis: 'OFF AXIS',
    statusOffAxisDesc: 'Slight phase shift. Texture modified.',
    warningCritical: '(!) POSSIBLE CRITICAL CANCELLATION',
    labelSoundSpeed: 'Speed of Sound',
    labelDistDiff: 'Distance Difference',
    labelNullFreq: 'First Nulls',
    textNone: 'None',
    chartTitle: 'FREQUENCY RESPONSE (H) - COMB FILTERING',
    promptSoundSpeed: 'Speed of Sound (m/s):',
    copyFeedback: 'Copied!',
  },
  seo: [
    {
      type: 'summary',
      title: 'Calculator features',
      items: [
        'Exact physical calculation with temperature adjustment for the speed of sound',
        'Result in milliseconds and samples for DAW compensation',
        'Canvas visualiser of comb filtering across the full audible spectrum',
        'Microphone presets (XY coincident, snare, ambient)',
        'Phase inversion simulation and relative gain control',
        'Support for metric and imperial units',
      ],
    },
    {
      type: 'title',
      text: 'What is phase cancellation and why does it ruin your mixes?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'In the world of audio engineering, phase is one of the most critical concepts and, paradoxically, one of the most overlooked by beginners. When you record a sound source - such as a drum kit or guitar amplifier - with two or more microphones placed at different distances, the sound waves do not reach the capsules at the same time. This time difference, however small, causes a phenomenon known as <strong>phase shift</strong>.',
    },
    {
      type: 'title',
      text: 'The Comb Filtering phenomenon',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'When two identical signals are combined with a slight delay between them, a series of notches and peaks appear in the frequency response. Viewed on a spectrum analyser, the pattern resembles the teeth of a comb - hence the name. This effect destructively alters the natural timbre of the instrument.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Impact on Low End',
          description:
            'Phase cancellation is most devastating in the low frequencies, where the body of the sound disappears entirely.',
        },
        {
          title: 'Metallic Texture',
          description:
            "Comb filtering adds an artificial coloration that sounds 'hollow' or overly processed.",
        },
      ],
    },
    {
      type: 'title',
      text: 'The influence of temperature on the calculation',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Many sound engineers forget that air is a physical medium and its density changes with temperature. The speed of sound is not an immutable constant - at 20°C it travels at approximately 343 metres per second.',
    },
    {
      type: 'code',
      code: 'v = 331.3 + (0.606 × T)',
      ariaLabel: 'Formula for the speed of sound as a function of temperature',
    },
    {
      type: 'tip',
      title: 'Surgical Compensation',
      html: 'A few degrees of difference can shift the cancellation points by several hertz. Using our calculator with the actual temperature of your studio guarantees perfect alignment in the DAW.',
    },
    {
      type: 'title',
      text: 'Critical recording scenarios',
      level: 2,
    },
    {
      type: 'list',
      items: [
        'Snare drum (Top & Bottom): Align both heads temporally to maximise punch.',
        'Overheads and close mics: Delay the close mics to match the phase of the overhead mics.',
        'Guitars with multiple mics: Blend a dynamic and a ribbon without losing low-mids.',
        'Bass DI and mic: Sync the direct signal with the amp mic for a massive sound.',
      ],
    },
    {
      type: 'title',
      text: 'Physical Alignment vs. Digital Processing',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Although our tool gives you the values to correct phase in your DAW after recording, we always recommend attempting the best possible physical alignment in the studio. Moving a microphone a few millimetres can be more effective than any digital processing.',
    },
    {
      type: 'stats',
      items: [
        { label: 'Speed @ 20°C', value: '343.2 m/s' },
        { label: 'Milliseconds/cm', value: '0.029 ms' },
        { label: 'Samples @ 48kHz', value: '1.4 per cm' },
      ],
    },
    {
      type: 'title',
      text: 'Reference table: Distance vs. First Null',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Difference (cm)', 'Delay (ms)', '1st Null (Hz)', 'Affects...'],
      rows: [
        ['1 cm', '0.029', '17160', 'Extreme high end'],
        ['5 cm', '0.146', '3432', 'Upper mids (Presence)'],
        ['10 cm', '0.291', '1716', 'Mids (Presence)'],
        ['30 cm', '0.874', '572', 'Low-mids (Body)'],
        ['1 metre', '2.914', '172', 'Low end (Fundamental)'],
      ],
    },
    {
      type: 'title',
      text: 'Pros and cons of correction methods',
      level: 2,
    },
    {
      type: 'proscons',
      items: [
        {
          pro: 'Physical alignment: Less degradation of the original signal.',
          con: 'Physical alignment: Difficult to adjust with microscopic accuracy.',
        },
        {
          pro: 'Digital correction: Absolute precision at the sample level.',
          con: 'Digital correction: Can create pre-echo if applied incorrectly.',
        },
        {
          pro: 'Polarity inversion: Instant fix for 180° cancellations.',
          con: 'Polarity inversion: Does not fix intermediate phase shifts.',
        },
        {
          pro: 'Time compensation: Recovers lost impact and punch.',
          con: 'Time compensation: Requires precise measurement of each mic.',
        },
      ],
    },
    {
      type: 'tip',
      title: 'How to detect phase problems by ear?',
      html: 'Press the "Invert Phase" button (Φ). If activating it makes the sound gain body and low end, your microphones were out of phase. If the sound "disappears" or becomes thinner, they were correctly aligned.',
    },
    {
      type: 'title',
      text: 'Mono Compatibility and Stereo Perception',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'In stereo recordings, the phase relationship defines the stability of the sound image. If there are serious inconsistencies, the sound could disappear entirely when the mix is played back on a mono system. Our calculator helps you predict which frequencies will suffer most when the channels are summed.',
    },
  ],
};
