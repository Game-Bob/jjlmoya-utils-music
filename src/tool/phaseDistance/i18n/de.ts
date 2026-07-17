import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PhaseDistanceUI } from '../ui';

const slug = 'phasendistanz-rechner';
const title = 'Phasenabstandsrechner für Mikrofone';
const description =
  'Berechnen Sie die Verzögerung und den Ausgleich zur Ausrichtung von Mikrofonen. Vermeiden Sie Phasenlöschung und Kammfiltereffekte mit samplegenauer Präzision und Temperaturanpassung.';

const faqData = [
  {
    question: 'Was ist Phasenlöschung bei Audio?',
    answer:
      'Dies ist ein akustisches Phänomen, das auftritt, wenn zwei Signale derselben Quelle zu unterschiedlichen Zeiten eintreffen. Die Wellen interferieren miteinander. Wenn sie um 180 Grad phasenverschoben sind, löschen sie sich gegenseitig aus, wodurch der Ton dünn und kraftlos wird.',
  },
  {
    question: 'Warum beeinflusst die Temperatur die Berechnung?',
    answer:
      'Da sich Schall durch die Luft ausbreitet und sich die Dichte der Luft mit der Temperatur ändert. Je wärmer es ist, desto schneller breitet sich der Schall aus. Eine präzise Temperaturanpassung ermöglicht die Berechnung der genauen Verzögerung zwischen getrennten Mikrofonen.',
  },
  {
    question: 'Ist Phaseninversion das Gleiche wie Polaritätsinversion?',
    answer:
      'Technisch gesehen nein, obwohl die Begriffe synonym verwendet werden. Polarität ist eine elektrische Änderung (Drehung um 180°), während Phase eine zeitliche Verschiebung ist. Unser Tool ermöglicht die Simulation von beidem, um den Punkt der größten klanglichen Kohärenz zu finden.',
  },
  {
    question: 'Was ist Kammfilterung (Comb Filtering)?',
    answer:
      'Dies ist der Frequenzgang, der sich aus der Kombination eines Signals mit einer verzögerten Version seiner selbst ergibt. Dadurch entsteht eine Reihe von Spitzen und Einbrüchen - wie die Zähne eines Kamms - die das Timbre des Instruments drastisch verändern.',
  },
  {
    question: 'Was ist die 3-zu-1-Regel bei der Mikrofonierung?',
    answer:
      'Dies ist eine technik zur Minimierung von Phasenproblemen: Bei Verwendung von zwei Mikrofonen für unterschiedliche Quellen sollte der Abstand zwischen den Mikrofonen mindestens das Dreifache des Abstands zwischen jedem Mikrofon und seiner Quelle betragen.',
  },
  {
    question: 'Ist es besser, Mikrofone physisch oder per Software auszurichten?',
    answer:
      'Eine gute physische Ausrichtung während der Aufnahme ist immer vorzuziehen, um Artefakte zu vermeiden. Die digitale Verzögerung in der DAW bietet jedoch eine samplegenaue Präzision, die durch das Verschieben von Mikrofonen von Hand nahezu ummöglich zu erreichen ist.',
  },
];

const howToData = [
  {
    name: 'Abstände messen',
    text: 'Messen Sie den physischen Abstand von der Schallquelle (z. B. Snare-Drum) zu jedem der verwendeten Mikrofone.',
  },
  {
    name: 'Umgebung einstellen',
    text: 'Geben Sie die Raumtemperatur und die Samplerate Ihres Projekts ein, um auf realer Physik basierende Berechnungen zu erhalten.',
  },
  {
    name: 'Grafik analysieren',
    text: 'Betrachten Sie den Frequenzgang-Visualisierer, um mögliche kritische Auslöschungen im hörbaren Bereich zu identifizieren.',
  },
  {
    name: 'Ausgleich anwenden',
    text: 'Kopieren Sie den Millisekunden- oder Sample-Wert und geben Sie ihn in das Delay-Plugin Ihres Kanals ein, um die Spuren perfekt auszurichten.',
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
    labelTemp: 'Temperatur (°C) / Schall',
    btnAuto: 'Auto',
    labelSampleRate: 'Samplerate (kHz)',
    labelUnits: 'Einheitensystem',
    optMetric: 'Metrisch (m/cm)',
    optImperial: 'Imperial (ft/in)',
    labelDistA: 'Abstand Mikrofon A',
    labelDistB: 'Abstand Mikrofon B',
    labelPresets: 'Schnelle Presets',
    presetCoincident: 'Koinzidenz (XY)',
    presetSnare: 'Snare',
    presetAmbient: 'Ambient',
    btnInvert: 'Phase invertieren (Φ)',
    labelGain: 'Relativer Gain Mic B:',
    btnCopy: 'Samples kopieren',
    labelDelay: 'Erforderliches Delay',
    unitMs: 'Millisekunden (ms)',
    labelCompensation: 'Kompensation',
    unitSamples: 'Samples',
    labelPhaseStatus: 'Phasenstatus',
    textLoading: 'Laden...',
    statusInPhase: 'IN PHASE',
    statusInPhaseDesc: 'Signale perfekt ausgerichtet.',
    statusCritical: 'KRITISCHE AUSLÖSCHUNG',
    statusCriticalDesc: 'Erheblicher Kammfiltereffekt im tiefen/mittleren Bereich.',
    statusOffAxis: 'OFF AXIS',
    statusOffAxisDesc: 'Leichte Phasenverschiebung. Textur verändert.',
    warningCritical: 'MÖGLICHE KRITISCHE AUSLÖSCHUNG',
    labelSoundSpeed: 'Schallgeschwindigkeit',
    labelDistDiff: 'Abstandsdifferenz',
    labelNullFreq: 'Erste Auslöschungen',
    textNone: 'Keine',
    chartTitle: 'FREQUENZGANG (H) - KAMMFILTEREFFEKT',
    promptSoundSpeed: 'Schallgeschwindigkeit (m/s):',
    copyFeedback: 'Kopiert!',
  },
  seo: [
    {
      type: 'summary',
      title: 'Kombinationsmöglichkeiten des Rechners',
      items: [
        'Präzise physikalische Berechnung mit Temperaturanpassung der Schallgeschwindigkeit',
        'Ergebnis in Millisekunden und Samples zur DAW-Kompensation',
        'Kammfiltereffekt-Visualisierer für das gesamte hörbare Spektrum',
        'Mikrofon-Voreinstellungen (XY-Koinzidenz, Snare, Ambient)',
        'Phaseninversionssimulation und relative Pegelanpassung',
        'Unterstützung für metrische und imperiale Einheiten',
      ],
    },
    {
      type: 'title',
      text: 'Was ist Phasenlöschung und warum ruiniert sie Ihre Mixe?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'In der Welt der Tontechnik ist die Phase eines der kritischsten Konzepte und paradoxerweise eines der am häufigsten von Anfängern übersehenen. Wenn Sie eine Schallquelle - wie ein Schlagzeug oder einen Gitarrenverstärker - mit zwei oder mehr Mikrofonen aufnehmen, die in unterschiedlichen Abständen aufgestellt sind, erreichen die Schallwellen die Kapseln nicht zur gleichen Zeit. Dieser Zeitunterschied, und sei er noch so gering, verursacht ein Phänomen, das als <strong>Phasenverschiebung</strong> bezeichnet wird.',
    },
    {
      type: 'title',
      text: 'Das Phänomen des Kammfiltereffekts',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Wenn zwei identische Signale mit einer leichten Verzögerung miteinander kombiniert werden, entsteht eine Reihe von Spitzen und Einbrüchen im Frequenzgang. Auf einem Spektrumanalysator betrachtet, ähnelt das Muster den Zähnen eines Kamms - daher der Name. Dieser Effekt verändert das natürliche Timbre des Instruments auf destruktive Weise.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Auswirkung auf den Bassbereich',
          description:
            'Die Phasenlöschung ist im niedrigen Frequenzbereich am verheerendsten, wo der Körper des Klangs vollständig verschwindet.',
        },
        {
          title: 'Metallische Textur',
          description:
            'Die Kammfilterung fügt eine künstliche Färbung hinzu, die hohl oder übermäßig verarbeitet klingt.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Der Einfluss der Temperatur auf die Berechnung',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Viele Toningenieure vergessen, dass Luft ein physikalisches Medium ist und sich seine Dichte mit der Temperatur ändert. Die Schallgeschwindigkeit ist keine unveränderliche Konstante - bei 20°C breitet sich der Schall mit etwa 343 Metern pro Sekunde aus.',
    },
    {
      type: 'code',
      code: 'v = 331.3 + (0.606 × T)',
      ariaLabel: 'Formel für die Schallgeschwindigkeit in Abhängigkeit von der Temperatur',
    },
    {
      type: 'tip',
      title: 'Chirurgische Kompensation',
      html: 'Ein Unterschied von wenigen Grad kann die Auslöschungspunkte um mehrere Hertz verschieben. Die Verwendung unseres Rechners mit der tatsächlichen Temperatur Ihres Studios garantiert eine perfekte Ausrichtung in der DAW.',
    },
    {
      type: 'title',
      text: 'Kritische Aufnahmeszenarien',
      level: 2,
    },
    {
      type: 'list',
      items: [
        'Snare-Drum (Top & Bottom): Richten Sie beide Felle zeitlich aus, um den Punch zu maximieren.',
        'Overheads und nahe Mikrofone: Verzögern Sie die nahen Mikrofone, um sie an die Phase der Overhead-Mikrofone anzupassen.',
        'Gitarren mit mehreren Mikrofonen: Mischen Sie ein dynamisches und ein Bändchenmikrofon, ohne die unteren Mitten zu verlieren.',
        'Bass-DI und Mikrofon: Synchronisieren Sie das Direktsignal mit dem Amp-Mikrofon für einen massiven Sound.',
      ],
    },
    {
      type: 'title',
      text: 'Physische Ausrichtung vs. Digitale Nachbearbeitung',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Obwohl unser Tool Ihnen die Werte zur Korrektur der Phase in Ihrer DAW nach der Aufnahme liefert, empfehlen wir immer, die bestmögliche physische Ausrichtung im Studio anzustreben. Das Verschieben eines Mikrofons um wenige Millimeter kann effektiver sein als jede digitale Bearbeitung.',
    },
    {
      type: 'stats',
      items: [
        { label: 'Schallgeschwindigkeit bei 20°C', value: '343.2 m/s' },
        { label: 'Millisekunden/cm', value: '0.029 ms' },
        { label: 'Samples bei 48kHz', value: '1.4 pro cm' },
      ],
    },
    {
      type: 'title',
      text: 'Referenztabelle: Abstand vs. Erste Auslöschung',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Differenz (cm)', 'Verzögerung (ms)', '1. Auslöschung (Hz)', 'Betrifft...'],
      rows: [
        ['1 cm', '0.029', '17160', 'Extremer Höhenbereich'],
        ['5 cm', '0.146', '3432', 'Obere Mitten (Präsenz)'],
        ['10 cm', '0.291', '1716', 'Mitten (Präsenz)'],
        ['30 cm', '0.874', '572', 'Untere Mitten (Körper)'],
        ['1 Meter', '2.914', '172', 'Bassbereich (Grundton)'],
      ],
    },
    {
      type: 'title',
      text: 'Vor- und Nachteile von Korrekturmethoden',
      level: 2,
    },
    {
      type: 'proscons',
      items: [
        {
          pro: 'Physische Ausrichtung: Weniger Qualitätsverlust des Originalsignals.',
          con: 'Physische Ausrichtung: Schwer mit mikroskopischer Genauigkeit einzustellen.',
        },
        {
          pro: 'Digitale Korrektur: Absolute Präzision auf Sample-Ebene.',
          con: 'Digitale Korrektur: Kann bei falscher Anwendung ein Vorecho erzeugen.',
        },
        {
          pro: 'Polaritätsinversion: Sofortige Lösung für 180-Grad-Auslöschungen.',
          con: 'Polaritätsinversion: Korrigerar keine mittleren Phasenverschiebungen.',
        },
        {
          pro: 'Zeitkompensation: Stellt verlorenen Punch und Dynamik wieder her.',
          con: 'Zeitkompensation: Erfordert eine präzise Messung jedes Mikrofons.',
        },
      ],
    },
    {
      type: 'tip',
      title: 'Wie erkennt man Phasenprobleme mit dem Gehör?',
      html: 'Drücken Sie die Taste "Phase invertieren" (Φ). Wenn der Klang dadurch an Körper und Bässen gewinnt, waren Ihre Mikrofone phasenverschoben. Wenn der Ton verschwindet oder dünner wird, waren sie korrekt ausgerichtet.',
    },
    {
      type: 'title',
      text: 'Mono-Kompatibilität und Stereo-Wahrnehmung',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Bei Stereoaufnahmen definiert die Phasenbeziehung die Stabilität des Klangbilds. Bei gravierenden Unstimmigkeiten könnte der Ton vollständig verschwinden, wenn der Mix auf einem Monosystem abgespielt wird. Unser Rechner hilft Ihnen vorherzusagen, welche Frequenzen am meisten leiden, wenn die Kanäle summiert werden.',
    },
  ],
};
