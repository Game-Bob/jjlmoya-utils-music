import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BpmCalculatorUI } from '../ui';

const slug = 'calcolatore-bpm-millisecondi';
const title = 'Calcolatore da BPM a Millisecondi per Delay e Riverbero';
const description =
  'Converti il tempo del tuo progetto (BPM) in tempi di delay esatti (ms) e frequenze (Hz). Lo strumento essenziale per impostare delay, riverberi e compressori con precisione ritmica.';

const faqData = [
  {
    question: 'Cos’è il Pre-delay in un riverbero?',
    answer:
      'Il Pre-delay è il tempo che intercorre tra il suono diretto (sorgente) e l’inizio della coda del riverbero. Impostarlo ritmicamente permette alla sorgente originale di rimanere chiara prima che l’effetto spaziale prenda il sopravvento — vitale per voci e percussioni.',
  },
  {
    question: 'Come funziona il Tap Tempo?',
    answer:
      'Il Tap Tempo rileva il tempo cliccando ritmicamente seguendo una canzone. Ogni clic viene cronometrato e il sistema calcola la media degli intervalli per fornirti i BPM esatti. È il modo più veloce per sincronizzare gli effetti a una traccia esterna.',
  },
  {
    question: 'Perché usare i millisecondi invece della sincronizzazione automatica?',
    answer:
      "Ci sono tre ragioni principali: l’uso di hardware analogico senza MIDI, il perfezionamento dei pre-delay affinché il riverbero 'respiri', e le regolazioni di 'groove' dove gli effetti vengono spostati leggermente fuori dalla griglia per evitare un feeling statico e robotico.",
  },
  {
    question: 'A cosa serve il valore Hz ritmico?',
    answer:
      'I valori in Hertz indicano quante volte succede qualcosa al secondo. Sono essenziali per configurare oscillatori LFO, frequenze di sweep del phaser o modulazioni di filtri su sintetizzatori privi di sincronizzazione automatica del tempo.',
  },
];

const howToData = [
  {
    name: 'Inserisci i BPM',
    text: 'Digita il tempo del tuo progetto nel campo centrale o usa il pulsante Tap Tempo.',
  },
  {
    name: 'Trova la suddivisione',
    text: 'Individua la nota necessaria (quarto, ottavo, ecc.) nelle tabelle delle note semplici, puntate o terzinate.',
  },
  {
    name: 'Copia il valore',
    text: 'Clicca sull’icona di copia accanto al valore in millisecondi per incollarlo direttamente nel tuo plugin o hardware.',
  },
  {
    name: 'Imposta il Pre-delay',
    text: 'Usa la sezione inferiore per valori ultra-brevi, ideali per separare il riverbero dalla voce solista.',
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
  faqTitle: 'Domande Frequenti',
  faq: faqData,
  bibliographyTitle: 'Riferimenti tecnici',
  bibliography: [
    {
      name: 'The Art of Mixing: A Visual Guide to Recording, Engineering, and Production',
      url: 'https://exellon.net/book/The%20Art%20Of%20Mixing%20A%20Visual%20Guide%20To%20Recording%20Engineering%20And%20Production%20(1997)%20-%20David%20Gibson%20Mix%20Books.pdf',
    },
    {
      name: 'BPM to MS Conversion Formula — Tuneform',
      url: 'https://tuneform.com/tools/time-tempo-bpm-to-milliseconds-ms',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  ui: {
    labelTempo: 'TEMPO (BPM)',
    btnTap: 'TAP TEMPO',
    sectionDelay: 'Tempi di Delay',
    sectionDotted: 'Note Puntate',
    sectionTriplets: 'Note Terzinate',
    sectionReverb: 'Design Riverbero (Pre-delay)',
    colNote: 'Nota',
    colMs: 'ms',
    colHz: 'Hz',
    infoPreDelay:
      'Il <strong>Pre-delay</strong> separa l’attacco originale dalla coda del riverbero per guadagnare chiarezza.',
    copyAriaMs: 'Copia millisecondi',
    copyAriaPreDelay: 'Copia pre-delay',
    copyFeedback: 'Copiato!',
  },
  seo: [
    {
      type: 'summary',
      title: 'Caratteristiche del calcolatore',
      items: [
        'Calcolo istantaneo per note semplici, puntate e terzinate',
        'Valori in millisecondi e Hz per ogni suddivisione ritmica',
        'Sezione Pre-delay per il design del riverbero con precisione musicale',
        'Tap Tempo: rileva i BPM cliccando a tempo di musica',
        'Copia con un clic negli appunti per qualsiasi DAW o plugin',
      ],
    },
    {
      type: 'title',
      text: 'Perché un calcolatore da BPM a millisecondi è essenziale?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Nella moderna produzione musicale, la precisione ritmica distingue un mix amatoriale da uno professionale. Sebbene la maggior parte delle DAW come Ableton Live, FL Studio o Logic Pro includano la sincronizzazione automatica per i loro effetti, ci sono innumerevoli situazioni in cui il controllo manuale è superiore.',
    },
    {
      type: 'title',
      text: 'L’importanza del Pre-delay nel Riverbero',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Uno degli usi più critici di questo strumento è la regolazione del <strong>pre-delay</strong>. Se applichi un riverbero a una voce senza pre-delay, la coda dell’effetto inizia immediatamente, offuscando le consonanti e riducendo la chiarezza. Calcolando un pre-delay ritmico (come un sessantaquattresimo o un centoventottesimo di nota), lasci respirare la voce originale prima che lo spazio acustico artificiale prenda il sopravvento. Questo crea un senso di profondità senza sacrificare la presenza della sorgente.',
    },
    {
      type: 'title',
      text: 'Delay Analogici e Hardware Esterno',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Se collezioni pedali delay analogici o sintetizzatori vintage, saprai che molti mancano di un ingresso MIDI clock. Impostare un delay a nastro manualmente richiede di sapere esattamente quanti millisecondi corrispondono a un ottavo o a un quarto puntato. Il nostro calcolatore ti fornisce istantaneamente quei valori, permettendoti di regolare il tuo hardware con precisione chirurgica.',
    },
    {
      type: 'title',
      text: 'Effetti fuori griglia e Groove',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A volte la perfezione matematica risulta noiosa. Molti produttori usano i valori in millisecondi come punto di partenza e poi li spostano leggermente in avanti o indietro. Spostare un delay di 5-10 ms fuori dalla griglia può aggiungere uno <em>swing</em> umano o un <em>groove</em> unico che la quantizzazione rigida non potrà mai replicare.',
    },
    {
      type: 'title',
      text: 'Compressione e LFO sincronizzati',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Sapevi che anche i tempi di <strong>Attacco</strong> e <strong>Rilascio</strong> di un compressore possono essere ritmici? Impostare il rilascio del compressore del drum bus in modo che termini esattamente prima del colpo di cassa successivo crea un effetto "pumping" o di <em>respiro</em> che rinforza il ritmo della canzone. Allo stesso modo, il valore Hz è essenziale per configurare gli oscillatori a bassa frequenza (LFO) su synth senza sincronizzazione nativa del tempo.',
    },
    {
      type: 'tip',
      title: 'Come usare il Tap Tempo',
      html: 'La funzione <strong>Tap Tempo</strong> è ideale per situazioni live o quando stai ascoltando una traccia esterna di cui non conosci il tempo. Clicca semplicemente ritmicamente sul pulsante seguendo la pulsazione della musica. Consigliamo almeno 4 o 5 clic affinché l’algoritmo possa calcolare la media del valore in modo più accurato.',
    },
    {
      type: 'title',
      text: 'Formule matematiche del tempo',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La formula alla base è semplice: <code>ms = 60.000 / BPM</code>. Da lì, vengono applicati i moltiplicatori per ogni suddivisione.',
    },
    {
      type: 'list',
      items: [
        'Note semplici: basate sulla divisione binaria (1, 0,5, 0,25, ecc.).',
        'Puntate: moltiplica il valore base per 1,5.',
        'Terzinate: moltiplica il valore base per 0,667 (2/3).',
      ],
    },
  ],
};
