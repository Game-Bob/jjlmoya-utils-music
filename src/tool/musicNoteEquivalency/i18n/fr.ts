import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MusicNoteEquivalencyUI } from '../ui';

const slug = 'equivalence-notes-musicales';
const title = 'Équivalence des Notes Musicales : Latin, Anglophone et Germanique';
const description =
  'Traducteur interactif de notes musicales entre systèmes latin (Do, Ré, Mi), anglo-saxon (C, D, E) et germanique (H). Inclut visualiseur de piano, octaves et fréquences (Hz).';

const faqData = [
  {
    question: "Qu'est-ce que la notation américaine ou anglo-saxonne ?",
    answer:
      "C'est le système qui utilise les lettres A à G pour représenter les notes musicales. C'est le standard en musique moderne et jazz. Dans ce système, A=La, B=Si, C=Do, D=Ré, E=Mi, F=Fa et G=Sol.",
  },
  {
    question: "Pourquoi en Allemagne le Si s'appelle H ?",
    answer:
      "En raison d'une évolution graphique médiévale du 'B-quadratum'. Dans les pays germaniques, la lettre H est réservée au Si naturel, tandis que la lettre B est utilisée exclusivement pour le Si bémol.",
  },
  {
    question: "Quel est le 'Do central' en notation scientifique ?",
    answer:
      "Le Do central (la touche Do au milieu d'un piano de 88 notes) est le C4 dans le standard ANSI/International. Dans le système franco-belge, très utilisé dans les conservatoires, il se nomme Do3.",
  },
  {
    question: "Que signifie que deux notes soient enharmoniques ?",
    answer:
      "Cela signifie qu'elles ont des noms différents mais représentent le même son physique et se jouent sur la même touche du piano. Par exemple, Do dièse (C#) et Ré bémol (Db) sont des notes enharmoniques.",
  },
  {
    question: "Quelle est la fréquence standard du La4 ?",
    answer:
      'La fréquence standard internationale est de 440 Hz (norme ISO 16). C\'est la référence universelle pour accorder les orchestres, instruments et synthétiseurs numériques.',
  },
];

const howToData = [
  {
    name: "Sélectionner l'octave",
    text: "Utilisez le sélecteur numérique en haut pour indiquer dans quelle octave du piano vous voulez travailler (par défaut l'octave 4, la centrale).",
  },
  {
    name: 'Appuyer sur une note au piano',
    text: 'Cliquez ou touchez n\'importe quelle touche du piano interactif pour voir ses informations techniques et nomenclature.',
  },
  {
    name: 'Comparer les systèmes',
    text: 'Observez les panneaux inférieurs pour voir comment cette note s\'appelle dans les systèmes latin, anglo-saxon et germanique simultanément.',
  },
  {
    name: 'Écouter et vérifier',
    text: "Appuyez sur le bouton 'Écouter' pour entendre la fréquence exacte de la note sélectionnée et confirmer sa hauteur musicale.",
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
  faqTitle: 'Questions Fréquentes',
  faq: faqData,
  bibliographyTitle: 'Références techniques',
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
    octaveLabel: 'Octave Scientifique (C4 = Do3) :',
    systemsTitle: 'Systèmes de Nomenclature',
    systemLatino: 'Latin (Solfège)',
    systemAnglo: 'Anglo-Saxon (Moderne)',
    systemGerman: 'Germanique (Allemand)',
    sciNotationTitle: 'Notation Scientifique',
    systemAnsi: 'International (ANSI)',
    systemFranco: 'Franco-Belge',
    systemEnharmonic: 'Enharmonie Utile',
    techTitle: 'Données Techniques et Ondes',
    btnPlay: 'Écouter',
    btnCopy: 'Copier Info',
    initialTitle: 'Sélectionnez une note sur le piano',
    copyDone: 'Copié !',
    copyLabelNote: 'Note',
    copyLabelGerman: 'Système Allemand',
    copyLabelFreq: 'Fréquence',
    copyLabelAnsi: 'Octave Scientifique',
    copyLabelUrl: 'URL',
    naLabel: 'N/A',
  },
  seo: [
    {
      type: 'summary',
      title: 'Traducteur de Notes Musicales Multilingue',
      items: [
        '<strong>3 systèmes simultanés</strong> : Latin, Anglo-Saxon et Germanique en un coup d\'œil.',
        '<strong>Piano interactif</strong> : Cliquez sur n\'importe quelle touche pour voir ses équivalences.',
        '<strong>Fréquences exactes</strong> : Chaque note affiche ses Hz selon la norme ISO 16.',
        '<strong>Enharmonies</strong> : Identifie automatiquement les notes à double nom.',
      ],
    },
    {
      type: 'title',
      text: "Comprendre l'équivalence des notes musicales dans différents systèmes",
      level: 2,
    },
    {
      type: 'paragraph',
      html: "La musique est un langage universel, mais son écriture et sa nomenclature varient profondément selon la région géographique et le contexte académique. Tandis que dans les pays hispanophones et la tradition classique européenne prédomine le système latin (Do, Ré, Mi...), dans la musique moderne, le jazz et le monde anglo-saxon s'est standardisé la notation américaine (C, D, E...). De plus, il existe une particularité historique dans les pays d'influence germanique où le Si naturel se nomme H et le Si bémol est B.",
    },
    {
      type: 'title',
      text: 'Les trois principaux systèmes de nomenclature musicale',
      level: 2,
    },
    {
      type: 'list',
      items: [
        "<strong>Système Latin (Solfège) :</strong> Utilisé en Espagne, Italie, France et grande partie de l'Amérique Latine. Basé sur l'hymne à Saint Jean-Baptiste de Guido d'Arezzo. Utilise Do, Ré, Mi, Fa, Sol, La, Si.",
        '<strong>Notation Américaine (Anglo-Saxonne) :</strong> Le standard mondial pour le jazz, la pop et le rock. Attribue les sept premières lettres de l\'alphabet (A-G) commençant par La. Le Do est la lettre C.',
        '<strong>Système Germanique :</strong> Utilisé en Allemagne, Autriche et pays du nord de l\'Europe. La grande différence est l\'utilisation de H pour le Si naturel et B pour le Si bémol.',
      ],
    },
    {
      type: 'title',
      text: 'La curieuse histoire du Si, du B et du H',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Beaucoup de débutants se demandent pourquoi en Allemagne le Si s'écrit avec un H. L'origine est une erreur de copiste médiéval. Dans l'ancien système de lettres, la lettre B était utilisée pour le Si. Il existait deux variantes : le <em>B quadratum</em> (carré, pour le Si naturel) et le <em>B rotundum</em> (rond, pour le Si bémol).",
    },
    {
      type: 'paragraph',
      html: 'Avec le temps, la forme du <em>B quadratum</em> ressemblait de plus en plus à un H minuscule dans les manuscrits allemands. Cette évolution graphique s\'est consolidée dans l\'imprimerie et a donné lieu à la nomenclature allemande actuelle : H pour le Si naturel et B pour le Si bémol. Curieusement, cette distinction a permis à des compositeurs comme J.S. Bach de signer leurs œuvres avec le célèbre motif "B-A-C-H" (Si bémol - La - Do - Si naturel).',
    },
    {
      type: 'title',
      text: 'Tableau comparatif des équivalences de notes naturelles',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Note (Latin)', 'Notation (Anglo)', 'Allemand (Germanique)', 'Origine'],
      rows: [
        ['Do', 'C', 'C', 'Fréquence de base'],
        ['Ré', 'D', 'D', 'Deuxième note'],
        ['Mi', 'E', 'E', 'Troisième note'],
        ['Fa', 'F', 'F', 'Quatrième note'],
        ['Sol', 'G', 'G', 'Cinquième note'],
        ['La', 'A', 'A', "Note d'accord"],
        ['Si', 'B', 'H', 'La grande variante'],
      ],
    },
    {
      type: 'title',
      text: "Dièses, Bémols et le concept d'Enharmonie",
      level: 2,
    },
    {
      type: 'paragraph',
      html: "En musique occidentale nous utilisons 12 sons par octave. Les cinq notes supplémentaires sont représentées par des altérations : le dièse (#) et le bémol (b). Un dièse élève la note d'un demi-ton, tandis qu'un bémol la baisse d'un demi-ton.",
    },
    {
      type: 'paragraph',
      html: "Cela nous amène à l'<strong>Enharmonie</strong> : deux notes qui ont des noms différents mais sonnent exactement pareil et occupent la même touche du piano. Par exemple, Do# et Réb sont enharmoniques. Notre calculatrice met en évidence ces équivalences automatiquement.",
    },
    {
      type: 'title',
      text: 'Octaves : Notation Scientifique vs Franco-Belge',
      level: 2,
    },
    {
      type: 'list',
      items: [
        "Notation Scientifique Internationale (ANSI) : Le Do central se nomme C4. C'est le standard dans les synthétiseurs, DAWs et logiciels de musique (MIDI).",
        'Notation Franco-Belge : Très répandue dans les conservatoires classiques. Dans ce système, le Do central est le Do3.',
        "Système de Helmholtz : Utilise lettres majuscules, minuscules et primées (C, c, c', c''). Plus commun dans l'ancienne littérature technique et l'acoustique allemande.",
      ],
    },
    {
      type: 'tip',
      title: 'Conseil pour les producteurs',
      html: "Attention aux DAWs : certains fabricants (comme Yamaha) considèrent que le Do central est C3, tandis que d'autres (comme Roland ou FL Studio) le considèrent C4 ou même C5. Si votre synthétiseur sonne une octave à côté, vérifiez quelle norme de notation scientifique le logiciel utilise.",
    },
    {
      type: 'title',
      text: 'Fréquence en hertz (Hz) et accord standard',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "D'un point de vue physique, chaque note correspond à une fréquence spécifique mesurée en hertz. La norme internationale d'accordage (ISO 16) établit que le <strong>La4 (A4)</strong> vibre exactement à <strong>440 Hz</strong>.",
    },
    {
      type: 'list',
      items: [
        'Calibrer des synthétiseurs analogiques susceptibles de subir des dérives techniques.',
        'Régler des égaliseurs chirurgicaux en mixage pour éliminer les résonances sur des notes spécifiques.',
        'Comprendre la relation entre hauteur physique et perception musicale.',
        'Convertir des samples avec précision en ajustant le pitch en cents.',
      ],
    },
    {
      type: 'title',
      text: 'Cas pratiques d\'utilisation de la calculatrice',
      level: 2,
    },
    {
      type: 'proscons',
      items: [
        {
          pro: "Traduction instantanée entre notations pour les musiciens de session qui doivent lire des 'charts' en anglais.",
          con: "Le système ne prend pas en compte les microtonalités ni les accordages non occidentaux.",
        },
        {
          pro: "Identification des notes enharmoniques pour améliorer l'orthographe musicale dans les partitions.",
          con: "La lecture audio est une onde pure, elle n'a pas le timbre d'un instrument réel.",
        },
        {
          pro: "Conversion d'octaves scientifiques en franco-belges pour les étudiants en harmonie.",
          con: "Ne suppose que l'accordage standard A4=440Hz, pas les accordages baroques (415 Hz).",
        },
        {
          pro: "Visualisation intuitive au piano qui facilite l'apprentissage des gammes et accords.",
          con: "Nécessite des connaissances théoriques de base pour interpréter quelle altération est la mieux adaptée.",
        },
      ],
    },
    {
      type: 'title',
      text: 'Glossaire technique de référence',
      level: 2,
    },
    {
      type: 'list',
      items: [
        "Demi-ton : La distance minimale entre deux notes dans le système occidental (ex. de Mi à Fa).",
        "Ton : La distance équivalente à deux demi-tons (ex. de Do à Ré).",
        "Notation : Système d'abréviations pour représenter les notes et accords.",
        "Hertz (Hz) : Unité de mesure de la fréquence sonore.",
        "Octave : Intervalle séparant deux notes où la fréquence de l'une est le double de l'autre.",
        "Armure : Ensemble d'altérations au début d'une portée qui définissent la tonalité.",
      ],
    },
  ],
};
