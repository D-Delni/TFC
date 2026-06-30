/**
 * Mortgage calculation utilities.
 * Uses standard amortization formulas.
 *
 * Assumptions:
 * - Monthly compounding (interest rate / 12)
 * - Fixed-rate mortgage
 * - LTV = (mortgage amount / property price) * 100
 * - Fees added to total repayment, not to mortgage principal
 */

export function computeMonthlyPayment(
  principal: number,
  annualRatePercent: number,
  termYears: number
): number {
  if (principal <= 0) return 0
  if (annualRatePercent <= 0) {
    return principal / (termYears * 12)
  }
  const r = annualRatePercent / 100 / 12
  const n = termYears * 12
  return (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
}

export function computeLTV(mortgageAmount: number, propertyPrice: number): number {
  if (propertyPrice <= 0) return 0
  return (mortgageAmount / propertyPrice) * 100
}

export function computeTotalRepayment(
  monthlyPayment: number,
  termYears: number,
  fees: number = 0
): number {
  return monthlyPayment * termYears * 12 + fees
}

export function computeMortgageRequired(propertyPrice: number, deposit: number): number {
  return Math.max(0, propertyPrice - deposit)
}

export function formatCurrency(value: number, currency: string = 'EUR'): string {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value)
}

export function formatPercent(value: number, decimals: number = 1): string {
  return value.toFixed(decimals) + '%'
}

export interface MortgageInputs {
  propertyPrice: number
  deposit: number
  interestRate: number
  termYears: number
  fees: number
  currency: string
}

export interface MortgageResults {
  mortgageRequired: number
  monthlyPayment: number
  ltv: number
  totalRepayment: number
}

export function computeAllResults(inputs: MortgageInputs): MortgageResults {
  const mortgageRequired = computeMortgageRequired(inputs.propertyPrice, inputs.deposit)
  const monthlyPayment = computeMonthlyPayment(mortgageRequired, inputs.interestRate, inputs.termYears)
  const ltv = computeLTV(mortgageRequired, inputs.propertyPrice)
  const totalRepayment = computeTotalRepayment(monthlyPayment, inputs.termYears, inputs.fees)
  return { mortgageRequired, monthlyPayment, ltv, totalRepayment }
}
