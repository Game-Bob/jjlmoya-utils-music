import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PhaseDistanceUI } from '../ui';

const slug = 'calculadora-distancia-de-fase';
const title = 'Calculadora de Distância de Fase para Microfones';
const description =
  'Calcule o atraso e a compensação necessários para alinhar microfones. Evite o cancelamento de fase e a filtragem de pente com precisão ao nível do sample e ajuste de temperatura.';

const faqData = [
  {
    question: 'O que é o cancelamento de fase no áudio?',
    answer:
      'É um fenómeno acústico que ocorre quando dois sinais da mesma fonte chegam em momentos diferentes. As ondas interferem entre si e, se estiverem desalinhadas em 180 graus, cancelam-se mutuamente, tornando o som magro e sem corpo.',
  },
  {
    question: 'Por que razão a temperatura afeta o cálculo?',
    answer:
      'Porque o som viaja através do ar e a densidade do ar muda com a temperatura. Quanto mais quente estiver, mais rápido o som viaja. Um ajuste preciso de temperatura permite calcular o atraso exato entre microfones separados.',
  },
  {
    question: 'Inverter a fase é o mesmo que inverter a polaridade?',
    answer:
      'Tecnicamente não, embora os termos sejam usados indistintamente. A polaridade é uma alteração elétrica (rotação de 180°), enquanto a fase é um deslocamento temporal. A nossa ferramenta permite simular ambos para encontrar o ponto de maior coerência sonora.',
  },
  {
    question: 'O que é a filtragem de pente (Comb Filtering)?',
    answer:
      'É a resposta de frequência que resulta da combinação de um sinal com uma versão atrasada de si mesmo. Cria uma série de picos e vales - como os dentes de um pente - que alteram drasticamente o timbre do instrumento.',
  },
  {
    question: 'Qual é a regra de 3 para 1 na técnica de microfones?',
    answer:
      'É uma técnica para minimizar problemas de fase: ao usar dois microfones para fontes diferentes, a distância entre os microfones deve ser de pelo menos três vezes a distância de cada microfone à sua fonte.',
  },
  {
    question: 'É melhor alinhar microfones fisicamente ou com software?',
    answer:
      'Um bom alinhamento físico durante a gravação é sempre preferível para evitar artefactos. No entanto, o atraso digital no DAW fornece uma precisão ao nível do sample que é quase impossível de obter movendo microfones manualmente.',
  },
];

const howToData = [
  {
    name: 'Meça as distâncias',
    text: 'Meça a distância física da fonte de som (por exemplo, a caixa) a cada um dos microfones que está a utilizar.',
  },
  {
    name: 'Ajuste o ambiente',
    text: 'Insira a temperatura ambiente e a taxa de amostragem do seu projeto para obter cálculos baseados na física real.',
  },
  {
    name: 'Analise o gráfico',
    text: 'Observe o visualizador da resposta de frequência para identificar possíveis cancelamentos críticos na faixa audível.',
  },
  {
    name: 'Aplique a compensação',
    text: 'Copie o valor em milissegundos ou samples e insira-o no plugin de atraso no seu canal para alinhar perfeitamente as faixas.',
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
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  ui: {
    labelTemp: 'Temperatura (°C) / Som',
    btnAuto: 'Auto',
    labelSampleRate: 'Taxa de amostragem (kHz)',
    labelUnits: 'Sistema de unidades',
    optMetric: 'Métrico (m/cm)',
    optImperial: 'Imperial (ft/in)',
    labelDistA: 'Distância do microfone A',
    labelDistB: 'Distância do microfone B',
    labelPresets: 'Predefinições rápidas',
    presetCoincident: 'Coincidente (XY)',
    presetSnare: 'Caixa',
    presetAmbient: 'Ambiente',
    btnInvert: 'Inverter fase (Φ)',
    labelGain: 'Ganho relativo Mic B:',
    btnCopy: 'Copiar samples',
    labelDelay: 'Atraso necessário',
    unitMs: 'milissegundos (ms)',
    labelCompensation: 'Compensação',
    unitSamples: 'Samples',
    labelPhaseStatus: 'Estado da fase',
    textLoading: 'A carregar...',
    statusInPhase: 'EM FASE',
    statusInPhaseDesc: 'Sinais perfeitamente alinhados.',
    statusCritical: 'CANCELAMENTO CRÍTICO',
    statusCriticalDesc: 'Filtragem de pente significativa na faixa dos graves/médios.',
    statusOffAxis: 'FORA DE EIXO',
    statusOffAxisDesc: 'Ligeiro desfasamento de fase. Textura modificada.',
    warningCritical: 'POSSÍVEL CANCELAMENTO CRÍTICO',
    labelSoundSpeed: 'Velocidade do som',
    labelDistDiff: 'Diferença de distância',
    labelNullFreq: 'Primeiros nulos',
    textNone: 'Nenhum',
    chartTitle: 'RESPOSTA DE FREQUÊNCIA (H) - FILTRAGEM DE PENTE',
    promptSoundSpeed: 'Velocidade do som (m/s):',
    copyFeedback: 'Copiado!',
  },
  seo: [
    {
      type: 'summary',
      title: 'Funcionalidades da calculadora',
      items: [
        'Cálculo físico exato com ajuste de temperatura para a velocidade do som',
        'Resultado em milissegundos e samples para compensação em DAW',
        'Visualizador Canvas do filtrado de pente em todo o espetro audível',
        'Predefinições de microfones (XY coincidente, caixa, ambiente)',
        'Simulação de inversão de fase e controlo de ganho relativo',
        'Suporte para unidades métricas e imperiais',
      ],
    },
    {
      type: 'title',
      text: 'O que é o cancelamento de fase e por que arruína as suas misturas?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'No mundo da engenharia de som, a fase é um dos conceitos mais críticos e, paradoxalmente, um dos mais negligenciados pelos iniciantes. Quando grava uma fonte de som - como uma bateria ou um amplificador de guitarra - com dois ou mais microfones colocados a distâncias diferentes, as ondas sonoras não chegam às cápsulas ao mesmo tempo. Esta diferença de tempo, por menor que seja, causa um fenómeno conhecido como <strong>desfasamento</strong>.',
    },
    {
      type: 'title',
      text: 'O fenómeno do Filtrado de Pente (Comb Filtering)',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Quando dois sinais idênticos são combinados com um ligeiro atraso entre eles, surge uma série de picos e vales na resposta de frequência. Olhando para um analisador de espetro, o padrão assemhe-se aos dentes de um pente - daí o nome. Este efeito altera drasticamente e de forma destrutiva o timbre natural do instrumento.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Impacto nos graves',
          description:
            'O cancelamento de fase é mais devastador nas baixas frequências, onde o corpo do som desaparece por completo.',
        },
        {
          title: 'Textura metálica',
          description:
            'A filtragem de pente adiciona uma coloração artificial que soa vazia ou excessivamente processada.',
        },
      ],
    },
    {
      type: 'title',
      text: 'A influência da temperatura no cálculo',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Muitos engenheiros de som esquecem-se de que o ar é um meio físico e a sua densidade muda com a temperatura. A velocidade do som não é uma constante imutável - a 20°C viaja a aproximadamente 343 metros por segundo.',
    },
    {
      type: 'code',
      code: 'v = 331.3 + (0.606 × T)',
      ariaLabel: 'Fórmula da velocidade do som segundo a temperatura',
    },
    {
      type: 'tip',
      title: 'Compensação Cirúrgica',
      html: 'Poucos graus de diferença podem deslocar os pontos de cancelamento vários hertz. Utilizar a nossa calculadora com a temperatura real do seu estúdio garante um alinhamento perfeito no DAW.',
    },
    {
      type: 'title',
      text: 'Cenários críticos de gravação',
      level: 2,
    },
    {
      type: 'list',
      items: [
        'Caixa (Top e Bottom): Alinhe temporalmente ambas as peles para maximizar o punch.',
        'Overheads e microfones próximos: Atrase os microfones próximos para coincidir com a fase dos overheads.',
        'Guitarras com múltiplos microfones: Misture um dinâmico e um de fita sem perder os médios-graves.',
        'Baixo por DI e microfone: Sincronize o sinal direto com o do amplificador para obter um som massivo.',
      ],
    },
    {
      type: 'title',
      text: 'Alinhamento Físico vs. Processamento Digital',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Embora a nossa ferramenta forneça os valores para corrigir a fase no seu DAW após a gravação, recomendamos sempre tentar o melhor alinhamento físico possível no estúdio. Mover um microfone alguns milímetros pode ser mais eficaz do que qualquer processamento digital.',
    },
    {
      type: 'stats',
      items: [
        { label: 'Velocidade a 20°C', value: '343.2 m/s' },
        { label: 'Milisegundos/cm', value: '0.029 ms' },
        { label: 'Samples a 48kHz', value: '1.4 por cm' },
      ],
    },
    {
      type: 'title',
      text: 'Tabela de referência: Distância vs. Primeiro Nulo',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Diferença (cm)', 'Atraso (ms)', '1° Nulo (Hz)', 'Afeta...'],
      rows: [
        ['1 cm', '0.029', '17160', 'Extremo agudo'],
        ['5 cm', '0.146', '3432', 'Médios-altos (Presença)'],
        ['10 cm', '0.291', '1716', 'Médios (Presença)'],
        ['30 cm', '0.874', '572', 'Médios-graves (Cuerpo)'],
        ['1 metro', '2.914', '172', 'Graves (Fundamental)'],
      ],
    },
    {
      type: 'title',
      text: 'Vantagens e desvantagens dos métodos de correção',
      level: 2,
    },
    {
      type: 'proscons',
      items: [
        {
          pro: 'Alinhamento físico: Menor degradação do sinal original.',
          con: 'Alinhamento físico: Difícil de ajustar com precisão micrométrica.',
        },
        {
          pro: 'Correção digital: Precisão absoluta ao nível do sample.',
          con: 'Correção digital: Pode criar pré-eco se aplicado incorretamente.',
        },
        {
          pro: 'Inversão de polaridade: Solução instantânea para cancelamentos de 180°.',
          con: 'Inversão de polaridade: Não corrige desfasamentos intermédios.',
        },
        {
          pro: 'Compensação temporal: Recupera o impacto e o punch perdidos.',
          con: 'Compensação temporal: Requer a medição precisa de cada microfone.',
        },
      ],
    },
    {
      type: 'tip',
      title: 'Como detetar problemas de fase de ouvido?',
      html: 'Pressione o botão "Inverter fase" (Φ). Se ao ativá-lo o som ganhar corpo e graves, significa que os microfones estavam fora de fase. Se o som desaparecer ou se tornar mais magro, estavam corretamente alinhados.',
    },
    {
      type: 'title',
      text: 'Compatibilidade Mono e Perceção Estéreo',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Nas gravações estéreo, a relação de fase define a estabilidade da imagem sonora. Se houver graves inconsistências, o som pode desaparecer por completo quando a mistura for reproduzida num sistema mono. A nossa calculadora ajuda a prever quais frequências sofrerão mais quando os canais forem somados.',
    },
  ],
};
