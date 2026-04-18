import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'musica-online',
  title: 'Strumenti Musicali Online',
  description:
    'Utilità musicali gratuite per musicisti, produttori e appassionati. Metronomo, calcolatore BPM, convertitore di frequenze, equivalenza delle note e altro.',
  seo: [
    {
      type: 'summary',
      title: 'Cosa troverete in questa categoria',
      items: [
        'Metronomo online con Web Audio API — precisione al millisecondo',
        'Calcolatore BPM in millisecondi per delay e riverberi',
        'Convertitore frequenza in nota musicale (Hz, cent e desintonizzazione)',
        'Calcolatore distanza di fase per allineamento microfoni',
        'Equivalenza delle note tra sistemi latino, americano e tedesco',
        'Calcolatore di archiviazione audio digitale',
      ],
    },
    {
      type: 'title',
      text: 'Strumenti Musicali per Ogni Fase del Processo Creativo',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Dalla prima prova al mastering finale, ogni musicista e produttore ha bisogno di strumenti precisi disponibili in qualsiasi momento. La nostra raccolta di <strong>utilità musicali online</strong> è stata progettata con un obiettivo chiaro: massima precisione tecnica con il minimo attrito.',
    },
    {
      type: 'paragraph',
      html: 'Nessuna installazione richiesta. Tutti gli strumenti funzionano direttamente nel browser, sono completamente gratuiti e proteggono la tua privacy: nessun dato lascia il tuo dispositivo.',
    },
    {
      type: 'title',
      text: 'Per il Musicista in Esercitazione',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Il <strong>metronomo online</strong> è lo strumento fondamentale per qualsiasi musicista in formazione o in esercitazione. Il nostro metronomo utilizza la Web Audio API per garantire la precisione al millisecondo, eliminare la deriva e fornire un feedback visivo con un effetto a onda. La funzione <strong>Tap Tempo</strong> consente di trovare istantaneamente il BPM di qualsiasi canzone.',
    },
    {
      type: 'title',
      text: 'Per il Produttore Musicale',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Il <strong>calcolatore BPM in millisecondi</strong> è essenziale in qualsiasi sessione di mixing. Sincronizzare un delay o un riverbero al tempo del brano fa la differenza tra un mix che respira e uno che suona artificiale. Allo stesso modo, il <strong>calcolatore della distanza di fase</strong> allinea i microfoni con precisione a livello di campione e previene la cancellazione di fase nelle registrazioni multi-microfono.',
    },
    {
      type: 'title',
      text: 'Per il Tecnico del Suono',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Il <strong>convertitore di frequenza in nota musicale</strong> trasforma qualsiasi valore in Hz nella sua nota equivalente, mostrando anche la deviazione in cent. Perfetto per accordare sintetizzatori analogici, identificare risonanze problematiche in una stanza o lavorare con campioni fuori tono. Il <strong>calcolatore di archiviazione audio digitale</strong> aiuta a pianificare i progetti di registrazione e a gestire lo spazio su disco con precisione.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Precisione Tecnica',
          description:
            'Tutti gli strumenti sono basati su algoritmi verificati matematicamente. Nessuna approssimazione: i risultati sono esatti e riproducibili.',
        },
        {
          title: 'Privacy Totale',
          description:
            "L'elaborazione avviene sul tuo dispositivo. Nessun audio, file o dato personale viene trasmesso a qualsiasi server.",
        },
      ],
    },
    {
      type: 'title',
      text: 'Il Linguaggio Universale della Musica',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "La musica è un linguaggio con più sistemi di notazione. Lo strumento di <strong>equivalenza delle note</strong> traduce istantaneamente tra il sistema latino (Do, Re, Mi…), il sistema americano (C, D, E…) e il sistema tedesco (C, D, E… con H al posto di B), evitando confusione quando si comunica con musicisti di diverse tradizioni o si leggono partiture di diversi paesi.",
    },
    {
      type: 'tip',
      title: 'Nessuna installazione necessaria',
      html: 'Tutti gli strumenti funzionano direttamente nel browser, senza plugin o app aggiuntive. Aggiungi questa pagina ai preferiti per averli sempre a portata di mano durante le tue sessioni.',
    },
  ],
};
