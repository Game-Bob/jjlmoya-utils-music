import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MusicNoteEquivalencyUI } from '../ui';

const slug = 'noternas-motsvarigheter';
const title = 'Musiknoternas motsvarigheter: Latinska, anglosaxiska och tyska system';
const description =
  'Interaktiv översättare av musiknoter mellan latinska (Do, Re, Mi), anglosaxiska (C, D, E) och germanska (H) system. Inkluderar pianovisualisering, oktaver och frekvenser (Hz).';

const faqData = [
  {
    question: 'Vad är amerikansk eller anglosaxisk notation?',
    answer:
      'Det är det system som använder bokstäverna A till G för att representera musiknoter. Det är standard inom modern musik och jazz. I detta system är A=La, B=Si, C=Do, D=Re, E=Mi, F=Fa och G=Sol.',
  },
  {
    question: 'Varför kallas B för H i Tyskland?',
    answer:
      "På grund av en medeltida grafisk utveckling av 'B-quadratum'. I tysktalande länder är bokstaven H reserverad för det naturliga B, medan bokstaven B används uteslutande för B-för-förtecknat B (B-flat).",
  },
  {
    question: "Vad är 'ettstrukna C' i vetenskaplig notation?",
    answer:
      'Ettstrukna C (C-tangenten i mitten av ett 88-tangenters piano) är C4 i ANSI/internationell standard. I det fransk-belgiska systemet, som används flitigt vid konservatorier, kallas det Do3.',
  },
  {
    question: 'Vad betyder det att två noter är enharmoniska?',
    answer:
      'Det betyder att de har olika namn men representerar samma fysiska ljud och spelas på samma pianotangent. Till exempel är C-iss (C#) und D-ess (Db) enharmoniska noter.',
  },
  {
    question: 'Vad är standardfrekvensen för A4?',
    answer:
      'Den internationella standardfrekvensen är 440 Hz (ISO 16-standard). Det är den universella referensen för att stämma orkestrar, instrument och digitala syntar.',
  },
];

const howToData = [
  {
    name: 'Välj oktav',
    text: 'Använd sifferväljaren längst upp för att ange vilken oktav på pianot du vill arbeta med (standard är oktav 4, den centrala).',
  },
  {
    name: 'Tryck på en not på pianot',
    text: 'Klicka på eller tryck på valfri tangent på det interaktiva pianot för att se teknisk information och nomenklatur.',
  },
  {
    name: 'Jämför systemen',
    text: 'Titta på de nedre panelerna för att se vad noten kallas i det latinska, anglosaxiska och germanska systemet samtidigt.',
  },
  {
    name: 'Lyssna och verifiera',
    text: 'Tryck på knappen "Lyssna" för att höra den exakta frekvensen för den valda noten och bekräfta dess tonhöjd.',
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
    octaveLabel: 'Vetenskaplig oktav (C4 = ettstrukna C):',
    systemsTitle: 'Namngivningssystem',
    systemLatino: 'Latinska (Solfège)',
    systemAnglo: 'Anglosaxiska (Modern)',
    systemGerman: 'Germanska (Tyska)',
    sciNotationTitle: 'Vetenskaplig notation',
    systemAnsi: 'Internationell (ANSI)',
    systemFranco: 'Fransk-belgiska',
    systemEnharmonic: 'Användbar enharmonik',
    techTitle: 'Tekniska data & vågor',
    btnPlay: 'Lyssna',
    btnCopy: 'Kopiera info',
    initialTitle: 'Välj en not på pianot',
    copyDone: 'Kopierat!',
    copyLabelNote: 'Not',
    copyLabelGerman: 'Tyska systemet',
    copyLabelFreq: 'Frekvens',
    copyLabelAnsi: 'Vetenskaplig oktav',
    copyLabelUrl: 'URL',
    naLabel: 'Ej tillämpligt',
  },
  seo: [
    {
      type: 'summary',
      title: 'Flerspråkig översättare för musiknoter',
      items: [
        '<strong>3 system samtidigt</strong>: Latinska, anglosaxiska och germanska i en överblick.',
        '<strong>Interaktivt piano</strong>: Klicka på valfri tangent för att se alla dess motsvarigheter.',
        '<strong>Exakta frekvenser</strong>: Varje not visar sina Hz enligt ISO 16-standard.',
        '<strong>Enharmonik</strong>: Identifierar automatiskt noter med dubbla namn.',
      ],
    },
    {
      type: 'title',
      text: 'Förståelse för musiknoternas motsvarigheter i olika system',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Musik är ett universellt språk, men dess skrift och nomenklatur varierar djupt beroende på geografisk region och akademiskt sammanhang. Medan latintalande länder och klassisk europeisk tradition domineras av det latinska systemet (Do, Re, Mi...), har modern musik, jazz och den anglosaxiska världen standardiserat den amerikanska notationen (C, D, E...). Dessutom finns det en historisk särart i germanskinfluerade länder där det naturliga B kallas H och B-för-förtecknat B är B.',
    },
    {
      type: 'title',
      text: 'De tre huvudsakliga systemen för musikalisk namngivning',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Latinska systemet (Solfège):</strong> Används i Italien, Spanien, Frankrike och stora delar av Latinamerika. Baserat på hymnen till S:t Johannes Döparen av Guido d\'Arezzo. Använder Do, Re, Mi, Fa, Sol, La, Si.',
        '<strong>Amerikansk notation (anglosaxisk):</strong> Världsstandarden för jazz, pop och rock. Tilldelar de första sju bokstäverna i alfabetet (A-G) med början från A=La. C är bokstaven för Do.',
        '<strong>Germanska systemet:</strong> Används i Tyskland, Österrike och nordeuropeiska länder. Den viktigaste skillnaden är användningen av H för naturligt B och B för B-för-förtecknat B.',
      ],
    },
    {
      type: 'title',
      text: 'Den märkliga historien om B och H i tysk notation',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Många nybörjare undrar varför man i Tyskland skriver noten Si med ett H. Ursprunget ligger i ett medeltida kopieringsfel. I det gamla bokstavssystemet användes bokstaven B för Si. Det fanns två varianter: <em>B quadratum</em> (kvadratisk, för naturligt B) och <em>B rotundum</em> (rund, för det sänkta B).",
    },
    {
      type: 'paragraph',
      html: 'Med tiden kom formen på <em>B quadratum</em> att mer och mer likna ett litet h i tyska manuskript. Denna grafiska utveckling konsoliderades i tryck och gav upphov till den nuvarande tyska nomenklaturen: H för naturligt B och B för B-för-förtecknat B. Intressant nog tillät denna distinktion tonsättare som J.S. Bach att signera sina verk med det berömda "B-A-C-H"-motivet (B-för-förtecknat B - A - C - H).',
    },
    {
      type: 'title',
      text: 'Jämförelsetabell för de naturliga noternas motsvarigheter',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Not (Latinska)', 'Notation (Anglosaxiska)', 'Tyska (Germanska)', 'Ursprung'],
      rows: [
        ['Do', 'C', 'C', 'Basfrekvens'],
        ['Re', 'D', 'D', 'Andra noten'],
        ['Mi', 'E', 'E', 'Tredje noten'],
        ['Fa', 'F', 'F', 'Fjärde noten'],
        ['Sol', 'G', 'G', 'Femte noten'],
        ['La', 'A', 'A', 'Stämningsnot'],
        ['Si', 'B', 'H', 'Den stora varianten'],
      ],
    },
    {
      type: 'title',
      text: 'Kors, b-förtecken och begreppet enharmonik',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'I västerländsk musik använder vi 12 ljud per oktav. De fem ytterligare noterna representeras av förtecken: kors (#) och b (b). Ett kors höjer noten ett halvtonsteg, medan ett b sänker den ett halvtonsteg.',
    },
    {
      type: 'paragraph',
      html: 'Detta leder oss till <strong>enharmonik</strong>: två noter som har olika namn men låter exakt likadant och upptar samma pianotangent. Till exempel är C# och Db enharmoniska. Vår kalkylator markerar automatiskt dessa motsvarigheter, vilket är avgörande för att förstå varför ett partitur kan kräva F# medan ett annat kräver Gb i samma tonart.',
    },
    {
      type: 'title',
      text: 'Oktaver: Vetenskaplig notation kontra fransk-belgisk',
      level: 2,
    },
    {
      type: 'list',
      items: [
        'Internationell vetenskaplig notation (ANSI): Ettstrukna C kallas C4. Det är standard i syntar, DAW-program och musikprogramvara (MIDI).',
        'Fransk-belgisk notation: Används flitigt vid klassiska konservatorier. I det här systemet är ettstrukna C Do3.',
        "Helmholtz system: Använder versaler, gemener och primtecken (C, c, c', c''). Vanligare i äldre teknisk litteratur och tysk akustik.",
      ],
    },
    {
      type: 'tip',
      title: 'Tips för producenter',
      html: 'Se upp med DAW-program: vissa tillverkare (som Yamaha) anser att ettstrukna C är C3, medan andra (som Roland eller FL Studio) anser att det är C4 eller till och med C5. Om din synt låter en oktav fel, kontrollera vilken standard för vetenskaplig notation programvaran följer.',
    },
    {
      type: 'title',
      text: 'Frekvens i Hertz (Hz) och standardstämning',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ur ett fysiskt perspektiv motsvarar varje not en specifik frekvens mätt i hertz (cykler per sekund). Den internationella stämstandarden (ISO 16) fastställer att <strong>A4</strong> vibrerar med exakt <strong>440 Hz</strong>.',
    },
    {
      type: 'list',
      items: [
        'Kalibrera analoga syntar som kan drabbas av teknisk drift.',
        'Ställa in kirurgiska equalizers i mixning för att eliminera resonanser vid specifika noter.',
        'Förstå förhållandet mellan fysisk tonhöjd och musikalisk perception.',
        'Konvertera samplingar precist genom att justera tonhöjden i cents.',
      ],
    },
    {
      type: 'title',
      text: 'Praktiska användningsområden för den här kalkylatorn',
      level: 2,
    },
    {
      type: 'proscons',
      items: [
        {
          pro: 'Omedelbar översättning mellan notationer för studiomusiker som måste läsa noter på engelska.',
          con: 'Systemet tar inte hänsyn till mikrotonalitet eller icke-västerländsk stämning.',
        },
        {
          pro: 'Identifiering av enharmoniska noter för att förbättra musikalisk stavning i partitur.',
          con: 'Ljuduppspelningen är en ren våg, den har inte ett verkligt instruments klangfärg.',
        },
        {
          pro: 'Konvertering av vetenskaplig till fransk-belgisk oktav för harmonielever.',
          con: 'Antar endast standardstämningen A4=440Hz, inte barockstämningar (415 Hz).',
        },
        {
          pro: 'Intuitiv pianovisualisering som underlättar inlärning av skalor och ackord.',
          con: 'Kräver grundläggande teorikunskaper för att tolka vilket förtecken som är bäst i varje sammanhang.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Referens för teknisk ordlista',
      level: 2,
    },
    {
      type: 'list',
      items: [
        'Halvton: Det minsta avståndet mellan två noter i det västerländska systemet (t.ex. från E till F).',
        'Helton: Avståndet som motsvarar två halvtonsteg (t.ex. från C till D).',
        'Notation: System av förkortningar för att representera noter och ackord.',
        'Hertz (Hz): Måttenhet för ljudfrekvens.',
        'Oktav: Intervall som skiljer två noter åt där frekvensen för den ena är dubbelt så hög som för den andra.',
        'Förtecken vid klaven: Uppsättning förtecken i början av ett notsystem som definierar tonarten.',
      ],
    },
  ],
};
