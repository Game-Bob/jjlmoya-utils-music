import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PhaseDistanceUI } from '../ui';

const slug = 'fase-afstand-calculator';
const title = 'Phase Distance Calculator for Microphones';
const description =
  'Calculate the delay and compensation needed to align microphones. Avoid phase cancellation and comb filtering with sample-accurate precision and temperature adjustment.';

const faqData = [
  { question: 'Wat is fase-annulering in audio?', answer: 'Fase-annulering ontstaat wanneer twee signalen van dezelfde bron op verschillende momenten aankomen. De golven beïnvloeden elkaar en maken het geluid dun.' },
  { question: 'Waarom beïnvloedt temperatuur de berekening?', answer: 'Geluid beweegt door de lucht en de snelheid verandert met de temperatuur. Een correctie maakt de vertraging tussen microfoons nauwkeuriger.' },
  { question: 'Is fase omkeren hetzelfde als polariteit omkeren?', answer: 'Technisch niet. Polariteit is een elektrische omkering van 180 graden; fase is een tijdverschuiving. De tool kan beide simuleren.' },
  { question: 'Wat is kamfiltering?', answer: 'Kamfiltering ontstaat wanneer een signaal wordt gecombineerd met een vertraagde kopie. De frequentierespons krijgt pieken en dalen.' },
  { question: 'Wat is de 3:1-regel?', answer: 'Bij twee microfoons voor verschillende bronnen hoort de afstand ertussen minstens drie keer de afstand tot de bron te zijn.' },
  { question: 'Is fysieke of softwarematige uitlijning beter?', answer: 'Fysieke uitlijning heeft de voorkeur. Digitale vertraging in de DAW biedt echter sample-nauwkeurigheid die handmatig moeilijk te bereiken is.' },
];

const howToData = [
  { name: 'Meet de afstanden', text: 'Meet de afstand van de geluidsbron, bijvoorbeeld een snare, tot elke microfoon.' },
  { name: 'Stel de omgeving in', text: 'Voer kamertemperatuur en samplefrequentie in voor een berekening op basis van de echte fysica.' },
  { name: 'Analyseer de grafiek', text: 'Bekijk de frequentierespons om kritieke annuleringen in het hoorbare bereik te vinden.' },
  { name: 'Pas de compensatie toe', text: 'Kopieer de waarde in milliseconden of samples naar de delayplug-in om de tracks uit te lijnen.' },
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
