import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { AudioStorageCalculatorUI } from '../ui';

const slug = 'ljudlagringskalkylator';
const title = 'Ljudlagringskalkylator: Filstorlek för WAV, FLAC och MP3';
const description =
  'Uppskatta det diskutrymme som behövs för dina ljudinspelningar i WAV, FLAC och MP3 baserat på samplingsfrekvens och bitdjup.';

const faqData = [
  {
    question: 'Hur mycket utrymme tar en timmes ljud vid 44.1 kHz 16-bitars?',
    answer:
      'I stereo (CD kvalitet) tar en timmes ljud ungefär 635 MB okomprimerat diskutrymme (WAV/AIFF).',
  },
  {
    question: 'Varför tar WAV-formatet så mycket plats?',
    answer:
      'WAV är ett okomprimerat "lossless"-format, vilket innebär att det lagrar varje ljudsample individuellt för att bevara maximal trohet utan att reducera data.',
  },
  {
    question: 'Vad är bäst för att spara utrymme: FLAC eller MP3?',
    answer:
      'FLAC sparar upp till 50 % utrymme utan att förlora kvalitet (lossless-komprimering). MP3 sparar upp till 80–90 % men tar bort ohörbar ljudinformation (lossy-komprimering).',
  },
  {
    question: 'Hur beräknar man utrymmet som behövs för en 2-timmars podcast?',
    answer:
      'Om du spelar in i mono vid 48 kHz / 24-bitars behöver du cirka 988 MB. Kalkylatorn låter dig justera dessa parametrar exakt för din utrustning.',
  },
];

const howToData = [
  {
    name: 'Konfigurera ljudet',
    text: 'Välj samplingsfrekvens (kHz), bitdjup och antal kanaler.',
  },
  {
    name: 'Ange varaktighet',
    text: 'Ange timmar, minuter och sekunder som du uppskattar att inspelningen kommer att pågå.',
  },
  {
    name: 'Analysera resultaten',
    text: 'Observera den resulterande storleken i MB eller GB och jämför den med olika format som FLAC eller MP3.',
  },
  {
    name: 'Utvärdera kapaciteten',
    text: 'Kontrollera hur många procent av ditt SD-kort eller din hårddisklagring som inspelningen kommer att uppta.',
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

export const content: ToolLocaleContent<AudioStorageCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Vanliga frågor',
  faq: faqData,
  bibliographyTitle: 'Tekniska referenser',
  bibliography: [
    {
      name: 'Bitdjup – Wikipedia',
      url: 'https://sv.wikipedia.org/wiki/Bitdjup',
    },
    {
      name: 'Samplingsfrekvens – Wikipedia',
      url: 'https://sv.wikipedia.org/wiki/Samplingsfrekvens',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  ui: {
    labelConfig: 'Ljudkonfiguration',
    labelHz: 'Samplingsfrekvens (kHz)',
    labelBits: 'Bitdjup',
    labelChannels: 'Kanaler',
    labelDuration: 'Inspelningslängd',
    labelHours: 'Timmar',
    labelMinutes: 'Minuter',
    labelSeconds: 'Sekunder',
    labelCapacity: 'Tillgängligt utrymme (i GB)',
    toggleLabelSpace: 'Beräkna hur mycket jag kan spela in med mitt lediga utrymme',
    labelComparison: 'Jämförelse av format och lagring',
    thFormat: 'Format',
    thQuality: 'Kvalitet',
    thSize: 'Beräknad storlek',
    qualityWav: 'Okomprimerat (Lossless)',
    qualityFlac: 'Lossless-komprimering',
    qualityMp3High: 'Hög kvalitet (Lossy)',
    qualityMp3Std: 'Standardkvalitet / Röst',
    labelDevices: 'Procentandel som används på vanliga enheter',
    device32: '32 GB SD-kort',
    device128: '128 GB lagring',
    device1tb: '1 TB hårddisk',
    btnCopy: 'Kopiera sammanfattning',
    optHz44100: '44.1 kHz (CD)',
    optHz48000: '48 kHz (Videostandard)',
    optHz88200: '88.2 kHz',
    optHz96000: '96 kHz (Hög upplösning)',
    optHz192000: '192 kHz (Ultra HD)',
    optBits16: '16-bitars (CD / Standard)',
    optBits24: '24-bitars (Producenter / Film)',
    optBits32: '32-bitars (Flyttal)',
    optCh1: 'Mono (1 kanal)',
    optCh2: 'Stereo (2 kanaler)',
    optCh6: '5.1 Surround (6 kanaler)',
    optCh8: '7.1 Surround (8 kanaler)',
    labelDurationSet: 'Konfigurerad varaktighet: {time}',
    labelRecordingPossible: 'Inspelning möjlig med {gb} GB konfigurerat',
    toggleLabelTime: 'Tillbaka till varaktighetsberäkning',
    labelSpaceAvailable: 'Tillgängligt utrymme',
    copyDone: 'Sammanfattning kopierad!',
    summarySpace:
      'Inspelningen på {t} vid {bits}-bitars/{hz} i {channels}-läge kommer att ta ungefär {result}.',
    summaryTime:
      'Med {space} GB tillgängligt kan du spela in upp till {result} ljud vid {bits}-bitars/{hz} {channels}.',
  },
  seo: [
    {
      type: 'summary',
      title: 'Kalkylator för digital ljudlagring',
      items: [
        '<strong>WAV till MP3</strong>: Beräkna storleken på filer med och utan komprimering.',
        '<strong>Ljudupplösning</strong>: Justera frekvens (kHz) och bitar (16/24/32).',
        '<strong>Omvänd beräkning</strong>: Hur mycket kan jag spela in med mitt återstående utrymme?',
        '<strong>Professionella format</strong>: Uppskattning för FLAC och 192 kHz mastering.',
      ],
    },
    { type: 'title', text: 'Hur beräknas storleken på en ljudinspelning?', level: 2 },
    {
      type: 'paragraph',
      html: 'Storleken på en okomprimerad digital ljudfil (som WAV eller AIFF) beror på tre grundläggande tekniska faktorer: <strong>Samplingsfrekvens</strong> — hur många gånger per sekund ljudvågen "mäts" (t.ex. 44.1 kHz eller 48 kHz); <strong>Bitdjup</strong> — upplösningen för varje mätning, med större dynamiskt omfång och lägre brus vid högre bitar; och <strong>Kanaler</strong> — om inspelningen är mono (1), stereo (2) eller multikanal (surround). Den matematiska standardformeln är <strong>Bitrate</strong>; multiplicerat med varaktigheten i sekunder ger det den totala råa filstorleken.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'CD kvalitet',
          description:
            '16-bitars / 44.1 kHz. Tar ungefär 10.1 MB per minut i stereo. Musikindustrins historiska standard.',
        },
        {
          title: 'Pro inspelning',
          description:
            '24-bitars / 48 kHz. Standarden för video och film. Tar cirka 16.5 MB per minut. Mer takhöjd (headroom) för mixning.',
        },
        {
          title: 'Högupplöst',
          description:
            '24-bitars / 96 kHz. Används vid mastering. Fördubblar den vanliga inspelningsstorleken upp till 33 MB per minut.',
        },
      ],
    },
    { type: 'title', text: 'Varför tar 24-bitars ljud 50 % mer plats än 16-bitars?', level: 2 },
    {
      type: 'paragraph',
      html: 'Varje ljudsample i 16-bitars använder 2 byte (16 ÷ 8) för att lagra amplituden. Ljud vid 24-bitars använder 3 byte per sample. Detta innebär att för samma samplingsfrekvens kommer en 24-bitars fil att vara exakt 50 % större än en 16-bitars fil. Om en timmes inspelning vid 16-bitars/44.1kHz tar 635 MB, kommer samma inspelning vid 24-bitars/44.1kHz att öka till 953 MB.',
    },
    {
      type: 'tip',
      title: 'Är det extra utrymmet värt det?',
      html: 'Trots att det tar mer plats erbjuder 24-bitars ljud ett dynamiskt omfång på 144 dB jämfört med 96 dB för 16-bitars. Detta ger ett mycket lägre "brusgolv", vilket gör att svagare signaler kan spelas in utan att bakgrundsbrus blir ett problem — livsviktigt vid professionell mixning och mastering.',
    },
    { type: 'title', text: 'WAV vs FLAC vs MP3: Påverkan på disken', level: 2 },
    {
      type: 'paragraph',
      html: '<strong>WAV / AIFF</strong> är okomprimerade format som bevarar varje bit av originalinspelningen men är tyngst. <strong>FLAC</strong> använder lossless-komprimering, vilket minskar den ursprungliga storleken med 40–60 % utan att offra kvaliteten. <strong>MP3 / AAC</strong> använder lossy-komprimering som tar bort ohörbara frekvenser; en MP3 vid 320 kbps tar ungefär 22 % av original-WAV.',
    },
    {
      type: 'table',
      headers: ['Kvalitet', 'Frekvens', 'Bitar', 'MB per minut (Stereo)'],
      rows: [
        ['Telefonsamtal', '8 kHz', '8-bitars', '0.94 MB'],
        ['FM-radio', '32 kHz', '16-bitars', '7.32 MB'],
        ['Original-CD', '44.1 kHz', '16-bitars', '10.09 MB'],
        ['Videostudio', '48 kHz', '24-bitars', '16.48 MB'],
        ['High Fidelity', '96 kHz', '24-bitars', '32.96 MB'],
      ],
    },
    { type: 'title', text: 'Beräkningsformel för tekniker', level: 2 },
    {
      type: 'paragraph',
      html: 'Om du behöver utföra beräkningen manuellt eller implementera den i din egen programvara, är detta logiken som vår kalkylator följer:',
    },
    {
      type: 'code',
      ariaLabel: 'Logik för ljudlagringsberäkning',
      code: `const sampleRate = 48000;\nconst bitDepth = 24;\nconst channels = 2;\nconst seconds = 3600;\n\nconst bitsPerSecond = sampleRate * bitDepth * channels;\nconst totalBytes = (bitsPerSecond * seconds) / 8;`,
    },
    { type: 'title', text: 'Användningsområden för detta verktyg', level: 2 },
    {
      type: 'list',
      items: [
        'Podcasting: Undvik att få slut på utrymme på din bärbara inspelare under en lång intervju.',
        'Musikstudio: Beräkna hur många GB ledigt utrymme du behöver innan du öppnar en session med 40 spår vid 96 kHz.',
        'Digital ljudteknik: Verifiera att överföringsbitraten är kompatibel med din hårdvara.',
        'Postproduktion för film: Uppskatta storleken på 5.1 multikanalstagningar för filleverans via nätverk.',
        'Arkivering: Fastställ den kapacitet som behövs för att digitalisera en samling analoga band i Master-kvalitet.',
      ],
    },
  ],
};
