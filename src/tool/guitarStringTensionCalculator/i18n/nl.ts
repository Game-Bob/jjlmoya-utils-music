import { createGuitarStringTensionContent } from './content-factory';

const title = 'Calculator voor snaarspanning van een gitaar';
const slug = 'gitaarsnaarspanning-calculator';
const description = 'Schat de spanning van elke gitaarsnaar op basis van dikte, mensuur en stemming. Vergelijk complete snarensets offline in metrische of imperiale eenheden.';

export const content = createGuitarStringTensionContent({
  slug,
  title,
  description,
  ui: {
    metric: 'Metrisch', imperial: 'Imperiaal', metricLength: 'Mensuur in mm', imperialLength: 'Mensuur in inch', metricGauge: 'Dikte in mm', imperialGauge: 'Dikte in mil', metricTension: 'kg kracht', imperialTension: 'pond kracht', chooseSet: 'Kies een snarenset', scaleLength: 'Mensuur', tuning: 'Stemming', material: 'Snaarmateriaal', customSet: 'Snaren aanpassen', presetHint: 'Begin met de meest vergelijkbare set', gauge: 'Dikte', note: 'Noot', frequency: 'Frequentie', tension: 'Spanning', status: 'Speelgevoel', totalTension: 'Totale trekkracht op de hals', averageTension: 'Gemiddelde per snaar', tensionSpread: 'Verschil van lichtste tot zwaarste snaar', low: 'Los', balanced: 'Evenwichtig', high: 'Strak', standard: 'Standaard E', halfStepDown: 'Een halve toon lager', dropD: 'Drop D', wholeStepDown: 'Een hele toon lager', openG: 'Open G', steel: 'Staal', nickel: 'Vernikkeld staal', phosphorBronze: 'Fosforbrons', nylon: 'Nylon', presetExtraLight: 'Extra light', presetRegular: 'Regular', presetMedium: 'Medium', presetHeavy: 'Heavy', presetCustom: 'Snaren aanpassen', shortScale: 'Korte mensuur 24,75 inch', fenderScale: 'Fender mensuur 25,5 inch', martinScale: 'Martin mensuur 25,4 inch', customScale: 'Aangepaste mensuur', customScaleHint: 'Gebruik de trillende lengte van topkam tot brug', formulaNote: 'De schatting gebruikt T = 4L²f²μ, waarbij μ de massa per lengte is uit diameter en materiaaldichtheid.', modelNote: 'Deze offline schatting gebruikt een dichtheidsmodel voor staal. Kernen, windingen, coatings en massa per lengte van de fabrikant kunnen de werkelijke spanning veranderen. Controleer de gegevens van de fabrikant voor je de setup wijzigt.', faqTitle: 'Vragen over gitaarsnaarspanning', bibliographyTitle: 'Bronnen voor het spanningsmodel', tableLabel: 'Spanningsmeting per snaar', tensionMapLabel: 'Spanningsprofiel van de zes snaren',
  },
  faq: [
    { question: 'Wat heeft een calculator voor gitaarsnaarspanning nodig?', answer: 'De calculator heeft de trillende mensuur, de toonhoogte van elke snaar, de snaardikte en een consistente schatting van de materiaaldichtheid nodig. Een preset levert de zes diktes en de stemming verandert de doel-frequenties.' },
    { question: 'Verhoogt een langere gitaarmensuur de snaarspanning?', answer: 'Ja. Bij dezelfde dikte en toonhoogte groeit de spanning met het kwadraat van de trillende lengte. Dezelfde 10-46-set kan daarom strakker voelen op 25,5 inch dan op 24,75 inch.' },
    { question: 'Hoe beïnvloedt een andere stemming de spanning?', answer: 'Een lagere stemming verlaagt de spanning met het kwadraat van de frequentieverhouding. Een hele toon lager blijft ongeveer 79 procent van de oorspronkelijke spanning over, een halve toon lager ongeveer 89 procent.' },
    { question: 'Zijn de resultaten exact voor omwonden gitaarsnaren?', answer: 'Nee. Het model behandelt de snaar als een cilinder met materiaaldichtheid. Omwonden snaren hebben een kern, windingen en coatings, waardoor de massa-per-lengte-tabellen van de fabrikant nauwkeuriger zijn.' },
    { question: 'Welke snaarspanning voelt comfortabel?', answer: 'Er bestaat geen universele doelwaarde. Deze tool markeert waarden onder 8 pond als los en boven 25 pond als strak om uitersten te vinden. Speelstijl, setup en instrument bepalen het gevoel.' },
    { question: 'Kan ik het resultaat gebruiken om een nieuwe set goed te keuren?', answer: 'Gebruik het om scenario s te vergelijken, niet als veiligheidsgarantie. Controleer de richtlijnen van de instrumentmaker en de specificaties van de snaren voordat je dikte of stemming sterk wijzigt.' },
  ],
  howTo: [
    { name: 'Kies het meetsysteem', text: 'Kies Metrisch voor millimeters en kilogramkracht of Imperiaal voor inch, mil en pondkracht. De fysieke setup blijft gelijk bij het wisselen.' },
    { name: 'Kies mensuur en stemming', text: 'Selecteer de dichtstbijzijnde mensuur en daarna de stemming die je echt gebruikt. Gebruik Aangepaste mensuur als de trillende lengte bekend is.' },
    { name: 'Kies of pas de diktes aan', text: 'Begin met een preset 9-42, 10-46, 11-49 of 12-54. Open Snaren aanpassen voor een gemengde set of een aangepaste lage snaar.' },
    { name: 'Lees het spanningsprofiel', text: 'Vergelijk elke snaar, de totale trekkracht op de hals en het verschil tussen de uitersten. Losse en strakke labels tonen waarden om verder te controleren.' },
  ],
  seo: [
    { type: 'summary', title: 'Wat deze calculator vergelijkt', items: ['Spanning van alle zes snaren uit een preset of eigen diktes', 'Veranderingen in mensuur en stemming als nieuw spanningsprofiel', 'Metrische en imperiale metingen in kilogramkracht of pondkracht', 'Losse en strakke markeringen om uitersten te herkennen'] },
    { type: 'title', text: 'Wat snaarspanning zegt over een gitaarsetup', level: 2 },
    { type: 'paragraph', html: 'Snaarspanning is de trekkracht die een snaar op een gekozen toonhoogte houdt. Het is niet alleen een kwestie van dikte: toonhoogte en trillende lengte veranderen de kracht ook. Het profiel laat zien of een snaar veel losser of strakker is dan zijn buren.' },
    { type: 'title', text: 'Het fysieke model achter de schatting', level: 2 },
    { type: 'paragraph', html: 'Een trillende snaar verbindt frequentie, trillende lengte en lineaire massa. De relatie T = 4L²f²μ vormt het model; de lineaire massa wordt geschat uit een ronde doorsnede en een staalmodel.' },
    { type: 'title', text: 'Waarom fabrikantgegevens belangrijk blijven', level: 2 },
    { type: 'paragraph', html: 'Omwonden snaren combineren een kern en windingen; coating en constructie veranderen hun massa per lengte. Gebruik dit resultaat als vergelijkingslab en de producttabel van de fabrikant als montagebron.' },
    { type: 'list', items: ['Neem de mensuur uit de instrumentspecificaties of meet van topkam tot brug.', 'Kies de stemming die je echt gebruikt.', 'Begin met de dichtstbijzijnde diktepreset en pas alleen geplande snaren aan.', 'Controleer de afzonderlijke waarden en het verschil en vergelijk ze met fabrikantgegevens.'] },
  ],
});
