import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { GuitarStringTensionUI } from '../ui';

const slug = 'guitar-string-tension-calculator';
const title = 'Guitar String Tension Calculator';
const description = 'Estimate the tension of every guitar string from its gauge, scale length and tuning. Compare the feel of complete string sets offline in metric or imperial units.';

const ui: GuitarStringTensionUI = {
  metric: 'Metric',
  imperial: 'Imperial',
  metricLength: 'Scale length in mm',
  imperialLength: 'Scale length in inches',
  metricGauge: 'Gauge in mm',
  imperialGauge: 'Gauge in mil',
  metricTension: 'kg force',
  imperialTension: 'pounds force',
  chooseSet: 'Choose a string set',
  scaleLength: 'Scale length',
  tuning: 'Tuning',
  material: 'String material',
  customSet: 'Edit gauges',
  presetHint: 'Start with the closest set',
  gauge: 'Gauge',
  note: 'Note',
  frequency: 'Frequency',
  tension: 'Tension',
  status: 'Feel range',
  totalTension: 'Total pull on the neck',
  averageTension: 'Average per string',
  tensionSpread: 'Lightest to heaviest spread',
  low: 'Loose',
  balanced: 'Balanced',
  high: 'Firm',
  standard: 'Standard E',
  halfStepDown: 'Half step down',
  dropD: 'Drop D',
  wholeStepDown: 'Whole step down',
  openG: 'Open G',
  steel: 'Steel',
  nickel: 'Nickel plated steel',
  phosphorBronze: 'Phosphor bronze',
  nylon: 'Nylon',
  presetExtraLight: 'Extra light',
  presetRegular: 'Regular',
  presetMedium: 'Medium',
  presetHeavy: 'Heavy',
  presetCustom: 'Edit gauges',
  shortScale: 'Short scale 24.75 in',
  fenderScale: 'Fender scale 25.5 in',
  martinScale: 'Martin scale 25.4 in',
  customScale: 'Custom scale',
  customScaleHint: 'Use the vibrating length from nut to bridge',
  formulaNote: 'The estimate uses T = 4L²f²μ, where μ is the mass per unit length inferred from diameter and material density.',
  modelNote: 'This offline estimate uses a steel density model. Wound cores, wraps, coatings and manufacturer unit weights can shift real tension, so check the string maker data before changing an instrument setup.',
  faqTitle: 'Guitar string tension questions',
  bibliographyTitle: 'Sources for the tension model',
  tableLabel: 'Tension reading for each string',
  tensionMapLabel: 'Tension profile across the strings',
};

const faq = [
  {
    question: 'What does a guitar string tension calculator need?',
    answer: 'It needs the vibrating scale length, the pitch of each string, the string gauge and a consistent material-density estimate. A set preset supplies the six gauges, while the tuning changes the target frequencies.',
  },
  {
    question: 'Does a longer guitar scale increase string tension?',
    answer: 'Yes. With the same gauge and pitch, tension grows with the square of the vibrating length. That is why the same 10 to 46 set can feel firmer on a 25.5 inch guitar than on a 24.75 inch guitar.',
  },
  {
    question: 'How does changing tuning affect tension?',
    answer: 'Lowering a string lowers its tension by the square of the frequency ratio. A whole step down leaves about 79 percent of the original tension for that string, while a half step down leaves about 89 percent.',
  },
  {
    question: 'Are the tension results exact for wound guitar strings?',
    answer: 'No. The calculator models the string as a cylindrical strand using material density. Wound strings have cores, wraps and coatings, so manufacturer unit weight tables are more precise for a specific product.',
  },
  {
    question: 'What is a comfortable guitar string tension?',
    answer: 'There is no universal target. This tool marks readings below 8 pounds as loose and above 25 pounds as firm so you can spot extremes, but playing style, setup and instrument design decide what feels right.',
  },
  {
    question: 'Can I use the result to approve a new string set?',
    answer: 'Use it to compare scenarios, not as a safety guarantee. Check the instrument maker guidance and the string manufacturer specifications before installing a substantially different gauge or tuning.',
  },
];

const howTo = [
  { name: 'Choose the measurement system', text: 'Set Metric for millimetres, kilograms force and newtons, or Imperial for inches, mil and pounds force. The physical setup stays the same when you switch.' },
  { name: 'Choose a scale and tuning', text: 'Select the closest scale length, then choose the tuning. Use Custom scale when the nut to bridge vibrating length is known.' },
  { name: 'Select or edit the gauges', text: 'Start with a 9 to 42, 10 to 46, 11 to 49 or 12 to 54 preset. Choose Edit gauges when you want to compare a mixed set or a custom low string.' },
  { name: 'Read the tension map', text: 'Compare each string, the total neck pull and the lightest to heaviest spread. Loose and firm badges highlight strings that deserve a closer setup check.' },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })),
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

export const content: ToolLocaleContent<GuitarStringTensionUI> = {
  slug,
  title,
  description,
  ui,
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'summary', title: 'What this calculator compares', items: ['Tension for all six strings from one set preset or your own gauges', 'Scale length and tuning changes shown as a new tension profile', 'Metric and imperial readings with kilograms force or pounds force', 'Loose and firm markers that make extremes easy to spot before a setup change'] },
    { type: 'title', text: 'What string tension tells you about a guitar setup', level: 2 },
    { type: 'paragraph', html: 'String tension is the pulling force needed to hold a string at a chosen pitch. It is not the same thing as gauge alone: a thicker string usually weighs more, but pitch and vibrating length also change the force. A longer scale needs more tension to reach the same note, while a lower tuning needs less.' },
    { type: 'paragraph', html: 'The useful comparison is the tension profile across the whole set. If one string is much looser than its neighbours, bends and pick response can feel inconsistent. If one is much firmer, the same fret pressure may feel tiring or make that string harder to bend. The spread shown here helps you notice those differences before buying a new set.' },
    { type: 'title', text: 'The physical model behind the estimate', level: 2 },
    { type: 'paragraph', html: 'A vibrating string follows the relationship between frequency, vibrating length and linear mass density. Solving the wave equation for tension gives the model used here:' },
    { type: 'code', code: 'T = 4 × L² × f² × μ', ariaLabel: 'String tension formula' },
    { type: 'paragraph', html: 'Here T is tension in newtons, L is the vibrating length in metres, f is frequency in hertz and μ is mass per unit length in kilograms per metre. The calculator estimates μ from the circular cross section and a steel density model. It then converts the newton result to kilograms force and pounds force.' },
    { type: 'title', text: 'Why the same gauge feels different on different guitars', level: 2 },
    { type: 'paragraph', html: 'A 10 to 46 set is a family of diameters, not a fixed feel. Moving it from a 24.75 inch scale to a 25.5 inch scale increases every reading because length is squared in the model. Lowering the tuning reduces tension because frequency is also squared. Those two effects can reinforce each other when a long scale is tuned low or counteract each other when a short scale is tuned high.' },
    { type: 'tip', title: 'Use the spread before the headline total', html: 'The total pull is useful for comparing complete setups, but the lightest to heaviest spread is usually more revealing for playability. Look for a string that changes status when you switch tuning or scale, then compare that single reading with the strings around it.' },
    { type: 'title', text: 'Why manufacturer specifications still matter', level: 2 },
    { type: 'paragraph', html: 'The model treats each string as if its mass were distributed through one uniform cylinder. Real wound guitar strings use a core and one or more wraps; coatings and construction alter their unit weight. That is why the result is best used as an offline comparison lab, while the exact product table from the maker remains the reference for an installation.' },
    { type: 'title', text: 'A practical way to compare a new set', level: 2 },
    { type: 'list', items: ['Set the scale length from the instrument specification or measure nut to bridge and back from the twelfth fret.', 'Choose the tuning you actually use, including Drop D or a whole step down.', 'Start with the gauge family closest to your current set, then edit only the strings you plan to change.', 'Check the individual readings and spread, then verify the exact string maker data before installation.'] },
  ],
};
