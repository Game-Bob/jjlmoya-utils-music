import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MetronomeUI } from '../ui';

const slug = 'metronomo';
const title = 'Metronomo Online: Alta Precisione Visiva e Sonora';
const description =
  'Metronomo online gratuito per musicisti. Precisione al millisecondo con Web Audio API. Visuale, sonoro e Tap Tempo. Perfetto per esercitarsi con ogni strumento.';

const faqData = [
  {
    question: 'Questo metronomo è abbastanza preciso per un uso professionale?',
    answer:
      'Sì. Utilizziamo la Web Audio API, che programma i suoni direttamente sull’orologio hardware del dispositivo. Questo evita i micro-ritardi tipici di altre applicazioni web e garantisce una precisione al millisecondo, anche durante sessioni prolungate.',
  },
  {
    question: 'Cos’è il Tap Tempo e come si usa?',
    answer:
      'È una funzione che permette di calcolare i BPM picchiettando ritmicamente. Basta cliccare sul pulsante "TAP" o premere la barra spaziatrice a tempo con la musica che stai ascoltando per ottenere istantaneamente il tempo esatto.',
  },
  {
    question: 'Posso cambiare il tempo e gli accenti?',
    answer:
      'Sì, puoi configurare diversi tempi (2/4, 3/4, 4/4, 6/8, ecc.) e personalizzare gli accenti dei battiti per adattarli allo stile della musica che stai studiando.',
  },
  {
    question: 'Perché non sento nulla sul mio iPhone o iPad?',
    answer:
      'Sui dispositivi iOS, la tecnologia Web Audio rispetta l’interruttore fisico del silenzioso. Assicurati che il telefono non sia in modalità silenziosa e alza il volume dei file multimediali per sentire i clic.',
  },
];

const howToData = [
  {
    name: 'Imposta i BPM',
    text: 'Usa lo slider o i pulsanti di sintonizzazione fine per impostare la velocità desiderata in battiti al minuto.',
  },
  {
    name: 'Configura il tempo',
    text: 'Scegli il numero di battiti (es. 4/4 o 3/4) affinché il metronomo accenti correttamente la prima battuta di ogni misura.',
  },
  {
    name: 'Sincronizza con musica esterna (Tap)',
    text: 'Se hai bisogno di trovare il tempo di una canzone che stai ascoltando, premi il pulsante TAP seguendo la batteria o la pulsazione principale.',
  },
  {
    name: 'Inizia a esercitarti',
    text: 'Premi il pulsante di avvio. Gli indicatori visivi ti aiuteranno a mantenere il tempo anche se non riesci a sentire chiaramente il suono nel tuo ambiente.',
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
  faqTitle: 'Domande Frequenti',
  faq: faqData,
  bibliographyTitle: 'Riferimenti Tecnici',
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
    labelTime: 'Tempo',
    labelTap: 'Tap Tempo',
    btnTap: 'TAP',
    warningTitle: 'Nessun suono?',
    warningText:
      'Se sei su iPhone/iPad, assicurati che l’interruttore laterale del silenzioso non sia attivo. La tecnologia Web Audio rispetta la modalità silenziosa di sistema su molti dispositivi.',
  },
  seo: [
    {
      type: 'summary',
      title: 'Caratteristiche del metronomo',
      items: [
        'Motore Web Audio API — precisione al millisecondo, nessuna deriva',
        'Tap Tempo: calcola i BPM picchiettando a tempo',
        'Tempo configurabile da 1 a 12 battiti con accento automatico',
        'Indicatore visivo ad alto contrasto con effetto ripple',
        'Controllo del volume e pulsanti di sintonizzazione fine ±1/±5 BPM',
      ],
    },
    {
      type: 'title',
      text: 'Precisione Ritmica nel tuo Browser',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Benvenuto nel <strong>Metronomo Online Definitivo</strong>. Abbiamo costruito questo strumento con un unico obiettivo: <em>l’affidabilità</em>. A differenza di altri metronomi web che soffrono di "deriva" (piccoli ritardi cumulativi) a causa del carico del processore, il nostro motore sonoro è costruito direttamente sulla <strong>Web Audio API</strong>.',
    },
    {
      type: 'paragraph',
      html: 'Ciò significa che gli impulsi sonori sono programmati in anticipo sull’orologio hardware del tuo dispositivo, garantendo una <strong>precisione millimetrica incrollabile</strong>, anche se riduci a icona la scheda o il computer è occupato.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Visualizzazione Chiara',
          description:
            'Indicatori visivi ampi e ad alto contrasto con un effetto "ripple". Progettati per essere percepiti con la visione periferica, permettendoti di tenere gli occhi sullo spartito o sullo strumento senza perdere il tempo.',
        },
        {
          title: 'Smart Tap Tempo',
          description:
            'Stai ascoltando una canzone e vuoi conoscerne la velocità? Premi il pulsante TAP o il tasto Spazio a tempo con la musica. L’algoritmo calcolerà la media esatta dei tuoi tocchi.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Guida Master: Come Esercitarsi con un Metronomo',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Il metronomo non è solo un orologio che fa clic; è il giudice più imparziale della tua tecnica. Ecco una metodologia collaudata per migliorare la tua velocità e precisione:',
    },
    {
      type: 'title',
      text: '1. Il Metodo della Scala',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Se il tuo obiettivo è suonare a <strong>120 BPM</strong>, non iniziare provando a quella velocità. È facile scoraggiarsi; progredire richiede strategia.',
    },
    {
      type: 'list',
      items: [
        'Inizia al 50% della tua velocità target (es. 60 BPM).',
        'Esegui il passaggio perfettamente 3 volte di seguito. Se sbagli una nota, il contatore si azzera.',
        'Aumenta il metronomo di soli 5 BPM.',
        'Ripeti finché non raggiungi la tua velocità target.',
      ],
    },
    {
      type: 'title',
      text: '2. Spostamento dell’Accento',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Usa il nostro selettore di tempo per spostare l’accento. Esercitarsi su un passaggio in 4/4 con il metronomo impostato a 3/4 significa che l’accento (il clic acuto) cade in punti diversi del tuo fraseggio, costringendoti a interiorizzare il tempo assoluto invece di fare affidamento sul battito "uno".',
    },
    {
      type: 'title',
      text: '3. Silenzi Strategici',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Una tecnica avanzata consiste nell’impostare il metronomo a metà velocità (es. 60 BPM se suoni a 120) e sentire ogni clic come i battiti 1 e 3. Ancora più difficile: sentirlo solo come i battiti deboli (off-beats). Questo sviluppa il tuo <strong>orologio interno</strong>.',
    },
    {
      type: 'title',
      text: 'Fatti Curiosi sul Tempo',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Il tempo influenza radicalmente la percezione emotiva della musica.',
    },
    {
      type: 'table',
      headers: ['Termine Italiano', 'BPM Appross.', 'Carattere'],
      rows: [
        ['Largo', '40 – 60', 'Lento e solenne'],
        ['Andante', '76 – 108', 'Passo d’uomo, calmo'],
        ['Allegro', '120 – 156', 'Veloce, brillante e gioioso'],
        ['Presto', '168 – 200', 'Molto veloce, frenetico'],
      ],
    },
    {
      type: 'title',
      text: 'Tecnologia Dietro questo Metronomo',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Questo non è un lettore MP3 in loop. Stiamo generando onde sinusoidali pure in tempo reale. L’oscillatore principale crea un tono a <strong>1000 Hz</strong> per l’accento e a <strong>800 Hz</strong> per i battiti deboli, con un inviluppo ADSR ultra-breve per il massimo punch. Questo assicura un attacco sonoro istantaneo.',
    },
    {
      type: 'paragraph',
      html: 'Che tu sia un batterista che cerca il groove, un pianista che lavora sulle scale o un chitarrista che perfeziona un assolo, questo metronomo è il tuo partner silenzioso (finché non premi play).',
    },
    {
      type: 'tip',
      title: 'Non senti il suono su mobile?',
      html: 'Se sei su iPhone/iPad, assicurati che l’<strong>interruttore laterale del silenzioso</strong> non sia attivato. La tecnologia Web Audio rispetta la modalità silenziosa di sistema su molti dispositivi.',
    },
  ],
};
