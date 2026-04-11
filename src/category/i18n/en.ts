import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'music',
  title: 'Online Music Tools',
  description:
    'Free music utilities for musicians, producers and enthusiasts. Metronome, BPM calculator, frequency converter, note equivalency and more.',
  seo: [
    {
      type: 'summary',
      title: 'What you will find in this category',
      items: [
        'Online metronome with Web Audio API — millisecond precision',
        'BPM to milliseconds calculator for delays and reverbs',
        'Frequency to musical note converter (Hz, cents and detuning)',
        'Phase distance calculator for microphone alignment',
        'Note equivalency between Latin, American and German systems',
        'Digital audio storage calculator',
      ],
    },
    {
      type: 'title',
      text: 'Music Tools for Every Stage of the Creative Process',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'From the first rehearsal to the final mastering, every musician and producer needs precise tools available at any time. Our collection of <strong>online music utilities</strong> has been designed with one clear goal: maximum technical precision with minimum friction.',
    },
    {
      type: 'paragraph',
      html: 'No installation required. All tools run directly in your browser, are completely free and protect your privacy: no data leaves your device.',
    },
    {
      type: 'title',
      text: 'For the Practising Musician',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'The <strong>online metronome</strong> is the fundamental tool for any musician in training or in practice. Our metronome uses the Web Audio API to guarantee millisecond precision, eliminate drift and provide visual feedback with a ripple effect. The <strong>Tap Tempo</strong> feature lets you instantly find the BPM of any song.',
    },
    {
      type: 'title',
      text: 'For the Music Producer',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'The <strong>BPM to milliseconds calculator</strong> is essential in any mixing session. Syncing a delay or reverb to the song tempo makes the difference between a mix that breathes and one that sounds artificial. Similarly, the <strong>phase distance calculator</strong> aligns microphones with sample-level precision and prevents phase cancellation in multi-microphone recordings.',
    },
    {
      type: 'title',
      text: 'For the Sound Engineer',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'The <strong>frequency to musical note converter</strong> transforms any Hz value to its equivalent note, also showing the deviation in cents. Perfect for tuning analogue synthesisers, identifying problematic resonances in a room, or working with off-pitch samples. The <strong>digital audio storage calculator</strong> helps plan recording projects and manage disk space with precision.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Technical Precision',
          description:
            'All tools are based on mathematically verified algorithms. No approximations: results are exact and reproducible.',
        },
        {
          title: 'Full Privacy',
          description:
            'Processing happens on your device. No audio, file or personal data is transmitted to any server.',
        },
      ],
    },
    {
      type: 'title',
      text: 'The Universal Language of Music',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Music is a language with multiple notation systems. The <strong>note equivalency</strong> tool instantly translates between the Latin system (Do, Re, Mi…), the American system (C, D, E…) and the German system (C, D, E… with H instead of B), avoiding confusion when communicating with musicians from different traditions or reading scores from different countries.',
    },
    {
      type: 'tip',
      title: 'No installation needed',
      html: 'All tools run directly in the browser, with no plugins or additional apps. Bookmark this page to have them always at hand during your sessions.',
    },
  ],
};
