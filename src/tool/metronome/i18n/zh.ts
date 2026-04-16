import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MetronomeUI } from '../ui';

const slug = 'metronome';
const title = '在线节拍器：高精度视觉与音频体验';
const description =
  '为音乐人打造的免费在线节拍器。利用 Web Audio API 实现毫秒级精度。具备视觉提示、音频反馈及 Tap Tempo 功能。乐器练习的理想之选。';

const faqData = [
  {
    question: '这个节拍器的精确度足以满足专业用途吗？',
    answer:
      '是的。我们使用 Web Audio API，它直接在设备的硬件时钟上调度声音。这避免了其他 Web 应用中常见的微小延迟，并保证了毫秒级的精度，即使是在长时间的练习中。',
  },
  {
    question: '什么是 Tap Tempo，如何使用？',
    answer:
      '这是一项允许你通过节奏性地点击来计算 BPM（每分钟节拍数）的功能。只需点击“TAP”按钮或根据你正在听的音乐节奏按下空格键，即可立即获取准确的节奏。',
  },
  {
    question: '我可以更改拍号和重音吗？',
    answer:
      '是的，你可以配置不同的拍号（2/4、3/4、4/4、6/8 等），并根据你正在练习的音乐风格自定义节拍重音。',
  },
  {
    question: '为什么我的 iPhone 或 iPad 听不到声音？',
    answer:
      '在 iOS 设备上，Web Audio 技术遵循物理静音开关。请确保你的手机未处于静音模式，并调高媒体音量。',
  },
];

const howToData = [
  {
    name: '设置 BPM',
    text: '使用滑块或微调按钮设置所需的每分钟节拍速度。',
  },
  {
    name: '配置拍号',
    text: '选择拍数（例如 4/4 或 3/4），以便节拍器在每小节的第一拍正确发出重音。',
  },
  {
    name: '与外部音乐同步 (Tap)',
    text: '如果你需要找出正在听的歌曲的速度，请跟随鼓点或主要律动点击 TAP 按钮。',
  },
  {
    name: '开始练习',
    text: '按下开始按钮。即使你在周围环境听不清声音，视觉指示器也能帮助你保持节奏。',
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
  faqTitle: '常见问题解答',
  faq: faqData,
  bibliographyTitle: '技术参考',
  bibliography: [
    {
      name: 'Web Audio API – MDN Web Docs',
      url: 'https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Audio_API',
    },
    {
      name: 'AudioContext – MDN Web Docs',
      url: 'https://developer.mozilla.org/zh-CN/docs/Web/API/AudioContext',
    },
    {
      name: 'A Tale of Two Clocks – Scheduling Web Audio with Precision (web.dev)',
      url: 'https://web.dev/articles/audio-scheduling',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  ui: {
    labelTempo: '速度 (Tempo)',
    labelBpmMin: '40 BPM',
    labelBpmMax: '240 BPM',
    labelTime: '拍号',
    labelTap: 'Tap Tempo',
    btnTap: 'TAP',
    warningTitle: '没声音？',
    warningText:
      '如果你使用的是 iPhone/iPad，请确保侧边静音开关未开启。Web Audio 技术在许多设备上都遵循系统的静音模式。',
  },
  seo: [
    {
      type: 'summary',
      title: '节拍器特色',
      items: [
        'Web Audio API 引擎 — 毫秒级精度，无漂移',
        'Tap Tempo：通过跟随节拍点击来计算 BPM',
        '可配置从 1 到 12 拍的拍号，带自动重音',
        '带波纹效果的高对比度视觉指示器',
        '音量控制及 ±1/±5 BPM 微调按钮',
      ],
    },
    {
      type: 'title',
      text: '在浏览器中享受精准律动',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '欢迎使用<strong>终极在线节拍器</strong>。我们打造此工具时始终贯彻一个目标：<em>可靠性</em>。与其他容易因处理器负载产生“漂移”（累积延迟）的 Web 节拍器不同，我们的声音引擎直接构建在 <strong>Web Audio API</strong> 之上。',
    },
    {
      type: 'paragraph',
      html: '这意味着声音脉冲是提前在设备的硬件时钟上调度的。即使你最小化标签页或电脑正在运行繁忙任务，也能保证<strong>坚如磐石的毫秒级精度</strong>。',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: '清晰的可视化',
          description:
            '带有“波纹”效果的高对比度大型视觉指示器。专为余光感知而设计，让你在盯着乐谱或乐器的同时不会丢失节奏。',
        },
        {
          title: '智能 Tap Tempo',
          description:
            '正在听一首歌并想知道它的速度？跟随音乐节奏点击 TAP 按钮或空格键。算法将计算你点击次数的精确平均值。',
        },
      ],
    },
    {
      type: 'title',
      text: '大师指南：如何配合节拍器练习',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '节拍器不仅仅是一个滴答作响的时钟，它是你演奏技术最公正的评官。以下是提高速度和演奏整洁度的有效方案：',
    },
    {
      type: 'title',
      text: '1. 阶梯练习法',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '如果你的目标是以 <strong>120 BPM</strong> 演奏，请不要一开始就尝试那个速度。盲目尝试很容易受挫；进步需要战略。',
    },
    {
      type: 'list',
      items: [
        '从目标速度的 50%（如 60 BPM）开始。',
        '连续完美演奏该片段 3 次。如果弹错了一个音，计数器重置。',
        '仅将节拍器调快 5 BPM。',
        '重复此过程，直到达到目标速度。',
      ],
    },
    {
      type: 'title',
      text: '2. 重音移位',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '使用我们的拍号选择器来移动重音。用设定为 3/4 拍的节拍器练习 4/4 拍的片段，意味着重音（尖锐的点击声）会落在乐句中不同的位置，这会强迫你内化绝对时间的感官，而不是依赖每小节的“第一拍”。',
    },
    {
      type: 'title',
      text: '3. 策略性留白',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '一种高级技巧是设置半速节拍器（如果你以 120 速度演奏，则设置为 60 BPM），并将每次点击视为第 1 拍和第 3 拍。难度更高的是：仅将其视为弱拍（off-beats）。这能培养你的<strong>内心时钟</strong>。',
    },
    {
      type: 'title',
      text: '关于速度的趣闻',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '速度彻底影响着对音乐的情绪感知。',
    },
    {
      type: 'table',
      headers: ['意大利语术语', '近似 BPM', '性格'],
      rows: [
        ['Largo (广板)', '40 – 60', '缓慢且庄严'],
        ['Andante (行板)', '76 – 108', '慢步走的速度，平静'],
        ['Allegro (快板)', '120 – 156', '快速，明亮且欢快'],
        ['Presto (急板)', '168 – 200', '非常快，急速'],
      ],
    },
    {
      type: 'title',
      text: '本节拍器背后的技术',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '这并非循环播放的 MP3 播放器。我们实时生成纯正的正弦波。主振荡器为重音创建 <strong>1000 Hz</strong> 音调，为弱拍创建 <strong>800 Hz</strong> 音调，并采用超短 ADSR 包络以获得最大冲击力。这确保了瞬间的声音打击感。',
    },
    {
      type: 'paragraph',
      html: '无论你是稳定律动的鼓手、苦练音阶的钢琴家，还是精进独奏的吉他手，这款节拍器都是你身边的无声伙伴（直到你按下播放键）。',
    },
    {
      type: 'tip',
      title: '移动端没声音？',
      html: '如果你使用的是 iPhone/iPad，请确保<strong>侧边静音开关</strong>未被激活。Web Audio 技术在许多设备上都遵循系统的静音模式。',
    },
  ],
};
