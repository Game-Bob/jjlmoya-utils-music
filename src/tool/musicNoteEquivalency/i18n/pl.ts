import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MusicNoteEquivalencyUI } from '../ui';

const slug = 'odpowiedniki-nut-muzycznych';
const title = 'Odpowiedniki Nut Muzycznych: Systemy Łaciński, Anglosaski i Germański';
const description =
  'Interaktywny tłumacz nut muzycznych między systemami łacińskim (Do, Re, Mi), anglosaskim (C, D, E) i germańskim (H). Zawiera wizualizację pianina, oktawy i częstotliwości (Hz).';

const faqData = [
  {
    question: 'Co to jest notacja amerykańska lub anglosaska?',
    answer:
      'Jest to system wykorzystujący litery od A do G do reprezentowania nut muzycznych. Jest to standard w muzyce nowoczesnej i jazzie. W tym systemie A=La, B=Si, C=Do, D=Re, E=Mi, F=Fa i G=Sol.',
  },
  {
    question: 'Dlaczego w Niemczech Si nazywa się H?',
    answer:
      "Z powodu średniowiecznej ewolucji graficznej 'B-quadratum'. W krajach niemieckojęzycznych litera H jest zarezerwowana dla naturalnego Si, podczas gdy litera B jest używana wyłącznie dla B-bemol.",
  },
  {
    question: "Co to jest 'środkowe C' w notacji naukowej?",
    answer:
      'Środkowe C (klawisz C na środku 88-klawiszowego pianina) to C4 w standardzie ANSI/międzynarodowym. W systemie francusko-belgijskim, powszechnie stosowanym w konserwatoriach, nazywa się Do3.',
  },
  {
    question: 'Co to oznacza, że dwie nuty są enharmoniczne?',
    answer:
      'Oznacza to, że mają różne nazwy, ale reprezentują ten sam fizyczny dźwięk i są grane na tym samym klawiszu pianina. Na przykład Cis (C#) i Des (Db) to nuty enharmoniczne.',
  },
  {
    question: 'Jaka jest standardowa częstotliwość A4?',
    answer:
      'Międzynarodowa standardowa częstotliwość to 440 Hz (standard ISO 16). Jest to uniwersalny punkt odniesienia do strojenia orkiestr, instrumentów i syntezatorów cyfrowych.',
  },
];

const howToData = [
  {
    name: 'Wybierz oktawę',
    text: 'Użyj selektora numerycznego na górze, aby wskazać, z którą oktawą pianina chcesz pracować (domyślna to oktawa 4, środkowa).',
  },
  {
    name: 'Naciśnij nutę na pianinie',
    text: 'Kliknij lub dotknij dowolnego klawisza na interaktywnym pianinie, aby zobaczyć jego informacje techniczne i nomenklaturę.',
  },
  {
    name: 'Porównaj systemy',
    text: 'Spójrz na dolne panele, aby zobaczyć, jak ta nuta nazywa się jednocześnie w systemach łacińskim, anglosaskim i germańskim.',
  },
  {
    name: 'Posłuchaj i zweryfikuj',
    text: 'Naciśnij przycisk „Słuchaj”, aby usłyszeć dokładną częstotliwość wybranej nuty i potwierdzić jej wysokość.',
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

export const content: ToolLocaleContent<MusicNoteEquivalencyUI> = {
  slug,
  title,
  description,
  faqTitle: 'Często zadawane pytania',
  faq: faqData,
  bibliographyTitle: 'Referencje techniczne',
  bibliography: [
    {
      name: 'ISO 16:1975 Acoustics — Standard tuning frequency',
      url: 'https://www.iso.org/standard/3601.html',
    },
    {
      name: 'The Harvard Dictionary of Music - Notation Systems',
      url: 'https://www.hup.harvard.edu/catalog.php?isbn=9780674011632',
    },
    {
      name: 'Nomenclature of Musical Notes - Theory of Music',
      url: 'https://en.wikipedia.org/wiki/Musical_note#Note_names_and_history',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  ui: {
    octaveLabel: 'Oktawa naukowa (C4 = Środkowe C):',
    systemsTitle: 'Systemy nazewnictwa',
    systemLatino: 'Łaciński (Solfège)',
    systemAnglo: 'Anglosaski (Nowoczesny)',
    systemGerman: 'Germański (Niemiecki)',
    sciNotationTitle: 'Notacja naukowa',
    systemAnsi: 'Międzynarodowy (ANSI)',
    systemFranco: 'Francusko-belgijski',
    systemEnharmonic: 'Przydatna enharmonia',
    techTitle: 'Dane techniczne i fale',
    btnPlay: 'Słuchaj',
    btnCopy: 'Kopiuj info',
    initialTitle: 'Wybierz nutę na pianinie',
    copyDone: 'Skopiowano!',
    copyLabelNote: 'Nuta',
    copyLabelGerman: 'System niemiecki',
    copyLabelFreq: 'Częstotliwość',
    copyLabelAnsi: 'Oktawa naukowa',
    copyLabelUrl: 'URL',
    naLabel: 'N/D',
  },
  seo: [
    {
      type: 'summary',
      title: 'Wielojęzyczny tłumacz nut muzycznych',
      items: [
        '<strong>3 systemy jednocześnie</strong>: Łaciński, anglosaski i germański w zasięgu wzroku.',
        '<strong>Interaktywne pianino</strong>: Kliknij dowolny klawisz, aby zobaczyć wszystkie jego odpowiedniki.',
        '<strong>Dokładne częstotliwości</strong>: Każda nuta pokazuje Hz zgodnie ze standardem ISO 16.',
        '<strong>Enharmonia</strong>: Automatycznie identyfikuje nuty o podwójnych nazwach.',
      ],
    },
    {
      type: 'title',
      text: 'Zrozumienie odpowiedników nut muzycznych w różnych systemach',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Muzyka jest uniwersalnym językiem, ale jej zapis i nazewnictwo różnią się głęboko w zależności od regionu geograficznego i kontekstu akademickiego. Podczas gdy w krajach łacińskojęzycznych i klasycznej tradycji europejskiej dominuje system łaciński (Do, Re, Mi...), muzyka nowoczesna, jazz i świat anglosaski ustandaryzowały notację amerykańską (C, D, E...). Dodatkowo istnieje historyczna osobliwość w krajach o wpływach germańskich, gdzie naturalne Si nazywa się H, a B-bemol to B.',
    },
    {
      type: 'title',
      text: 'Trzy główne systemy nazewnictwa muzycznego',
      level: 2,
    },
    {
      type: 'list',
      items: [
        "<strong>System łaciński (Solfège):</strong> Używany w Polsce, Włoszech, Hiszpanii, Francji i dużej części Ameryki Łacińskiej. Oparty na hymnie do św. Jana Chrzciciela autorstwa Gwidona z Arezzo. Używa Do, Re, Mi, Fa, Sol, La, Si.",
        '<strong>Notacja amerykańska (anglosaska):</strong> Światowy standard dla jazzu, popu i rocka. Przypisuje siedem pierwszych liter alfabetu (A-G), zaczynając od A=La. C to litera dla Do.',
        '<strong>System germański:</strong> Używany w Niemczech, Austrii i krajach Europy Północnej. Kluczową różnicą jest użycie H dla naturalnego Si i B dla B-bemol.',
      ],
    },
    {
      type: 'title',
      text: 'Ciekawa historia B i H w notacji niemieckiej',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Wielu początkujących zastanawia się, dlaczego w Niemczech nutę Si zapisuje się literą H. Źródło tkwi w średniowiecznym błędzie kopisty. W starym systemie literowym litera B była używana dla Si. Istniały dwa warianty: <em>B quadratum</em> (kwadratowe, dla naturalnego Si) i <em>B rotundum</em> (okrągłe, dla Si-bemol).",
    },
    {
      type: 'paragraph',
      html: 'Z czasem kształt <em>B quadratum</em> w niemieckich manuskryptach coraz bardziej przypominał małą literę h. Ta graficzna ewolucja utrwaliła się w druku i dała początek obecnej niemieckiej nomenklaturze: H dla naturalnego Si i B dla Si-bemol. Co ciekawe, to rozróżnienie pozwoliło kompozytorom takim jak J.S. Bach podpisywać swoje dzieła słynnym motywem „B-A-C-H” (Si-bemol - La - Do - Si naturalne).',
    },
    {
      type: 'title',
      text: 'Tabela porównawcza odpowiedników nut naturalnych',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Nuta (Łaciński)', 'Notacja (Anglo)', 'Niemiecki (Germański)', 'Pochodzenie'],
      rows: [
        ['Do', 'C', 'C', 'Częstotliwość bazowa'],
        ['Re', 'D', 'D', 'Druga nuta'],
        ['Mi', 'E', 'E', 'Trzecia nuta'],
        ['Fa', 'F', 'F', 'Czwarta nuta'],
        ['Sol', 'G', 'G', 'Piąta nuta'],
        ['La', 'A', 'A', 'Nuta strojenia'],
        ['Si', 'B', 'H', 'Wielki wariant'],
      ],
    },
    {
      type: 'title',
      text: 'Krzyżyki, Bemole i koncepcja enharmonii',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'W muzyce zachodniej używamy 12 dźwięków na oktawę. Pięć dodatkowych nut reprezentowanych jest przez znaki chromatyczne: krzyżyk (#) i bemol (b). Krzyżyk podnosi nutę o półton, a bemol obniża ją o półton.',
    },
    {
      type: 'paragraph',
      html: 'To prowadzi nas do <strong>enharmonii</strong>: dwie nuty, które mają różne nazwy, ale brzmią dokładnie tak samo i zajmują ten sam klawisz pianina. Na przykład Cis i Des są enharmoniczne. Nasz kalkulator automatycznie wyróżnia te odpowiedniki, co jest kluczowe dla zrozumienia, dlaczego w jednej partyturze może pojawić się Fis, a w innej Ges w tej samej tonacji.',
    },
    {
      type: 'title',
      text: 'Oktawy: Notacja naukowa vs francusko-belgijska',
      level: 2,
    },
    {
      type: 'list',
      items: [
        "Międzynarodowa notacja naukowa (ANSI): Środkowe C nazywa się C4. Jest to standard w syntezatorach, programach DAW i oprogramowaniu muzycznym (MIDI).",
        'Notacja francusko-belgijska: Powszechnie stosowana w konserwatoriach klasycznych. W tym systemie środkowe C to Do3.',
        "System Helmholtza: Używa wielkich liter, małych liter i primów (C, c, c', c''). Częściej spotykany w starej literaturze technicznej i akustyce niemieckiej.",
      ],
    },
    {
      type: 'tip',
      title: 'Wskazówka dla producentów',
      html: 'Uważaj na programy DAW: niektórzy producenci (jak Yamaha) uważają środkowe C za C3, podczas gdy inni (jak Roland czy FL Studio) za C4 lub nawet C5. Jeśli Twój syntezator brzmi o oktawę za nisko lub za wysoko, sprawdź, który standard notacji naukowej stosuje oprogramowanie.',
    },
    {
      type: 'title',
      text: 'Częstotliwość w hercach (Hz) i standardowe strojenie',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Z perspektywy fizycznej każda nuta odpowiada określonej częstotliwości mierzonej w hercach (cykle na sekundę). Międzynarodowy standard strojenia (ISO 16) ustala, że <strong>A4</strong> wibruje z częstotliwością dokładnie <strong>440 Hz</strong>.',
    },
    {
      type: 'list',
      items: [
        'Kalibracja syntezatorów analogowych, które mogą ulegać technicznemu dryfowi.',
        'Ustawianie precyzyjnych korektorów podczas miksowania w celu wyeliminowania rezonansów na określonych nutach.',
        'Zrozumienie związku między fizyczną wysokością dźwięku a muzyczną percepcją.',
        'Precyzyjna konwersja sampli poprzez regulację wysokości dźwięku w centach.',
      ],
    },
    {
      type: 'title',
      text: 'Praktyczne zastosowania tego kalkulatora',
      level: 2,
    },
    {
      type: 'proscons',
      items: [
        {
          pro: 'Natychmiastowe tłumaczenie notacji dla muzyków sesyjnych, którzy muszą czytać zapisy w języku angielskim.',
          con: 'System nie uwzględnia mikrotonowości ani strojów pozaeuropejskich.',
        },
        {
          pro: 'Identyfikacja nut enharmonicznych w celu poprawy muzycznej pisowni w partyturach.',
          con: 'Odtwarzanie dźwięku to czysta fala, nie ma barwy prawdziwego instrumentu.',
        },
        {
          pro: 'Konwersja oktawy z naukowej na francusko-belgijską dla studentów harmonii.',
          con: 'Zakłada tylko standardowe strojenie A4=440Hz, nie uwzględnia strojów barokowych (415 Hz).',
        },
        {
          pro: 'Intuicyjna wizualizacja pianina ułatwiająca naukę gam i akordów.',
          con: 'Wymaga podstawowej wiedzy teoretycznej, aby zinterpretować, który znak chromatyczny jest najlepszy w danym kontekście.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Referencja glosariusza technicznego',
      level: 2,
    },
    {
      type: 'list',
      items: [
        'Półton: Najmniejsza odległość między dwiema nutami w systemie zachodnim (np. od E do F).',
        'Cały ton: Odległość odpowiadająca dwóm półtonom (np. od C do D).',
        'Notacja: System skrótów do reprezentowania nut i akordów.',
        'Herc (Hz): Jednostka miary częstotliwości dźwięku.',
        'Oktawa: Interwał oddzielający dwie nuty, gdzie częstotliwość jednej jest dwukrotnie wyższa od drugiej.',
        'Znaki przykluczowe: Zespół znaków chromatycznych na początku pięciolinii określający tonację.',
      ],
    },
  ],
};
