import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { AudioStorageCalculatorUI } from '../ui';

const slug = 'calculadora-armazenamento-audio';
const title = 'Calculadora de Armazenamento de Áudio: Tamanho de Arquivos WAV, FLAC e MP3';
const description =
  'Estime o espaço em disco necessário para suas gravações de áudio em WAV, FLAC e MP3 com base na taxa de amostragem e profundidade de bits.';

const faqData = [
  {
    question: 'Quanto espaço ocupa uma hora de áudio a 44.1 kHz 16-bit?',
    answer:
      'Em estéreo (qualidade de CD), uma hora de áudio ocupa aproximadamente 635 MB de espaço em disco não comprimido (WAV/AIFF).',
  },
  {
    question: 'Por que o formato WAV ocupa tanto espaço?',
    answer:
      'WAV é um formato não comprimido "lossless", o que significa que armazena cada amostra de áudio individualmente para preservar a fidelidade máxima sem redução de dados.',
  },
  {
    question: 'O que é melhor para economizar espaço: FLAC ou MP3?',
    answer:
      'O FLAC economiza até 50% de espaço sem perda de qualidade (compressão lossless). O MP3 economiza até 80-90%, mas remove informações de áudio imperceptíveis (compressão lossy).',
  },
  {
    question: 'Como calcular o espaço necessário para um podcast de 2 horas?',
    answer:
      'Se você gravar em Mono a 48 kHz / 24-bit, precisará de cerca de 988 MB. A calculadora permite ajustar esses parâmetros precisamente para o seu equipamento.',
  },
];

const howToData = [
  {
    name: 'Configure o áudio',
    text: 'Escolha a taxa de amostragem (kHz), profundidade de bits e número de canais.',
  },
  {
    name: 'Insira a duração',
    text: 'Insira as horas, minutos e segundos que você estima que a gravação durará.',
  },
  {
    name: 'Analise os resultados',
    text: 'Observe o tamanho resultante em MB ou GB e compare-o com diferentes formatos como FLAC ou MP3.',
  },
  {
    name: 'Avalie a capacidade',
    text: 'Verifique qual porcentagem do armazenamento do seu cartão SD ou disco rígido a gravação ocupará.',
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
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  ui: {
    labelConfig: 'Configuração de Áudio',
    labelHz: 'Taxa de Amostragem (kHz)',
    labelBits: 'Profundidade de Bits',
    labelChannels: 'Canais',
    labelDuration: 'Duração da Gravação',
    labelHours: 'Horas',
    labelMinutes: 'Minutos',
    labelSeconds: 'Segundos',
    labelCapacity: 'Armazenamento Disponível (em GB)',
    toggleLabelSpace: 'Calcular quanto posso gravar com meu espaço livre',
    labelComparison: 'Comparação de Formato e Armazenamento',
    thFormat: 'Formato',
    thQuality: 'Qualidade',
    thSize: 'Tamanho Estimado',
    qualityWav: 'Não Comprimido (Lossless)',
    qualityFlac: 'Compressão Lossless',
    qualityMp3High: 'Alta Qualidade (Lossy)',
    qualityMp3Std: 'Qualidade Padrão / Voz',
    labelDevices: 'Porcentagem usada em dispositivos comuns',
    device32: 'Cartão SD de 32GB',
    device128: 'Armazenamento de 128GB',
    device1tb: 'Disco Rígido de 1TB',
    btnCopy: 'Copiar Resumo',
    optHz44100: '44.1 kHz (CD)',
    optHz48000: '48 kHz (Padrão de Vídeo)',
    optHz88200: '88.2 kHz',
    optHz96000: '96 kHz (Alta Resolução)',
    optHz192000: '192 kHz (Ultra HD)',
    optBits16: '16-bit (CD / Padrão)',
    optBits24: '24-bit (Produtores / Filme)',
    optBits32: '32-bit (Ponto Flutuante)',
    optCh1: 'Mono (1 canal)',
    optCh2: 'Estéreo (2 canais)',
    optCh6: '5.1 Surround (6 canais)',
    optCh8: '7.1 Surround (8 canais)',
    labelDurationSet: 'Duração configurada: {time}',
    labelRecordingPossible: 'Gravação possível com {gb} GB configurados',
    toggleLabelTime: 'Voltar para o cálculo de duração',
    labelSpaceAvailable: 'Espaço Disponível',
    copyDone: 'Resumo Copiado!',
    summarySpace:
      'A gravação de {t} a {bits}-bit/{hz} no modo {channels} ocupará aproximadamente {result}.',
    summaryTime:
      'Com {space} GB disponíveis, você pode gravar até {result} de áudio a {bits}-bit/{hz} {channels}.',
  },
  seo: [
    {
      type: 'summary',
      title: 'Calculadora de Armazenamento de Som Digital',
      items: [
        '<strong>WAV para MP3</strong>: Calcule o tamanho dos arquivos com e sem compressão.',
        '<strong>Resolução de Áudio</strong>: Ajuste a frequência (kHz) e os bits (16/24/32).',
        '<strong>Cálculo reverso</strong>: Quanto posso gravar com meu espaço restante?',
        '<strong>Formatos Profissionais</strong>: Estimativa para FLAC e masterização em 192kHz.',
      ],
    },
    { type: 'title', text: 'Como o tamanho de uma gravação de áudio é calculado?', level: 2 },
    {
      type: 'paragraph',
      html: 'O tamanho de um arquivo de áudio digital não comprimido (como WAV ou AIFF) depende de três fatores técnicos fundamentais: <strong>Taxa de Amostragem</strong> — quantas vezes por segundo a onda sonora é "medida" (ex: 44.1 kHz ou 48 kHz); <strong>Profundidade de Bits</strong> — a resolução de cada medição, com maior faixa dinâmica e menor ruído em bits mais altos; e <strong>Canais</strong> — se a gravação é Mono (1), Estéreo (2) ou Multicanal (Surround). A fórmula matemática padrão é o <strong>Bitrate</strong>; multiplicado pela duração em segundos, resulta no tamanho total do arquivo bruto.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Qualidade de CD',
          description:
            '16-bit / 44.1 kHz. Ocupa aproximadamente 10.1 MB por minuto em estéreo. O padrão histórico da indústria musical.',
        },
        {
          title: 'Gravação Profissional',
          description:
            '24-bit / 48 kHz. O padrão para vídeo e cinema. Ocupa cerca de 16.5 MB por minuto. Mais "headroom" para mixagem.',
        },
        {
          title: 'Alta Resolução',
          description:
            '24-bit / 96 kHz. Usado em masterização. Dobra o tamanho da gravação padrão para até 33 MB por minuto.',
        },
      ],
    },
    { type: 'title', text: 'Por que o áudio de 24 bits ocupa 50% mais espaço que o de 16 bits?', level: 2 },
    {
      type: 'paragraph',
      html: 'Cada amostra de áudio em 16 bits usa 2 bytes (16 ÷ 8) para armazenar a amplitude. O áudio em 24 bits usa 3 bytes por amostra. Isso significa que, para a mesma taxa de amostragem, um arquivo de 24 bits será exatamente 50% maior que um arquivo de 16 bits. Se uma gravação de uma hora em 16 bits/44.1 kHz ocupa 635 MB, a mesma gravação em 24 bits/44.1 kHz subirá para 953 MB.',
    },
    {
      type: 'tip',
      title: 'O espaço extra vale a pena?',
      html: 'Apesar de ocupar mais espaço, o áudio de 24 bits oferece uma faixa dinâmica de 144 dB contra 96 dB do de 16 bits. Isso proporciona um "piso de ruído" muito mais baixo, permitindo que sinais mais fracos sejam gravados sem que o ruído de fundo se torne um problema — vital durante a mixagem e masterização profissional.',
    },
    { type: 'title', text: 'WAV vs FLAC vs MP3: O impacto no disco', level: 2 },
    {
      type: 'paragraph',
      html: '<strong>WAV / AIFF</strong> são formatos não comprimidos que preservam cada bit da gravação original, mas são os mais pesados. <strong>FLAC</strong> aplica compressão sem perdas, reduzindo o tamanho original em 40-60% sem sacrificar a qualidade. <strong>MP3 / AAC</strong> aplicam compressão com perdas, removendo frequências imperceptíveis; um MP3 a 320 kbps ocupa aproximadamente 22% do WAV original.',
    },
    {
      type: 'table',
      headers: ['Qualidade', 'Frequência', 'Bits', 'MB por Minuto (Estéreo)'],
      rows: [
        ['Chamada Telefônica', '8 kHz', '8-bit', '0.94 MB'],
        ['Rádio FM', '32 kHz', '16-bit', '7.32 MB'],
        ['CD Original', '44.1 kHz', '16-bit', '10.09 MB'],
        ['Estúdio de Vídeo', '48 kHz', '24-bit', '16.48 MB'],
        ['Alta Fidelidade', '96 kHz', '24-bit', '32.96 MB'],
      ],
    },
    { type: 'title', text: 'Fórmula de cálculo para técnicos', level: 2 },
    {
      type: 'paragraph',
      html: 'Se você precisar realizar o cálculo manualmente ou implementá-lo em seu próprio software, esta é a lógica que nossa calculadora segue:',
    },
    {
      type: 'code',
      ariaLabel: 'Lógica de cálculo de armazenamento de áudio',
      code: `const sampleRate = 48000;\nconst bitDepth = 24;\nconst channels = 2;\nconst seconds = 3600;\n\nconst bitsPerSecond = sampleRate * bitDepth * channels;\nconst totalBytes = (bitsPerSecond * seconds) / 8;`,
    },
    { type: 'title', text: 'Casos de uso para esta ferramenta', level: 2 },
    {
      type: 'list',
      items: [
        'Podcasting: Evite ficar sem espaço no seu gravador portátil durante uma longa entrevista.',
        'Estúdio Musical: Calcule quantos GB de espaço livre você precisa antes de abrir uma sessão de 40 faixas a 96kHz.',
        'Engenharia de Som Digital: Verifique se o bitrate de transferência é compatível com o seu hardware.',
        'Pós-produção de Cinema: Estime o tamanho de tomadas multicanais 5.1 para entrega de arquivos via rede.',
        'Arquivamento: Determine a capacidade necessária para digitalizar uma coleção de fitas analógicas na qualidade Master.',
      ],
    },
  ],
};
