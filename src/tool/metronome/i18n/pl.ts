import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MetronomeUI } from '../ui';

const slug = 'metronom-pl';
const title = 'Metronom Online: Wysoka Precyzja Wizualna i Dźwiękowa';
const description =
  'Darmowy metronom online dla muzyków. Precyzja milisekundowa dzięki Web Audio API. Tryb wizualny, dźwiękowy i Tap Tempo. Idealny do ćwiczeń na instrumencie.';

const faqData = [
  {
    question: 'Czy ten metronom jest wystarczająco dokładny do profesjonalnego użytku?',
    answer:
      'Tak. Korzystamy z interfejsu Web Audio API, który planuje dźwięki bezpośrednio na zegarze sprzętowym urządzenia. Zapobiega to mikro-opóźnieniom typowym dla innych aplikacji internetowych i gwarantuje milisekundową precyzję, nawet podczas długich sesji.',
  },
  {
    question: 'Co to jest Tap Tempo i jak go używać?',
    answer:
      'Jest to funkcja, która pozwala obliczyć BPM poprzez rytmiczne stukanie. Po prostu klikaj przycisk „TAP” lub naciskaj spację w rytm muzyki, której słuchasz, aby natychmiast uzyskać dokładne tempo.',
  },
  {
    question: 'Czy mogę zmienić metrum i akcenty?',
    answer:
      'Tak, możesz skonfigurować różne metra (2/4, 3/4, 4/4, 6/8 itd.) i dostosować akcenty uderzeń do stylu muzyki, którą ćwiczysz.',
  },
  {
    question: 'Dlaczego nie słyszę dźwięku na moim iPhonie lub iPadzie?',
    answer:
      'Na urządzeniach z systemem iOS technologia Web Audio respektuje fizyczny przełącznik wyciszenia. Upewnij się, że telefon nie jest w trybie cichym i podgłośnij multimedia, aby słyszeć kliknięcia.',
  },
];

const howToData = [
  {
    name: 'Ustaw BPM',
    text: 'Użyj suwaka lub przycisków dostrajania, aby ustawić żądaną prędkość w uderzeniach na minutę.',
  },
  {
    name: 'Skonfiguruj metrum',
    text: 'Wybierz liczbę uderzeń (np. 4/4 lub 3/4), aby metronom poprawnie akcentował pierwsze uderzenie każdego taktu.',
  },
  {
    name: 'Zsynchronizuj z muzyką zewnętrzną (Tap)',
    text: 'Jeśli chcesz znaleźć tempo słuchanego utworu, stukaj w przycisk TAP zgodnie z perkusją lub głównym pulsem.',
  },
  {
    name: 'Zacznij ćwiczyć',
    text: 'Naciśnij przycisk start. Wskaźniki wizualne pomogą Ci utrzymać rytm, nawet jeśli nie słyszysz wyraźnie dźwięku w swoim otoczeniu.',
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
  faqTitle: 'Często zadawane pytania',
  faq: faqData,
  bibliographyTitle: 'Referencje techniczne',
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
    labelTime: 'Metrum',
    labelTap: 'Tap Tempo',
    btnTap: 'TAP',
    warningTitle: 'Brak dźwięku?',
    warningText:
      'Jeśli korzystasz z iPhone\'a/iPada, upewnij się, że boczny przełącznik wyciszenia nie jest aktywny. Technologia Web Audio na wielu urządzeniach respektuje systemowy tryb cichy.',
  },
  seo: [
    {
      type: 'summary',
      title: 'Funkcje metronomu',
      items: [
        'Silnik Web Audio API — precyzja milisekundowa, brak dryfu',
        'Tap Tempo: oblicz BPM, stukając w rytm',
        'Konfigurowalne metrum od 1 do 12 uderzeń z automatycznym akcentem',
        'Wysokokontrastowy wskaźnik wizualny z efektem fali',
        'Regulacja głośności i przyciski dostrajania ±1/±5 BPM',
      ],
    },
    {
      type: 'title',
      text: 'Rytmiczna precyzja w Twojej przeglądarce',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Witaj w <strong>Najlepszym Metronomie Online</strong>. Stworzyliśmy to narzędzie z jednym celem: <em>niezawodnością</em>. W przeciwieństwie廣 innych metronomów internetowych, które cierpią na „dryf” (małe skumulowane opóźnienia) z powodu obciążenia procesora, nasz silnik dźwiękowy jest zbudowany bezpośrednio na <strong>Web Audio API</strong>.',
    },
    {
      type: 'paragraph',
      html: 'Oznacza to, że impulsy dźwiękowe są planowane z wyprzedzeniem na zegarze sprzętowym Twojego urządzenia, co gwarantuje <strong>niezachwianą milisekundową precyzję</strong>, nawet jeśli zminimalizujesz kartę lub komputer jest zajęty.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Wyraźna wizualizacja',
          description:
            'Duże, wysokokontrastowe wskaźniki wizualne z efektem „fali”. Zaprojektowane tak, aby były postrzegane widzeniem obwodowym, co pozwala skupić wzrok na nutach lub instrumencie bez utraty rytmu.',
        },
        {
          title: 'Inteligentny Tap Tempo',
          description:
            'Słuchasz piosenki i chcesz poznać jej prędkość? Naciskaj przycisk TAP lub klawisz Spacja zgodnie z muzyką. Algorytm obliczy dokładną średnią Twoich stuknięć.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Przewodnik mistrzowski: Jak ćwiczyć z metronomem',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Metronom to nie tylko tykający zegar; to najbardziej bezstronny sędzia Twojej techniki. Oto sprawdzona metodologia poprawy szybkości i czystości gry:',
    },
    {
      type: 'title',
      text: '1. Metoda drabiny',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Jeśli Twoim celem jest gra w tempie <strong>120 BPM</strong>, nie zaczynaj prób od tej prędkości. Łatwo o frustrację; postęp wymaga strategii.',
    },
    {
      type: 'list',
      items: [
        'Zacznij od 50% docelowej prędkości (np. 60 BPM).',
        'Zagraj fragment idealnie 3 razy z rzędu. Jeśli pomylisz nutę, licznik się zeruje.',
        'Zwiększ metronom o zaledwie 5 BPM.',
        'Powtarzaj, aż osiągniesz swoją docelową prędkość.',
      ],
    },
    {
      type: 'title',
      text: '2. Przesunięcie akcentu',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Użyj naszego selektora metrum, aby przesunąć akcent. Ćwiczenie fragmentu 4/4 z metronomem ustawionym na 3/4 oznacza, że akcent (ostre kliknięcie) wypada w różnych miejscach frazowania, co zmusza Cię do zinternalizowania czasu absolutnego zamiast polegania na uderzeniu „raz”.',
    },
    {
      type: 'title',
      text: '3. Strategiczne pauzy',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Zaawansowaną techniką jest ustawienie metronomu na połowę prędkości (np. 60 BPM, jeśli grasz w tempie 120) i odczuwanie każdego kliknięcia jako uderzeń 1 i 3. Jeszcze trudniej: odczuwaj go tylko jako uderzenia słabe (off-beats). To buduje Twój <strong>zegar wewnętrzny</strong>.',
    },
    {
      type: 'title',
      text: 'Ciekawostki o tempie',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Tempo radykalnie wpływa na emocjonalną percepcję muzyki.',
    },
    {
      type: 'table',
      headers: ['Włoski termin', 'BPM ok.', 'Charakter'],
      rows: [
        ['Largo', '40 – 60', 'Powoli i uroczyście'],
        ['Andante', '76 – 108', 'W tempie kroku, spokojnie'],
        ['Allegro', '120 – 156', 'Szybko, jasno i radośnie'],
        ['Presto', '168 – 200', 'Bardzo szybko, nerwowo'],
      ],
    },
    {
      type: 'title',
      text: 'Technologia stojąca za tym metronomem',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'To nie jest zapętlony odtwarzacz MP3. Generujemy czyste fale sinusoidalne w czasie rzeczywistym. Główny oscylator tworzy ton <strong>1000 Hz</strong> dla akcentu i <strong>800 Hz</strong> dla słabych uderzeń, z ultrakrótką obwiednią ADSR dla maksymalnej siły przebicia. Zapewnia to natychmiastowy atak dźwięku.',
    },
    {
      type: 'paragraph',
      html: 'Niezależnie od tego, czy jesteś perkusistą trzymającym groove, pianistą pracującym nad gamami, czy gitarzystą doskonalącym solówkę, ten metronom jest Twoim cichym partnerem (dopóki nie naciśniesz play).',
    },
    {
      type: 'tip',
      title: 'Nie słyszysz dźwięku na komórce?',
      html: 'Jeśli korzystasz z iPhone\'a/iPada, upewnij się, że <strong>boczny przełącznik wyciszenia</strong> nie jest aktywny. Technologia Web Audio na wielu urządzeniach respektuje systemowy tryb cichy.',
    },
  ],
};
