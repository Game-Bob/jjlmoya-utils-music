import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MusicNoteEquivalencyUI } from '../ui';

const slug = 'music-note-equivalency';
const title = '음명 대응표: 라틴계, 영미계 및 독일계 시스템';
const description =
  '라틴계(Do, Re, Mi), 영미계(C, D, E) 및 독일계(H) 시스템 간의 음명을 변환하는 인터랙티브 툴입니다. 피아노 시각화, 옥타브 및 주파수(Hz) 확인 기능을 포함합니다.';

const faqData = [
  {
    question: '미국식 또는 영미식 표기법이란 무엇인가요?',
    answer:
      'A부터 G까지의 알파벳을 사용하여 음을 나타내는 시스템입니다. 현대 음악과 재즈의 표준입니다. 이 시스템에서 A=La, B=Si, C=Do, D=Re, E=Mi, F=Fa, G=Sol이 됩니다.',
  },
  {
    question: '왜 독일에서는 B를 H라고 부르나요?',
    answer:
      "중세 시대 'B-quadratum'의 그래픽적 진화 때문입니다. 독일어권 국가에서는 H를 내추럴 B(시)에 사용하고, B는 플랫 B(시♭) 전용으로 사용합니다.",
  },
  {
    question: "과학적 피치 표기법에서 '가운데 C'란 무엇인가요?",
    answer:
      '88건반 피아노의 중앙에 있는 C 건반으로, ANSI/국제 표준에서는 C4라고 부릅니다. 음악원에서 널리 쓰이는 프랑스-벨기에 시스템에서는 Do3라고 부릅니다.',
  },
  {
    question: '두 음이 이명동음(Enharmonic)이라는 것은 무슨 뜻인가요?',
    answer:
      '이름은 다르지만 물리적으로 같은 소리를 나타내며 피아노의 같은 건반에서 연주된다는 뜻입니다. 예를 들어 C 샵(C#)과 D 플랫(Db)은 이명동음입니다.',
  },
  {
    question: 'A4의 표준 주파수는 얼마인가요?',
    answer:
      '국제 표준 주파수는 440 Hz입니다(ISO 16 표준). 오케스트라, 악기 및 디지털 신시사이저를 조율하기 위한 세계 공통 기준입니다.',
  },
];

const howToData = [
  {
    name: '옥타브 선택',
    text: '상단의 숫자 선택기를 사용하여 작업하려는 피아노의 옥타브를 지정합니다(기본값은 중앙인 옥타브 4입니다).',
  },
  {
    name: '피아노 건반 누르기',
    text: '인터랙티브 피아노의 건반을 클릭하거나 탭하면 해당 음의 기술 정보와 명칭을 확인할 수 있습니다.',
  },
  {
    name: '시스템 비교',
    text: '하단 패널에서 해당 음이 라틴계, 영미계, 독일계 시스템에서 동시에 어떻게 불리는지 확인하세요.',
  },
  {
    name: '듣고 확인하기',
    text: "'듣기' 버튼을 누르면 선택한 음의 정확한 주파수를 들어보고 음의 높이를 확인할 수 있습니다.",
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

export const content: ToolLocaleContent<MusicNoteEquivalencyUI> = {
  slug,
  title,
  description,
  faqTitle: '자주 묻는 질문',
  faq: faqData,
  bibliographyTitle: '기술 참고 자료',
  bibliography: [
    {
      name: 'ISO 16:1975 Acoustics — Standard tuning frequency',
      url: 'https://www.iso.org/standard/3601.html',
    },
    {
      name: 'The Harvard Dictionary of Music - Notation Systems',
      url: 'https://www.hup.harvard.edu/catalog.php?isbn=9780674011632',
    },
    {
      name: 'Nomenclature of Musical Notes - Theory of Music',
      url: 'https://en.wikipedia.org/wiki/Musical_note#Note_names_and_history',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  ui: {
    octaveLabel: '과학적 피치 표기 (C4 = 가운데 C):',
    systemsTitle: '명칭 시스템',
    systemLatino: '라틴계 (계명)',
    systemAnglo: '영미계 (현대)',
    systemGerman: '독일계 (독일식)',
    sciNotationTitle: '과학적 표기법',
    systemAnsi: '국제 표준 (ANSI)',
    systemFranco: '프랑스-벨기에식',
    systemEnharmonic: '실용적 이명동음',
    techTitle: '기술 데이터 및 파형',
    btnPlay: '듣기',
    btnCopy: '정보 복사',
    initialTitle: '피아노 건반을 선택하세요',
    copyDone: '복사 완료!',
    copyLabelNote: '음',
    copyLabelGerman: '독일식 시스템',
    copyLabelFreq: '주파수',
    copyLabelAnsi: '과학적 옥타브',
    copyLabelUrl: 'URL',
    naLabel: '해당 없음',
  },
  seo: [
    {
      type: 'summary',
      title: '다국어 음명 변환기',
      items: [
        '<strong>3가지 시스템 동시 표시</strong>: 라틴계, 영미계 및 독일계를 한눈에 확인.',
        '<strong>인터랙티브 피아노</strong>: 아무 건반이나 클릭하여 모든 대응 관계 확인.',
        '<strong>정확한 주파수</strong>: ISO 16 표준에 따른 각 음의 Hz 표시.',
        '<strong>이명동음</strong>: 두 가지 이름을 가진 음을 자동으로 식별.',
      ],
    },
    {
      type: 'title',
      text: '다양한 시스템 간의 음명 대응 이해하기',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '음악은 보편적인 언어이지만, 그 표기법과 명칭은 지리적 지역과 학문적 배경에 따라 크게 다릅니다. 라틴어 사용 국가와 유럽의 고전적 전통에서는 라틴계 시스템(Do, Re, Mi...)이 우세한 반면, 현대 음악, 재즈 및 영어권 국가에서는 미국식 표기법(C, D, E...)이 표준화되었습니다. 또한 독일의 영향을 받은 국가에서는 내추럴 B를 H라고 부르고 B 플랫을 B라고 부르는 역사적인 특수성이 있습니다.',
    },
    {
      type: 'title',
      text: '주요 3가지 음악 명칭 시스템',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>라틴계 시스템 (계명):</strong> 이탈리아, 스페인, 프랑스 및 남미 대부분의 지역에서 사용됩니다. 귀도 다레초의 성 요한 찬가에 기초하며 Do, Re, Mi, Fa, Sol, La, Si를 사용합니다.',
        '<strong>미국식 표기법 (영미계):</strong> 재즈, 팝, 록의 세계 표준입니다. A=La를 기점으로 알파벳의 처음 7글자(A-G)를 할당합니다. C는 Do에 해당하는 글자입니다.',
        '<strong>독일계 시스템:</strong> 독일, 오스트리아 및 북유럽 국가에서 사용됩니다. 가장 큰 차이점은 내추럴 B에 H를 사용하고 B 플랫에 B를 사용하는 것입니다.',
      ],
    },
    {
      type: 'title',
      text: '독일식 표기법에서 B와 H에 얽힌 흥미로운 역사',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '많은 초보자들이 왜 독일에서는 음 시(Si)를 H라고 쓰는지 궁금해합니다. 그 기원은 중세 시대 필사자의 실수에 있습니다. 오래된 문자 시스템에서는 B라는 글자가 시 음에 쓰였습니다. 여기에는 두 가지 변형이 있었습니다: <em>B quadratum</em>(네모난 B, 내추럴 시용)과 <em>B rotundum</em>(둥근 B, 플랫 시용)입니다.',
    },
    {
      type: 'paragraph',
      html: '시간이 흐르면서 독일 필사본에서 <em>B quadratum</em>의 모양이 점점 소문자 h와 닮아가게 되었습니다. 이러한 시각적 변화가 인쇄 기술을 통해 고착화되면서 현재의 독일식 명칭인 내추럴 시는 H, 플랫 시는 B가 탄생했습니다. 흥미롭게도 이러한 구분 덕분에 요한 제바스티안 바흐와 같은 작곡가들은 유명한 "B-A-C-H" 동기(시♭ - 라 - 도 - 시♮)를 사용하여 자신의 작품에 서명할 수 있었습니다.',
    },
    {
      type: 'title',
      text: '원음 대응 비교표',
      level: 2,
    },
    {
      type: 'table',
      headers: ['음명 (라틴계)', '표기 (영미계)', '독일어 (독일계)', '유래'],
      rows: [
        ['Do', 'C', 'C', '기초 주파수'],
        ['Re', 'D', 'D', '제2음'],
        ['Mi', 'E', 'E', '제3음'],
        ['Fa', 'F', 'F', '제4음'],
        ['Sol', 'G', 'G', '제5음'],
        ['La', 'A', 'A', '조율 기준음'],
        ['Si', 'B', 'H', '가장 큰 차이점'],
      ],
    },
    {
      type: 'title',
      text: '샵, 플랫 그리고 이명동음의 개념',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '서양 음악에서는 한 옥타브당 12개의 소리를 사용합니다. 5개의 추가 음은 변화 기호인 샵(#)과 플랫(♭)으로 나타냅니다. 샵은 음을 반음 올리고, 플랫은 반음 내립니다.',
    },
    {
      type: 'paragraph',
      html: '이것은 <strong>이명동음(Enharmony)</strong>이라는 개념으로 이어집니다. 이름은 다르지만 소리는 똑같고 피아노의 같은 건반을 공유하는 두 음을 말합니다. 예를 들어 C#과 Db은 이명동음입니다. 저희 계산기는 이러한 대응 관계를 자동으로 강조해 주는데, 이는 어떤 악보에서는 F#을 요구하는데 다른 악보에서는 같은 조성에서 Gb을 요구하는 이유를 이해하는 데 필수적입니다.',
    },
    {
      type: 'title',
      text: '옥타브: 과학적 표기법 vs 프랑스-벨기에식',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '국제 과학적 피치 표기법 (ANSI): 가운데 도를 C4라고 부릅니다. 신시사이저, DAW 및 음악 소프트웨어(MIDI)의 표준입니다.',
        '프랑스-벨기에식 표기법: 클래식 음악원에서 널리 사용됩니다. 이 시스템에서 가운데 도는 Do3입니다.',
        '헬름홀츠 방식: 대문자, 소문자 및 프라임 기호(C, c, c\', c\'\')를 사용합니다. 오래된 기술 문헌이나 독일 음향학에서 더 흔히 보입니다.',
      ],
    },
    {
      type: 'tip',
      title: '제작자를 위한 팁',
      html: 'DAW 사용 시 주의하세요: 야마하와 같은 일부 제조사는 가운데 도를 C3로 간주하는 반면, 롤랜드나 FL Studio 등은 C4 또는 C5로 간주하기도 합니다. 신시사이저 소리가 한 옥타브 차이가 난다면 소프트웨어가 어떤 과학적 표기 표준을 따르는지 확인하세요.',
    },
    {
      type: 'title',
      text: '헤르츠(Hz) 단위 주파수 및 표준 조율',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '물리적인 관점에서 각 음은 헤르츠(초당 진동수)로 측정되는 특정 주파수에 대응합니다. 국제 조율 표준(ISO 16)은 <strong>A4</strong>가 정확히 <strong>440 Hz</strong>에서 진동한다고 규정합니다.',
    },
    {
      type: 'list',
      items: [
        '기술적 오차가 발생할 수 있는 아날로그 신시사이저 조율.',
        '믹싱 시 특정 음의 공진을 제거하기 위해 정밀 이퀄라이저 설정.',
        '물리적 음 높이와 음악적 인지 사이의 관계 이해.',
        '센트(cents) 단위로 피치를 조정하여 샘플을 정밀하게 변환.',
      ],
    },
    {
      type: 'title',
      text: '이 계산기의 실전 활용 사례',
      level: 2,
    },
    {
      type: 'proscons',
      items: [
        {
          pro: '영어 악보를 읽어야 하는 세션 연주자를 위한 표기법 간 즉각 변환.',
          con: '이 시스템은 미세 음률이나 비서구권 조율은 고려하지 않습니다.',
        },
        {
          pro: '악보의 음악적 철자를 맞추기 위한 이명동음 식별.',
          con: '오디오 재생은 순수 파형이며, 실제 악기의 음색을 가지고 있지 않습니다.',
        },
        {
          pro: '화성학 학습자를 위한 과학적 표기에서 프랑스-벨기에식으로의 옥타브 변환.',
          con: '표준 A4=440Hz 조율만 가정하며, 바로크 조율(415 Hz) 등은 상정하지 않습니다.',
        },
        {
          pro: '스케일과 코드 학습을 돕는 직관적인 피아노 시각화.',
          con: '각 맥락에서 어떤 변화 기호가 가장 적절한지 해석하려면 기초 이론 지식이 필요합니다.',
        },
      ],
    },
    {
      type: 'title',
      text: '기술 용어 사전 참고',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '반음(Semitone): 서양 음악 시스템에서 두 음 사이의 최소 거리(예: 미에서 파).',
        '온음(Tone): 반음 두 개에 해당하는 거리(예: 도에서 레).',
        '기보법: 음과 코드를 나타내기 위한 약어 시스템.',
        '헤르츠(Hz): 소리 주파수의 측정 단위.',
        '옥타브: 한 음의 주파수가 다른 음의 두 배가 되는 두 음 사이의 간격.',
        '조표: 조성을 정의하기 위해 오선보 처음에 붙는 변화 기호들의 모음.',
      ],
    },
  ],
};
