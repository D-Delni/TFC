# Tenerife Mortgage — React Clone

A high-fidelity React + Vite + TypeScript clone, originally based on [mallorcamortgage.com](https://www.mallorcamortgage.com/) and rebranded for Tenerife Mortgage Consultancy SL, covering the Home page and Mortgage Calculator.

## Tech Stack

- **React 18** + **TypeScript**
- **Vite 5** (bundler + dev server)
- **React Router 6** (client-side routing)
- **Tailwind CSS 3** (styling — single system, no mixing)
- **Vitest** (unit tests)
- **Playwright** (E2E tests)

---

## Setup

```bash
npm install
```

## Development

```bash
npm run dev
# → http://localhost:5173
```

## Testing

```bash
# Unit tests (Vitest)
npm run test

# E2E tests (Playwright — requires dev server running)
npm run test:e2e
```

## Build

```bash
npm run build
# Output in dist/
```

## Lint

```bash
npm run lint
```

---

## Project Structure

```
src/
├── components/
│   ├── Header.tsx        # Sticky nav with mobile hamburger menu
│   └── Footer.tsx        # Multi-column footer with contact details
├── pages/
│   ├── HomePage.tsx      # Full home page (hero, stats, services, CTA)
│   ├── CalculatorPage.tsx # Interactive mortgage calculator
│   └── PlaceholderPage.tsx # Stub for all other routes
├── utils/
│   └── calculator.ts     # Pure calculation functions
├── styles/
│   └── index.css         # Tailwind directives + component classes
└── tests/
    └── calculator.test.ts # 17 unit tests
e2e/
└── calculator.spec.ts    # Playwright E2E flow
```

---

## Assumptions & Notes

### Calculator Logic

The original site uses a third-party WordPress plugin (not accessible as source code). This implementation uses **standard amortization formulas**:

```
M = P × [r(1+r)^n] / [(1+r)^n − 1]
```

Where:
- `P` = mortgage principal (property price − deposit)
- `r` = monthly interest rate (annual rate ÷ 12 ÷ 100)
- `n` = total payments (years × 12)

**LTV** = (mortgage amount ÷ property price) × 100

Fees are added to total repayment but not to the principal (they don't increase monthly payments).

### Missing Assets

The original site uses proprietary brand images and SVG logos. Replacements used:

| Asset | Replacement |
|-------|-------------|
| Hero image | Unsplash beach photo (free license) |
| Team photo | Unsplash office photo (free license) |
| MMC logo | CSS text logo (Playfair Display font) |
| Bank of Spain / AIF badges | Text references only |
| Social media icons | Not included |

### Pages Implemented

| Page | Status |
|------|--------|
| Home (`/`) | ✅ Full |
| Mortgage Calculator (`/mortgage-calculator`) | ✅ Full |
| All others | 🔲 Placeholder stub |

### Calculator Inputs Implemented

Matching the fields visible on the source page:
- Currency selector (EUR / GBP / USD)
- Property Price
- Deposit / Equity
- Interest Rate
- Mortgage Term (years)
- Additional Fees (optional)

### Calculator Outputs

- Mortgage Required
- Monthly Payment
- LTV % (with colour-coded bar)
- Total Repayment
- LTV qualitative guidance

