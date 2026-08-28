import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { SEOSection, ToolLocaleContent } from '../../../types';
import type { GuitarStringTensionUI } from '../ui';

interface FAQItem {
  question: string;
  answer: string;
}

interface HowToItem {
  name: string;
  text: string;
}

export interface GuitarStringTensionLocaleData {
  slug: string;
  title: string;
  description: string;
  ui: GuitarStringTensionUI;
  faq: FAQItem[];
  howTo: HowToItem[];
  seo: SEOSection[];
}

function answerAt(data: GuitarStringTensionLocaleData, index: number, fallback: string): string {
  return data.faq[index]?.answer ?? fallback;
}

function buildSeo(data: GuitarStringTensionLocaleData): SEOSection[] {
  const [summary, titleOne, paragraphOne, titleTwo, paragraphTwo, titleThree, paragraphThree, list] = data.seo;
  return [
    summary!,
    titleOne!,
    paragraphOne!,
    { type: 'paragraph', html: answerAt(data, 0, data.description) },
    titleTwo!,
    paragraphTwo!,
    { type: 'code', code: 'T = 4L²f²μ', ariaLabel: data.ui.formulaNote },
    { type: 'paragraph', html: answerAt(data, 1, data.ui.formulaNote) },
    titleThree!,
    paragraphThree!,
    { type: 'tip', title: data.faq[2]?.question ?? data.ui.tensionSpread, html: answerAt(data, 2, data.ui.modelNote) },
    { type: 'title', text: data.faq[3]?.question ?? data.ui.bibliographyTitle, level: 2 },
    { type: 'paragraph', html: answerAt(data, 3, data.ui.modelNote) },
    { type: 'title', text: data.faq[4]?.question ?? data.ui.tableLabel, level: 2 },
    list!,
  ];
}

export function createGuitarStringTensionContent(data: GuitarStringTensionLocaleData): ToolLocaleContent<GuitarStringTensionUI> {
  const faqSchema: WithContext<FAQPage> = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
  };
  const howToSchema: WithContext<HowTo> = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: data.title,
    description: data.description,
    step: data.howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })),
  };
  const appSchema: WithContext<SoftwareApplication> = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: data.title,
    description: data.description,
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  };
  return { ...data, bibliography, schemas: [faqSchema, howToSchema, appSchema], seo: buildSeo(data) };
}
