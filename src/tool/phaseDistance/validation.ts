export const validation = {
  reviewedAt: '2026-09-07',
  methodology: 'Distance difference is converted to propagation delay using the temperature-adjusted speed of sound and the selected sample rate.',
  sources: ['https://en.wikipedia.org/wiki/Speed_of_sound', 'https://www.soundonsound.com/techniques/multiple-microphone-phase-alignment'],
  referenceCases: ['Coincident microphones, a 0.30 m distance difference at 20 C, and metric/imperial unit switching.'],
  limitations: 'Room reflections, microphone placement, transducer response and DAW routing can change the audible result.',
} as const;
