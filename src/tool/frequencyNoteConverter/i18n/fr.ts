import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FrequencyNoteConverterUI } from '../ui';

const slug = 'convertisseur-frequence-note-musicale';
const title = 'Convertisseur de Fréquence en Note Musicale';
const description =
  'Convertissez les hertz en notes musicales instantanément. Identifiez la note exacte de toute fréquence, mesurez la déviation en cents, écoutez le ton pur et accordez synthétiseurs et samplers avec précision.';

const faqData = [
  {
    question: 'Comment savoir à quelle note correspond une fréquence de 440 Hz ?',
    answer:
      "440 Hz correspond exactement au La4 (A4), la note de référence universelle pour l'accordage. C'est le La au-dessus du Do central du piano. Cette fréquence est la norme ISO 16 depuis 1939 et sert à accorder les instruments orchestraux dans le monde entier.",
  },
  {
    question: "Qu'est-ce que cela signifie qu'une note soit '15 cents au-dessus' ?",
    answer:
      "Un cent est le centième d'un demi-ton. Être 15 cents au-dessus d'une note signifie que la fréquence est légèrement plus aiguë que la note exacte du tempérament égal. Sur un synthétiseur, vous devriez appliquer -15 cents de fine-tune pour la corriger.",
  },
  {
    question: "Pourquoi y a-t-il des options de référence à 432 Hz et 444 Hz en plus de 440 Hz ?",
    answer:
      "Différents contextes musicaux utilisent des références d'accordage distinctes. 432 Hz est populaire dans certaines communautés de production. 444 Hz est courant dans la musique ancienne de la Renaissance. Certains orchestres européens accordent entre 441 et 444 Hz pour un son plus brillant.",
  },
  {
    question: 'À quoi sert le clavier de piano interactif ?',
    answer:
      "Le piano interactif permet d'identifier visuellement la note sur le clavier et aussi d'entrer des fréquences en appuyant directement sur les touches. En appuyant sur une touche, vous obtenez sa fréquence exacte et pouvez écouter un ton sinusoïdal pur pour comparaison.",
  },
  {
    question: 'Comment utiliser les harmoniques affichés par la calculatrice ?',
    answer:
      "Les harmoniques (octave inférieure et supérieure) vous indiquent les fréquences directement liées à votre note. Ils sont utiles pour éviter les conflits entre couches de synthétiseur, configurer des filtres résonants sur la bonne note ou mapper des samples de batterie.",
  },
  {
    question: "Pourquoi le mode d'écoute génère-t-il un ton sinusoïdal ?",
    answer:
      "Un ton sinusoïdal est une onde pure contenant uniquement la fréquence fondamentale sans harmoniques ajoutées. Cela permet une comparaison propre avec l'instrument réel sans que la couleur timbrale interfère avec le jugement de l'accordage.",
  },
  {
    question: "Comment calculer la fréquence d'une note musicale ?",
    answer:
      "La fréquence se calcule avec une formule logarithmique basée sur le tempérament égal. En partant de La4 (440 Hz), chaque demi-ton supérieur s'obtient en multipliant par la racine douzième de deux (~1.05946), et chaque octave équivaut à doubler la fréquence.",
  },
  {
    question: 'Quelle note est la fréquence 440 Hz ?',
    answer:
      "La fréquence de 440 Hz est exactement la note La4 (A4 en notation américaine). C'est la note de référence standard utilisée par la plupart des orchestres et des musiciens contemporains pour accorder leurs instruments.",
  },
  {
    question: "Quelle est la différence entre l'accordage à 440 Hz et 432 Hz ?",
    answer:
      "440 Hz est la norme internationale (ISO 16). 432 Hz est un accordage alternatif que certains musiciens préfèrent pour des raisons sonores subjectives, souvent utilisé en musique de méditation, bien qu'il n'existe aucune preuve scientifique d'avantages biologiques clairs par rapport à 440 Hz.",
  },
];

const howToData = [
  {
    name: 'Entrez la fréquence',
    text: 'Saisissez la fréquence en hertz dans le champ de saisie principal. Le résultat apparaît immédiatement avec le nom de la note et son octave scientifique.',
  },
  {
    name: 'Lisez le résultat et le compteur de cents',
    text: "L'indicateur visuel de type accordeur vous montre si votre fréquence est au-dessus, en dessous ou exactement sur la note. La valeur en cents indique de combien ajuster le fine-tune.",
  },
  {
    name: 'Utilisez les harmoniques pour accorder les couches',
    text: "Consultez les fréquences de l'octave inférieure et supérieure pour configurer des oscillateurs supplémentaires, des filtres résonants ou des couches de percussions sans conflits de fréquence.",
  },
  {
    name: 'Ajustez la référence A4',
    text: "Changez la référence A4 à 432 Hz, 444 Hz ou toute valeur personnalisée pour que tous les calculs soient cohérents avec le contexte de votre projet.",
  },
  {
    name: 'Écoutez le ton de référence',
    text: "Appuyez sur le bouton de lecture pour générer un ton sinusoïdal pur à la fréquence saisie et accorder votre instrument réel à l'oreille.",
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
    btnHzToNote: 'Hz vers Note',
    btnNoteToHz: 'Note vers Hz',
    labelRef: 'Référence A4',
    ariaRefCustom: 'Fréquence de référence A4 personnalisée',
    calInfo:
      '<strong>440 Hz</strong> est le standard international. <strong>432 Hz</strong> est souvent utilisé en musique de méditation et solfège.',
    labelFrequency: 'FRÉQUENCE',
    ariaFreqInput: 'Entrez la fréquence en hertz',
    ariaPlay: 'Écouter le ton',
    copyNoteName: 'Copier la note',
    labelOctaveDown: 'Octave inférieure',
    labelInputFreq: 'Fréquence saisie',
    labelOctaveUp: 'Octave supérieure',
    labelNoteInput: 'NOM DE LA NOTE (ex : La4, A4, Do#3)',
    placeholderNote: 'Écrivez la note...',
    labelSetNote: 'CHOISIR LA NOTE',
    labelSetOctave: "CHOISIR L'OCTAVE",
    labelSelectedNote: 'Note sélectionnée',
    copyHz: 'Copier Hz',
    btnListenNote: 'Écouter la note',
    pianoLabel: 'Piano interactif — appuyez sur une touche pour voir sa fréquence',
    pianoAria: 'Clavier de piano interactif',
    historyTitle: 'Historique',
    historyClear: 'Effacer',
    historyEmpty: 'Aucune conversion récente',
    historyLoadAria: 'Charger %s Hz',
    tuned: 'Accordé',
    sharp: 'dièse',
    flat: 'bémol',
    unitHzExact: 'Hz exacts',
    noteNames: 'Do,Do#,Ré,Ré#,Mi,Fa,Fa#,Sol,Sol#,La,La#,Si',
    noteOptions:
      'Do (C)|Do# / Réb|Ré (D)|Ré# / Mib|Mi (E)|Fa (F)|Fa# / Solb|Sol (G)|Sol# / Lab|La (A)|La# / Sib|Si (B)',
    pianoOctave: 'Oct',
    copyFeedback: 'Copié',
  },
  seo: [
    {
      type: 'summary',
      title: 'Fonctionnalités de la calculatrice',
      items: [
        'Conversion bidirectionnelle : Hz vers note et note vers Hz dans le même outil',
        "Précision à l'échantillon près avec référence A4 réglable (440 / 432 / 444 Hz)",
        'Compteur visuel en cents avec indicateur dièse / bémol / accordé',
        'Affichage des harmoniques (fondamentale, octave inférieure, octave supérieure)',
        'Clavier de piano interactif mettant en évidence la touche correspondante',
        "Historique de recherche pour comparer rapidement des patches et des samples",
      ],
    },
    {
      type: 'title',
      text: "Qu'est-ce que la fréquence d'une note musicale et pourquoi est-ce important ?",
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Chaque note musicale est, en essence, une vibration périodique de l'air. Quand une corde de guitare vibre à 440 cycles par seconde, elle produit le La4 (A4), la note de référence universelle pour l'accordage. Cette correspondance entre hertz et notes n'est pas arbitraire : elle est définie par le <strong>tempérament égal</strong>, le système d'accordage prédominant en musique occidentale, qui divise l'octave en douze demi-tons parfaitement équidistants d'un point de vue mathématique.",
    },
    {
      type: 'paragraph',
      html: "Connaître la fréquence exacte de chaque note est fondamental en synthèse sonore, production musicale, ingénierie audio et lutherie. Un synthétiseur doit savoir à quelle fréquence chaque oscillateur doit vibrer pour reproduire une note accordée. Un ingénieur du mixage doit savoir où couper avec un égaliseur pour éliminer un bourdonnement sans affecter la fondamentale d'un instrument.",
    },
    {
      type: 'title',
      text: 'La formule mathématique derrière la conversion',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Le tempérament égal est basé sur une progression géométrique. Chaque demi-ton équivaut à multiplier la fréquence par la racine douzième de deux. La formule pour obtenir la fréquence de n'importe quelle note à partir de sa distance en demi-tons par rapport à La4 est :",
    },
    {
      type: 'code',
      code: 'f = A4 × 2^((n - 69) / 12)',
      ariaLabel: 'Formule de conversion du numéro de note MIDI en fréquence en Hz',
    },
    {
      type: 'paragraph',
      html: "Où <em>n</em> est le numéro de note MIDI (A4 = 69) et <em>A4</em> est la fréquence de référence, habituellement 440 Hz. L'inversion de cette formule permet d'obtenir la note la plus proche de toute fréquence saisie, ainsi que la déviation en cents.",
    },
    {
      type: 'title',
      text: "Les cents : l'unité de précision pour musiciens et techniciens",
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Un demi-ton se divise en 100 cents. Cette unité permet de décrire avec une précision décimale toute déviation d'accordage. Une déviation de 10 cents est déjà perceptible pour une oreille entraînée ; au-dessus de 20 cents, cela sonne clairement faux pour la majorité des auditeurs.",
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Accordage parfait',
          description:
            "Une note est parfaitement accordée lorsque la déviation est inférieure à 5 cents par rapport à la fréquence exacte du tempérament égal.",
        },
        {
          title: 'Cents dans le DAW',
          description:
            "Les samplers, synthétiseurs et plugins de pitch shifting utilisent les cents pour le fine-tune, permettant d'ajuster les samples à leur note exacte sans artefacts.",
        },
        {
          title: 'Seuil humain',
          description:
            "Le seuil de perception des notes désaccordées varie entre 5 et 15 cents selon l'instrument, la dynamique et le contexte harmonique.",
        },
      ],
    },
    {
      type: 'title',
      text: 'La référence A4 : 440 Hz, 432 Hz et les guerres d\'accordage',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "La fréquence de référence A4 = 440 Hz a été normalisée internationalement en 1939 (ISO 16). Cependant, les musiciens baroques travaillent habituellement avec des références de 415 Hz, et il existe une communauté croissante de producteurs qui préfèrent 432 Hz. Des orchestres d'élite comme la Philharmonique de Berlin utilisent habituellement 443 Hz pour un son plus brillant.",
    },
    {
      type: 'paragraph',
      html: "En production musicale, la référence importe lors du mixage d'instruments acoustiques enregistrés en live avec des instruments virtuels. Si le piano enregistré a été accordé à 442 Hz mais que le synthétiseur utilise 440 Hz par défaut, tous les samples devront être corrigés en cents.",
    },
    {
      type: 'tip',
      title: 'Astuce professionnelle pour les samplers',
      html: "Lorsque vous importez un sample dans un sampler comme Kontakt ou Decent Sampler, entrez la fréquence du sample dans cette calculatrice. La valeur en cents affichée par le compteur d'accordage vous indique exactement la valeur de <em>fine-tune</em> à saisir dans le sampler pour que la note sonne parfaitement accordée.",
    },
    {
      type: 'title',
      text: 'Tableau de fréquences de référence par octave',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Ce tableau présente les fréquences exactes de chaque Do (C) en tempérament égal avec A4 = 440 Hz, utile pour configurer les oscillateurs de synthétiseurs modulaires ou vérifier la tessiture d'un instrument :",
    },
    {
      type: 'table',
      headers: ['Note', 'Fréquence (Hz)', 'Note MIDI', "Tessiture d'instrument habituelle"],
      rows: [
        ['Do0 (C0)', '16.35', '12', 'Contrebasse, pédale d\'orgue'],
        ['Do1 (C1)', '32.70', '24', 'Contrebasse, basse électrique grave'],
        ['Do2 (C2)', '65.41', '36', 'Violoncelle, guitare basse'],
        ['Do3 (C3)', '130.81', '48', 'Alto, saxophone ténor, guitare'],
        ['Do4 (C4)', '261.63', '60', 'Do central, piano, voix de ténor'],
        ['Do5 (C5)', '523.25', '72', 'Flûte, violon, voix de soprano'],
        ['Do6 (C6)', '1046.50', '84', 'Piccolo, registres aigus du violon'],
        ['Do7 (C7)', '2093.00', '96', 'Harmoniques de flûte, synthétiseur'],
        ['Do8 (C8)', '4186.01', '108', 'Clavier 88 touches, limite technique'],
      ],
    },
    {
      type: 'title',
      text: "Les harmoniques et l'octave comme relation 2:1",
      level: 2,
    },
    {
      type: 'paragraph',
      html: "L'une des relations les plus importantes en acoustique musicale est l'octave : doubler la fréquence produit la même note à l'octave supérieure, et la diviser par deux l'amène une octave en dessous. Cette relation 2:1 est la base des harmoniques naturelles de tout instrument acoustique.",
    },
    {
      type: 'paragraph',
      html: "En synthèse, connaître les harmoniques directes d'une fréquence est essentiel pour éviter que des oscillateurs entrent en collision spectrale dans une couche sonore. Cette calculatrice affiche toujours l'octave supérieure et inférieure de toute fréquence saisie.",
    },
    {
      type: 'title',
      text: "Cas d'usage réels pour musiciens et producteurs",
      level: 2,
    },
    {
      type: 'list',
      items: [
        "Accorder des oscillateurs analogiques : mesurez la fréquence de sortie et comparez avec la calculatrice pour savoir combien de cents ajuster au coarse ou fine tune.",
        "Assigner des samples aux notes : une grosse caisse enregistrée à 55 Hz est un La1. Cet outil vous dit exactement où la mapper dans un sampler.",
        "Détecter les résonances gênantes : si une salle résonne à 80 Hz, la calculatrice confirme que c'est un Mi2, guidant l'utilisation de l'égaliseur.",
        "Synchroniser des caissons de graves : vérifier que plusieurs subs reproduisent la même note évite les renforcements ou annulations par interférence.",
        "Accorder cloches et percussions à hauteur définie : identifiez la fondamentale pour les intégrer dans la tonalité de la pièce.",
        "Conception de filtres résonants : un filtre passe-bande à 349.23 Hz produira un pic en Fa4, facilitant les décisions harmoniques.",
      ],
    },
    {
      type: 'title',
      text: 'Le piano comme référence visuelle immédiate',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Le clavier de piano est la carte visuelle la plus intuitive du spectre musical. Sa disposition de touches blanches (notes naturelles) et noires (dièses et bémols) permet de reconnaître des gammes, accords et intervalles d'un coup d'œil. Le piano interactif illumine la touche correspondant à chaque fréquence, reliant le nombre à sa position sur le clavier universel.",
    },
    {
      type: 'proscons',
      items: [
        {
          pro: 'Précision mathématique : utilise la formule ISO 16 du tempérament égal exact.',
          con: "Limitation : ne s'applique qu'au tempérament égal, pas aux accordages historiques comme le mésotonique.",
        },
        {
          pro: "Calibrage libre : permet de travailler avec des références A4 entre 400 et 480 Hz.",
          con: "Le ton sinusoïdal ne reproduit pas le timbre réel de l'instrument, seulement la fréquence fondamentale.",
        },
        {
          pro: 'Conversion bidirectionnelle : Hz vers note et note vers Hz dans le même outil.',
          con: "Le compteur de cents est relatif au demi-ton le plus proche, pas au tempérament juste ou pur.",
        },
        {
          pro: "Historique de recherche : permet de comparer rapidement plusieurs patches ou samples.",
          con: "Les fréquences hors de la plage audible (20 Hz – 20 kHz) ont peu d'utilité pratique.",
        },
      ],
    },
    {
      type: 'title',
      text: 'Glossaire essentiel pour utiliser cet outil',
      level: 2,
    },
    {
      type: 'list',
      items: [
        'Hz (Hertz) : cycles par seconde. Mesure la fréquence d\'une onde sonore.',
        'Note MIDI : entier de 0 à 127 identifiant chaque note dans le standard MIDI. A4 = 69.',
        "Octave scientifique : système de nomenclature ajoutant le numéro d'octave à la note (La4, Do3).",
        "Cents : centième de demi-ton. Permet d'exprimer les déviations d'accordage avec précision.",
        "Tempérament égal : système d'accordage où tous les demi-tons sont égaux (rapport 2^(1/12)).",
        "A4 / La4 : note de référence. Standard international : 440 Hz (ISO 16, 1975).",
        "Harmonique : fréquences multiples entiers de la fondamentale produites naturellement par les instruments acoustiques.",
        "Fine-tune : paramètre des synthétiseurs et samplers pour ajuster l'accordage en cents.",
      ],
    },
  ],
};
