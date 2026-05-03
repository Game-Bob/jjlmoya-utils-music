import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BpmCalculatorUI } from '../ui';

const slug = 'bpm-zu-ms-rechner';
const title = 'BPM zu Millisekunden Rechner für Delay und Reverb';
const description =
  'Konvertieren Sie Ihr Projekttempo (BPM) in exakte Delay-Zeiten (ms) und Frequenzen (Hz). Das unverzichtbare Werkzeug für die rhythmisch präzise Einstellung von Delays, Reverbs und Kompressoren.';

const faqData = [
  {
    question: 'Was ist das Pre-Delay bei einem Hall?',
    answer:
      'Das Pre-Delay ist die Zeit zwischen dem Direktschall (Quelle) und dem Beginn der Hallfahne. Eine rhythmische Einstellung lässt die ursprüngliche Quelle klarer hervortreten, bevor der Raumeffekt einsetzt – entscheidend für Gesang und Percussion.',
  },
  {
    question: 'Wie funktioniert Tap Tempo?',
    answer:
      'Tap Tempo erkennt das Tempo, indem man rhythmisch zu einem Song mitklickt. Jeder Klick wird zeitlich erfasst, und das System ermittelt den Durchschnitt der Intervalle, um die exakten BPM auszugeben. Dies ist der schnellste Weg, Effekte mit einer externen Spur zu synchronisieren.',
  },
  {
    question: 'Warum Millisekunden statt automatischer Synchronisation verwenden?',
    answer:
      "Es gibt drei Hauptgründe: die Verwendung von analoger Hardware ohne MIDI, die Feinabstimmung von Pre-Delays für einen 'atmenden' Hall und 'Groove'-Anpassungen, bei denen Effekte leicht neben das Raster geschoben werden, um ein statisches, roboterhaftes Gefühl zu vermeiden.",
  },
  {
    question: 'Wofür wird der rhythmische Hz-Wert verwendet?',
    answer:
      'Hertz-Werte geben an, wie oft etwas pro Sekunde passiert. Sie sind wichtig für die Konfiguration von LFO-Oszillatoren, Phaser-Sweep-Raten oder Filtermobulationen an Synthesizern, die keine native Temposynchronisation besitzen.',
  },
];

const howToData = [
  {
    name: 'BPM eingeben',
    text: 'Geben Sie Ihr Projekttempo in das zentrale Feld ein oder nutzen Sie die Tap-Tempo-Schaltfläche.',
  },
  {
    name: 'Unterteilung finden',
    text: 'Suchen Sie die benötigte Note (Viertel, Achtel usw.) in den Tabellen für einfache, punktierte oder Triolen-Noten.',
  },
  {
    name: 'Wert kopieren',
    text: 'Klicken Sie auf das Kopiersymbol neben dem Millisekundenwert, um ihn direkt in Ihr Plugin oder Ihre Hardware einzufügen.',
  },
  {
    name: 'Pre-Delay einstellen',
    text: 'Nutzen Sie den unteren Bereich für extrem kurze Werte, die ideal sind, um den Hall von der Hauptstimme zu trennen.',
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
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  ui: {
    labelTempo: 'TEMPO (BPM)',
    btnTap: 'TAP TEMPO',
    sectionDelay: 'Delay-Zeiten',
    sectionDotted: 'Punktierte Noten',
    sectionTriplets: 'Triolen',
    sectionReverb: 'Reverb-Design (Pre-Delay)',
    colNote: 'Note',
    colMs: 'ms',
    colHz: 'Hz',
    infoPreDelay:
      '<strong>Pre-Delay</strong> trennt den ursprünglichen Anschlag von der Hallfahne, um Klarheit zu gewinnen.',
    copyAriaMs: 'Millisekunden kopieren',
    copyAriaPreDelay: 'Pre-Delay kopieren',
    copyFeedback: 'Kopiert!',
  },
  seo: [
    {
      type: 'summary',
      title: 'Funktionen des Rechners',
      items: [
        'Sofortige Berechnung für einfache, punktierte und Triolen-Noten',
        'Millisekunden- und Hz-Werte für jede rhythmische Unterteilung',
        'Pre-Delay-Bereich für Hall-Design mit musikalischer Präzision',
        'Tap Tempo: BPM durch Mitklopfen zur Musik erkennen',
        'Ein-Klick-Kopie in die Zwischenablage für jede DAW oder jedes Plugin',
      ],
    },
    {
      type: 'title',
      text: 'Warum ist ein BPM-zu-Millisekunden-Rechner unverzichtbar?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'In der modernen Musikproduktion unterscheidet rhythmische Präzision einen Amateur-Mix von einem professionellen. Während die meisten DAWs wie Ableton Live, FL Studio oder Logic Pro eine automatische Synchronisation für ihre Effekte bieten, gibt es unzählige Situationen, in denen die manuelle Steuerung überlegen ist.',
    },
    {
      type: 'title',
      text: 'Die Bedeutung des Pre-Delays im Hall',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Eine der kritischsten Anwendungen dieses Werkzeugs ist die Einstellung des <strong>Pre-Delays</strong>. Wenn man einen Hall auf eine Stimme legt, ohne das Pre-Delay anzupassen, beginnt die Hallfahne sofort, verwischt die Konsonanten und verringert die Klarheit. Durch die Berechnung eines rhythmischen Pre-Delays (wie eine 64stel oder 128stel Note) lassen Sie die ursprüngliche Stimme atmen, bevor der künstliche akustische Raum einsetzt. Dies erzeugt ein Gefühl von Tiefe, ohne die Präsenz der Quelle zu opfern.',
    },
    {
      type: 'title',
      text: 'Analoges Delay und externe Hardware',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Wenn Sie analoge Delay-Pedale oder Vintage-Synthesizer sammeln, wissen Sie, dass viele keinen MIDI-Clock-Eingang haben. Um ein Band-Delay manuell einzustellen, muss man genau wissen, wie viele Millisekunden einer Achtel- oder punktierten Viertelnote entsprechen. Unser Rechner liefert Ihnen diese Werte sofort, sodass Sie Ihre Hardware mit chirurgischer Präzision einstellen können.',
    },
    {
      type: 'title',
      text: 'Effekte abseits des Rasters und Groove',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Manchmal klingt mathematische Perfektion langweilig. Viele Produzenten nutzen Millisekundenwerte als Ausgangspunkt und verschieben sie dann leicht nach oben oder unten. Ein Delay um 5 bis 10 ms aus dem Raster zu rücken, kann einen menschlichen <em>Swing</em> oder einen einzigartigen <em>Groove</em> hinzufügen, den eine starre Quantisierung niemals reproduzieren könnte.',
    },
    {
      type: 'title',
      text: 'Synchronisierte Kompression und LFOs',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Wussten Sie, dass auch die <strong>Attack-</strong> und <strong>Release-Zeiten</strong> eines Kompressors rhythmisch sein können? Wenn man den Release des Drum-Bus-Kompressors so einstellt, dass er genau vor dem nächsten Kick-Schlag endet, entsteht ein "Pumping"- oder <em>Atmungseffekt</em>, der den Rhythmus des Songs verstärkt. Ebenso ist der Hz-Wert essenziell für die Konfiguration von Low-Frequency Oscillators (LFOs) an Synths ohne native Temposynchronisation.',
    },
    {
      type: 'tip',
      title: 'So nutzen Sie Tap Tempo',
      html: 'Die <strong>Tap Tempo</strong>-Funktion ist ideal für Live-Situationen oder wenn Sie eine externe Spur hören, deren Tempo Sie nicht kennen. Klicken Sie einfach rhythmisch auf die Schaltfläche im Takt der Musik. Wir empfehlen mindestens 4 oder 5 Klicks, damit der Algorithmus den Wert genauer mitteln kann.',
    },
    {
      type: 'title',
      text: 'Tempo-Matheformeln',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Die zugrunde liegende Formel ist einfach: <code>ms = 60.000 / BPM</code>. Von dort aus werden Multiplikatoren für jede Unterteilung angewendet.',
    },
    {
      type: 'list',
      items: [
        'Einfache Noten: basierend auf binärer Teilung (1, 0,5, 0,25 usw.).',
        'Punktiert: Basiswert mit 1,5 multiplizieren.',
        'Triolen: Basiswert mit 0,667 (2/3) multiplizieren.',
      ],
    },
  ],
};
