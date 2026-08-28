import { createGuitarStringTensionContent } from './content-factory';

const title = 'Saitenspannungsrechner für Gitarre';
const slug = 'gitarren-saitenspannung-rechner';
const description = 'Schätze die Spannung jeder Gitarrensaite anhand von Saitenstärke, Mensur und Stimmung. Vergleiche komplette Sätze offline in metrischen oder imperialen Einheiten.';

export const content = createGuitarStringTensionContent({
  slug,
  title,
  description,
  ui: {
    metric: 'Metrisch', imperial: 'Imperial', metricLength: 'Mensur in mm', imperialLength: 'Mensur in Zoll', metricGauge: 'Stärke in mm', imperialGauge: 'Stärke in mil', metricTension: 'kg Kraft', imperialTension: 'Pfund Kraft', chooseSet: 'Saitensatz wählen', scaleLength: 'Mensur', tuning: 'Stimmung', material: 'Saitenmaterial', customSet: 'Stärken bearbeiten', presetHint: 'Mit dem ähnlichsten Satz beginnen', gauge: 'Stärke', note: 'Note', frequency: 'Frequenz', tension: 'Spannung', status: 'Spielgefühl', totalTension: 'Gesamtzug am Hals', averageTension: 'Durchschnitt pro Saite', tensionSpread: 'Abstand von leichtester zu stärkster Saite', low: 'Locker', balanced: 'Ausgeglichen', high: 'Fest', standard: 'Standard E', halfStepDown: 'Einen Halbton tiefer', dropD: 'Drop D', wholeStepDown: 'Einen Ganzton tiefer', openG: 'Open G', steel: 'Stahl', nickel: 'Nickelbeschichteter Stahl', phosphorBronze: 'Phosphorbronze', nylon: 'Nylon', presetExtraLight: 'Extra leicht', presetRegular: 'Regular', presetMedium: 'Medium', presetHeavy: 'Heavy', presetCustom: 'Stärken bearbeiten', shortScale: 'Kurze Mensur 24,75 Zoll', fenderScale: 'Fender Mensur 25,5 Zoll', martinScale: 'Martin Mensur 25,4 Zoll', customScale: 'Eigene Mensur', customScaleHint: 'Verwende die schwingende Länge von Sattel bis Steg', formulaNote: 'Die Schätzung nutzt T = 4L²f²μ, wobei μ aus Durchmesser und Materialdichte als Masse pro Länge abgeleitet wird.', modelNote: 'Diese Offline-Schätzung nutzt ein Stahl-Dichtemodell. Wicklungen, Kerne, Beschichtungen und Herstellerangaben zum Einheitsgewicht können die reale Spannung verändern. Prüfe die Daten des Saitenherstellers vor einer Setup-Änderung.', faqTitle: 'Fragen zur Gitarrensaitenspannung', bibliographyTitle: 'Quellen für das Spannungsmodell', tableLabel: 'Spannungswerte jeder Saite', tensionMapLabel: 'Spannungsprofil der sechs Saiten',
  },
  faq: [
    { question: 'Was braucht ein Rechner fuer Gitarrensaitenspannung?', answer: 'Er braucht die schwingende Mensur, die Tonhoehe jeder Saite, die Saitenstaerke und eine konsistente Schaetzung der Materialdichte. Ein Preset liefert die sechs Staerken, waehrend die Stimmung die Zielfrequenzen aendert.' },
    { question: 'Erhoeht eine laengere Gitarrenmensur die Saitenspannung?', answer: 'Ja. Bei gleicher Staerke und Tonhoehe steigt die Spannung mit dem Quadrat der schwingenden Laenge. Deshalb kann derselbe 10-bis-46-Satz auf 25,5 Zoll fester sein als auf 24,75 Zoll.' },
    { question: 'Wie wirkt sich eine andere Stimmung auf die Spannung aus?', answer: 'Eine tiefere Stimmung senkt die Spannung im Quadrat des Frequenzverhaeltnisses. Ein Ganzton tiefer laesst etwa 79 Prozent der urspruenglichen Spannung uebrig, ein Halbton tiefer etwa 89 Prozent.' },
    { question: 'Sind die Werte fuer umsponnene Gitarrensaiten exakt?', answer: 'Nein. Das Modell behandelt die Saite als zylindrischen Strang mit Materialdichte. Umsponnene Saiten haben Kerne, Wicklungen und Beschichtungen, daher sind Herstellerangaben zum Einheitsgewicht genauer.' },
    { question: 'Welche Saitenspannung fuehlt sich angenehm an?', answer: 'Es gibt keinen universellen Zielwert. Dieses Tool markiert Werte unter 8 Pfund als locker und ueber 25 Pfund als fest, damit Extreme auffallen. Spielstil, Setup und Instrument bestimmen das persoenliche Gefuehl.' },
    { question: 'Kann ich mit dem Ergebnis einen neuen Saitensatz freigeben?', answer: 'Nutze es zum Vergleich von Szenarien, nicht als Sicherheitsgarantie. Pruefe die Vorgaben des Instrumentenherstellers und die technischen Daten des Saitenherstellers vor einer deutlichen Aenderung von Staerke oder Stimmung.' },
  ],
  howTo: [
    { name: 'Messeinheit waehlen', text: 'Waehle Metrisch fuer Millimeter und Kilogramm-Kraft oder Imperial fuer Zoll, mil und Pfund-Kraft. Beim Wechsel bleibt das physische Setup gleich.' },
    { name: 'Mensur und Stimmung waehlen', text: 'Waehle die naechste Mensur und dann die verwendete Stimmung. Nutze Eigene Mensur, wenn die schwingende Laenge bekannt ist.' },
    { name: 'Staerken waehlen oder bearbeiten', text: 'Beginne mit einem Preset von 9 bis 42, 10 bis 46, 11 bis 49 oder 12 bis 54. Oeffne Staerken bearbeiten fuer einen gemischten Satz oder eine eigene tiefe Saite.' },
    { name: 'Spannungsprofil lesen', text: 'Vergleiche jede Saite, den Gesamtzug am Hals und den Abstand zwischen den Extremen. Locker- und Fest-Markierungen zeigen Werte fuer eine genauere Setup-Pruefung.' },
  ],
  seo: [
    { type: 'summary', title: 'Was dieser Rechner vergleicht', items: ['Spannung aller sechs Saiten aus einem Preset oder eigenen Staerken', 'Aenderungen von Mensur und Stimmung als neues Spannungsprofil', 'Metrische und imperiale Werte in Kilogramm-Kraft oder Pfund-Kraft', 'Locker- und Fest-Markierungen fuer auffaellige Extreme'] },
    { type: 'title', text: 'Was Saitenspannung ueber ein Gitarren-Setup sagt', level: 2 },
    { type: 'paragraph', html: 'Saitenspannung ist die Zugkraft, die eine Saite bei einer bestimmten Tonhoehe haelt. Sie ist nicht dasselbe wie die Staerke allein: Auch Tonhoehe und schwingende Laenge veraendern die Kraft. Das Profil ueber den ganzen Satz zeigt, ob eine Saite deutlich lockerer oder fester ist als ihre Nachbarn.' },
    { type: 'title', text: 'Das physikalische Modell hinter der Schaetzung', level: 2 },
    { type: 'paragraph', html: 'Eine schwingende Saite verbindet Frequenz, schwingende Laenge und lineare Massendichte. Daraus folgt das Modell T = 4L²f²μ. Die Dichte wird aus dem kreisfoermigen Querschnitt und einem Stahlmodell geschaetzt.' },
    { type: 'title', text: 'Warum Herstellerangaben weiterhin wichtig sind', level: 2 },
    { type: 'paragraph', html: 'Umsponnene Gitarrensaiten bestehen aus Kern und Wicklung; Beschichtung und Konstruktion veraendern ihr Einheitsgewicht. Verwende dieses Ergebnis daher als Vergleichslabor und die Produkttabelle des Herstellers als Referenz fuer die Montage.' },
    { type: 'list', items: ['Mensur aus den Instrumentendaten uebernehmen oder vom Sattel bis zum Steg messen.', 'Die tatsaechlich verwendete Stimmung waehlen.', 'Mit dem naechsten Staerken-Preset beginnen und nur geplante Aenderungen bearbeiten.', 'Einzelwerte und Abstand pruefen und danach die Herstellerdaten bestaetigen.'] },
  ],
});
