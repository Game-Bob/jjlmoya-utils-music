import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FrequencyNoteConverterUI } from '../ui';

const slug = 'konwerter-czestotliwosci-na-nuty';
const title = 'Konwerter częstotliwości na nuty muzyczne';
const description =
  'Błyskawicznie konwertuj herce na nuty. Zidentyfikuj dokładną nutę dowolnej częstotliwości, zmierz odchylenie w centach, usłysz czysty ton i precyzyjnie dostrój syntezatory oraz samplery.';

const faqData = [
  {
    question: 'Skąd mam wiedzieć, jakiej nucie odpowiada 440 Hz?',
    answer:
      '440 Hz odpowiada dokładnie nucie A4, która jest uniwersalnym standardem strojenia. Jest to dźwięk A powyżej środkowego C na pianinie. Częstotliwość ta jest standardem ISO 16 od 1939 roku i służy do strojenia instrumentów orkiestrowych na całym świecie.',
  },
  {
    question: 'Co oznacza, że nuta jest „15 centów powyżej”?',
    answer:
      'Cent to jedna setna półtonu. Znajdowanie się 15 centów powyżej nuty oznacza, że częstotliwość jest nieco wyższa niż dokładna nuta w stroju równomiernie temperowanym. W syntezatorze należy zastosować fine-tune o wartości -15 centów, aby to skorygować.',
  },
  {
    question: 'Dlaczego oprócz 440 Hz dostępne są opcje referencyjne 432 Hz i 444 Hz?',
    answer:
      'Różne konteksty muzyczne wymagają różnych standardów strojenia. 432 Hz jest popularne w niektórych społecznościach producenckich. 444 Hz jest spotykane w nagraniach muzyki dawnej z epoki renesansu. Niektóre europejskie orkiestry stroją instrumenty w zakresie 441–444 Hz, aby uzyskać jaśniejsze brzmienie.',
  },
  {
    question: 'Do czego służy interaktywna klawiatura pianina?',
    answer:
      'Interaktywne pianino pozwala wizualnie zidentyfikować nutę na klawiaturze, a także wprowadzać częstotliwości poprzez bezpośrednie naciskanie klawiszy. Naciśnięcie klawisza pokazuje jego dokładną częstotliwość i odtwarza czysty ton sinusoidalny dla porównania.',
  },
  {
    question: 'Jak korzystać z harmonicznych wyświetlanych przez kalkulator?',
    answer:
      'Harmoniczne (dolna i górna oktawa) pokazują częstotliwości bezpośrednio powiązane z Twoją nutą. Są one przydatne do unikania konfliktów między warstwami syntezatora, ustawiania filtrów rezonansowych na właściwą nutę lub przypisywania sampli perkusyjnych do odpowiednich oktaw samplera.',
  },
  {
    question: 'Dlaczego tryb słuchania generuje ton sinusoidalny zamiast prawdziwego dźwięku?',
    answer:
      'Ton sinusoidalny to czysta fala zawierająca tylko częstotliwość podstawową bez dodatkowych harmonicznych. Pozwala to na czyste porównanie z prawdziwym instrumentem bez barwy dźwięku zakłócającej ocenę strojenia. Jest to ten sam sygnał, który generuje elektroniczny tuner wskazówkowy.',
  },
  {
    question: 'Jak oblicza się częstotliwość nuty muzycznej?',
    answer:
      'Częstotliwość oblicza się za pomocą wzoru logarytmicznego opartego na stroju równomiernie temperowanym. Zaczynając od nuty referencyjnej A4 (440 Hz), każdy półton w górę uzyskuje się poprzez pomnożenie przez pierwiastek dwunastego stopnia z dwóch (~1,05946), a każda oktawa oznacza podwojenie częstotliwości.',
  },
  {
    question: 'Jaka nuta ma częstotliwość 440 Hz?',
    answer:
      'Częstotliwość 440 Hz to dokładnie nuta A4. Jest to standardowa nuta referencyjna używana przez większość orkiestr i współczesnych muzyków do strojenia instrumentów od połowy XX wieku.',
  },
  {
    question: 'Jaka jest różnica między strojeniem 440 Hz a 432 Hz?',
    answer:
      '440 Hz to standard międzynarodowy (ISO 16). 432 Hz to alternatywne strojenie, które niektórzy muzycy wolą ze względów subiektywnych, często stosowane w muzyce do medytacji, choć nie ma naukowych dowodów na wyraźne korzyści biologiczne w porównaniu z 440 Hz.',
  },
];

const howToData = [
  {
    name: 'Wprowadź częstotliwość',
    text: 'Wpisz częstotliwość w hercach w głównym polu wejściowym. Wynik pojawi się natychmiast wraz z nazwą nuty i jej oktawą naukową.',
  },
  {
    name: 'Odczytaj wynik i wskaźnik centów',
    text: 'Wizualny wskaźnik tunera pokazuje, czy Twoja częstotliwość jest powyżej, poniżej czy dokładnie w nucie. Wartość w centach mówi, o ile należy skorygować fine-tune w Twoim instrumencie lub wtyczce.',
  },
  {
    name: 'Użyj harmonicznych do strojenia warstw',
    text: 'Sprawdź częstotliwości dolnej i górnej oktawy, aby skonfigurować dodatkowe oscylatory, filtry rezonansowe lub warstwy perkusyjne bez konfliktów częstotliwości.',
  },
  {
    name: 'Dostosuj referencję A4',
    text: 'Zmień referencję A4 na 432 Hz, 444 Hz lub dowolną inną wartość, aby wszystkie obliczenia były zgodne z kontekstem Twojego projektu.',
  },
  {
    name: 'Posłuchaj tonu referencyjnego',
    text: 'Naciśnij przycisk odtwarzania, aby wygenerować czysty ton sinusoidalny o wprowadzonej częstotliwości i nastroić swój prawdziwy instrument na ucho.',
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

export const content: ToolLocaleContent<FrequencyNoteConverterUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  ui: {
    btnHzToNote: 'Hz na Nutę',
    btnNoteToHz: 'Nuta na Hz',
    labelRef: 'Referencja A4',
    ariaRefCustom: 'Niestandardowa częstotliwość referencyjna A4',
    calInfo:
      '<strong>440 Hz</strong> to standard międzynarodowy. <strong>432 Hz</strong> jest często używane w muzyce do medytacji i solfeżu.',
    labelFrequency: 'CZĘSTOTLIWOŚĆ',
    ariaFreqInput: 'Wprowadź częstotliwość w hercach',
    ariaPlay: 'Posłuchaj tonu',
    copyNoteName: 'Kopiuj nutę',
    labelOctaveDown: 'Dolna oktawa',
    labelInputFreq: 'Częstotliwość wejściowa',
    labelOctaveUp: 'Górna oktawa',
    labelNoteInput: 'NAZWA NUTY (np. A4, C#3, Do4)',
    placeholderNote: 'Wpisz nutę...',
    labelSetNote: 'USTAW NUTĘ',
    labelSetOctave: 'USTAW OKTAWĘ',
    labelSelectedNote: 'Wybrana nuta',
    copyHz: 'Kopiuj Hz',
    btnListenNote: 'Posłuchaj nuty',
    pianoLabel: 'Interaktywne pianino — naciśnij klawisz, aby zobaczyć jego częstotliwość',
    pianoAria: 'Interaktywna klawiatura pianina',
    historyTitle: 'Historia',
    historyClear: 'Wyczyść',
    historyEmpty: 'Brak ostatnich konwersji',
    historyLoadAria: 'Wczytaj %s Hz',
    tuned: 'Stroi',
    sharp: 'za wysoki',
    flat: 'za niski',
    unitHzExact: 'dokładne Hz',
    noteNames: 'C,C#,D,D#,E,F,F#,G,G#,A,A#,B',
    noteOptions: 'C (Do)|C# / Db|D (Re)|D# / Eb|E (Mi)|F (Fa)|F# / Gb|G (Sol)|G# / Ab|A (La)|A# / Bb|B (Si)',
    pianoOctave: 'Okt',
    copyFeedback: 'Skopiowano',
  },
  seo: [
    {
      type: 'summary',
      title: 'Funkcje kalkulatora',
      items: [
        'Konwersja dwukierunkowa: Hz na nutę i nuta na Hz w jednym narzędziu',
        'Dokładność co do próbki z regulowaną referencją A4 (440 / 432 / 444 Hz)',
        'Wizualny wskaźnik centów z oznaczeniem za wysoki / za niski / nastrojony',
        'Wyświetlanie harmonicznych (podstawowa, dolna oktawa, górna oktawa)',
        'Interaktywna klawiatura pianina podświetlająca odpowiedni klawisz',
        'Historia wyszukiwania dla szybkiego porównania patchów i sampli',
      ],
    },
    {
      type: 'title',
      text: 'Czym jest częstotliwość nuty muzycznej i dlaczego ma znaczenie',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Każda nuta muzyczna to w istocie okresowe drganie powietrza. Gdy struna gitary drga 440 razy na sekundę, wytwarza dźwięk A4, czyli uniwersalną nutę referencyjną do strojenia. Ta zależność między hercami a nutami nie jest przypadkowa: definiuje ją <strong>strój równomiernie temperowany</strong>, dominujący system strojenia w muzyce zachodniej, który matematycznie dzieli oktawę na dwanaście idealnie równych półtonów.',
    },
    {
      type: 'paragraph',
      html: 'Znajomość dokładnej częstotliwości każdej nuty jest kluczowa w syntezie dźwięku, produkcji muzycznej, inżynierii dźwięku i budowie instrumentów. Syntezator musi wiedzieć, z jaką częstotliwością powinien drgać każdy oscylator, aby odtworzyć nastrojoną nutę. Inżynier miksu musi wiedzieć, w którym miejscu użyć korektora, aby usunąć brzęczenie bez wpływu na częstotliwość podstawową instrumentu.',
    },
    {
      type: 'title',
      text: 'Wzór matematyczny stojący za konwersją',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Strój równomiernie temperowany opiera się na progresji geometrycznej. Każdy półton oznacza pomnożenie częstotliwości przez pierwiastek dwunastego stopnia z dwóch. Wzór na uzyskanie częstotliwości dowolnej nuty na podstawie jej odległości w półtonach od A4 to:',
    },
    {
      type: 'code',
      code: 'f = A4 × 2^((n - 69) / 12)',
      ariaLabel: 'Wzór na konwersję numeru nuty MIDI na częstotliwość w Hz',
    },
    {
      type: 'paragraph',
      html: 'Gdzie <em>n</em> to numer nuty MIDI (A4 = 69), a <em>A4</em> to częstotliwość referencyjna, zazwyczaj 440 Hz. Odwrócenie tego wzoru pozwala znaleźć nutę najbliższą wprowadzonej częstotliwości, a także odchylenie w centach.',
    },
    {
      type: 'title',
      text: 'Centy: jednostka precyzji dla muzyków i inżynierów',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Półton jest podzielony na 100 centów. Jednostka ta pozwala opisać dowolne odchylenie stroju z dokładnością dziesiętną. Odchylenie rzędu 10 centów jest już dostrzegalne dla wprawnego ucha; powyżej 20 centów dźwięk dla większości słuchaczy wydaje się wyraźnie rozstrojony.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Idealne nastrojenie',
          description:
            'Nuta jest idealnie nastrojona, gdy odchylenie wynosi mniej niż 5 centów od dokładnej częstotliwości stroju równomiernie temperowanego.',
        },
        {
          title: 'Centy w DAW',
          description:
            'Samplery, syntezatory i wtyczki typu pitch-shift używają centów do fine-tune, co pozwala na dopasowanie sampli do ich dokładnej nuty bez artefaktów.',
        },
        {
          title: 'Próg ludzki',
          description:
            'Próg percepcji rozstrojonych nut waha się między 5 a 15 centów w zależności od instrumentu, dynamiki i kontekstu harmonicznego.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Referencja A4: 440 Hz, 432 Hz i wojny o strojenie',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Częstotliwość referencyjna A4 = 440 Hz została ustandaryzowana międzynarodowo w 1939 roku (ISO 16). Jednak muzycy barokowi zazwyczaj pracują z referencją 415 Hz, a istnieje rosnąca społeczność producentów, którzy wolą 432 Hz. Elitarne orkiestry, takie jak Filharmonia Berlińska, regularnie stosują 443 Hz dla uzyskania jaśniejszego, bardziej przenikliwego dźwięku.',
    },
    {
      type: 'paragraph',
      html: 'W produkcji muzycznej referencja ma znaczenie przy miksowaniu żywych instrumentów akustycznych z instrumentami wirtualnymi. Jeśli nagrane pianino zostało nastrojone do 442 Hz, ale syntezator domyślnie ustawiony jest na 440 Hz, wszystkie sample będą wymagały korekty w centach.',
    },
    {
      type: 'tip',
      title: 'Triki profesjonalnego samplingu',
      html: 'Podczas importowania sampla do samplera, takiego jak Kontakt czy Decent Sampler, wprowadź częstotliwość sampla do tego kalkulatora. Wartość w centach wyświetlona na wskaźniku strojenia powie Ci dokładnie, jaką wartość <em>fine-tune</em> należy wprowadzić w samplerze, aby nuta brzmiała idealnie nastrojona.',
    },
    {
      type: 'title',
      text: 'Tabela częstotliwości referencyjnych według oktaw',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ta tabela pokazuje dokładne częstotliwości każdej nuty C w stroju równomiernie temperowanym przy A4 = 440 Hz, przydatne przy konfigurowaniu oscylatorów syntezatorów modularnych lub weryfikowaniu zakresu instrumentu:',
    },
    {
      type: 'table',
      headers: ['Nuta', 'Częstotliwość (Hz)', 'Nuta MIDI', 'Typowy zakres instrumentu'],
      rows: [
        ['C0', '16.35', '12', 'Kontrabas, pedał organowy'],
        ['C1', '32.70', '24', 'Kontrabas, gitara basowa (niska struna)'],
        ['C2', '65.41', '36', 'Wiolonczela, gitara basowa'],
        ['C3', '130.81', '48', 'Altówka, saksofon tenorowy, gitara'],
        ['C4', '261.63', '60', 'Środkowe C, pianino, głos tenorowy'],
        ['C5', '523.25', '72', 'Flet, skrzypce, głos sopranowy'],
        ['C6', '1046.50', '84', 'Flet piccolo, wysokie rejestry skrzypiec'],
        ['C7', '2093.00', '96', 'Harmoniczne fletu, syntezator'],
        ['C8', '4186.01', '108', 'Klawiatura 88-klawiszowa, limit techniczny'],
      ],
    },
    {
      type: 'title',
      text: 'Harmoniczne i oktawa jako relacja 2:1',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Jedną z najważniejszych relacji w akustyce muzycznej jest oktawa: podwojenie częstotliwości wytwarza tę samą nutę o oktawę wyżej, a jej połowa przenosi ją o oktawę niżej. Ta relacja 2:1 jest podstawą naturalnych harmonicznych każdego instrumentu akustycznego.',
    },
    {
      type: 'paragraph',
      html: 'W syntezie znajomość bezpośrednich harmonicznych częstotliwości jest kluczem do unikania kolizji widmowych między oscylatorami w warstwie brzmieniowej. Ten kalkulator zawsze pokazuje górną i dolną oktawę dowolnej wprowadzonej częstotliwości.',
    },
    {
      type: 'title',
      text: 'Realne przypadki użycia dla muzyków i producentów',
      level: 2,
    },
    {
      type: 'list',
      items: [
        'Strojenie oscylatorów analogowych: zmierz częstotliwość wyjściową i porównaj ją z kalkulatorem, aby wiedzieć, o ile centów należy skorygować coarse lub fine tune.',
        'Przypisywanie sampli do nut: stopa nagrana przy 55 Hz to dźwięk A1. To narzędzie powie Ci dokładnie, gdzie przypisać go w samplerze.',
        'Wykrywanie problematycznych rezonansów: jeśli pomieszczenie rezonuje przy 80 Hz, kalkulator potwierdzi, że to E2, co ułatwi użycie EQ w celu wytłumienia tego dźwięku bez uszkodzenia basu.',
        'Synchronizacja subwooferów: weryfikacja, czy wiele subwooferów odtwarza tę samą nutę, pozwala uniknąć wzmocnień lub wygaszeń wynikających z interferencji.',
        'Strojenie dzwonów i perkusji o określonej wysokości dźwięku: zidentyfikuj częstotliwość podstawową, aby zintegrować je z tonacją utworu.',
        'Projektowanie filtrów rezonansowych: filtr środkowoprzepustowy o wysokim Q przy 349.23 Hz będzie miał szczyt na F4, co ułatwia decyzje projektowe.',
      ],
    },
    {
      type: 'title',
      text: 'Pianino jako natychmiastowa referencja wizualna',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Klawiatura pianina to najbardziej intuicyjna mapa wizualna spektrum muzycznego. Układ białych (naturalnych) i czarnych (krzyżyki/bemole) klawiszy pozwala na błyskawiczne rozpoznawanie wzorów skal, akordów i interwałów. Interaktywne pianino podświetla klawisz odpowiadający każdej częstotliwości, łącząc liczbę z jej pozycją na uniwersalnej klawiaturze.',
    },
    {
      type: 'proscons',
      items: [
        {
          pro: 'Matematyczna precyzja: wykorzystuje wzór stroju równomiernie temperowanego ISO 16.',
          con: 'Ograniczenie: dotyczy tylko stroju równomiernie temperowanego, nie historycznych metod strojenia.',
        },
        {
          pro: 'Swobodna kalibracja: obsługuje referencje A4 w zakresie od 400 do 480 Hz.',
          con: 'Ton sinusoidalny nie odtwarza prawdziwej barwy instrumentu, a jedynie częstotliwość podstawową.',
        },
        {
          pro: 'Dwukierunkowa konwersja: Hz na nutę i nuta na Hz w jednym narzędziu.',
          con: 'Wskaźnik centów odnosi się do najbliższego półtonu, a nie do stroju czystego.',
        },
        {
          pro: 'Historia wyszukiwania: pozwala na szybkie porównanie wielu patchów lub sampli.',
          con: 'Częstotliwości spoza zakresu słyszalnego (20 Hz – 20 kHz) mają ograniczone zastosowanie praktyczne.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Niezbędny słowniczek do korzystania z tego narzędzia',
      level: 2,
    },
    {
      type: 'list',
      items: [
        'Hz (Herc): cykle na sekundę. Mierzy częstotliwość fali dźwiękowej.',
        'Nuta MIDI: liczba całkowita od 0 do 127 identyfikująca każdą nutę w standardzie MIDI. A4 = 69.',
        'Oktawa naukowa: system nazewnictwa, który dodaje numer oktawy do nuty (A4, C3).',
        'Centy: jedna setna półtonu. Pozwalają precyzyjnie wyrażać odchylenia stroju.',
        'Strój równomiernie temperowany: system strojenia, w którym wszystkie półtony są równe (stosunek 2^(1/12)).',
        'A4: nuta referencyjna. Międzynarodowy standard: 440 Hz (ISO 16, 1975).',
        'Harmoniczna: częstotliwości będące całkowitymi wielokrotnościami podstawowej, wytwarzane naturalnie przez instrumenty akustyczne.',
        'Fine-tune: parametr syntezatora i samplera służący do regulacji stroju w centach.',
      ],
    },
  ],
};
