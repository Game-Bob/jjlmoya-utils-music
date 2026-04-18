import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'muzyka',
  title: 'Internetowe Narzędzia Muzyczne',
  description:
    'Darmowe narzędzia muzyczne dla muzyków, producentów i entuzjastów. Metronom, kalkulator BPM, konwerter częstotliwości, ekwiwalentność nut i więcej.',
  seo: [
    {
      type: 'summary',
      title: 'Co znajdziesz w tej kategorii',
      items: [
        'Internetowy metronom z Web Audio API — precyzja milisekundowa',
        'Kalkulator BPM na milisekundy dla delayów i pogłosów',
        'Konwerter częstotliwości na nuty muzyczne (Hz, centy i detuning)',
        'Kalkulator odległości fazowej do ustawiania mikrofonów',
        'Ekwiwalentność nut między systemami łacińskim, amerykańskim i niemieckim',
        'Kalkulator przechowywania cyfrowego dźwięku',
      ],
    },
    {
      type: 'title',
      text: 'Narzędzia Muzyczne na Każdym Etapie Procesu Twórczego',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Od pierwszej próby do finalnego masteringu każdy muzyk i producent potrzebuje precyzyjnych narzędzi dostępnych w każdej chwili. Nasza kolekcja <strong>internetowych narzędzi muzycznych</strong> została zaprojektowana z jednym jasnym celem: maksymalna precyzja techniczna przy minimalnych tarciach.',
    },
    {
      type: 'paragraph',
      html: 'Instalacja nie jest wymagana. Wszystkie narzędzia działają bezpośrednio w przeglądarce, są całkowicie bezpłatne i chronią Twoją prywatność: żadne dane nie opuszczają Twojego urządzenia.',
    },
    {
      type: 'title',
      text: 'Dla Ćwiczącego Muzyka',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Internetowy metronom</strong> jest podstawowym narzędziem dla każdego muzyka w trakcie szkolenia lub ćwiczeń. Nasz metronom używa Web Audio API, aby zagwarantować precyzję milisekundową, wyeliminować dryft i dostarczyć wizualną informację zwrotną z efektem fali. Funkcja <strong>Tap Tempo</strong> pozwala natychmiast znaleźć BPM dowolnej piosenki.',
    },
    {
      type: 'title',
      text: 'Dla Producenta Muzycznego',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Kalkulator BPM na milisekundy</strong> jest niezbędny na każdej sesji miksowania. Synchronizacja delaya lub pogłosu z tempem piosenki stanowi różnicę między miksem, który oddycha, a tym, który brzmi sztucznie. Podobnie <strong>kalkulator odległości fazowej</strong> ustawia mikrofony z precyzją na poziomie próbki i zapobiega kasowaniu fazy w nagraniach wielomikrofonowych.',
    },
    {
      type: 'title',
      text: 'Dla Inżyniera Dźwięku',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Konwerter częstotliwości na nuty muzyczne</strong> przekształca dowolną wartość Hz na odpowiadającą jej nutę, pokazując również odchylenie w centach. Idealny do strojenia syntezatorów analogowych, identyfikowania problematycznych rezonansów w pomieszczeniu lub pracy z próbkami o złym stroju. <strong>Kalkulator przechowywania cyfrowego dźwięku</strong> pomaga planować projekty nagraniowe i precyzyjnie zarządzać przestrzenią dyskową.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Precyzja Techniczna',
          description:
            'Wszystkie narzędzia opierają się na matematycznie zweryfikowanych algorytmach. Brak przybliżeń: wyniki są dokładne i powtarzalne.',
        },
        {
          title: 'Pełna Prywatność',
          description:
            'Przetwarzanie odbywa się na Twoim urządzeniu. Żadne dane audio, pliki ani dane osobowe nie są przesyłane do żadnego serwera.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Uniwersalny Język Muzyki',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Muzyka jest językiem z wieloma systemami notacji. Narzędzie <strong>ekwiwalentności nut</strong> natychmiast tłumaczy między systemem łacińskim (Do, Re, Mi…), systemem amerykańskim (C, D, E…) i systemem niemieckim (C, D, E… z H zamiast B), unikając nieporozumień podczas komunikacji z muzykami z różnych tradycji lub czytania partytur z różnych krajów.',
    },
    {
      type: 'tip',
      title: 'Instalacja nie jest potrzebna',
      html: 'Wszystkie narzędzia działają bezpośrednio w przeglądarce, bez wtyczek ani dodatkowych aplikacji. Dodaj tę stronę do zakładek, aby mieć je zawsze pod ręką podczas swoich sesji.',
    },
  ],
};
