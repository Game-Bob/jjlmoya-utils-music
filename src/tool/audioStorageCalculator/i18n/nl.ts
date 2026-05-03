import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { AudioStorageCalculatorUI } from '../ui';

const slug = 'audio-opslag-calculator';
const title = 'Audio Opslag Calculator: WAV, FLAC en MP3 Bestandsgrootte';
const description =
  'Schat de benodigde schijfruimte voor je audio-opnames in WAV, FLAC en MP3 op basis van samplefrequentie en bitdiepte.';

const faqData = [
  {
    question: 'Hoeveel ruimte neemt één uur audio op 44.1 kHz 16-bit in beslag?',
    answer:
      'In stereo (CD kwaliteit) neemt één uur audio ongeveer 635 MB ongecomprimeerde schijfruimte in beslag (WAV/AIFF).',
  },
  {
    question: 'Waarom neemt het WAV-formaat zoveel ruimte in beslag?',
    answer:
      'WAV is een ongecomprimeerd "lossless" formaat, wat betekent dat elk audiosample afzonderlijk wordt opgeslagen om maximale getrouwheid te behouden zonder gegevensreductie.',
  },
  {
    question: 'Wat is beter om ruimte te besparen: FLAC of MP3?',
    answer:
      'FLAC bespaart tot 50% ruimte zonder kwaliteitsverlies (lossless compressie). MP3 bespaart tot 80-90%, maar verwijdert onmerkbare audio-informatie (lossy compressie).',
  },
  {
    question: 'Hoe bereken je de benodigde ruimte voor een podcast van 2 uur?',
    answer:
      'Als je opneemt in Mono op 48 kHz / 24-bit, heb je ongeveer 988 MB nodig. Met de calculator kun je deze parameters precies aanpassen voor jouw apparatuur.',
  },
];

const howToData = [
  {
    name: 'Configureer de audio',
    text: 'Kies de samplefrequentie (kHz), bitdiepte en het aantal kanalen.',
  },
  {
    name: 'Voer de duur in',
    text: 'Voer de uren, minuten en seconden in die de opname naar verwachting zal duren.',
  },
  {
    name: 'Analyseer de resultaten',
    text: 'Bekijk de resulterende grootte in MB of GB en vergelijk deze met verschillende formaten zoals FLAC of MP3.',
  },
  {
    name: 'Evalueer de capaciteit',
    text: 'Controleer welk percentage van je SD-kaart of harde schijf de opname in beslag zal nemen.',
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
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  ui: {
    labelConfig: 'Audio Configuratie',
    labelHz: 'Samplefrequentie (kHz)',
    labelBits: 'Bitdiepte',
    labelChannels: 'Kanalen',
    labelDuration: 'Opnameduur',
    labelHours: 'Uren',
    labelMinutes: 'Minuten',
    labelSeconds: 'Seconden',
    labelCapacity: 'Beschikbare Opslag (in GB)',
    toggleLabelSpace: 'Bereken hoeveel ik kan opnemen met mijn vrije ruimte',
    labelComparison: 'Formaat & Opslag Vergelijking',
    thFormat: 'Formaat',
    thQuality: 'Kwaliteit',
    thSize: 'Geschatte Grootte',
    qualityWav: 'Ongecomprimeerd (Lossless)',
    qualityFlac: 'Lossless Compressie',
    qualityMp3High: 'Hoge Kwaliteit (Lossy)',
    qualityMp3Std: 'Standaardkwaliteit / Stem',
    labelDevices: 'Percentage gebruikt op gangbare apparaten',
    device32: '32GB SD-kaart',
    device128: '128GB Opslag',
    device1tb: '1TB Harde Schijf',
    btnCopy: 'Samenvatting Kopiëren',
    optHz44100: '44.1 kHz (CD)',
    optHz48000: '48 kHz (Videostandaard)',
    optHz88200: '88.2 kHz',
    optHz96000: '96 kHz (Hoge Resolutie)',
    optHz192000: '192 kHz (Ultra HD)',
    optBits16: '16-bit (CD / Standaard)',
    optBits24: '24-bit (Producers / Film)',
    optBits32: '32-bit (Floating Point)',
    optCh1: 'Mono (1 kanaal)',
    optCh2: 'Stereo (2 kanalen)',
    optCh6: '5.1 Surround (6 kanalen)',
    optCh8: '7.1 Surround (8 kanalen)',
    labelDurationSet: 'Geconfigureerde duur: {time}',
    labelRecordingPossible: 'Opname mogelijk met {gb} GB geconfigureerd',
    toggleLabelTime: 'Terug naar duurberekening',
    labelSpaceAvailable: 'Beschikbare Ruimte',
    copyDone: 'Samenvatting Gekopieerd!',
    summarySpace:
      'De {t} opname op {bits}-bit/{hz} in {channels} modus neemt ongeveer {result} in beslag.',
    summaryTime:
      'Met {space} GB beschikbaar kun je tot {result} audio opnemen op {bits}-bit/{hz} {channels}.',
  },
  seo: [
    {
      type: 'summary',
      title: 'Digitale Geluidsopslag Calculator',
      items: [
        '<strong>WAV naar MP3</strong>: Bereken de grootte van bestanden met en zonder compressie.',
        '<strong>Audioresolutie</strong>: Pas frequentie (kHz) en bits (16/24/32) aan.',
        '<strong>Omgekeerde berekening</strong>: Hoeveel kan ik opnemen met mijn resterende ruimte?',
        '<strong>Professionele formaten</strong>: Schatting voor FLAC en 192kHz mastering.',
      ],
    },
    { type: 'title', text: 'Hoe wordt de grootte van een audio-opname berekend?', level: 2 },
    {
      type: 'paragraph',
      html: 'De grootte van een ongecomprimeerd digitaal audiobestand (zoals WAV of AIFF) hangt af van drie fundamentele technische factoren: <strong>Samplefrequentie</strong> — hoe vaak per seconde de geluidsgolf wordt "gemeten" (bijv. 44.1 kHz of 48 kHz); <strong>Bitdiepte</strong> — de resolutie van elke meting, met een groter dynamisch bereik en lagere ruis bij hogere bits; en <strong>Kanalen</strong> — of de opname Mono (1), Stereo (2) of Meerkanaals (Surround) is. De standaard wiskundige formule is de <strong>Bitrate</strong>; vermenigvuldigd met de duur in seconden, geeft dit de totale grootte van het ruwe bestand.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'CD kwaliteit',
          description:
            '16-bit / 44.1 kHz. Neemt ongeveer 10.1 MB per minuut in beslag in stereo. De historische standaard van de muziekindustrie.',
        },
        {
          title: 'Pro opname',
          description:
            '24-bit / 48 kHz. De standaard voor video en film. Neemt ongeveer 16.5 MB per minuut in beslag. Meer headroom voor mixen.',
        },
        {
          title: 'Hoge Resolutie',
          description:
            '24-bit / 96 kHz. Gebruikt bij mastering. Verdubbelt de standaard opnamegrootte tot 33 MB per minuut.',
        },
      ],
    },
    { type: 'title', text: 'Waarom neemt 24-bit audio 50% meer ruimte in dan 16-bit?', level: 2 },
    {
      type: 'paragraph',
      html: 'Elk audiosample in 16-bit gebruikt 2 bytes (16 ÷ 8) om de amplitude op te slaan. Audio in 24-bit gebruikt 3 bytes per sample. Dit betekent dat bij dezelfde samplefrequentie een 24-bit bestand precies 50% groter is dan een 16-bit bestand. Als een opname van een uur op 16-bit/44.1kHz 635 MB in beslag neemt, dan stijgt diezelfde opname op 24-bit/44.1kHz naar 953 MB.',
    },
    {
      type: 'tip',
      title: 'Is de extra ruimte het waard?',
      html: 'Hoewel het meer ruimte in beslag neemt, biedt 24-bit audio een dynamisch bereik van 144 dB tegenover 96 dB voor 16-bit. Dit zorgt voor een veel lagere "ruisvloer", waardoor zwakkere signalen kunnen worden opgenomen zonder dat achtergrondruis een probleem wordt — essentieel tijdens professioneel mixen en masteren.',
    },
    { type: 'title', text: 'WAV vs FLAC vs MP3: De impact op de schijf', level: 2 },
    {
      type: 'paragraph',
      html: '<strong>WAV / AIFF</strong> zijn ongecomprimeerde formaten die elke bit van de originele opname behouden, maar ze zijn het zwaarst. <strong>FLAC</strong> past lossless compressie toe, waardoor de originele grootte met 40-60% wordt verminderd zonder dat de kwaliteit verloren gaat. <strong>MP3 / AAC</strong> passen lossy compressie toe, waarbij onmerkbare frequenties worden verwijderd; een MP3 op 320 kbps neemt ongeveer 22% van de originele WAV in beslag.',
    },
    {
      type: 'table',
      headers: ['Kwaliteit', 'Frequentie', 'Bits', 'MB per Minuut (Stereo)'],
      rows: [
        ['Telefoongesprek', '8 kHz', '8-bit', '0.94 MB'],
        ['FM Radio', '32 kHz', '16-bit', '7.32 MB'],
        ['Originele CD', '44.1 kHz', '16-bit', '10.09 MB'],
        ['Videostudio', '48 kHz', '24-bit', '16.48 MB'],
        ['High Fidelity', '96 kHz', '24-bit', '32.96 MB'],
      ],
    },
    { type: 'title', text: 'Berekeningsformule voor technici', level: 2 },
    {
      type: 'paragraph',
      html: 'Als je de berekening handmatig moet uitvoeren of in je eigen software moet implementeren, is dit de logica die onze calculator volgt:',
    },
    {
      type: 'code',
      ariaLabel: 'Logica voor berekening van audio-opslag',
      code: `const sampleRate = 48000;\nconst bitDepth = 24;\nconst channels = 2;\nconst seconds = 3600;\n\nconst bitsPerSecond = sampleRate * bitDepth * channels;\nconst totalBytes = (bitsPerSecond * seconds) / 8;`,
    },
    { type: 'title', text: 'Gebruiksscenario’s voor deze tool', level: 2 },
    {
      type: 'list',
      items: [
        'Podcasting: Voorkom dat de ruimte op je draagbare recorder opraakt tijdens een lang interview.',
        'Muziekstudio: Bereken hoeveel GB vrije ruimte je nodig hebt voordat je een sessie met 40 tracks op 96kHz opent.',
        'Digital Sound Engineering: Controleer of de overdrachtbitrate compatibel is met jouw hardware.',
        'Film Post-productie: Schat de grootte van 5.1 meerkanaals opnames voor netwerkbestandslevering.',
        'Archiveren: Bepaal de capaciteit die nodig is om een verzameling analoge banden te digitaliseren op Master-kwaliteit.',
      ],
    },
  ],
};
