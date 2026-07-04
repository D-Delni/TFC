import { Link } from "react-router-dom";
import CountUp from "react-countup";
import {
  Home,
  RefreshCw,
  Building2,
  Landmark,
  FileSignature,
  Zap,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroCarousel from "../components/HeroCarousel";

export default function HomePage() {
  return (
    <>
      <title>
        Independent Mortgage Support in Tenerife — TM Tenerife Mortgage
        Consultancy
      </title>
      <meta
        name="description"
        content="Friendly and independent mortgage advice for buying property in Spain. We help international buyers understand their options and move confidently to completion."
      />
      <Header />
      <main>
        {/* ── Hero with carousel ── */}
        <section className="relative bg-brand-blue overflow-hidden min-h-[620px] flex items-center">
          {/* Carousel sits behind everything */}
          <HeroCarousel />
          {/* Dark gradient overlay so text stays readable */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/85 via-brand-blue/60 to-brand-blue/30" />

          {/* Hero content — padded top to clear the fixed nav */}
          <div className="relative z-10 max-w-6xl mx-auto px-4 pt-24 pb-20 text-white">
            <p className="uppercase text-brand-gold text-xs tracking-widest font-semibold mb-3">
              Independent mortgage support in Tenerife
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 max-w-2xl">
              Friendly and independent mortgage advice in Tenerife{" "}
            </h1>
            <p className="text-lg text-gray-200 mb-8 max-w-xl">
              We help international buyers fully understand their options,
              prepare their application and move confidently from first enquiry
              to completion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-primary text-center">
                Book a free consultation
              </Link>
              <Link
                to="/mortgage-calculator"
                className="btn-secondary text-center"
              >
                Mortgage Calculator
              </Link>
            </div>
          </div>
        </section>

        {/* ── Stats strip ── */}
        <section className="bg-gradient-to-r from-brand-deepgold via-brand-gold to-brand-deepgold py-10">
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: 15, suffix: "+", label: "Years of combined experience" },
              {
                value: 100,
                suffix: "%",
                label: "Independent, lender-neutral advice",
              },
              { value: 24, suffix: "h", label: "Pre-approval preparation" },
              { value: 360, suffix: "°", label: "Support to completion" },
            ].map(({ value, suffix, label }) => (
              <div key={label}>
                <p className="font-sans text-4xl md:text-5xl font-extrabold text-brand-cream tracking-tight tabular-nums">
                  <CountUp
                    end={value}
                    duration={3.8}
                    enableScrollSpy
                    scrollSpyOnce
                  />
                  {suffix}
                </p>
                <p className="text-sm text-brand-cream/80 font-medium mt-2">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── About intro ── */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="uppercase text-brand-gold text-xs tracking-widest font-semibold mb-2">
                About Us
              </p>
              <h2 className="section-heading">
                We are here to make buying property in Spain easier.
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Finding a home abroad should feel exciting, not overwhelming. We
                help you understand lender requirements, compare suitable
                finance routes and keep the process moving with clear, practical
                support.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                As independent mortgage consultants, we work for <em>you</em> —
                not the banks. We have access to the full market and will find
                you the best option available.
              </p>
              <Link to="/about" className="btn-primary">
                Learn More About Us
              </Link>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg aspect-video bg-gray-100">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                alt="Mortgage consultation in progress"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* ── Services ── */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <p className="uppercase text-brand-gold text-xs tracking-widest font-semibold mb-2 text-center">
              Our Services
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
              {[
                {
                  title: "Mortgages",
                  desc: "Guidance on Spanish mortgage options for residents and non-residents.",
                  Icon: Home,
                },
                {
                  title: "Refinance",
                  desc: "Explore refinancing options to review rates, terms or release equity.",
                  Icon: RefreshCw,
                },
                {
                  title: "Construction Finance",
                  desc: "Support for finance linked to building, renovation or staged projects.",
                  Icon: Building2,
                },
                {
                  title: "Bridging Support",
                  desc: "Short-term finance guidance for timing gaps between property transactions.",
                  Icon: Landmark,
                },
                {
                  title: "Subrogation",
                  desc: "Understand whether taking over or replacing an existing mortgage is suitable.",
                  Icon: FileSignature,
                },
                {
                  title: "Pre-Approval",
                  desc: "Prepare documentation early so you can search with stronger confidence.",
                  Icon: Zap,
                },
              ].map(({ title, desc, Icon }) => (
                <Link
                  key={title}
                  to="/our-services"
                  className="group bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-brand-gold/40 hover:-translate-y-1 transition-all duration-300 block"
                >
                  {/* Icon badge — animates on group-hover */}
                  <div className="relative w-14 h-14 mb-5 overflow-hidden">
                    {/* Resting icon */}
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
                    {/* Incoming icon — starts off to the left, slides in */}
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
                  <p className="mt-4 text-xs font-semibold text-brand-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 tracking-wide uppercase">
                    Learn more →
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Blue CTA ── */}
        <section className="py-20 bg-brand-blue">
          <div className="max-w-4xl mx-auto px-4 text-center text-white">
            <p className="uppercase text-brand-gold text-xs tracking-widest font-semibold mb-3">
              360° Support
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Expert help from application to completion.
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Mortgage brokers can help compare loans, but international buyers
              often need more than that. We focus on communication, preparation
              and practical coordination so you always know what comes next.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/mortgage-calculator" className="btn-primary">
                Open Mortgage Calculator
              </Link>
              <Link to="/contact" className="btn-secondary">
                Book a free consultation
              </Link>
            </div>
          </div>
        </section>

        {/* ── How we work ── */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <p className="uppercase text-brand-gold text-xs tracking-widest font-semibold mb-2 text-center">
              How We Work
            </p>
            <h2 className="section-heading text-center mb-12">
              A clear process from first conversation to keys.
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Listen and assess",
                  body: "We begin with your goals, budget, timeframe and any concerns.",
                },
                {
                  title: "Compare options",
                  body: "We review suitable routes and help you understand lender expectations.",
                },
                {
                  title: "Prepare the case",
                  body: "We guide your documentation and application presentation.",
                },
                {
                  title: "Support completion",
                  body: "We help keep the process organised through to signing.",
                },
              ].map(({ title, body }) => (
                <div key={title} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-gold/20 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-brand-gold"
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
                  <div>
                    <h3 className="font-semibold text-brand-blue mb-1">
                      {title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Team ── */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <p className="uppercase text-brand-gold text-xs tracking-widest font-semibold mb-2 text-center">
              The Team
            </p>
            <h2 className="section-heading text-center mb-3">
              Meet the consultancy behind your mortgage journey.
            </h2>
            <p className="text-center text-gray-500 text-sm max-w-xl mx-auto mb-12">
              A small, focused team committed to clear communication and
              practical support throughout your purchase.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {[
                {
                  initials: "MA",
                  role: "Mortgage Consultant",
                  desc: "Client assessment and lender coordination.",
                },
                {
                  initials: "LO",
                  role: "Client Support",
                  desc: "Documentation, updates and practical guidance.",
                },
                {
                  initials: "MR",
                  role: "Spanish Lending Network",
                  desc: "Relationships with banks and finance partners.",
                },
              ].map(({ initials, role, desc }) => (
                <Link
                  key={initials}
                  to="/about"
                  className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-md hover:border-brand-gold/30 hover:-translate-y-1 transition-all duration-200 cursor-pointer block"
                >
                  <div key={initials}>
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-lightblue to-brand-blue flex items-center justify-center mx-auto mb-4 shadow-md">
                      <span className="font-display font-bold text-white text-xl">
                        {initials}
                      </span>
                    </div>
                    <h3 className="font-semibold text-brand-blue mb-1">
                      {role}
                    </h3>
                    <p className="text-gray-500 text-sm">{desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Testimonials ── */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <p className="uppercase text-brand-gold text-xs tracking-widest font-semibold mb-2 text-center">
              Client Experience
            </p>
            <h2 className="section-heading text-center mb-12">
              Calm, clear support when the paperwork feels complex.
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  quote:
                    "The process was explained clearly from the start and we always knew what documents were needed next.",
                  attr: "International buyer",
                },
                {
                  quote:
                    "Professional, organised and reassuring throughout our Spanish mortgage application.",
                  attr: "Property purchaser",
                },
                {
                  quote:
                    "A practical service for buyers who want independent guidance and local knowledge.",
                  attr: "Tenerife client",
                },
              ].map(({ quote, attr }) => (
                <div
                  key={attr}
                  className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:border-brand-gold/30 hover:shadow-sm transition-all"
                >
                  <div className="text-brand-gold text-3xl font-display mb-2">
                    "
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    {quote}
                  </p>
                  <p className="text-xs font-semibold text-brand-blue uppercase tracking-wide">
                    {attr}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Contact strip ── */}
        <section className="bg-brand-midblue py-10">
          <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6 text-white">
            <div>
              <h3 className="font-semibold text-lg mb-1">
                Ready to talk through your mortgage options?
              </h3>
              <p className="text-blue-200 text-sm">
                Speak with one of our expert consultants today.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <a
                href="mailto:admin@tenerifemortgageconsultancy.com"
                className="text-brand-gold hover:text-brand-lightgold font-semibold text-sm"
              >
                admin@tenerifemortgageconsultancy.com
              </a>
              <Link to="/contact" className="btn-primary ml-0 sm:ml-4">
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
