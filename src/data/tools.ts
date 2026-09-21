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
  },
  {
    slug: 'percentage-increase-calculator',
    name: 'Percentage Increase Calculator',
    category: 'Percentages',
    description: 'Calculate the percentage increase (or decrease) between two values.',
    seoTitle: 'Percentage Increase Calculator - % Change Online | Calcly',
    metaDescription: 'Free percentage increase calculator. Find the percent change from an old value to a new one, with the formula shown.',
    intro: 'How much did something grow, in percent? Enter the starting value and the new value.',
    howTo: ['Enter the old value and the new value.', 'Read the percentage increase (a negative result means a decrease).'],
    examples: [{ title: 'Price went from 80 to 92', output: '+15%. Formula: (92 - 80) / 80 x 100.' }],
    faqs: [{ q: 'Increase vs difference?', a: 'Increase is measured relative to the starting value; percentage difference is relative to the average of both values. Use increase for growth over time.' }],
    related: ['percentage-calculator', 'percentage-difference-calculator', 'discount-calculator'],
    component: 'PercentChangeTool', mode: 'increase', implemented: true, popular: true
  },
  {
    slug: 'percentage-difference-calculator',
    name: 'Percentage Difference Calculator',
    category: 'Percentages',
    description: 'Calculate the percentage difference between two numbers, relative to their average.',
    seoTitle: 'Percentage Difference Calculator - Compare Two Values | Calcly',
    metaDescription: 'Free percentage difference calculator. Compare two values relative to their average, with formula and examples.',
    intro: 'Compare two values symmetrically: the difference as a percentage of their average.',
    howTo: ['Enter both values.', 'Read the percentage difference (always positive, order does not matter).'],
    examples: [{ title: 'Compare 150 and 180', output: '18.18%. Formula: |150-180| / 165 x 100.' }],
    faqs: [{ q: 'Why relative to the average?', a: 'When neither value is the "original", the average is the neutral reference point.' }],
    related: ['percentage-calculator', 'percentage-increase-calculator'],
    component: 'PercentChangeTool', mode: 'difference', implemented: true
  },
  {
    slug: 'age-calculator',
    name: 'Age Calculator',
    category: 'Dates',
    description: 'Exact age in years, months and days from a date of birth.',
    seoTitle: 'Age Calculator - Exact Age in Years, Months, Days | Calcly',
    metaDescription: 'Free age calculator. Enter a date of birth and get the exact age in years, months and days, plus total days alive.',
    intro: 'Enter a date of birth and get the exact age today: years, months and days, plus total days alive.',
    howTo: ['Pick the date of birth.', 'The exact age appears instantly, calculated against today.'],
    examples: [{ title: 'Born 1990-06-15', output: 'On 2026-09-22: 36 years, 3 months, 7 days.' }],
    faqs: [{ q: 'Does it handle leap years?', a: 'Yes. The calculation uses real calendar months, so leap days are accounted for automatically.' }],
    related: ['days-between-dates', 'date-calculator'],
    component: 'AgeTool', implemented: true, popular: true
  },
  {
    slug: 'date-calculator',
    name: 'Date Calculator',
    category: 'Dates',
    description: 'Add or subtract days from a date to find the resulting date.',
    seoTitle: 'Date Calculator - Add or Subtract Days from a Date | Calcly',
    metaDescription: 'Free date calculator. Add or subtract any number of days from a date and get the resulting date instantly.',
    intro: 'What date is 90 days from now? Or 45 days before a deadline? Enter a start date and a number of days.',
    howTo: ['Pick the start date.', 'Enter days to add (negative to subtract).', 'Read the resulting date.'],
    examples: [{ title: '90 days from 2026-01-01', output: '2026-04-01.' }],
    faqs: [{ q: 'Business days?', a: 'This calculator counts calendar days. A business-day version is on the roadmap.' }],
    related: ['days-between-dates', 'age-calculator'],
    component: 'DateMathTool', mode: 'add', implemented: true
  },
  {
    slug: 'days-between-dates',
    name: 'Days Between Dates',
    category: 'Dates',
    description: 'Count the days (and weeks) between two dates.',
    seoTitle: 'Days Between Dates Calculator - Date Difference | Calcly',
    metaDescription: 'Free days between dates calculator. Count calendar days and weeks between any two dates instantly.',
    intro: 'How many days are there between two dates? Pick both and get the answer in days and weeks.',
    howTo: ['Pick the start and end dates.', 'Read the difference in days and in weeks.'],
    examples: [{ title: '2026-01-01 to 2026-12-31', output: '364 days (52 weeks).' }],
    faqs: [{ q: 'Inclusive or exclusive?', a: 'The count is the difference between the two dates; add 1 if you want both endpoints included.' }],
    related: ['date-calculator', 'age-calculator'],
    component: 'DateMathTool', mode: 'between', implemented: true, popular: true
  },
  {
    slug: 'time-calculator',
    name: 'Time Calculator',
    category: 'Time',
    description: 'Add two durations together (hours and minutes).',
    seoTitle: 'Time Calculator - Add Hours and Minutes | Calcly',
    metaDescription: 'Free time calculator. Add two durations in hours and minutes and get the total instantly.',
    intro: 'Add two durations - hours and minutes - without carrying the 60s in your head.',
    howTo: ['Enter each duration in hours and minutes.', 'Read the total.'],
    examples: [{ title: '1h 45m + 2h 30m', output: '4h 15m.' }],
    faqs: [{ q: 'Subtraction?', a: 'Enter the second duration as you would to add; for differences between clock times use the Hours Calculator.' }],
    related: ['hours-calculator', 'date-calculator'],
    component: 'TimeMathTool', mode: 'add', implemented: true
  },
  {
    slug: 'hours-calculator',
    name: 'Hours Calculator',
    category: 'Time',
    description: 'Calculate the hours and minutes between two clock times.',
    seoTitle: 'Hours Calculator - Hours Between Two Times | Calcly',
    metaDescription: 'Free hours calculator. Find the hours and minutes between two clock times - perfect for shifts and timesheets.',
    intro: 'How long between 9:15 and 17:45? Enter two clock times and get the difference in hours and minutes.',
    howTo: ['Enter the start and end times (hours and minutes).', 'Read the difference, also shown in decimal hours for timesheets.'],
    examples: [{ title: '9:15 to 17:45', output: '8h 30m = 8.5 hours.' }],
    faqs: [{ q: 'Overnight shifts?', a: 'Times are taken as same-day. For overnight spans, split at midnight for now.' }],
    related: ['time-calculator', 'salary-calculator'],
    component: 'TimeMathTool', mode: 'between', implemented: true
  },
  {
    slug: 'compound-interest-calculator',
    name: 'Compound Interest Calculator',
    category: 'Finance',
    description: 'Project savings growth with compound interest and monthly contributions.',
    seoTitle: 'Compound Interest Calculator with Contributions | Calcly',
    metaDescription: 'Free compound interest calculator. See projected balance, contributions and interest with monthly compounding. Estimate only.',
    intro: 'See how an initial amount plus monthly contributions can grow with compounding. Estimate, not financial advice.',
    howTo: ['Enter the initial amount, annual rate and years.', 'Add a monthly contribution if you like.', 'Read the projected balance.'],
    examples: [{ title: '10,000 at 7% for 10 years + 100/month', output: 'About 37,000 total, of which ~15,000 is interest.' }],
    faqs: [{ q: 'Compounding frequency?', a: 'Monthly (n = 12), the most common for savings accounts.' }],
    related: ['loan-calculator', 'salary-calculator', 'percentage-calculator'],
    component: 'CompoundCalcTool', implemented: true, popular: true
  },
  {
    slug: 'loan-calculator',
    name: 'Loan Calculator',
    category: 'Finance',
    description: 'Monthly payment, total cost and interest for a fixed-rate loan.',
    seoTitle: 'Loan Calculator - Monthly Payment and Total Interest | Calcly',
    metaDescription: 'Free loan calculator. Compute monthly payments, total paid and total interest for any fixed-rate loan.',
    intro: 'Enter amount, rate and term to see the monthly payment and what the loan really costs in total.',
    howTo: ['Enter the loan amount.', 'Add the annual interest rate and term in years.', 'Compare monthly payment and total interest.'],
    examples: [{ title: '20,000 at 6% for 5 years', output: 'About 386.66/month; 3,199 total interest.' }],
    faqs: [{ q: 'Formula?', a: 'M = P x r(1+r)^n / ((1+r)^n - 1), the standard amortizing loan formula.' }],
    related: ['compound-interest-calculator', 'vat-calculator', 'salary-calculator'],
    component: 'LoanTool', implemented: true, popular: true
  },
  {
    slug: 'tip-calculator',
    name: 'Tip Calculator',
    category: 'Everyday',
    description: 'Tip amount, total and per-person split for any bill.',
    seoTitle: 'Tip Calculator - Split the Bill with Tip | Calcly',
    metaDescription: 'Free tip calculator. Get the tip, total and per-person amount with quick percentage presets.',
    intro: 'Enter the bill, pick a percentage, split between friends.',
    howTo: ['Enter the bill amount.', 'Choose or type a tip percentage.', 'Add the number of people to split.'],
    examples: [{ title: '86.50 bill, 18%, 2 people', output: 'Tip 15.57, total 102.07, 51.04 each.' }],
    faqs: [{ q: 'Custom percentages?', a: 'Yes - type any value or use the quick presets.' }],
    related: ['discount-calculator', 'percentage-calculator'],
    component: 'TipTool', implemented: true, popular: true
  },
  {
    slug: 'discount-calculator',
    name: 'Discount Calculator',
    category: 'Everyday',
    description: 'Final price after a discount, and how much you save.',
    seoTitle: 'Discount Calculator - Sale Price and Savings | Calcly',
    metaDescription: 'Free discount calculator. Enter the original price and discount percent to get the final price and savings.',
    intro: 'What does 30% off actually mean at checkout? Enter price and discount to see the final price and savings.',
    howTo: ['Enter the original price.', 'Enter the discount percentage.', 'Read the final price and amount saved.'],
    examples: [{ title: '79.99 with 30% off', output: 'Final 55.99, you save 24.00.' }],
    faqs: [{ q: 'Stacked discounts?', a: 'Apply them one after another: two 20% discounts are not 40% off, but 36% off total.' }],
    related: ['percentage-calculator', 'tip-calculator', 'vat-calculator'],
    component: 'DiscountTool', implemented: true
  },
  {
    slug: 'vat-calculator',
    name: 'VAT Calculator',
    category: 'Finance',
    description: 'Add or remove VAT at any rate: net, VAT and gross amounts.',
    seoTitle: 'VAT Calculator - Add or Remove VAT Online | Calcly',
    metaDescription: 'Free VAT calculator. Add VAT to a net price or remove it from a gross price, at any rate. Net, VAT and gross shown.',
    intro: 'Add VAT to a net amount or strip it out of a gross one, at whatever rate applies to you.',
    howTo: ['Enter the amount and VAT rate.', 'Choose Add (net to gross) or Remove (gross to net).', 'Read net, VAT and gross.'],
    examples: [{ title: 'Remove 21% VAT from 121', output: 'Net 100, VAT 21.' }],
    faqs: [{ q: 'Removing VAT is not just subtracting the %', a: 'Correct: net = gross / (1 + rate). Subtracting 21% of the gross would give the wrong net.' }],
    related: ['discount-calculator', 'loan-calculator', 'percentage-calculator'],
    component: 'VatTool', implemented: true, popular: true
  },
  {
    slug: 'salary-calculator',
    name: 'Salary Calculator',
    category: 'Finance',
    description: 'Convert an hourly rate to annual, monthly and weekly salary.',
    seoTitle: 'Salary Calculator - Hourly to Annual Salary | Calcly',
    metaDescription: 'Free salary calculator. Convert hourly wage to annual, monthly and weekly salary based on your hours per week.',
    intro: 'What does 25 an hour mean per year? Enter your hourly rate and weekly hours.',
    howTo: ['Enter the hourly rate.', 'Adjust hours per week if needed.', 'Read annual, monthly and weekly equivalents.'],
    examples: [{ title: '25/hour at 40h/week', output: '52,000 per year, 4,333 per month.' }],
    faqs: [{ q: 'Gross or net?', a: 'Gross (before taxes). Net salary depends on your country and situation.' }],
    related: ['hours-calculator', 'loan-calculator', 'vat-calculator'],
    component: 'SalaryTool', implemented: true, popular: true
  },
  {
    slug: 'unit-converter',
    name: 'Unit Converter',
    category: 'Conversion',
    description: 'Convert length, weight and temperature units instantly.',
    seoTitle: 'Unit Converter - Length, Weight, Temperature | Calcly',
    metaDescription: 'Free unit converter. Convert between metric and imperial units of length and weight, plus celsius, fahrenheit and kelvin.',
    intro: 'Convert between common units of length and weight, and between celsius, fahrenheit and kelvin.',
    howTo: ['Pick the category.', 'Enter the value and choose from and to units.', 'Read the converted value.'],
    examples: [{ title: '5 kilometers to miles', output: '3.1069 miles.' }],
    faqs: [{ q: 'More units coming?', a: 'Yes - volume, area, speed and data are on the roadmap.' }],
    related: ['percentage-calculator', 'ratio-calculator'],
    component: 'UnitTool', implemented: true, popular: true
  },
  {
    slug: 'fraction-calculator',
    name: 'Fraction Calculator',
    category: 'Math',
    description: 'Simplify fractions and convert to decimal and percentage.',
    seoTitle: 'Fraction Calculator - Simplify Fractions Online | Calcly',
    metaDescription: 'Free fraction calculator. Simplify any fraction to lowest terms and see its decimal and percentage equivalents.',
    intro: 'Enter a fraction to get its simplest form, decimal value and percentage.',
    howTo: ['Enter numerator and denominator.', 'Read the simplified fraction, decimal and percentage.'],
    examples: [{ title: '42/56', output: '3/4 = 0.75 = 75%.' }],
    faqs: [{ q: 'How does simplification work?', a: 'Both numbers are divided by their greatest common divisor (GCD).' }],
    related: ['ratio-calculator', 'average-calculator', 'percentage-calculator'],
    component: 'FractionTool', implemented: true
  },
  {
    slug: 'average-calculator',
    name: 'Average Calculator',
    category: 'Math',
    description: 'Mean, median and mode of a list of numbers.',
    seoTitle: 'Average Calculator - Mean, Median, Mode | Calcly',
    metaDescription: 'Free average calculator. Paste a list of numbers and get mean, median, mode and count instantly.',
    intro: 'Paste a list of numbers and get the mean, median and mode in one go.',
    howTo: ['Paste numbers separated by commas or spaces.', 'Read mean, median, mode and count.'],
    examples: [{ title: '4, 8, 15, 16, 23, 42', output: 'Mean 18, median 15.5, mode: all unique.' }],
    faqs: [{ q: 'Mean vs median?', a: 'Mean is the arithmetic average; median is the middle value. With outliers, the median usually describes the "typical" value better.' }],
    related: ['fraction-calculator', 'percentage-calculator'],
    component: 'AverageTool', implemented: true
  },
  {
    slug: 'ratio-calculator',
    name: 'Ratio Calculator',
    category: 'Math',
    description: 'Simplify ratios to their lowest terms.',
    seoTitle: 'Ratio Calculator - Simplify Ratios Online | Calcly',
    metaDescription: 'Free ratio calculator. Simplify any ratio A:B to its lowest terms and see the percentage split.',
    intro: 'Simplify a ratio to its lowest terms and see how the total splits between the two parts.',
    howTo: ['Enter A and B.', 'Read the simplified ratio and the percentage split.'],
    examples: [{ title: '250:150', output: '5:3 (62.5% / 37.5%).' }],
    faqs: [{ q: 'Scaling a ratio?', a: 'Multiply both sides by the same number: 5:3 scaled to a total of 80 is 50:30.' }],
    related: ['fraction-calculator', 'percentage-calculator'],
    component: 'RatioTool', implemented: true
  }
];
export const implementedTools = tools.filter((t) => t.implemented);
export const categories = [...new Set(tools.map((t) => t.category))];
export function bySlug(slug: string) { return tools.find((t) => t.slug === slug); }
