import { createGuitarStringTensionContent } from './content-factory';

const title = 'Calculadora de tensão das cordas da guitarra';
const slug = 'calculadora-tensao-cordas-guitarra';
const description = 'Estime a tensão de cada corda da guitarra com base no calibre, na escala e na afinação. Compare jogos completos offline em unidades métricas ou imperiais.';

export const content = createGuitarStringTensionContent({
  slug,
  title,
  description,
  ui: {
    metric: 'Métrico', imperial: 'Imperial', metricLength: 'Escala em mm', imperialLength: 'Escala em polegadas', metricGauge: 'Calibre em mm', imperialGauge: 'Calibre em mil', metricTension: 'kg-força', imperialTension: 'libras-força', chooseSet: 'Escolha um jogo de cordas', scaleLength: 'Escala', tuning: 'Afinação', material: 'Material da corda', customSet: 'Editar calibres', presetHint: 'Comece pelo jogo mais parecido', gauge: 'Calibre', note: 'Nota', frequency: 'Frequência', tension: 'Tensão', status: 'Sensação', totalTension: 'Tração total no braço', averageTension: 'Média por corda', tensionSpread: 'Diferença entre a mais solta e a mais firme', low: 'Solta', balanced: 'Equilibrada', high: 'Firme', standard: 'Mi padrão', halfStepDown: 'Um semitom abaixo', dropD: 'Drop D', wholeStepDown: 'Um tom abaixo', openG: 'Open G', steel: 'Aço', nickel: 'Aço niquelado', phosphorBronze: 'Bronze fosforoso', nylon: 'Nylon', presetExtraLight: 'Extra light', presetRegular: 'Regular', presetMedium: 'Medium', presetHeavy: 'Heavy', presetCustom: 'Editar calibres', shortScale: 'Escala curta 24,75 polegadas', fenderScale: 'Escala Fender 25,5 polegadas', martinScale: 'Escala Martin 25,4 polegadas', customScale: 'Escala personalizada', customScaleHint: 'Use o comprimento vibrante entre a pestana e a ponte', formulaNote: 'A estimativa usa T = 4L²f²μ, em que μ é a massa por unidade de comprimento inferida do diâmetro e da densidade do material.', modelNote: 'Esta estimativa offline usa um modelo de densidade do aço. Núcleos, enrolamentos, revestimentos e massas lineares do fabricante podem alterar a tensão real. Verifique os dados do fabricante antes de mudar a regulagem do instrumento.', faqTitle: 'Perguntas sobre a tensão das cordas', bibliographyTitle: 'Fontes do modelo de tensão', tableLabel: 'Leitura da tensão de cada corda', tensionMapLabel: 'Perfil de tensão das seis cordas',
  },
  faq: [
    { question: 'O que uma calculadora de tensão de cordas precisa?', answer: 'Ela precisa da escala vibrante, da altura de cada nota, do calibre e de uma estimativa coerente da densidade do material. Um preset fornece os seis calibres, enquanto a afinação muda as frequências de destino.' },
    { question: 'Uma escala de guitarra mais longa aumenta a tensão?', answer: 'Sim. Com o mesmo calibre e a mesma nota, a tensão cresce com o quadrado do comprimento vibrante. O mesmo jogo 10-46 pode parecer mais firme numa escala de 25,5 polegadas do que numa de 24,75.' },
    { question: 'Como a mudança de afinação afeta a tensão?', answer: 'Baixar uma corda reduz a tensão pelo quadrado da proporção entre as frequências. Um tom abaixo mantém cerca de 79% da tensão original e um semitom abaixo cerca de 89%.' },
    { question: 'Os resultados são exatos para cordas encapadas?', answer: 'Não. O modelo trata a corda como um cilindro com a densidade do material. Cordas encapadas têm núcleo, enrolamentos e revestimentos, por isso as tabelas de massa linear do fabricante são mais precisas.' },
    { question: 'Que tensão de corda é confortável?', answer: 'Não existe um valor universal. A ferramenta marca valores abaixo de 8 libras como soltos e acima de 25 libras como firmes para mostrar extremos. O estilo, a regulagem e o instrumento continuam decisivos.' },
    { question: 'Posso usar o resultado para aprovar um jogo novo?', answer: 'Use-o para comparar cenários, não como garantia de segurança. Consulte as orientações do fabricante do instrumento e as especificações das cordas antes de mudar muito o calibre ou a afinação.' },
  ],
  howTo: [
    { name: 'Escolha o sistema de medida', text: 'Escolha Métrico para milímetros e quilogramas-força ou Imperial para polegadas, mil e libras-força. A regulagem física permanece igual ao alternar.' },
    { name: 'Escolha a escala e a afinação', text: 'Selecione a escala mais próxima e depois a afinação usada. Use Escala personalizada quando souber o comprimento vibrante.' },
    { name: 'Selecione ou edite os calibres', text: 'Comece com um preset 9-42, 10-46, 11-49 ou 12-54. Abra Editar calibres para comparar um jogo misto ou uma sexta personalizada.' },
    { name: 'Leia o perfil de tensão', text: 'Compare cada corda, a tração total no braço e a diferença entre os extremos. As marcas Solta e Firme indicam os valores que merecem revisão.' },
  ],
  seo: [
    { type: 'summary', title: 'O que esta calculadora compara', items: ['A tensão das seis cordas a partir de um preset ou dos seus calibres', 'Mudanças de escala e afinação mostradas como um novo perfil', 'Leituras métricas e imperiais em quilogramas-força ou libras-força', 'Marcas de cordas soltas e firmes para encontrar extremos'] },
    { type: 'title', text: 'O que a tensão revela sobre a regulagem da guitarra', level: 2 },
    { type: 'paragraph', html: 'A tensão é a força que mantém uma corda numa altura definida. Ela não depende apenas do calibre: a nota e o comprimento vibrante também alteram a força. O perfil do jogo mostra se uma corda está muito mais solta ou firme do que as vizinhas.' },
    { type: 'title', text: 'O modelo físico da estimativa', level: 2 },
    { type: 'paragraph', html: 'Uma corda vibrante relaciona frequência, comprimento vibrante e massa linear. A relação T = 4L²f²μ é o modelo usado; a massa linear é estimada a partir de uma secção circular e de um modelo de densidade do aço.' },
    { type: 'title', text: 'Por que os dados do fabricante continuam importantes', level: 2 },
    { type: 'paragraph', html: 'Cordas encapadas combinam núcleo e enrolamentos, e o revestimento muda a massa linear. Use o resultado como laboratório de comparação e a tabela do fabricante como referência para a instalação. Assim fica mais fácil antecipar a resposta ao toque e comparar jogos antes da compra.' },
    { type: 'list', items: ['Use a escala das especificações ou meça da pestana à ponte.', 'Escolha a afinação que realmente vai usar.', 'Comece pelo preset mais próximo e edite apenas as cordas que pretende mudar.', 'Confira os valores e a diferença e valide os dados do fabricante.'] },
  ],
});
