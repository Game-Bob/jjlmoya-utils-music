import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PhaseDistanceUI } from '../ui';

const slug = 'kalkulator-rozstaw-fazy';
const title = 'Kalkulator odległości fazowej dla mikrofonów';
const description =
  'Oblicz opóźnienie i kompensację wymagane do wyrównania mikrofonów. Unikaj znoszenia fazy i filtrowania grzebieniowego z dokładnością co do próbki oraz korekcją temperatury.';

const faqData = [
  {
    question: 'Co to jest znoszenie fazy w dźwięku?',
    answer:
      'Jest to zjawisko akustyczne, które występuje, gdy dwa sygnały z tego samego źródła docierają w różnym czasie. Fale nakładają się na siebie i jeśli są przesunięte o 180 stopni, znoszą się wzajemnie, czyniąc dźwięk cienkim i pozbawionym ciała.',
  },
  {
    question: 'Dlaczego temperatura wpływa na obliczenia?',
    answer:
      'Ponieważ dźwięk rozchodzi się w powietrzu, a gęstość powietrza zmienia się wraz z temperaturą. Im cieplej, tym szybciej rozchodzi się dźwięk. Precyzyjna regulacja temperatury pozwala obliczyć dokładne opóźnienie między rozdzielonymi mikrofonami.',
  },
  {
    question: 'Czy odwrócenie fazy to to samo co odwrócenie polaryzacji?',
    answer:
      'Technicznie nie, chociaż terminy te są używane zamiennie. Polaryzacja to zmiana elektryczna (obrót o 180°), podczas gdy faza to przesunięcie w czasie. Nasze narzędzie pozwala symulować jedno i drugie, aby znaleźć punkt największej spójności dźwiękowej.',
  },
  {
    question: 'Co to jest filtrowanie grzebieniowe (Comb Filtering)?',
    answer:
      'Jest to odpowiedź częstotliwościowa wynikająca z połączenia sygnału z jego opóźnioną wersją. Tworzy serię szczytów i dołków - jak zęby grzebienia - które drastycznie zmieniają brzmienie instrumentu.',
  },
  {
    question: 'Jaka jest reguła 3 do 1 w technice mikrofonowej?',
    answer:
      'Jest to technika minimalizowania problemów z fazą: przy użyciu dwóch mikrofonów dla różnych źródeł, odległość między mikrofonami powinna wynosić co najmniej trzykrotność odległości każdego mikrofonu od jego źródła.',
  },
  {
    question: 'Czy lepiej wyrównywać mikrofony fizycznie czy programowo?',
    answer:
      'Dobre wyrównanie fizyczne podczas nagrywania jest zawsze zalecane, aby uniknąć artefaktów. Jednak cyfrowe opóźnienie w programie DAW zapewnia dokładność co do próbki, która jest prawie niemożliwa do osiągnięcia poprzez ręczne przesuwanie mikrofonów.',
  },
];

const howToData = [
  {
    name: 'Zmierz odległości',
    text: 'Zmierz fizyczną odległość od źródła dźwięku (np. werbla) do każdego z używanych mikrofonów.',
  },
  {
    name: 'Ustaw środowisko',
    text: 'Wprowadź temperaturę otoczenia i częstotliwość próbkowania swojego projektu, aby uzyskać obliczenia oparte na rzeczywistej fizyce.',
  },
  {
    name: 'Przeanalizuj wykres',
    text: 'Spójrz na wizualizator odpowiedzi częstotliwościowej, aby zidentyfikować ewentualne krytyczne znoszenia w zakresie słyszalnym.',
  },
  {
    name: 'Zastosuj kompensację',
    text: 'Skopiuj wartość w milisekundach lub próbkach i wprowadź ją do wtyczki opóźnienia na swoim kanale, aby idealnie wyrównać ścieżki.',
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

export const content: ToolLocaleContent<PhaseDistanceUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  ui: {
    labelTemp: 'Temperatura (°C) / Dźwięk',
    btnAuto: 'Auto',
    labelSampleRate: 'Częstotliwość próbkowania (kHz)',
    labelUnits: 'Układ jednostek',
    optMetric: 'Metryczny (m/cm)',
    optImperial: 'Imperialny (ft/in)',
    labelDistA: 'Odległość mikrofonu A',
    labelDistB: 'Odległość mikrofonu B',
    labelPresets: 'Szybkie ustawienia',
    presetCoincident: 'Koincydentny (XY)',
    presetSnare: 'Werbel',
    presetAmbient: 'Otoczenie',
    btnInvert: 'Odwróć fazę (Φ)',
    labelGain: 'Względne wzmocnienie mikrofonu B:',
    btnCopy: 'Kopiuj próbki',
    labelDelay: 'Wymagane opóźnienie',
    unitMs: 'milisekurdy (ms)',
    labelCompensation: 'Kompensacja',
    unitSamples: 'Próbki',
    labelPhaseStatus: 'Status fazy',
    textLoading: 'Ładowanie...',
    statusInPhase: 'W FAZIE',
    statusInPhaseDesc: 'Sygnały idealnie wyrównane.',
    statusCritical: 'KRYTYCZNE ZNOSZENIE',
    statusCriticalDesc: 'Znaczne filtrowanie grzebieniowe w niskim i średnim zakresie.',
    statusOffAxis: 'POZA OSIĄ',
    statusOffAxisDesc: 'Lekkie przesunięcie fazowe. Zmieniona tekstura.',
    warningCritical: 'MOŻLIWE KRYTYCZNE ZNOSZENIE',
    labelSoundSpeed: 'Prędkość dźwięku',
    labelDistDiff: 'Różnica odległości',
    labelNullFreq: 'Pierwsze znoszenia',
    textNone: 'Brak',
    chartTitle: 'ODPOWIEDŹ CZĘSTOTLIWOŚCIOWA (H) - FILTROWANIE GRZEBIENIOWE',
    promptSoundSpeed: 'Prędkość dźwięku (m/s):',
    copyFeedback: 'Skopiowano!',
  },
  seo: [
    {
      type: 'summary',
      title: 'Funkcje kalkulatora',
      items: [
        'Dokładne obliczenia fizyczne z kompensacją temperatury dla prędkości dźwięku',
        'Wynik w milisekundach i próbkach do kompensacji w DAW',
        'Wizualizator odpowiedzi częstotliwościowej na wykresie w pełnym paśmie słyszalnym',
        'Gotowe ustawienia mikrofonów (XY, werbel, ambient)',
        'Symulacja odwrócenia fazy i regulacja względnego wzmocnienia',
        'Obsługa jednostek metrycznych i imperialnych',
      ],
    },
    {
      type: 'title',
      text: 'Co to jest znoszenie fazy i dlaczego niszczy twoje miksy?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'W świecie inżynierii dźwięku faza jest jednym z najbardziej krytycznych pojęć i, paradoksalnie, jednym z najczęściej pomijanych przez początkujących. Kiedy nagrywasz źródło dźwięku - takie jak zestaw perkusyjny lub wzmacniacz gitarowy - za pomocą dwóch lub więcej mikrofonów umieszczonych w różnych odległościach, fale dźwiękowe nie docierają do kapsuł w tym samym czasie. Ta różnica czasu, choć niewielka, powoduje zjawisko znane jako <strong>przesunięcie fazowe</strong>.',
    },
    {
      type: 'title',
      text: 'Zjawisko filtrowania grzebieniowego',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Kiedy dwa identyczne sygnały są łączone z niewielkim opóźnieniem między nimi, w odpowiedzi częstotliwościowej pojawia się seria dołków i szczytów. Widziany na analizatorze widma wzór przypomina zęby grzebienia - stąd nazwa. Ten efekt drastycznie i destrukcyjnie zmienia naturalną barwę instrumentu.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Wpływ na niskie tony',
          description:
            'Znoszenie fazy jest najbardziej niszczycielskie w niskich częstotliwościach, gdzie ciało dźwięku całkowicie znika.',
        },
        {
          title: 'Metaliczna tekstura',
          description:
            'Filtrowanie grzebieniowe dodaje sztuczne podbarwienie, które brzmi pusto lub jest zbyt przetworzone.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Wpływ temperatury na obliczenia',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Wielu realizatorów dźwięku zapomina, że powietrze jest ośrodkiem fizycznym, a jego gęstość zmienia się wraz z temperaturą. Prędkość dźwięku nie jest stałą niezmienną - przy 20°C wynosi w przybliżeniu 343 metry na sekundę.',
    },
    {
      type: 'code',
      code: 'v = 331.3 + (0.606 × T)',
      ariaLabel: 'Wzór na prędkość dźwięku w funkcji temperatury',
    },
    {
      type: 'tip',
      title: 'Chirurgiczna kompensacja',
      html: 'Różnica zaledwie kilku stopni może przesunąć punkty znoszenia o kilka herców. Użycie naszego kalkulatora z rzeczywistą temperaturą twojego studia gwarantuje idealne wyrównanie w programie DAW.',
    },
    {
      type: 'title',
      text: 'Krytyczne scenariusze nagraniowe',
      level: 2,
    },
    {
      type: 'list',
      items: [
        'Werbel (góra i dół): Wyrównaj oba naciągi w czasie, aby zmaksymalizować uderzenie.',
        'Overheads i bliskie mikrofony: Opóźnij bliskie mikrofony, aby pasowały do fazy overheadów.',
        'Gitary z wieloma mikrofonami: Połącz mikrofon dynamiczny i wstęgowy bez utraty niskiego środka.',
        'Bas DI i mikrofon: Zsynchronizuj sygnał bezpośredni z mikrofonem wzmacniacza, aby uzyskać potężne brzmienie.',
      ],
    },
    {
      type: 'title',
      text: 'Wyrównanie fizyczne a przetwarzanie cyfrowe',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Chociaż nasze narzędzie podaje wartości do korygowania fazy w programie DAW po nagraniu, zawsze zalecamy dążenie do najlepszego możliwego wyrównania fizycznego w studiu. Przesunięcie mikrofonu o kilka milimetrów może być bardziej skuteczne niż jakiekolwiek przetwarzanie cyfrowe.',
    },
    {
      type: 'stats',
      items: [
        { label: 'Prędkość przy 20°C', value: '343.2 m/s' },
        { label: 'Milisekundy/cm', value: '0.029 ms' },
        { label: 'Próbki przy 48kHz', value: '1.4 na cm' },
      ],
    },
    {
      type: 'title',
      text: 'Tabela odniesienia: Odległość vs. Pierwsze znoszenie',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Różnica (cm)', 'Opóźnienie (ms)', '1. znoszenie (Hz)', 'Wpływa na...'],
      rows: [
        ['1 cm', '0.029', '17160', 'Ekstremalna góra'],
        ['5 cm', '0.146', '3432', 'Wyższy środek (obecność)'],
        ['10 cm', '0.291', '1716', 'Środek (obecność)'],
        ['30 cm', '0.874', '572', 'Niski środek (ciało)'],
        ['1 metr', '2.914', '172', 'Dół (częstotliwość podstawowa)'],
      ],
    },
    {
      type: 'title',
      text: 'Zalety i wady metod korekcji',
      level: 2,
    },
    {
      type: 'proscons',
      items: [
        {
          pro: 'Wyrównanie fizyczne: Mniejsza degradacja oryginalnego sygnału.',
          con: 'Wyrównanie fizyczne: Trudne do dostrojenia z mikroskopijną dokładnością.',
        },
        {
          pro: 'Korekcja cyfrowa: Absolutna precyzja na poziomie próbek.',
          con: 'Korekcja cyfrowa: Może powodować pre-echo przy nieprawidłowym zastosowaniu.',
        },
        {
          pro: 'Odwrócenie polaryzacji: Natychmiastowe rozwiązanie w przypadku znoszenia o 180°.',
          con: 'Odwrócenie polaryzacji: Nie koryguje pośrednich przesunięć fazowych.',
        },
        {
          pro: 'Kompensacja czasowa: Przywraca utracone uderzenie i dynamikę.',
          con: 'Kompensacja czasowa: Wymaga precyzyjnego pomiaru każdego mikrofonu.',
        },
      ],
    },
    {
      type: 'tip',
      title: 'Jak wykryć problemy z fazą na ucho?',
      html: 'Naciśnij przycisk "Odwróć fazę" (Φ). Jeśli jego włączenie sprawi, że dźwięk zyska ciało i niskie częstotliwości, oznacza to, że mikrofony były poza fazą. Jeśli dźwięk znika lub staje się cieńszy, były one prawidłowo wyrównane.',
    },
    {
      type: 'title',
      text: 'Kompatybilność Mono i Stereofonia',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'W nagraniach stereo relacja fazowa określa stabilność obrazu dźwiękowego. W przypadku poważnych niespójności dźwięk może całkowicie zniknąć, gdy miks zostanie odtworzony w systemie mono. Nasz kalkulator pomaga przewidzieć, które częstotliwości ucierpią najbardziej po zsumowaniu kanałów.',
    },
  ],
};
