import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { AudioStorageCalculatorUI } from '../ui';

const slug = 'calcolatore-spazio-audio';
const title = 'Calcolatore Spazio Audio: Dimensioni File WAV, FLAC e MP3';
const description =
  'Stima lo spazio su disco necessario per le tue registrazioni audio in WAV, FLAC e MP3 in base alla frequenza di campionamento e alla profondità di bit.';

const faqData = [
  {
    question: 'Quanto spazio occupa un’ora di audio a 44.1 kHz 16-bit?',
    answer:
      'In stereo (qualità CD), un’ora di audio occupa circa 635 MB di spazio non compresso (WAV/AIFF).',
  },
  {
    question: 'Perché il formato WAV occupa così tanto spazio?',
    answer:
      'Il WAV è un formato non compresso "lossless", il che significa che memorizza ogni campione audio individualmente per preservare la massima fedeltà senza ridurre i dati.',
  },
  {
    question: 'Cosa è meglio per risparmiare spazio: FLAC o MP3?',
    answer:
      'Il FLAC risparmia fino al 50% di spazio senza perdere qualità (compressione lossless). L’MP3 risparmia fino all’80-90% ma rimuove informazioni audio impercettibili (compressione lossy).',
  },
  {
    question: 'Come calcolare lo spazio necessario per un podcast di 2 ore?',
    answer:
      'Se registri in Mono a 48 kHz / 24-bit, avrai bisogno di circa 988 MB. Il calcolatore ti permette di regolare questi parametri precisamente per la tua attrezzatura.',
  },
];

const howToData = [
  {
    name: 'Configura l’audio',
    text: 'Scegli la frequenza di campionamento (kHz), la profondità di bit e il numero di canali.',
  },
  {
    name: 'Inserisci la durata',
    text: 'Inserisci le ore, i minuti e i secondi della durata stimata della registrazione.',
  },
  {
    name: 'Analizza i risultati',
    text: 'Osserva la dimensione risultante in MB o GB e confrontala con diversi formati come FLAC o MP3.',
  },
  {
    name: 'Valuta la capacità',
    text: 'Controlla quale percentuale del tuo spazio sulla scheda SD o sull’hard disk sarà occupata dalla registrazione.',
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
    labelConfig: 'Configurazione Audio',
    labelHz: 'Frequenza (kHz)',
    labelBits: 'Profondità Bit',
    labelChannels: 'Canali',
    labelDuration: 'Durata Registrazione',
    labelHours: 'Ore',
    labelMinutes: 'Minuti',
    labelSeconds: 'Secondi',
    labelCapacity: 'Spazio Disponibile (in GB)',
    toggleLabelSpace: 'Calcola quanto posso registrare con il mio spazio libero',
    labelComparison: 'Confronto Formati e Spazio',
    thFormat: 'Formato',
    thQuality: 'Qualità',
    thSize: 'Dimensione Stimata',
    qualityWav: 'Non compresso (Lossless)',
    qualityFlac: 'Compressione Lossless',
    qualityMp3High: 'Alta Qualità (Lossy)',
    qualityMp3Std: 'Qualità Standard / Voce',
    labelDevices: 'Percentuale occupata su dispositivi comuni',
    device32: 'SD Card 32GB',
    device128: 'Memoria 128GB',
    device1tb: 'Disco 1TB',
    btnCopy: 'Copia Riepilogo',
    optHz44100: '44.1 kHz (CD)',
    optHz48000: '48 kHz (Standard Video)',
    optHz88200: '88.2 kHz',
    optHz96000: '96 kHz (Alta Risoluzione)',
    optHz192000: '192 kHz (Ultra HD)',
    optBits16: '16-bit (CD / Standard)',
    optBits24: '24-bit (Professionale / Film)',
    optBits32: '32-bit (Floating Point)',
    optCh1: 'Mono (1 canale)',
    optCh2: 'Stereo (2 canali)',
    optCh6: '5.1 Surround (6 canali)',
    optCh8: '7.1 Surround (8 canali)',
    labelDurationSet: 'Durata configurata: {time}',
    labelRecordingPossible: 'Registrazione possibile con {gb} GB configurati',
    toggleLabelTime: 'Torna al calcolo della durata',
    labelSpaceAvailable: 'Spazio Disponibile',
    copyDone: 'Riepilogo Copiato!',
    summarySpace:
      'La registrazione di {t} a {bits}-bit/{hz} in modalità {channels} occuperà circa {result}.',
    summaryTime:
      'Con {space} GB disponibili, puoi registrare fino a {result} di audio a {bits}-bit/{hz} {channels}.',
  },
  seo: [
    {
      type: 'summary',
      title: 'Calcolatore Spazio Audio Digitale',
      items: [
        '<strong>WAV a MP3</strong>: Calcola la dimensione dei file con e senza compressione.',
        '<strong>Risoluzione Audio</strong>: Regola frequenza (kHz) e bit (16/24/32).',
        '<strong>Calcolo inverso</strong>: Quanto posso registrare con lo spazio rimanente?',
        '<strong>Formati Professionali</strong>: Stima per FLAC e mastering a 192kHz.',
      ],
    },
    { type: 'title', text: 'Come si calcola la dimensione di una registrazione audio?', level: 2 },
    {
      type: 'paragraph',
      html: 'La dimensione di un file audio digitale non compresso (come WAV o AIFF) dipende da tre fattori tecnici fondamentali: la <strong>Frequenza di Campionamento</strong> — quante volte al secondo l’onda sonora viene "misurata" (es. 44.1 kHz o 48 kHz); la <strong>Profondità di Bit</strong> — la risoluzione di ogni misurazione, con maggiore gamma dinamica e minor rumore a bit più elevati; e i <strong>Canali</strong> — se la registrazione è Mono (1), Stereo (2) o Multicanale (Surround). La formula matematica standard è il <strong>Bitrate</strong>; moltiplicato per la durata in secondi, fornisce la dimensione totale del file grezzo.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Qualità CD',
          description:
            '16-bit / 44.1 kHz. Occupa circa 10.1 MB al minuto in stereo. Lo standard storico dell’industria musicale.',
        },
        {
          title: 'Registrazione Pro',
          description:
            '24-bit / 48 kHz. Lo standard per video e film. Occupa circa 16.5 MB al minuto. Più headroom per il mixaggio.',
        },
        {
          title: 'Alta Risoluzione',
          description:
            '24-bit / 96 kHz. Usato nel mastering. Raddoppia la dimensione standard della registrazione fino a 33 MB al minuto.',
        },
      ],
    },
    { type: 'title', text: 'Perché l’audio a 24-bit occupa il 50% di spazio in più rispetto al 16-bit?', level: 2 },
    {
      type: 'paragraph',
      html: 'Ogni campione audio a 16-bit utilizza 2 byte (16 ÷ 8) per memorizzare l’ampiezza. L’audio a 24-bit utilizza 3 byte per campione. Ciò significa che, a parità di frequenza di campionamento, un file a 24-bit sarà esattamente il 50% più grande di un file a 16-bit. Se un’ora di registrazione a 16-bit/44.1kHz occupa 635 MB, la stessa registrazione a 24-bit/44.1kHz salirà a 953 MB.',
    },
    {
      type: 'tip',
      title: 'Ne vale la pena?',
      html: 'Nonostante occupi più spazio, l’audio a 24-bit offre una gamma dinamica di 144 dB contro i 96 dB del 16-bit. Ciò fornisce un "noise floor" molto più basso, permettendo di registrare segnali più deboli senza che il rumore di fondo diventi un problema — fondamentale durante il mixaggio e il mastering professionale.',
    },
    { type: 'title', text: 'WAV vs FLAC vs MP3: l’impatto sul disco', level: 2 },
    {
      type: 'paragraph',
      html: '<strong>WAV / AIFF</strong> sono formati non compressi che preservano ogni bit della registrazione originale ma sono i più pesanti. Il <strong>FLAC</strong> applica una compressione lossless, riducendo la dimensione originale del 40-60% senza sacrificare la qualità. <strong>MP3 / AAC</strong> applicano una compressione lossy, rimuovendo frequenze impercettibili; un MP3 a 320 kbps occupa circa il 22% del WAV originale.',
    },
    {
      type: 'table',
      headers: ['Qualità', 'Frequenza', 'Bit', 'MB al Minuto (Stereo)'],
      rows: [
        ['Chiamata Telefonica', '8 kHz', '8-bit', '0.94 MB'],
        ['Radio FM', '32 kHz', '16-bit', '7.32 MB'],
        ['CD Originale', '44.1 kHz', '16-bit', '10.09 MB'],
        ['Studio Video', '48 kHz', '24-bit', '16.48 MB'],
        ['Alta Fedeltà', '96 kHz', '24-bit', '32.96 MB'],
      ],
    },
    { type: 'title', text: 'Formula di calcolo per tecnici', level: 2 },
    {
      type: 'paragraph',
      html: 'Se hai bisogno di eseguire il calcolo manualmente o di implementarlo nel tuo software, questa è la logica che segue il nostro calcolatore:',
    },
    {
      type: 'code',
      ariaLabel: 'Logica di calcolo spazio audio',
      code: `const sampleRate = 48000;\nconst bitDepth = 24;\nconst channels = 2;\nconst seconds = 3600;\n\nconst bitsPerSecond = sampleRate * bitDepth * channels;\nconst totalBytes = (bitsPerSecond * seconds) / 8;`,
    },
    { type: 'title', text: 'Casi d’uso per questo strumento', level: 2 },
    {
      type: 'list',
      items: [
        'Podcasting: evita di esaurire lo spazio sul tuo registratore portatile durante una lunga intervista.',
        'Studio Musicale: calcola quanti GB di spazio libero ti servono prima di iniziare una sessione da 40 tracce a 96kHz.',
        'Ingegneria del Suono Digitale: verifica che il bitrate di trasferimento sia compatibile con il tuo hardware.',
        'Post-produzione Cinematografica: stima le dimensioni delle riprese multicanale 5.1 per la consegna dei file in rete.',
        'Archiviazione: determina la capacità necessaria per digitalizzare una collezione di nastri analogici a qualità Master.',
      ],
    },
  ],
};
