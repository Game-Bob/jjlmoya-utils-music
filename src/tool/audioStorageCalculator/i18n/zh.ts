import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { AudioStorageCalculatorUI } from '../ui';

const slug = 'audio-storage-calculator';
const title = '音频存储计算器：WAV、FLAC 和 MP3 文件大小';
const description =
  '根据采样率和位深度，估算 WAV、FLAC 和 MP3 格式音频录制所需的磁盘空间。';

const faqData = [
  {
    question: '1 小时 44.1 kHz 16-bit 的音频占用多少空间？',
    answer:
      '在立体声（CD 质量）模式下，1 小时的音频约占用 635 MB 的未压缩磁盘空间（WAV/AIFF）。',
  },
  {
    question: '为什么 WAV 格式占用这么多空间？',
    answer:
      'WAV 是一种未压缩的“无损”格式，这意味着它会单独存储每个音频样本，以在不减少数据的情况下保持最大忠实度。',
  },
  {
    question: '为了节省空间，选择 FLAC 还是 MP3 更好？',
    answer:
      'FLAC 可在不损失质量的情况下节省高达 50% 的空间（无损压缩）。MP3 最多可节省 80-90% 的空间，但会移除无法感知的音频信息（有损压缩）。',
  },
  {
    question: '如何计算 2 小时播客所需的空间？',
    answer:
      '如果您以 48 kHz / 24-bit 单声道录制，大约需要 988 MB。通过此计算器，您可以根据设备精确调整这些参数。',
  },
];

const howToData = [
  {
    name: '配置音频参数',
    text: '选择采样率 (kHz)、位深度和声道数。',
  },
  {
    name: '输入时长',
    text: '输入预计录制的时、分、秒时长。',
  },
  {
    name: '分析结果',
    text: '查看生成的 MB 或 GB 大小，并与 FLAC 或 MP3 等不同格式进行对比。',
  },
  {
    name: '评估容量',
    text: '检查录音将占用 SD 卡或硬盘存储空间的百分比。',
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
  faqTitle: '常见问题',
  faq: faqData,
  bibliographyTitle: '技术参考',
  bibliography: [
    {
      name: '音频位深度 – 维基百科',
      url: 'https://zh.wikipedia.org/wiki/%E9%9F%B3%E9%A2%91%E4%BD%8D%E6%B7%B1%E5%BA%A6',
    },
    {
      name: '采样率 – 维基百科',
      url: 'https://zh.wikipedia.org/wiki/%E9%87%87%E6%A0%B7%E7%8E%87',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  ui: {
    labelConfig: '音频配置',
    labelHz: '采样率 (kHz)',
    labelBits: '位深度',
    labelChannels: '声道',
    labelDuration: '录制时长',
    labelHours: '时',
    labelMinutes: '分',
    labelSeconds: '秒',
    labelCapacity: '可用存储 (GB)',
    toggleLabelSpace: '根据剩余空间计算可录制时长',
    labelComparison: '格式与存储对比',
    thFormat: '格式',
    thQuality: '质量',
    thSize: '预估大小',
    qualityWav: '未压缩 (无损)',
    qualityFlac: '无损压缩',
    qualityMp3High: '高质量 (有损)',
    qualityMp3Std: '标准质量 / 人声',
    labelDevices: '常见设备的占用百分比',
    device32: '32GB SD 卡',
    device128: '128GB 存储',
    device1tb: '1TB 硬盘',
    btnCopy: '复制摘要',
    optHz44100: '44.1 kHz (CD)',
    optHz48000: '48 kHz (视频标准)',
    optHz88200: '88.2 kHz',
    optHz96000: '96 kHz (高分辨率)',
    optHz192000: '192 kHz (超高清)',
    optBits16: '16-bit (CD / 标准)',
    optBits24: '24-bit (制作 / 电影)',
    optBits32: '32-bit (浮点)',
    optCh1: '单声道 (1 channel)',
    optCh2: '立体声 (2 channels)',
    optCh6: '5.1 环绕声 (6 channels)',
    optCh8: '7.1 环绕声 (8 channels)',
    labelDurationSet: '设定时长: {time}',
    labelRecordingPossible: '设定 {gb} GB 可录制',
    toggleLabelTime: '返回时长计算',
    labelSpaceAvailable: '可用空间',
    copyDone: '摘要已复制！',
    summarySpace:
      '以 {bits}-bit/{hz} 的 {channels} 模式录制 {t} 约需 {result}。',
    summaryTime:
      '拥有 {space} GB 空间，您可以按 {bits}-bit/{hz} {channels} 录制长达 {result} 的音频。',
  },
  seo: [
    {
      type: 'summary',
      title: '数字音频存储计算器',
      items: [
        '<strong>WAV 转 MP3</strong>：计算压缩与未压缩的文件大小。',
        '<strong>音频分辨率</strong>：调整采样率 (kHz) 和位数 (16/24/32)。',
        '<strong>反向计算</strong>：剩余空间可以录制多久？',
        '<strong>专业格式</strong>：估算 FLAC 和 192kHz 母带制作所需空间。',
      ],
    },
    { type: 'title', text: '音频录制的大小是如何计算的？', level: 2 },
    {
      type: 'paragraph',
      html: '未压缩数字音频文件（如 WAV 或 AIFF）的大小取决于三个关键技术因素：<strong>采样率</strong> —— 每秒对声波进行“测量”的次数（例如 44.1 kHz 或 48 kHz）；<strong>位深度</strong> —— 每次测量的分辨率，位数越高，动态范围越大，底噪越低；以及<strong>声道</strong> —— 录音是单声道 (1)、立体声 (2) 还是多声道（环绕声）。标准数学公式首先得到<strong>比特率</strong>，再乘以持续秒数，即可得出原始文件总大小。',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'CD 质量',
          description:
            '16-bit / 44.1 kHz。立体声下每分钟约 10.1 MB。音乐行业的历史标准。',
        },
        {
          title: '专业录音',
          description:
            '24-bit / 48 kHz。视频和电影的标准。每分钟约 16.5 MB。为混音提供更大的动态余量。',
        },
        {
          title: '高分辨率',
          description:
            '24-bit / 96 kHz。用于母带制作。大小是标准录音的两倍，每分钟可达 33 MB。',
        },
      ],
    },
    { type: 'title', text: '为什么 24-bit 音频比 16-bit 占用多 50% 的空间？', level: 2 },
    {
      type: 'paragraph',
      html: '在 16-bit 中，每个音频样本使用 2 个字节 (16 ÷ 8) 存储振幅。而在 24-bit 中，每个样本使用 3 个字节。这意味着在相同采样率下，24-bit 文件的大小正好比 16-bit 文件大 50%。如果在 16-bit/44.1kHz 下一小时的录音占用 635 MB，那么在 24-bit/44.1kHz 下则会增加到 953 MB。',
    },
    {
      type: 'tip',
      title: '额外的空间值得吗？',
      html: '虽然占用更多空间，但 24-bit 音频提供 144 dB 的动态范围，而 16-bit 仅为 96 dB。这提供了极低的“底噪”，使得微弱信号在录制时不会受到背景噪音的干扰 —— 这在专业的混音和母带处理中至关重要。',
    },
    { type: 'title', text: 'WAV vs FLAC vs MP3：对磁盘的影响', level: 2 },
    {
      type: 'paragraph',
      html: '<strong>WAV / AIFF</strong> 是未压缩格式，保留了原始录音的每一个比特，但文件最重。<strong>FLAC</strong> 采用无损压缩，在不牺牲质量的前提下可减少 40-60% 的原始大小。<strong>MP3 / AAC</strong> 采用有损压缩，移除了无法感知的频率；320 kbps 的 MP3 大小约为原始 WAV 的 22%。',
    },
    {
      type: 'table',
      headers: ['质量', '频率', '位数', '每分钟 MB (立体声)'],
      rows: [
        ['电话通话', '8 kHz', '8-bit', '0.94 MB'],
        ['调频广播', '32 kHz', '16-bit', '7.32 MB'],
        ['原版 CD', '44.1 kHz', '16-bit', '10.09 MB'],
        ['视频工作室', '48 kHz', '24-bit', '16.48 MB'],
        ['高保真', '96 kHz', '24-bit', '32.96 MB'],
      ],
    },
    { type: 'title', text: '面向技术人员的计算公式', level: 2 },
    {
      type: 'paragraph',
      html: '如果您需要手动计算或在自己的软件中实现，以下是我们计算器的逻辑：',
    },
    {
      type: 'code',
      ariaLabel: '音频存储计算逻辑',
      code: `const sampleRate = 48000;\nconst bitDepth = 24;\nconst channels = 2;\nconst seconds = 3600;\n\nconst bitsPerSecond = sampleRate * bitDepth * channels;\nconst totalBytes = (bitsPerSecond * seconds) / 8;`,
    },
    { type: 'title', text: '此工具的应用场景', level: 2 },
    {
      type: 'list',
      items: [
        '播客制作：避免在长途采访中便携式录音机空间不足。',
        '音乐工作室：在开启 96kHz 的 40 轨工程前，计算所需的 GB 空间。',
        '数字声学工程：验证传输比特率是否与您的硬件兼容。',
        '电影后期：估算 5.1 多声道录音的大小以便进行网络文件交付。',
        '归档保存：确定以母带质量数字化模拟磁带收藏所需容量。',
      ],
    },
  ],
};
