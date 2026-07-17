import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PhaseDistanceUI } from '../ui';

const slug = 'phase-distance-calculator';
const title = '마이크 위상 거리 계산기';
const description =
  '마이크 정렬에 필요한 지연 시간 및 보정 값을 계산합니다. 샘플 단위의 정밀한 조정과 온도 보정을 통해 위상 상쇄 및 콤 필터링을 방지하세요.';

const faqData = [
  {
    question: '오디오에서 위상 상쇄(phase cancellation)란 무엇인가요?',
    answer:
      '동일한 음원으로부터 오는 두 신호가 서로 다른 시간에 도달할 때 발생하는 음향 현상입니다. 파동이 서로 간섭하며, 180도 어긋날 경우 서로를 상쇄시켜 소리가 얇아지고 힘이 없어집니다.',
  },
  {
    question: '왜 온도가 계산에 영향을 미치나요?',
    answer:
      '소리는 공기를 통해 전달되며 공기 밀도는 온도에 따라 변하기 때문입니다. 온도가 높을수록 소리가 더 빠르게 전달됩니다. 정확한 온도 보정을 통해 격리된 마이크 간의 정확한 지연 시간을 계산할 수 있습니다.',
  },
  {
    question: '위상 반전과 극성 반전은 같은 것인가요?',
    answer:
      '기술적으로는 다르지만 혼용되어 사용됩니다. 극성은 전기적 변화(180도 회전)인 반면, 위상은 시간 이동입니다. 저희 도구는 최상의 음향적 일관성을 찾기 위해 두 가지 모두를 시뮬레이션할 수 있도록 지원합니다.',
  },
  {
    question: '콤 필터링(Comb Filtering)이란 무엇인가요?',
    answer:
      '신호가 지연된 신호와 결합할 때 발생하는 주파수 응답입니다. 빗 모양처럼 일련의 피크와 노치(움푹 들어간 곳)가 생성되어 악기의 음색을 급격히 변화시킵니다.',
  },
  {
    question: '마이크 기술에서 3:1 법칙은 무엇인가요?',
    answer:
      '위상 문제를 최소화하는 기술입니다. 다른 음원에 두 개의 마이크를 사용할 때, 마이크 간의 거리는 각 마이크와 해당 음원 간 거리의 최소 3배 이상이어야 합니다.',
  },
  {
    question: '마이크를 물리적으로 정렬하는 것과 소프트웨어로 정렬하는 것 중 어느 것이 더 좋나요?',
    answer:
      '녹음 시 물리적 정렬을 잘 하는 것이 왜곡을 방지하기에 항상 바람직합니다. 그러나 DAW의 디지털 지연은 마이크를 손으로 이동시켜서 얻기 힘든 샘플 단위의 정밀한 조정을 제공합니다.',
  },
];

const howToData = [
  {
    name: '거리 측정',
    text: '음원(예: 스네어 드럼)에서 사용하는 각 마이크까지의 물리적 거리를 측정합니다.',
  },
  {
    name: '환경 설정',
    text: '실제 물리 법칙에 기반한 계산 결과를 얻기 위해 실내 온도와 프로젝트의 샘플 레이트를 입력합니다.',
  },
  {
    name: '그래프 분석',
    text: '주파수 응답 시각화 도구를 통해 가청 대역에서 발생할 수 있는 주요 상쇄 구간을 식별합니다.',
  },
  {
    name: '보정 적용',
    text: '밀리초 또는 샘플 값을 복사한 다음 채널의 지연 플러그인에 입력하여 트랙을 완벽하게 정렬합니다.',
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
    labelTemp: '온도 (°C) / 소리',
    btnAuto: '자동',
    labelSampleRate: '샘플 레이트 (kHz)',
    labelUnits: '단위 시스템',
    optMetric: '미터법 (m/cm)',
    optImperial: '야드파운드법 (ft/in)',
    labelDistA: '마이크 A 거리',
    labelDistB: '마이크 B 거리',
    labelPresets: '빠른 프리셋',
    presetCoincident: '동축 마이크 (XY)',
    presetSnare: '스네어',
    presetAmbient: '앰비언트',
    btnInvert: '위상 반전 (Φ)',
    labelGain: '마이크 B 상대 게인:',
    btnCopy: '샘플 복사',
    labelDelay: '필요한 지연 시간',
    unitMs: '밀리초 (ms)',
    labelCompensation: '보정치',
    unitSamples: '샘플',
    labelPhaseStatus: '위상 상태',
    textLoading: '로딩 중...',
    statusInPhase: '위상 일치',
    statusInPhaseDesc: '신호가 완벽하게 정렬되었습니다.',
    statusCritical: '심각한 위상 상쇄',
    statusCriticalDesc: '저/중음역대에서 심각한 콤 필터링 발생.',
    statusOffAxis: '축 외 어긋남',
    statusOffAxisDesc: '약간의 위상 편차 발생. 질감이 변형됨.',
    warningCritical: '(!) 심각한 위상 상쇄 발생 가능성',
    labelSoundSpeed: '음속',
    labelDistDiff: '거리 차이',
    labelNullFreq: '첫 번째 노치 주파수',
    textNone: '없음',
    chartTitle: '주파수 응답 (H) - 콤 필터링',
    promptSoundSpeed: '음속 (m/s):',
    copyFeedback: '복사 완료!',
  },
  seo: [
    {
      type: 'summary',
      title: '계산기 특징',
      items: [
        '음속에 대한 온도 조정을 적용한 정확한 물리 계산',
        'DAW 보정을 위한 밀리초 및 샘플 단위 결과',
        '가청 스펙트럼 전체에 걸친 콤 필터링 캔버스 시각화',
        '마이크 프리셋 (XY 동축, 스네어, 앰비언트)',
        '위상 반전 시뮬레이션 및 상대 게인 컨트롤',
        '미터법 및 야드파운드법 지원',
      ],
    },
    {
      type: 'title',
      text: '위상 상쇄란 무엇이며 왜 믹스를 망치나요?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '레코딩 엔지니어링의 세계에서 위상은 가장 중요한 개념 중 하나이며 역설적으로 초보자들이 가장 간과하기 쉬운 개념 중 하나입니다. 드럼 키트나 기타 앰프 등 음원을 서로 다른 거리에 배치된 두 개 이상의 마이크로 녹음할 때 음파는 마이크 캡슐에 동시에 도달하지 않습니다. 이 미세한 시간 차이가 바로 <strong>위상 차이</strong>(phase shift)라는 현상을 유발합니다.',
    },
    {
      type: 'title',
      text: '콤 필터링 현상',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '동일한 두 신호가 약간의 시간 지연을 두고 결합되면 주파수 응답에 일련의 피크와 노치가 생깁니다. 스펙트럼 분석기로 볼 때 이 패턴이 빗(comb)의 치아 모양을 닮았기 때문에 그렇게 명명되었습니다. 이 효과는 악기의 자연스러운 음색을 완전히 왜곡시킵니다.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: '저음역대에 미치는 영향',
          description:
            '위상 상쇄는 저음역대에서 가장 치명적이며 저음의 두께감이 완전히 사라집니다.',
        },
        {
          title: '금속성 질감',
          description:
            '콤 필터링은 알맹이가 없거나 과하게 프로세싱된 듯한 부자연스러운 컬러레이션을 추가합니다.',
        },
      ],
    },
    {
      type: 'title',
      text: '온도가 계산에 미치는 영향',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '많은 엔지니어들은 공기가 물리적인 매질이며 온도에 따라 그 밀도가 변한다는 점을 간과합니다. 음속은 불변의 상수가 아니며, 20°C일 때 대략 초당 343미터의 속도로 이동합니다.',
    },
    {
      type: 'code',
      code: 'v = 331.3 + (0.606 × T)',
      ariaLabel: '온도에 따른 음속 공식',
    },
    {
      type: 'tip',
      title: '미세한 보정',
      html: '단 몇 도의 온도 차이로도 상쇄 주파수 포인트가 수 헤르츠만큼 변할 수 있습니다. 스튜디오의 실제 온도로 당사 계산기를 사용하면 DAW에서 완벽한 정렬을 보장합니다.',
    },
    {
      type: 'title',
      text: '주요 레코딩 상황',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '스네어 드럼 (탑 & 바텀): 두 헤드의 시간 축을 맞춰 펀치감을 극대화합니다.',
        '오버헤드와 개별 마이크: 오버헤드의 위상과 일치하도록 개별 마이크에 지연을 줍니다.',
        '멀티 마이크 기타 녹음: 중저음역대를 잃지 않으면서 다이내믹 마이크와 리본 마이크를 블렌딩합니다.',
        '베이스 DI 및 마이크: 엄청난 무게감을 위해 다이렉트 신호와 앰프 마이크를 동기화합니다.',
      ],
    },
    {
      type: 'title',
      text: '물리적 정렬 vs 디지털 처리',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '저희 도구는 녹음 후 DAW에서 위상을 보정할 수 있는 값을 제공하지만, 녹음 시 스튜디오에서 최상의 물리적 정렬을 시도하는 것을 항상 권장합니다. 마이크를 몇 밀리미터만 움직여도 어떤 디지털 프로세싱보다 훨씬 더 효과적일 수 있습니다.',
    },
    {
      type: 'stats',
      items: [
        { label: '20°C일 때 속도', value: '343.2 m/s' },
        { label: 'cm당 밀리초', value: '0.029 ms' },
        { label: '48kHz당 샘플', value: 'cm당 1.4' },
      ],
    },
    {
      type: 'title',
      text: '참조 테이블: 거리 vs 첫 번째 노치',
      level: 2,
    },
    {
      type: 'table',
      headers: ['거리 차이 (cm)', '지연 시간 (ms)', '첫 번째 노치 (Hz)', '영향 범위'],
      rows: [
        ['1 cm', '0.029', '17160', '극고음역대'],
        ['5 cm', '0.146', '3432', '중고음역대 (프레즌스)'],
        ['10 cm', '0.291', '1716', '중음역대 (프레즌스)'],
        ['30 cm', '0.874', '572', '중저음역대 (바디)'],
        ['1 m', '2.914', '172', '저음역대 (기본음)'],
      ],
    },
    {
      type: 'title',
      text: '보정 방식의 장단점',
      level: 2,
    },
    {
      type: 'proscons',
      items: [
        {
          pro: '물리적 정렬: 원본 신호의 열화가 적음.',
          con: '물리적 정렬: 미세한 정확도를 확보하기 어려움.',
        },
        {
          pro: '디지털 보정: 샘플 수준의 절대적인 정밀함.',
          con: '디지털 보정: 잘못 적용할 경우 선행 에코를 생성할 수 있음.',
        },
        {
          pro: '극성 반전: 180도 상쇄에 대한 즉각적인 해결책.',
          con: '극성 반전: 중간 정도의 위상 차이를 해결하지 못함.',
        },
        {
          pro: '시간 보정: 손실된 임팩트와 펀치감을 복구함.',
          con: '시간 보정: 각 마이크의 거리에 대한 정밀한 측정이 필요함.',
        },
      ],
    },
    {
      type: 'tip',
      title: '귀로 위상 문제를 감지하는 방법',
      html: '"위상 반전" 버튼(Φ)을 누릅니다. 이를 활성화했을 때 소리의 몸집이 커지고 저음이 살아나면 마이크 위상이 어긋났던 것입니다. 소리가 "사라지거나" 얇아진다면 제대로 정렬된 상태였습니다.',
    },
    {
      type: 'title',
      text: '모노 호환성 및 스테레오 인지',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '스테레오 녹음에서 위상 관계는 사운드 이미지의 안정성을 결정합니다. 심각한 불일치가 있으면 모노 시스템에서 재생할 때 사운드가 완전히 사라질 수 있습니다. 저희 계산기는 채널이 믹스될 때 어떤 주파수가 가장 손실을 입을지 예측하도록 돕습니다.',
    },
  ],
};
