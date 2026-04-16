import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MusicNoteEquivalencyUI } from '../ui';

const slug = 'equivalenza-note-musicali';
const title = 'Equivalenza Note Musicali: Sistemi Latino, Anglofono e Tedesco';
const description =
  'Traduttore interattivo di note musicali tra i sistemi latino (Do, Re, Mi), anglosassone (C, D, E) e germanico (H). Include visualizzatore piano, ottave e frequenze (Hz).';

const faqData = [
  {
    question: 'Cos’è la notazione americana o anglosassone?',
    answer:
      'È il sistema che utilizza le lettere dalla A alla G per rappresentare le note musicali. È lo standard nella musica moderna e nel jazz. In questo sistema, A=La, B=Si, C=Do, D=Re, E=Mi, F=Fa e G=Sol.',
  },
  {
    question: 'Perché il Si si chiama H in Germania?',
    answer:
      "A causa di un’evoluzione grafica medievale del 'B-quadratum'. Nei paesi di lingua tedesca, la lettera H è riservata al Si naturale, mentre la lettera B è usata esclusivamente per il Si bemolle.",
  },
  {
    question: "Cos’è il 'Do centrale' nella notazione scientifica?",
    answer:
      'Il Do centrale (il tasto Do al centro di un pianoforte a 88 tasti) è il C4 nello standard ANSI/Internazionale. Nel sistema franco-belga, ampiamente utilizzato nei conservatori, è chiamato Do3.',
  },
  {
    question: 'Cosa significa che due note sono enarmoniche?',
    answer:
      'Significa che hanno nomi diversi ma rappresentano lo stesso suono fisico e si suonano sullo stesso tasto del pianoforte. Ad esempio, Do diesis (C#) e Re bemolle (Db) sono note enarmoniche.',
  },
  {
    question: 'Qual è la frequenza standard del La4?',
    answer:
      'La frequenza standard internazionale è 440 Hz (standard ISO 16). È il riferimento universale per l’accordatura di orchestre, strumenti e sintetizzatori digitali.',
  },
];

const howToData = [
  {
    name: 'Seleziona l’ottava',
    text: 'Usa il selettore numerico in alto per indicare con quale ottava del pianoforte vuoi lavorare (l’impostazione predefinita è l’ottava 4, quella centrale).',
  },
  {
    name: 'Premi una nota sul pianoforte',
    text: 'Clicca o tocca qualsiasi tasto sul pianoforte interattivo per vedere le sue informazioni tecniche e la nomenclatura.',
  },
  {
    name: 'Confronta i sistemi',
    text: 'Guarda i pannelli inferiori per vedere come viene chiamata quella nota nei sistemi latino, anglosassone e germanico simultaneamente.',
  },
  {
    name: 'Ascolta e verifica',
    text: 'Premi il pulsante "Ascolta" per sentire la frequenza esatta della nota selezionata e confermare l’altezza musicale.',
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
  faqTitle: 'Domande Frequenti',
  faq: faqData,
  bibliographyTitle: 'Riferimenti Tecnici',
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
    octaveLabel: 'Ottava Scientifica (C4 = Do centrale):',
    systemsTitle: 'Sistemi di Nomenclatura',
    systemLatino: 'Latino (Solfeggio)',
    systemAnglo: 'Anglosassone (Moderno)',
    systemGerman: 'Germanico (Tedesco)',
    sciNotationTitle: 'Notazione Scientifica',
    systemAnsi: 'Internazionale (ANSI)',
    systemFranco: 'Franco-Belga',
    systemEnharmonic: 'Enarmonia Utile',
    techTitle: 'Dati Tecnici e Onde',
    btnPlay: 'Ascolta',
    btnCopy: 'Copia Info',
    initialTitle: 'Seleziona una nota sul pianoforte',
    copyDone: 'Copiato!',
    copyLabelNote: 'Nota',
    copyLabelGerman: 'Sistema Tedesco',
    copyLabelFreq: 'Frequenza',
    copyLabelAnsi: 'Ottava Scientifica',
    copyLabelUrl: 'URL',
    naLabel: 'N/D',
  },
  seo: [
    {
      type: 'summary',
      title: 'Traduttore Multilingue di Note Musicali',
      items: [
        '<strong>3 sistemi simultanei</strong>: Latino, Anglosassone e Germanico a colpo d’occhio.',
        '<strong>Pianoforte interattivo</strong>: Clicca su qualsiasi tasto per vedere tutte le sue equivalenze.',
        '<strong>Frequenze esatte</strong>: Ogni nota mostra i suoi Hz secondo lo standard ISO 16.',
        '<strong>Enarmonie</strong>: Identifica automaticamente le note con doppio nome.',
      ],
    },
    {
      type: 'title',
      text: 'Comprendere l’equivalenza delle note musicali tra diversi sistemi',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La musica è un linguaggio universale, ma la sua scrittura e nomenclatura variano profondamente a seconda della regione geografica e del contesto accademico. Mentre i paesi di lingua latina e la tradizione classica europea predominano con il sistema latino (Do, Re, Mi...), la musica moderna, il jazz e il mondo anglosassone hanno standardizzato la notazione americana (C, D, E...). Inoltre, esiste una particolarità storica nei paesi di influenza germanica dove il Si naturale è chiamato H e il Si bemolle è B.',
    },
    {
      type: 'title',
      text: 'I tre principali sistemi di nomenclatura musicale',
      level: 2,
    },
    {
      type: 'list',
      items: [
        "<strong>Sistema Latino (Solfeggio):</strong> Utilizzato in Italia, Spagna, Francia e gran parte dell’America Latina. Basato sull’inno a San Giovanni Battista di Guido d'Arezzo. Utilizza Do, Re, Mi, Fa, Sol, La, Si.",
        '<strong>Notazione Americana (Anglosassone):</strong> Lo standard mondiale per jazz, pop e rock. Assegna le prime sette lettere dell’alfabeto (A-G) a partire da A=La. C è la lettera per il Do.',
        '<strong>Sistema Germanico:</strong> Utilizzato in Germania, Austria e paesi del nord Europa. La differenza fondamentale è l’uso di H per il Si naturale e B per il Si bemolle.',
      ],
    },
    {
      type: 'title',
      text: 'La curiosa storia del B e dell’H nella notazione tedesca',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Molti principianti si chiedono perché in Germania la nota Si si scriva con una H. L’origine risiede in un errore di copista medievale. Nel vecchio sistema letterale, la lettera B era usata per il Si. C’erano due varianti: il <em>B quadratum</em> (quadrato, per il Si naturale) e il <em>B rotundum</em> (rotondo, per il Si bemolle).",
    },
    {
      type: 'paragraph',
      html: 'Nel tempo, la forma del <em>B quadratum</em> assomigliò sempre più a una h minuscola nei manoscritti tedeschi. Questa evoluzione grafica si consolidò nella stampa e diede origine all’attuale nomenclatura tedesca: H per il Si naturale e B per il Si bemolle. È interessante notare che questa distinzione permise a compositori come J.S. Bach di firmare le proprie opere con il famoso motivo "B-A-C-H" (Si bemolle - La - Do - Si naturale).',
    },
    {
      type: 'title',
      text: 'Tabella comparativa delle equivalenze delle note naturali',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Nota (Latino)', 'Notazione (Anglo)', 'Tedesco (Germanico)', 'Origine'],
      rows: [
        ['Do', 'C', 'C', 'Frequenza di base'],
        ['Re', 'D', 'D', 'Seconda nota'],
        ['Mi', 'E', 'E', 'Terza nota'],
        ['Fa', 'F', 'F', 'Quarta nota'],
        ['Sol', 'G', 'G', 'Quinta nota'],
        ['La', 'A', 'A', 'Nota di accordatura'],
        ['Si', 'B', 'H', 'La grande variante'],
      ],
    },
    {
      type: 'title',
      text: 'Diesis, Bemolli e il concetto di Enarmonia',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Nella musica occidentale utilizziamo 12 suoni per ottava. Le cinque note aggiuntive sono rappresentate dalle alterazioni: il diesis (#) e il bemolle (b). Un diesis alza la nota di un semitono, mentre un bemolle la abbassa di un semitono.',
    },
    {
      type: 'paragraph',
      html: 'Questo ci porta all’<strong>Enarmonia</strong>: due note che hanno nomi diversi ma suonano esattamente allo stesso modo e occupano lo stesso tasto del pianoforte. Ad esempio, Do# e Reb sono enarmonici. Il nostro calcolatore evidenzia automaticamente queste equivalenze, il che è vitale per capire perché uno spartito possa richiedere un Fa# mentre un altro richiede un Solb nella stessa tonalità.',
    },
    {
      type: 'title',
      text: 'Ottave: Notazione Scientifica vs Franco-Belga',
      level: 2,
    },
    {
      type: 'list',
      items: [
        "Notazione Scientifica Internazionale (ANSI): Il Do centrale è chiamato C4. È lo standard in sintetizzatori, DAW e software musicali (MIDI).",
        'Notazione Franco-Belga: Ampiamente utilizzata nei conservatori classici. In questo sistema, il Do centrale è Do3.',
        "Sistema Helmholtz: Utilizza lettere maiuscole, minuscole e apici (C, c, c', c''). Più comune nella vecchia letteratura tecnica e nell’acustica tedesca.",
      ],
    },
    {
      type: 'tip',
      title: 'Suggerimento per produttori',
      html: 'Attenzione alle DAW: alcuni produttori (come Yamaha) considerano il Do centrale come C3, mentre altri (come Roland o FL Studio) lo considerano C4 o addirittura C5. Se il tuo sintetizzatore sembra fuori di un’ottava, verifica quale standard di notazione scientifica sta seguendo il software.',
    },
    {
      type: 'title',
      text: 'Frequenza in Hertz (Hz) e accordatura standard',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Dal punto di vista fisico, ogni nota corrisponde a una frequenza specifica misurata in hertz (cicli al secondo). Lo standard internazionale di accordatura (ISO 16) stabilisce che il <strong>La4</strong> vibra esattamente a <strong>440 Hz</strong>.',
    },
    {
      type: 'list',
      items: [
        'Calibrare sintetizzatori analogici che possono soffrire di deriva tecnica.',
        'Regolare equalizzatori chirurgici nel mixaggio per eliminare risonanze su note specifiche.',
        'Comprendere la relazione tra altezza fisica e percezione musicale.',
        'Convertire i campioni con precisione regolando il pitch in centesimi.',
      ],
    },
    {
      type: 'title',
      text: 'Casi d’uso pratici per questo calcolatore',
      level: 2,
    },
    {
      type: 'proscons',
      items: [
        {
          pro: 'Traduzione istantanea tra notazioni per musicisti di sessione che devono leggere partiture in inglese.',
          con: 'Il sistema non contempla microtonalità o accordature non occidentali.',
        },
        {
          pro: 'Identificazione delle note enarmoniche per migliorare l’ortografia musicale nelle partiture.',
          con: 'La riproduzione audio è un’onda pura, non ha il timbro di uno strumento reale.',
        },
        {
          pro: 'Conversione dell’ottava da scientifica a franco-belga per studenti di armonia.',
          con: 'Presuppone solo l’accordatura standard A4=440Hz, non le accordature barocche (415 Hz).',
        },
        {
          pro: 'Visualizzazione intuitiva del pianoforte che facilita l’apprendimento di scale e accordi.',
          con: 'Richiede conoscenze teoriche di base per interpretare quale alterazione sia migliore in ogni contesto.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Riferimento glossario tecnico',
      level: 2,
    },
    {
      type: 'list',
      items: [
        'Semitono: La distanza minima tra due note nel sistema occidentale (es. da Mi a Fa).',
        'Tono: La distanza equivalente a due semitoni (es. da Do a Re).',
        'Notazione: Sistema di abbreviazioni per rappresentare note e accordi.',
        'Hertz (Hz): Unità di misura della frequenza sonora.',
        'Ottava: Intervallo che separa due note dove la frequenza di una è il doppio dell’altra.',
        'Armatura di chiave: Insieme di alterazioni all’inizio di un pentagramma che definiscono la tonalità.',
      ],
    },
  ],
};
