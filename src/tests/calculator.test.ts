import { describe, it, expect } from 'vitest'
import {
  computeMonthlyPayment,
  computeLTV,
  computeTotalRepayment,
  computeMortgageRequired,
  computeAllResults,
  formatCurrency,
  formatPercent,
} from '../utils/calculator'

describe('computeMonthlyPayment', () => {
  it('calculates a standard monthly payment correctly', () => {
    const payment = computeMonthlyPayment(300000, 3.5, 25)
    expect(payment).toBeCloseTo(1501.87, 0)
  })

  it('returns 0 for zero principal', () => {
    expect(computeMonthlyPayment(0, 3.5, 25)).toBe(0)
  })

  it('handles zero interest rate (simple division)', () => {
    const payment = computeMonthlyPayment(120000, 0, 10)
    expect(payment).toBeCloseTo(1000, 0)
  })

  it('returns 0 for negative principal', () => {
    expect(computeMonthlyPayment(-100000, 3.5, 25)).toBe(0)
  })

  it('handles a short 5-year term', () => {
    const payment = computeMonthlyPayment(100000, 4.0, 5)
    expect(payment).toBeGreaterThan(1800)
    expect(payment).toBeLessThan(1900)
  })
})

describe('computeLTV', () => {
  it('calculates LTV as a percentage', () => {
    expect(computeLTV(250000, 500000)).toBe(50)
  })

  it('returns 0 for zero property price', () => {
    expect(computeLTV(100000, 0)).toBe(0)
  })

  it('returns 100 when mortgage equals property price', () => {
    expect(computeLTV(300000, 300000)).toBe(100)
  })
})

describe('computeMortgageRequired', () => {
  it('subtracts deposit from property price', () => {
    expect(computeMortgageRequired(500000, 150000)).toBe(350000)
  })

  it('returns 0 if deposit exceeds property price', () => {
    expect(computeMortgageRequired(200000, 250000)).toBe(0)
  })
})

describe('computeTotalRepayment', () => {
  it('multiplies monthly payment by months and adds fees', () => {
    expect(computeTotalRepayment(1000, 25, 5000)).toBe(305000)
  })

  it('works without fees parameter', () => {
    expect(computeTotalRepayment(1000, 10)).toBe(120000)
  })
})

describe('computeAllResults', () => {
  it('returns consistent results for a typical scenario', () => {
    const r = computeAllResults({
      propertyPrice: 500000,
      deposit: 175000,
      interestRate: 3.5,
      termYears: 25,
      fees: 0,
      currency: 'EUR',
    })
    expect(r.mortgageRequired).toBe(325000)
    expect(r.ltv).toBeCloseTo(65, 0)
    expect(r.monthlyPayment).toBeGreaterThan(1500)
    expect(r.totalRepayment).toBeGreaterThan(r.mortgageRequired)
  })
})

describe('formatCurrency', () => {
  it('formats EUR correctly', () => {
    expect(formatCurrency(100000, 'EUR')).toContain('100,000')
  })
  it('formats GBP correctly', () => {
    expect(formatCurrency(50000, 'GBP')).toContain('50,000')
  })
})

describe('formatPercent', () => {
  it('formats a percentage with 1 decimal by default', () => {
    expect(formatPercent(65)).toBe('65.0%')
  })
  it('formats with custom decimals', () => {
    expect(formatPercent(3.55, 2)).toBe('3.55%')
  })
})
