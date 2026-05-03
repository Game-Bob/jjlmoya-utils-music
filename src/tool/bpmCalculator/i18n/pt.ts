import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BpmCalculatorUI } from '../ui';

const slug = 'calculadora-bpm-para-milissegundos';
const title = 'Calculadora de BPM para Milissegundos para Delay e Reverb';
const description =
  'Converta o tempo do seu projeto (BPM) em tempos de delay exatos (ms) e frequências (Hz). A ferramenta essencial para ajustar delays, reverbs e compressores com precisão rítmica.';

const faqData = [
  {
    question: 'O que é o Pre-delay em um reverb?',
    answer:
      'O Pre-delay é o tempo entre o som direto (fonte) e o início da cauda do reverb. Ajustá-lo ritmicamente permite que a fonte original permaneça clara antes que o efeito espacial assuma o controle — vital para vocais e percussão.',
  },
  {
    question: 'Como funciona o Tap Tempo?',
    answer:
      'O Tap Tempo detecta o andamento clicando ritmicamente junto com uma música. Cada clique é cronometrado e o sistema faz a média dos intervalos para fornecer o BPM exato. É a maneira mais rápida de sincronizar efeitos a uma faixa externa.',
  },
  {
    question: 'Por que usar milissegundos em vez de sincronização automática?',
    answer:
      "Existem três razões principais: uso de hardware analógico sem MIDI, ajuste fino de pre-delays para que o reverb 'respire', e ajustes de 'groove' onde os efeitos são ligeiramente deslocados da grade para evitar uma sensação estática e robótica.",
  },
  {
    question: 'Para que é usado o valor de Hz rítmico?',
    answer:
      'Os valores em Hertz indicam quantas vezes algo acontece por segundo. Eles são essenciais para configurar osciladores LFO, taxas de sweep de phaser ou modulação de filtro em sintetizadores que não possuem sincronização de tempo nativa.',
  },
];

const howToData = [
  {
    name: 'Insira o BPM',
    text: 'Digite o tempo do seu projeto no campo central ou use o botão Tap Tempo.',
  },
  {
    name: 'Encontre a subdivisão',
    text: 'Localize a nota que você precisa (semínima, colcheia, etc.) nas tabelas de notas simples, pontuadas ou tercinas.',
  },
  {
    name: 'Copie o valor',
    text: 'Clique no ícone de cópia ao lado do valor em milissegundos para colá-lo diretamente no seu plugin ou hardware.',
  },
  {
    name: 'Ajuste o Pre-delay',
    text: 'Use a seção inferior para valores ultra-curtos, ideais para separar o reverb da voz principal.',
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
    labelTempo: 'ANDAMENTO (BPM)',
    btnTap: 'TAP TEMPO',
    sectionDelay: 'Tempos de Delay',
    sectionDotted: 'Notas Pontuadas',
    sectionTriplets: 'Tercinas',
    sectionReverb: 'Design de Reverb (Pre-delay)',
    colNote: 'Nota',
    colMs: 'ms',
    colHz: 'Hz',
    infoPreDelay:
      'O <strong>Pre-delay</strong> separa o ataque original da cauda do reverb para ganhar clareza.',
    copyAriaMs: 'Copiar milissegundos',
    copyAriaPreDelay: 'Copiar pre-delay',
    copyFeedback: 'Copiado!',
  },
  seo: [
    {
      type: 'summary',
      title: 'Recursos da calculadora',
      items: [
        'Cálculo instantâneo para notas simples, pontuadas e tercinas',
        'Valores em milissegundos e Hz para cada subdivisão rítmica',
        'Seção de Pre-delay para design de reverb com precisão musical',
        'Tap Tempo: detecte o BPM clicando no ritmo da música',
        'Cópia com um clique para a área de transferência para qualquer DAW ou plugin',
      ],
    },
    {
      type: 'title',
      text: 'Por que uma Calculadora de BPM para Milissegundos é essencial?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Na produção musical moderna, a precisão rítmica separa uma mixagem amadora de uma profissional. Embora a maioria das DAWs como Ableton Live, FL Studio ou Logic Pro incluam sincronização automática para seus efeitos, existem inúmeras situações em que o controle manual é superior.',
    },
    {
      type: 'title',
      text: 'A importância do Pre-delay no Reverb',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Um dos usos mais críticos desta ferramenta é ajustar o <strong>pre-delay</strong>. Se você aplicar um reverb a um vocal sem pre-delay, a cauda do efeito começa imediatamente, nublando as consoantes e reduzindo a clareza. Ao calcular um pre-delay rítmico (como uma nota de 1/64 ou 1/128), você deixa a voz original respirar antes que o espaço acústico artificial assuma o controle. Isso cria uma sensação de profundidade sem sacrificar a presença da fonte.',
    },
    {
      type: 'title',
      text: 'Delay Analógico e Hardware Externo',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Se você coleciona pedais de delay analógicos ou sintetizadores vintage, sabe que muitos não possuem uma entrada de MIDI clock. Ajustar um delay de fita manualmente requer saber exatamente quantos milissegundos correspondem a uma colcheia ou semínima pontuada. Nossa calculadora fornece esses valores instantaneamente, permitindo que você ajuste seu hardware com precisão cirúrgica.',
    },
    {
      type: 'title',
      text: 'Efeitos fora da grade e Groove',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Às vezes, a perfeição matemática soa entediante. Muitos produtores usam valores em milissegundos como ponto de partida e depois os deslocam ligeiramente para cima ou para baixo. Mover um delay de 5 a 10 ms para fora da grade pode adicionar um <em>balanço</em> humano ou um <em>groove</em> único que a quantização rígida nunca poderia replicar.',
    },
    {
      type: 'title',
      text: 'Compressão e LFOs Sincronizados',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Você sabia que os tempos de <strong>Attack</strong> e <strong>Release</strong> de um compressor também podem ser rítmicos? Ajustar o release do compressor do seu barramento de bateria para terminar exatamente antes do próximo batida de bumbo cria um efeito de "pumping" ou <em>respiração</em> que reforça o ritmo da música. Da mesma forma, o valor de Hz é essencial para configurar osciladores de baixa frequência (LFOs) em sintetizadores sem sincronização de tempo nativa.',
    },
    {
      type: 'tip',
      title: 'Como usar o Tap Tempo',
      html: 'O recurso <strong>Tap Tempo</strong> é ideal para situações ao vivo ou quando você está ouvindo uma faixa externa cujo andamento você não conhece. Basta clicar ritmicamente no botão seguindo o pulso da música. Recomendamos pelo menos 4 ou 5 toques para que o algoritmo possa calcular a média do valor com mais precisão.',
    },
    {
      type: 'title',
      text: 'Fórmulas Matemáticas de Tempo',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A fórmula subjacente é simples: <code>ms = 60.000 / BPM</code>. A partir daí, multiplicadores são aplicados para cada subdivisão.',
    },
    {
      type: 'list',
      items: [
        'Notas simples: baseadas na divisão binária (1, 0.5, 0.25, etc.).',
        'Pontuadas: multiplique o valor base por 1.5.',
        'Tercinas: multiplique o valor base por 0.667 (2/3).',
      ],
    },
  ],
};
