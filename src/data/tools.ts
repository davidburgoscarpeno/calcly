export interface ToolFaq { q: string; a: string }
export interface ToolExample { title: string; input?: string; output?: string; note?: string }
export interface Tool {
  slug: string; name: string; category: string; description: string;
  seoTitle: string; metaDescription: string; intro: string;
  howTo: string[]; examples: ToolExample[]; faqs: ToolFaq[];
  related: string[]; component: string; mode?: string; implemented: boolean; popular?: boolean;
}

export const tools: Tool[] = [
  {
    slug: 'percentage-calculator',
    name: 'Percentage Calculator',
    category: 'Percentages',
    description: 'Calculate X% of Y, find what percent one number is of another, and percentage change.',
    seoTitle: 'Percentage Calculator - Calculate Percentages Online Free | Calcly',
    metaDescription: 'Free percentage calculator: what is X% of Y, X is what percent of Y, and percentage increase or decrease. Instant results with formulas shown.',
    intro: 'Three everyday percentage questions, answered instantly: a percent of a number, a number as a percent of another, and the percentage change between two values.',
    howTo: ['Pick the question you want to answer.', 'Enter the numbers.', 'Read the result - the formula used is shown below it.'],
    examples: [
      { title: 'What is 20% of 150?', output: '30. Formula: 150 x 20 / 100.' },
      { title: '45 is what percent of 180?', output: '25%. Formula: 45 / 180 x 100.' },
      { title: 'From 80 to 100?', output: '+25% increase. Formula: (100 - 80) / 80 x 100.' }
    ],
    faqs: [
      { q: 'How do I calculate a percentage of a number?', a: 'Multiply the number by the percentage and divide by 100. For example, 15% of 200 = 200 x 15 / 100 = 30.' },
      { q: 'How do I calculate percentage increase?', a: 'Subtract the old value from the new value, divide by the old value, and multiply by 100.' }
    ],
    related: [],
    component: 'PercentTool',
    implemented: true,
    popular: true
  }
];
export const implementedTools = tools.filter((t) => t.implemented);
export const categories = [...new Set(tools.map((t) => t.category))];
export function bySlug(slug: string) { return tools.find((t) => t.slug === slug); }
