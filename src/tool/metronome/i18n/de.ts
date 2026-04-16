import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MetronomeUI } from '../ui';

const slug = 'metronom';
const title = 'Online Metronom: Präzises Visuelles und Akustisches Metronom';
const description =
  'Kostenloses Online-Metronom für Musiker. Millisekundengenaue Präzision mit der Web Audio API. Visuelle Anzeige, Audio und Tap Tempo. Perfekt zum Üben von Instrumenten.';

const faqData = [
  {
    question: 'Ist dieses Metronom genau genug für den professionellen Einsatz?',
    answer:
      'Ja. Wir verwenden die Web Audio API, die Klänge direkt über die Hardware-Uhr des Geräts plant. Dies vermeidet die für andere Webanwendungen typischen Mikroverzögerungen und garantiert Millisekundengenauigkeit, selbst bei langen Sitzungen.',
  },
  {
    question: 'Was ist Tap Tempo und wie verwende ich es?',
    answer:
      'Es ist eine Funktion, mit der Sie die BPM durch rhythmisches Tippen berechnen können. Klicken Sie einfach auf die Schaltfläche „TAP“ oder drücken Sie die Leertaste im Takt der Musik, die Sie gerade hören, um sofort das exakte Tempo zu erhalten.',
  },
  {
    question: 'Kann ich die Taktart und Akzente ändern?',
    answer:
      'Ja, Sie können verschiedene Taktarten (2/4, 3/4, 4/4, 6/8 usw.) konfigurieren und die Akzente an den Stil der Musik anpassen, die Sie gerade üben.',
  },
  {
    question: 'Warum höre ich auf meinem iPhone oder iPad nichts?',
    answer:
      'Auf iOS-Geräten berücksichtigt die Web-Audio-Technologie den physischen Stummschalter. Stellen Sie sicher, dass Ihr Telefon nicht stummgeschaltet ist, und erhöhen Sie die Medienlautstärke, um die Klicks zu hören.',
  },
];

const howToData = [
  {
    name: 'BPM einstellen',
    text: 'Verwenden Sie den Schieberegler oder die Feineinstellungstasten, um die gewünschte Geschwindigkeit in Schlägen pro Minute (BPM) einzustellen.',
  },
  {
    name: 'Taktart konfigurieren',
    text: 'Wählen Sie die Schlagzahl (z. B. 4/4 oder 3/4), damit das Metronom den ersten Schlag jedes Taktes korrekt betont.',
  },
  {
    name: 'Mit externer Musik synchronisieren (Tap)',
    text: 'Wenn Sie das Tempo eines Songs herausfinden möchten, den Sie gerade hören, tippen Sie passend zum Schlagzeug oder zum Hauptpuls auf die TAP-Schaltfläche.',
  },
  {
    name: 'Üben beginnen',
    text: 'Drücken Sie die Starttaste. Die visuellen Anzeigen helfen Ihnen, den Takt zu halten, auch wenn Sie den Ton in Ihrer Umgebung nicht deutlich hören können.',
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
  faqTitle: 'Häufig gestellte Fragen',
  faq: faqData,
  bibliographyTitle: 'Technische Referenzen',
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
    labelTime: 'Taktart',
    labelTap: 'Tap Tempo',
    btnTap: 'TAP',
    warningTitle: 'Kein Ton?',
    warningText:
      'Wenn Sie ein iPhone/iPad verwenden, stellen Sie sicher, dass der seitliche Stummschalter nicht aktiviert ist. Die Web-Audio-Technologie berücksichtigt auf vielen Geräten den Stummschaltungsmodus des Systems.',
  },
  seo: [
    {
      type: 'summary',
      title: 'Funktionen des Metronoms',
      items: [
        'Web Audio API Engine — Millisekundengenauigkeit ohne Drift',
        'Tap Tempo: BPM durch rhythmisches Tippen berechnen',
        'Konfigurierbare Taktart von 1 bis 12 Schlägen mit automatischer Betonung',
        'Kontrastreiche visuelle Anzeige mit Ripple-Effekt',
        'Lautstärkeregelung und ±1/±5 BPM Feineinstellungstasten',
      ],
    },
    {
      type: 'title',
      text: 'Rhythmische Präzision direkt in Ihrem Browser',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Willkommen beim <strong>definitiven Online-Metronom</strong>. Wir haben dieses Tool mit einem Ziel entwickelt: <em>Zuverlässigkeit</em>. Im Gegensatz zu anderen Online-Metronomen, die aufgrund von Prozessorlast an „Drift“ (kleine kumulative Verzögerungen) leiden, basiert unsere Sound-Engine direkt auf der <strong>Web Audio API</strong>.',
    },
    {
      type: 'paragraph',
      html: 'Das bedeutet, dass Klangimpulse im Voraus über die Hardware-Uhr Ihres Geräts geplant werden, was eine <strong>unerschütterliche Millisekundengenauigkeit</strong> garantiert, selbst wenn Sie den Tab minimieren oder Ihr Computer beschäftigt ist.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Klare Visualisierung',
          description:
            'Große, kontrastreiche visuelle Anzeigen mit einem „Ripple“-Effekt. So konzipiert, dass sie mit peripherer Sicht wahrgenommen werden können, damit Sie Ihre Noten oder Ihr Instrument im Auge behalten können, ohne den Takt zu verlieren.',
        },
        {
          title: 'Smart Tap Tempo',
          description:
            'Sie hören ein Lied und möchten dessen Geschwindigkeit wissen? Drücken Sie die TAP-Taste oder die Leertaste passend zur Musik. Der Algorithmus berechnet den exakten Durchschnitt Ihrer Eingaben.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Meister-Leitfaden: So üben Sie mit einem Metronom',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Das Metronom ist nicht nur eine tickende Uhr; es ist der unparteiischste Richter über Ihre Technik. Hier ist eine bewährte Methodik, um Ihre Geschwindigkeit und Sauberkeit zu verbessern:',
    },
    {
      type: 'title',
      text: '1. Die Leiter-Methode',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Wenn Ihr Ziel <strong>120 BPM</strong> ist, versuchen Sie nicht sofort, bei dieser Geschwindigkeit zu spielen. Man frustriert schnell; Fortschritt erfordert Strategie.',
    },
    {
      type: 'list',
      items: [
        'Beginnen Sie bei 50 % Ihrer Zielgeschwindigkeit (z. B. 60 BPM).',
        'Spielen Sie die Passage 3 Mal hintereinander perfekt. Wenn Sie eine Note verpassen, wird der Zähler zurückgesetzt.',
        'Erhöhen Sie das Metronom um nur 5 BPM.',
        'Wiederholen Sie dies, bis Sie Ihre Zielgeschwindigkeit erreicht haben.',
      ],
    },
    {
      type: 'title',
      text: '2. Akzentverschiebung',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Verwenden Sie unsere Taktartwahl, um den Akzent zu verschieben. Das Üben einer 4/4-Passage mit einem auf 3/4 eingestellten Metronom bedeutet, dass der Akzent (der scharfe Klick) an verschiedenen Stellen Ihrer Phrasierung landet, was Sie zwingt, die absolute Zeit zu verinnerlichen, anstatt sich auf Schlag „Eins“ zu verlassen.',
    },
    {
      type: 'title',
      text: '3. Strategische Pausen',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Eine fortgeschrittene Technik besteht darin, das Metronom auf halbe Geschwindigkeit einzustellen (z. B. 60 BPM, wenn Sie bei 120 spielen) und jeden Klick als Schlag 1 und 3 zu fühlen. Noch schwieriger: Fühlen Sie ihn nur auf den Off-Beats. Dies baut Ihre <strong>innere Uhr</strong> auf.',
    },
    {
      type: 'title',
      text: 'Interessante Fakten zum Tempo',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Das Tempo beeinflusst die emotionale Wahrnehmung von Musik radikal.',
    },
    {
      type: 'table',
      headers: ['Italienischer Begriff', 'BPM ca.', 'Charakter'],
      rows: [
        ['Largo', '40 – 60', 'Langsam und feierlich'],
        ['Andante', '76 – 108', 'Gehgeschwindigkeit, ruhig'],
        ['Allegro', '120 – 156', 'Schnell, hell und freudig'],
        ['Presto', '168 – 200', 'Sehr schnell, gehetzt'],
      ],
    },
    {
      type: 'title',
      text: 'Technologie hinter diesem Metronom',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Dies ist kein MP3-Player in einer Endlosschleife. Wir erzeugen reine Sinuswellen in Echtzeit. Der Hauptoszillator erzeugt einen <strong>1000 Hz</strong> Ton für den Akzent und <strong>800 Hz</strong> für die unbetonten Schläge, mit einer ultrakurzen ADSR-Hüllkurve für maximalen Punch. Dies gewährleistet einen sofortigen Klangangriff.',
    },
    {
      type: 'paragraph',
      html: 'Egal, ob Sie ein Schlagzeuger sind, der den Groove hält, ein Pianist, der an Tonleitern arbeitet, oder ein Gitarrist, der ein Solo perfektioniert – dieses Metronom ist Ihr stiller Partner (bis Sie auf Play drücken).',
    },
    {
      type: 'tip',
      title: 'Auf dem Handy kein Ton?',
      html: 'Wenn Sie ein iPhone/iPad verwenden, stellen Sie sicher, dass der <strong>seitliche Stummschalter</strong> nicht aktiviert ist. Die Web-Audio-Technologie berücksichtigt auf vielen Geräten den Stummschaltungsmodus des Systems.',
    },
  ],
};
