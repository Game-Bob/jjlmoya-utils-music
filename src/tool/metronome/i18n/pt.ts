import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MetronomeUI } from '../ui';

const slug = 'metronomo';
const title = 'Metrônomo Online: Alta Precisão Visual e Sonora';
const description =
  'Metrônomo online gratuito para músicos. Precisão de milissegundos com Web Audio API. Visual, sonoro e Tap Tempo. Perfeito para praticar qualquer instrumento.';

const faqData = [
  {
    question: 'Este metrônomo é preciso o suficiente para uso profissional?',
    answer:
      'Sim. Usamos a API Web Audio, que agenda os sons diretamente no relógio de hardware do dispositivo. Isso evita os micro-atrasos típicos de outras aplicações web e garante precisão de milissegundos, mesmo em sessões longas.',
  },
  {
    question: 'O que é Tap Tempo e como eu o uso?',
    answer:
      'É um recurso que permite calcular o BPM batendo ritmicamente. Basta clicar no botão "TAP" ou pressionar a barra de espaço no ritmo da música que você está ouvindo para obter instantaneamente o tempo exato.',
  },
  {
    question: 'Posso alterar a fórmula de compasso e as acentuações?',
    answer:
      'Sim, você pode configurar diferentes fórmulas de compasso (2/4, 3/4, 4/4, 6/8, etc.) e personalizar as acentuações das batidas para combinar com o estilo de música que está praticando.',
  },
  {
    question: 'Por que não consigo ouvir nada no meu iPhone ou iPad?',
    answer:
      'Em dispositivos iOS, a tecnologia Web Audio respeita a chave física de silêncio. Certifique-se de que seu telefone não está no modo silencioso e aumente o volume de mídia para ouvir os cliques.',
  },
];

const howToData = [
  {
    name: 'Defina o BPM',
    text: 'Use o controle deslizante ou os botões de ajuste fino para definir a velocidade desejada em batidas por minuto.',
  },
  {
    name: 'Configure a fórmula de compasso',
    text: 'Escolha a contagem de batidas (ex: 4/4 ou 3/4) para que o metrônomo acentue corretamente a primeira batida de cada compasso.',
  },
  {
    name: 'Sincronize com música externa (Tap)',
    text: 'Se precisar encontrar o tempo de uma música que está ouvindo, bata no botão TAP junto com a bateria ou a pulsação principal.',
  },
  {
    name: 'Comece a praticar',
    text: 'Pressione o botão iniciar. Os indicadores visuais ajudarão você a manter o ritmo, mesmo que não consiga ouvir claramente o som no seu ambiente.',
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
  faqTitle: 'Perguntas Frequentes',
  faq: faqData,
  bibliographyTitle: 'Referências Técnicas',
  bibliography: [
    {
      name: 'Web Audio API – MDN Web Docs',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API',
    },
    {
      name: 'AudioContext – MDN Web Docs',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/AudioContext',
    },
    {
      name: 'A Tale of Two Clocks – Scheduling Web Audio with Precision (web.dev)',
      url: 'https://web.dev/articles/audio-scheduling',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  ui: {
    labelTempo: 'Tempo',
    labelBpmMin: '40 BPM',
    labelBpmMax: '240 BPM',
    labelTime: 'Fórm. Compasso',
    labelTap: 'Tap Tempo',
    btnTap: 'TAP',
    warningTitle: 'Sem som?',
    warningText:
      'Se você estiver no iPhone/iPad, certifique-se de que a chave lateral de silêncio não está ativa. A tecnologia Web Audio respeita o modo silencioso do sistema em muitos dispositivos.',
  },
  seo: [
    {
      type: 'summary',
      title: 'Recursos do metrônomo',
      items: [
        'Motor Web Audio API — precisão de milissegundos, sem oscilações',
        'Tap Tempo: calcule o BPM batendo no ritmo',
        'Fórmula de compasso configurável de 1 a 12 batidas com acento automático',
        'Indicador visual de alto contraste com efeito ripple',
        'Controle de volume e botões de ajuste fino de ±1/±5 BPM',
      ],
    },
    {
      type: 'title',
      text: 'Precisão Rítmica no seu Navegador',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Bem-vindo ao <strong>Metrônomo Online Definitivo</strong>. Construímos esta ferramenta com um objetivo em mente: <em>confiabilidade</em>. Ao contrário de outros metrônomos web que sofrem com "oscilações" (pequenos atrasos cumulativos) devido à carga do processador, nosso motor de som é construído diretamente na <strong>Web Audio API</strong>.',
    },
    {
      type: 'paragraph',
      html: 'Isso significa que os pulsos sonoros são agendados com antecedência no relógio de hardware do seu dispositivo, garantindo uma <strong>precisão inabalável de milissegundos</strong>, mesmo se você minimizar a guia ou se o computador estiver ocupado.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Visualização Clara',
          description:
            'Indicadores visuais amplos e de alto contraste com efeito "ripple". Projetados para serem percebidos com sua visão periférica, permitindo que você mantenha os olhos na partitura ou no instrumento sem perder o ritmo.',
        },
        {
          title: 'Smart Tap Tempo',
          description:
            'Ouvindo uma música e quer saber a velocidade dela? Pressione o botão TAP ou a tecla Espaço junto com a música. O algoritmo calculará a média exata das suas batidas.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Guia Mestre: Como Praticar com um Metrônomo',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'O metrônomo não é apenas um relógio que faz tique-taque; é o juiz mais imparcial da sua técnica. Aqui está uma metodologia comprovada para melhorar sua velocidade e clareza:',
    },
    {
      type: 'title',
      text: '1. O Método da Escada',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Se o seu objetivo é tocar a <strong>120 BPM</strong>, não comece tentando nessa velocidade. É fácil ficar frustrado; progredir requer estratégia.',
    },
    {
      type: 'list',
      items: [
        'Comece com 50% da sua velocidade alvo (ex: 60 BPM).',
        'Toque a passagem perfeitamente 3 vezes seguidas. Se errar uma nota, o contador reinicia.',
        'Aumente o metrônomo em apenas 5 BPM.',
        'Repita até atingir sua velocidade alvo.',
      ],
    },
    {
      type: 'title',
      text: '2. Deslocamento de Acento',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Use nosso seletor de fórmula de compasso para deslocar o acento. Praticar uma passagem 4/4 com o metrônomo definido para 3/4 significa que o acento (o clique agudo) cai em lugares diferentes dentro do seu fraseio, forçando você a internalizar o tempo absoluto em vez de depender da batida "um".',
    },
    {
      type: 'title',
      text: '3. Silêncios Estratégicos',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Uma técnica avançada é definir o metrônomo para metade da velocidade (ex: 60 BPM se você toca a 120) e sentir cada clique como as batidas 1 e 3. Ainda mais difícil: sinta-o apenas como contratempos (off-beats). Isso constrói seu <strong>relógio interno</strong>.',
    },
    {
      type: 'title',
      text: 'Fatos Curiosos sobre o Tempo',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'O tempo afeta radicalmente a percepção emocional da música.',
    },
    {
      type: 'table',
      headers: ['Termo em Italiano', 'BPM Aprox.', 'Caráter'],
      rows: [
        ['Largo', '40 – 60', 'Lento e solene'],
        ['Andante', '76 – 108', 'Passo de caminhada, calmo'],
        ['Allegro', '120 – 156', 'Rápido, brilhante e alegre'],
        ['Presto', '168 – 200', 'Muito rápido, frenético'],
      ],
    },
    {
      type: 'title',
      text: 'Tecnologia por Trás deste Metrônomo',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Este não é um player de MP3 em loop. Estamos gerando ondas senoidais puras em tempo real. O oscilador principal cria um tom de <strong>1000 Hz</strong> para o acento e <strong>800 Hz</strong> para as batidas fracas, com um envelope ADSR ultra-curto para o máximo de punch. Isso garante um ataque sonoro instantâneo.',
    },
    {
      type: 'paragraph',
      html: 'Seja você um baterista mantendo o groove, um pianista trabalhando em escalas ou um guitarrista aperfeiçoando um solo, este metrônomo é seu parceiro silencioso (até você apertar o play).',
    },
    {
      type: 'tip',
      title: 'Não consegue ouvir o som no celular?',
      html: 'Se você estiver no iPhone/iPad, certifique-se de que a <strong>chave lateral de silêncio</strong> não está ativada. A tecnologia Web Audio respeita o modo silencioso do sistema em muitos dispositivos.',
    },
  ],
};
