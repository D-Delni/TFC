export interface CalculatorInputs {
  propertyPrice: number;
  deposit: number;
  interestRate: number;
  termYears: number;
  arrangementFee: number;
  currency: 'EUR' | 'GBP' | 'USD';
}

export interface CalculatorResults {
  mortgageAmount: number;
  monthlyPayment: number;
  ltv: number;
  totalRepayment: number;
  totalInterest: number;
  depositPercent: number;
}

export interface TeamMember {
  name: string;
  role: string;
  image?: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  location: string;
  source: string;
  image?: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}
