import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'musique',
  title: 'Outils Musicaux en Ligne',
  description:
    'Utilitaires musicaux gratuits pour musiciens, producteurs et passionnés. Métronome, calculateur BPM, convertisseur de fréquences, équivalence de notes et plus.',
  seo: [
    {
      type: 'summary',
      title: 'Ce que vous trouverez dans cette catégorie',
      items: [
        'Métronome en ligne avec Web Audio API — précision à la milliseconde',
        'Calculateur BPM en millisecondes pour delays et reverbs',
        'Convertisseur fréquence vers note musicale (Hz, cents et désaccordage)',
        "Calculateur de distance de phase pour l'alignement des microphones",
        'Équivalence de notes entre systèmes Latin, Américain et Germanique',
        'Calculateur de stockage audio numérique',
      ],
    },
    {
      type: 'title',
      text: 'Outils Musicaux pour Chaque Étape du Processus Créatif',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "De la première répétition au mastering final, chaque musicien et producteur a besoin d'outils précis disponibles à tout moment. Notre collection d'<strong>utilitaires musicaux en ligne</strong> a été conçue avec un objectif clair : la précision technique maximale avec un minimum de friction.",
    },
    {
      type: 'paragraph',
      html: 'Aucune installation requise. Tous les outils fonctionnent directement dans votre navigateur, sont entièrement gratuits et protègent votre vie privée : aucune donnée ne quitte votre appareil.',
    },
    {
      type: 'title',
      text: 'Pour le Musicien qui Pratique',
      level: 3,
    },
    {
      type: 'paragraph',
      html: "Le <strong>métronome en ligne</strong> est l'outil fondamental de tout musicien en formation ou en activité. Notre métronome utilise la Web Audio API pour garantir une précision à la milliseconde, éliminer la dérive et offrir un retour visuel avec effet ripple. La fonction <strong>Tap Tempo</strong> permet de calculer instantanément le BPM de n'importe quelle chanson.",
    },
    {
      type: 'title',
      text: 'Pour le Producteur Musical',
      level: 3,
    },
    {
      type: 'paragraph',
      html: "Le <strong>calculateur BPM en millisecondes</strong> est indispensable dans toute session de mixage. Synchroniser un delay ou une reverb avec le tempo de la chanson fait la différence entre un mix qui respire et un mix qui sonne artificiel. De même, le <strong>calculateur de distance de phase</strong> permet d'aligner les microphones avec une précision à l'échantillon et d'éviter l'annulation de phase dans les enregistrements multi-micros.",
    },
    {
      type: 'title',
      text: 'Pour le Technicien du Son',
      level: 3,
    },
    {
      type: 'paragraph',
      html: "Le <strong>convertisseur fréquence vers note musicale</strong> transforme toute valeur en Hz en sa note équivalente, en affichant aussi l'écart en cents. Idéal pour accorder des synthétiseurs analogiques, identifier des résonances problématiques dans une salle ou travailler avec des samples désaccordés. Le <strong>calculateur de stockage audio numérique</strong> aide à dimensionner des projets d'enregistrement et à gérer l'espace disque avec précision.",
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Précision Technique',
          description:
            'Tous les outils sont basés sur des algorithmes vérifiés mathématiquement. Aucune approximation : les résultats sont exacts et reproductibles.',
        },
        {
          title: 'Confidentialité Totale',
          description:
            "Le traitement s'effectue sur votre appareil. Aucun audio, fichier ou donnée personnelle n'est transmis à un serveur.",
        },
      ],
    },
    {
      type: 'title',
      text: 'Le Langage Universel de la Musique',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "La musique est un langage avec plusieurs systèmes de notation. L'outil d'<strong>équivalence de notes</strong> permet de traduire instantanément entre le système Latin (Do, Ré, Mi…), le système Américain (C, D, E…) et le système Germanique (C, D, E… avec H au lieu de B), évitant les confusions lors des échanges avec des musiciens de différentes traditions ou lors de la lecture de partitions de pays différents.",
    },
    {
      type: 'tip',
      title: 'Accès sans installation',
      html: "Tous les outils fonctionnent directement dans le navigateur, sans plugins ni applications supplémentaires. Ajoutez cette page à vos favoris pour les avoir toujours à portée de main lors de vos sessions.",
    },
  ],
};
