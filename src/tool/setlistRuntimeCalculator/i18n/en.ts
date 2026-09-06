import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SetlistRuntimeCalculatorUI } from '../ui';

const slug = 'music-setlist-runtime-calculator';
const title = 'Concert Setlist Runtime Calculator';
const description =
  'Plan a concert setlist and see its exact runtime, finish time, pauses, encore impact and remaining venue slot in one local browser tool.';

const faqData = [
  {
    question: 'What does a setlist runtime calculator include?',
    answer:
      'It adds the duration of each song and the pauses between songs, then compares the resulting runtime with the booked slot. Optional encores can be left out until you want to test them.',
  },
  {
    question: 'Should I add the final pause after the last song?',
    answer:
      'No. The calculator only counts a pause when another included item follows it. The pause field on the final included item is ignored so the finish time does not include a break after the show.',
  },
  {
    question: 'Can I plan an encore separately?',
    answer:
      'Yes. Add an encore and leave it excluded while you check the main set. Include it with the toggle to see the new finish time and the remaining or exceeded slot.',
  },
  {
    question: 'Does the calculator save or upload my setlist?',
    answer:
      'No. The calculation happens in your browser and the tool does not need an account, API or uploaded file. Use the copy action when you want to share the generated schedule yourself.',
  },
];

const howToData = [
  {
    name: 'Set the venue slot',
    text: 'Enter the planned start time and the number of minutes you have been given for the performance.',
  },
  {
    name: 'Add the songs',
    text: 'Enter each song title and its expected duration in minutes and seconds. Add the pause or changeover time before the next item.',
  },
  {
    name: 'Test the encore',
    text: 'Add an encore as an optional item. Keep it excluded for the main set, then include it to see whether the full plan still fits.',
  },
  {
    name: 'Share the finish time',
    text: 'Use the finish time, margin and timeline to adjust the order before sending the schedule to the venue or crew.',
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

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howToData.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
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

export const content: ToolLocaleContent<SetlistRuntimeCalculatorUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  ui: {
    labelStartTime: 'Show start time',
    labelSlot: 'Booked slot',
    unitMinutes: 'min',
    labelSetOrder: 'Set order',
    labelSong: 'Song',
    labelEncore: 'Encore',
    labelTitle: 'Title',
    labelDuration: 'Duration',
    labelPauseAfter: 'Pause after',
    unitPause: 'min',
    buttonAddSong: 'Add song',
    buttonAddEncore: 'Add encore',
    buttonRemove: 'Remove',
    buttonIncludeEncore: 'Include encore',
    buttonExcludeEncore: 'Exclude encore',
    labelFinish: 'Finish time',
    labelTotal: 'Total runtime',
    labelSongs: 'Songs',
    labelPauses: 'Pauses',
    labelMargin: 'Slot margin',
    statusWithin: 'Fits the slot',
    statusOver: 'Over the slot',
    statusInvalid: 'Check the setlist',
    withinMessage: 'Your current plan finishes before the booked time.',
    overMessage: 'Trim the plan or move the finish time before sharing it with the venue.',
    invalidMessage: 'Add valid titles and durations to see the finish time.',
    timelineLabel: 'Runtime timeline',
    bookedMarker: 'Booked slot',
    songMarker: 'Song',
    pauseMarker: 'Pause',
    buttonCopy: 'Copy schedule',
    copySuccess: 'Schedule copied.',
    copyFailure: 'Copy was not available. Select the schedule manually.',
    emptySetlist: 'Add at least one song to build the schedule.',
    invalidStart: 'Enter a valid start time.',
    invalidSlot: 'The booked slot must be between 15 minutes and 12 hours.',
    invalidTitle: 'Add a title.',
    invalidDuration: 'Use a duration such as 04:00.',
    invalidPause: 'Use a pause from 0 to 30 minutes.',
    hintDuration: 'Use mm:ss, or h:mm:ss for a long item.',
    hintExample: 'Edit the example rows, then add songs or test an optional encore.',
  },
  seo: [
    {
      type: 'summary',
      title: 'Setlist calculator features',
      items: [
        'Add songs, changeovers and pauses with an immediate finish time',
        'Compare the complete runtime with the venue slot and see the exact margin',
        'Keep an encore optional until you want to test its impact',
        'Read a visual timeline of songs, pauses and the booked finish marker',
        'Copy a plain-text schedule for a venue, band or crew message',
        'Runs locally in the browser without an account or upload',
      ],
    },
    {
      type: 'title',
      text: 'Know when the show will finish before doors open',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A setlist is more than a sequence of song titles. The time between songs, instrument changes, tuning and audience interaction all affect when the performance ends. This calculator turns the timings you already know into a schedule you can check before sending it to a venue.',
    },
    {
      type: 'paragraph',
      html: 'Enter the contracted start time and the length of the booked slot, then edit the example rows or add your own songs. Each pause belongs to the transition after that song. The last included song has no following pause, so the finish estimate does not add a break after the performance.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Main set first',
          description: 'Keep the encore excluded while you make sure the core performance fits the slot.',
        },
        {
          title: 'Test the full plan',
          description: 'Include the encore when you want to see the real finish time and whether it creates an overrun.',
        },
      ],
    },
    {
      type: 'title',
      text: 'How to estimate a useful song duration',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Use the duration you expect on stage, not only the studio recording length. A live intro, a spoken setup, a count-in or an extended final chorus can add time. If the band has a range, test the longer version first and keep the margin visible.',
    },
    {
      type: 'code',
      code: 'finish time = show start + songs + transitions',
      ariaLabel: 'Setlist finish time formula',
    },
    {
      type: 'tip',
      title: 'Leave a margin when the venue is strict',
      html: 'A positive margin is not spare time to fill automatically. It is room for applause, a longer changeover or a small delay. If the result is negative, remove time before the show rather than hoping the set will run faster.',
    },
    {
      type: 'title',
      text: 'What the timeline shows',
      level: 2,
    },
    {
      type: 'list',
      items: [
        'Blue blocks represent the expected playing time of each included song.',
        'Thin warm gaps represent pauses or changeovers between included items.',
        'The vertical marker shows the end of the booked slot.',
        'An encore uses a separate accent so you can see its effect when it is included.',
      ],
    },
    {
      type: 'title',
      text: 'Limits of the estimate',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'This is a planning calculation, not a promise about the exact end of a live show. It does not know the venue rules, set change requirements or the length of audience interaction. The result is only as useful as the durations and pauses you enter, so label uncertain items conservatively.',
    },
  ],
};
