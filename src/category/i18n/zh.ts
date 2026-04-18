import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'music',
  title: '在线音乐工具',
  description:
    '为音乐家、制作人和爱好者提供的免费音乐实用工具。节拍器、BPM计算器、频率转换器、音符对照表等。',
  seo: [
    {
      type: 'summary',
      title: '您将在此类别中找到的内容',
      items: [
        '使用Web Audio API的在线节拍器 — 毫秒精度',
        '用于延迟和混响的BPM到毫秒计算器',
        '频率到音乐音符转换器（Hz、音分和失调）',
        '用于麦克风对齐的相位距离计算器',
        '拉丁、美国和德国系统之间的音符对应',
        '数字音频存储计算器',
      ],
    },
    {
      type: 'title',
      text: '创作过程每个阶段的音乐工具',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '从第一次排练到最终混音，每位音乐家和制作人都需要随时可用的精准工具。我们的<strong>在线音乐实用工具</strong>集合以一个明确的目标设计：以最小的摩擦实现最大的技术精度。',
    },
    {
      type: 'paragraph',
      html: '无需安装。所有工具直接在浏览器中运行，完全免费，保护您的隐私：数据不会离开您的设备。',
    },
    {
      type: 'title',
      text: '为练习中的音乐家',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>在线节拍器</strong>是任何训练或练习中的音乐家的基本工具。我们的节拍器使用Web Audio API保证毫秒精度，消除漂移，并通过涟漪效果提供视觉反馈。<strong>点击节拍</strong>功能让您即时找到任何歌曲的BPM。',
    },
    {
      type: 'title',
      text: '为音乐制作人',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>BPM到毫秒计算器</strong>在任何混音会话中都不可或缺。将延迟或混响同步到歌曲节奏，使有活力的混音和听起来人工的混音之间产生差异。同样，<strong>相位距离计算器</strong>以采样级精度对齐麦克风，防止多麦克风录音中的相位抵消。',
    },
    {
      type: 'title',
      text: '为音响工程师',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>频率到音乐音符转换器</strong>将任何Hz值转换为对应的音符，并显示以音分为单位的偏差。非常适合调校模拟合成器、识别房间中有问题的共振或处理走调的采样。<strong>数字音频存储计算器</strong>帮助规划录音项目并精确管理磁盘空间。',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: '技术精度',
          description: '所有工具均基于经过数学验证的算法。没有近似值：结果精确且可重现。',
        },
        {
          title: '完全隐私',
          description: '处理在您的设备上进行。没有音频、文件或个人数据传输到任何服务器。',
        },
      ],
    },
    {
      type: 'title',
      text: '音乐的通用语言',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '音乐是一种具有多种记谱系统的语言。<strong>音符对应</strong>工具即时在拉丁系统（Do、Re、Mi…）、美国系统（C、D、E…）和德国系统（用H替代B的C、D、E…）之间翻译，避免与来自不同传统的音乐家沟通或阅读不同国家乐谱时的混淆。',
    },
    {
      type: 'tip',
      title: '无需安装',
      html: '所有工具直接在浏览器中运行，无需插件或额外应用程序。将此页面加入书签，以便在您的会话期间随时使用。',
    },
  ],
};
