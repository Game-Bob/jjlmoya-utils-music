import { createGuitarStringTensionContent } from './content-factory';

const title = 'Kalkulator naciągu strun gitarowych';
const slug = 'kalkulator-naciagu-strun-gitarowych';
const description = 'Oszacuj naciąg każdej struny gitary na podstawie grubości, menzury i stroju. Porównuj całe komplety offline w jednostkach metrycznych lub imperialnych.';

export const content = createGuitarStringTensionContent({
  slug,
  title,
  description,
  ui: {
    metric: 'Metryczne', imperial: 'Imperialne', metricLength: 'Menzura w mm', imperialLength: 'Menzura w calach', metricGauge: 'Grubość w mm', imperialGauge: 'Grubość w mil', metricTension: 'kg siły', imperialTension: 'funty siły', chooseSet: 'Wybierz komplet strun', scaleLength: 'Menzura', tuning: 'Strój', material: 'Materiał struny', customSet: 'Edytuj grubości', presetHint: 'Zacznij od najbardziej podobnego kompletu', gauge: 'Grubość', note: 'Nuta', frequency: 'Częstotliwość', tension: 'Naciąg', status: 'Odczucie', totalTension: 'Łączny naciąg na gryfie', averageTension: 'Średnia na strunę', tensionSpread: 'Różnica od najlżejszej do najmocniejszej', low: 'Luźna', balanced: 'Zrównoważona', high: 'Mocna', standard: 'Standard E', halfStepDown: 'Pół tonu niżej', dropD: 'Drop D', wholeStepDown: 'Cały ton niżej', openG: 'Open G', steel: 'Stal', nickel: 'Stal niklowana', phosphorBronze: 'Brąz fosforowy', nylon: 'Nylon', presetExtraLight: 'Extra light', presetRegular: 'Regular', presetMedium: 'Medium', presetHeavy: 'Heavy', presetCustom: 'Edytuj grubości', shortScale: 'Krótka menzura 24,75 cala', fenderScale: 'Menzura Fender 25,5 cala', martinScale: 'Menzura Martin 25,4 cala', customScale: 'Własna menzura', customScaleHint: 'Użyj długości drgającej od siodełka do mostka', formulaNote: 'Szacunek wykorzystuje T = 4L²f²μ, gdzie μ to masa na jednostkę długości wyznaczona ze średnicy i gęstości materiału.', modelNote: 'Ten szacunek offline korzysta z modelu gęstości stali. Rdzenie, owijki, powłoki i masa liniowa podana przez producenta mogą zmienić rzeczywisty naciąg. Przed zmianą ustawień sprawdź dane producenta strun.', faqTitle: 'Pytania o naciąg strun gitarowych', bibliographyTitle: 'Źródła modelu naciągu', tableLabel: 'Odczyt naciągu każdej struny', tensionMapLabel: 'Profil naciągu sześciu strun',
  },
  faq: [
    { question: 'Czego potrzebuje kalkulator naciągu strun?', answer: 'Potrzebuje menzury drgającej, wysokości każdej nuty, grubości struny i spójnego oszacowania gęstości materiału. Preset podaje sześć grubości, a strój zmienia częstotliwości docelowe.' },
    { question: 'Czy dłuższa menzura zwiększa naciąg strun?', answer: 'Tak. Przy tej samej grubości i nucie naciąg rośnie z kwadratem długości drgającej. Ten sam komplet 10-46 może więc wydawać się mocniejszy przy menzurze 25,5 cala niż 24,75 cala.' },
    { question: 'Jak zmiana stroju wpływa na naciąg?', answer: 'Obniżenie dźwięku zmniejsza naciąg zgodnie z kwadratem stosunku częstotliwości. Cały ton niżej pozostawia około 79 procent pierwotnego naciągu, a pół tonu niżej około 89 procent.' },
    { question: 'Czy wyniki są dokładne dla strun owijanych?', answer: 'Nie. Model traktuje strunę jak walec o gęstości materiału. Struny owijane mają rdzeń, owijki i powłoki, dlatego dokładniejsze są tabele masy liniowej producenta.' },
    { question: 'Jaki naciąg strun jest wygodny?', answer: 'Nie ma jednej uniwersalnej wartości. Narzędzie oznacza wartości poniżej 8 funtów jako luźne, a powyżej 25 funtów jako mocne, aby pokazać skrajności. O odczuciu decydują też styl, ustawienie i instrument.' },
    { question: 'Czy mogę użyć wyniku do zatwierdzenia nowego kompletu?', answer: 'Używaj go do porównywania scenariuszy, nie jako gwarancji bezpieczeństwa. Przed dużą zmianą grubości lub stroju sprawdź zalecenia producenta instrumentu i specyfikację strun.' },
  ],
  howTo: [
    { name: 'Wybierz system jednostek', text: 'Wybierz Metryczne dla milimetrów i kilogramów siły albo Imperialne dla cali, mil i funtów siły. Fizyczne ustawienie pozostaje takie samo.' },
    { name: 'Wybierz menzurę i strój', text: 'Wybierz najbliższą menzurę, a potem używany strój. Użyj Własnej menzury, jeśli znasz długość drgającą.' },
    { name: 'Wybierz lub edytuj grubości', text: 'Zacznij od presetu 9-42, 10-46, 11-49 lub 12-54. Otwórz Edytuj grubości, aby sprawdzić komplet mieszany albo własną najgrubszą strunę.' },
    { name: 'Odczytaj profil naciągu', text: 'Porównaj każdą strunę, łączny naciąg gryfu i różnicę między skrajnościami. Etykiety Luźna i Mocna pokazują wartości do sprawdzenia.' },
  ],
  seo: [
    { type: 'summary', title: 'Co porównuje ten kalkulator', items: ['Naciąg sześciu strun z presetu lub własnych grubości', 'Zmiany menzury i stroju pokazane jako nowy profil naciągu', 'Odczyty metryczne i imperialne w kilogramach lub funtach siły', 'Oznaczenia luźnych i mocnych strun ułatwiające znalezienie skrajności'] },
    { type: 'title', text: 'Co naciąg mówi o ustawieniu gitary', level: 2 },
    { type: 'paragraph', html: 'Naciąg to siła utrzymująca strunę przy wybranej wysokości dźwięku. Nie zależy wyłącznie od grubości: znaczenie mają też nuta i długość drgająca. Profil kompletu pokazuje, czy jedna struna jest znacznie luźniejsza lub mocniejsza od sąsiednich.' },
    { type: 'title', text: 'Model fizyczny użyty w obliczeniach', level: 2 },
    { type: 'paragraph', html: 'Drgająca struna łączy częstotliwość, długość drgającą i masę liniową. Zależność T = 4L²f²μ jest użytym modelem, a masa liniowa wynika z kołowego przekroju i modelu gęstości stali. Porównanie całego kompletu pomaga ocenić równowagę oporu podczas bendów i akordów.' },
    { type: 'title', text: 'Dlaczego dane producenta nadal są ważne', level: 2 },
    { type: 'paragraph', html: 'Struny owijane łączą rdzeń i owijki, a powłoka oraz konstrukcja zmieniają ich masę liniową. Traktuj wynik jako laboratorium porównawcze, a tabelę producenta jako odniesienie przed montażem. Dzięki temu możesz przewidzieć zmianę oporu pod palcami i łatwiej porównać kilka kompletów przed zakupem.' },
    { type: 'list', items: ['Weź menzurę ze specyfikacji instrumentu albo zmierz od siodełka do mostka.', 'Wybierz rzeczywiście używany strój.', 'Zacznij od najbliższego presetu i edytuj tylko planowane zmiany.', 'Sprawdź wartości oraz różnicę i porównaj je z danymi producenta.'] },
  ],
});
