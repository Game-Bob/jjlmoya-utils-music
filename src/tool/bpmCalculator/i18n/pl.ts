import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BpmCalculatorUI } from '../ui';

const slug = 'kalkulator-bpm-na-milisekundy';
const title = 'Kalkulator BPM na milisekundy dla Delay i Reverb';
const description =
  'Konwertuj tempo swojego projektu (BPM) na dokładny czas opóźnienia (ms) i częstotliwość (Hz). Niezbędne narzędzie do ustawiania delayów, pogłosów i kompresorów z rytmiczną precyzją.';

const faqData = [
  {
    question: 'Co to jest Pre-delay w pogłosie?',
    answer:
      'Pre-delay to czas między dźwiękiem bezpośrednim (źródłem) a początkiem ogona pogłosu. Rytmiczne ustawienie tego parametru pozwala oryginalnemu źródłu pozostać wyraźnym przed włączeniem się efektu przestrzennego — ma to kluczowe znaczenie dla wokali i instrumentów perkusyjnych.',
  },
  {
    question: 'Jak działa Tap Tempo?',
    answer:
      'Tap Tempo wykrywa tempo poprzez rytmiczne klikanie w takt utworu. Każde kliknięcie jest mierzone w czasie, a system wyciąga średnią z interwałów, aby podać dokładną wartość BPM. To najszybszy sposób na zsynchronizowanie efektów z zewnętrzną ścieżką.',
  },
  {
    question: 'Dlaczego warto używać milisekund zamiast automatycznej synchronizacji?',
    answer:
      "Istnieją trzy główne powody: używanie sprzętu analogowego bez MIDI, precyzyjne dostrajanie parametrów pre-delay tak, aby pogłos 'oddychał', oraz korekty 'groove', gdzie efekty są lekko przesunięte poza siatkę rytmiczną, aby uniknąć statycznego, robotycznego brzmienia.",
  },
  {
    question: 'Do czego służy rytmiczna wartość Hz?',
    answer:
      'Wartości w hercach informują o tym, ile razy coś dzieje się w ciągu sekundy. Są niezbędne do konfigurowania oscylatorów LFO, szybkości przemiatania phasera lub modulacji filtrów w syntezatorach, które nie posiadają natywnej synchronizacji tempa.',
  },
];

const howToData = [
  {
    name: 'Wprowadź BPM',
    text: 'Wpisz tempo projektu w centralne pole lub użyj przycisku Tap Tempo.',
  },
  {
    name: 'Znajdź podział',
    text: 'Zlokalizuj potrzebną nutę (ćwierćnutę, ósemkę itp.) w tabelach nut prostych, z kropką lub trioli.',
  },
  {
    name: 'Skopiuj wartość',
    text: 'Kliknij ikonę kopiowania obok wartości w milisekundach, aby wkleić ją bezpośrednio do wtyczki lub sprzętu.',
  },
  {
    name: 'Ustaw Pre-delay',
    text: 'Użyj dolnej sekcji dla ultra-krótkich wartości, idealnych do oddzielenia pogłosu od wokalu prowadzącego.',
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
    sectionDelay: 'Czasy Delay',
    sectionDotted: 'Nuty z kropką',
    sectionTriplets: 'Triole',
    sectionReverb: 'Projektowanie pogłosu (Pre-delay)',
    colNote: 'Nuta',
    colMs: 'ms',
    colHz: 'Hz',
    infoPreDelay:
      '<strong>Pre-delay</strong> oddziela oryginalny atak od ogona pogłosu w celu uzyskania przejrzystości.',
    copyAriaMs: 'Kopiuj milisekundy',
    copyAriaPreDelay: 'Kopiuj pre-delay',
    copyFeedback: 'Skopiowano!',
  },
  seo: [
    {
      type: 'summary',
      title: 'Funkcje kalkulatora',
      items: [
        'Błyskawiczne obliczenia dla nut prostych, z kropką i trioli',
        'Wartości w milisekundach i Hz dla każdego podziału rytmicznego',
        'Sekcja Pre-delay do projektowania pogłosu z muzyczną precyzją',
        'Tap Tempo: wykrywanie BPM poprzez wybijanie rytmu do muzyki',
        'Kopiowanie jednym kliknięciem do schowka dla dowolnej stacji DAW lub wtyczki',
      ],
    },
    {
      type: 'title',
      text: 'Dlaczego kalkulator BPM na milisekundy jest niezbędny?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'W nowoczesnej produkcji muzycznej rytmiczna precyzja odróżnia amatorski miks od profesjonalnego. Chociaż większość programów DAW, takich jak Ableton Live, FL Studio czy Logic Pro, zawiera automatyczną synchronizację efektów, istnieje niezliczona ilość sytuacji, w których sterowanie ręczne jest lepsze.',
    },
    {
      type: 'title',
      text: 'Znaczenie parametru Pre-delay w pogłosie',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Jednym z najważniejszych zastosowań tego narzędzia jest regulacja <strong>pre-delay</strong>. Jeśli nałożysz pogłos na wokal bez pre-delay, ogon efektu zaczyna się natychmiast, zamazując spółgłoski i ograniczając przejrzystość. Obliczając rytmiczny pre-delay (np. nutę 64 lub 128), pozwalasz oryginalnemu głosowi "oddychać" przed włączeniem się sztucznej przestrzeni akustycznej. Tworzy to poczucie głębi bez rezygnacji z obecności źródła dźwięku.',
    },
    {
      type: 'title',
      text: 'Delay analogowy i sprzęt zewnętrzny',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Jeśli kolekcjonujesz analogowe kostki delay lub vintage’owe syntezatory, wiesz, że wiele z nich nie posiada wejścia MIDI clock. Ręczne ustawienie edycji taśmowej wymaga dokładnej znajomości liczby milisekund odpowiadających ósemce lub ćwierćnucie z kropką. Nasz kalkulator natychmiast podaje te wartości, pozwalając na precyzyjne ustawienie sprzętu.',
    },
    {
      type: 'title',
      text: 'Efekty poza siatką i Groove',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Czasami matematyczna doskonałość brzmi nudno. Wielu producentów wykorzystuje wartości milisekundowe jako punkt wyjścia, a następnie lekko je przesuwa. Przesunięcie delay’a o 5 do 10 ms poza siatkę może dodać ludzki <em>swing</em> lub unikalny <em>groove</em>, którego sztywna kwantyzacja nigdy nie będzie w stanie odtworzyć.',
    },
    {
      type: 'title',
      text: 'Zsynchronizowana kompresja i oscylatory LFO',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Czy wiesz, że czasy <strong>Ataku</strong> i <strong>Uwalniania</strong> (Release) kompresora również mogą być rytmiczne? Ustawienie parametru release kompresora na szynie perkusyjnej tak, aby kończył się dokładnie przed kolejnym uderzeniem stopy, tworzy efekt "pompowania" lub <em>oddychania</em>, który wzmacnia rytm utworu. Podobnie wartość Hz jest kluczowa dla konfigurowania oscylatorów niskich częstotliwości (LFO) w syntezatorach bez natywnej synchronizacji tempa.',
    },
    {
      type: 'tip',
      title: 'Jak korzystać z Tap Tempo',
      html: 'Funkcja <strong>Tap Tempo</strong> jest idealna w sytuacjach na żywo lub gdy słuchasz zewnętrznej ścieżki, której tempa nie znasz. Po prostu klikaj rytmicznie w przycisk zgodnie z pulsem muzyki. Zalecamy co najmniej 4 lub 5 kliknięć, aby algorytm mógł dokładniej uśrednić wartość.',
    },
    {
      type: 'title',
      text: 'Matematyczne wzory tempa',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Podstawowy wzór jest prosty: <code>ms = 60 000 / BPM</code>. Na tej podstawie stosowane są mnożniki dla każdego podziału.',
    },
    {
      type: 'list',
      items: [
        'Nuty proste: na podstawie podziału binarnego (1, 0.5, 0.25 itd.).',
        'Z kropką: pomnóż wartość bazową przez 1.5.',
        'Triole: pomnóż wartość bazową przez 0.667 (2/3).',
      ],
    },
  ],
};
