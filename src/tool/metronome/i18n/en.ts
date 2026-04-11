import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MetronomeUI } from '../ui';

const slug = 'metronome';
const title = 'Online Metronome: High Precision Visual and Audio';
const description =
  'Free online metronome for musicians. Millisecond precision with Web Audio API. Visual, audio and Tap Tempo. Perfect for instrument practice.';

const faqData = [
  {
    question: 'Is this metronome accurate enough for professional use?',
    answer:
      'Yes. We use the Web Audio API, which schedules sounds directly on the device hardware clock. This avoids the micro-delays typical of other web applications and guarantees millisecond precision, even during long sessions.',
  },
  {
    question: 'What is Tap Tempo and how do I use it?',
    answer:
      "It's a feature that lets you calculate BPM by tapping rhythmically. Just click the 'TAP' button or press the spacebar to the beat of the music you're listening to, and instantly get the exact tempo.",
  },
  {
    question: 'Can I change the time signature and accents?',
    answer:
      'Yes, you can configure different time signatures (2/4, 3/4, 4/4, 6/8, etc.) and customise the beat accents to match the style of music you are practising.',
  },
  {
    question: "Why can't I hear anything on my iPhone or iPad?",
    answer:
      'On iOS devices, Web Audio technology respects the physical silent switch. Make sure your phone is not in silent mode and turn up the media volume to hear the clicks.',
  },
];

const howToData = [
  {
    name: 'Set the BPM',
    text: 'Use the slider or the fine-tune buttons to set the desired speed in beats per minute.',
  },
  {
    name: 'Configure the time signature',
    text: 'Choose the beat count (e.g. 4/4 or 3/4) so the metronome correctly accents the first beat of each bar.',
  },
  {
    name: 'Sync with external music (Tap)',
    text: "If you need to find the tempo of a song you're listening to, tap the TAP button along with the drums or main pulse.",
  },
  {
    name: 'Start practising',
    text: "Press the start button. The visual indicators will help you keep the beat even if you can't clearly hear the sound in your environment.",
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
  faqTitle: 'Frequently Asked Questions',
  faq: faqData,
  bibliographyTitle: 'Technical References',
  bibliography: [
    {
      name: 'Web Audio API – MDN Web Docs',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API',
    },
    {
      name: 'AudioContext – MDN Web Docs',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/AudioContext',
    },
    {
      name: 'A Tale of Two Clocks – Scheduling Web Audio with Precision (web.dev)',
      url: 'https://web.dev/articles/audio-scheduling',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  ui: {
    labelTempo: 'Tempo',
    labelBpmMin: '40 BPM',
    labelBpmMax: '240 BPM',
    labelTime: 'Time Sig.',
    labelTap: 'Tap Tempo',
    btnTap: 'TAP',
    warningTitle: 'No sound?',
    warningText:
      "If you're on iPhone/iPad, make sure the side silent switch is not active. Web Audio technology respects the system silent mode on many devices.",
  },
  seo: [
    {
      type: 'summary',
      title: 'Metronome features',
      items: [
        'Web Audio API engine — millisecond precision, no drift',
        'Tap Tempo: calculate BPM by tapping to the beat',
        'Configurable time signature from 1 to 12 beats with auto accent',
        'High-contrast visual indicator with ripple effect',
        'Volume control and ±1/±5 BPM fine-tune buttons',
      ],
    },
    {
      type: 'title',
      text: 'Rhythmic Precision at Your Browser',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Welcome to the <strong>Definitive Online Metronome</strong>. We built this tool with one goal in mind: <em>reliability</em>. Unlike other web metronomes that suffer from "drift" (small cumulative delays) due to processor load, our sound engine is built directly on the <strong>Web Audio API</strong>.',
    },
    {
      type: 'paragraph',
      html: 'This means that sound pulses are scheduled ahead of time on your device hardware clock, guaranteeing <strong>unbreakable millisecond precision</strong>, even if you minimise the tab or your computer is busy.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Clear Visualisation',
          description:
            'Large, high-contrast visual indicators with a "ripple" effect. Designed to be perceived with your peripheral vision, letting you keep your eyes on your sheet music or instrument without losing the beat.',
        },
        {
          title: 'Smart Tap Tempo',
          description:
            'Listening to a song and want to know its speed? Press the TAP button or the Space key along with the music. The algorithm will calculate the exact average of your taps.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Master Guide: How to Practise with a Metronome',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'The metronome is not just a ticking clock; it is the most impartial judge of your technique. Here is a proven methodology to improve your speed and cleanliness:',
    },
    {
      type: 'title',
      text: '1. The Ladder Method',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'If your goal is to play at <strong>120 BPM</strong>, do not start trying at that speed. Getting frustrated is easy; progressing requires strategy.',
    },
    {
      type: 'list',
      items: [
        'Start at 50% of your target speed (e.g. 60 BPM).',
        'Play the passage perfectly 3 times in a row. If you miss a note, the counter resets.',
        'Raise the metronome by just 5 BPM.',
        'Repeat until you reach your target speed.',
      ],
    },
    {
      type: 'title',
      text: '2. Accent Displacement',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Use our time signature selector to shift the accent. Practising a 4/4 passage with the metronome set to 3/4 means the accent (the sharp click) lands in different places within your phrasing, forcing you to internalise absolute time instead of relying on beat "one".',
    },
    {
      type: 'title',
      text: '3. Strategic Silences',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'An advanced technique is to set the metronome at half speed (e.g. 60 BPM if you play at 120) and feel each click as beats 1 and 3. Even harder: feel it only as the off-beats. This builds your <strong>internal clock</strong>.',
    },
    {
      type: 'title',
      text: 'Curious Facts about Tempo',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Tempo radically affects the emotional perception of music.',
    },
    {
      type: 'table',
      headers: ['Italian Term', 'BPM Approx.', 'Character'],
      rows: [
        ['Largo', '40 – 60', 'Slow and solemn'],
        ['Andante', '76 – 108', 'Walking pace, calm'],
        ['Allegro', '120 – 156', 'Fast, bright and joyful'],
        ['Presto', '168 – 200', 'Very fast, frantic'],
      ],
    },
    {
      type: 'title',
      text: 'Technology Behind This Metronome',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'This is not a looping MP3 player. We are generating pure sine waves in real time. The main oscillator creates a <strong>1000 Hz</strong> tone for the accent and <strong>800 Hz</strong> for the weak beats, with an ultra-short ADSR envelope for maximum punch. This ensures an instant sound attack.',
    },
    {
      type: 'paragraph',
      html: 'Whether you are a drummer locking in the groove, a pianist working on scales, or a guitarist perfecting a solo, this metronome is your silent partner (until you hit play).',
    },
    {
      type: 'tip',
      title: "Can't hear the sound on mobile?",
      html: "If you're on iPhone/iPad, make sure the <strong>side silent switch</strong> is not activated. Web Audio technology respects the system silent mode on many devices.",
    },
  ],
};
