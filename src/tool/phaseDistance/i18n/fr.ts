import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PhaseDistanceUI } from '../ui';

const slug = 'calculateur-distance-phase';
const title = 'Calculateur de Distance de Phase pour Microphones';
const description =
  "Calculez le retard et la compensation nécessaires pour aligner les microphones. Évitez l'annulation de phase et le filtrage en peigne avec une précision à l'échantillon et un réglage de température.";

const faqData = [
  {
    question: "Qu'est-ce que l'annulation de phase en audio ?",
    answer:
      "C'est un phénomène acoustique qui se produit lorsque deux signaux de la même source arrivent à des instants différents. Les ondes s'interfèrent entre elles, et si elles sont désalignées de 180 degrés, elles s'annulent, rendant le son fin et sans corps.",
  },
  {
    question: 'Pourquoi la température influence-t-elle le calcul ?',
    answer:
      "Parce que le son se déplace dans l'air, et la densité de l'air varie avec la température. Plus il fait chaud, plus le son se propage vite. Un réglage précis de la température permet de calculer le retard exact entre des microphones séparés.",
  },
  {
    question: "Est-ce la même chose d'inverser la phase et la polarité ?",
    answer:
      "Techniquement non, même si les termes sont utilisés indistinctement. La polarité est un changement électrique (rotation de 180°), tandis que la phase est un décalage dans le temps. Notre outil permet de simuler les deux pour trouver le point de plus grande cohérence sonore.",
  },
  {
    question: "Qu'est-ce que le filtrage en peigne (Comb Filtering) ?",
    answer:
      "C'est la réponse en fréquence résultant de la combinaison d'un signal avec une version retardée de lui-même. Cela crée une série de pics et de creux (comme les dents d'un peigne) qui altèrent drastiquement le timbre de l'instrument.",
  },
  {
    question: "Quelle est la règle du 3:1 en microphone ?",
    answer:
      "C'est une technique pour minimiser les problèmes de phase : lorsque vous utilisez deux microphones pour capter différentes sources, la distance entre les microphones doit être au moins trois fois la distance de chaque microphone à sa source.",
  },
  {
    question: 'Vaut-il mieux aligner les micros physiquement ou avec un logiciel ?',
    answer:
      "Un bon alignement physique pendant l'enregistrement est toujours préférable pour éviter les artefacts. Cependant, le delay numérique dans le DAW offre une précision à l'échantillon près qui est presque impossible à atteindre en déplaçant les micros à la main.",
  },
];

const howToData = [
  {
    name: 'Mesurez les distances',
    text: "Mesurez la distance physique entre la source sonore (ex. caisse claire) et chacun des microphones que vous utilisez.",
  },
  {
    name: "Réglez l'environnement",
    text: "Saisissez la température de la salle et la fréquence d'échantillonnage de votre projet pour obtenir des calculs basés sur la physique réelle.",
  },
  {
    name: 'Analysez le graphique',
    text: "Observez le visualiseur de réponse en fréquence pour identifier les annulations critiques possibles dans la plage audible.",
  },
  {
    name: 'Appliquez la compensation',
    text: "Copiez la valeur en millisecondes ou en échantillons (samples) et entrez-la dans le plugin de delay de votre piste pour aligner parfaitement les enregistrements.",
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
  faqTitle: 'Questions fréquentes',
  faq: faqData,
  bibliographyTitle: 'Références techniques',
  bibliography: [
    {
      name: 'SOUND REINFORCEMENT HANDBOOK',
      url: 'https://soundsfxedit.wordpress.com/wp-content/uploads/2011/12/sound-reinforcement-handbook.pdf',
    },
    {
      name: 'Microphone Phase — Sound On Sound',
      url: 'https://www.soundonsound.com/techniques/phase-demystified',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  ui: {
    labelTemp: 'Température (°C) / Son',
    btnAuto: 'Auto',
    labelSampleRate: "Fréq. d'Échantillonnage (kHz)",
    labelUnits: "Système d'Unités",
    optMetric: 'Métrique (m/cm)',
    optImperial: 'Impérial (ft/in)',
    labelDistA: 'Distance Microphone A',
    labelDistB: 'Distance Microphone B',
    labelPresets: 'Préréglages Rapides',
    presetCoincident: 'Coïncident (XY)',
    presetSnare: 'Caisse claire',
    presetAmbient: 'Ambiance',
    btnInvert: 'Inverser la Phase (Φ)',
    labelGain: 'Gain Relatif Mic B :',
    btnCopy: "Copier les Samples",
    labelDelay: 'Retard Nécessaire',
    unitMs: 'millisecondes (ms)',
    labelCompensation: 'Compensation',
    unitSamples: 'Samples (Échantillons)',
    labelPhaseStatus: 'État de Phase',
    textLoading: 'Chargement...',
    statusInPhase: 'EN PHASE',
    statusInPhaseDesc: 'Signaux parfaitement alignés.',
    statusCritical: 'ANNULATION CRITIQUE',
    statusCriticalDesc: 'Filtrage en peigne notable dans les graves/médiums.',
    statusOffAxis: 'HORS AXE',
    statusOffAxisDesc: 'Légère déphase. Texture modifiée.',
    warningCritical: '(!) POSSIBLE ANNULATION CRITIQUE',
    labelSoundSpeed: 'Vitesse du Son',
    labelDistDiff: 'Différence de Distance',
    labelNullFreq: 'Premiers Nulls',
    textNone: 'Aucun',
    chartTitle: 'RÉPONSE EN FRÉQUENCE (H) — COMB FILTERING',
    promptSoundSpeed: 'Vitesse du Son (m/s) :',
    copyFeedback: 'Copié !',
  },
  seo: [
    {
      type: 'summary',
      title: 'Fonctionnalités du calculateur',
      items: [
        "Calcul physique exact avec réglage de température pour la vitesse du son",
        "Résultat en millisecondes et samples pour la compensation dans le DAW",
        "Visualiseur Canvas du filtrage en peigne sur tout le spectre audible",
        "Préréglages de microphones (XY coïncident, caisse claire, ambiance)",
        "Simulation d'inversion de phase et contrôle du gain relatif",
        "Support des unités métriques et impériales",
      ],
    },
    {
      type: 'title',
      text: "Qu'est-ce que l'annulation de phase et pourquoi ruine-t-elle vos mixages ?",
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Dans le monde de l'ingénierie du son, la phase est l'un des concepts les plus critiques et, paradoxalement, l'un des plus négligés par les débutants. Lorsque vous enregistrez une source sonore avec deux microphones ou plus placés à des distances différentes, les ondes sonores n'arrivent pas aux capsules en même temps. Cette différence de temps, aussi minime soit-elle, provoque un phénomène connu sous le nom de <strong>déphasage</strong>.",
    },
    {
      type: 'title',
      text: 'Le phénomène du Filtrage en Peigne (Comb Filtering)',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Lorsque deux signaux identiques sont combinés avec un léger retard entre eux, une série de creux et de pics apparaît dans la réponse en fréquence. Vu sur un analyseur de spectre, le motif ressemble aux dents d'un peigne — d'où le nom. Cet effet altère de manière destructive le timbre naturel de l'instrument.",
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Impact sur les Graves',
          description:
            "L'annulation de phase est généralement la plus dévastatrice dans les basses fréquences, où le corps du son disparaît complètement.",
        },
        {
          title: 'Texture Métallique',
          description:
            "Le filtrage en peigne ajoute une coloration artificielle qui sonne 'creuse' ou excessivement traitée.",
        },
      ],
    },
    {
      type: 'title',
      text: "L'influence de la température sur le calcul",
      level: 2,
    },
    {
      type: 'paragraph',
      html: "De nombreux ingénieurs du son oublient que l'air est un milieu physique et que sa densité varie avec la température. La vitesse du son n'est pas une constante immuable — à 20°C, elle se propage à environ 343 mètres par seconde.",
    },
    {
      type: 'code',
      code: 'v = 331,3 + (0,606 × T)',
      ariaLabel: 'Formule de la vitesse du son en fonction de la température',
    },
    {
      type: 'tip',
      title: 'Compensation Chirurgicale',
      html: "Quelques degrés de différence peuvent déplacer les points d'annulation de plusieurs hertz. Utiliser notre calculateur avec la température réelle de votre studio garantit un alignement parfait dans le DAW.",
    },
    {
      type: 'title',
      text: "Scénarios d'enregistrement critiques",
      level: 2,
    },
    {
      type: 'list',
      items: [
        'Caisse claire (dessus & dessous) : Alignez temporellement les deux peaux pour maximiser le punch.',
        "Overheads et micros proches : Retardez les micros proches pour qu'ils correspondent à la phase des overheads.",
        "Guitares avec plusieurs micros : Mélangez un dynamique et un ruban sans perdre les médiums-graves.",
        "Basses en DI et micro : Synchronisez le signal direct avec le micro d'ampli pour un son massif.",
      ],
    },
    {
      type: 'title',
      text: 'Alignement Physique vs. Traitement Numérique',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Bien que notre outil vous donne les valeurs pour corriger la phase dans votre DAW après l'enregistrement, nous recommandons toujours de tenter le meilleur alignement physique possible en studio. Déplacer un microphone de quelques millimètres peut être plus efficace que tout traitement numérique.",
    },
    {
      type: 'stats',
      items: [
        { label: 'Vitesse @ 20°C', value: '343,2 m/s' },
        { label: 'Millisecondes/cm', value: '0,029 ms' },
        { label: 'Samples @ 48kHz', value: '1,4 par cm' },
      ],
    },
    {
      type: 'title',
      text: 'Tableau de référence : Distance vs. Premier Null',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Différence (cm)', 'Retard (ms)', '1er Null (Hz)', 'Affecte...'],
      rows: [
        ['1 cm', '0,029', '17160', 'Extrême aigu'],
        ['5 cm', '0,146', '3432', 'Médiums-aigus (Brillance)'],
        ['10 cm', '0,291', '1716', 'Médiums (Présence)'],
        ['30 cm', '0,874', '572', 'Médiums-graves (Corps)'],
        ['1 mètre', '2,914', '172', 'Graves (Fondamentale)'],
      ],
    },
    {
      type: 'title',
      text: 'Avantages et inconvénients des méthodes de correction',
      level: 2,
    },
    {
      type: 'proscons',
      items: [
        {
          pro: "Alignement physique : Moins de dégradation du signal original.",
          con: "Alignement physique : Difficile à ajuster avec une précision micrométrique.",
        },
        {
          pro: "Correction numérique : Précision absolue au niveau de l'échantillon.",
          con: "Correction numérique : Peut créer un pré-écho si mal appliqué.",
        },
        {
          pro: "Inversion de polarité : Solution instantanée pour les annulations à 180°.",
          con: "Inversion de polarité : Ne corrige pas les déphasages intermédiaires.",
        },
        {
          pro: "Compensation temporelle : Récupère l'impact et le punch perdus.",
          con: "Compensation temporelle : Nécessite de mesurer chaque micro avec précision.",
        },
      ],
    },
    {
      type: 'tip',
      title: "Comment détecter les problèmes de phase à l'oreille ?",
      html: 'Appuyez sur le bouton "Inverser la Phase" (Φ). Si son activation donne plus de corps et de graves au son, vos microphones étaient hors phase. Si le son "disparaît" ou devient plus fin, ils étaient correctement alignés.',
    },
    {
      type: 'title',
      text: 'Compatibilité Mono et Perception Stéréo',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Dans les enregistrements stéréo, la relation de phase définit la stabilité de l'image sonore. S'il y a de graves incohérences, le son pourrait disparaître complètement lors de la lecture sur un système mono. Notre calculateur vous aide à prédire quelles fréquences souffriront le plus lorsque les canaux seront sommés.",
    },
  ],
};
