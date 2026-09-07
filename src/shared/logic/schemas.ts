import type { WithContext, SoftwareApplication, FAQPage, HowTo, Thing } from 'schema-dts';
import type { FAQItem, HowToStep } from '../../types';

interface SchemaOptions {
  title: string;
  description: string;
  inLanguage: string;
  faq: FAQItem[];
  howTo: HowToStep[];
}

function buildAppSchema(title: string, description: string, inLanguage: string): WithContext<SoftwareApplication> {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: title,
    description,
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
    inLanguage,
  };
}

function buildFaqSchema(faq: FAQItem[]): WithContext<FAQPage> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };
}

function buildHowToSchema(title: string, howTo: HowToStep[]): WithContext<HowTo> {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: title,
    step: howTo.map((step) => ({
      '@type': 'HowToStep',
      name: step.name,
      itemListElement: [{ '@type': 'HowToDirection', text: step.text }],
    })),
  };
}

export function generateSchemas(options: SchemaOptions): WithContext<Thing>[] {
  const { title, description, inLanguage, faq, howTo } = options;
  return [
    buildAppSchema(title, description, inLanguage),
    buildFaqSchema(faq),
    buildHowToSchema(title, howTo),
  ] as WithContext<Thing>[];
}
