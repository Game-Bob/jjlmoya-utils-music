import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MetronomeUI } from '../ui';

const slug = 'le-metronome';
const title = 'Métronome en ligne: Visuel et Sonore Haute Précision';
const description =
  'Métronome en ligne gratuit pour musiciens. Précision à la milliseconde avec Web Audio API. Visuel, sonore et avec Tap Tempo. Idéal pour pratiquer un instrument.';

const faqData = [
  {
    question: 'Ce métronome est-il assez précis pour un usage professionnel ?',
    answer:
      "Oui. Nous utilisons la Web Audio API, qui programme les sons directement sur l'horloge matérielle de l'appareil. Cela évite les micro-décalages typiques des autres applications web et garantit une précision à la milliseconde, même lors de longues sessions.",
  },
  {
    question: "Qu'est-ce que le Tap Tempo et comment l'utiliser ?",
    answer:
      "C'est une fonction qui permet de calculer les BPM en tapant rythmiquement. Il suffit de cliquer sur le bouton « TAP » ou d'appuyer sur la barre espace en rythme avec la musique pour obtenir instantanément le tempo exact.",
  },
  {
    question: 'Puis-je changer la mesure et les accents ?',
    answer:
      "Oui, vous pouvez configurer différentes mesures (2/4, 3/4, 4/4, 6/8, etc.) et personnaliser les accents des temps pour l'adapter au style de musique que vous pratiquez.",
  },
  {
    question: "Pourquoi je n'entends rien sur mon iPhone ou iPad ?",
    answer:
      "Sur les appareils iOS, la technologie Web Audio respecte l'interrupteur de silence physique. Assurez-vous que votre téléphone n'est pas en mode silencieux et montez le volume multimédia pour entendre les clics.",
  },
];

const howToData = [
  {
    name: 'Régler les BPM',
    text: 'Utilisez le curseur ou les boutons de réglage fin pour définir la vitesse souhaitée en pulsations par minute.',
  },
  {
    name: 'Configurer la mesure',
    text: 'Choisissez la métrique (ex. 4/4 ou 3/4) pour que le métronome accentue correctement le premier temps de chaque mesure.',
  },
  {
    name: 'Synchroniser avec la musique externe (Tap)',
    text: "Si vous avez besoin de connaître le tempo d'une chanson, appuyez sur le bouton TAP en rythme avec la batterie ou le temps principal.",
  },
  {
    name: 'Commencer la pratique',
    text: "Appuyez sur le bouton de démarrage. Les indicateurs visuels vous aideront à garder le rythme même si vous n'entendez pas le son clairement.",
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
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  ui: {
    labelTempo: 'Tempo',
    labelBpmMin: '40 BPM',
    labelBpmMax: '240 BPM',
    labelTime: 'Mesure',
    labelTap: 'Tap Tempo',
    btnTap: 'TAP',
    warningTitle: 'Pas de son ?',
    warningText:
      "Si vous êtes sur iPhone/iPad, assurez-vous que l'interrupteur de silence latéral n'est pas activé. La technologie Web Audio respecte le mode silencieux du système sur de nombreux appareils.",
  },
  seo: [
    {
      type: 'summary',
      title: 'Fonctionnalités du métronome',
      items: [
        'Moteur Web Audio API — précision à la milliseconde, sans dérive',
        'Tap Tempo : calculez les BPM en tapant dans le rythme',
        'Mesure configurable de 1 à 12 temps avec accent automatique',
        'Indicateur visuel haute contraste avec effet ripple',
        'Contrôle du volume et boutons de réglage fin ±1/±5 BPM',
      ],
    },
    {
      type: 'title',
      text: 'La Précision du Rythme à Portée de Navigateur',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Bienvenue dans le <strong>Métronome en ligne Définitif</strong>. Nous avons construit cet outil en pensant à une seule chose : la <em>fiabilité</em>. Contrairement aux autres métronomes web qui souffrent de "drift" (petits décalages cumulatifs) dus à la charge processeur, notre moteur sonore est construit directement sur la <strong>Web Audio API</strong>.',
    },
    {
      type: 'paragraph',
      html: "Cela signifie que les impulsions sonores sont programmées à l'avance sur l'horloge matérielle de votre appareil, garantissant une <strong>précision à la milliseconde</strong> inébranlable, même si vous réduisez l'onglet ou que votre ordinateur est occupé.",
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Visualisation Claire',
          description:
            'Grands indicateurs visuels à fort contraste avec effet "ripple". Conçus pour être perçus avec votre vision périphérique, vous permettant de garder les yeux sur votre partition ou instrument sans perdre le rythme.',
        },
        {
          title: 'Tap Tempo Intelligent',
          description:
            "Vous écoutez une chanson et voulez connaître sa vitesse ? Appuyez sur le bouton TAP ou la touche Espace en rythme avec la musique. L'algorithme calculera la moyenne exacte de vos tapotements.",
        },
      ],
    },
    {
      type: 'title',
      text: 'Guide Maître : Comment Pratiquer avec un Métronome',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Le métronome n'est pas seulement une horloge qui fait \"tic-tac\" ; c'est le juge le plus impartial de votre technique. Voici une méthodologie éprouvée pour améliorer votre vitesse et votre précision :",
    },
    {
      type: 'title',
      text: "1. La Méthode de l'Escalier",
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Si votre objectif est de jouer à <strong>120 BPM</strong>, ne commencez pas en essayant à cette vitesse. Se frustrer est facile ; progresser demande une stratégie.',
    },
    {
      type: 'list',
      items: [
        'Commencez à 50 % de la vitesse cible (ex. 60 BPM).',
        'Jouez le passage parfaitement 3 fois de suite. Si vous ratez une note, le compteur repart à zéro.',
        'Montez le métronome de seulement 5 BPM.',
        "Répétez jusqu'à atteindre votre vitesse cible.",
      ],
    },
    {
      type: 'title',
      text: "2. Déplacement de l'Accent",
      level: 3,
    },
    {
      type: 'paragraph',
      html: "Utilisez notre sélecteur de mesure pour changer l'accentuation. Pratiquer un passage en 4/4 avec le métronome en 3/4 fera tomber l'accent (le clic aigu) à des endroits différents de votre phrasé, vous forçant à intérioriser le temps absolu plutôt que de dépendre du \"un\".",
    },
    {
      type: 'title',
      text: '3. Silences Stratégiques',
      level: 3,
    },
    {
      type: 'paragraph',
      html: "Une technique avancée consiste à régler le métronome à la moitié de la vitesse (ex. 60 BPM si vous jouez à 120) et à sentir chaque clic comme les temps 1 et 3. Encore plus difficile : le sentir uniquement comme les contre-temps. Cela développe votre <strong>horloge intérieure</strong>.",
    },
    {
      type: 'title',
      text: 'Curiosités sur le Tempo',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Le tempo affecte radicalement la perception émotionnelle de la musique.',
    },
    {
      type: 'table',
      headers: ['Terme italien', 'BPM approx.', 'Caractère'],
      rows: [
        ['Largo', '40 – 60', 'Lent et solennel'],
        ['Andante', '76 – 108', 'Allure marchée, calme'],
        ['Allegro', '120 – 156', 'Rapide, brillant et joyeux'],
        ['Presto', '168 – 200', 'Très rapide, frénétique'],
      ],
    },
    {
      type: 'title',
      text: 'Technologie derrière ce Métronome',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Ce n'est pas un lecteur de MP3 en boucle. Nous générons des ondes sinusoïdales pures en temps réel. L'oscillateur principal crée un ton de <strong>1000 Hz</strong> pour l'accent et <strong>800 Hz</strong> pour les temps faibles, avec une enveloppe ADSR ultra-courte pour une attaque maximale. Cela garantit une attaque sonore instantanée.",
    },
    {
      type: 'paragraph',
      html: "Que vous soyez un batteur qui cherche à verrouiller le groove, un pianiste travaillant des gammes, ou un guitariste en train de peaufiner un solo, ce métronome est votre allié silencieux (jusqu'à ce que vous appuyiez sur play).",
    },
    {
      type: 'tip',
      title: 'Pas de son sur mobile ?',
      html: "Si vous êtes sur iPhone/iPad, assurez-vous que <strong>l'interrupteur de silence</strong> latéral n'est pas activé. La technologie Web Audio respecte le mode silencieux du système sur de nombreux appareils.",
    },
  ],
};
