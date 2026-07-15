import { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FaqAccordion, { type FaqItem } from '../components/FaqAccordion'

interface FaqCategory {
  title: string
  items: FaqItem[]
}

const CATEGORIES: FaqCategory[] = [
  {
    title: 'Getting Started & Eligibility',
    items: [
      {
        id: 'foreigners',
        question: 'Can foreigners get a mortgage in Tenerife?',
        answer:
          'Yes, both residents and non-residents can apply for a mortgage in Tenerife. Banks typically offer up to 70% loan-to-value (LTV) of the property value for non-residents, and up to 80% for residents and Spanish nationals.',
      },
      {
        id: 'retirees',
        question: 'Can retirees get a mortgage in Tenerife?',
        answer:
          'Yes, many banks offer mortgages to retirees, but they may require proof of pension income and a shorter loan term due to age restrictions.',
      },
      {
        id: 'trends',
        question: 'What are the current real estate trends in Tenerife?',
        answer:
          'The market is steadily growing, with increased interest in sustainable and off-plan developments. Coastal areas and popular tourist zones remain highly desirable. The south of Tenerife in particular is now considered one of the best locations to buy in the world for return on investment (ROI).',
      },
    ],
  },
  {
    title: 'Documentation & Requirements',
    items: [
      {
        id: 'documents',
        question: 'What documents are required to apply for a mortgage in Tenerife?',
        answer:
          "You'll need your passport, proof of income, recent tax returns, bank statements, your NIE (foreigner identification number) and property details. Our in-house legal team can now provide this service with a Power of Attorney signed in front of the notary to apply for your NIE, and to review any contracts before you sign or pay a deposit. We have long-standing experience supporting clients with documentation requirements and can work with you to obtain your local NIE.",
      },
      {
        id: 'checklist',
        question: 'What is the full checklist for securing a mortgage as a non-resident?',
        answer: [
          'Research & preparation — understand non-resident regulations, evaluate your budget (deposit, closing costs of 10–15%, ongoing costs) and review mortgage offers.',
          'Gather documentation — passport, NIE, proof of income, bank statements, property details and credit history.',
          'Establish local connections — we nominate a recommended lawyer and, if needed, a translator.',
          'Open a Spanish bank account to cover the down payment, closing costs and initial mortgage payments.',
          'Submit your application and undergo the bank\u2019s financial assessment to receive formal pre-approval.',
          'Arrange a property valuation (tasación) to confirm it aligns with the required LTV.',
          'Review your loan offer (FIPER document) and sign the mortgage agreement at the notary.',
          'Complete the purchase agreement, pay associated costs and register the property in your name.',
          'Post-purchase — set up utilities, arrange property insurance and plan your ongoing currency exchange.',
        ],
      },
    ],
  },
  {
    title: 'Financial Considerations',
    items: [
      {
        id: 'deposit',
        question: 'What is the typical deposit required for a property in Tenerife?',
        answer:
          'Non-residents typically need a 30% deposit, while residents require around 20%. This may vary depending on the bank and the property\u2019s value. We always recommend budgeting an additional 10% for purchase taxes, notary and legal fees.',
      },
      {
        id: 'ltv',
        question: 'What is a Loan-to-Value (LTV) ratio, and why is it important?',
        answer:
          'The LTV ratio indicates the percentage of the property value a bank is willing to finance. For non-residents, it\u2019s usually 70%, meaning you\u2019ll need to cover the remaining 30% as a deposit.',
      },
      {
        id: 'rates',
        question: 'What interest rate options are available in Tenerife?',
        answer:
          'Mortgages come with fixed or variable rates. Fixed rates remain constant, while variable rates fluctuate based on the Euribor index. Depending on your circumstances and proof of income, most banks offer a fixed rate for the first 1–3 years before switching to variable. At present, banks are increasingly offering fixed terms for the full length of the mortgage, and interest rates are at their lowest in several years.',
      },
    ],
  },
  {
    title: 'Costs & Fees',
    items: [
      {
        id: 'hidden-costs',
        question: 'What hidden costs should I budget for when buying property?',
        answer: [
          'Taxes: 6.5%–10% (Property Transfer Tax, ITP)',
          'Notary fees',
          'Property registration fees, plus legal and banking fees',
          'Valuation and mortgage arrangement fees',
        ],
      },
      {
        id: 'mortgage-costs',
        question: 'What additional costs come with arranging the mortgage itself?',
        answer: [
          'Valuation fee: approximately €300–€600',
          'Arrangement fee: 0.5%–1.5% of the mortgage amount',
          'Legal fees: typically 1%–2% of the purchase price if using a lawyer',
          'Currency exchange fees, where relevant for non-euro buyers',
        ],
      },
      {
        id: 'early-repayment',
        question: 'Can I pay off my mortgage early?',
        answer:
          'Yes, but some banks charge an early repayment fee — check your contract terms carefully to avoid unexpected penalties. Most banks charge 0.25% for lump-sum repayments made within the first 3 years, and 0% after that period.',
      },
    ],
  },
  {
    title: 'Process & Timeline',
    items: [
      {
        id: 'timeline',
        question: 'How long does the mortgage approval process take in Tenerife?',
        answer: 'The process usually takes 4–8 weeks, though this may vary depending on your individual circumstances.',
      },
      {
        id: 'approval-steps',
        question: 'What happens during the mortgage approval process?',
        answer: [
          'Initial consultation — we discuss your financial situation and arrange pre-approval.',
          'Document submission — you provide the necessary paperwork.',
          'Valuation — the bank assesses the property\u2019s market value.',
          'Approval — the bank approves the loan and issues a formal offer.',
          'Signing — the contract is finalised at a notary\u2019s office.',
        ],
      },
      {
        id: 'notary-stage',
        question: 'What happens at the notary and signing stage?',
        answer:
          'We arrange your notary appointment, where the mortgage and property purchase deeds are signed. You\u2019ll pay associated fees and taxes at this point — notary fees (typically 0.5%–1%), land registry fees (around 1%), Property Transfer Tax (6.5%–10%) and Stamp Duty (1%–1.5%) — followed by the final balance payment. The notary then registers both the property and the mortgage with the Land Registry.',
      },
    ],
  },
  {
    title: 'Common Mistakes & Improving Approval',
    items: [
      {
        id: 'mistakes',
        question: 'What common mistakes do expats make when applying for a mortgage?',
        answer: [
          'Not understanding local laws and processes',
          'Underestimating potential hidden costs',
          'Failing to secure pre-approval before agreeing the purchase',
          'Ignoring exchange rate fluctuations',
          'Choosing the wrong mortgage type',
          'Not getting a legal opinion before signing contracts',
        ],
      },
      {
        id: 'improve-chances',
        question: 'How can I improve my chances of getting approved for a mortgage?',
        answer: [
          'Improve your credit score',
          'Reduce existing debts',
          'Save a larger deposit',
          'Prepare all required documents in advance',
          'Ensure your bank statements show healthy balances of income and expenditure',
        ],
      },
    ],
  },
  {
    title: 'Special Situations',
    items: [
      {
        id: 'off-plan',
        question: 'Can I get a mortgage for an off-plan property in Tenerife?',
        answer:
          'Yes, though the process may differ. Lenders will typically assess the developer\u2019s reputation and release funds in stages as the project progresses. We also offer a newer financial mechanism for new developments — we can pre-approve finance at stage one, allowing you to make payments through the bank to the developer over roughly two years, covering up to 50% of the cost, with a standard mortgage arranged on completion.',
      },
      {
        id: 'company-purchase',
        question: 'Can I purchase a property in Tenerife through a company?',
        answer:
          'Yes — using a Spanish-registered company (S.L.) can be a tax-efficient way to acquire property, particularly for investment purposes. The process involves setting up or using an existing company, obtaining an NIE and registering for tax purposes, completing due diligence with a specialist like Tenerife Mortgage, arranging financing (which may require personal guarantees from directors), signing a preliminary contract, paying applicable taxes (ITP 6.5%–10%, IVA 7%–21% on new builds, and AJD 1.2%–1.5%), and finally signing and registering the deed. Ongoing obligations include annual property tax (IBI) and corporate tax on any rental income or capital gains.',
      },
    ],
  },
  {
    title: 'Currency Exchange — Magna Financial',
    items: [
      {
        id: 'fx-personal',
        question: 'Do you offer support with personal currency transfers?',
        answer:
          'Yes, through our partner Magna Financial. If you are buying or selling a property overseas, emigrating or sending money to family, your dedicated currency consultant will help you make the most of every transfer — with competitive exchange rates, fast commission-free transfers, a dedicated relationship manager, market updates and rate alerts, and the ability to secure a rate in advance for a future date.',
      },
      {
        id: 'fx-business',
        question: 'Can you help my business manage foreign exchange risk?',
        answer:
          'Yes. If your business is exposed to fluctuations in the foreign exchange markets, Magna Financial works with you to optimise your position, minimise risk and reduce costs — offering competitive rates, fast commission-free transfers, a dedicated relationship manager, currency risk-management tools and hedging strategies.',
      },
    ],
  },
  {
    title: 'Why Choose Tenerife Mortgage',
    items: [
      {
        id: 'why-us',
        question: 'Why choose Tenerife Mortgage over other providers in Tenerife?',
        answer:
          'Tenerife Mortgage Consultancy is an independent financial broker established in 2009 and based in San Eugenio, Costa Adeje. Unlike agents affiliated with a single bank, we operate independently across the entire market — with direct relationships with 18 banks in Spain, allowing us to beat comparable offers by up to 1.5% in annual interest savings. With over a decade of experience, a comprehensive range of services (holiday homes, construction finance, bridging loans, equity release, and now a full in-house legal and financial service) and a client-centric approach from initial assessment through to the handover of keys, we are one of the most recognised and trusted mortgage consultancies in the Canary Islands.',
      },
    ],
  },
]

export default function FaqPage() {
  const [openId, setOpenId] = useState<string | null>(null)

  const handleToggle = (id: string) => {
    setOpenId((current) => (current === id ? null : id))
  }

  return (
    <>
      <title>Frequently Asked Questions — TM Tenerife Mortgage Consultancy</title>
      <meta
        name="description"
        content="Answers to the most common questions about mortgages, documentation, costs and the buying process for property in Tenerife and across Spain."
      />
      <Header />

      {/* ── Hero ── */}
      <div className="relative bg-brand-blue py-20 text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=1400&q=80')" }}
          aria-hidden="true"
        />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <p className="uppercase text-brand-gold text-xs tracking-widest font-semibold mb-3">
            Answers before you ask
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Everything you need to know about mortgages, documentation, costs
            and the buying process in Tenerife — in one place.
          </p>
        </div>
      </div>

      <main className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <div className="space-y-14">
            {CATEGORIES.map(({ title, items }) => (
              <section key={title}>
                <h2 className="font-display text-xl md:text-2xl font-bold text-brand-blue mb-5 flex items-center gap-3">
                  <span className="w-8 h-0.5 bg-brand-gold flex-shrink-0" />
                  {title}
                </h2>
                <FaqAccordion items={items} openId={openId} onToggle={handleToggle} />
              </section>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 bg-brand-blue rounded-2xl p-8 sm:p-10 text-center text-white">
            <h3 className="font-display text-2xl font-bold mb-3">
              Still have a question?
            </h3>
            <p className="text-gray-300 mb-6 max-w-lg mx-auto">
              Every situation is different. Book a free consultation and we'll
              answer your specific questions directly — no obligation.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/contact" className="btn-primary">
                Book a free consultation
              </Link>
              <Link to="/mortgage-calculator" className="btn-secondary">
                Try the calculator
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
