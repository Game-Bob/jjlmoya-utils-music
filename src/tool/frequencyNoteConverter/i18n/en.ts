import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FrequencyNoteConverterUI } from '../ui';

const slug = 'frequency-to-note-converter';
const title = 'Frequency to Musical Note Converter';
const description =
  'Convert hertz to musical notes instantly. Identify the exact note of any frequency, measure the deviation in cents, hear the pure tone and tune synthesisers and samplers with precision.';

const faqData = [
  {
    question: 'How do I know which note 440 Hz corresponds to?',
    answer:
      '440 Hz corresponds exactly to A4, the universal tuning reference note. It is the A above middle C on the piano. This frequency has been the ISO 16 standard since 1939 and is used to tune orchestral instruments worldwide.',
  },
  {
    question: "What does it mean for a note to be '15 cents above'?",
    answer:
      'A cent is one hundredth of a semitone. Being 15 cents above a note means the frequency is slightly sharper than the exact note in equal temperament. On a synthesiser you should apply -15 cents of fine-tune to correct it.',
  },
  {
    question: 'Why are there 432 Hz and 444 Hz reference options besides 440 Hz?',
    answer:
      'Different musical contexts use different tuning references. 432 Hz is popular in certain production communities. 444 Hz is common in Renaissance early music recordings. Some European orchestras tune between 441–444 Hz for a brighter sound.',
  },
  {
    question: 'What is the interactive piano keyboard for?',
    answer:
      'The interactive piano lets you visually identify the note on the keyboard and also enter frequencies by pressing keys directly. Pressing a key gives you its exact frequency and plays a pure sine tone for comparison.',
  },
  {
    question: 'How do I use the harmonics shown by the calculator?',
    answer:
      'The harmonics (lower and upper octave) show the frequencies directly related to your note. They are useful to avoid conflicts between synthesiser layers, set resonant filters to the correct note or map drum samples to the right sampler octaves.',
  },
  {
    question: 'Why does the listen mode generate a sine tone rather than the real sound?',
    answer:
      'A sine tone is a pure wave containing only the fundamental frequency with no added harmonics. This allows a clean comparison with the real instrument without timbral colour interfering with the tuning judgement. It is the same signal an electronic needle tuner generates.',
  },
  {
    question: 'How do you calculate the frequency of a musical note?',
    answer:
      'Frequency is calculated using a logarithmic formula based on equal temperament. Starting from the reference A4 (440 Hz), each semitone up is obtained by multiplying by the twelfth root of two (~1.05946), and each octave equals doubling the frequency.',
  },
  {
    question: 'What note is the frequency 440 Hz?',
    answer:
      'The frequency of 440 Hz is exactly the note A4. It is the standard reference note used by most orchestras and contemporary musicians to tune their instruments since the mid twentieth century.',
  },
  {
    question: 'What is the difference between 440 Hz and 432 Hz tuning?',
    answer:
      '440 Hz is the international standard (ISO 16). 432 Hz is an alternative tuning that some musicians prefer for subjective sonic reasons, often used in meditation music, although there is no scientific evidence of clear biological benefits compared with 440 Hz.',
  },
];

const howToData = [
  {
    name: 'Enter the frequency',
    text: 'Type the frequency in hertz in the main input field. The result appears immediately with the note name and its scientific octave.',
  },
  {
    name: 'Read the result and the cents meter',
    text: 'The visual tuner indicator shows whether your frequency is above, below or exactly on the note. The cents value tells you how much to adjust the fine-tune on your instrument or plugin.',
  },
  {
    name: 'Use the harmonics to tune layers',
    text: 'Check the lower and upper octave frequencies to configure additional oscillators, resonant filters or percussion layers without frequency conflicts.',
  },
  {
    name: 'Adjust the A4 reference',
    text: 'Change the A4 reference to 432 Hz, 444 Hz or any custom value so that all calculations are consistent with your project context.',
  },
  {
    name: 'Listen to the reference tone',
    text: 'Press the play button to generate a pure sine tone at the entered frequency and tune your real instrument by ear.',
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

export const content: ToolLocaleContent<FrequencyNoteConverterUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  ui: {
    btnHzToNote: 'Hz to Note',
    btnNoteToHz: 'Note to Hz',
    labelRef: 'A4 Reference',
    ariaRefCustom: 'Custom A4 reference frequency',
    calInfo:
      '<strong>440 Hz</strong> is the international standard. <strong>432 Hz</strong> is often used in meditation music and solfeggio.',
    labelFrequency: 'FREQUENCY',
    ariaFreqInput: 'Enter frequency in hertz',
    ariaPlay: 'Listen to tone',
    copyNoteName: 'Copy note',
    labelOctaveDown: 'Lower octave',
    labelInputFreq: 'Input frequency',
    labelOctaveUp: 'Upper octave',
    labelNoteInput: 'NOTE NAME (e.g. A4, C#3, Do4)',
    placeholderNote: 'Type the note...',
    labelSetNote: 'SET NOTE',
    labelSetOctave: 'SET OCTAVE',
    labelSelectedNote: 'Selected note',
    copyHz: 'Copy Hz',
    btnListenNote: 'Listen to note',
    pianoLabel: 'Interactive piano — press a key to see its frequency',
    pianoAria: 'Interactive piano keyboard',
    historyTitle: 'History',
    historyClear: 'Clear',
    historyEmpty: 'No recent conversions',
    historyLoadAria: 'Load %s Hz',
    tuned: 'Tuned',
    sharp: 'sharp',
    flat: 'flat',
    unitHzExact: 'exact Hz',
    noteNames: 'C,C#,D,D#,E,F,F#,G,G#,A,A#,B',
    noteOptions: 'C (Do)|C# / Db|D (Re)|D# / Eb|E (Mi)|F (Fa)|F# / Gb|G (Sol)|G# / Ab|A (La)|A# / Bb|B (Si)',
    pianoOctave: 'Oct',
    copyFeedback: 'Copied',
  },
  seo: [
    {
      type: 'summary',
      title: 'Calculator features',
      items: [
        'Bidirectional conversion: Hz to note and note to Hz in the same tool',
        'Sample-accurate precision with adjustable A4 reference (440 / 432 / 444 Hz)',
        'Visual cents meter with sharp / flat / in-tune indicator',
        'Harmonics display (fundamental, lower octave, upper octave)',
        'Interactive piano keyboard highlighting the corresponding key',
        'Search history for quick comparison of patches and samples',
      ],
    },
    {
      type: 'title',
      text: 'What is the frequency of a musical note and why does it matter',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Every musical note is, in essence, a periodic vibration of air. When a guitar string vibrates at 440 cycles per second, it produces A4, the universal tuning reference note. This correspondence between hertz and notes is not arbitrary: it is defined by <strong>equal temperament</strong>, the predominant tuning system in Western music, which divides the octave into twelve perfectly equidistant semitones from a mathematical perspective.',
    },
    {
      type: 'paragraph',
      html: 'Knowing the exact frequency of each note is fundamental in sound synthesis, music production, audio engineering and instrument making. A synthesiser needs to know at which frequency each oscillator must vibrate to reproduce a tuned note. A mixing engineer needs to know where to cut with an equaliser to remove a hum without affecting the fundamental of an instrument.',
    },
    {
      type: 'title',
      text: 'The mathematical formula behind the conversion',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Equal temperament is based on a geometric progression. Each semitone equals multiplying the frequency by the twelfth root of two. The formula to obtain the frequency of any note from its distance in semitones relative to A4 is:',
    },
    {
      type: 'code',
      code: 'f = A4 × 2^((n - 69) / 12)',
      ariaLabel: 'Formula for converting MIDI note number to frequency in Hz',
    },
    {
      type: 'paragraph',
      html: 'Where <em>n</em> is the MIDI note number (A4 = 69) and <em>A4</em> is the reference frequency, usually 440 Hz. Inverting this formula gives the nearest note to any entered frequency, as well as the deviation in cents.',
    },
    {
      type: 'title',
      text: 'Cents: the precision unit for musicians and engineers',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A semitone is divided into 100 cents. This unit allows any tuning deviation to be described with decimal precision. A deviation of 10 cents is already perceptible to a trained ear; above 20 cents it sounds clearly out of tune to most listeners.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Perfect tuning',
          description:
            'A note is perfectly in tune when the deviation is less than 5 cents from the exact equal-temperament frequency.',
        },
        {
          title: 'Cents in DAW',
          description:
            'Samplers, synthesisers and pitch-shifting plugins use cents for fine-tune, allowing samples to be adjusted to their exact note without artefacts.',
        },
        {
          title: 'Human threshold',
          description:
            'The perception threshold for out-of-tune notes varies between 5 and 15 cents depending on the instrument, dynamics and harmonic context.',
        },
      ],
    },
    {
      type: 'title',
      text: 'The A4 reference: 440 Hz, 432 Hz and the tuning wars',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'The reference frequency A4 = 440 Hz was standardised internationally in 1939 (ISO 16). However, Baroque musicians typically work with references of 415 Hz, and there is a growing community of producers who prefer 432 Hz. Elite orchestras such as the Berlin Philharmonic regularly use 443 Hz for a brighter, more penetrating sound.',
    },
    {
      type: 'paragraph',
      html: 'In music production, the reference matters when mixing live-recorded acoustic instruments with virtual instruments. If the recorded piano was tuned to 442 Hz but the synthesiser defaults to 440 Hz, all samples will need to be corrected in cents.',
    },
    {
      type: 'tip',
      title: 'Professional sampler trick',
      html: 'When importing a sample into a sampler such as Kontakt or Decent Sampler, enter the sample frequency into this calculator. The cents value shown on the tuning meter tells you exactly the <em>fine-tune</em> value to enter in the sampler so the note plays perfectly in tune.',
    },
    {
      type: 'title',
      text: 'Reference frequency table by octave',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'This table shows the exact frequencies of each C note in equal temperament with A4 = 440 Hz, useful for configuring modular synthesiser oscillators or verifying the range of an instrument:',
    },
    {
      type: 'table',
      headers: ['Note', 'Frequency (Hz)', 'MIDI Note', 'Typical instrument range'],
      rows: [
        ['C0', '16.35', '12', 'Contrabass, organ pedal'],
        ['C1', '32.70', '24', 'Double bass, bass guitar low'],
        ['C2', '65.41', '36', 'Cello, bass guitar'],
        ['C3', '130.81', '48', 'Viola, tenor sax, guitar'],
        ['C4', '261.63', '60', 'Middle C, piano, tenor voice'],
        ['C5', '523.25', '72', 'Flute, violin, soprano voice'],
        ['C6', '1046.50', '84', 'Piccolo, high violin registers'],
        ['C7', '2093.00', '96', 'Flute harmonics, synthesiser'],
        ['C8', '4186.01', '108', '88-key keyboard, technical limit'],
      ],
    },
    {
      type: 'title',
      text: 'Harmonics and the octave as a 2:1 relationship',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'One of the most important relationships in musical acoustics is the octave: doubling the frequency produces the same note an octave higher, and halving it takes it an octave down. This 2:1 relationship is the basis of the natural harmonics of any acoustic instrument.',
    },
    {
      type: 'paragraph',
      html: 'In synthesis, knowing the direct harmonics of a frequency is key to avoiding spectral collision between oscillators in a sound layer. This calculator always shows the upper and lower octave of any entered frequency.',
    },
    {
      type: 'title',
      text: 'Real-world use cases for musicians and producers',
      level: 2,
    },
    {
      type: 'list',
      items: [
        'Tuning analogue oscillators: measure the output frequency and compare with the calculator to know how many cents to adjust the coarse or fine tune.',
        'Assigning samples to notes: a kick drum recorded at 55 Hz is an A1. This tool tells you exactly where to map it in a sampler.',
        'Detecting problematic resonances: if a room resonates at 80 Hz, the calculator confirms it is E2, guiding EQ use to attenuate it without damaging the bass.',
        'Syncing subwoofers: verifying that multiple subs reproduce the same note avoids reinforcements or cancellations from interference.',
        'Tuning bells and definite-pitch percussion: identify the fundamental to integrate them into the tonality of the piece.',
        'Resonant filter design: a high-Q bandpass filter at 349.23 Hz will peak at F4, making harmonic design decisions easier.',
      ],
    },
    {
      type: 'title',
      text: 'The piano as an immediate visual reference',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'The piano keyboard is the most intuitive visual map of the musical spectrum. Its layout of white (natural) and black (sharp/flat) keys allows patterns of scales, chords and intervals to be recognised at a glance. The interactive piano highlights the key corresponding to each frequency, connecting the number to its position on the universal keyboard.',
    },
    {
      type: 'proscons',
      items: [
        {
          pro: 'Mathematical precision: uses the ISO 16 equal-temperament formula.',
          con: 'Limitation: only applies to equal temperament, not historical tunings such as meantone.',
        },
        {
          pro: 'Free calibration: supports A4 references between 400 and 480 Hz.',
          con: 'The sine tone does not reproduce the real timbre of the instrument, only the fundamental frequency.',
        },
        {
          pro: 'Bidirectional conversion: Hz to note and note to Hz in the same tool.',
          con: 'The cents meter is relative to the nearest semitone, not just or pure temperament.',
        },
        {
          pro: 'Search history: allows quick comparison of multiple patches or samples.',
          con: 'Frequencies outside the audible range (20 Hz – 20 kHz) have limited practical use.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Essential glossary for using this tool',
      level: 2,
    },
    {
      type: 'list',
      items: [
        'Hz (Hertz): cycles per second. Measures the frequency of a sound wave.',
        'MIDI note: integer from 0 to 127 identifying each note in the MIDI standard. A4 = 69.',
        'Scientific octave: naming system that appends the octave number to the note (A4, C3).',
        'Cents: one hundredth of a semitone. Allows tuning deviations to be expressed with precision.',
        'Equal temperament: tuning system where all semitones are equal (ratio 2^(1/12)).',
        'A4: reference note. International standard: 440 Hz (ISO 16, 1975).',
        'Harmonic: integer-multiple frequencies of the fundamental produced naturally by acoustic instruments.',
        'Fine-tune: synthesiser and sampler parameter for adjusting tuning in cents.',
      ],
    },
  ],
};
