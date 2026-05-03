import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BpmCalculatorUI } from '../ui';

const slug = 'calculateur-bpm-millisecondes';
const title = 'Calculateur BPM en Millisecondes pour Delay et Reverb';
const description =
  "Convertissez le tempo (BPM) en retards exacts (ms) et fréquences (Hz). L'outil essentiel pour configurer delays, reverbs et compresseurs avec précision rythmique.";

const faqData = [
  {
    question: "Qu'est-ce que le Pre-delay dans une reverb ?",
    answer:
      "Le pre-delay est le temps entre le son direct (la source) et le début de la queue de réverbération. Le régler rythmiquement permet à la source originale d'être claire sans être couverte par l'effet d'espace — essentiel pour les voix et les percussions.",
  },
  {
    question: 'Comment fonctionne le Tap Tempo ?',
    answer:
      "C'est un outil qui détecte le tempo en cliquant rythmiquement en suivant le pouls d'une chanson. En tapant plusieurs fois, le système calcule la moyenne des intervalles pour donner les BPM exacts. C'est la façon la plus rapide de synchroniser des effets avec une piste externe.",
  },
  {
    question: "Pourquoi utiliser des millisecondes plutôt que la synchronisation automatique ?",
    answer:
      "Il y a trois raisons principales : l'utilisation de hardware analogique sans MIDI, la conception fine de pre-delays pour que la reverb respire, et les ajustements de 'groove' où les effets sont décalés légèrement hors de la grille pour ne pas sonner statiques.",
  },
  {
    question: "À quoi sert le calcul rythmique en Hertz (Hz) ?",
    answer:
      "Les hertz indiquent combien de fois quelque chose se produit par seconde. Ils sont essentiels pour configurer des oscillateurs LFO, la vitesse de balayage d'un phaser ou pour synchroniser la modulation de filtres sur des synthétiseurs sans option de tempo sync natif.",
  },
];

const howToData = [
  {
    name: 'Saisir le BPM',
    text: 'Tapez le tempo de votre projet dans le champ central ou utilisez le bouton Tap Tempo.',
  },
  {
    name: 'Identifier la subdivision',
    text: "Cherchez la note dont vous avez besoin (noire, croche, etc.) dans les tableaux de temps simples, pointés ou en triolets.",
  },
  {
    name: 'Copier la valeur',
    text: 'Cliquez sur l\'icône copier à côté de la valeur en millisecondes (ms) pour l\'utiliser dans votre plugin ou hardware.',
  },
  {
    name: 'Régler le Pre-delay',
    text: 'Utilisez la section inférieure pour des valeurs ultra-courtes idéales pour séparer la reverb de la voix principale.',
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
    sectionDelay: 'Temps de Delay',
    sectionDotted: 'Notes Pointées',
    sectionTriplets: 'Triolets de Note',
    sectionReverb: 'Design de Reverb (Pre-delay)',
    colNote: 'Note',
    colMs: 'ms',
    colHz: 'Hz',
    infoPreDelay:
      "Le <strong>Pre-delay</strong> sépare l'attaque originale de la queue de reverb pour gagner en clarté.",
    copyAriaMs: 'Copier les millisecondes',
    copyAriaPreDelay: 'Copier le pre-delay',
    copyFeedback: 'Copié !',
  },
  seo: [
    {
      type: 'summary',
      title: 'Fonctionnalités du calculateur',
      items: [
        'Calcul instantané pour notes simples, pointées et triolets',
        'Valeurs en millisecondes et Hz pour chaque subdivision rythmique',
        'Section Pre-delay pour le design de reverb avec précision musicale',
        'Tap Tempo : détectez le BPM en tapant au rythme de la musique',
        'Copie en un clic vers le presse-papiers pour tout DAW ou plugin',
      ],
    },
    {
      type: 'title',
      text: 'Pourquoi un Calculateur BPM en Millisecondes est-il essentiel ?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Dans le monde de la production musicale moderne, la précision rythmique est ce qui sépare un mix amateur d'un mix professionnel. Bien que la plupart des DAWs comme Ableton Live, FL Studio ou Logic Pro incluent une synchronisation automatique pour leurs effets, il existe d'innombrables situations où le contrôle manuel est supérieur.",
    },
    {
      type: 'title',
      text: "L'importance du Pre-delay dans la Réverbération",
      level: 2,
    },
    {
      type: 'paragraph',
      html: "L'un des usages les plus critiques de cet outil est le réglage du <strong>pre-delay</strong>. Si vous appliquez une reverb à une voix sans pre-delay, la queue de l'effet commence immédiatement, brouillant les consonnes et réduisant la clarté. En calculant un pre-delay rythmique (comme une double croche ou une triple croche), vous laissez la voix originale respirer avant que l'espace acoustique artificiel prenne le contrôle.",
    },
    {
      type: 'title',
      text: 'Delay Analogique et Hardware Externe',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Si vous collectionnez des pédales de delay analogiques ou des synthétiseurs vintage, vous savez que beaucoup ne disposent pas d'entrée d'horloge MIDI. Configurer un delay à bande manuel nécessite de connaître exactement le nombre de millisecondes qui correspondent à une croche ou une noire pointée. Notre calculateur vous donne ces valeurs instantanément.",
    },
    {
      type: 'title',
      text: "Effets 'Off-the-grid' et Groove",
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Parfois, la perfection mathématique est ennuyeuse. De nombreux producteurs utilisent les valeurs en millisecondes comme point de départ pour les décaler légèrement. Déplacer un delay de 5 à 10 ms hors de la grille peut ajouter un <em>swing</em> humain ou un <em>groove</em> unique que la quantification rigide de l'ordinateur ne peut pas reproduire.",
    },
    {
      type: 'title',
      text: 'Compression et LFOs Synchronisés',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Saviez-vous que les temps d'<strong>Attack</strong> et de <strong>Release</strong> d'un compresseur peuvent aussi être rythmiques ? Régler le release de votre compresseur de bus de batterie pour qu'il se termine juste avant le prochain coup de grosse caisse crée un effet de \"pompage\" qui renforce le rythme. De même, la valeur en Hz est essentielle pour configurer des oscillateurs basse fréquence (LFO) sur des synthétiseurs sans tempo sync natif.",
    },
    {
      type: 'tip',
      title: 'Comment utiliser le Tap Tempo',
      html: "La fonction <strong>Tap Tempo</strong> est idéale pour les situations en direct ou lorsque vous écoutez une piste externe dont vous ne connaissez pas le tempo. Cliquez simplement rythmiquement sur le bouton en suivant le pouls de la musique. Nous recommandons au moins 4 ou 5 frappes pour que l'algorithme calcule la moyenne avec plus de précision.",
    },
    {
      type: 'title',
      text: 'Formules Mathématiques du Tempo',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "La formule de base est simple : <code>ms = 60 000 / BPM</code>. À partir de là, des multiplicateurs sont appliqués pour les subdivisions.",
    },
    {
      type: 'list',
      items: [
        'Notes simples : basées sur la division binaire (1, 0,5, 0,25, etc.).',
        'Pointées (Dotted) : multiplie la valeur de base par 1,5.',
        'Triolets (Triplets) : multiplie la valeur de base par 0,667 (2/3).',
      ],
    },
  ],
};
