import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FrequencyNoteConverterUI } from '../ui';

const slug = 'convertitore-frequenza-nota';
const title = 'Convertitore da Frequenza a Nota Musicale';
const description =
  'Converti istantaneamente gli hertz in note musicali. Identifica la nota esatta di qualsiasi frequenza, misura la deviazione in centesimi, ascolta il tono puro e accorda sintetizzatori e campionatori con precisione.';

const faqData = [
  {
    question: 'Come faccio a sapere a quale nota corrispondono 440 Hz?',
    answer:
      '440 Hz corrispondono esattamente al La4, la nota di riferimento universale per l’accordatura. È il La sopra il Do centrale del pianoforte. Questa frequenza è lo standard ISO 16 dal 1939 ed è utilizzata per accordare gli strumenti orchestrali in tutto il mondo.',
  },
  {
    question: "Cosa significa che una nota è '15 centesimi sopra'?",
    answer:
      'Un centesimo (cent) è la centesima parte di un semitono. Essere 15 centesimi sopra una nota significa che la frequenza è leggermente più crescente rispetto alla nota esatta nel temperamento equabile. Su un sintetizzatore dovresti applicare un fine-tuning di -15 centesimi per correggerla.',
  },
  {
    question: 'Perché esistono le opzioni di riferimento a 432 Hz e 444 Hz oltre ai 440 Hz?',
    answer:
      'Diversi contesti musicali utilizzano riferimenti di accordatura differenti. I 432 Hz sono popolari in alcune comunità di produzione. I 444 Hz sono comuni nelle registrazioni di musica antica rinascimentale. Alcune orchestre europee accordano tra 441 e 444 Hz per un suono più brillante.',
  },
  {
    question: 'A cosa serve la tastiera interattiva del pianoforte?',
    answer:
      'Il pianoforte interattivo ti permette di identificare visivamente la nota sulla tastiera e di inserire le frequenze premendo direttamente i tasti. Premendo un tasto visualizzerai la sua frequenza esatta e ascolterai un tono sinusoidale puro per il confronto.',
  },
  {
    question: 'Come utilizzo gli armonici mostrati dal calcolatore?',
    answer:
      'Gli armonici (ottava inferiore e superiore) mostrano le frequenze direttamente correlate alla tua nota. Sono utili per evitare conflitti tra i layer dei sintetizzatori, impostare i filtri risonanti sulla nota corretta o mappare i campioni di batteria sulle giuste ottave del campionatore.',
  },
  {
    question: 'Perché la modalità di ascolto genera un tono sinusoidale invece del suono reale?',
    answer:
      'Un tono sinusoidale è un’onda pura che contiene solo la frequenza fondamentale senza armonici aggiuntivi. Ciò consente un confronto pulito con lo strumento reale senza che il colore timbrico interferisca con il giudizio dell’accordatura. È lo stesso segnale generato da un accordatore elettronico ad ago.',
  },
  {
    question: 'Come si calcola la frequenza di una nota musicale?',
    answer:
      'La frequenza viene calcolata utilizzando una formula logaritmica basata sul temperamento equabile. Partendo dal La4 di riferimento (440 Hz), ogni semitono superiore si ottiene moltiplicando per la radice dodicesima di due (~1,05946), e ogni ottava equivale al raddoppio della frequenza.',
  },
  {
    question: 'Che nota è la frequenza 440 Hz?',
    answer:
      'La frequenza di 440 Hz è esattamente la nota La4. È la nota di riferimento standard utilizzata dalla maggior parte delle orchestre e dai musicisti contemporanei per accordare i propri strumenti dalla metà del XX secolo.',
  },
  {
    question: 'Qual è la differenza tra l’accordatura a 440 Hz e a 432 Hz?',
    answer:
      '440 Hz è lo standard internazionale (ISO 16). 432 Hz è un’accordatura alternativa che alcuni musicisti preferiscono per ragioni sonore soggettive, spesso usata nella musica per meditazione, sebbene non vi siano prove scientifiche di chiari benefici biologici rispetto ai 440 Hz.',
  },
];

const howToData = [
  {
    name: 'Inserisci la frequenza',
    text: 'Digita la frequenza in hertz nel campo di input principale. Il risultato apparirà immediatamente con il nome della nota e la sua ottava scientifica.',
  },
  {
    name: 'Leggi il risultato e il misuratore di centesimi',
    text: 'L’indicatore visivo dell’accordatore mostra se la tua frequenza è crescente, calante o esattamente sulla nota. Il valore dei centesimi ti dice quanto regolare il fine-tuning del tuo strumento o plugin.',
  },
  {
    name: 'Usa gli armonici per accordare i layer',
    text: 'Controlla le frequenze dell’ottava inferiore e superiore per configurare oscillatori aggiuntivi, filtri risonanti o layer di percussioni senza conflitti di frequenza.',
  },
  {
    name: 'Regola il riferimento La4',
    text: 'Cambia il riferimento La4 a 432 Hz, 444 Hz o qualsiasi valore personalizzato in modo che tutti i calcoli siano coerenti con il contesto del tuo progetto.',
  },
  {
    name: 'Ascolta il tono di riferimento',
    text: 'Premi il pulsante play per generare un tono sinusoidale puro alla frequenza inserita e accorda il tuo vero strumento a orecchio.',
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

export const content: ToolLocaleContent<FrequencyNoteConverterUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  ui: {
    btnHzToNote: 'da Hz a Nota',
    btnNoteToHz: 'da Nota a Hz',
    labelRef: 'Riferimento La4',
    ariaRefCustom: 'Frequenza di riferimento La4 personalizzata',
    calInfo:
      '<strong>440 Hz</strong> è lo standard internazionale. I <strong>432 Hz</strong> sono spesso usati nella musica per meditazione e nel solfeggio.',
    labelFrequency: 'FREQUENZA',
    ariaFreqInput: 'Inserisci la frequenza in hertz',
    ariaPlay: 'Ascolta il tono',
    copyNoteName: 'Copia nota',
    labelOctaveDown: 'Ottava inferiore',
    labelInputFreq: 'Frequenza inserita',
    labelOctaveUp: 'Ottava superiore',
    labelNoteInput: 'NOME NOTA (es. La4, Do#3, Do4)',
    placeholderNote: 'Digita la nota...',
    labelSetNote: 'IMPOSTA NOTA',
    labelSetOctave: 'IMPOSTA OTTAVA',
    labelSelectedNote: 'Nota selezionata',
    copyHz: 'Copia Hz',
    btnListenNote: 'Ascolta la nota',
    pianoLabel: 'Pianoforte interattivo — premi un tasto per vedere la sua frequenza',
    pianoAria: 'Tastiera interattiva del pianoforte',
    historyTitle: 'Cronologia',
    historyClear: 'Cancella',
    historyEmpty: 'Nessuna conversione recente',
    historyLoadAria: 'Carica %s Hz',
    tuned: 'Accordato',
    sharp: 'crescente',
    flat: 'calante',
    unitHzExact: 'Hz esatti',
    noteNames: 'Do,Do#,Re,Re#,Mi,Fa,Fa#,Sol,Sol#,La,La#,Si',
    noteOptions: 'Do (C)|Do# / Reb|Re (D)|Re# / Mib|Mi (E)|Fa (F)|Fa# / Solb|Sol (G)|Sol# / Lab|La (A)|La# / Sib|Si (B)',
    pianoOctave: 'Ott',
    copyFeedback: 'Copiato',
  },
  seo: [
    {
      type: 'summary',
      title: 'Caratteristiche del calcolatore',
      items: [
        'Conversione bidirezionale: da Hz a nota e da nota a Hz nello stesso strumento',
        'Precisione assoluta con riferimento La4 regolabile (440 / 432 / 444 Hz)',
        'Misuratore visivo di centesimi con indicatore di calante / crescente / accordato',
        'Visualizzazione degli armonici (fondamentale, ottava inferiore, ottava superiore)',
        'Tastiera interattiva del pianoforte che evidenzia il tasto corrispondente',
        'Cronologia di ricerca per un rapido confronto di patch e campioni',
      ],
    },
    {
      type: 'title',
      text: 'Cos’è la frequenza di una nota musicale e perché è importante',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ogni nota musicale è, in sostanza, una vibrazione periodica dell’aria. Quando una corda di chitarra vibra a 440 cicli al secondo, produce il La4, la nota di riferimento universale per l’accordatura. Questa corrispondenza tra hertz e note non è arbitraria: è definita dal <strong>temperamento equabile</strong>, il sistema di accordatura predominante nella musica occidentale, che divide l’ottava in dodici semitoni perfettamente equidistanti da un punto di vista matematico.',
    },
    {
      type: 'paragraph',
      html: 'Conoscere la frequenza esatta di ogni nota è fondamentale nella sintesi sonora, nella produzione musicale, nell’ingegneria del suono e nella costruzione di strumenti. Un sintetizzatore deve sapere a quale frequenza ogni oscillatore deve vibrare per riprodurre una nota accordata. Un ingegnere di mixaggio deve sapere dove tagliare con un equalizzatore per rimuovere un ronzio senza intaccare la fondamentale di uno strumento.',
    },
    {
      type: 'title',
      text: 'La formula matematica dietro la conversione',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Il temperamento equabile si basa su una progressione geometrica. Ogni semitono equivale a moltiplicare la frequenza per la radice dodicesima di due. La formula per ottenere la frequenza di qualsiasi nota dalla sua distanza in semitoni rispetto al La4 è:',
    },
    {
      type: 'code',
      code: 'f = La4 × 2^((n - 69) / 12)',
      ariaLabel: 'Formula per convertire il numero della nota MIDI in frequenza in Hz',
    },
    {
      type: 'paragraph',
      html: 'Dove <em>n</em> è il numero della nota MIDI (La4 = 69) e <em>La4</em> è la frequenza di riferimento, solitamente 440 Hz. Invertendo questa formula si ottiene la nota più vicina a qualsiasi frequenza inserita, oltre alla deviazione in centesimi.',
    },
    {
      type: 'title',
      text: 'Centesimi: l’unità di precisione per musicisti e tecnici',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Un semitono è diviso in 100 centesimi (cent). Questa unità permette di descrivere qualsiasi deviazione di accordatura con precisione decimale. Una deviazione di 10 centesimi è già percepibile da un orecchio allenato; sopra i 20 centesimi suona chiaramente scordata per la maggior parte degli ascoltatori.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Accordatura perfetta',
          description:
            'Una nota è perfettamente accordata quando la deviazione è inferiore a 5 centesimi dalla frequenza esatta del temperamento equabile.',
        },
        {
          title: 'Centesimi nella DAW',
          description:
            'Campionatori, sintetizzatori e plugin di pitch-shifting usano i centesimi per il fine-tuning, permettendo di regolare i campioni sulla loro nota esatta senza artefatti.',
        },
        {
          title: 'Soglia umana',
          description:
            'La soglia di percezione per le note scordate varia tra 5 e 15 centesimi a seconda dello strumento, della dinamica e del contesto armonico.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Il riferimento La4: 440 Hz, 432 Hz e le guerre dell’accordatura',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La frequenza di riferimento La4 = 440 Hz è stata standardizzata a livello internazionale nel 1939 (ISO 16). Tuttavia, i musicisti barocchi lavorano tipicamente con riferimenti a 415 Hz, e c’è una comunità crescente di produttori che preferisce i 432 Hz. Orchestre d’élite come i Berliner Philharmoniker usano regolarmente i 443 Hz per un suono più brillante e penetrante.',
    },
    {
      type: 'paragraph',
      html: 'Nella produzione musicale, il riferimento conta quando si mescolano strumenti acustici registrati dal vivo con strumenti virtuali. Se il pianoforte registrato è stato accordato a 442 Hz ma il sintetizzatore è di default a 440 Hz, tutti i campioni dovranno essere corretti in centesimi.',
    },
    {
      type: 'tip',
      title: 'Trucco da campionatore professionista',
      html: 'Quando importi un campione in un campionatore come Kontakt o Decent Sampler, inserisci la frequenza del campione in questo calcolatore. Il valore dei centesimi mostrato sull’accordatore ti dice esattamente il valore di <em>fine-tune</em> da inserire nel campionatore affinché la nota suoni perfettamente accordata.',
    },
    {
      type: 'title',
      text: 'Tabella delle frequenze di riferimento per ottava',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Questa tabella mostra le frequenze esatte di ogni nota Do nel temperamento equabile con La4 = 440 Hz, utile per configurare gli oscillatori dei sintetizzatori modulari o verificare il range di uno strumento:',
    },
    {
      type: 'table',
      headers: ['Nota', 'Frequenza (Hz)', 'Nota MIDI', 'Range tipico dello strumento'],
      rows: [
        ['Do0', '16.35', '12', 'Contrabbasso, pedale dell’organo'],
        ['Do1', '32.70', '24', 'Contrabbasso, basso elettrico corda grave'],
        ['Do2', '65.41', '36', 'Violoncello, basso elettrico'],
        ['Do3', '130.81', '48', 'Viola, sax tenore, chitarra'],
        ['Do4', '261.63', '60', 'Do centrale, pianoforte, voce di tenore'],
        ['Do5', '523.25', '72', 'Flauto, violino, voce di soprano'],
        ['Do6', '1046.50', '84', 'Ottavino, registri alti del violino'],
        ['Do7', '2093.00', '96', 'Armonici del flauto, sintetizzatore'],
        ['Do8', '4186.01', '108', 'Tastiera a 88 tasti, limite tecnico'],
      ],
    },
    {
      type: 'title',
      text: 'Armonici e l’ottava come rapporto 2:1',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Uno dei rapporti più importanti nell’acustica musicale è l’ottava: raddoppiare la frequenza produce la stessa nota un’ottava sopra, e dimezzarla la porta un’ottava sotto. Questo rapporto 2:1 è alla base degli armonici naturali di qualsiasi strumento acustico.',
    },
    {
      type: 'paragraph',
      html: 'Nella sintesi, conoscere gli armonici diretti di una frequenza è fondamentale per evitare collisioni spettrali tra gli oscillatori in un layer sonoro. Questo calcolatore mostra sempre l’ottava superiore e inferiore di qualsiasi frequenza inserita.',
    },
    {
      type: 'title',
      text: 'Casi d’uso reali per musicisti e produttori',
      level: 2,
    },
    {
      type: 'list',
      items: [
        'Accordatura di oscillatori analogici: misura la frequenza in uscita e confrontala con il calcolatore per sapere di quanti centesimi regolare il coarse o il fine tune.',
        'Assegnazione di campioni alle note: una grancassa registrata a 55 Hz è un La1. Questo strumento ti dice esattamente dove mapparla in un campionatore.',
        'Rilevamento di risonanze problematiche: se una stanza risuona a 80 Hz, il calcolatore conferma che è un Mi2, guidando l’uso dell’EQ per attenuarla senza danneggiare i bassi.',
        'Sincronizzazione di subwoofer: verificare che più sub riproducano la stessa nota evita rinforzi o cancellazioni dovuti a interferenze.',
        'Accordatura di campane e percussioni a intonazione determinata: identifica la fondamentale per integrarle nella tonalità del brano.',
        'Design di filtri risonanti: un filtro passa-banda con alto Q a 349.23 Hz avrà il suo picco sul Fa4, facilitando le decisioni di design armonico.',
      ],
    },
    {
      type: 'title',
      text: 'Il pianoforte come riferimento visivo immediato',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La tastiera del pianoforte è la mappa visiva più intuitiva dello spettro musicale. La sua disposizione di tasti bianchi (naturali) e neri (diesis/bemolle) permette di riconoscere a colpo d’occhio pattern di scale, accordi e intervalli. Il pianoforte interattivo evidenzia il tasto corrispondente a ogni frequenza, collegando il numero alla sua posizione sulla tastiera universale.',
    },
    {
      type: 'proscons',
      items: [
        {
          pro: 'Precisione matematica: utilizza la formula del temperamento equabile ISO 16.',
          con: 'Limitazione: si applica solo al temperamento equabile, non alle accordature storiche come quella mesotonica.',
        },
        {
          pro: 'Calibrazione libera: supporta riferimenti La4 tra 400 e 480 Hz.',
          con: 'Il tono sinusoidale non riproduce il timbro reale dello strumento, solo la frequenza fondamentale.',
        },
        {
          pro: 'Conversione bidirezionale: da Hz a nota e da nota a Hz nello stesso strumento.',
          con: 'Il misuratore di centesimi è relativo al semitono più vicino, non al temperamento giusto o puro.',
        },
        {
          pro: 'Cronologia di ricerca: permette il confronto rapido di più patch o campioni.',
          con: 'Le frequenze al di fuori del range udibile (20 Hz – 20 kHz) hanno un’utilità pratica limitata.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Glossario essenziale per l’uso di questo strumento',
      level: 2,
    },
    {
      type: 'list',
      items: [
        'Hz (Hertz): cicli al secondo. Misura la frequenza di un’onda sonora.',
        'Nota MIDI: intero da 0 a 127 che identifica ogni nota nello standard MIDI. La4 = 69.',
        'Ottava scientifica: sistema di denominazione che aggiunge il numero dell’ottava alla nota (La4, Do3).',
        'Centesimi (cent): centesima parte di un semitono. Permette di esprimere le deviazioni di accordatura con precisione.',
        'Temperamento equabile: sistema di accordatura in cui tutti i semitoni sono uguali (rapporto 2^(1/12)).',
        'La4: nota di riferimento. Standard internazionale: 440 Hz (ISO 16, 1975).',
        'Armonico: frequenze multiple intere della fondamentale prodotte naturalmente dagli strumenti acustici.',
        'Fine-tune: parametro di sintetizzatori e campionatori per regolare l’accordatura in centesimi.',
      ],
    },
  ],
};
