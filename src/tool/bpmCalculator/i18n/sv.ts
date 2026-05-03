import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BpmCalculatorUI } from '../ui';

const slug = 'bpm-till-ms-kalkylator';
const title = 'BPM till millisekunder kalkylator för delay och reverb';
const description =
  'Konvertera ditt projekttempo (BPM) till exakta delaytider (ms) och frekvenser (Hz). Det väsentliga verktyget för att ställa in delay, reverb och kompressorer med rytmisk precision.';

const faqData = [
  {
    question: 'Vad är Pre-delay i ett reverb?',
    answer:
      'Pre-delay är tiden mellan det direkta ljudet (källan) och början av reverbsvansen. Genom att ställa in det rytmiskt kan originalkällan förbli tydlig innan den spatiala effekten tar över – avgörande för sång och slagverk.',
  },
  {
    question: 'Hur fungerar Tap Tempo?',
    answer:
      'Tap Tempo känner av tempot genom att klicka rytmiskt med i en låt. Varje klick klockas och systemet beräknar genomsnittet av intervallen för att ge dig exakt BPM. Det är det snabbaste sättet att synkronisera effekter till ett externt spår.',
  },
  {
    question: 'Varför använda millisekunder istället för automatisk synk?',
    answer:
      "Det finns tre huvudsakliga skäl: användning av analog hårdvara utan MIDI, finjustering av pre-delays så att reverbet 'andas', och 'groove'-justeringar där effekter förskjuts något från rutnätet för att undvika en statisk, robotliknande känsla.",
  },
  {
    question: 'Vad används det rytmiska Hz-värdet till?',
    answer:
      'Hertz-värden talar om för dig hur många gånger något händer per sekund. De är viktiga för att konfigurera LFO-oscillatorer, phaser-svephastigheter eller filtermodulering på syntar som saknar inbyggd temposynk.',
  },
];

const howToData = [
  {
    name: 'Ange BPM',
    text: 'Skriv in ditt projekttempo i det centrala fältet eller använd Tap Tempo-knappen.',
  },
  {
    name: 'Hitta underdelningen',
    text: 'Hitta den not du behöver (fjärdedel, åttondel, etc.) i tabellerna för enkla, punkterade eller triolnoter.',
  },
  {
    name: 'Kopiera värdet',
    text: 'Klicka på kopieringsikonen bredvid millisekundvärdet för att klistra in det direkt i din plugin eller hårdvara.',
  },
  {
    name: 'Ställ in Pre-delay',
    text: 'Använd den nedre sektionen för ultrakorta värden som är idealiska för att separera reverb från ledsången.',
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

export const content: ToolLocaleContent<BpmCalculatorUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  ui: {
    labelTempo: 'TEMPO (BPM)',
    btnTap: 'TAP TEMPO',
    sectionDelay: 'Delaytider',
    sectionDotted: 'Punkterade noter',
    sectionTriplets: 'Trioler',
    sectionReverb: 'Reverbdesign (Pre-delay)',
    colNote: 'Not',
    colMs: 'ms',
    colHz: 'Hz',
    infoPreDelay:
      '<strong>Pre-delay</strong> separerar det ursprungliga anslaget från reverbsvansen för att skapa tydlighet.',
    copyAriaMs: 'Kopiera millisekunder',
    copyAriaPreDelay: 'Kopiera pre-delay',
    copyFeedback: 'Kopierat!',
  },
  seo: [
    {
      type: 'summary',
      title: 'Kalkylatorns funktioner',
      items: [
        'Omedelbar beräkning för enkla, punkterade och triolnoter',
        'Millisekund- och Hz-värden för varje rytmisk underdelning',
        'Pre-delay-sektion för reverbdesign med musikalisk precision',
        'Tap Tempo: detektera BPM genom att klicka i takt till musiken',
        'Ettklickskopiering till urklipp för valfri DAW eller plugin',
      ],
    },
    {
      type: 'title',
      text: 'Varför är en BPM till millisekunder kalkylator nödvändig?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'I modern musikproduktion skiljer rytmisk precision en amatörmix från en professionell. Medan de flesta DAW:er som Ableton Live, FL Studio eller Logic Pro inkluderar automatisk synk för sina effekter, finns det otaliga situationer där manuell kontroll är överlägsen.',
    },
    {
      type: 'title',
      text: 'Vikten av Pre-delay i Reverb',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'En av de mest kritiska användningarna av detta verktyg är att justera <strong>pre-delay</strong>. Om du lägger ett reverb på en sång utan pre-delay börjar effektsvansen omedelbart, vilket grumlar till konsonanterna och minskar tydligheten. Genom att beräkna ett rytmiskt pre-delay (som en 64-dels eller 128-dels not) låter du originalrösten andas innan den artificiella akustiska rymden tar över. Detta skapar en känsla av djup utan att offra källans närvaro.',
    },
    {
      type: 'title',
      text: 'Analoja Delay och Extern Hårdvara',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Om du samlar på analoga delaypedaler eller vintage-syntar vet du att många saknar en MIDI-klockingång. Att ställa in ett bandeko manuellt kräver att du vet exakt hur många millisekunder som motsvarar en åttondel eller punkterad fjärdedel. Vår kalkylator ger dig dessa värden omedelbart, så att du kan ställa in din hårdvara med kirurgisk precision.',
    },
    {
      type: 'title',
      text: 'Off-the-grid effekter och Groove',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ibland låter matematisk perfektion tråkigt. Många producenter använder millisekundvärden som en utgångspunkt och förskjuter dem sedan något uppåt eller nedåt. Att flytta ett delay 5 till 10 ms från rutnätet kan tillföra ett mänskligt <em>swing</em> eller unikt <em>groove</em> som rigid kvantisering aldrig kan återskapa.',
    },
    {
      type: 'title',
      text: 'Synkad kompression och LFO:er',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Visste du att även <strong>Attack-</strong> och <strong>Release-tiderna</strong> på en kompressor kan vara rytmiska? Att ställa in releasen på din trumbusskompressor så att den slutar exakt före nästa baskaggeslag skapar en "pumping"- eller <em>andningseffekt</em> som förstärker låtens rytm. På samma sätt är Hz-värdet viktigt för att konfigurera lågfrekventa oscillatorer (LFO:er) på syntar utan inbyggd temposynk.',
    },
    {
      type: 'tip',
      title: 'Hur man använder Tap Tempo',
      html: '<strong>Tap Tempo</strong>-funktionen är idealisk för livesituationer eller när du lyssnar på ett externt spår vars tempo du inte känner till. Klicka bara rytmiskt på knappen och följ musikens puls. Vi rekommenderar minst 4 eller 5 klick så att algoritmen kan beräkna genomsnittet för värdet mer exakt.',
    },
    {
      type: 'title',
      text: 'Tempo-mattematikformler',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Den bakomliggande formeln är enkel: <code>ms = 60 000 / BPM</code>. Utifrån det tillämpas multiplikatorer för varje underdelning.',
    },
    {
      type: 'list',
      items: [
        'Enkla noter: baserat på binär delning (1, 0,5, 0,25, etc.).',
        'Punkterade: multiplicera basvärdet med 1,5.',
        'Trioler: multiplicera basvärdet med 0,667 (2/3).',
      ],
    },
  ],
};
