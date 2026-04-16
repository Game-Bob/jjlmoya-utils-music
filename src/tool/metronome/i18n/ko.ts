import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MetronomeUI } from '../ui';

const slug = 'metronome';
const title = '온라인 메트로놈: 고정밀 시각 및 오디오';
const description =
  '음악가를 위한 무료 온라인 메트로놈. Web Audio API를 통한 밀리초 단위의 정밀도. 시각, 오디오 및 탭 템포(Tap Tempo) 기능. 악기 연습에 완벽합니다.';

const faqData = [
  {
    question: '이 메트로놈은 전문가용으로 충분히 정확한가요?',
    answer:
      '네. 저희는 장치의 하드웨어 클록에서 직접 사운드를 예약하는 Web Audio API를 사용합니다. 이는 다른 웹 애플리케이션에서 흔히 발생하는 미세한 지연을 방지하고 장시간 세션 중에도 밀리초 단위의 정밀도를 보장합니다.',
  },
  {
    question: '탭 템포(Tap Tempo)란 무엇이며 어떻게 사용하나요?',
    answer:
      '리듬에 맞춰 탭하여 BPM을 계산할 수 있는 기능입니다. 듣고 있는 음악의 박자에 맞춰 \'TAP\' 버튼을 클릭하거나 스페이스바를 누르기만 하면 즉시 정확한 템포를 얻을 수 있습니다.',
  },
  {
    question: '박자표와 액센트를 변경할 수 있나요?',
    answer:
      '네, 다양한 박자표(2/4, 3/4, 4/4, 6/8 등)를 설정하고 연습 중인 음악 스타일에 맞게 비트 액센트를 사용자 정의할 수 있습니다.',
  },
  {
    question: 'iPhone이나 iPad에서 소리가 들리지 않는 이유는 무엇인가요?',
    answer:
      'iOS 장치에서 Web Audio 기술은 물리적 무음 스위치 설정을 따릅니다. 전화기가 무음 모드가 아닌지 확인하고 미디어 볼륨을 높여 클릭 소리를 들어보세요.',
  },
];

const howToData = [
  {
    name: 'BPM 설정',
    text: '슬라이더나 미세 조정 버튼을 사용하여 원하는 속도를 분당 비트 수(BPM) 단위로 설정하세요.',
  },
  {
    name: '박자표 구성',
    text: '메트로놈이 각 마디의 첫 박자를 올바르게 강조할 수 있도록 박자 수(예: 4/4 또는 3/4)를 선택하세요.',
  },
  {
    name: '외부 음악과 동기화(Tap)',
    text: '듣고 있는 노래의 템포를 찾아야 한다면 드럼이나 메인 펄스에 맞춰 TAP 버튼을 탭하세요.',
  },
  {
    name: '연습 시작',
    text: '시작 버튼을 누르세요. 시각적 인디케이터는 주변 소음으로 인해 소리가 명확하게 들리지 않는 환경에서도 박자를 지키는 데 도움을 줍니다.',
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
  faqTitle: '자주 묻는 질문',
  faq: faqData,
  bibliographyTitle: '기술 참고 자료',
  bibliography: [
    {
      name: 'Web Audio API – MDN Web Docs',
      url: 'https://developer.mozilla.org/ko/docs/Web/API/Web_Audio_API',
    },
    {
      name: 'AudioContext – MDN Web Docs',
      url: 'https://developer.mozilla.org/ko/docs/Web/API/AudioContext',
    },
    {
      name: 'A Tale of Two Clocks – Scheduling Web Audio with Precision (web.dev)',
      url: 'https://web.dev/articles/audio-scheduling',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  ui: {
    labelTempo: '템포',
    labelBpmMin: '40 BPM',
    labelBpmMax: '240 BPM',
    labelTime: '박자표',
    labelTap: '탭 템포',
    btnTap: 'TAP',
    warningTitle: '소리가 안 나나요?',
    warningText:
      'iPhone/iPad를 사용하는 경우 측면 무음 스위치가 활성화되어 있지 않은지 확인하세요. Web Audio 기술은 많은 장치에서 시스템 무음 모드를 따릅니다.',
  },
  seo: [
    {
      type: 'summary',
      title: '메트로놈 기능',
      items: [
        'Web Audio API 엔진 — 밀리초 단위의 정밀도, 오차 없음',
        '탭 템포: 박자에 맞춰 탭하여 BPM 계산',
        '1~12비트까지 설정 가능한 박자표 및 자동 액센트',
        '리플(ripple) 효과가 있는 고대비 시각적 인디케이터',
        '볼륨 조절 및 ±1/±5 BPM 미세 조정 버튼',
      ],
    },
    {
      type: 'title',
      text: '브라우저에서 만나는 리듬의 정밀함',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>최고의 온라인 메트로놈</strong>에 오신 것을 환영합니다. 저희는 한 가지 목표, 즉 <em>신뢰성</em>을 염두에 두고 이 도구를 만들었습니다. 프로세서 부하로 인해 "오차"(작은 누적 지연)가 발생하는 다른 웹 메트로놈과 달리, 저희 사운드 엔진은 <strong>Web Audio API</strong>를 기반으로 직접 구축되었습니다.',
    },
    {
      type: 'paragraph',
      html: '이는 사운드 펄스가 장치의 하드웨어 클록에 미리 예약되어 탭을 최소화하거나 컴퓨터가 다른 작업으로 바쁘더라도 <strong>흔들림 없는 밀리초 단위의 정밀도</strong>를 보장함을 의미합니다.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: '선명한 시각화',
          description:
            '"리플" 효과가 있는 크고 대비가 높은 시각적 인디케이터입니다. 주변 시야로도 감지할 수 있도록 설계되어 리듬을 잃지 않고 악보나 악기에 집중할 수 있습니다.',
        },
        {
          title: '스마트 탭 템포',
          description:
            '노래를 들으면서 그 속도를 알고 싶으신가요? 음악에 맞춰 TAP 버튼이나 스페이스 키를 누르세요. 알고리즘이 탭의 정확한 평균값을 계산합니다.',
        },
      ],
    },
    {
      type: 'title',
      text: '마스터 가이드: 메트로놈과 함께 연습하는 방법',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '메트로놈은 단순히 똑딱거리는 시계가 아닙니다. 여러분의 테크닉을 가장 공정하게 판단하는 심판입니다. 다음은 속도와 정확성을 향상시키기 위해 검증된 방법론입니다.',
    },
    {
      type: 'title',
      text: '1. 사다리 방식(The Ladder Method)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '목표가 <strong>120 BPM</strong>으로 연주하는 것이라면 처음부터 그 속도로 시도하지 마세요. 좌절하기 쉽습니다. 발전에는 전략이 필요합니다.',
    },
    {
      type: 'list',
      items: [
        '목표 속도의 50%(예: 60 BPM)에서 시작하세요.',
        '해당 구간을 연속 3번 완벽하게 연주하세요. 한 음이라도 틀리면 카운터가 초기화됩니다.',
        '메트로놈을 딱 5 BPM만 높이세요.',
        '목표 속도에 도달할 때까지 반복하세요.',
      ],
    },
    {
      type: 'title',
      text: '2. 액센트 이동',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '박자표 선택기를 사용하여 액센트를 이동시키세요. 4/4 박자 구간을 3/4으로 설정된 메트로놈으로 연습하면 액센트(날카로운 클릭 소리)가 프레이징의 다른 위치에 떨어지게 되며, 이는 "첫" 박자에 의존하는 대신 절대적인 시간을 내면화하도록 강제합니다.',
    },
    {
      type: 'title',
      text: '3. 전략적 침묵',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '고급 기술은 메트로놈을 절반 속도(예: 120으로 연주할 경우 60 BPM)로 설정하고 각 클릭을 1번과 3번 비트로 느끼는 것입니다. 더 어려운 방법은 오프 비트(off-beats)로만 느끼는 것입니다. 이는 여러분의 <strong>내부 시계</strong>를 강화합니다.',
    },
    {
      type: 'title',
      text: '템포에 관한 흥미로운 사실들',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '템포는 음악의 감정적 인식을 근본적으로 바꿉니다.',
    },
    {
      type: 'table',
      headers: ['이탈리아어 용어', 'BPM 근사치', '성격'],
      rows: [
        ['Largo', '40 – 60', '느리고 장엄하게'],
        ['Andante', '76 – 108', '걷는 속도로, 평온하게'],
        ['Allegro', '120 – 156', '빠르고, 밝고 즐겁게'],
        ['Presto', '168 – 200', '매우 빠르고, 격렬하게'],
      ],
    },
    {
      type: 'title',
      text: '이 메트로놈의 이면에 있는 기술',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '이것은 단순히 반복 재생되는 MP3 플레이어가 아닙니다. 저희는 실시간으로 순수 사인파를 생성합니다. 메인 오실레이터는 액센트를 위해 <strong>1000 Hz</strong> 톤을, 약한 비트를 위해 <strong>800 Hz</strong> 톤을 생성하며, 최대의 타격감을 위해 초단기 ADSR 엔벨로프를 사용합니다. 이는 즉각적인 사운드 어택을 보장합니다.',
    },
    {
      type: 'paragraph',
      html: '그루브를 맞추는 드러머든, 음계를 연습하는 피아니스트든, 솔로를 완성하는 기타리스트든 이 메트로놈은 여러분의 조용한 파트너입니다(재생 버튼을 누르기 전까지는요).',
    },
    {
      type: 'tip',
      title: '모바일에서 소리가 들리지 않나요?',
      html: 'iPhone/iPad를 사용하는 경우 <strong>측면 무음 스위치</strong>가 활성화되어 있지 않은지 확인하세요. Web Audio 기술은 많은 장치에서 시스템 무음 모드를 따릅니다.',
    },
  ],
};
