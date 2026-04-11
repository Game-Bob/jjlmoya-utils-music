import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BpmCalculatorUI } from '../ui';

const slug = 'bpm-to-ms-calculator';
const title = 'BPM to Milliseconds Calculator for Delay and Reverb';
const description =
  'Convert your project tempo (BPM) into exact delay times (ms) and frequencies (Hz). The essential tool for setting delays, reverbs and compressors with rhythmic precision.';

const faqData = [
  {
    question: 'What is Pre-delay in a reverb?',
    answer:
      'Pre-delay is the time between the direct sound (source) and the beginning of the reverb tail. Setting it rhythmically allows the original source to stay clear before the spatial effect takes over — vital for vocals and percussion.',
  },
  {
    question: 'How does Tap Tempo work?',
    answer:
      'Tap Tempo detects the tempo by clicking rhythmically along with a song. Each click is timed and the system averages the intervals to give you the exact BPM. It is the fastest way to sync effects to an external track.',
  },
  {
    question: 'Why use milliseconds instead of automatic sync?',
    answer:
      "There are three main reasons: using analogue hardware without MIDI, fine-tuning pre-delays so the reverb breathes, and 'groove' adjustments where effects are nudged slightly off the grid to avoid a static, robotic feel.",
  },
  {
    question: 'What is the rhythmic Hz value used for?',
    answer:
      'Hertz values tell you how many times something happens per second. They are essential for configuring LFO oscillators, phaser sweep rates, or filter modulation on synthesisers that lack native tempo-sync.',
  },
];

const howToData = [
  {
    name: 'Enter the BPM',
    text: 'Type your project tempo into the central field or use the Tap Tempo button.',
  },
  {
    name: 'Find the subdivision',
    text: 'Locate the note you need (quarter, eighth, etc.) in the simple, dotted or triplet tables.',
  },
  {
    name: 'Copy the value',
    text: 'Click the copy icon next to the millisecond value to paste it directly into your plugin or hardware.',
  },
  {
    name: 'Set the Pre-delay',
    text: 'Use the bottom section for ultra-short values ideal for separating reverb from the lead vocal.',
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
  faqTitle: 'Frequently Asked Questions',
  faq: faqData,
  bibliographyTitle: 'Technical references',
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
    labelTempo: 'TEMPO (BPM)',
    btnTap: 'TAP TEMPO',
    sectionDelay: 'Delay Times',
    sectionDotted: 'Dotted Notes',
    sectionTriplets: 'Note Triplets',
    sectionReverb: 'Reverb Design (Pre-delay)',
    colNote: 'Note',
    colMs: 'ms',
    colHz: 'Hz',
    infoPreDelay:
      '<strong>Pre-delay</strong> separates the original attack from the reverb tail to gain clarity.',
    copyAriaMs: 'Copy milliseconds',
    copyAriaPreDelay: 'Copy pre-delay',
    copyFeedback: 'Copied!',
  },
  seo: [
    {
      type: 'summary',
      title: 'Calculator features',
      items: [
        'Instant calculation for simple, dotted and triplet notes',
        'Millisecond and Hz values for every rhythmic subdivision',
        'Pre-delay section for reverb design with musical precision',
        'Tap Tempo: detect BPM by tapping along to the music',
        'One-click copy to clipboard for any DAW or plugin',
      ],
    },
    {
      type: 'title',
      text: 'Why is a BPM to Milliseconds Calculator essential?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'In modern music production, rhythmic precision separates an amateur mix from a professional one. While most DAWs like Ableton Live, FL Studio or Logic Pro include automatic sync for their effects, there are countless situations where manual control is superior.',
    },
    {
      type: 'title',
      text: 'The importance of Pre-delay in Reverb',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'One of the most critical uses of this tool is adjusting the <strong>pre-delay</strong>. If you apply a reverb to a vocal without pre-delay, the effect tail starts immediately, clouding the consonants and reducing clarity. By calculating a rhythmic pre-delay (like a 64th or 128th note), you let the original voice breathe before the artificial acoustic space takes over. This creates a sense of depth without sacrificing the presence of the source.',
    },
    {
      type: 'title',
      text: 'Analogue Delay and External Hardware',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'If you collect analogue delay pedals or vintage synthesisers, you know many lack a MIDI clock input. Setting a tape delay manually requires knowing exactly how many milliseconds correspond to an eighth or dotted quarter note. Our calculator gives you those values instantly, letting you dial in your hardware with surgical precision.',
    },
    {
      type: 'title',
      text: "Off-the-grid Effects and Groove",
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Sometimes mathematical perfection sounds boring. Many producers use millisecond values as a starting point and then nudge them slightly up or down. Moving a delay 5 to 10 ms off the grid can add a human <em>swing</em> or unique <em>groove</em> that rigid quantisation can never replicate.',
    },
    {
      type: 'title',
      text: 'Synced Compression and LFOs',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Did you know the <strong>Attack</strong> and <strong>Release</strong> times of a compressor can also be rhythmic? Setting the release of your drum bus compressor to end exactly before the next kick hit creates a "pumping" or <em>breathing</em> effect that reinforces the song rhythm. Likewise, the Hz value is essential for configuring low-frequency oscillators (LFOs) on synths without native tempo sync.',
    },
    {
      type: 'tip',
      title: 'How to use Tap Tempo',
      html: 'The <strong>Tap Tempo</strong> feature is ideal for live situations or when you are listening to an external track whose tempo you do not know. Simply click rhythmically on the button following the pulse of the music. We recommend at least 4 or 5 taps so the algorithm can average the value more accurately.',
    },
    {
      type: 'title',
      text: 'Tempo Maths Formulas',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'The underlying formula is simple: <code>ms = 60,000 / BPM</code>. From there, multipliers are applied for each subdivision.',
    },
    {
      type: 'list',
      items: [
        'Simple notes: based on binary division (1, 0.5, 0.25, etc.).',
        'Dotted: multiply the base value by 1.5.',
        'Triplets: multiply the base value by 0.667 (2/3).',
      ],
    },
  ],
};
