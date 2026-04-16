import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MetronomeUI } from '../ui';

const slug = 'metronoom';
const title = 'Online Metronoom: Hoge Precisie Visueel en Audio';
const description =
  'Gratis online metronoom voor muzikanten. Milliseconde precisie met Web Audio API. Visueel, audio en Tap Tempo. Perfect voor het oefenen van instrumenten.';

const faqData = [
  {
    question: 'Is deze metronoom nauwkeurig genoeg voor professioneel gebruik?',
    answer:
      'Ja. We gebruiken de Web Audio API, die geluiden rechtstreeks op de hardwareklok van het apparaat plant. Dit voorkomt de microvertragingen die typisch zijn voor andere webapplicaties en garandeert precisie op de milliseconde, zelfs tijdens lange sessies.',
  },
  {
    question: 'Wat is Tap Tempo en hoe gebruik ik het?',
    answer:
      'Het is een functie waarmee je de BPM kunt berekenen door ritmisch te tikken. Klik op de knop "TAP" of druk op de spatiebalk op de maat van de muziek waar je naar luistert, en je krijgt direct het exacte tempo.',
  },
  {
    question: 'Kan ik de maatsoort en accenten veranderen?',
    answer:
      'Ja, je kunt verschillende maatsoorten configureren (2/4, 3/4, 4/4, 6/8, enz.) en de accenten van de beats aanpassen aan de muziekstijl die je oefent.',
  },
  {
    question: 'Waarom hoor ik niets op mijn iPhone of iPad?',
    answer:
      'Op iOS-apparaten houdt Web Audio-technologie rekening met de fysieke stille schakelaar. Zorg ervoor dat je telefoon niet in de stille modus staat en zet het mediavolume omhoog om de klikken te horen.',
  },
];

const howToData = [
  {
    name: 'Stel de BPM in',
    text: 'Gebruik de schuifregelaar of de knoppen voor fijnafstemming om de gewenste snelheid in beats per minute in te stellen.',
  },
  {
    name: 'Configureer de maatsoort',
    text: 'Kies het aantal beats (bijv. 4/4 of 3/4) zodat de metronoom de eerste beat van elke maat correct accentueert.',
  },
  {
    name: 'Synchroniseren met externe muziek (Tap)',
    text: 'Als je het tempo van een nummer waar je naar luistert wilt vinden, tik dan op de TAP-knop samen met de drums of de hartslag van de muziek.',
  },
  {
    name: 'Begin met oefenen',
    text: 'Druk op de startknop. De visuele indicatoren helpen je de maat te houden, zelfs als je het geluid in je omgeving niet duidelijk kunt horen.',
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
  faqTitle: 'Veelgestelde Vragen',
  faq: faqData,
  bibliographyTitle: 'Technische Referenties',
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
    labelTime: 'Maatsoort',
    labelTap: 'Tap Tempo',
    btnTap: 'TAP',
    warningTitle: 'Geen geluid?',
    warningText:
      'Als je op een iPhone/iPad zit, zorg er dan voor dat de stille schakelaar aan de zijkant niet actief is. Web Audio-technologie houdt op veel apparaten rekening met de stille modus van het systeem.',
  },
  seo: [
    {
      type: 'summary',
      title: 'Metronoom functies',
      items: [
        'Web Audio API engine — milliseconde precisie, geen afwijking',
        'Tap Tempo: bereken BPM door op de maat te tikken',
        'Configureerbare maatsoort van 1 tot 12 beats met automatisch accent',
        'Visuele indicator met hoog contrast en rimpeleffect',
        'Volumeregeling en ±1/±5 BPM knoppen voor fijnafstemming',
      ],
    },
    {
      type: 'title',
      text: 'Ritmische Precisie in je Browser',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Welkom bij de <strong>Ultieme Online Metronoom</strong>. We hebben deze tool gebouwd met één doel voor ogen: <em>betrouwbaarheid</em>. In tegenstelling tot andere webmetronomen die last hebben van "drift" (kleine cumulatieve vertragingen) als gevolg van processorbelasting, is onze geluidsengine rechtstreeks gebouwd op de <strong>Web Audio API</strong>.',
    },
    {
      type: 'paragraph',
      html: 'Dit betekent dat geluidspulsen van tevoren worden gepland op de hardwareklok van je apparaat, wat een <strong>onwrikbare precisie op de milliseconde</strong> garandeert, zelfs als je het tabblad minimaliseert of je computer druk bezig is.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Duidelijke Visualisatie',
          description:
            'Grote visuele indicatoren met hoog contrast en een "rimpel"-effect. Ontworpen om te worden waargenomen met je perifere zicht, zodat je je ogen op je bladmuziek of instrument kunt houden zonder de maat te verliezen.',
        },
        {
          title: 'Slimme Tap Tempo',
          description:
            'Luister je naar een liedje en wil je de snelheid weten? Druk op de TAP-knop of de spatiebalk samen met de muziek. Het algoritme berekent het exacte gemiddelde van je tikken.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Master Gids: Hoe te Oefenen met een Metronoom',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'De metronoom is niet zomaar een tikkende klok; het is de meest onpartijdige rechter van je techniek. Hier is een bewezen methodologie om je snelheid en zuiverheid te verbeteren:',
    },
    {
      type: 'title',
      text: '1. De Ladder-methode',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Als je doel is om op <strong>120 BPM</strong> te spelen, begin dan niet direct op die snelheid. Het is makkelijk om gefrustreerd te raken; vooruitgang vereist strategie.',
    },
    {
      type: 'list',
      items: [
        'Begin op 50% van je doelsnelheid (bijv. 60 BPM).',
        'Speel de passage 3 keer achter elkaar perfect. Als je een noot mist, wordt de teller gereset.',
        'Verhoog de metronoom met slechts 5 BPM.',
        'Herhaal dit totdat je je doelsnelheid bereikt.',
      ],
    },
    {
      type: 'title',
      text: '2. Accentverschuiving',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Gebruik onze maatsoortkiezer om het accent te verschuiven. Door een 4/4 passage te oefenen met de metronoom ingesteld op 3/4, valt het accent (de scherpe klik) op verschillende plaatsen in je frasering, waardoor je wordt gedwongen om de absolute tijd te internaliseren in plaats van te vertrouwen op beat "één".',
    },
    {
      type: 'title',
      text: '3. Strategische Stilten',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Een geavanceerde techniek is om de metronoom op halve snelheid in te stellen (bijv. 60 BPM als je op 120 speelt) en elke klik te voelen als beats 1 en 3. Nóg moeilijker: voel het alleen als de off-beats. Dit bouwt je <strong>interne klok</strong> op.',
    },
    {
      type: 'title',
      text: 'Leuke Feitjes over Tempo',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Tempo heeft een radicale invloed op de emotionele perceptie van muziek.',
    },
    {
      type: 'table',
      headers: ['Italiaanse term', 'BPM ong.', 'Karakter'],
      rows: [
        ['Largo', '40 – 60', 'Langzaam en plechtig'],
        ['Andante', '76 – 108', 'Wandeltempo, rustig'],
        ['Allegro', '120 – 156', 'Snel, helder en vrolijk'],
        ['Presto', '168 – 200', 'Zeer snel, koortsachtig'],
      ],
    },
    {
      type: 'title',
      text: 'Technologie achter deze Metronoom',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Dit is geen draaiende MP3-speler. We genereren in realtime pure sinusgolven. De hoofdoscllator creëert een toon van <strong>1000 Hz</strong> voor het accent en <strong>800 Hz</strong> voor de zwakke beats, met een ultra-korte ADSR-envelope voor maximale impact. Dit zorgt voor een onmiddellijke geluidsaanval.',
    },
    {
      type: 'paragraph',
      html: 'Of je nu een drummer bent die de groove vasthoudt, een pianist die aan toonladders werkt, of een gitarist die een solo perfectioneert, deze metronoom is je stille partner (totdat je op play drukt).',
    },
    {
      type: 'tip',
      title: 'Hoor je geen geluid op mobiel?',
      html: 'Als je op een iPhone/iPad zit, zorg er dan voor dat de <strong>stille schakelaar aan de zijkant</strong> niet is geactiveerd. Web Audio-technologie houdt op veel apparaten rekening met de stille modus van het systeem.',
    },
  ],
};
