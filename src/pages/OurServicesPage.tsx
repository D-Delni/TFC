import { Link } from "react-router-dom";
import {
  Home,
  RefreshCw,
  Building2,
  Landmark,
  FileSignature,
  Zap,
  TrendingUp,
  Scale,
  Banknote,
  ShieldCheck,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import teamImage from "../assets/img/team/ART_7237.jpg";

const CORE_SERVICES = [
  {
    Icon: Home,
    title: "Mortgages",
    desc: "Guidance on Spanish mortgage options for residents and non-residents. We identify the most suitable product for your profile and negotiate directly with lenders on your behalf.",
  },
  {
    Icon: RefreshCw,
    title: "Refinance",
    desc: "Explore refinancing options to review your current rate, restructure terms or release equity. We assess the full market to find a more competitive arrangement.",
  },
  {
    Icon: Building2,
    title: "Construction Finance",
    desc: "Support for finance linked to building, renovation or staged development projects. We structure funding that aligns with your build programme and cash flow requirements.",
  },
  {
    Icon: Landmark,
    title: "Bridging Support",
    desc: "Short-term finance guidance for timing gaps between property transactions. We identify appropriate bridging solutions and help you move quickly when the market demands it.",
  },
  {
    Icon: FileSignature,
    title: "Subrogation",
    desc: "Understand whether taking over or replacing an existing mortgage is the right move. We analyse the terms and negotiate where there is room to improve.",
  },
  {
    Icon: Zap,
    title: "Pre-Approval",
    desc: "Prepare your documentation early so you can search with stronger confidence. A credible pre-approval signals to sellers and agents that you are a serious buyer.",
  },
];

const KEY_SERVICES = [
  {
    Icon: Home,
    label: "Mortgage Brokers",
    desc: "Independent access to the full lender market across Spain and the Canary Islands.",
  },
  {
    Icon: TrendingUp,
    label: "Financial Advice",
    desc: "Personalised guidance on structuring your purchase in the most cost-effective way.",
  },
  {
    Icon: Scale,
    label: "Legal Advice",
    desc: "Access to in-house lawyers, solicitors and accountants across all stages of your purchase.",
  },
  {
    Icon: Banknote,
    label: "FX Currency Exchange",
    desc: "Partner service for competitive exchange rates through Magna Financial — saving up to 5% vs typical banks.",
  },
  {
    Icon: ShieldCheck,
    label: "Wealth Management",
    desc: "Strategic planning for cost and tax efficiency when acquiring property in Spain.",
  },
];

const BREAKDOWN = [
  "Full background checks on the property to ensure there are no hidden legal or financial issues, including verifying that all taxes and bills are up to date and that the property is fully mortgageable.",
  "Coordination with independent valuers, whom we assist, to ensure accurate and fair property valuations.",
  "Access to our in-house lawyers, solicitors and accountants to ensure all documentation is legally compliant and approved by the relevant Spanish authorities.",
  "Full organisation of the process, including bank account setup, FEIN documentation (including the mandatory 10-day cooling-off period), Act of Transparency signing (2 days before mortgage) and final mortgage and loan completion.",
  "Ongoing personal support throughout the entire process, managing all the intricate steps involved in purchasing a property.",
  "Coordination of all required parties for completion, which can involve between 7 and 10 individuals at the signing stage.",
];

export default function OurServicesPage() {
  return (
    <>
      <title>Our Services — TM Tenerife Mortgage Consultancy</title>
      <meta
        name="description"
        content="Independent mortgage brokerage, financial advice, legal support and FX currency exchange for international property buyers in Tenerife and across Spain."
      />
      <Header />

      {/* ── Hero ── */}
      <div className="relative bg-brand-blue py-20 text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=1400&q=80')",
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <p className="uppercase text-brand-gold text-xs tracking-widest font-semibold mb-3">
            What we do
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Our Services
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Face-to-face, independent mortgage brokerage — from first enquiry to
            the moment you sign at the notary.
          </p>
        </div>
      </div>

      <main>
        {/* ── Who we are ── */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-14 items-center">
            <div>
              <p className="uppercase text-brand-gold text-xs tracking-widest font-semibold mb-2">
                About the consultancy
              </p>
              <h2 className="section-heading">
                One of the most trusted mortgage brokers in the Canary Islands.
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Tenerife Mortgage Consultancy is one of the most recognised and
                trusted mortgage brokers throughout the Canary Islands and
                Mainland Spain. With four years of experience and a deep
                commitment to client satisfaction, we provide expert advice and
                personalised mortgage solutions shaped entirely around your
                needs.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                We are a face-to-face, bespoke, independent mortgage brokerage.
                We support you and your family or partners throughout the entire
                mortgage process — negotiating with banks, sellers and estate
                agents on your behalf, contracting lawyers, solicitors and
                valuers, and assisting with all the paperwork and signings.
              </p>
              <Link to="/contact" className="btn-primary">
                Book a free consultation
              </Link>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg aspect-video bg-gray-100">
              <img
                src={teamImage}
                alt="Tenerife property — coastline and development"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* ── Core service cards ── */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <p className="uppercase text-brand-gold text-xs tracking-widest font-semibold mb-2 text-center">
              Mortgage services
            </p>
            <h2 className="section-heading text-center mb-3">
              Mortgage consultancy tailored around your purchase.
            </h2>
            <p className="text-center text-gray-500 text-sm max-w-xl mx-auto mb-12">
              Whether you are buying a holiday home, refinancing, releasing
              equity or planning a construction project, we help you prepare and
              present your case clearly.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {CORE_SERVICES.map(({ Icon, title, desc }) => (
                <div
                  key={title}
                  className="group bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-brand-gold/40 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="relative w-14 h-14 mb-5 overflow-hidden">
                    <div
                      className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-lightgold/20 to-brand-gold/10 flex items-center justify-center
                                    transition-all duration-500 ease-in-out
                                    group-hover:rotate-[360deg] group-hover:translate-x-16 group-hover:opacity-0"
                    >
                      <Icon
                        className="w-6 h-6 text-brand-gold"
                        strokeWidth={1.75}
                      />
                    </div>
                    <div
                      className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-gold/30 to-brand-deepgold/20 flex items-center justify-center
                                    -translate-x-16 opacity-0
                                    transition-all duration-500 ease-in-out
                                    group-hover:translate-x-0 group-hover:opacity-100 group-hover:rotate-[360deg]"
                    >
                      <Icon
                        className="w-6 h-6 text-brand-deepgold"
                        strokeWidth={1.75}
                      />
                    </div>
                  </div>
                  <h3 className="font-semibold text-brand-blue text-lg mb-2 group-hover:text-brand-gold transition-colors duration-300">
                    {title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Service breakdown ── */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <p className="uppercase text-brand-gold text-xs tracking-widest font-semibold mb-2 text-center">
              Full process support
            </p>
            <h2 className="section-heading text-center mb-3">
              Breakdown of our services.
            </h2>
            <p className="text-center text-gray-500 text-sm max-w-xl mx-auto mb-12">
              There are many detailed and technical elements involved in
              purchasing a property in Spain. Our service ensures that every
              step is handled professionally and smoothly.
            </p>
            <div className="grid md:grid-cols-2 gap-5">
              {BREAKDOWN.map((item, i) => (
                <div
                  key={i}
                  className="flex gap-4 items-start bg-gray-50 rounded-xl p-5 border border-gray-100 hover:border-brand-gold/30 hover:shadow-sm transition-all"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-brand-lightgold/30 to-brand-gold/20 flex items-center justify-center mt-0.5">
                    <svg
                      className="w-4 h-4 text-brand-gold"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Key services ── */}
        <section className="py-20 bg-brand-blue">
          <div className="max-w-6xl mx-auto px-4">
            <p className="uppercase text-brand-gold text-xs tracking-widest font-semibold mb-2 text-center">
              Key services
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white text-center mb-3">
              Everything under one roof.
            </h2>
            <p className="text-center text-gray-400 text-sm max-w-xl mx-auto mb-12">
              Beyond the mortgage itself, we coordinate every professional
              service you need to complete your purchase in Spain.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {KEY_SERVICES.map(({ Icon, label, desc }) => (
                <div
                  key={label}
                  className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-brand-gold/30 transition-all group"
                >
                  <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center mb-4">
                    <Icon
                      className="w-5 h-5 text-brand-gold group-hover:scale-110 transition-transform duration-300"
                      strokeWidth={1.75}
                    />
                  </div>
                  <h3 className="font-semibold text-white mb-2">{label}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Process strip ── */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <p className="uppercase text-brand-gold text-xs tracking-widest font-semibold mb-2 text-center">
              How it works
            </p>
            <h2 className="section-heading text-center mb-12">
              A clear process, from first call to completion.
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: "01",
                  title: "Initial consultation",
                  desc: "We begin with a telephone call to understand your goals, budget and circumstances.",
                },
                {
                  step: "02",
                  title: "Office meeting",
                  desc: "We invite you to our Adeje office to discuss the most suitable mortgage structure in detail.",
                },
                {
                  step: "03",
                  title: "Application & lender",
                  desc: "We prepare and present your case to the most appropriate lenders and negotiate on your behalf.",
                },
                {
                  step: "04",
                  title: "Completion",
                  desc: "We coordinate all parties — up to 10 individuals — through to signing at the notary.",
                },
              ].map(({ step, title, desc }) => (
                <div key={step} className="relative">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-lightgold/30 to-brand-gold/20 flex items-center justify-center mb-4">
                    <span className="font-display font-bold text-brand-blue text-lg">
                      {step}
                    </span>
                  </div>
                  <h3 className="font-semibold text-brand-blue mb-2">
                    {title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA strip ── */}
        <section className="bg-brand-midblue py-12">
          <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6 text-white">
            <div>
              <h3 className="font-display text-xl font-bold mb-1">
                Ready to discuss your mortgage options?
              </h3>
              <p className="text-blue-200 text-sm">
                Book a free initial consultation — no obligation, pressure.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <Link to="/contact" className="btn-primary text-center">
                Book a free consultation
              </Link>
              <Link
                to="/mortgage-calculator"
                className="btn-secondary text-center"
              >
                Try the calculator
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
