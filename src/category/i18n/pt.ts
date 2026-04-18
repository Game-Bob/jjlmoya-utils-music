import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'musica',
  title: 'Ferramentas Musicais Online',
  description:
    'Utilitários musicais gratuitos para músicos, produtores e entusiastas. Metrônomo, calculadora BPM, conversor de frequência, equivalência de notas e mais.',
  seo: [
    {
      type: 'summary',
      title: 'O que você encontrará nesta categoria',
      items: [
        'Metrônomo online com Web Audio API — precisão em milissegundos',
        'Calculadora de BPM para milissegundos para delays e reverbs',
        'Conversor de frequência para nota musical (Hz, cents e desintonização)',
        'Calculadora de distância de fase para alinhamento de microfones',
        'Equivalência de notas entre sistemas latino, americano e alemão',
        'Calculadora de armazenamento de áudio digital',
      ],
    },
    {
      type: 'title',
      text: 'Ferramentas Musicais para Cada Fase do Processo Criativo',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Do primeiro ensaio ao mastering final, todo músico e produtor precisa de ferramentas precisas disponíveis a qualquer momento. Nossa coleção de <strong>utilitários musicais online</strong> foi projetada com um objetivo claro: máxima precisão técnica com mínimo atrito.',
    },
    {
      type: 'paragraph',
      html: 'Sem necessidade de instalação. Todas as ferramentas funcionam diretamente no seu navegador, são completamente gratuitas e protegem sua privacidade: nenhum dado sai do seu dispositivo.',
    },
    {
      type: 'title',
      text: 'Para o Músico em Prática',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'O <strong>metrônomo online</strong> é a ferramenta fundamental para qualquer músico em treinamento ou prática. Nosso metrônomo usa a Web Audio API para garantir precisão em milissegundos, eliminar deriva e fornecer feedback visual com efeito de ondulação. O recurso <strong>Tap Tempo</strong> permite encontrar instantaneamente o BPM de qualquer música.',
    },
    {
      type: 'title',
      text: 'Para o Produtor Musical',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A <strong>calculadora de BPM para milissegundos</strong> é essencial em qualquer sessão de mixagem. Sincronizar um delay ou reverb ao tempo da música faz a diferença entre um mix que respira e um que soa artificial. Da mesma forma, a <strong>calculadora de distância de fase</strong> alinha microfones com precisão de nível de amostra e evita cancelamento de fase em gravações com múltiplos microfones.',
    },
    {
      type: 'title',
      text: 'Para o Engenheiro de Som',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'O <strong>conversor de frequência para nota musical</strong> transforma qualquer valor em Hz para sua nota equivalente, mostrando também o desvio em cents. Perfeito para afinar sintetizadores analógicos, identificar ressonâncias problemáticas em uma sala ou trabalhar com samples desafinados. A <strong>calculadora de armazenamento de áudio digital</strong> ajuda a planejar projetos de gravação e gerenciar espaço em disco com precisão.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Precisão Técnica',
          description:
            'Todas as ferramentas são baseadas em algoritmos matematicamente verificados. Sem aproximações: os resultados são exatos e reproduzíveis.',
        },
        {
          title: 'Privacidade Total',
          description:
            'O processamento ocorre no seu dispositivo. Nenhum áudio, arquivo ou dado pessoal é transmitido a qualquer servidor.',
        },
      ],
    },
    {
      type: 'title',
      text: 'A Linguagem Universal da Música',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A música é uma linguagem com múltiplos sistemas de notação. A ferramenta de <strong>equivalência de notas</strong> traduz instantaneamente entre o sistema latino (Dó, Ré, Mi…), o sistema americano (C, D, E…) e o sistema alemão (C, D, E… com H em vez de B), evitando confusão ao se comunicar com músicos de diferentes tradições ou ler partituras de diferentes países.',
    },
    {
      type: 'tip',
      title: 'Sem necessidade de instalação',
      html: 'Todas as ferramentas funcionam diretamente no navegador, sem plugins ou aplicativos adicionais. Adicione esta página aos favoritos para tê-las sempre à mão durante suas sessões.',
    },
  ],
};
