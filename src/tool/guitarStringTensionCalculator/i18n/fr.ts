import { createGuitarStringTensionContent } from './content-factory';

const title = 'Calculateur de tension des cordes de guitare';
const slug = 'calculateur-tension-cordes-guitare';
const description = 'Estimez la tension de chaque corde de guitare selon son tirant, le diapason et l accordage. Comparez des jeux complets hors ligne en unités métriques ou impériales.';

export const content = createGuitarStringTensionContent({
  slug,
  title,
  description,
  ui: {
    metric: 'Métrique', imperial: 'Impérial', metricLength: 'Diapason en mm', imperialLength: 'Diapason en pouces', metricGauge: 'Tirant en mm', imperialGauge: 'Tirant en mil', metricTension: 'kg-force', imperialTension: 'livres-force', chooseSet: 'Choisir un jeu de cordes', scaleLength: 'Diapason', tuning: 'Accordage', material: 'Matière de la corde', customSet: 'Modifier les tirants', presetHint: 'Commencez par le jeu le plus proche', gauge: 'Tirant', note: 'Note', frequency: 'Fréquence', tension: 'Tension', status: 'Sensation', totalTension: 'Traction totale sur le manche', averageTension: 'Moyenne par corde', tensionSpread: 'Écart de la plus souple à la plus ferme', low: 'Souple', balanced: 'Équilibrée', high: 'Ferme', standard: 'Mi standard', halfStepDown: 'Un demi-ton plus bas', dropD: 'Drop D', wholeStepDown: 'Un ton plus bas', openG: 'Open G', steel: 'Acier', nickel: 'Acier nickelé', phosphorBronze: 'Bronze phosphoreux', nylon: 'Nylon', presetExtraLight: 'Extra léger', presetRegular: 'Regular', presetMedium: 'Medium', presetHeavy: 'Heavy', presetCustom: 'Modifier les tirants', shortScale: 'Diapason court 24,75 pouces', fenderScale: 'Diapason Fender 25,5 pouces', martinScale: 'Diapason Martin 25,4 pouces', customScale: 'Diapason personnalisé', customScaleHint: 'Utilisez la longueur vibrante entre le sillet et le chevalet', formulaNote: 'L estimation utilise T = 4L²f²μ, où μ est la masse par unité de longueur déduite du diamètre et de la densité du matériau.', modelNote: 'Cette estimation hors ligne utilise un modèle de densité de l acier. Les âmes, filés, revêtements et masses linéiques du fabricant peuvent modifier la tension réelle. Vérifiez les données du fabricant avant de modifier le réglage de l instrument.', faqTitle: 'Questions sur la tension des cordes', bibliographyTitle: 'Sources du modèle de tension', tableLabel: 'Lecture de tension de chaque corde', tensionMapLabel: 'Profil de tension des six cordes',
  },
  faq: [
    { question: 'De quoi a besoin un calculateur de tension de corde?', answer: 'Il a besoin du diapason vibrant, de la hauteur de chaque note, du tirant et d une estimation cohérente de la densité du matériau. Un preset fournit les six tirants et l accordage modifie les fréquences cibles.' },
    { question: 'Un diapason plus long augmente-t-il la tension?', answer: 'Oui. À tirant et note identiques, la tension augmente avec le carré de la longueur vibrante. Le même jeu 10-46 peut donc sembler plus ferme sur 25,5 pouces que sur 24,75 pouces.' },
    { question: 'Comment un changement d accordage agit-il sur la tension?', answer: 'Abaisser une corde réduit sa tension selon le carré du rapport des fréquences. Un ton plus bas conserve environ 79 % de la tension initiale et un demi-ton plus bas environ 89 %.' },
    { question: 'Les résultats sont-ils exacts pour les cordes filées?', answer: 'Non. Le modèle traite la corde comme un cylindre utilisant la densité du matériau. Les cordes filées ont une âme, des tours et des revêtements: les tableaux de masse linéique du fabricant sont donc plus précis.' },
    { question: 'Quelle tension de corde est confortable?', answer: 'Il n existe pas de valeur universelle. L outil marque les valeurs sous 8 livres comme souples et celles au-dessus de 25 livres comme fermes pour repérer les extrêmes. Le jeu, le réglage et l instrument restent déterminants.' },
    { question: 'Puis-je valider un nouveau jeu avec ce résultat?', answer: 'Utilisez-le pour comparer des scénarios, pas comme garantie de sécurité. Consultez les recommandations du fabricant de l instrument et les spécifications des cordes avant un changement important de tirant ou d accordage.' },
  ],
  howTo: [
    { name: 'Choisir le système de mesure', text: 'Choisissez Métrique pour les millimètres et les kilogrammes-force, ou Impérial pour les pouces, les mil et les livres-force. Le réglage physique reste identique.' },
    { name: 'Choisir le diapason et l accordage', text: 'Sélectionnez le diapason le plus proche puis l accordage utilisé. Utilisez Diapason personnalisé si la longueur vibrante est connue.' },
    { name: 'Choisir ou modifier les tirants', text: 'Commencez avec un preset 9-42, 10-46, 11-49 ou 12-54. Ouvrez Modifier les tirants pour tester un jeu mixte ou une grosse corde personnalisée.' },
    { name: 'Lire le profil de tension', text: 'Comparez chaque corde, la traction totale sur le manche et l écart entre les extrêmes. Les badges Souple et Ferme indiquent les valeurs à contrôler.' },
  ],
  seo: [
    { type: 'summary', title: 'Ce que compare ce calculateur', items: ['La tension des six cordes depuis un preset ou vos propres tirants', 'Les changements de diapason et d accordage dans un nouveau profil', 'Des lectures métriques et impériales en kilogrammes-force ou livres-force', 'Des marqueurs souples et fermes pour repérer les extrêmes'] },
    { type: 'title', text: 'Ce que la tension révèle sur le réglage d une guitare', level: 2 },
    { type: 'paragraph', html: 'La tension est la force nécessaire pour maintenir une corde à une hauteur donnée. Elle ne dépend pas du tirant seul: la note et la longueur vibrante comptent aussi. Le profil du jeu montre si une corde est beaucoup plus souple ou ferme que ses voisines.' },
    { type: 'title', text: 'Le modèle physique de l estimation', level: 2 },
    { type: 'paragraph', html: 'Une corde vibrante relie fréquence, longueur vibrante et masse linéique. La relation T = 4L²f²μ donne le modèle utilisé ici. La masse linéique est estimée à partir d une section circulaire et d un modèle de densité de l acier.' },
    { type: 'title', text: 'Pourquoi les données du fabricant restent importantes', level: 2 },
    { type: 'paragraph', html: 'Les cordes filées associent une âme et des tours; le revêtement et la construction changent leur masse linéique. Utilisez donc le résultat comme laboratoire de comparaison et la fiche du fabricant comme référence d installation.' },
    { type: 'list', items: ['Relevez le diapason dans les spécifications ou mesurez du sillet au chevalet.', 'Choisissez l accordage réellement utilisé.', 'Commencez par le preset le plus proche et modifiez seulement les cordes prévues.', 'Contrôlez les valeurs et l écart puis vérifiez les données du fabricant.'] },
  ],
});
