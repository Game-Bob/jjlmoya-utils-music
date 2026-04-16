import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PhaseDistanceUI } from '../ui';

const slug = 'phasendistanz-rechner';
const title = 'Phase Distance Calculator for Microphones';
const description =
  'Calculate the delay and compensation needed to align microphones. Avoid phase cancellation and comb filtering with sample-accurate precision and temperature adjustment.';

const faqData = [
  {
    question: 'What is phase cancellation in audio?',
    answer:
      'It is an acoustic phenomenon that occurs when two signals from the same source arrive at different times. The waves interfere with each other, and if they are misaligned by 180 degrees they cancel out, making the sound thin and lacking body.',
  },
  {
    question: 'Why does temperature affect the calculation?',
    answer:
      'Because sound travels through air, and the density of air changes with temperature. The warmer it is, the faster sound travels. A precise temperature adjustment allows you to calculate the exact delay between separated microphones.',
  },
  {
    question: 'Is inverting phase the same as inverting polarity?',
    answer:
      'Technically no, although the terms are used interchangeably. Polarity is an electrical change (rotating 180°), while phase is a time shift. Our tool lets you simulate both to find the point of greatest sonic coherence.',
  },
  {
    question: 'What is Comb Filtering?',
    answer:
      'It is the frequency response that results from combining a signal with a delayed version of itself. It creates a series of peaks and notches — like the teeth of a comb — that drastically alter the timbre of the instrument.',
  },
  {
    question: "What is the 3:1 rule in microphone technique?",
    answer:
      'It is a technique to minimise phase issues: when using two microphones for different sources, the distance between the microphones should be at least three times the distance from each microphone to its source.',
  },
  {
    question: 'Is it better to align microphones physically or with software?',
    answer:
      'A good physical alignment during recording is always preferable to avoid artefacts. However, digital delay in the DAW provides sample-accurate precision that is almost impossible to achieve by moving microphones by hand.',
  },
];

const howToData = [
  {
    name: 'Measure the distances',
    text: 'Measure the physical distance from the sound source (e.g. snare drum) to each of the microphones you are using.',
  },
  {
    name: 'Set the environment',
    text: 'Enter the room temperature and the sample rate of your project to get calculations based on real physics.',
  },
  {
    name: 'Analyse the graph',
    text: 'Look at the frequency response visualiser to identify possible critical cancellations in the audible range.',
  },
  {
    name: 'Apply the compensation',
    text: 'Copy the millisecond or sample value and enter it into the delay plugin on your channel to perfectly align the tracks.',
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

export const content: ToolLocaleContent<PhaseDistanceUI> = {
  slug,
  title,
  description,
  faqTitle: 'Frequently Asked Questions',
  faq: faqData,
  bibliographyTitle: 'Technical references',
  bibliography: [
    {
      name: 'SOUND REINFORCEMENT HANDBOOK',
      url: 'https://soundsfxedit.wordpress.com/wp-content/uploads/2011/12/sound-reinforcement-handbook.pdf',
    },
    {
      name: 'Microphone Phase — Sound On Sound',
      url: 'https://www.soundonsound.com/techniques/phase-demystified',
    },
  ],
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
    chartTitle: 'FREQUENCY RESPONSE (H) — COMB FILTERING',
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
      html: 'In the world of audio engineering, phase is one of the most critical concepts and, paradoxically, one of the most overlooked by beginners. When you record a sound source — such as a drum kit or guitar amplifier — with two or more microphones placed at different distances, the sound waves do not reach the capsules at the same time. This time difference, however small, causes a phenomenon known as <strong>phase shift</strong>.',
    },
    {
      type: 'title',
      text: 'The Comb Filtering phenomenon',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'When two identical signals are combined with a slight delay between them, a series of notches and peaks appear in the frequency response. Viewed on a spectrum analyser, the pattern resembles the teeth of a comb — hence the name. This effect destructively alters the natural timbre of the instrument.',
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
      html: 'Many sound engineers forget that air is a physical medium and its density changes with temperature. The speed of sound is not an immutable constant — at 20°C it travels at approximately 343 metres per second.',
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
