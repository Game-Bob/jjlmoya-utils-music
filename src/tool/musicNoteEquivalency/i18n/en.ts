import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MusicNoteEquivalencyUI } from '../ui';

const slug = 'music-note-equivalency';
const title = 'Music Note Equivalency: Latin, Anglophone and German Systems';
const description =
  'Interactive translator of musical notes between Latin (Do, Re, Mi), Anglo-Saxon (C, D, E) and Germanic (H) systems. Includes piano visualizer, octaves and frequencies (Hz).';

const faqData = [
  {
    question: 'What is the American or Anglo-Saxon notation?',
    answer:
      'It is the system that uses letters A through G to represent musical notes. It is the standard in modern music and jazz. In this system, A=La, B=Si, C=Do, D=Re, E=Mi, F=Fa and G=Sol.',
  },
  {
    question: 'Why is B called H in Germany?',
    answer:
      "Due to a medieval graphical evolution of the 'B-quadratum'. In German-speaking countries, the letter H is reserved for the natural B, while the letter B is used exclusively for B-flat.",
  },
  {
    question: "What is 'middle C' in scientific notation?",
    answer:
      'Middle C (the C key in the middle of an 88-note piano) is C4 in the ANSI/International standard. In the Franco-Belgian system, widely used in conservatories, it is called Do3.',
  },
  {
    question: 'What does it mean for two notes to be enharmonic?',
    answer:
      'It means they have different names but represent the same physical sound and are played on the same piano key. For example, C-sharp (C#) and D-flat (Db) are enharmonic notes.',
  },
  {
    question: 'What is the standard frequency of A4?',
    answer:
      'The international standard frequency is 440 Hz (ISO 16 standard). It is the universal reference for tuning orchestras, instruments and digital synthesizers.',
  },
];

const howToData = [
  {
    name: 'Select the octave',
    text: 'Use the numeric selector at the top to indicate which octave of the piano you want to work with (default is octave 4, the central one).',
  },
  {
    name: 'Press a note on the piano',
    text: 'Click or tap any key on the interactive piano to see its technical information and nomenclature.',
  },
  {
    name: 'Compare the systems',
    text: 'Look at the lower panels to see what that note is called in the Latin, Anglo-Saxon and Germanic systems simultaneously.',
  },
  {
    name: 'Listen and verify',
    text: "Press the 'Listen' button to hear the exact frequency of the selected note and confirm its musical pitch.",
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

export const content: ToolLocaleContent<MusicNoteEquivalencyUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  ui: {
    octaveLabel: 'Scientific Octave (C4 = Middle C):',
    systemsTitle: 'Naming Systems',
    systemLatino: 'Latin (Solfège)',
    systemAnglo: 'Anglo-Saxon (Modern)',
    systemGerman: 'Germanic (German)',
    sciNotationTitle: 'Scientific Notation',
    systemAnsi: 'International (ANSI)',
    systemFranco: 'Franco-Belgian',
    systemEnharmonic: 'Useful Enharmonic',
    techTitle: 'Technical Data & Waves',
    btnPlay: 'Listen',
    btnCopy: 'Copy Info',
    initialTitle: 'Select a note on the piano',
    copyDone: 'Copied!',
    copyLabelNote: 'Note',
    copyLabelGerman: 'German System',
    copyLabelFreq: 'Frequency',
    copyLabelAnsi: 'Scientific Octave',
    copyLabelUrl: 'URL',
    naLabel: 'N/A',
  },
  seo: [
    {
      type: 'summary',
      title: 'Multilingual Musical Note Translator',
      items: [
        '<strong>3 systems simultaneously</strong>: Latin, Anglo-Saxon and Germanic at a glance.',
        '<strong>Interactive piano</strong>: Click any key to see all its equivalencies.',
        '<strong>Exact frequencies</strong>: Each note shows its Hz per ISO 16 standard.',
        '<strong>Enharmonics</strong>: Automatically identifies notes with dual names.',
      ],
    },
    {
      type: 'title',
      text: 'Understanding musical note equivalency across different systems',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Music is a universal language, but its writing and nomenclature vary deeply depending on the geographic region and academic context. While Latin-speaking countries and classical European tradition predominate with the Latin system (Do, Re, Mi...), modern music, jazz and the Anglo-Saxon world have standardized the American notation (C, D, E...). Additionally, there is a historical particularity in Germanic-influenced countries where the natural B is called H and B-flat is B.',
    },
    {
      type: 'title',
      text: 'The three main musical naming systems',
      level: 2,
    },
    {
      type: 'list',
      items: [
        "<strong>Latin System (Solfège):</strong> Used in Spain, Italy, France and much of Latin America. Based on the hymn to St. John the Baptist by Guido d'Arezzo. Uses Do, Re, Mi, Fa, Sol, La, Si.",
        '<strong>American Notation (Anglo-Saxon):</strong> The world standard for jazz, pop and rock. Assigns the first seven letters of the alphabet (A-G) starting from A=La. C is the letter for Do.',
        '<strong>Germanic System:</strong> Used in Germany, Austria and northern European countries. The key difference is using H for natural B and B for B-flat.',
      ],
    },
    {
      type: 'title',
      text: 'The curious history of B and H in German notation',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Many beginners wonder why in Germany the note Si is written with an H. The origin lies in a medieval copyist error. In the old letter system, the letter B was used for Si. There were two variants: the <em>B quadratum</em> (square, for natural B) and the <em>B rotundum</em> (round, for B-flat).",
    },
    {
      type: 'paragraph',
      html: 'Over time, the shape of the <em>B quadratum</em> increasingly resembled a lowercase H in German manuscripts. This graphical evolution was consolidated in print and gave rise to the current German nomenclature: H for natural B and B for B-flat. Interestingly, this distinction allowed composers like J.S. Bach to sign their works with the famous "B-A-C-H" motif (B-flat - A - C - B natural).',
    },
    {
      type: 'title',
      text: 'Comparative table of natural note equivalencies',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Note (Latin)', 'Notation (Anglo)', 'German (Germanic)', 'Origin'],
      rows: [
        ['Do', 'C', 'C', 'Base frequency'],
        ['Re', 'D', 'D', 'Second note'],
        ['Mi', 'E', 'E', 'Third note'],
        ['Fa', 'F', 'F', 'Fourth note'],
        ['Sol', 'G', 'G', 'Fifth note'],
        ['La', 'A', 'A', 'Tuning note'],
        ['Si', 'B', 'H', 'The great variant'],
      ],
    },
    {
      type: 'title',
      text: 'Sharps, Flats and the concept of Enharmony',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'In Western music we use 12 sounds per octave. The five additional notes are represented by alterations: the sharp (#) and the flat (b). A sharp raises the note a semitone, while a flat lowers it a semitone.',
    },
    {
      type: 'paragraph',
      html: 'This leads us to <strong>Enharmony</strong>: two notes that have different names but sound exactly the same and occupy the same piano key. For example, C# and Db are enharmonic. Our calculator automatically highlights these equivalencies, which is vital for understanding why a score might call for F# while another calls for Gb in the same key.',
    },
    {
      type: 'title',
      text: 'Octaves: Scientific Notation vs Franco-Belgian',
      level: 2,
    },
    {
      type: 'list',
      items: [
        "International Scientific Notation (ANSI): Middle C is called C4. It's the standard in synthesizers, DAWs and music software (MIDI).",
        'Franco-Belgian Notation: Widely used in classical conservatories. In this system, middle C is Do3.',
        "Helmholtz System: Uses uppercase, lowercase and prime letters (C, c, c', c''). More common in old technical literature and German acoustics.",
      ],
    },
    {
      type: 'tip',
      title: 'Tip for producers',
      html: 'Watch out with DAWs: some manufacturers (like Yamaha) consider middle C to be C3, while others (like Roland or FL Studio) consider it C4 or even C5. If your synthesizer sounds an octave off, verify which scientific notation standard the software is following.',
    },
    {
      type: 'title',
      text: 'Frequency in Hertz (Hz) and standard tuning',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'From a physical perspective, each note corresponds to a specific frequency measured in hertz (cycles per second). The international tuning standard (ISO 16) establishes that <strong>A4</strong> vibrates at exactly <strong>440 Hz</strong>.',
    },
    {
      type: 'list',
      items: [
        'Calibrating analog synthesizers that may suffer technical drift.',
        'Adjusting surgical equalizers in mixing to eliminate resonances on specific notes.',
        'Understanding the relationship between physical pitch and musical perception.',
        'Converting samples precisely by adjusting pitch in cents.',
      ],
    },
    {
      type: 'title',
      text: 'Practical use cases for this calculator',
      level: 2,
    },
    {
      type: 'proscons',
      items: [
        {
          pro: 'Instant translation between notations for session musicians who must read charts in English.',
          con: 'The system does not contemplate microtonalities or non-Western tunings.',
        },
        {
          pro: 'Identification of enharmonic notes to improve musical spelling in scores.',
          con: 'Audio playback is a pure wave, it does not have the timbre of a real instrument.',
        },
        {
          pro: 'Scientific to Franco-Belgian octave conversion for harmony students.',
          con: 'Only assumes standard A4=440Hz tuning, not Baroque tunings (415 Hz).',
        },
        {
          pro: 'Intuitive piano visualization that facilitates learning scales and chords.',
          con: 'Requires basic theory knowledge to interpret which alteration is best in each context.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Technical glossary reference',
      level: 2,
    },
    {
      type: 'list',
      items: [
        'Semitone: The minimum distance between two notes in the Western system (e.g., from E to F).',
        'Tone: The distance equivalent to two semitones (e.g., from C to D).',
        'Notation: System of abbreviations to represent notes and chords.',
        'Hertz (Hz): Unit of measurement of sound frequency.',
        'Octave: Interval separating two notes where the frequency of one is double the other.',
        'Key signature: Set of alterations at the beginning of a staff that define the tonality.',
      ],
    },
  ],
};
