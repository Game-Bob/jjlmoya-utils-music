import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MusicNoteEquivalencyUI } from '../ui';

const slug = 'muzieknoot-equivalentie';
const title = 'Muzieknoot Equivalentie: Latijnse, Angelsaksische en Duitse Systemen';
const description =
  'Interactieve vertaler van muzieknoten tussen de Latijnse (Do, Re, Mi), Angelsaksische (C, D, E) en Germaanse (H) systemen. Inclusief piano-visualisatie, octaven en frequenties (Hz).';

const faqData = [
  {
    question: 'Wat is de Amerikaanse of Angelsaksische notatie?',
    answer:
      'Het is het systeem dat letters A tot G gebruikt om muzieknoten weer te geven. Het is de standaard in moderne muziek en jazz. In dit systeem is A=La, B=Si, C=Do, D=Re, E=Mi, F=Fa en G=Sol.',
  },
  {
    question: 'Waarom wordt B in Duitsland H genoemd?',
    answer:
      "Vanwege een middeleeuwse grafische evolutie van de 'B-quadratum'. In Duitstalige landen is de letter H gereserveerd voor de natuurlijke B, terwijl de letter B uitsluitend wordt gebruikt voor Bes (B-flat).",
  },
  {
    question: "Wat is 'centrale C' in wetenschappelijke notatie?",
    answer:
      'Centrale C (de C-toets in het midden van een piano met 88 toetsen) is C4 in de ANSI/Internationale standaard. In het Frans-Belgische systeem, dat veel in conservatoria wordt gebruikt, wordt het Do3 genoemd.',
  },
  {
    question: 'Wat betekent het als twee noten enharmonisch zijn?',
    answer:
      'Het betekent dat ze verschillende namen hebben, maar hetzelfde fysieke geluid vertegenwoordigen en op dezelfde pianotoets worden gespeeld. C-kruis (C#) en Des (Db) zijn bijvoorbeeld enharmonische noten.',
  },
  {
    question: 'Wat is de standaardfrequentie van A4?',
    answer:
      'De internationale standaardfrequentie is 440 Hz (ISO 16-standaard). Het is de universele referentie voor het stemmen van orkesten, instrumenten en digitale synthesizers.',
  },
];

const howToData = [
  {
    name: 'Selecteer het octaaf',
    text: 'Gebruik de numerieke kiezer bovenaan om aan te geven met welk octaaf van de piano je wilt werken (standaard is octaaf 4, de centrale).',
  },
  {
    name: 'Druk op een noot op de piano',
    text: 'Klik of tik op een willekeurige toets op de interactieve piano om de technische informatie en nomenclatuur te zien.',
  },
  {
    name: 'Vergelijk de systemen',
    text: 'Kijk naar de onderste panelen om te zien hoe die noot tegelijkertijd in de Latijnse, Angelsaksische en Germaanse systemen wordt genoemd.',
  },
  {
    name: 'Luister en verifieer',
    text: "Druk op de knop 'Luisteren' om de exacte frequentie van de geselecteerde noot te horen en de muzikale toonhoogte te bevestigen.",
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
  faqTitle: 'Veelgestelde Vragen',
  faq: faqData,
  bibliographyTitle: 'Technische Referenties',
  bibliography: [
    {
      name: 'ISO 16:1975 Acoustics — Standard tuning frequency',
      url: 'https://www.iso.org/standard/3601.html',
    },
    {
      name: 'The Harvard Dictionary of Music - Notation Systems',
      url: 'https://www.hup.harvard.edu/catalog.php?isbn=9780674011632',
    },
    {
      name: 'Nomenclature of Musical Notes - Theory of Music',
      url: 'https://en.wikipedia.org/wiki/Musical_note#Note_names_and_history',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  ui: {
    octaveLabel: 'Wetenschappelijk Octaaf (C4 = Centrale C):',
    systemsTitle: 'Naamsystemen',
    systemLatino: 'Latijn (Solfège)',
    systemAnglo: 'Angelsaksisch (Modern)',
    systemGerman: 'Germaans (Duits)',
    sciNotationTitle: 'Wetenschappelijke Notatie',
    systemAnsi: 'Internationaal (ANSI)',
    systemFranco: 'Frans-Belgisch',
    systemEnharmonic: 'Nuttige Enharmoniek',
    techTitle: 'Technische Gegevens & Golven',
    btnPlay: 'Luisteren',
    btnCopy: 'Info Kopiëren',
    initialTitle: 'Selecteer een noot op de piano',
    copyDone: 'Gekopieerd!',
    copyLabelNote: 'Noot',
    copyLabelGerman: 'Duits Systeem',
    copyLabelFreq: 'Frequentie',
    copyLabelAnsi: 'Wetenschappelijk Octaaf',
    copyLabelUrl: 'URL',
    naLabel: 'N.v.t.',
  },
  seo: [
    {
      type: 'summary',
      title: 'Meertalige Muzieknoot Vertaler',
      items: [
        '<strong>3 systemen tegelijk</strong>: Latijn, Angelsaksisch en Germaans in één oogopslag.',
        '<strong>Interactieve piano</strong>: Klik op een toets om alle equivalenten te zien.',
        '<strong>Exacte frequenties</strong>: Elke noot toont zijn Hz volgens de ISO 16-standaard.',
        '<strong>Enharmoniek</strong>: Identificeert automatisch noten met dubbele namen.',
      ],
    },
    {
      type: 'title',
      text: 'Begrijp de equivalentie van muzieknoten in verschillende systemen',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Muziek is een universele taal, maar de notatie en nomenclatuur variëren sterk afhankelijk van de geografische regio en academische context. Terwijl Latijnssprekende landen en de klassieke Europese traditie het Latijnse systeem (Do, Re, Mi...) domineren, hebben de moderne muziek, jazz en de Angelsaksische wereld de Amerikaanse notatie (C, D, E...) gestandaardiseerd. Daarnaast is er een historische bijzonderheid in Germaans beïnvloede landen waar de natuurlijke B H wordt genoemd en Bes B is.',
    },
    {
      type: 'title',
      text: 'De drie belangrijkste muzikale naamsystemen',
      level: 2,
    },
    {
      type: 'list',
      items: [
        "<strong>Latijns Systeem (Solfège):</strong> Gebruikt in Spanje, Italië, Frankrijk en een groot deel van Latijns-Amerika. Gebaseerd op de hymne aan Sint-Jan de Doper door Guido d'Arezzo. Gebruikt Do, Re, Mi, Fa, Sol, La, Si.",
        '<strong>Amerikaanse Notatie (Angelsaksisch):</strong> De wereldstandaard voor jazz, pop en rock. Kent de eerste zeven letters van het alfabet (A-G) toe beginnend bij A=La. C is de letter voor Do.',
        '<strong>Germaans Systeem:</strong> Gebruikt in Duitsland, Oostenrijk en Noord-Europese landen. Het belangrijkste verschil is het gebruik van H voor de natuurlijke B en B voor Bes.',
      ],
    },
    {
      type: 'title',
      text: 'De merkwaardige geschiedenis van B en H in de Duitse notatie',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Veel beginners vragen zich af waarom in Duitsland de noot Si met een H wordt geschreven. De oorsprong ligt in een middeleeuwse kopieerfout. In het oude lettersysteem werd de letter B gebruikt voor Si. Er waren twee varianten: de <em>B quadratum</em> (vierkant, voor de natuurlijke B) und de <em>B rotundum</em> (rond, voor de verlaagde B).",
    },
    {
      type: 'paragraph',
      html: 'In de loop van de tijd ging de vorm van de <em>B quadratum</em> in Duitse manuscripten steeds meer lijken op een kleine letter h. Deze grafische evolutie werd geconsolideerd in de boekdrukkunst en leidde tot de huidige Duitse nomenclatuur: H voor de natuurlijke B en B voor Bes. Interessant is dat deze onderscheiding componisten als J.S. Bach in staat stelde hun werken te signeren met het beroemde "B-A-C-H"-motief (Bes - A - C - B).',
    },
    {
      type: 'title',
      text: 'Vergelijkingstabel van natuurlijke nootequivalenten',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Noot (Latijn)', 'Notatie (Anglo)', 'Duits (Germaans)', 'Oorsprong'],
      rows: [
        ['Do', 'C', 'C', 'Basisfrequentie'],
        ['Re', 'D', 'D', 'Tweede noot'],
        ['Mi', 'E', 'E', 'Derde noot'],
        ['Fa', 'F', 'F', 'Vierde noot'],
        ['Sol', 'G', 'G', 'Vijfde noot'],
        ['La', 'A', 'A', 'Stemnoot'],
        ['Si', 'B', 'H', 'De grote variant'],
      ],
    },
    {
      type: 'title',
      text: 'Kruisen, Mollen en het concept van Enharmoniek',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'In de westerse muziek gebruiken we 12 klanken per octaaf. De vijf extra noten worden weergegeven door voortekens: het kruis (#) en de mol (b). Een kruis verhoogt de noot met een halve toon, terwijl een mol deze met een halve toon verlaagt.',
    },
    {
      type: 'paragraph',
      html: 'Dit brengt ons bij <strong>Enharmoniek</strong>: twee noten die verschillende namen hebben, maar precies hetzelfde klinken en op dezelfde pianotoets worden gespeeld. C# en Db zijn bijvoorbeeld enharmonisch. Onze tool markeert deze equivalenten automatisch, wat essentieel is om te begrijpen waarom een partituur om Fis kan vragen terwijl een andere om Ges vraagt in dezelfde toonsoort.',
    },
    {
      type: 'title',
      text: 'Octaven: Wetenschappelijke Notatie vs Frans-Belgisch',
      level: 2,
    },
    {
      type: 'list',
      items: [
        "Internationale Wetenschappelijke Notatie (ANSI): Centrale C wordt C4 genoemd. Het is de standaard in synthesizers, DAW's en muzieksoftware (MIDI).",
        'Frans-Belgische Notatie: Veel gebruikt in klassieke conservatoria. In dit systeem is de centrale C Do3.',
        "Helmholtz Systeem: Gebruikt hoofdletters, kleine letters en accenten (C, c, c', c''). Meer gebruikelijk in oude technische literatuur en Duitse akoestiek.",
      ],
    },
    {
      type: 'tip',
      title: 'Tip voor producers',
      html: "Let op met DAW's: sommige fabrikanten (zoals Yamaha) beschouwen centrale C als C3, terwijl anderen (zoals Roland of FL Studio) het als C4 of zelfs C5 beschouwen. Als je synthesizer een octaaf verkeerd klinkt, controleer dan welke wetenschappelijke notatiestandaard de software volgt.",
    },
    {
      type: 'title',
      text: 'Frequentie in Hertz (Hz) en standaardstemming',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Vanuit een fysiek perspectief komt elke noot overeen met een specifieke frequentie gemeten in hertz (cycli per seconde). De internationale stemstandaard (ISO 16) stelt vast dat <strong>A4</strong> vibreert op precies <strong>440 Hz</strong>.',
    },
    {
      type: 'list',
      items: [
        'Kalibreren van analoge synthesizers die last kunnen hebben van technische afwijkingen.',
        'Aanpassen van chirurgische equalizers in mixing om resonanties op specifieke noten te elimineren.',
        'Begrijpen van de relatie tussen fysieke toonhoogte en muzikale perceptie.',
        'Nauwkeurig converteren van samples door de toonhoogte in cents aan te passen.',
      ],
    },
    {
      type: 'title',
      text: 'Praktische toepassingen voor deze tool',
      level: 2,
    },
    {
      type: 'proscons',
      items: [
        {
          pro: 'Onmiddellijke vertaling tussen notaties voor sessiemuzikanten die partituren in het Engels moeten lezen.',
          con: 'Het systeem houdt geen rekening met microtonaliteit of niet-westerse stemmingen.',
        },
        {
          pro: 'Identificatie van enharmonische noten om de muzikale spelling in partituren te verbeteren.',
          con: 'Audio-afspelen is een pure golf, het heeft niet het timbre van een echt instrument.',
        },
        {
          pro: 'Conversie van wetenschappelijke naar Frans-Belgische octaven voor harmonieleer-studenten.',
          con: 'Gaat alleen uit van standaard A4=440Hz stemming, niet Barokke stemmingen (415 Hz).',
        },
        {
          pro: 'Intuïtieve piano-visualisatie die het leren van toonladders en akkoorden vergemakkelijkt.',
          con: 'Vereist basiskennis van muziektheorie om te interpreteren welk voorteken het beste is in elke context.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Technische verklarende woordenlijst',
      level: 2,
    },
    {
      type: 'list',
      items: [
        'Halve toon: De kleinste afstand tussen twee noten in het westerse systeem (bijv. van E naar F).',
        'Hele toon: De afstand gelijk aan twee halve tonen (bijv. van C naar D).',
        'Notatie: Systeem van afkortingen om noten en akkoorden weer te geven.',
        'Hertz (Hz): Meeteenheid van geluidsfrequentie.',
        'Octaaf: Interval dat twee noten scheidt waarbij de frequentie van de ene het dubbele is van de andere.',
        'Voortekens aan de sleutel: Set kruisen of mollen aan het begin van een notenbalk die de toonsoort definiëren.',
      ],
    },
  ],
};
