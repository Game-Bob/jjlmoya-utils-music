import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PhaseDistanceUI } from '../ui';

const slug = 'calcolatore-distanza-fase';
const title = 'Calcolatore della distanza di fase per i microfoni';
const description =
  'Calcola il ritardo e la compensazione necessari per allineare i microfoni. Evita la cancellazione di fase e il filtrato a pettine con precisione al singolo campione e regolazione della temperatura.';

const faqData = [
  {
    question: "Cos'è la cancellazione di fase nell'audio?",
    answer:
      'Si tratta di un fenomeno acustico che si verifica quando due segnali provenienti dalla stessa sorgente arrivano in tempi diversi. Le onde interferiscono tra loro e, se sono disallineate di 180 gradi, si cancellano a vicenda, rendendo il suono sottile e privo di corpo.',
  },
  {
    question: 'Perché la temperatura influenza il calcolo?',
    answer:
      "Perché il suono viaggia attraverso l'aria e la densità dell'aria cambia con la temperatura. Più fa caldo, più velocemente viaggia il suono. Una regolazione precisa della temperatura consente di calcolare l'esatto ritardo tra microfoni separati.",
  },
  {
    question: "L'inversione di fase è uguale all'inversione di polarità?",
    answer:
      "Tecnicamente no, sebbene i termini siano usati in modo intercambiabile. La polarità è un cambiamento elettrico (rotazione di 180°), mentre la fase è uno spostamento temporale. Il nostro strumento ti consente di simulare entrambi per trovare il punto di massima coerenza sonora.",
  },
  {
    question: "Cos'è il filtrato a pettine (Comb Filtering)?",
    answer:
      'È la risposta in frequenza che risulta dalla combinazione di un segnale con una versione ritardata di se stesso. Crea una serie di picchi e valli - come i denti di un pettine - che alterano drasticamente il timbro dello strumento.',
  },
  {
    question: "Cos'è la regola di 3 a 1 nella tecnica microfonica?",
    answer:
      'È una tecnica per ridurre al minimo i problemi di fase: quando si utilizzano due microfoni per sorgenti diverse, la distanza tra i microfoni deve essere almeno tre volte la distanza tra ciascun microfono e la sua sorgente.',
  },
  {
    question: 'È meglio allineare i microfoni fisicamente o con un software?',
    answer:
      'Un buon allineamento fisico durante la registrazione è sempre preferibile per evitare artefatti. Tuttavia, il ritardo digitale nella DAW offre una precisione al singolo campione che è quasi impossibile da ottenere spostando i microfoni a mano.',
  },
];

const howToData = [
  {
    name: 'Misura le distanze',
    text: 'Misura la distanza fisica dalla sorgente sonora (ad esempio il rullante) a ciascuno dei microfoni che stai utilizzando.',
  },
  {
    name: 'Imposta l\'ambiente',
    text: 'Inserisci la temperatura ambiente e la frequenza di campionamento del tuo progetto per ottenere calcoli basati sulla fisica reale.',
  },
  {
    name: 'Analizza il grafico',
    text: 'Guarda il visualizzatore della risposta in frequenza per identificare possibili cancellazioni critiche nella gamma udibile.',
  },
  {
    name: 'Applica la compensazione',
    text: 'Copia il valore in millisecondi o campioni e inseriscilo nel plugin di ritardo sul tuo canale per allineare perfettamente le tracce.',
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

export const content: ToolLocaleContent<PhaseDistanceUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  ui: {
    labelTemp: 'Temperatura (°C) / Suono',
    btnAuto: 'Auto',
    labelSampleRate: 'Frequenza di campionamento (kHz)',
    labelUnits: 'Sistema di unità',
    optMetric: 'Metrico (m/cm)',
    optImperial: 'Imperiale (ft/in)',
    labelDistA: 'Distanza microfono A',
    labelDistB: 'Distanza microfono B',
    labelPresets: 'Preimpostazioni rapide',
    presetCoincident: 'Coincidente (XY)',
    presetSnare: 'Rullante',
    presetAmbient: 'Ambiente',
    btnInvert: 'Inverti fase (Φ)',
    labelGain: 'Guadagno relativo Mic B:',
    btnCopy: 'Copia campioni',
    labelDelay: 'Ritardo richiesto',
    unitMs: 'millisecondi (ms)',
    labelCompensation: 'Compensazione',
    unitSamples: 'Campioni',
    labelPhaseStatus: 'Stato della fase',
    textLoading: 'Caricamento...',
    statusInPhase: 'IN FASE',
    statusInPhaseDesc: 'Segnali perfettamente allineati.',
    statusCritical: 'CANCELLAZIONE CRITICA',
    statusCriticalDesc: 'Notevole filtrato a pettine nella gamma medio-bassa.',
    statusOffAxis: 'FUORI ASSE',
    statusOffAxisDesc: 'Leggero spostamento di fase. Consistenza modificata.',
    warningCritical: 'POSSIBILE CANCELLAZIONE CRITICA',
    labelSoundSpeed: 'Velocità del suono',
    labelDistDiff: 'Differenza di distanza',
    labelNullFreq: 'Primi nuli',
    textNone: 'Nessuno',
    chartTitle: 'RISPOSTA IN FREQUENZA (H) - COMB FILTERING',
    promptSoundSpeed: 'Velocità del suono (m/s):',
    copyFeedback: 'Copiato!',
  },
  seo: [
    {
      type: 'summary',
      title: 'Caratteristiche della calcolatrice',
      items: [
        'Calcolo fisico esatto con regolazione della temperatura per la velocità del suono',
        'Risultato in millisecondi e campioni per compensazione in DAW',
        'Visualizzatore Canvas del filtrato a pettine in tutto lo spettro udibile',
        'Preimpostazioni di microfonazione (XY coincidente, rullante, ambiente)',
        'Simulazione di inversione di fase e controllo del guadagno relativo',
        'Supporto per unità metriche ed imperiali',
      ],
    },
    {
      type: 'title',
      text: "Cos'è la cancellazione di fase e perché rovina i tuoi mix?",
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Nel mondo dell'ingegneria del suono, la fase è uno dei concetti più critici e, paradossalmente, uno dei più trascurati dai principianti. Quando si registra una sorgente sonora - come una batteria o un amplificatore per chitarra - con due o più microfoni posizionati a distanze diverse, le onde sonore non raggiungono le capsule contemporaneamente. Questa differenza di tempo, seppur minima, causa un fenomeno noto come <strong>spostamento di fase</strong>.",
    },
    {
      type: 'title',
      text: 'Il fenomeno del Filtrato a Pettine (Comb Filtering)',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Quando due segnali identici vengono combinati con un leggero ritardo tra loro, nella risposta in frequenza appare una serie di valli e picchi. Visto su un analizzatore di spettro, il pattern ricorda i denti di un pettine, da cui il nome. Questo effetto altera drasticamente il timbro naturale dello strumento in modo distruttivo.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Impatto sulle basse frequenze',
          description:
            'La cancellazione di fase è più devastante nelle basse frequenze, dove il corpo del suono scompare del tutto.',
        },
        {
          title: 'Consistenza metallica',
          description:
            'Il filtrato a pettine aggiunge una colorazione artificiale che suona vuota o eccessivamente elaborata.',
        },
      ],
    },
    {
      type: 'title',
      text: 'La influenza della temperatura nel calcolo',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Molti ingegneri del suono dimenticano che l'aria è un mezzo fisico e la sua densità cambia con la temperatura. La velocità del suono non è una costante immutabile; a 20°C viaggia a circa 343 metri al secondo.",
    },
    {
      type: 'code',
      code: 'v = 331.3 + (0.606 × T)',
      ariaLabel: 'Fórmula de la velocidad del sonido según la temperatura',
    },
    {
      type: 'tip',
      title: 'Compensazione Chirurgica',
      html: "Pochi gradi di differenza possono spostare i punti di cancellazione di diversi hertz. L'utilizzo del nostro calcolatore con la temperatura reale del tuo studio garantisce un allineamento perfetto nella DAW.",
    },
    {
      type: 'title',
      text: 'Escenarios críticos de grabación',
      level: 2,
    },
    {
      type: 'list',
      items: [
        'Rullante (Top e Bottom): allinea temporalmente le due pelli per massimizzare l\'impatto.',
        'Overheads e microfoni ravvicinati: ritarda i microfoni ravvicinati per farli coincidere con la fase degli overheads.',
        'Chitarre con più microfoni: miscela un microfono dinamico e uno a nastro senza perdere i medi-bassi.',
        'Basso DI e microfono: sincronizza il segnale diretto con il microfono dell\'amplificatore per un suono massiccio.',
      ],
    },
    {
      type: 'title',
      text: 'Alineación Física vs. Procesamiento Digital',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Sebbene il nostro strumento fornisca i valori per correggere la fase nella tua DAW dopo la registrazione, consigliamo sempre di cercare il miglior allineamento fisico possibile in studio. Spostare un microfono di pochi millimetri può essere più efficace di qualsiasi elaborazione digitale.',
    },
    {
      type: 'stats',
      items: [
        { label: 'Velocità a 20°C', value: '343.2 m/s' },
        { label: 'Milisegundos/cm', value: '0.029 ms' },
        { label: 'Campioni a 48kHz', value: '1.4 per cm' },
      ],
    },
    {
      type: 'title',
      text: 'Tabla de referencia: Distancia vs. Primer Nulo',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Differenza (cm)', 'Ritardo (ms)', '1° Nullo (Hz)', 'Influenza...'],
      rows: [
        ['1 cm', '0.029', '17160', 'Estremo acuto'],
        ['5 cm', '0.146', '3432', 'Medi-alti (Presenza)'],
        ['10 cm', '0.291', '1716', 'Medi (Presenza)'],
        ['30 cm', '0.874', '572', 'Medio-bassi (Corpo)'],
        ['1 metro', '2.914', '172', 'Basse frequenze (Fondamentale)'],
      ],
    },
    {
      type: 'title',
      text: 'Ventajas y desventajas de los métodos de corrección',
      level: 2,
    },
    {
      type: 'proscons',
      items: [
        {
          pro: 'Allineamento fisico: minore degradazione del segnale originale.',
          con: 'Allineamento fisico: difficile da regolare con precisione micrometrica.',
        },
        {
          pro: 'Correzione digital: precisione assoluta a livello di campione.',
          con: 'Correzione digital: può creare un pre-eco se applicata in modo errato.',
        },
        {
          pro: 'Inversione di polarità: soluzione istantanea per cancellazioni a 180°.',
          con: 'Inversione di polarità: non corregge gli spostamenti di fase intermedi.',
        },
        {
          pro: 'Compensazione temporale: recupera l\'impatto e la definizione perduti.',
          con: 'Compensazione temporale: richiede la misurazione precisa di ciascun microfono.',
        },
      ],
    },
    {
      type: 'tip',
      title: 'Come rilevare i problemi di fase ad orecchio?',
      html: 'Premi il pulsante "Inverti fase" (Φ). Se attivandolo il suono acquista corpo e basse frequenze, i microfoni erano fuori fase. Se il suono scompare o diventa più sottile, erano allineati correttamente.',
    },
    {
      type: 'title',
      text: 'Compatibilità Mono e Percezione Estéreo',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Nelle registrazioni stereo, la relazione di fase definisce la stabilità dell\'immagine sonora. Se ci sono gravi incongruenze, il suono potrebbe scomparire del tutto quando il mix viene riprodotto su un sistema mono. Il nostro calcolatore ti aiuta a prevedere quali frequenze subiranno maggiormente gli effetti negativi quando i canali verranno sommati.',
    },
  ],
};
