import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BpmCalculatorUI } from '../ui';

const slug = 'bpm-to-ms-calculator';
const title = '딜레이 및 리버브를 위한 BPM 밀리초 계산기';
const description =
  '프로젝트 템포(BPM)를 정확한 딜레이 타임(ms)과 주파수(Hz)로 변환하세요. 딜레이, 리버브, 컴프레서를 리드미컬하고 정밀하게 설정하기 위한 필수 도구입니다.';

const faqData = [
  {
    question: '리버브에서 프리 딜레이(Pre-delay)란 무엇인가요?',
    answer:
      '프리 딜레이는 직접 소리(소스)와 리버브 테일(잔향)의 시작 사이의 시간입니다. 이를 리드미컬하게 설정하면 공간 효과가 나타나기 전에 원래 소리가 명확하게 유지될 수 있으며, 이는 보컬과 퍼커션에 필수적입니다.',
  },
  {
    question: '탭 템포(Tap Tempo)는 어떻게 작동하나요?',
    answer:
      '탭 템포는 노래에 맞춰 리드미컬하게 버튼을 클릭하여 템포를 감지합니다. 각 클릭의 간격을 측정하고 시스템이 간격의 평균을 내어 정확한 BPM을 제공합니다. 외부 트랙에 효과를 동기화하는 가장 빠른 방법입니다.',
  },
  {
    question: '왜 자동 동기화 대신 밀리초를 사용하나요?',
    answer:
      '세 가지 주요 이유가 있습니다. MIDI가 없는 아날로그 하드웨어를 사용하는 경우, 리버브가 "호흡"하도록 프리 딜레이를 미세 조정하는 경우, 그리고 정적인 기계적 느낌을 피하기 위해 효과를 그리드에서 약간 벗어나게 하는 "그루브" 조정을 위해서입니다.',
  },
  {
    question: '리드미컬한 Hz 값은 어디에 사용되나요?',
    answer:
      '헤르츠(Hertz) 값은 1초에 어떤 일이 몇 번 일어나는지 알려줍니다. 고유한 템포 동기화 기능이 없는 신시사이저에서 LFO 오실레이터, 페이저 스윕 속도 또는 필터 변조를 구성하는 데 필수적입니다.',
  },
];

const howToData = [
  {
    name: 'BPM 입력',
    text: '중앙 필드에 프로젝트 템포를 입력하거나 탭 템포 버튼을 사용하세요.',
  },
  {
    name: '음표 선택',
    text: '단순 음표, 점음표 또는 셋잇단음표 표에서 필요한 음표(4분, 8분 음표 등)를 찾으세요.',
  },
  {
    name: '값 복사',
    text: '밀리초 값 옆의 복사 아이콘을 클릭하여 플러그인이나 하드웨어에 직접 붙여넣으세요.',
  },
  {
    name: '프리 딜레이 설정',
    text: '리브 보컬에서 리버브를 분리하는 데 이상적인 초단기 값을 위해 하단 섹션을 사용하세요.',
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
    labelTempo: '템포 (BPM)',
    btnTap: 'TAP TEMPO',
    sectionDelay: '딜레이 타임',
    sectionDotted: '점음표',
    sectionTriplets: '셋잇단음표',
    sectionReverb: '리버브 디자인 (프리 딜레이)',
    colNote: '음표',
    colMs: 'ms',
    colHz: 'Hz',
    infoPreDelay:
      '<strong>프리 딜레이</strong>는 명확성을 확보하기 위해 원래의 어택 소리를 리버브 테일과 분리합니다.',
    copyAriaMs: '밀리초 복사',
    copyAriaPreDelay: '프리 딜레이 복사',
    copyFeedback: '복사되었습니다!',
  },
  seo: [
    {
      type: 'summary',
      title: '계산기 특징',
      items: [
        '단순 음표, 점음표, 셋잇단음표에 대한 즉각적인 계산',
        '모든 리듬 세분화에 대한 밀리초 및 Hz 값 제공',
        '음학적 정밀도를 갖춘 리버브 설계를 위한 프리 딜레이 섹션',
        '탭 템포: 음악을 따라 두드려 BPM 감지',
        '모든 DAW 또는 플러그인을 위한 원클릭 클립보드 복사',
      ],
    },
    {
      type: 'title',
      text: '왜 BPM-밀리초 계산기가 필수적인가요?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '현대 음악 제작에서 리드미컬한 정밀함은 아마추어 믹스와 프로 믹스를 구분 짓는 잣대입니다. Ableton Live, FL Studio 또는 Logic Pro와 같은 대부분의 DAW에는 효과를 위한 자동 동기화 기능이 포함되어 있지만, 수동 제어가 더 뛰어난 상황은 무수히 많습니다.',
    },
    {
      type: 'title',
      text: '리버브에서 프리 딜레이의 중요성',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '이 도구의 가장 중요한 용도 중 하나는 <strong>프리 딜레이</strong>를 조정하는 것입니다. 프리 딜레이 없이 보컬에 리버브를 적용하면 효과 테일이 즉시 시작되어 자음을 흐리게 하고 명확성을 떨어뜨립니다. 리드미컬한 프리 딜레이(64분 또는 128분 음표 등)를 계산하여 적용하면, 인공적인 음향 공간이 소리를 뒤덮기 전에 원래의 목소리가 숨을 쉴 수 있게 해줍니다. 이는 소리의 존재감을 희생하지 않으면서도 깊이감을 만들어냅니다.',
    },
    {
      type: 'title',
      text: '아날로그 딜레이 및 외부 하드웨어',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '아날로그 딜레이 페달이나 빈티지 신시사이저를 수집한다면, 많은 장비에 MIDI 클록 입력이 없다는 것을 알고 계실 것입니다. 테이프 딜레이를 수동으로 설정하려면 8분 음표나 점4分 음표가 정확히 몇 밀리초에 해당하는지 알아야 합니다. 저희 계산기는 이러한 값을 즉시 제공하여 하드웨어를 정밀하게 설정할 수 있도록 도와줍니다.',
    },
    {
      type: 'title',
      text: '그리드를 벗어난 효과와 그루브',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '때로는 수학적인 완벽함이 지루하게 들릴 때가 있습니다. 많은 프로듀서들은 밀리초 값을 시작점으로 사용한 다음 값을 위아래로 약간씩 조정합니다. 딜레이를 그리드에서 5~10ms 정도 벗어나게 하면 정적인 퀀타이즈가 결코 흉내 낼 수 없는 인간적인 <em>스윙(swing)</em>이나 독특한 <em>그루브(groove)</em>를 더할 수 있습니다.',
    },
    {
      type: 'title',
      text: '동기화된 컴프레션 및 LFO',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '컴프레서의 <strong>어택(Attack)</strong> 및 <strong>릴리스(Release)</strong> 시간도 리드미컬할 수 있다는 사실을 알고 계셨나요? 드럼 버스 컴프레서의 릴리스를 다음 킥 타격 직전에 끝나도록 설정하면 음악의 리듬을 강화하는 "펌핑" 또는 <em>호흡</em> 효과를 줍니다. 마찬가지로, Hz 값은 템포 동기화 기능이 없는 신시사이저에서 저주파 오실레이터(LFO)를 구성하는 데 필수적입니다.',
    },
    {
      type: 'tip',
      title: '탭 템포 사용 방법',
      html: '<strong>탭 템포</strong> 기능은 라이브 상황이나 템포를 모르는 외부 트랙을 들을 때 이상적입니다. 음악의 비트에 맞춰 버튼을 리드미컬하게 클릭하기만 하면 됩니다. 알고리즘이 값을 더 정확하게 평균화할 수 있도록 최소 4~5회 탭하는 것을 권장합니다.',
    },
    {
      type: 'title',
      text: '템포 수학 공식',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '기본 공식은 간단합니다: <code>ms = 60,000 / BPM</code>. 여기서 각 음표 세분화에 따라 배수가 적용됩니다.',
    },
    {
      type: 'list',
      items: [
        '단순 음표: 2진 분할 기준 (1, 0.5, 0.25 등).',
        '점음표: 기준 값에 1.5를 곱함.',
        '셋잇단음표: 기준 값에 0.667 (2/3)을 곱함.',
      ],
    },
  ],
};
