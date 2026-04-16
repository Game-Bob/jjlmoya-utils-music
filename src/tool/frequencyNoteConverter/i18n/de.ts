import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FrequencyNoteConverterUI } from '../ui';

const slug = 'frequenz-zu-note-konverter';
const title = 'Frequenz zu Musiknote Konverter';
const description =
  'Konvertieren Sie Hertz sofort in Musiknoten. Identifizieren Sie die exakte Note jeder Frequenz, messen Sie die Abweichung in Cent, hören Sie den reinen Ton und stimmen Sie Synthesizer und Sampler mit Präzision.';

const faqData = [
  {
    question: 'Woher weiß ich, welcher Note 440 Hz entspricht?',
    answer:
      '440 Hz entspricht exakt dem A4, dem universellen Kammerton. Es ist das A über dem mittleren C auf dem Klavier. Diese Frequenz ist seit 1939 der ISO 16-Standard und wird weltweit zum Stimmen von Orchesterinstrumenten verwendet.',
  },
  {
    question: 'Was bedeutet es, wenn eine Note "15 Cent zu hoch" ist?',
    answer:
      'Ein Cent ist ein Hundertstel eines Halbtons. Wenn eine Note 15 Cent zu hoch ist, bedeutet dies, dass die Frequenz etwas höher ist als die exakte Note in der gleichstufigen Stimmung. Am Synthesizer sollten Sie ein Fine-Tuning von -15 Cent anwenden, um dies zu korrigieren.',
  },
  {
    question: 'Warum gibt es neben 440 Hz auch Referenzoptionen wie 432 Hz und 444 Hz?',
    answer:
      'Verschiedene musikalische Kontexte verwenden unterschiedliche Stimmenreferenzen. 432 Hz ist in bestimmten Produktionskreisen beliebt. 444 Hz ist bei Aufnahmen Alter Musik aus der Renaissance üblich. Einige europäische Orchester stimmen zwischen 441–444 Hz für einen brillanteren Klang.',
  },
  {
    question: 'Wozu dient die interaktive Klaviertastatur?',
    answer:
      'Mit dem interaktiven Klavier können Sie die Note auf der Tastatur visuell identifizieren und Frequenzen auch direkt durch Drücken der Tasten eingeben. Das Drücken einer Taste zeigt Ihnen die exakte Frequenz an und spielt zum Vergleich einen reinen Sinuston ab.',
  },
  {
    question: 'Wie verwende ich die vom Rechner angezeigten Obertöne?',
    answer:
      'Die Obertöne (untere und obere Oktave) zeigen die Frequenzen an, die direkt mit Ihrer Note zusammenhängen. Sie sind nützlich, um Konflikte zwischen Synthesizer-Layern zu vermeiden, Resonanzfilter auf die richtige Note einzustellen oder Drum-Samples den richtigen Sampler-Oktaven zuzuordnen.',
  },
  {
    question: 'Warum erzeugt der Hörmodus einen Sinuston anstelle des echten Klangs?',
    answer:
      'Ein Sinuston ist eine reine Welle, die nur die Grundfrequenz ohne zusätzliche Obertöne enthält. Dies ermöglicht einen sauberen Vergleich mit dem realen Instrument, ohne dass die Klangfarbe das Urteil über die Stimmung beeinflusst. Es ist das gleiche Signal, das ein elektronisches Stimmgerät erzeugt.',
  },
  {
    question: 'Wie berechnet man die Frequenz einer Musiknote?',
    answer:
      'Die Frequenz wird mit einer logarithmischen Formel berechnet, die auf der gleichstufigen Stimmung basiert. Ausgehend vom Referenz-A4 (440 Hz) wird jeder Halbton nach oben durch Multiplikation mit der zwölften Wurzel aus zwei (~1,05946) ermittelt, und jede Oktave entspricht einer Verdoppelung der Frequenz.',
  },
  {
    question: 'Welche Note hat die Frequenz 440 Hz?',
    answer:
      'Die Frequenz von 440 Hz ist exakt die Note A4. Es ist der Standard-Referenzton, der von den meisten Orchestern und zeitgenössischen Musikern seit Mitte des 20. Jahrhunderts zum Stimmen ihrer Instrumente verwendet wird.',
  },
  {
    question: 'Was ist der Unterschied zwischen 440 Hz und 432 Hz Stimmung?',
    answer:
      '440 Hz ist der internationale Standard (ISO 16). 432 Hz ist eine alternative Stimmung, die einige Musiker aus subjektiven klanglichen Gründen bevorzugen und die oft in Meditationsmusik verwendet wird, obwohl es keine wissenschaftlichen Belege für klare biologische Vorteile gegenüber 440 Hz gibt.',
  },
];

const howToData = [
  {
    name: 'Frequenz eingeben',
    text: 'Geben Sie die Frequenz in Hertz in das Hauptfeld ein. Das Ergebnis erscheint sofort mit dem Notennamen und der wissenschaftlichen Oktavbezeichnung.',
  },
  {
    name: 'Ergebnis und Cent-Anzeige lesen',
    text: 'Die visuelle Stimmanzeige zeigt an, ob Ihre Frequenz über, unter oder exakt auf der Note liegt. Der Cent-Wert sagt Ihnen, wie stark Sie die Feinstimmung Ihres Instruments oder Plugins anpassen müssen.',
  },
  {
    name: 'Obertöne zum Stimmen von Layern nutzen',
    text: 'Prüfen Sie die Frequenzen der unteren und oberen Oktave, um zusätzliche Oszillatoren, Resonanzfilter oder Perkussions-Layer ohne Frequenzkonflikte zu konfigurieren.',
  },
  {
    name: 'A4-Referenz anpassen',
    text: 'Ändern Sie die A4-Referenz auf 432 Hz, 444 Hz oder einen beliebigen benutzerdefinierten Wert, damit alle Berechnungen mit Ihrem Projektkontext übereinstimmen.',
  },
  {
    name: 'Referenzton anhören',
    text: 'Drücken Sie die Wiedergabetaste, um einen reinen Sinuston mit der eingegebenen Frequenz zu erzeugen und Ihr reales Instrument nach Gehör zu stimmen.',
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
  faqTitle: 'Häufig gestellte Fragen',
  faq: faqData,
  bibliographyTitle: 'Technische Referenzen',
  bibliography: [
    {
      name: 'ISO 16:1975 — Acoustics — Standard tuning frequency',
      url: 'https://www.iso.org/standard/3601.html',
    },
    {
      name: 'The Physics of Sound — Musical Acoustics (MIT)',
      url: 'https://musictech.mit.edu/musical-acoustics-synthesis-and-audio-effects/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  ui: {
    btnHzToNote: 'Hz zu Note',
    btnNoteToHz: 'Note zu Hz',
    labelRef: 'A4 Referenz',
    ariaRefCustom: 'Benutzerdefinierte A4-Referenzfrequenz',
    calInfo:
      '<strong>440 Hz</strong> ist der internationale Standard. <strong>432 Hz</strong> wird oft in Meditationsmusik und Solfeggio verwendet.',
    labelFrequency: 'FREQUENZ',
    ariaFreqInput: 'Frequenz in Hertz eingeben',
    ariaPlay: 'Ton anhören',
    copyNoteName: 'Note kopieren',
    labelOctaveDown: 'Untere Oktave',
    labelInputFreq: 'Eingabefrequenz',
    labelOctaveUp: 'Obere Oktave',
    labelNoteInput: 'NOTENNAME (z. B. A4, C#3, Do4)',
    placeholderNote: 'Note eingeben...',
    labelSetNote: 'NOTE SETZEN',
    labelSetOctave: 'OKTAVE SETZEN',
    labelSelectedNote: 'Ausgewählte Note',
    copyHz: 'Hz kopieren',
    btnListenNote: 'Note anhören',
    pianoLabel: 'Interaktives Klavier — Taste drücken, um Frequenz zu sehen',
    pianoAria: 'Interaktive Klaviertastatur',
    historyTitle: 'Verlauf',
    historyClear: 'Löschen',
    historyEmpty: 'Keine aktuellen Konvertierungen',
    historyLoadAria: '%s Hz laden',
    tuned: 'Gestimmt',
    sharp: 'zu hoch',
    flat: 'zu niedrig',
    unitHzExact: 'exakte Hz',
    noteNames: 'C,C#,D,D#,E,F,F#,G,G#,A,A#,B',
    noteOptions: 'C (Do)|C# / Db|D (Re)|D# / Eb|E (Mi)|F (Fa)|F# / Gb|G (Sol)|G# / Ab|A (La)|A# / Bb|B (Si)',
    pianoOctave: 'Okt',
    copyFeedback: 'Kopiert',
  },
  seo: [
    {
      type: 'summary',
      title: 'Funktionen des Rechners',
      items: [
        'Bidirektionale Konvertierung: Hz zu Note und Note zu Hz im selben Tool',
        'Sample-genaue Präzision mit anpassbarer A4-Referenz (440 / 432 / 444 Hz)',
        'Visuelle Cent-Anzeige mit Anzeige für zu hoch / zu niedrig / korrekt gestimmt',
        'Anzeige von Obertönen (Grundton, untere Oktave, obere Oktave)',
        'Interaktive Klaviertastatur mit Hervorhebung der entsprechenden Taste',
        'Suchverlauf zum schnellen Vergleich von Patches und Samples',
      ],
    },
    {
      type: 'title',
      text: 'Was ist die Frequenz einer Musiknote und warum ist sie wichtig?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Jede Musiknote ist im Kern eine periodische Luftschwingung. Wenn eine Gitarrensaite 440 Mal pro Sekunde schwingt, erzeugt sie das A4, den universellen Kammerton. Diese Entsprechung zwischen Hertz und Noten ist nicht willkürlich: Sie wird durch die <strong>gleichstufige Stimmung</strong> definiert, das vorherrschende Stimmsystem in der westlichen Musik, das die Oktave aus mathematischer Sicht in zwölf exakt gleich weit entfernte Halbtöne unterteilt.',
    },
    {
      type: 'paragraph',
      html: 'Die exakte Frequenz jeder Note zu kennen, ist grundlegend in der Soundsynthese, Musikproduktion, Tontechnik und im Instrumentenbau. Ein Synthesizer muss wissen, mit welcher Frequenz jeder Oszillator schwingen muss, um eine gestimmte Note zu reproduzieren. Ein Mixing-Engineer muss wissen, wo er mit einem Equalizer ansetzen muss, um ein Brummen zu entfernen, ohne den Grundton eines Instruments zu beeinträchtigen.',
    },
    {
      type: 'title',
      text: 'Die mathematische Formel hinter der Konvertierung',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Die gleichstufige Stimmung basiert auf einer geometrischen Progression. Jeder Halbton entspricht der Multiplikation der Frequenz mit der zwölften Wurzel aus zwei. Die Formel, um die Frequenz einer beliebigen Note aus ihrem Abstand in Halbtönen relativ zu A4 zu erhalten, lautet:',
    },
    {
      type: 'code',
      code: 'f = A4 × 2^((n - 69) / 12)',
      ariaLabel: 'Formel zur Konvertierung einer MIDI-Notennummer in die Frequenz in Hz',
    },
    {
      type: 'paragraph',
      html: 'Dabei ist <em>n</em> die MIDI-Notennummer (A4 = 69) und <em>A4</em> die Referenzfrequenz, üblicherweise 440 Hz. Durch Invertieren dieser Formel erhält man die nächstgelegene Note zu jeder eingegebenen Frequenz sowie die Abweichung in Cent.',
    },
    {
      type: 'title',
      text: 'Cent: Die Präzisionseinheit für Musiker und Techniker',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ein Halbton ist in 100 Cent unterteilt. Diese Einheit erlaubt es, jede Stimmungsabweichung mit dezimaler Präzision zu beschreiben. Eine Abweichung von 10 Cent ist für ein geschultes Ohr bereits wahrnehmbar; über 20 Cent klingt es für die meisten Hörer deutlich verstimmt.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Perfekte Stimmung',
          description:
            'Eine Note ist perfekt gestimmt, wenn die Abweichung weniger als 5 Cent von der exakten Frequenz der gleichstufigen Stimmung beträgt.',
        },
        {
          title: 'Cent in der DAW',
          description:
            'Sampler, Synthesizer und Pitch-Shifting-Plugins verwenden Cent für die Feinstimmung, wodurch Samples ohne Artefakte exakt auf ihre Note abgestimmt werden können.',
        },
        {
          title: 'Menschliche Hörschwelle',
          description:
            'Die Wahrnehmungsschwelle für verstimmte Noten variiert je nach Instrument, Dynamik und harmonischem Kontext zwischen 5 und 15 Cent.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Die A4-Referenz: 440 Hz, 432 Hz und der Krieg der Stimmungen',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Die Referenzfrequenz A4 = 440 Hz wurde 1939 international standardisiert (ISO 16). Barockmusiker arbeiten jedoch typischerweise mit Referenzen von 415 Hz, und es gibt eine wachsende Gemeinschaft von Produzenten, die 432 Hz bevorzugen. Elite-Orchester wie die Berliner Philharmoniker verwenden regelmäßig 443 Hz für einen brillanteren, durchdringenderen Klang.',
    },
    {
      type: 'paragraph',
      html: 'In der Musikproduktion spielt die Referenz eine Rolle, wenn live aufgenommene akustische Instrumente mit virtuellen Instrumenten gemischt werden. Wenn das aufgenommene Klavier auf 442 Hz gestimmt war, der Synthesizer aber standardmäßig auf 440 Hz eingestellt ist, müssen alle Samples in Cent korrigiert werden.',
    },
    {
      type: 'tip',
      title: 'Profi Sampler Trick',
      html: 'Wenn Sie ein Sample in einen Sampler wie Kontakt oder Decent Sampler importieren, geben Sie die Sample-Frequenz in diesen Rechner ein. Der in der Stimmanzeige angezeigte Cent-Wert nennt Ihnen exakt den <em>Fine-Tune</em>-Wert, den Sie im Sampler eingeben müssen, damit die Note perfekt gestimmt spielt.',
    },
    {
      type: 'title',
      text: 'Referenztabelle der Frequenzen nach Oktaven',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Diese Tabelle zeigt die exakten Frequenzen jeder C-Note in der gleichstufigen Stimmung mit A4 = 440 Hz, nützlich für die Konfiguration modularer Synthesizer-Oszillatoren oder zur Überprüfung des Tonumfangs eines Instruments:',
    },
    {
      type: 'table',
      headers: ['Note', 'Frequenz (Hz)', 'MIDI-Note', 'Typischer Tonumfang'],
      rows: [
        ['C0', '16.35', '12', 'Kontrabass, Orgelpedal'],
        ['C1', '32.70', '24', 'Kontrabass, E-Bass tief'],
        ['C2', '65.41', '36', 'Cello, E-Bass'],
        ['C3', '130.81', '48', 'Bratsche, Tenorsaxophon, Gitarre'],
        ['C4', '261.63', '60', 'Eingestrichenes C, Klavier, Tenorstimme'],
        ['C5', '523.25', '72', 'Flöte, Geige, Sopranstimme'],
        ['C6', '1046.50', '84', 'Piccoloflöte, hohe Geigenregister'],
        ['C7', '2093.00', '96', 'Flöten-Obertöne, Synthesizer'],
        ['C8', '4186.01', '108', '88-Tasten-Klaviatur, technisches Limit'],
      ],
    },
    {
      type: 'title',
      text: 'Obertöne und die Oktave als 2:1-Verhältnis',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Eines der wichtigsten Verhältnisse in der musikalischen Akustik ist die Oktave: Die Verdoppelung der Frequenz ergibt die gleiche Note eine Oktave höher, und die Halbierung führt eine Oktave tiefer. Dieses 2:1-Verhältnis ist die Basis der natürlichen Obertöne jedes akustischen Instruments.',
    },
    {
      type: 'paragraph',
      html: 'In der Synthese ist die Kenntnis der direkten Obertöne einer Frequenz der Schlüssel zur Vermeidung spektraler Kollisionen zwischen Oszillatoren in einem Sound-Layer. Dieser Rechner zeigt immer die obere und untere Oktave jeder eingegebenen Frequenz an.',
    },
    {
      type: 'title',
      text: 'Praxisbeispiele für Musiker und Produzenten',
      level: 2,
    },
    {
      type: 'list',
      items: [
        'Stimmen analoger Oszillatoren: Messen Sie die Ausgangsfrequenz und vergleichen Sie sie mit dem Rechner, um zu wissen, um wie viele Cent Sie die Grob- oder Feinstimmung anpassen müssen.',
        'Zuweisung von Samples zu Noten: Eine mit 55 Hz aufgenommene Kick-Drum ist ein A1. Dieses Tool sagt Ihnen exakt, wo Sie sie im Sampler mappen müssen.',
        'Erkennung problematischer Resonanzen: Wenn ein Raum bei 80 Hz schwingt, bestätigt der Rechner, dass dies ein E2 ist, und führt den EQ-Einsatz zur Dämpfung, ohne den Bass zu beschädigen.',
        'Synchronisierung von Subwoofern: Die Überprüfung, ob mehrere Subs die gleiche Note wiedergeben, vermeidet Verstärkungen oder Auslöschungen durch Interferenzen.',
        'Stimmen von Glocken und Perkussion mit bestimmter Tonhöhe: Identifizieren Sie den Grundton, um sie in die Tonalität des Stücks zu integrieren.',
        'Design von Resonanzfiltern: Ein Bandpassfilter mit hohem Q bei 349.23 Hz wird bei F4 seinen Peak haben, was harmonische Designentscheidungen erleichtert.',
      ],
    },
    {
      type: 'title',
      text: 'Das Klavier als unmittelbare visuelle Referenz',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Die Klaviertastatur ist die intuitivste visuelle Karte des musikalischen Spektrums. Ihre Anordnung von weißen (Stammtöne) und schwarzen (Erhöhungen/Erniedrigungen) Tasten erlaubt es, Muster von Tonleitern, Akkorden und Intervallen auf einen Blick zu erkennen. Das interaktive Klavier hebt die Taste hervor, die jeder Frequenz entspricht, und verbindet die Zahl mit ihrer Position auf der universellen Tastatur.',
    },
    {
      type: 'proscons',
      items: [
        {
          pro: 'Mathematische Präzision: verwendet die ISO 16 Formel für gleichstufige Stimmung.',
          con: 'Einschränkung: gilt nur für gleichstufige Stimmung, nicht für historische Stimmungen wie die mitteltönige Stimmung.',
        },
        {
          pro: 'Freie Kalibrierung: unterstützt A4-Referenzen zwischen 400 und 480 Hz.',
          con: 'Der Sinuston reproduziert nicht die reale Klangfarbe des Instruments, nur die Grundfrequenz.',
        },
        {
          pro: 'Bidirektionale Konvertierung: Hz zu Note und Note zu Hz im selben Tool.',
          con: 'Die Cent-Anzeige bezieht sich auf den nächsten Halbton, nicht auf die reine Stimmung.',
        },
        {
          pro: 'Suchverlauf: erlaubt den schnellen Vergleich mehrerer Patches oder Samples.',
          con: 'Frequenzen außerhalb des hörbaren Bereichs (20 Hz – 20 kHz) haben einen begrenzten praktischen Nutzen.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Wichtiges Glossar zur Nutzung dieses Tools',
      level: 2,
    },
    {
      type: 'list',
      items: [
        'Hz (Hertz): Schwingungen pro Sekunde. Misst die Frequenz einer Schallwelle.',
        'MIDI-Note: Ganzzahl von 0 bis 127 zur Identifizierung jeder Note im MIDI-Standard. A4 = 69.',
        'Wissenschaftliche Oktavbezeichnung: Benennungssystem, das die Oktavzahl an die Note anhängt (A4, C3).',
        'Cent: Ein Hundertstel eines Halbtons. Erlaubt die präzise Angabe von Stimmungsabweichungen.',
        'Gleichstufige Stimmung: Stimmsystem, bei dem alle Halbtöne gleich sind (Verhältnis 2^(1/12)).',
        'A4: Referenznote. Internationaler Standard: 440 Hz (ISO 16, 1975).',
        'Oberton/Harmonische: Ganzzahlige Vielfache der Grundfrequenz, die natürlich von akustischen Instrumenten erzeugt werden.',
        'Fine-Tune: Parameter an Synthesizern und Samplern zur Anpassung der Stimmung in Cent.',
      ],
    },
  ],
};
