import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { AudioStorageCalculatorUI } from '../ui';

const slug = 'kalkulator-pamieci-audio';
const title = 'Kalkulator pamięci audio: rozmiar plików WAV, FLAC i MP3';
const description =
  'Oszacuj miejsce na dysku potrzebne na nagrania audio w formatach WAV, FLAC i MP3 w zależności od częstotliwości próbkowania i głębi bitowej.';

const faqData = [
  {
    question: 'Ile miejsca zajmuje jedna godzina dźwięku przy 44,1 kHz 16-bit?',
    answer:
      'W formacie stereo (jakość CD) jedna godzina dźwięku zajmuje około 635 MB nieskompresowanego miejsca na dysku (WAV/AIFF).',
  },
  {
    question: 'Dlaczego format WAV zajmuje tak dużo miejsca?',
    answer:
      'WAV to format nieskompresowany "bezstratny" (lossless), co oznacza, że przechowuje każdą próbkę dźwięku oddzielnie, aby zachować maksymalną wierność bez redukcji danych.',
  },
  {
    question: 'Co jest lepsze dla oszczędności miejsca: FLAC czy MP3?',
    answer:
      'FLAC oszczędza do 50% miejsca bez utraty jakości (kompresja bezstratna). MP3 oszczędza do 80-90%, ale usuwa niesłyszalne informacje dźwiękowe (kompresja stratna).',
  },
  {
    question: 'Jak obliczyć miejsce potrzebne na 2-godzinny podcast?',
    answer:
      'Jeśli nagrywasz w formacie Mono przy 48 kHz / 24-bit, będziesz potrzebować około 988 MB. Kalkulator pozwala precyzyjnie dostosować te parametry do Twojego sprzętu.',
  },
];

const howToData = [
  {
    name: 'Skonfiguruj dźwięk',
    text: 'Wybierz częstotliwość próbkowania (kHz), głębię bitową i liczbę kanałów.',
  },
  {
    name: 'Wprowadź czas trwania',
    text: 'Wprowadź godziny, minuty i sekundy szacowanego czasu trwania nagrania.',
  },
  {
    name: 'Przeanalizuj wyniki',
    text: 'Sprawdź wynikowy rozmiar w MB lub GB i porównaj go z różnymi formatami, takimi jak FLAC lub MP3.',
  },
  {
    name: 'Oceń pojemność',
    text: 'Sprawdź, jaki procent pamięci karty SD lub dysku twardego zajmie nagranie.',
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
  faqTitle: 'Często zadawane pytania',
  faq: faqData,
  bibliographyTitle: 'Referencje techniczne',
  bibliography: [
    {
      name: 'Głębia bitowa – Wikipedia',
      url: 'https://pl.wikipedia.org/wiki/G%C5%82%C4%99bia_bitowa_d%C5%BAwi%C4%99ku',
    },
    {
      name: 'Próbkowanie – Wikipedia',
      url: 'https://pl.wikipedia.org/wiki/Pr%C3%B3bkowanie',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  ui: {
    labelConfig: 'Konfiguracja audio',
    labelHz: 'Częst. próbkowania (kHz)',
    labelBits: 'Głębia bitowa',
    labelChannels: 'Kanały',
    labelDuration: 'Czas trwania nagrania',
    labelHours: 'Godziny',
    labelMinutes: 'Minuty',
    labelSeconds: 'Sekundy',
    labelCapacity: 'Dostępna pamięć (w GB)',
    toggleLabelSpace: 'Oblicz, ile mogę nagrać przy wolnym miejscu',
    labelComparison: 'Porównanie formatów i pamięci',
    thFormat: 'Format',
    thQuality: 'Jakość',
    thSize: 'Szacowany rozmiar',
    qualityWav: 'Nieskompresowany (bezstratny)',
    qualityFlac: 'Kompresja bezstratna',
    qualityMp3High: 'Wysoka jakość (stratna)',
    qualityMp3Std: 'Jakość standardowa / Głos',
    labelDevices: 'Procent zajętości na typowych urządzeniach',
    device32: 'Karta SD 32GB',
    device128: 'Pamięć 128GB',
    device1tb: 'Dysk twardy 1TB',
    btnCopy: 'Kopiuj podsumowanie',
    optHz44100: '44,1 kHz (CD)',
    optHz48000: '48 kHz (Standard wideo)',
    optHz88200: '88,2 kHz',
    optHz96000: '96 kHz (Wysoka rozdzielczość)',
    optHz192000: '192 kHz (Ultra HD)',
    optBits16: '16-bit (CD / Standard)',
    optBits24: '24-bit (Producenci / Film)',
    optBits32: '32-bit (Floating Point)',
    optCh1: 'Mono (1 kanał)',
    optCh2: 'Stereo (2 kanały)',
    optCh6: '5.1 Surround (6 kanałów)',
    optCh8: '7.1 Surround (8 kanałów)',
    labelDurationSet: 'Skonfigurowany czas: {time}',
    labelRecordingPossible: 'Nagrywanie możliwe przy {gb} GB',
    toggleLabelTime: 'Wróć do obliczania czasu trwania',
    labelSpaceAvailable: 'Dostępne miejsce',
    copyDone: 'Podsumowanie skopiowane!',
    summarySpace:
      'Nagranie o długości {t} przy {bits}-bit/{hz} w trybie {channels} zajmie około {result}.',
    summaryTime:
      'Przy dostępnych {space} GB możesz nagrać do {result} dźwięku przy {bits}-bit/{hz} {channels}.',
  },
  seo: [
    {
      type: 'summary',
      title: 'Kalkulator cyfrowej pamięci dźwięku',
      items: [
        '<strong>WAV na MP3</strong>: Oblicz rozmiar plików z kompresją i bez niej.',
        '<strong>Rozdzielczość audio</strong>: Dostosuj częstotliwość (kHz) i bity (16/24/32).',
        '<strong>Obliczanie odwrotne</strong>: Ile mogę nagrać przy pozostałym miejscu?',
        '<strong>Formaty profesjonalne</strong>: Szacunki dla FLAC i masteringu 192 kHz.',
      ],
    },
    { type: 'title', text: 'Jak oblicza się rozmiar nagrania audio?', level: 2 },
    {
      type: 'paragraph',
      html: 'Rozmiar nieskompresowanego cyfrowego pliku audio (takiego jak WAV lub AIFF) zależy od trzech podstawowych czynników technicznych: <strong>Częstotliwości próbkowania</strong> — ile razy na sekundę fala dźwiękowa jest "mierzona" (np. 44,1 kHz lub 48 kHz); <strong>Głębi bitowej</strong> — rozdzielczości każdego pomiaru (wyższa liczba bitów zapewnia większy zakres dynamiczny i niższy poziom szumów); oraz <strong>Kanałów</strong> — czy nagranie jest w formacie Mono (1), Stereo (2) czy wielokanałowym (Surround). Standardowy wzór matematyczny to <strong>Bitrate</strong>; pomnożony przez czas trwania w sekundach, daje całkowity rozmiar surowego pliku.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Jakość CD',
          description:
            '16-bit / 44,1 kHz. Zajmuje około 10,1 MB na minutę w stereo. Historyczny standard przemysłu muzycznego.',
        },
        {
          title: 'Nagrywanie Pro',
          description:
            '24-bit / 48 kHz. Standard dla wideo i filmu. Zajmuje około 16,5 MB na minutę. Większy margines (headroom) przy miksowaniu.',
        },
        {
          title: 'Wysoka rozdzielczość',
          description:
            '24-bit / 96 kHz. Stosowana w masteringu. Podwaja standardowy rozmiar nagrania do 33 MB na minutę.',
        },
      ],
    },
    { type: 'title', text: 'Dlaczego dźwięk 24-bitowy zajmuje o 50% więcej miejsca niż 16-bitowy?', level: 2 },
    {
      type: 'paragraph',
      html: 'Każda próbka dźwięku w formacie 16-bitowym zajmuje 2 bajty (16 ÷ 8). Dźwięk 24-bitowy zajmuje 3 bajty na próbkę. Oznacza to, że przy tej samej częstotliwości próbkowania plik 24-bitowy będzie dokładnie o 50% większy niż plik 16-bitowy. Jeśli godzinne nagranie w jakości 16-bit/44,1 kHz zajmuje 635 MB, to samo nagranie w jakości 24-bit/44,1 kHz zajmie 953 MB.',
    },
    {
      type: 'tip',
      title: 'Czy warto poświęcić dodatkowe miejsce?',
      html: 'Mimo że zajmuje więcej miejsca, dźwięk 24-bitowy oferuje zakres dynamiczny 144 dB w porównaniu do 96 dB dla 16-bitów. Zapewnia to znacznie niższy "poziom szumów", co pozwala na nagrywanie słabszych sygnałów bez problemu z szumem tła — jest to kluczowe podczas profesjonalnego miksowania i masteringu.',
    },
    { type: 'title', text: 'WAV vs FLAC vs MP3: wpływ na dysk', level: 2 },
    {
      type: 'paragraph',
      html: '<strong>WAV / AIFF</strong> to formaty nieskompresowane, które zachowują każdy bit oryginalnego nagrania, ale są najcięższe. <strong>FLAC</strong> stosuje bezstratną kompresję, redukując oryginalny rozmiar o 40-60% bez utraty jakości. <strong>MP3 / AAC</strong> stosują kompresję stratną, usuwając niesłyszalne częstotliwości; MP3 o przepływności 320 kbps zajmuje około 22% oryginalnego pliku WAV.',
    },
    {
      type: 'table',
      headers: ['Jakość', 'Częstotliwość', 'Bity', 'MB na minutę (Stereo)'],
      rows: [
        ['Połączenie tel.', '8 kHz', '8-bit', '0.94 MB'],
        ['Radio FM', '32 kHz', '16-bit', '7.32 MB'],
        ['Oryginalne CD', '44,1 kHz', '16-bit', '10.09 MB'],
        ['Studio wideo', '48 kHz', '24-bit', '16.48 MB'],
        ['High Fidelity', '96 kHz', '24-bit', '32.96 MB'],
      ],
    },
    { type: 'title', text: 'Wzór obliczeniowy dla techników', level: 2 },
    {
      type: 'paragraph',
      html: 'Jeśli musisz wykonać obliczenia ręcznie lub zaimplementować je we własnym oprogramowaniu, nasz kalkulator kieruje się następującą logiką:',
    },
    {
      type: 'code',
      ariaLabel: 'Logika obliczania pamięci audio',
      code: `const sampleRate = 48000;\nconst bitDepth = 24;\nconst channels = 2;\nconst seconds = 3600;\n\nconst bitsPerSecond = sampleRate * bitDepth * channels;\nconst totalBytes = (bitsPerSecond * seconds) / 8;`,
    },
    { type: 'title', text: 'Przypadki użycia tego narzędzia', level: 2 },
    {
      type: 'list',
      items: [
        'Podcasting: Uniknij braku miejsca na przenośnym rejestratorze podczas długiego wywiadu.',
        'Studio muzyczne: Oblicz, ile GB wolnego miejsca potrzebujesz przed rozpoczęciem 40-ścieżkowej sesji przy 96 kHz.',
        'Inżynieria dźwięku cyfrowego: Sprawdź, czy przepływność transferu jest kompatybilna z Twoim sprzętem.',
        'Postprodukcja filmowa: Oszacuj rozmiar wielokanałowych ujęć 5.1 do dostarczenia plików przez sieć.',
        'Archiwizacja: Określ pojemność potrzebną do dygitalizacji kolekcji taśm analogowych w jakości Master.',
      ],
    },
  ],
};
