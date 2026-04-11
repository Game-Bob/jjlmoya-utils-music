import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { AudioStorageCalculatorUI } from '../ui';

const slug = 'calculateur-stockage-audio-numerique';
const title = "Calculateur de Stockage Audio Numérique : WAV, FLAC et MP3";
const description =
  "Estimez l'espace disque nécessaire pour vos enregistrements audio en WAV, FLAC et MP3 selon la fréquence d'échantillonnage et la profondeur de bits.";

const faqData = [
  {
    question: "Combien occupe une heure d'audio à 44.1 kHz 16 bits ?",
    answer:
      "En stéréo (qualité CD), une heure d'audio occupe environ 635 Mo d'espace disque sans compression (WAV/AIFF).",
  },
  {
    question: "Pourquoi le format WAV prend-il autant de place ?",
    answer:
      "WAV est un format sans compression 'lossless', ce qui signifie qu'il stocke chaque échantillon audio individuellement pour préserver la fidélité maximale sans réduire les données.",
  },
  {
    question: "Qu'est-ce qui est mieux pour économiser de l'espace : FLAC ou MP3 ?",
    answer:
      "FLAC économise jusqu'à 50 % d'espace sans perte de qualité (compression sans perte). Le MP3 économise jusqu'à 80-90 % mais supprime des informations audio imperceptibles (compression avec perte).",
  },
  {
    question: "Comment calculer l'espace nécessaire pour un podcast de 2 heures ?",
    answer:
      "Si vous enregistrez en Mono à 48 kHz / 24 bits, vous aurez besoin d'environ 988 Mo. Le calculateur vous permet d'ajuster ces paramètres précisément pour votre équipement.",
  },
];

const howToData = [
  {
    name: "Configurer l'audio",
    text: "Choisissez la fréquence d'échantillonnage (kHz), la profondeur de bits et le nombre de canaux.",
  },
  {
    name: 'Saisir la durée',
    text: "Entrez les heures, minutes et secondes que vous estimez que l'enregistrement durera.",
  },
  {
    name: 'Analyser les résultats',
    text: 'Observez le poids résultant en Mo ou Go et comparez-le avec différents formats comme FLAC ou MP3.',
  },
  {
    name: 'Évaluer la capacité',
    text: "Vérifiez quel pourcentage du stockage de votre carte SD ou disque dur occupera l'enregistrement.",
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

export const content: ToolLocaleContent<AudioStorageCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Questions Fréquentes',
  faq: faqData,
  bibliographyTitle: 'Références techniques',
  bibliography: [
    {
      name: 'Audio bit depth – Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Audio_bit_depth',
    },
    {
      name: 'Sample-rate conversion – Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Sample-rate_conversion',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  ui: {
    labelConfig: "Configuration de l'Audio",
    labelHz: "Fréquence d'Échantillonnage (kHz)",
    labelBits: 'Profondeur de Bits',
    labelChannels: 'Canaux',
    labelDuration: "Durée de l'Enregistrement",
    labelHours: 'Heures',
    labelMinutes: 'Minutes',
    labelSeconds: 'Secondes',
    labelCapacity: 'Capacité Disponible (en Go)',
    toggleLabelSpace: "Calculer combien je peux enregistrer avec mon espace libre",
    labelComparison: 'Comparaison Formats et Stockage',
    thFormat: 'Format',
    thQuality: 'Qualité',
    thSize: 'Taille Estimée',
    qualityWav: 'Sans Compression (Lossless)',
    qualityFlac: 'Compression sans perte',
    qualityMp3High: 'Haute Qualité (Lossy)',
    qualityMp3Std: 'Qualité Standard / Voix',
    labelDevices: 'Pourcentage occupé sur les appareils courants',
    device32: 'Carte SD 32Go',
    device128: 'Stockage 128Go',
    device1tb: 'Disque Dur 1To',
    btnCopy: 'Copier le Résumé',
    optHz44100: '44.1 kHz (CD)',
    optHz48000: '48 kHz (Standard Vidéo)',
    optHz88200: '88.2 kHz',
    optHz96000: '96 kHz (Haute Résolution)',
    optHz192000: '192 kHz (Ultra HD)',
    optBits16: '16-bit (CD / Standard)',
    optBits24: '24-bit (Producteurs / Cinéma)',
    optBits32: '32-bit (Virgule Flottante)',
    optCh1: 'Mono (1 canal)',
    optCh2: 'Stéréo (2 canaux)',
    optCh6: '5.1 Surround (6 canaux)',
    optCh8: '7.1 Surround (8 canaux)',
    labelDurationSet: 'Durée configurée : {time}',
    labelRecordingPossible: 'Enregistrement possible avec {gb} Go configurés',
    toggleLabelTime: 'Retour au calcul par durée',
    labelSpaceAvailable: 'Espace Disponible',
    copyDone: 'Résumé Copié !',
    summarySpace:
      "L'enregistrement de {t} à {bits}-bit/{hz} en mode {channels} occupera environ {result}.",
    summaryTime:
      'Avec {space} Go disponibles, vous pouvez enregistrer jusqu\'à {result} d\'audio à {bits}-bit/{hz} {channels}.',
  },
  seo: [
    {
      type: 'summary',
      title: 'Calculateur de Capacité pour Son Numérique',
      items: [
        '<strong>WAV à MP3</strong> : Calculez le poids des fichiers avec et sans compression.',
        "<strong>Résolution Audio</strong> : Ajustez la fréquence (kHz) et les bits (16/24/32).",
        '<strong>Calcul inverse</strong> : Combien puis-je enregistrer avec mon espace restant ?',
        '<strong>Formats Professionnels</strong> : Estimation pour FLAC et masterisation en 192kHz.',
      ],
    },
    { type: 'title', text: "Comment calcule-t-on la taille d'un enregistrement audio ?", level: 2 },
    {
      type: 'paragraph',
      html: "La taille d'un fichier audio numérique non compressé (comme WAV ou AIFF) dépend de trois facteurs techniques fondamentaux : la <strong>Fréquence d'Échantillonnage</strong> — combien de fois par seconde l'onde sonore est « mesurée » ; la <strong>Profondeur de Bits</strong> — la résolution de chaque mesure ; et les <strong>Canaux</strong> — Mono (1), Stéréo (2) ou Multicanal (Surround). La formule mathématique standard est le <strong>Débit binaire (Bitrate)</strong> ; multiplié par la durée en secondes, il donne la taille totale du fichier brut.",
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Qualité CD',
          description:
            '16-bit / 44.1 kHz. Occupe environ 10,1 Mo par minute en stéréo. La norme historique de l\'industrie musicale.',
        },
        {
          title: 'Enregistrement Pro',
          description:
            '24-bit / 48 kHz. La norme pour la vidéo et le cinéma. Occupe environ 16,5 Mo par minute. Plus de marge pour le mixage.',
        },
        {
          title: 'Haute Résolution',
          description:
            '24-bit / 96 kHz. Utilisé en masterisation. Double la taille de l\'enregistrement standard jusqu\'à 33 Mo par minute.',
        },
      ],
    },
    { type: 'title', text: "Pourquoi l'audio 24-bit occupe 50% de plus que le 16-bit ?", level: 2 },
    {
      type: 'paragraph',
      html: 'Chaque échantillon audio en 16-bit utilise 2 octets (16 ÷ 8) pour stocker l\'amplitude. L\'audio en 24-bit utilise 3 octets par échantillon. Cela signifie que, pour la même fréquence d\'échantillonnage, un fichier 24-bit sera exactement 50% plus lourd qu\'un fichier 16-bit.',
    },
    {
      type: 'tip',
      title: "L'espace supplémentaire en vaut-il la peine ?",
      html: "L'audio 24-bit offre une plage dynamique de 144 dB contre 96 dB pour le 16-bit, ce qui fournit un « plancher de bruit » beaucoup plus bas — essentiel lors du mixage et de la masterisation professionnels.",
    },
    { type: 'title', text: 'WAV vs FLAC vs MP3 : L\'impact sur le disque', level: 2 },
    {
      type: 'paragraph',
      html: '<strong>WAV / AIFF</strong> sont des formats sans compression qui préservent chaque bit de l\'enregistrement original. <strong>FLAC</strong> applique une compression sans perte, réduisant la taille de 40-60% sans sacrifier la qualité. <strong>MP3 / AAC</strong> appliquent une compression avec perte ; un MP3 à 320 kbps occupe environ 22% du WAV original.',
    },
    {
      type: 'table',
      headers: ['Qualité', 'Fréquence', 'Bits', 'Mo par Minute (Stéréo)'],
      rows: [
        ['Appel Téléphonique', '8 kHz', '8-bit', '0.94 Mo'],
        ['Radio FM', '32 kHz', '16-bit', '7.32 Mo'],
        ['CD Original', '44.1 kHz', '16-bit', '10.09 Mo'],
        ['Studio Vidéo', '48 kHz', '24-bit', '16.48 Mo'],
        ['Haute Fidélité', '96 kHz', '24-bit', '32.96 Mo'],
      ],
    },
    { type: 'title', text: 'Formule de calcul pour les techniciens', level: 2 },
    {
      type: 'paragraph',
      html: 'Si vous avez besoin d\'effectuer le calcul manuellement ou de l\'implémenter dans votre propre logiciel, voici la logique que suit notre calculateur :',
    },
    {
      type: 'code',
      ariaLabel: 'Logique de calcul du stockage audio',
      code: `const sampleRate = 48000;\nconst bitDepth = 24;\nconst channels = 2;\nconst seconds = 3600;\n\nconst bitsPerSecond = sampleRate * bitDepth * channels;\nconst totalBytes = (bitsPerSecond * seconds) / 8;`,
    },
    { type: 'title', text: 'Cas d\'utilisation de cet outil', level: 2 },
    {
      type: 'list',
      items: [
        'Podcast : Évitez de manquer d\'espace sur votre enregistreur portable lors d\'une longue interview.',
        'Studio de Musique : Calculez combien de Go d\'espace libre vous avez besoin avant d\'ouvrir une session de 40 pistes à 96kHz.',
        'Ingénierie du Son Numérique : Vérifiez que le débit de transfert est compatible avec votre matériel.',
        'Post-production Cinéma : Estimez le poids des prises multicanaux 5.1 pour l\'envoi de fichiers par réseau.',
        'Archivage : Déterminez la capacité nécessaire pour numériser une collection de cassettes analogiques en qualité Master.',
      ],
    },
  ],
};
