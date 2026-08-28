import { createGuitarStringTensionContent } from './content-factory';

const title = 'Calcolatore della tensione delle corde per chitarra';
const slug = 'calcolatore-tensione-corde-chitarra';
const description = 'Stima la tensione di ogni corda della chitarra in base a calibro, scala e accordatura. Confronta interi set offline in unità metriche o imperiali.';

export const content = createGuitarStringTensionContent({
  slug,
  title,
  description,
  ui: {
    metric: 'Metrico', imperial: 'Imperiale', metricLength: 'Scala in mm', imperialLength: 'Scala in pollici', metricGauge: 'Calibro in mm', imperialGauge: 'Calibro in mil', metricTension: 'kg-forza', imperialTension: 'libbre-forza', chooseSet: 'Scegli un set di corde', scaleLength: 'Scala', tuning: 'Accordatura', material: 'Materiale della corda', customSet: 'Modifica i calibri', presetHint: 'Inizia dal set più vicino', gauge: 'Calibro', note: 'Nota', frequency: 'Frequenza', tension: 'Tensione', status: 'Sensazione', totalTension: 'Trazione totale sul manico', averageTension: 'Media per corda', tensionSpread: 'Differenza tra la più morbida e la più rigida', low: 'Morbida', balanced: 'Equilibrata', high: 'Rigida', standard: 'Mi standard', halfStepDown: 'Un semitono sotto', dropD: 'Drop D', wholeStepDown: 'Un tono sotto', openG: 'Open G', steel: 'Acciaio', nickel: 'Acciaio nichelato', phosphorBronze: 'Bronzo fosforoso', nylon: 'Nylon', presetExtraLight: 'Extra light', presetRegular: 'Regular', presetMedium: 'Medium', presetHeavy: 'Heavy', presetCustom: 'Modifica i calibri', shortScale: 'Scala corta 24,75 pollici', fenderScale: 'Scala Fender 25,5 pollici', martinScale: 'Scala Martin 25,4 pollici', customScale: 'Scala personalizzata', customScaleHint: 'Usa la lunghezza vibrante tra capotasto e ponte', formulaNote: 'La stima usa T = 4L²f²μ, dove μ è la massa per unità di lunghezza ricavata da diametro e densità del materiale.', modelNote: 'Questa stima offline usa un modello di densità dell acciaio. Anime, avvolgimenti, rivestimenti e masse lineari del produttore possono cambiare la tensione reale. Controlla i dati del produttore prima di modificare il setup dello strumento.', faqTitle: 'Domande sulla tensione delle corde', bibliographyTitle: 'Fonti del modello di tensione', tableLabel: 'Lettura della tensione per ogni corda', tensionMapLabel: 'Profilo di tensione delle sei corde',
  },
  faq: [
    { question: 'Di cosa ha bisogno un calcolatore della tensione delle corde?', answer: 'Servono la scala vibrante, l altezza di ogni nota, il calibro e una stima coerente della densità del materiale. Un preset fornisce i sei calibri, mentre l accordatura cambia le frequenze obiettivo.' },
    { question: 'Una scala più lunga aumenta la tensione delle corde?', answer: 'Sì. Con calibro e nota uguali, la tensione cresce con il quadrato della lunghezza vibrante. Lo stesso set 10-46 può quindi sembrare più rigido su 25,5 pollici che su 24,75 pollici.' },
    { question: 'Come influisce l accordatura sulla tensione?', answer: 'Abbassare una corda riduce la tensione secondo il quadrato del rapporto tra le frequenze. Un tono sotto conserva circa il 79% della tensione iniziale, un semitono sotto circa l 89%.' },
    { question: 'I risultati sono esatti per le corde avvolte?', answer: 'No. Il modello tratta la corda come un cilindro con la densità del materiale. Le corde avvolte hanno anima, avvolgimenti e rivestimenti, quindi le tabelle della massa lineare del produttore sono più precise.' },
    { question: 'Quale tensione è comoda su una chitarra?', answer: 'Non esiste un valore universale. Questo strumento marca sotto 8 libbre come morbido e sopra 25 libbre come rigido per mostrare gli estremi. Stile, setup e strumento restano decisivi.' },
    { question: 'Posso usare il risultato per approvare un nuovo set?', answer: 'Usalo per confrontare scenari, non come garanzia di sicurezza. Controlla le indicazioni del produttore dello strumento e le specifiche delle corde prima di cambiare molto calibro o accordatura.' },
  ],
  howTo: [
    { name: 'Scegli il sistema di misura', text: 'Scegli Metrico per millimetri e chilogrammi-forza oppure Imperiale per pollici, mil e libbre-forza. Il setup fisico resta uguale quando cambi sistema.' },
    { name: 'Scegli scala e accordatura', text: 'Seleziona la scala più vicina e poi l accordatura che usi davvero. Usa Scala personalizzata se conosci la lunghezza vibrante.' },
    { name: 'Scegli o modifica i calibri', text: 'Inizia con un preset 9-42, 10-46, 11-49 o 12-54. Apri Modifica i calibri per provare un set misto o una sesta personalizzata.' },
    { name: 'Leggi il profilo di tensione', text: 'Confronta ogni corda, la trazione totale sul manico e la differenza tra gli estremi. Le etichette Morbida e Rigida indicano i valori da controllare.' },
  ],
  seo: [
    { type: 'summary', title: 'Cosa confronta questo calcolatore', items: ['La tensione delle sei corde da un preset o da calibri personalizzati', 'I cambi di scala e accordatura mostrati come nuovo profilo', 'Letture metriche e imperiali in chilogrammi-forza o libbre-forza', 'Indicatori morbido e rigido per trovare gli estremi'] },
    { type: 'title', text: 'Cosa rivela la tensione sul setup della chitarra', level: 2 },
    { type: 'paragraph', html: 'La tensione è la forza necessaria per mantenere una corda a una certa altezza. Non dipende solo dal calibro: contano anche nota e lunghezza vibrante. Il profilo del set mostra se una corda è molto più morbida o rigida delle vicine.' },
    { type: 'title', text: 'Il modello fisico della stima', level: 2 },
    { type: 'paragraph', html: 'Una corda vibrante collega frequenza, lunghezza vibrante e massa lineare. La relazione T = 4L²f²μ è il modello usato qui; la massa lineare deriva da una sezione circolare e da un modello di densità dell acciaio.' },
    { type: 'title', text: 'Perché contano ancora i dati del produttore', level: 2 },
    { type: 'paragraph', html: 'Le corde avvolte combinano anima e avvolgimenti; rivestimento e costruzione cambiano la massa lineare. Usa il risultato come laboratorio di confronto e la scheda del produttore come riferimento per l installazione. Il confronto aiuta a prevedere quali corde cambieranno di più la risposta al tocco.' },
    { type: 'list', items: ['Prendi la scala dalle specifiche o misura dal capotasto al ponte.', 'Scegli l accordatura usata davvero.', 'Inizia dal preset più vicino e modifica solo le corde previste.', 'Controlla i valori e la differenza, poi verifica i dati del produttore.'] },
  ],
});
