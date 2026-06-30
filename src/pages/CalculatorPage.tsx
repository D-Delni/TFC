import { useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import {
  computeAllResults,
  formatCurrency,
  formatPercent,
  type MortgageInputs,
} from '../utils/calculator'

const CURRENCIES = ['EUR', 'GBP', 'USD']
const DEFAULT_INPUTS: MortgageInputs = {
  propertyPrice: 500000,
  deposit: 175000,
  interestRate: 3.5,
  termYears: 25,
  fees: 0,
  currency: 'EUR',
}

interface FieldError {
  propertyPrice?: string
  deposit?: string
  interestRate?: string
  termYears?: string
}

function NumberInput({
  id,
  label,
  value,
  onChange,
  min,
  max,
  step,
  prefix,
  suffix,
  error,
}: {
  id: string
  label: string
  value: number | ''
  onChange: (v: number | '') => void
  min?: number
  max?: number
  step?: number
  prefix?: string
  suffix?: string
  error?: string
}) {
  return (
    <div>
      <label htmlFor={id} className="label-text">
        {label}
      </label>
      <div className="relative flex">
        {prefix && (
          <span className="inline-flex items-center px-3 border border-r-0 border-gray-300 bg-gray-50 rounded-l text-sm text-gray-500">
            {prefix}
          </span>
        )}
        <input
          id={id}
          type="number"
          value={value}
          min={min}
          max={max}
          step={step ?? 1}
          onChange={(e) => {
            const v = e.target.value
            onChange(v === '' ? '' : Number(v))
          }}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          className={`input-field ${prefix ? 'rounded-l-none' : ''} ${suffix ? 'rounded-r-none' : ''} ${error ? 'border-red-400 focus:ring-red-400' : ''}`}
        />
        {suffix && (
          <span className="inline-flex items-center px-3 border border-l-0 border-gray-300 bg-gray-50 rounded-r text-sm text-gray-500">
            {suffix}
          </span>
        )}
      </div>
      {error && (
        <p id={`${id}-error`} className="text-red-500 text-xs mt-1">
          {error}
        </p>
      )}
    </div>
  )
}

export default function CalculatorPage() {
  const [inputs, setInputs] = useState<MortgageInputs>(DEFAULT_INPUTS)
  const [rawValues, setRawValues] = useState<Record<string, number | ''>>({
    propertyPrice: DEFAULT_INPUTS.propertyPrice,
    deposit: DEFAULT_INPUTS.deposit,
    interestRate: DEFAULT_INPUTS.interestRate,
    termYears: DEFAULT_INPUTS.termYears,
    fees: DEFAULT_INPUTS.fees,
  })
  const [errors, setErrors] = useState<FieldError>({})
  const [calculated, setCalculated] = useState(false)
  const [results, setResults] = useState(computeAllResults(DEFAULT_INPUTS))

  const updateField = useCallback(
    (field: keyof MortgageInputs, value: number | '') => {
      setRawValues((prev) => ({ ...prev, [field]: value }))
      if (value !== '') {
        setInputs((prev) => ({ ...prev, [field]: value as number }))
      }
    },
    []
  )

  const validate = (): boolean => {
    const errs: FieldError = {}
    if (!rawValues.propertyPrice || (rawValues.propertyPrice as number) <= 0)
      errs.propertyPrice = 'Enter a valid property price'
    if (rawValues.deposit === '' || (rawValues.deposit as number) < 0)
      errs.deposit = 'Enter a valid deposit amount'
    if (
      (rawValues.deposit as number) >= (rawValues.propertyPrice as number)
    )
      errs.deposit = 'Deposit must be less than the property price'
    if (!rawValues.interestRate || (rawValues.interestRate as number) <= 0)
      errs.interestRate = 'Enter a valid interest rate'
    if (
      !rawValues.termYears ||
      (rawValues.termYears as number) < 1 ||
      (rawValues.termYears as number) > 40
    )
      errs.termYears = 'Term must be between 1 and 40 years'
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleCalculate = () => {
    if (!validate()) return
    setResults(computeAllResults(inputs))
    setCalculated(true)
  }

  const handleReset = () => {
    setInputs(DEFAULT_INPUTS)
    setRawValues({
      propertyPrice: DEFAULT_INPUTS.propertyPrice,
      deposit: DEFAULT_INPUTS.deposit,
      interestRate: DEFAULT_INPUTS.interestRate,
      termYears: DEFAULT_INPUTS.termYears,
      fees: DEFAULT_INPUTS.fees,
    })
    setErrors({})
    setCalculated(false)
    setResults(computeAllResults(DEFAULT_INPUTS))
  }

  const fmt = (v: number) => formatCurrency(v, inputs.currency)
  const ltv = results.ltv

  return (
    <>
      <title>Mortgage Calculator - Tenerife Mortgage</title>
      <meta name="description" content="Use our Spanish mortgage calculator to estimate your monthly repayments, LTV, and total cost of borrowing." />
      <Header />

      {/* Page hero */}
      <div className="relative bg-brand-blue py-16 text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1400&q=80')" }}
          aria-hidden="true"
        />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-3">
            Mortgage Calculator
          </h1>
          <p className="text-gray-300 text-lg">Fund your new home in Spain</p>
        </div>
      </div>

      <main className="py-12 bg-gray-50 min-h-screen">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-8 items-start">
            {/* Calculator form */}
            <div className="lg:col-span-3 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <h2 className="font-display text-2xl font-bold text-brand-blue mb-6">
                Your Mortgage Details
              </h2>

              <div className="space-y-5">
                {/* Currency */}
                <div>
                  <label htmlFor="currency" className="label-text">Currency</label>
                  <select
                    id="currency"
                    value={inputs.currency}
                    onChange={(e) => setInputs((p) => ({ ...p, currency: e.target.value }))}
                    className="input-field"
                  >
                    {CURRENCIES.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                <NumberInput
                  id="propertyPrice"
                  label="Property Price"
                  value={rawValues.propertyPrice}
                  onChange={(v) => updateField('propertyPrice', v)}
                  min={1}
                  step={1000}
                  prefix={inputs.currency === 'EUR' ? '€' : inputs.currency === 'GBP' ? '£' : '$'}
                  error={errors.propertyPrice}
                />

                <NumberInput
                  id="deposit"
                  label="Deposit / Equity"
                  value={rawValues.deposit}
                  onChange={(v) => updateField('deposit', v)}
                  min={0}
                  step={1000}
                  prefix={inputs.currency === 'EUR' ? '€' : inputs.currency === 'GBP' ? '£' : '$'}
                  error={errors.deposit}
                />

                <NumberInput
                  id="interestRate"
                  label="Interest Rate"
                  value={rawValues.interestRate}
                  onChange={(v) => updateField('interestRate', v)}
                  min={0.01}
                  max={30}
                  step={0.1}
                  suffix="%"
                  error={errors.interestRate}
                />

                <NumberInput
                  id="termYears"
                  label="Mortgage Term"
                  value={rawValues.termYears}
                  onChange={(v) => updateField('termYears', v)}
                  min={1}
                  max={40}
                  suffix="years"
                  error={errors.termYears}
                />

                <NumberInput
                  id="fees"
                  label="Additional Fees (optional)"
                  value={rawValues.fees}
                  onChange={(v) => updateField('fees', v)}
                  min={0}
                  step={100}
                  prefix={inputs.currency === 'EUR' ? '€' : inputs.currency === 'GBP' ? '£' : '$'}
                />
              </div>

              <div className="flex gap-3 mt-8">
                <button
                  onClick={handleCalculate}
                  className="flex-1 bg-brand-blue hover:bg-brand-lightblue text-white font-semibold py-3 px-6 rounded transition-colors duration-200"
                >
                  Calculate
                </button>
                <button
                  onClick={handleReset}
                  className="px-6 py-3 border border-gray-300 text-gray-600 rounded hover:bg-gray-50 transition-colors text-sm font-medium"
                >
                  Reset
                </button>
              </div>
            </div>

            {/* Results */}
            <div className="lg:col-span-2 space-y-5">
              {/* Summary card */}
              <div className="bg-brand-blue rounded-2xl p-6 text-white shadow-sm">
                <h3 className="font-semibold text-brand-gold mb-4 uppercase text-xs tracking-widest">
                  Your Summary
                </h3>
                <div className="space-y-4">
                  <ResultRow
                    label="Mortgage Required"
                    value={fmt(results.mortgageRequired)}
                    highlight
                  />
                  <ResultRow
                    label="Monthly Payment"
                    value={fmt(results.monthlyPayment)}
                    highlight
                  />
                  <div className="border-t border-white/20 pt-4 space-y-3">
                    <ResultRow label="Property Price" value={fmt(inputs.propertyPrice)} />
                    <ResultRow label="Deposit" value={fmt(inputs.deposit)} />
                    <ResultRow
                      label="LTV (Loan-to-Value)"
                      value={formatPercent(ltv)}
                      status={ltv > 80 ? 'warn' : ltv > 70 ? 'neutral' : 'good'}
                    />
                    <ResultRow label="Interest Rate" value={formatPercent(inputs.interestRate)} />
                    <ResultRow label="Term" value={`${inputs.termYears} years`} />
                    {inputs.fees > 0 && (
                      <ResultRow label="Fees" value={fmt(inputs.fees)} />
                    )}
                    <div className="border-t border-white/20 pt-3">
                      <ResultRow
                        label="Total Repayment"
                        value={fmt(results.totalRepayment)}
                      />
                    </div>
                  </div>
                </div>

                {!calculated && (
                  <p className="text-xs text-gray-400 mt-4 italic">
                    Adjust values and click Calculate to update results.
                  </p>
                )}
              </div>

              {/* LTV indicator */}
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                <h4 className="text-sm font-semibold text-brand-blue mb-3">LTV Indicator</h4>
                <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                  <div
                    className={`h-3 rounded-full transition-all duration-500 ${
                      ltv > 80 ? 'bg-red-400' : ltv > 70 ? 'bg-yellow-400' : 'bg-green-400'
                    }`}
                    style={{ width: `${Math.min(ltv, 100)}%` }}
                    role="progressbar"
                    aria-valuenow={ltv}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
                <p className="text-xs text-gray-500">
                  {ltv <= 60
                    ? 'Excellent — typically qualifies for the best rates.'
                    : ltv <= 70
                    ? 'Good — competitive rates available.'
                    : ltv <= 80
                    ? 'Acceptable — standard rates apply.'
                    : 'High LTV — lender approval may be harder to obtain.'}
                </p>
              </div>

              {/* CTA */}
              <div className="bg-brand-gold/10 border border-brand-gold/30 rounded-2xl p-5">
                <h4 className="font-semibold text-brand-blue mb-2">Start Your Application</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Ready to take the next step? Complete our 24 Hour Mortgage Pre-Approval form.
                </p>
                <Link
                  to="/pre-approval"
                  className="block text-center bg-brand-gold hover:bg-brand-lightgold text-brand-cream hover:text-brand-blue font-semibold py-2 px-4 rounded transition-colors text-sm"
                >
                  24 Hour Pre-Approval →
                </Link>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <p className="text-xs text-gray-400 text-center mt-10 max-w-2xl mx-auto leading-relaxed">
            This calculator provides an estimate only. Results are based on standard
            amortization formulas and are for illustrative purposes. Actual mortgage
            terms will depend on your individual circumstances and lender criteria.
            Please speak with one of our consultants for personalised advice.
          </p>
        </div>
      </main>

      <Footer />
    </>
  )
}

function ResultRow({
  label,
  value,
  highlight = false,
  status,
}: {
  label: string
  value: string
  highlight?: boolean
  status?: 'good' | 'neutral' | 'warn'
}) {
  return (
    <div className="flex justify-between items-center">
      <span className={`text-sm ${highlight ? 'text-gray-300' : 'text-gray-400'}`}>{label}</span>
      <span
        className={`font-semibold text-sm ${
          highlight
            ? 'text-white text-base'
            : status === 'warn'
            ? 'text-red-300'
            : status === 'good'
            ? 'text-green-300'
            : 'text-white'
        }`}
      >
        {value}
      </span>
    </div>
  )
}
