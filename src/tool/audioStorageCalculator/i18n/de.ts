import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { AudioStorageCalculatorUI } from '../ui';

const slug = 'audio-speicher-rechner';
const title = 'Audio Speicher Rechner: WAV, FLAC und MP3 Dateigröße';
const description =
  'Schätzen Sie den benötigten Speicherplatz für Ihre Audioaufnahmen in WAV, FLAC und MP3 basierend auf Abtastrate und Bittiefe.';

const faqData = [
  {
    question: 'Wie viel Platz benötigt eine Stunde Audio bei 44,1 kHz 16-Bit?',
    answer:
      'In Stereo (CD Qualität) belegt eine Stunde Audio etwa 635 MB unkomprimierten Speicherplatz (WAV/AIFF).',
  },
  {
    question: 'Warum nimmt das WAV-Format so viel Platz ein?',
    answer:
      'WAV ist ein unkomprimiertes "verlustfreies" Format, was bedeutet, dass jedes Audio-Sample einzeln gespeichert wird, um maximale Wiedergabetreue ohne Datenreduktion zu gewährleisten.',
  },
  {
    question: 'Was ist besser zum Platzsparen: FLAC oder MP3?',
    answer:
      'FLAC spart bis zu 50 % Platz ohne Qualitätsverlust (verlustfreie Kompression). MP3 spart bis zu 80-90 %, entfernt jedoch nicht wahrnehmbare Audioinformationen (verlustbehaftete Kompression).',
  },
  {
    question: 'Wie berechnet man den Platzbedarf für einen 2-Stunden-Podcast?',
    answer:
      'Wenn Sie in Mono mit 48 kHz / 24-Bit aufnehmen, benötigen Sie etwa 988 MB. Der Rechner ermöglicht es Ihnen, diese Parameter genau für Ihr Equipment anzupassen.',
  },
];

const howToData = [
  {
    name: 'Audio konfigurieren',
    text: 'Wählen Sie die Abtastrate (kHz), Bittiefe und Anzahl der Kanäle.',
  },
  {
    name: 'Dauer eingeben',
    text: 'Geben Sie die Stunden, Minuten und Sekunden ein, die die Aufnahme voraussichtlich dauern wird.',
  },
  {
    name: 'Ergebnisse analysieren',
    text: 'Beobachten Sie die resultierende Größe in MB oder GB und vergleichen Sie diese mit verschiedenen Formaten wie FLAC oder MP3.',
  },
  {
    name: 'Kapazität bewerten',
    text: 'Prüfen Sie, wie viel Prozent Ihres SD-Karten- oder Festplattenspeichers die Aufnahme belegen wird.',
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
    labelConfig: 'Audio Konfiguration',
    labelHz: 'Abtastrate (kHz)',
    labelBits: 'Bittiefe',
    labelChannels: 'Kanäle',
    labelDuration: 'Aufnahmedauer',
    labelHours: 'Stunden',
    labelMinutes: 'Minuten',
    labelSeconds: 'Sekunden',
    labelCapacity: 'Verfügbarer Speicher (in GB)',
    toggleLabelSpace: 'Berechnen, wie viel ich mit meinem freien Speicherplatz aufnehmen kann',
    labelComparison: 'Format- & Speichervergleich',
    thFormat: 'Format',
    thQuality: 'Qualität',
    thSize: 'Geschätzte Größe',
    qualityWav: 'Unkomprimiert (Verlustfrei)',
    qualityFlac: 'Verlustfreie Kompression',
    qualityMp3High: 'Hohe Qualität (Verlustbehaftet)',
    qualityMp3Std: 'Standardqualität / Sprache',
    labelDevices: 'Prozentualer Anteil auf gängigen Geräten',
    device32: '32GB SD-Karte',
    device128: '128GB Speicher',
    device1tb: '1TB Festplatte',
    btnCopy: 'Zusammenfassung kopieren',
    optHz44100: '44,1 kHz (CD)',
    optHz48000: '48 kHz (Video-Standard)',
    optHz88200: '88,2 kHz',
    optHz96000: '96 kHz (High Resolution)',
    optHz192000: '192 kHz (Ultra HD)',
    optBits16: '16-Bit (CD / Standard)',
    optBits24: '24-Bit (Produzenten / Film)',
    optBits32: '32-Bit (Floating Point)',
    optCh1: 'Mono (1 Kanal)',
    optCh2: 'Stereo (2 Kanäle)',
    optCh6: '5.1 Surround (6 Kanäle)',
    optCh8: '7.1 Surround (8 Kanäle)',
    labelDurationSet: 'Konfigurierte Dauer: {time}',
    labelRecordingPossible: 'Aufnahme möglich mit {gb} GB konfiguriert',
    toggleLabelTime: 'Zurück zur Dauerberechnung',
    labelSpaceAvailable: 'Verfügbarer Speicherplatz',
    copyDone: 'Zusammenfassung kopiert!',
    summarySpace:
      'Die {t} Aufnahme mit {bits}-Bit/{hz} im {channels}-Modus benötigt etwa {result}.',
    summaryTime:
      'Mit {space} GB verfügbar können Sie bis zu {result} Audio bei {bits}-Bit/{hz} {channels} aufnehmen.',
  },
  seo: [
    {
      type: 'summary',
      title: 'Digitaler Speicherrechner für Audio',
      items: [
        '<strong>WAV zu MP3</strong>: Berechnen Sie die Dateigröße mit und ohne Kompression.',
        '<strong>Audio-Auflösung</strong>: Passen Sie Frequenz (kHz) und Bits (16/24/32) an.',
        '<strong>Rückwärtsrechnung</strong>: Wie viel kann ich mit meinem restlichen Speicherplatz aufnehmen?',
        '<strong>Professionelle Formate</strong>: Schätzung für FLAC und 192kHz Mastering.',
      ],
    },
    { type: 'title', text: 'Wie wird die Größe einer Audioaufnahme berechnet?', level: 2 },
    {
      type: 'paragraph',
      html: 'Die Größe einer unkomprimierten digitalen Audiodatei (wie WAV oder AIFF) hängt von drei grundlegenden technischen Faktoren ab: <strong>Abtastrate</strong> — wie oft pro Sekunde die Schallwelle "gemessen" wird (z. B. 44,1 kHz oder 48 kHz); <strong>Bittiefe</strong> — die Auflösung jeder Messung, wobei höhere Bits einen größeren Dynamikbereich und geringeres Rauschen bieten; und <strong>Kanäle</strong> — ob die Aufnahme in Mono (1), Stereo (2) oder Mehrkanal (Surround) erfolgt. Die mathematische Standardformel ist die <strong>Bitrate</strong>; multipliziert mit der Dauer in Sekunden ergibt sie die gesamte Rohdateigröße.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'CD Qualität',
          description:
            '16-Bit / 44,1 kHz. Belegt ca. 10,1 MB pro Minute in Stereo. Der historische Standard der Musikindustrie.',
        },
        {
          title: 'Pro Aufnahme',
          description:
            '24-Bit / 48 kHz. Der Standard für Video und Film. Belegt ca. 16,5 MB per Minute. Mehr Headroom für das Mischen.',
        },
        {
          title: 'High Resolution',
          description:
            '24-Bit / 96 kHz. Wird im Mastering verwendet. Verdoppelt die Standardaufnahmegröße auf bis zu 33 MB pro Minute.',
        },
      ],
    },
    { type: 'title', text: 'Warum benötigt 24-Bit-Audio 50 % mehr Platz als 16-Bit?', level: 2 },
    {
      type: 'paragraph',
      html: 'Jedes Audio-Sample in 16-Bit verbraucht 2 Bytes (16 ÷ 8), um die Amplitude zu speichern. Audio in 24-Bit verwendet 3 Bytes pro Sample. Das bedeutet, dass bei gleicher Abtastrate eine 24-Bit-Datei exakt 50 % größer ist als eine 16-Bit-Datei. Wenn eine einstündige Aufnahme in 16-Bit/44,1 kHz 635 MB belegt, steigt dieselbe Aufnahme in 24-Bit/44,1 kHz auf 953 MB.',
    },
    {
      type: 'tip',
      title: 'Lohnt sich der zusätzliche Platz?',
      html: 'Obwohl es mehr Platz beansprucht, bietet 24-Bit-Audio einen Dynamikbereich von 144 dB gegenüber 96 dB bei 16-Bit. Dies sorgt für einen wesentlich niedrigeren "Noise Floor", wodurch schwächere Signale ohne störendes Hintergrundrauschen aufgenommen werden können — entscheidend bei professionellem Mischen und Mastering.',
    },
    { type: 'title', text: 'WAV vs. FLAC vs. MP3: Die Auswirkung auf den Datenträger', level: 2 },
    {
      type: 'paragraph',
      html: '<strong>WAV / AIFF</strong> sind unkomprimierte Formate, die jedes Bit der Originalaufnahme bewahren, aber am schwersten sind. <strong>FLAC</strong> wendet eine verlustfreie Kompression an, die die Originalgröße um 40-60 % reduziert, ohne die Qualität zu beeinträchtigen. <strong>MP3 / AAC</strong> verwenden eine verlustbehaftete Kompression, bei der nicht wahrnehmbare Frequenzen entfernt werden; ein MP3 mit 320 kbps belegt etwa 22 % des ursprünglichen WAV.',
    },
    {
      type: 'table',
      headers: ['Qualität', 'Frequenz', 'Bits', 'MB pro Minute (Stereo)'],
      rows: [
        ['Telefonanruf', '8 kHz', '8-Bit', '0,94 MB'],
        ['UKW-Radio', '32 kHz', '16-Bit', '7,32 MB'],
        ['Original CD', '44,1 kHz', '16-Bit', '10,09 MB'],
        ['Videostudio', '48 kHz', '24-Bit', '16,48 MB'],
        ['High Fidelity', '96 kHz', '24-Bit', '32,96 MB'],
      ],
    },
    { type: 'title', text: 'Berechnungsformel für Techniker', level: 2 },
    {
      type: 'paragraph',
      html: 'Wenn Sie die Berechnung manuell durchführen oder in Ihrer eigenen Software implementieren müssen, folgt dies der Logik unseres Rechners:',
    },
    {
      type: 'code',
      ariaLabel: 'Logik der Audio-Speicherberechnung',
      code: `const sampleRate = 48000;\nconst bitDepth = 24;\nconst channels = 2;\nconst seconds = 3600;\n\nconst bitsPerSecond = sampleRate * bitDepth * channels;\nconst totalBytes = (bitsPerSecond * seconds) / 8;`,
    },
    { type: 'title', text: 'Anwendungsfälle für dieses Tool', level: 2 },
    {
      type: 'list',
      items: [
        'Podcasting: Vermeiden Sie, dass Ihnen während eines langen Interviews der Platz auf Ihrem tragbaren Recorder ausgeht.',
        'Musikstudio: Berechnen Sie, wie viele GB freien Speicherplatz Sie benötigen, bevor Sie eine 40-Spur-Session mit 96 kHz eröffnen.',
        'Digital Sound Engineering: Überprüfen Sie, ob die Übertragungsbitrate mit Ihrer Hardware kompatibel ist.',
        'Film-Postproduktion: Schätzen Sie die Größe von 5.1-Mehrkanal-Aufnahmen für die Dateiauslieferung über das Netzwerk.',
        'Archivierung: Bestimmen Sie die benötigte Kapazität zur Digitalisierung einer Sammlung analoger Bänder in Master-Qualität.',
      ],
    },
  ],
};
