import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MusicNoteEquivalencyUI } from '../ui';

const slug = 'notenbezeichnungen-vergleich';
const title = 'Musiknoten Äquivalenz: Lateinische, Englische und Deutsche Systeme';
const description =
  'Interaktiver Übersetzer für Musiknoten zwischen dem lateinischen (Do, Re, Mi), angelsächsischen (C, D, E) und germanischen (H) System. Inklusive Klavier-Visualisierung, Oktaven und Frequenzen (Hz).';

const faqData = [
  {
    question: 'Was ist die amerikanische oder angelsächsische Notation?',
    answer:
      'Es ist das System, das die Buchstaben A bis G verwendet, um Musiknoten darzustellen. Es ist der Standard in der modernen Musik und im Jazz. In diesem System gilt: A=La, B=Si, C=Do, D=Re, E=Mi, F=Fa und G=Sol.',
  },
  {
    question: 'Warum heißt das B in Deutschland H?',
    answer:
      'Aufgrund einer mittelalterlichen grafischen Entwicklung des „B-quadratum“. In deutschsprachigen Ländern ist der Buchstabe H dem natürlichen B vorbehalten, während der Buchstabe B ausschließlich für das B-Dur (B-flat) verwendet wird.',
  },
  {
    question: 'Was ist das „mittlere C“ in der wissenschaftlichen Notation?',
    answer:
      'Das mittlere C (die C-Taste in der Mitte eines Klaviers mit 88 Tasten) ist C4 im ANSI/Internationalen Standard. Im franko-belgischen System, das in Konservatorien weit verbreitet ist, wird es Do3 genannt.',
  },
  {
    question: 'Was bedeutet es, wenn zwei Noten enharmonisch sind?',
    answer:
      'Es bedeutet, dass sie unterschiedliche Namen haben, aber den gleichen physikalischen Klang darstellen und auf derselben Klaviertaste gespielt werden. Zum Beispiel sind Cis (C#) und Des (Db) enharmonische Noten.',
  },
  {
    question: 'Was ist die Standardfrequenz von A4?',
    answer:
      'Die internationale Standardfrequenz beträgt 440 Hz (ISO 16-Standard). Sie ist die universelle Referenz für das Stimmen von Orchestern, Instrumenten und digitalen Synthesizern.',
  },
];

const howToData = [
  {
    name: 'Wählen Sie die Oktave',
    text: 'Verwenden Sie den numerischen Wähler oben, um anzugeben, mit welcher Oktave des Klaviers Sie arbeiten möchten (Standard ist Oktave 4, die mittlere).',
  },
  {
    name: 'Drücken Sie eine Note auf dem Klavier',
    text: 'Klicken oder tippen Sie auf eine beliebige Taste des interaktiven Klaviers, um technische Informationen und Nomenklaturen anzuzeigen.',
  },
  {
    name: 'Vergleichen Sie die Systeme',
    text: 'Schauen Sie in die unteren Bedienfelder, um zu sehen, wie diese Note gleichzeitig im lateinischen, angelsächsischen und germanischen System genannt wird.',
  },
  {
    name: 'Anhören und Überprüfen',
    text: 'Drücken Sie die Schaltfläche „Anhören“, um die genaue Frequenz der ausgewählten Note zu hören und die musikalische Tonhöhe zu bestätigen.',
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
    octaveLabel: 'Wissenschaftliche Oktave (C4 = Mittleres C):',
    systemsTitle: 'Benennungssysteme',
    systemLatino: 'Lateinisch (Solfège)',
    systemAnglo: 'Angelsächsisch (Modern)',
    systemGerman: 'Germanisch (Deutsch)',
    sciNotationTitle: 'Wissenschaftliche Notation',
    systemAnsi: 'International (ANSI)',
    systemFranco: 'Franko-Belgisch',
    systemEnharmonic: 'Nützliche Enharmonik',
    techTitle: 'Technische Daten & Wellen',
    btnPlay: 'Anhören',
    btnCopy: 'Info kopieren',
    initialTitle: 'Wählen Sie eine Note auf dem Klavier',
    copyDone: 'Kopiert!',
    copyLabelNote: 'Note',
    copyLabelGerman: 'Deutsches System',
    copyLabelFreq: 'Frequenz',
    copyLabelAnsi: 'Wissenschaftliche Oktave',
    copyLabelUrl: 'URL',
    naLabel: 'N. v.',
  },
  seo: [
    {
      type: 'summary',
      title: 'Mehrsprachiger Musiknoten Übersetzer',
      items: [
        '<strong>3 Systeme gleichzeitig</strong>: Lateinisch, angelsächsisch und germanisch auf einen Blick.',
        '<strong>Interaktives Klavier</strong>: Klicken Sie auf eine beliebige Taste, um alle Entsprechungen zu sehen.',
        '<strong>Genaue Frequenzen</strong>: Jede Note zeigt ihre Hz gemäß ISO 16-Standard an.',
        '<strong>Enharmonik</strong>: Identifiziert automatisch Noten mit Doppelnamen.',
      ],
    },
    {
      type: 'title',
      text: 'Musiknoten-Äquivalenz in verschiedenen Systemen verstehen',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Musik ist eine universelle Sprache, aber ihre Schreibweise und Nomenklatur variieren je nach geografischer Region und akademischem Kontext stark. Während in lateinischsprachigen Ländern und der klassischen europäischen Tradition das lateinische System (Do, Re, Mi...) dominiert, haben die moderne Musik, der Jazz und die angelsächsische Welt das amerikanische System (C, D, E...) standardisiert. Zusätzlich gibt es eine historische Besonderheit in germanisch geprägten Ländern, wo das natürliche B als H bezeichnet wird und B-Dur (B-flat) B ist.',
    },
    {
      type: 'title',
      text: 'Die drei Hauptsysteme zur Benennung von Noten',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Lateinisches System (Solfège):</strong> Wird in Spanien, Italien, Frankreich und weiten Teilen Lateinamerikas verwendet. Basiert auf dem Johannes-Hymnus von Guido von Arezzo. Verwendet Do, Re, Mi, Fa, Sol, La, Si.',
        '<strong>Amerikanische Notation (Angelsächsisch):</strong> Der weltweite Standard für Jazz, Pop und Rock. Weist die ersten sieben Buchstaben des Alphabets (A-G) zu, beginnend mit A=La. C ist der Buchstabe für Do.',
        '<strong>Germanisches System:</strong> Wird in Deutschland, Österreich und nordeuropäischen Ländern verwendet. Der Hauptunterschied besteht darin, dass H für das natürliche B und B für das B-Dur (B-flat) verwendet wird.',
      ],
    },
    {
      type: 'title',
      text: 'Die kuriose Geschichte von B und H in der deutschen Notation',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Viele Anfänger fragen sich, warum in Deutschland die Note Si mit einem H geschrieben wird. Der Ursprung liegt in einem mittelalterlichen Kopierfehler. Im alten Buchstabensystem wurde der Buchstabe B für Si verwendet. Es gab zwei Varianten: das <em>B quadratum</em> (quadratisch, für das natürliche B) und das <em>B rotundum</em> (rund, für das erniedrigte B).',
    },
    {
      type: 'paragraph',
      html: 'Im Laufe der Zeit ähnelte die Form des <em>B quadratum</em> in deutschen Manuskripten immer mehr einem kleinen h. Diese grafische Entwicklung festigte sich im Druck und führte zur heutigen deutschen Nomenklatur: H für das natürliche B und B für das B-Dur (B-flat). Interessanterweise erlaubte diese Unterscheidung Komponisten wie J.S. Bach, ihre Werke mit dem berühmten „B-A-C-H“-Motiv zu signieren (B-flat - A - C - H).',
    },
    {
      type: 'title',
      text: 'Vergleichstabelle der natürlichen Notenäquivalenzen',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Note (Latein)', 'Notation (Anglo)', 'Deutsch (Germanisch)', 'Ursprung'],
      rows: [
        ['Do', 'C', 'C', 'Basisfrequenz'],
        ['Re', 'D', 'D', 'Zweite Note'],
        ['Mi', 'E', 'E', 'Dritte Note'],
        ['Fa', 'F', 'F', 'Vierte Note'],
        ['Sol', 'G', 'G', 'Fünfte Note'],
        ['La', 'A', 'A', 'Stimmton'],
        ['Si', 'B', 'H', 'Die große Variante'],
      ],
    },
    {
      type: 'title',
      text: 'Kreuze, Be-Zeichen und das Konzept der Enharmonik',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'In der westlichen Musik verwenden wir 12 Töne pro Oktave. Die fünf zusätzlichen Noten werden durch Vorzeichen dargestellt: das Kreuz (#) und das Be (b). Ein Kreuz erhöht die Note um einen Halbton, während ein Be sie um einen Halbton erniedrigt.',
    },
    {
      type: 'paragraph',
      html: 'Dies führt uns zur <strong>Enharmonik</strong>: zwei Noten, die unterschiedliche Namen haben, aber genau gleich klingen und dieselbe Klaviertaste belegen. Zum Beispiel sind Cis und Des enharmonisch. Unser Rechner hebt diese Entsprechungen automatisch hervor, was wichtig ist, um zu verstehen, warum eine Partitur Fis verlangen kann, während eine andere Ges in derselben Tonart verlangt.',
    },
    {
      type: 'title',
      text: 'Oktaven: Wissenschaftliche Notation vs. Franko-Belgisch',
      level: 2,
    },
    {
      type: 'list',
      items: [
        'Internationale wissenschaftliche Notation (ANSI): Das mittlere C wird C4 genannt. Es ist der Standard in Synthesizern, DAWs und Musiksoftware (MIDI).',
        'Franko-belgische Notation: In klassischen Konservatorien weit verbreitet. In diesem System ist das mittlere C Do3.',
        'Helmholtz-System: Verwendet Großbuchstaben, Kleinbuchstaben und Strichbuchstaben (C, c, c\', c\'\'). Häufiger in alter technischer Literatur und deutscher Akustik.',
      ],
    },
    {
      type: 'tip',
      title: 'Tipp für Produzenten',
      html: 'Vorsicht bei DAWs: Einige Hersteller (wie Yamaha) betrachten das mittlere C als C3, während andere (wie Roland oder FL Studio) es als C4 oder sogar C5 betrachten. Wenn Ihr Synthesizer eine Oktave daneben klingt, überprüfen Sie, welchem Standard der wissenschaftlichen Notation die Software folgt.',
    },
    {
      type: 'title',
      text: 'Frequenz in Hertz (Hz) und Standardstimmung',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Aus physikalischer Sicht entspricht jede Note einer bestimmten Frequenz, gemessen in Hertz (Schwingungen pro Sekunde). Der internationale Stimmstandard (ISO 16) legt fest, dass <strong>A4</strong> mit genau <strong>440 Hz</strong> schwingt.',
    },
    {
      type: 'list',
      items: [
        'Kalibrierung analoger Synthesizer, die unter technischem Drift leiden können.',
        'Einstellen chirurgischer Equalizer beim Abmischen, um Resonanzen bei bestimmten Noten zu eliminieren.',
        'Verständnis der Beziehung zwischen physikalischer Tonhöhe und musikalischer Wahrnehmung.',
        'Präzises Konvertieren von Samples durch Anpassung der Tonhöhe in Cent.',
      ],
    },
    {
      type: 'title',
      text: 'Praktische Anwendungsfälle für diesen Rechner',
      level: 2,
    },
    {
      type: 'proscons',
      items: [
        {
          pro: 'Sofortige Übersetzung zwischen Notationen für Session-Musiker, die Leadsheets auf Englisch lesen müssen.',
          con: 'Das System berücksichtigt keine Mikrotonalität oder nicht-westliche Stimmungen.',
        },
        {
          pro: 'Identifizierung enharmonischer Noten zur Verbesserung der musikalischen Rechtschreibung in Partituren.',
          con: 'Die Audiowiedergabe ist eine reine Welle, sie hat nicht das Timbre eines echten Instruments.',
        },
        {
          pro: 'Umrechnung von wissenschaftlicher in franko-belgische Oktave für Harmonieschüler.',
          con: 'Geht nur von der Standardstimmung A4=440Hz aus, nicht von Barockstimmungen (415 Hz).',
        },
        {
          pro: 'Intuitive Klavier-Visualisierung, die das Erlernen von Tonleitern und Akkorden erleichtert.',
          con: 'Erfordert grundlegende Theoriekenntnisse, um zu interpretieren, welches Vorzeichen im jeweiligen Kontext am besten ist.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Referenz für technisches Glossar',
      level: 2,
    },
    {
      type: 'list',
      items: [
        'Halbton: Der kleinste Abstand zwischen zwei Noten im westlichen System (z. B. von E nach F).',
        'Ganzton: Der Abstand, der zwei Halbtönen entspricht (z. B. von C nach D).',
        'Notation: System von Abkürzungen zur Darstellung von Noten und Akkorden.',
        'Hertz (Hz): Maßeinheit der Schallfrequenz.',
        'Oktave: Intervall, das zwei Noten trennt, wobei die Frequenz der einen doppelt so hoch ist wie die der anderen.',
        'Vorzeichen: Satz von Veränderungen am Anfang eines Notensystems, die die Tonalität definieren.',
      ],
    },
  ],
};
