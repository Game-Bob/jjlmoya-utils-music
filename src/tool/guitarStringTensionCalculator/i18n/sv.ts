import { createGuitarStringTensionContent } from './content-factory';

const title = 'Kalkylator för gitarrsträngars spänning';
const slug = 'kalkylator-gitarrstrangars-spanning';
const description = 'Beräkna spänningen i varje gitarrsträng utifrån tjocklek, mensur och stämning. Jämför kompletta strängset offline i metriska eller brittiska enheter.';

export const content = createGuitarStringTensionContent({
  slug,
  title,
  description,
  ui: {
    metric: 'Metriskt', imperial: 'Brittiskt', metricLength: 'Mensur i mm', imperialLength: 'Mensur i tum', metricGauge: 'Tjocklek i mm', imperialGauge: 'Tjocklek i mil', metricTension: 'kg kraft', imperialTension: 'pund kraft', chooseSet: 'Välj ett strängset', scaleLength: 'Mensur', tuning: 'Stämning', material: 'Strängmaterial', customSet: 'Redigera tjocklekar', presetHint: 'Börja med det närmaste setet', gauge: 'Tjocklek', note: 'Ton', frequency: 'Frekvens', tension: 'Spänning', status: 'Spelkänsla', totalTension: 'Total dragkraft på halsen', averageTension: 'Genomsnitt per sträng', tensionSpread: 'Skillnad från lösast till stramast', low: 'Lös', balanced: 'Balanserad', high: 'Stram', standard: 'Standard E', halfStepDown: 'En halvton ner', dropD: 'Drop D', wholeStepDown: 'En helton ner', openG: 'Open G', steel: 'Stål', nickel: 'Nickelpläterat stål', phosphorBronze: 'Fosforbrons', nylon: 'Nylon', presetExtraLight: 'Extra light', presetRegular: 'Regular', presetMedium: 'Medium', presetHeavy: 'Heavy', presetCustom: 'Redigera tjocklekar', shortScale: 'Kort mensur 24,75 tum', fenderScale: 'Fender-mensur 25,5 tum', martinScale: 'Martin-mensur 25,4 tum', customScale: 'Anpassad mensur', customScaleHint: 'Använd den vibrerande längden från översadel till stall', formulaNote: 'Uppskattningen använder T = 4L²f²μ, där μ är massa per längdenhet från diameter och materialets densitet.', modelNote: 'Denna offline-uppskattning använder en densitetsmodell för stål. Kärnor, lindningar, ytbehandlingar och tillverkarens linjära massa kan ändra den verkliga spänningen. Kontrollera tillverkarens data innan du ändrar instrumentets setup.', faqTitle: 'Frågor om gitarrsträngars spänning', bibliographyTitle: 'Källor för spänningsmodellen', tableLabel: 'Spänningsvärde för varje sträng', tensionMapLabel: 'Spänningsprofil för de sex strängarna',
  },
  faq: [
    { question: 'Vad behöver en kalkylator för gitarrsträngars spänning?', answer: 'Den behöver vibrerande mensur, tonhöjd för varje sträng, strängtjocklek och en konsekvent uppskattning av materialets densitet. Ett preset ger de sex tjocklekarna och stämningen ändrar målfrekvenserna.' },
    { question: 'Ökar en längre gitarrmensur strängspänningen?', answer: 'Ja. Med samma tjocklek och tonhöjd ökar spänningen med kvadraten på den vibrerande längden. Samma 10-46-set kan därför kännas stramare på 25,5 tum än på 24,75 tum.' },
    { question: 'Hur påverkar en annan stämning spänningen?', answer: 'En lägre stämning minskar spänningen med kvadraten på frekvensförhållandet. En helton ner lämnar ungefär 79 procent av den ursprungliga spänningen, en halvton ner ungefär 89 procent.' },
    { question: 'Är resultaten exakta för lindade gitarrsträngar?', answer: 'Nej. Modellen behandlar strängen som en cylinder med materialets densitet. Lindade strängar har kärna, lindningar och ytbehandling, så tillverkarens tabeller över massa per längd är mer exakta.' },
    { question: 'Vilken strängspänning känns bekväm?', answer: 'Det finns inget universellt mål. Verktyget markerar värden under 8 pund som lösa och över 25 pund som strama för att visa ytterligheter. Spelstil, setup och instrument avgör känslan.' },
    { question: 'Kan jag använda resultatet för att godkänna ett nytt strängset?', answer: 'Använd det för att jämföra scenarier, inte som en säkerhetsgaranti. Kontrollera instrumenttillverkarens råd och strängtillverkarens specifikationer före en stor ändring av tjocklek eller stämning.' },
  ],
  howTo: [
    { name: 'Välj mätsystem', text: 'Välj Metriskt för millimeter och kilogram kraft eller Brittiskt för tum, mil och pund kraft. Den fysiska setupen förblir densamma.' },
    { name: 'Välj mensur och stämning', text: 'Välj närmaste mensur och sedan den stämning du faktiskt använder. Välj Anpassad mensur om den vibrerande längden är känd.' },
    { name: 'Välj eller redigera tjocklekar', text: 'Börja med preset 9-42, 10-46, 11-49 eller 12-54. Öppna Redigera tjocklekar för ett blandat set eller en egen bassträng.' },
    { name: 'Läs spänningsprofilen', text: 'Jämför varje sträng, total dragkraft på halsen och skillnaden mellan ytterligheterna. Märkningarna Lös och Stram visar värden att kontrollera.' },
  ],
  seo: [
    { type: 'summary', title: 'Vad kalkylatorn jämför', items: ['Spänningen i alla sex strängar från preset eller egna tjocklekar', 'Ändringar av mensur och stämning som en ny spänningsprofil', 'Metriska och brittiska värden i kilogram eller pund kraft', 'Markeringar för lösa och strama strängar som visar ytterligheter'] },
    { type: 'title', text: 'Vad strängspänning säger om en gitarrsetup', level: 2 },
    { type: 'paragraph', html: 'Strängspänning är dragkraften som håller en sträng vid en vald tonhöjd. Den beror inte bara på tjockleken: tonhöjd och vibrerande längd ändrar också kraften. Profilen visar om en sträng är mycket lösare eller stramare än grannarna.' },
    { type: 'title', text: 'Den fysiska modellen bakom uppskattningen', level: 2 },
    { type: 'paragraph', html: 'En vibrerande sträng kopplar ihop frekvens, längd och linjär massa. Sambandet T = 4L²f²μ används här, med linjär massa uppskattad från ett cirkulärt tvärsnitt och en stålmodell.' },
    { type: 'title', text: 'Varför tillverkarens data fortfarande spelar roll', level: 2 },
    { type: 'paragraph', html: 'Lindade strängar kombinerar kärna och lindning, och ytbehandling samt konstruktion ändrar massan per längd. Använd resultatet som jämförelselaboratorium och tillverkarens produkttabell som installationsreferens. Då kan du jämföra motståndet under fingrarna och se vilka strängar som påverkas mest av ett nytt set.' },
    { type: 'list', items: ['Hämta mensuren från instrumentspecifikationen eller mät från översadel till stall.', 'Välj den stämning du faktiskt använder.', 'Börja med närmaste tjocklekspreset och ändra bara planerade strängar.', 'Kontrollera värden och skillnad och jämför sedan med tillverkarens data.'] },
  ],
});
