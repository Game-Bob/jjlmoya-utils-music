import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FrequencyNoteConverterUI } from '../ui';

const slug = 'frequency-to-note-converter';
const title = '주파수 음명 변환기';
const description =
  '헤르츠(Hz)를 즉시 음명으로 변환하세요. 모든 주파수의 정확한 음을 식별하고, 센트(cents) 단위의 편차를 측정하며, 순수 톤을 듣고 신시사이저와 샘플러를 정밀하게 튜닝할 수 있습니다.';

const faqData = [
  {
    question: '440 Hz가 어떤 음에 해당하는지 어떻게 알 수 있나요?',
    answer:
      '440 Hz는 범용 튜닝 기준음인 A4(라)에 정확히 해당합니다. 피아노 가온 C(C4) 위의 라 음입니다. 이 주파수는 1939년부터 ISO 16 표준이었으며 전 세계 오케스트라 악기를 조율하는 데 사용됩니다.',
  },
  {
    question: "음이 '15 센트 높다'는 것은 무엇을 의미하나요?",
    answer:
      '센트(cent)는 반음의 1/100 단위입니다. 어떤 음보다 15 센트 높다는 것은 주파수가 평균율의 정확한 음보다 약간 높다(샵)는 것을 의미합니다. 신시사이저에서는 이를 수정하기 위해 파인 튜닝(fine-tune)을 -15 센트 적용해야 합니다.',
  },
  {
    question: '440 Hz 외에 432 Hz와 444 Hz 기준 옵션이 있는 이유는 무엇인가요?',
    answer:
      '음악적 맥락에 따라 서로 다른 튜닝 기준이 사용됩니다. 432 Hz는 특정 프로덕션 커뮤니티에서 인기가 있습니다. 444 Hz는 르네상스 고음악 녹음에서 흔히 볼 수 있습니다. 일부 유럽 오케스트라는 더 밝은 소리를 위해 441~444 Hz 사이로 조율하기도 합니다.',
  },
  {
    question: '대화형 피아노 키보드는 무엇을 위해 사용하나요?',
    answer:
      '대화형 피아노를 통해 키보드상의 음을 시각적으로 확인하고 건반을 직접 눌러 주파수를 입력할 수도 있습니다. 건반을 누르면 정확한 주파수가 표시되며 비교를 위해 순수 사인파 톤이 재생됩니다.',
  },
  {
    question: '계산기에 표시된 배음(harmonics)을 어떻게 활용하나요?',
    answer:
      '배음(위아래 옥타브)은 해당 음과 직접적으로 관련된 주파수를 보여줍니다. 신시사이저 레이어 간의 충돌을 피하거나, 공명 필터를 올바른 음으로 설정하거나, 드럼 샘플을 적절한 샘플러 옥타브에 할당할 때 유용합니다.',
  },
  {
    question: '청취 모드에서 실제 소리가 아닌 사인파가 발생하는 이유는 무엇인가요?',
    answer:
      '사인파는 추가 배음 없이 기본 주파수만 포함하는 순수 파형입니다. 이를 통해 음색의 특징이 튜닝 판단을 방해하지 않고 실제 악기와 깨끗하게 비교할 수 있습니다. 이는 전자식 튜너가 생성하는 신호와 동일합니다.',
  },
  {
    question: '음표의 주파수는 어떻게 계산되나요?',
    answer:
      '주파수는 평균율을 기초로 한 로그 공식을 사용하여 계산됩니다. 기준 A4(440 Hz)에서 시작하여 반음 올라갈 때마다 2의 12제곱근(~1.05946)을 곱하고, 각 옥타브는 주파수가 2배가 되는 것과 같습니다.',
  },
  {
    question: '440 Hz 주파수는 무슨 음인가요?',
    answer:
      '440 Hz 주파수는 정확히 A4(라) 음입니다. 이는 20세기 중반 이후 대부분의 오케스트라와 현대 음악가들이 악기를 조율하기 위해 사용하는 표준 기준음입니다.',
  },
  {
    question: '440 Hz와 432 Hz 튜닝의 차이점은 무엇인가요?',
    answer:
      '440 Hz는 국제 표준(ISO 16)입니다. 432 Hz는 주관적인 음향적 이유로 일부 음악가들이 선호하는 대체 튜닝으로 명상 음악에서 자주 사용되지만, 440 Hz에 비해 명확한 생물학적 이점이 있다는 과학적 증거는 없습니다.',
  },
];

const howToData = [
  {
    name: '주파수 입력',
    text: '메인 입력 필드에 헤르츠(Hz) 단위로 주파수를 입력합니다. 결과는 음 이름과 과학적 피치 표기법과 함께 즉시 나타납니다.',
  },
  {
    name: '결과 및 센트 미터 확인',
    text: '시각적 튜너 표시기는 입력된 주파수가 해당 음보다 높은지, 낮은지 또는 정확한지 보여줍니다. 센트 값은 악기나 플러그인에서 파인 튜닝을 얼마나 조정해야 하는지 알려줍니다.',
  },
  {
    name: '배음을 사용한 레이어 튜닝',
    text: '위아래 옥타브 주파수를 확인하여 주파수 충돌 없이 추가 오실레이터, 공명 필터 또는 퍼커션 레이어를 구성하세요.',
  },
  {
    name: 'A4 기준 주파수 조정',
    text: '프로젝트 맥락에 맞게 A4 기준을 432 Hz, 444 Hz 또는 임의의 사용자 정의 값으로 변경하세요. 모든 계산이 일관되게 바뀝니다.',
  },
  {
    name: '기준 톤 듣기',
    text: '재생 버튼을 눌러 입력된 주파수에서 순수 사인파를 생성하고 귀로 직접 확인하며 실제 악기를 조율하세요.',
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

export const content: ToolLocaleContent<FrequencyNoteConverterUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  ui: {
    btnHzToNote: 'Hz를 음명으로',
    btnNoteToHz: '음명을 Hz로',
    labelRef: 'A4 기준 주파수',
    ariaRefCustom: '사용자 정의 A4 기준 주파수',
    calInfo:
      '<strong>440 Hz</strong>는 국제 표준입니다. <strong>432 Hz</strong>는 명상 음악과 솔페지오 주파수에서 자주 사용됩니다.',
    labelFrequency: '주파수',
    ariaFreqInput: '헤르츠 단위로 주파수 입력',
    ariaPlay: '톤 듣기',
    copyNoteName: '음명 복사',
    labelOctaveDown: '1옥타브 아래',
    labelInputFreq: '입력 주파수',
    labelOctaveUp: '1옥타브 위',
    labelNoteInput: '음 이름 (예: A4, C#3, Do4)',
    placeholderNote: '음 입력...',
    labelSetNote: '음 설정',
    labelSetOctave: '옥타브 설정',
    labelSelectedNote: '선택된 음',
    copyHz: 'Hz 복사',
    btnListenNote: '음 청취',
    pianoLabel: '대화형 피아노 — 건반을 눌러 주파수를 확인하세요',
    pianoAria: '대화형 피아노 키보드',
    historyTitle: '히스토리',
    historyClear: '삭제',
    historyEmpty: '최근 변환 내역 없음',
    historyLoadAria: '%s Hz 불러오기',
    tuned: '조율됨',
    sharp: '높음(샵)',
    flat: '낮음(플랫)',
    unitHzExact: '정확한 Hz',
    noteNames: 'C,C#,D,D#,E,F,F#,G,G#,A,A#,B',
    noteOptions: 'C (Do)|C# / Db|D (Re)|D# / Eb|E (Mi)|F (Fa)|F# / Gb|G (Sol)|G# / Ab|A (La)|A# / Bb|B (Si)',
    pianoOctave: '옥타브',
    copyFeedback: '복사됨',
  },
  seo: [
    {
      type: 'summary',
      title: '계산기 특징',
      items: [
        '양방향 변환: 동일한 도구에서 Hz를 음명으로, 음명을 Hz로 변환',
        '샘플 단위의 정밀도: 조절 가능한 A4 기준(440 / 432 / 444 Hz)',
        '시각적 센트 미터: 높음 / 낮음 / 조율됨 표시기',
        '배음 표시: 기본음, 1옥타브 아래, 1옥타브 위의 주파수 표시',
        '대화형 피아노 키보드: 해당 건반 하이라이트 표시',
        '검색 히스토리: 패치와 샘플의 신속한 비교 가능',
      ],
    },
    {
      type: 'title',
      text: '음표의 주파수란 무엇이며 왜 중요한가요?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '모든 음악적 음은 본질적으로 공기의 주기적인 진동입니다. 기타 줄이 초당 440번 진동하면 세계 공통 튜닝 기준음인 A4가 생성됩니다. 헤르츠와 음표 사이의 이러한 대응 관계는 자의적인 것이 아닙니다. 이는 수학적 관점에서 1옥타브를 완벽하게 일정한 간격의 12개 반음으로 나누는 서양 음악의 지배적인 조율 시스템인 <strong>평균율</strong>에 의해 정의됩니다.',
    },
    {
      type: 'paragraph',
      html: '각 음의 정확한 주파수를 아는 것은 음향 합성, 음악 프로덕션, 오디오 엔지니어링 및 악기 제작에서 기본이 됩니다. 신시사이저는 조율된 음을 재현하기 위해 각 오실레이터가 어떤 주파수에서 진동해야 하는지 알아야 합니다. 믹싱 엔지니어는 악기의 기본음에 영향을 주지 않으면서 노이즈를 제거하기 위해 이퀄라이저로 어느 부분을 깎아야 하는지 알아야 합니다.',
    },
    {
      type: 'title',
      text: '변환의 수학적 공식',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '평균율은 등비수열을 바탕으로 합니다. 각 반음은 주파수에 2의 12제곱근을 곱하는 것과 같습니다. A4와의 반음 간격 거리를 사용하여 임의의 음 주파수를 얻는 공식은 다음과 같습니다.',
    },
    {
      type: 'code',
      code: 'f = A4 × 2^((n - 69) / 12)',
      ariaLabel: 'MIDI 노트 번호를 Hz 단위 주파수로 변환하는 공식',
    },
    {
      type: 'paragraph',
      html: '여기서 <em>n</em>은 MIDI 노트 번호(A4 = 69)이고 <em>A4</em>는 기준 주파수(일반적으로 440 Hz)입니다. 이 공식을 역으로 계산하면 입력된 주파수에 가장 가까운 음과 센트 단위의 편차를 얻을 수 있습니다.',
    },
    {
      type: 'title',
      text: '센트(Cents): 음악가와 엔지니어를 위한 정밀 단위',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '반음은 100 센트로 나뉩니다. 이 단위를 통해 튜닝 편차를 소수점 정밀도로 설명할 수 있습니다. 10 센트의 편차는 훈련된 귀에 이미 감지될 수 있으며, 20 센트 이상은 대부분의 청취자에게 확실히 음이 나간 것처럼 들립니다.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: '완벽한 조율',
          description:
            '편차가 정확한 평균율 주파수에서 5 센트 미만일 때 음이 완벽하게 조율된 것으로 간주됩니다.',
        },
        {
          title: 'DAW에서의 센트',
          description:
            '샘플러, 신시사이저 및 피치 시프트 플러그인은 파인 튜닝에 센트를 사용하여 아티팩트 없이 샘플을 정확한 음으로 조정할 수 있게 합니다.',
        },
        {
          title: '인간의 감지 한계',
          description:
            '음이 어긋났음을 감지하는 한계는 악기, 다이내믹 및 화성적 맥락에 따라 5~15 센트 사이에서 달라집니다.',
        },
      ],
    },
    {
      type: 'title',
      text: 'A4 기준: 440 Hz, 432 Hz 그리고 조율 전쟁',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '기준 주파수 A4 = 440 Hz는 1939년에 국제 표준화(ISO 16)되었습니다. 하지만 바로크 음악가들은 대개 415 Hz 기준을 사용하며, 432 Hz를 선호하는 프로듀서 커뮤니티도 성장하고 있습니다. 베를린 필하모닉과 같은 엘리트 오케스트라는 더 밝고 날카로운 소리를 위해 정기적으로 443 Hz를 사용합니다.',
    },
    {
      type: 'paragraph',
      html: '음악 제작에서 기준 주파수는 현장에서 녹음된 어쿠스틱 악기와 가상 악기를 믹스할 때 중요합니다. 녹음된 피아노가 442 Hz로 조율되었는데 신시사이저 기본 설정이 440 Hz라면 모든 샘플을 센트 단위로 보정해야 합니다.',
    },
    {
      type: 'tip',
      title: '전문가용 샘플러 팁',
      html: 'Kontakt이나 Decent Sampler와 같은 샘플러에 샘플을 불러올 때, 샘플 주파수를 이 계산기에 입력하세요. 튜닝 미터에 표시된 센트 값은 음이 완벽하게 조율되어 재생되도록 샘플러에 입력해야 할 <em>파인 튜닝</em> 값을 정확히 알려줍니다.',
    },
    {
      type: 'title',
      text: '옥타브별 기준 주파수 표',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '이 표는 A4 = 440 Hz인 평균율에서 각 C(도) 음의 정확한 주파수를 보여줍니다. 모듈러 신시사이저 오실레이터 구성이나 악기의 음역대 확인에 유용합니다.',
    },
    {
      type: 'table',
      headers: ['음명', '주파수 (Hz)', 'MIDI 노트', '일반적인 악기 음역대'],
      rows: [
        ['C0', '16.35', '12', '콘트라베이스, 오르간 페달'],
        ['C1', '32.70', '24', '콘트라베이스, 베이스 기타 낮은 현'],
        ['C2', '65.41', '36', '첼로, 베이스 기타'],
        ['C3', '130.81', '48', '비올라, 테너 색소폰, 기타'],
        ['C4', '261.63', '60', '가온 도, 피아노, 테너 음성'],
        ['C5', '523.25', '72', '플루트, 바이올린, 소프라노 음성'],
        ['C6', '1046.50', '84', '피콜로, 바이올린 높은 음역대'],
        ['C7', '2093.00', '96', '플루트 하모닉스, 신시사이저'],
        ['C8', '4186.01', '108', '88건반 키보드 최고음, 기술적 한계'],
      ],
    },
    {
      type: 'title',
      text: '배음과 2:1 관계로서의 옥타브',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '음악 음향학에서 가장 중요한 관계 중 하나는 옥타브입니다. 주파수를 2배로 하면 한 옥타브 높은 같은 음이 생성되고, 반으로 줄이면 한 옥타브 아래로 내려갑니다. 이 2:1 관계는 모든 어쿠스틱 악기의 자연 배음의 기초입니다.',
    },
    {
      type: 'paragraph',
      html: '합성에서 주파수의 직접적인 배음을 아는 것은 사운드 레이어 내 오실레이터 간의 스펙트럼 충돌을 피하는 핵심입니다. 이 계산기는 입력된 모든 주파수의 위아래 옥타브를 항상 보여줍니다.',
    },
    {
      type: 'title',
      text: '음악가와 프로듀서를 위한 실제 활용 사례',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '아날로그 오실레이터 조율: 출력 주파수를 측정하고 계산기와 비교하여 코스(coarse) 또는 파인 튜닝을 몇 센트 조정해야 하는지 확인하세요.',
        '샘플을 음에 할당하기: 55 Hz에서 녹음된 킥 드럼은 A1입니다. 이 도구는 샘플러에서 정확히 어디에 매핑해야 하는지 알려줍니다.',
        '문제성 공명 감지: 실내가 80 Hz에서 공명한다면 계산기는 그것이 E2임을 확인해주며, 베이스를 손상시키지 않고 해당 주파수를 감쇠하기 위해 EQ를 어떻게 사용할지 안내합니다.',
        '서브우퍼 동기화: 여러 서브우퍼가 동일한 음을 재생하는지 확인하면 간섭으로 인한 보강 또는 상쇄 간섭을 피할 수 있습니다.',
        '종 및 정해진 음고가 있는 퍼커션 조율: 기본음을 식별하여 곡의 조성에 통합하세요.',
        '공명 필터 설계: 349.23 Hz에서 high-Q 밴드패스 필터는 F4에서 피크를 이루며 화성 설계 결정을 더 쉽게 만들어줍니다.',
      ],
    },
    {
      type: 'title',
      text: '즉각적인 시각적 기준으로서의 피아노',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '피아노 키보드는 음악적 스펙트럼의 가장 직관적인 시각적 지도입니다. 흰 건반(자연음)과 검은 건반(샵/플랫)의 배치는 음계, 코드 및 음정 패턴을 한눈에 인식할 수 있게 해줍니다. 대화형 피아노는 각 주파수에 해당하는 건반을 하이라이트 표시하여 숫자를 범용 키보드상의 위치와 연결해 줍니다.',
    },
    {
      type: 'proscons',
      items: [
        {
          pro: '수학적 정밀도: ISO 16 평균율 공식을 사용합니다.',
          con: '제한 사항: 평균율에만 적용되며 순정률 등 역사적 조율법에는 적용되지 않습니다.',
        },
        {
          pro: '자유로운 캘리브레이션: 400~480 Hz 사이의 A4 기준을 지원합니다.',
          con: '사인파는 악기의 실제 음색이 아닌 기본 주파수만 재현합니다.',
        },
        {
          pro: '양방향 변환: 동일한 도구에서 Hz를 음명으로, 음명을 Hz로 변환합니다.',
          con: '센트 미터는 순정율이 아닌 가장 가까운 반음에 대한 상대적인 값입니다.',
        },
        {
          pro: '검색 히스토리: 여러 패치나 샘플을 신속하게 비교할 수 있습니다.',
          con: '가청 범위(20 Hz ~ 20 kHz) 밖의 주파수는 실질적인 용도가 제한적입니다.',
        },
      ],
    },
    {
      type: 'title',
      text: '도구 사용을 위한 필수 용어집',
      level: 2,
    },
    {
      type: 'list',
      items: [
        'Hz (헤르츠): 초당 진동수. 음파의 주파수를 측정합니다.',
        'MIDI 노트: MIDI 표준에서 각 음을 식별하는 0~127 사이의 정수. A4 = 69.',
        '과학적 피치 표기: 음 이름 뒤에 옥타브 번호를 붙이는 명명 체계(A4, C3).',
        '센트(Cents): 반음의 1/100. 튜닝 편차를 정밀하게 표현할 수 있게 해줍니다.',
        '평균율: 모든 반음이 동일하게 배분된 조율 시스템(비율 2^(1/12)).',
        'A4: 기준음. 국제 표준: 440 Hz (ISO 16, 1975).',
        '배음(Harmonic): 어쿠스틱 악기에서 자연적으로 발생하는 기본 주파수의 정수배 주파수.',
        '파인 튜닝(Fine-tune): 센트 단위로 조율을 조정하기 위한 신시사이저 및 샘플러 파라미터.',
      ],
    },
  ],
};
