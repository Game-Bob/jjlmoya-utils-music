import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { AudioStorageCalculatorUI } from '../ui';

const slug = 'audio-storage-calculator';
const title = '오디오 저장 공간 계산기: WAV, FLAC, MP3 파일 크기';
const description =
  '샘플 레이트와 비트 깊이를 기반으로 WAV, FLAC, MP3 형식의 오디오 녹음에 필요한 디스크 공간을 추정합니다.';

const faqData = [
  {
    question: '44.1 kHz 16비트 오디오 1시간은 어느 정도의 용량을 차지하나요?',
    answer:
      '스테レオ(CD 품질)의 경우, 1시간의 오디오는 비압축(WAV/AIFF) 기준으로 약 635 MB의 디스크 공간을 차지합니다.',
  },
  {
    question: '왜 WAV 형식은 그렇게 많은 공간을 차지하나요?',
    answer:
      'WAV는 비압축 "무손실(lossless)" 형식이기 때문입니다. 즉, 데이터 축소 없이 최고의 충실도를 유지하기 위해 모든 오디오 샘플을 개별적으로 저장합니다.',
  },
  {
    question: '공간 절약을 위해 FLAC와 MP3 중 어느 것이 더 좋은가요?',
    answer:
      'FLAC은 품질 저하 없이 최대 50%의 공간을 절약할 수 있습니다(무손실 압축). MP3는 최대 80-90%까지 절약할 수 있지만, 인지할 수 없는 오디오 정보를 제거합니다(손실 압축).',
  },
  {
    question: '2시간 분량의 팟캐스트에 필요한 공간은 어떻게 계산하나요?',
    answer:
      '48 kHz / 24비트 모노로 녹음할 경우 약 988 MB가 필요합니다. 이 계산기를 사용하면 장비에 맞춰 이러한 매개변수를 정확하게 조정할 수 있습니다.',
  },
];

const howToData = [
  {
    name: '오디오 설정',
    text: '샘플 레이트(kHz), 비트 깊이 및 채널 수를 선택합니다.',
  },
  {
    name: '시간 입력',
    text: '녹음 예상 시간을 시간, 분, 초 단위로 입력합니다.',
  },
  {
    name: '결과 분석',
    text: '산출된 크기(MB 또는 GB)를 확인하고 FLAC이나 MP3 등 다양한 형식과 비교해 봅니다.',
  },
  {
    name: '용량 평가',
    text: '해당 녹음이 SD 카드나 하드 드라이브 용량의 몇 퍼센트를 차지할지 확인합니다.',
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
  faqTitle: '자주 묻는 질문',
  faq: faqData,
  bibliographyTitle: '기술 참조',
  bibliography: [
    {
      name: '비트 깊이 – 위키백과',
      url: 'https://ko.wikipedia.org/wiki/%EB%B9%84%ED%8A%B8_%EA%B9%8A%EC%9D%B4',
    },
    {
      name: '샘플링 레이트 – 위키백과',
      url: 'https://ko.wikipedia.org/wiki/%EC%83%98%ED%94%8C%EB%A7%81_%EB%A0%88%EC%9D%B4%ED%8A%B8',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  ui: {
    labelConfig: '오디오 구성',
    labelHz: '샘플 레이트 (kHz)',
    labelBits: '비트 깊이',
    labelChannels: '채널',
    labelDuration: '녹음 시간',
    labelHours: '시간',
    labelMinutes: '분',
    labelSeconds: '초',
    labelCapacity: '사용 가능한 저장 공간 (GB)',
    toggleLabelSpace: '여유 공간으로 녹음 가능 시간 계산하기',
    labelComparison: '형식 및 저장 공간 비교',
    thFormat: '형식',
    thQuality: '품질',
    thSize: '추정 크기',
    qualityWav: '비압축 (무손실)',
    qualityFlac: '무손실 압축',
    qualityMp3High: '고품질 (손실 압축)',
    qualityMp3Std: '표준 품질 / 음성',
    labelDevices: '일반 장치에서의 사용 비율',
    device32: '32GB SD 카드',
    device128: '128GB 저장 장치',
    device1tb: '1TB 하드 드라이브',
    btnCopy: '요약 복사',
    optHz44100: '44.1 kHz (CD)',
    optHz48000: '48 kHz (비디오 표준)',
    optHz88200: '88.2 kHz',
    optHz96000: '96 kHz (고해상도)',
    optHz192000: '192 kHz (Ultra HD)',
    optBits16: '16비트 (CD / 표준)',
    optBits24: '24비트 (프로듀서 / 영화)',
    optBits32: '32비트 (부동 소수점)',
    optCh1: '모노 (1 채널)',
    optCh2: '스테레오 (2 채널)',
    optCh6: '5.1 서라운드 (6 채널)',
    optCh8: '7.1 서라운드 (8 채널)',
    labelDurationSet: '설정 시간: {time}',
    labelRecordingPossible: '{gb} GB 설정에서 녹음이 가능합니다',
    toggleLabelTime: '시간 계산으로 돌아가기',
    labelSpaceAvailable: '여유 공간',
    copyDone: '요약이 복사되었습니다!',
    summarySpace:
      '{channels} 모드, {bits}비트/{hz}로 {t} 동안 녹음하면 약 {result}를 차지합니다.',
    summaryTime:
      '{space} GB의 여유 공간이 있으면 {bits}비트/{hz} {channels}로 최대 {result}까지 녹음할 수 있습니다.',
  },
  seo: [
    {
      type: 'summary',
      title: '디지털 사운드 저장 공간 계산기',
      items: [
        '<strong>WAV에서 MP3로</strong>: 압축 유무에 따른 파일 크기를 계산합니다.',
        '<strong>오디오 해상도</strong>: 주파수(kHz) 및 비트(16/24/32)를 조정합니다.',
        '<strong>역산 기능</strong>: 남은 공간으로 얼마나 녹음할 수 있을까요?',
        '<strong>전문가용 형식</strong>: FLAC 및 192kHz 마스터링에 대한 추정치를 계산합니다.',
      ],
    },
    { type: 'title', text: '오디오 녹음 크기는 어떻게 계산되나요?', level: 2 },
    {
      type: 'paragraph',
      html: '비압축 디지털 오디오 파일(예: WAV, AIFF)의 크기는 세 가지 기본 기술적 요소에 따라 달라집니다. <strong>샘플 레이트</strong>(초당 음파를 측정하는 횟수, 예: 44.1 kHz 또는 48 kHz), <strong>비트 깊이</strong>(각 측정의 해상도. 비트가 높을수록 다이내믹 레인지가 넓어지고 노이즈가 줄어듦), 그리고 <strong>채널</strong>(모노(1), 스테레오(2) 또는 멀티채널(서라운드))입니다. 표준 수학 공식은 <strong>비트레이트</strong>를 구한 후 여기에 초 단위 시간을 곱하여 총 원시 파일 크기를 산출합니다.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'CD 품질',
          description:
            '16비트 / 44.1 kHz. 스테레오 기준 분당 약 10.1 MB를 차지합니다. 음악 산업의 역사적인 표준 규격입니다.',
        },
        {
          title: '프로 레코딩',
          description:
            '24비트 / 48 kHz. 비디오 및 영화 표준입니다. 분당 약 16.5 MB를 차지합니다. 믹싱을 위한 헤드룸이 더 넓습니다.',
        },
        {
          title: '고해상도(Hi-Res)',
          description:
            '24비트 / 96 kHz. 마스터링에 사용됩니다. 표준 녹음 크기의 두 배인 분당 최대 33 MB까지 늘어납니다.',
        },
      ],
    },
    { type: 'title', text: '왜 24비트 오디오는 16비트보다 용량을 50%나 더 차지하나요?', level: 2 },
    {
      type: 'paragraph',
      html: '16비트의 각 오디오 샘플은 진폭을 저장하는 데 2바이트(16 ÷ 8)를 사용합니다. 24비트 오디오는 샘플당 3바이트를 사용합니다. 즉, 샘플 레이트가 같다면 24비트 파일은 16비트 파일보다 정확히 50% 더 큽니다. 16비트/44.1kHz에서 1시간 녹음이 635 MB라면, 동일한 24비트/44.1kHz 녹음은 953 MB로 늘어납니다.',
    },
    {
      type: 'tip',
      title: '추가 공간을 사용할 가치가 있을까요?',
      html: '더 많은 공간을 차지하긴 하지만, 24비트 오디오는 16비트의 96 dB에 비해 144 dB의 다이내믹 레인지를 제공합니다. 이는 훨씬 낮은 "노이즈 플로어"를 제공하여 미세한 신호도 배경 노이즈 문제 없이 녹음할 수 있게 해주며, 이는 전문적인 믹싱과 마스터링 과정에서 필수적입니다.',
    },
    { type: 'title', text: 'WAV vs FLAC vs MP3: 디스크에 미치는 영향', level: 2 },
    {
      type: 'paragraph',
      html: '<strong>WAV / AIFF</strong>는 원본 녹음의 모든 비트를 보존하는 비압축 형식이지만 가장 무겁습니다. <strong>FLAC</strong>은 무손실 압축을 적용하여 품질 저하 없이 원본 크기를 40~60% 줄여줍니다. <strong>MP3 / AAC</strong>는 손실 압축을 적용하여 인지할 수 없는 주파수를 제거하며, 320 kbps MP3는 원본 WAV의 약 22% 용량을 차지합니다.',
    },
    {
      type: 'table',
      headers: ['품질', '주파수', '비트', '분당 MB (스테레오)'],
      rows: [
        ['전화 통화', '8 kHz', '8비트', '0.94 MB'],
        ['FM 라디오', '32 kHz', '16비트', '7.32 MB'],
        ['원본 CD', '44.1 kHz', '16비트', '10.09 MB'],
        ['비디오 스튜디오', '48 kHz', '24비트', '16.48 MB'],
        ['하이파이', '96 kHz', '24비트', '32.96 MB'],
      ],
    },
    { type: 'title', text: '기술자를 위한 계산 공식', level: 2 },
    {
      type: 'paragraph',
      html: '수동으로 계산하거나 자체 소프트웨어에 구현해야 하는 경우, 본 계산기가 따르는 로직은 다음과 같습니다.',
    },
    {
      type: 'code',
      ariaLabel: '오디오 저장 용량 계산 로직',
      code: `const sampleRate = 48000;\nconst bitDepth = 24;\nconst channels = 2;\nconst seconds = 3600;\n\nconst bitsPerSecond = sampleRate * bitDepth * channels;\nconst totalBytes = (bitsPerSecond * seconds) / 8;`,
    },
    { type: 'title', text: '이 도구의 활용 사례', level: 2 },
    {
      type: 'list',
      items: [
        '팟캐스팅: 긴 인터뷰 중에 휴대용 레코더의 저장 공간이 부족해지는 일을 방지하세요.',
        '음악 스튜디오: 96kHz로 40트랙 세션을 시작하기 전에 몇 GB의 여유 공간이 필요한지 계산하세요.',
        '디지털 사운드 엔지니어링: 전송 비트레이트가 하드웨어와 호환되는지 확인하세요.',
        '영화 포스트 프로덕션: 네트워크 파일 전송을 위해 5.1 멀티채널 촬영분의 크기를 추정하세요.',
        '아카이빙: 아날로그 테이프 컬렉션을 마스터 품질로 디지털화하는 데 필요한 용량을 결정하세요.',
      ],
    },
  ],
};
