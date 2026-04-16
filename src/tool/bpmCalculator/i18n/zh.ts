import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BpmCalculatorUI } from '../ui';

const slug = 'bpm-to-ms-calculator';
const title = '用于延迟和混响的 BPM 转毫秒计算器';
const description =
  '将您的项目节拍 (BPM) 转换为精确的延迟时间 (ms) 和频率 (Hz)。通过节奏精度设置延迟、混响和压缩器的必备工具。';

const faqData = [
  {
    question: '混响中的预延迟 (Pre-delay) 是什么？',
    answer:
      '预延迟是直达声（声源）与混响尾音开始之间的时间。有节奏地设置它可以让原始声源在空间效果接管之前保持清晰——这对于人声和打击乐至关重要。',
  },
  {
    question: '打点计时 (Tap Tempo) 是如何工作的？',
    answer:
      '打点计时通过跟随歌曲节奏点击来检测速度。每次点击都会被计时，系统会平均间隔以给出准确的 BPM。这是将效果与外部轨道同步的最快方法。',
  },
  {
    question: '为什么要使用毫秒而不是自动同步？',
    answer:
      "主要有三个原因：使用没有 MIDI 的模拟硬件、精调预延迟以使混响“呼吸”，以及进行“Groove”调整，即让效果稍微偏离网格，以避免产生呆板、机械的感觉。",
  },
  {
    question: '节奏 Hz 值用于什么？',
    answer:
      '赫兹 (Hz) 值告诉您每秒发生某事的次数。它们对于在缺乏原生速度同步的合成器上配置 LFO 振荡器、移相器 (phaser) 扫频速率或滤波器调制至关重要。',
  },
];

const howToData = [
  {
    name: '输入 BPM',
    text: '在中心字段输入您的项目速度或使用 Tap Tempo 按钮。',
  },
  {
    name: '查找细分音符',
    text: '在简单音符、附点音符或三连音音符表中找到您需要的音符（四分、八分等）。',
  },
  {
    name: '复制数值',
    text: '点击毫秒值旁边的复制图标，将其直接粘贴到您的插件或硬件中。',
  },
  {
    name: '设置预延迟',
    text: '在底部区域使用超短数值，非常适合将混响与主唱分离。',
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
  faqTitle: '常见问题',
  faq: faqData,
  bibliographyTitle: '技术参考',
  bibliography: [
    {
      name: 'The Art of Mixing: A Visual Guide to Recording, Engineering, and Production',
      url: 'https://exellon.net/book/The%20Art%20Of%20Mixing%20A%20Visual%20Guide%20To%20Recording%20Engineering%20And%20Production%20(1997)%20-%20David%20Gibson%20Mix%20Books.pdf',
    },
    {
      name: 'BPM to MS Conversion Formula — Tuneform',
      url: 'https://tuneform.com/tools/time-tempo-bpm-to-milliseconds-ms',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  ui: {
    labelTempo: '速度 (BPM)',
    btnTap: 'TAP TEMPO',
    sectionDelay: '延迟时间',
    sectionDotted: '附点音符',
    sectionTriplets: '三连音',
    sectionReverb: '混响设计 (预延迟)',
    colNote: '音符',
    colMs: 'ms',
    colHz: 'Hz',
    infoPreDelay:
      '<strong>预延迟</strong>将原始起音与混响尾音分离，以获得清晰度。',
    copyAriaMs: '复制毫秒',
    copyAriaPreDelay: '复制预延迟',
    copyFeedback: '已复制！',
  },
  seo: [
    {
      type: 'summary',
      title: '计算器功能',
      items: [
        '即时计算简单音符、附点音符和三连音',
        '每个节奏细分的毫秒和 Hz 数值',
        '用于高精度音乐混响设计的预延迟部分',
        'Tap Tempo：通过跟随音乐点击来检测 BPM',
        '一键复制到剪贴板，适用于任何 DAW 或插件',
      ],
    },
    {
      type: 'title',
      text: '为什么 BPM 转毫秒计算器必不可少？',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '在现代音乐制作中，节奏精度决定了混音是业余水平还是专业水平。虽然大多数 DAW（如 Ableton Live、FL Studio 或 Logic Pro）都为其效果器内置了自动同步功能，但在无数情况下，手动控制效果更佳。',
    },
    {
      type: 'title',
      text: '预延迟在混响中的重要性',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '此工具最关键的用途之一是调整 <strong>预延迟</strong>。如果您在没有预延迟的情况下给人声添加混响，效果尾音会立即开始，模糊辅音并降低清晰度。通过计算有节奏的预延迟（如 1/64 或 1/128 音符），您可以让原始声音在人工声学空间接管之前获得“呼吸”感。这创造了深度感，同时不牺牲声源的存在感。',
    },
    {
      type: 'title',
      text: '模拟延迟与外部硬件',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '如果您收藏模拟延迟踏板或复古合成器，您会知道许多设备缺乏 MIDI 时钟输入。手动设置磁带延迟需要准确知道八分音符或附点四分音符对应多少毫秒。我们的计算器能即时为您提供这些数值，让您以“外科手术”般的精度调节硬件。',
    },
    {
      type: 'title',
      text: '偏离网格的效果与 Groove',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '有时数学上的完美听起来很无聊。许多制作人使用毫秒值作为起点，然后将其略微调高或调低。将延迟从网格中移开 5 到 10 毫秒可以增加一种人为的 <em>Swing</em> 或独特的 <em>Groove</em>，这是死板的量化永远无法复制的。',
    },
    {
      type: 'title',
      text: '同步压缩与 LFO',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '您知道压缩器的 <strong>起音 (Attack)</strong> 和 <strong>释放 (Release)</strong> 时间也可以是有节奏的吗？将鼓组总线压缩器的释放时间设置为恰好在下次底鼓敲击前结束，可以创造出一种强化歌曲节奏的“抽吸”或 <em>呼吸</em> 效果。同样，Hz 数值对于在没有原生速度同步的合成器上配置低频振荡器 (LFO) 至关重要。',
    },
    {
      type: 'tip',
      title: '如何使用 Tap Tempo',
      html: '<strong>Tap Tempo</strong> 功能非常适合现场表演或在听一段速度未知的外部轨道时使用。只需跟随音乐律动节奏性地点击按钮即可。我们建议至少点击 4 或 5 次，以便算法能更准确地平均出数值。',
    },
    {
      type: 'title',
      text: '速度数学公式',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '其基本公式很简单：<code>ms = 60,000 / BPM</code>。在此基础上，对每个细分音符应用倍数。',
    },
    {
      type: 'list',
      items: [
        '简单音符：基于二进制划分（1、0.5、0.25 等）。',
        '附点：将基础值乘以 1.5。',
        '三连音：将基础值乘以 0.667 (2/3)。',
      ],
    },
  ],
};
