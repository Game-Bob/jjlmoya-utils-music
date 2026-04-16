import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MetronomeUI } from '../ui';

const slug = 'metronom-sv';
const title = 'Online Metronom: Hög precision, visuellt och ljud';
const description =
  'Gratis online-metronom för musiker. Precision på millisekunden med Web Audio API. Visuellt, ljud och Tap Tempo. Perfekt för instrumentövning.';

const faqData = [
  {
    question: 'Är den här metronomen tillräckligt exakt för professionellt bruk?',
    answer:
      'Ja. Vi använder Web Audio API, som schemalägger ljud direkt på enhetens hårdvaruklocka. Detta undviker de mikrofördröjningar som är typiska för andra webbapplikationer och garanterar precision på millisekunden, även under långa pass.',
  },
  {
    question: 'Vad är Tap Tempo och hur använder jag det?',
    answer:
      'Det är en funktion som låter dig beräkna BPM genom att knacka rytmiskt. Klicka bara på "TAP"-knappen eller tryck på mellanslagstangenten i takt med musiken du lyssnar på, så får du det exakta tempot direkt.',
  },
  {
    question: 'Kan jag ändra taktarten och accenterna?',
    answer:
      'Ja, du kan konfigurera olika taktarter (2/4, 3/4, 4/4, 6/8, etc.) och anpassa accenterna för att matcha den musikstil du övar.',
  },
  {
    question: 'Varför hör jag ingenting på min iPhone eller iPad?',
    answer:
      'På iOS-enheter respekterar Web Audio-tekniken den fysiska knappen för tyst läge. Se till att din telefon inte är i tyst läge och höj medievolymen för att höra klickljuden.',
  },
];

const howToData = [
  {
    name: 'Ställ in BPM',
    text: 'Använd reglaget eller finjusteringsknapparna för att ställa in önskad hastighet i slag per minut (BPM).',
  },
  {
    name: 'Konfigurera taktarten',
    text: 'Välj antal slag (t.ex. 4/4 eller 3/4) så att metronomen korrekt accentuerar det första slaget i varje takt.',
  },
  {
    name: 'Synka med extern musik (Tap)',
    text: 'Om du behöver hitta tempot i en låt du lyssnar på, knacka på TAP-knappen i takt med trummorna eller huvudpulsen.',
  },
  {
    name: 'Börja öva',
    text: 'Tryck på startknappen. De visuella indikatorerna hjälper dig att hålla takten även om du inte kan höra ljudet tydligt i din omgivning.',
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

export const content: ToolLocaleContent<MetronomeUI> = {
  slug,
  title,
  description,
  faqTitle: 'Vanliga frågor',
  faq: faqData,
  bibliographyTitle: 'Tekniska referenser',
  bibliography: [
    {
      name: 'Web Audio API – MDN Web Docs',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API',
    },
    {
      name: 'AudioContext – MDN Web Docs',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/AudioContext',
    },
    {
      name: 'A Tale of Two Clocks – Scheduling Web Audio with Precision (web.dev)',
      url: 'https://web.dev/articles/audio-scheduling',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  ui: {
    labelTempo: 'Tempo',
    labelBpmMin: '40 BPM',
    labelBpmMax: '240 BPM',
    labelTime: 'Taktart',
    labelTap: 'Tap Tempo',
    btnTap: 'TAP',
    warningTitle: 'Inget ljud?',
    warningText:
      'Om du använder iPhone/iPad, se till att sidoknappen för tyst läge inte är aktiv. Web Audio-tekniken respekterar systemets tysta läge på många enheter.',
  },
  seo: [
    {
      type: 'summary',
      title: 'Metronomfunktioner',
      items: [
        'Web Audio API-motor — precision på millisekunden, ingen drift',
        'Tap Tempo: beräkna BPM genom att knacka i takt',
        'Konfigurerbar taktart från 1 till 12 slag med automatisk accent',
        'Visuell indikator med hög kontrast och ringeffekt',
        'Volymkontroll och ±1/±5 BPM finjusteringsknappar',
      ],
    },
    {
      type: 'title',
      text: 'Rytmisk precision i din webbläsare',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Välkommen till den <strong>Definitiva Online-metronomen</strong>. Vi byggde det här verktyget med ett mål i åtanke: <em>pålitlighet</em>. Till skillnad från andra webbmetronomer som lider av "drift" (små kumulativa fördröjningar) på grund av processorbelastning, är vår ljudmotor byggd direkt på <strong>Web Audio API</strong>.',
    },
    {
      type: 'paragraph',
      html: 'Detta innebär att ljudpulser schemaläggs i förväg på din enhets hårdvaruklocka, vilket garanterar <strong>orubblig precision på millisekunden</strong>, även om du minimerar fliken eller om din dator har mycket att göra.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Tydlig visualisering',
          description:
            'Stora visuella indikatorer med hög kontrast och en "ringeffekt". Designade för att uppfattas med ditt perifera seende, så att du kan hålla ögonen på dina noter eller ditt instrument utan att tappa takten.',
        },
        {
          title: 'Smart Tap Tempo',
          description:
            'Lyssnar du på en låt och vill veta dess hastighet? Tryck på TAP-knappen eller mellanslagstangenten i takt med musiken. Algoritmen beräknar det exakta genomsnittet av dina knackningar.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Mästarguide: Hur man övar med en metronom',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Metronomen är inte bara en tickande klocka; den är den mest opartiska domaren av din teknik. Här är en beprövad metod för att förbättra din snabbhet och renhet:',
    },
    {
      type: 'title',
      text: '1. Stege-metoden',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Om ditt mål är att spela i <strong>120 BPM</strong>, börja inte med att försöka i den hastigheten. Det är lätt att bli frustrerad; framsteg kräver strategi.',
    },
    {
      type: 'list',
      items: [
        'Börja på 50 % av din målhastighet (t.ex. 60 BPM).',
        'Spela stycket perfekt 3 gånger i rad. Om du missar en not återställs räknaren.',
        'Höj metronomen med bara 5 BPM.',
        'Upprepa tills du når din målhastighet.',
      ],
    },
    {
      type: 'title',
      text: '2. Accentförskjutning',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Använd vår taktartsväljare för att flytta accenten. Att öva på ett 4/4-stycke med metronomen inställd på 3/4 innebär att accenten (det skarpa klicket) hamnar på olika ställen i din frasering, vilket tvingar dig att internalisera den absoluta tiden istället för att förlita dig på slag "ett".',
    },
    {
      type: 'title',
      text: '3. Strategiska tystnader',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'En avancerad teknik är att ställa in metronomen på halvfart (t.ex. 60 BPM om du spelar i 120) och känna varje klick som slag 1 och 3. Ännu svårare: känn det bara som off-beats. Detta bygger upp din <strong>inre klocka</strong>.',
    },
    {
      type: 'title',
      text: 'Kuriosa om tempo',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Tempo påverkar den emotionella upplevelsen av musik radikalt.',
    },
    {
      type: 'table',
      headers: ['Italiensk term', 'BPM ca.', 'Karaktär'],
      rows: [
        ['Largo', '40 – 60', 'Långsamt och högtidligt'],
        ['Andante', '76 – 108', 'Gångtakt, lugnt'],
        ['Allegro', '120 – 156', 'Snabbt, ljust och glatt'],
        ['Presto', '168 – 200', 'Mycket snabbt, frenetiskt'],
      ],
    },
    {
      type: 'title',
      text: 'Tekniken bakom den här metronomen',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Det här är inte en MP3-spelare som går i loop. Vi genererar rena sinunsvågor i realtid. Huvudoscillatorn skapar en <strong>1000 Hz</strong>-ton för accenten och <strong>800 Hz</strong> för de svaga slagen, med ett ultrakort ADSR-hölje för maximal kraft. Detta säkerställer en omedelbar ljudstart.',
    },
    {
      type: 'paragraph',
      html: 'Oavsett om du är en trummis som jobbar på groovet, en pianist som övar skalor eller en gitarrist som finslipar ett solo, är den här metronomen din tysta partner (tills du trycker på play).',
    },
    {
      type: 'tip',
      title: 'Hör du inget ljud på mobilen?',
      html: 'Om du använder iPhone/iPad, se till att knappen för <strong>tyst läge på sidan</strong> inte är aktiverad. Web Audio-tekniken respekterar systemets tysta läge på många enheter.',
    },
  ],
};
