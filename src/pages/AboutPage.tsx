import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import matImage from "../assets/img/team/ART_7231.jpg";
import marImage from "../assets/img/team/ART_7201.jpg";
import louImage from "../assets/img/team/ART_7183.jpg";

const TEAM = [
  {
    initials: "MA",
    name: "Matthew",
    role: "Senior Mortgage Consultant",
    tag: "Client Assessment & Mortgage Strategy",
    photo: matImage,
    quote:
      "Buying a property abroad can feel overwhelming, especially when you're unfamiliar with the local banking system, tax regulations, and legal process. If I were investing €100,000, €200,000 or €1 million, For me would want to sit down with someone I could trust before making any decisions.",
    credentials: [
      "Initial telephone consultation to assess your goals and circumstances",
      "Face-to-face meetings at our Adeje, Tenerife office",
      "Specialist in tax-efficient and cost-effective purchase structures",
      "My priority is not simply arranging your mortgage;it is helping you save money, avoid costly mistakes, and guiding you through every stage of your property purchase in the Canary Islands with personal, face-to-face support.",
    ],
  },
  {
    initials: "LO",
    name: "Louise",
    role: "Client Relations & Operations",
    tag: "Documentation, Lender Liaison & Client Care",
    photo: louImage,
    quote:
      "I work closely with clients and professional partners to ensure every mortgage application is handled with care, accuracy, and efficiency. From managing documentation and liaising with banks, solicitors, and lawyers to keeping clients informed, I focus on delivering a personal, responsive, and stress-free experience. I also manage our social media, sharing the latest news, insights, and property finance updates.",
    credentials: [
      "Direct liaison with banks, solicitors and legal partners",
      "End-to-end client communication and case management",
      "Social media and client communications management",
    ],
  },
  {
    initials: "MF",
    name: "Marco — Magna Financial",
    role: "Foreign Exchange Partner",
    tag: "International Payments & Currency Management",
    photo: marImage,
    quote:
      "My name is Marco, and I am the Customer Relations Manager for Magna Financial in the Canary Islands. I work closely with clients to provide personalised support, helping them manage their international payments and foreign exchange needs with confidence.",
    credentials: [
      "Save up to 5% compared with typical bank exchange rates",
      "Open multi-currency accounts in 36+ currencies within minutes",
      "Fast global payments, with funds delivered within 24 hours",
      "No commission fees",
      "Expert market guidance to help secure competitive exchange rates",
      "Fixed-rate forward contracts in over 100 currencies",
      "Secure client accounts to hold your funds safely",
      "Dedicated account manager providing personalised support throughout",
    ],
  },
];

export default function AboutPage() {
  return (
    <>
      <title>About Us — TM Tenerife Mortgage Consultancy</title>
      <meta
        name="description"
        content="Meet the team behind Tenerife Mortgage Consultancy. Independent mortgage consultants helping international buyers purchase property in Spain with clarity and confidence."
      />
      <Header />

      {/* ── Hero ── */}
      <div className="relative bg-brand-blue py-20 text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1400&q=80')",
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <p className="uppercase text-brand-gold text-xs tracking-widest font-semibold mb-3">
            The consultancy
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            About Us
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A small, focused team built around one goal — making your Spanish
            mortgage as clear and straightforward as possible.
          </p>
        </div>
      </div>

      <main>
        {/* ── Mission ── */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-14 items-center">
            <div>
              <p className="uppercase text-brand-gold text-xs tracking-widest font-semibold mb-2">
                Who we are
              </p>
              <h2 className="section-heading">
                Independent advice. No bank affiliations. No hidden agendas.
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Tenerife Mortgage Consultancy SL is a fully licensed,
                independent mortgage consultancy based in Adeje, Tenerife. We
                work exclusively for our clients — not for banks, not for
                developers — which means every recommendation we make is shaped
                entirely by what is right for your situation.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                We specialise in helping international buyers navigate the
                Spanish mortgage system with confidence. From the first enquiry
                to the moment you sign at the notary, our team coordinates every
                step so you always know what is happening and what comes next.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/contact" className="btn-primary">
                  Book a free consultation
                </Link>
                <Link
                  to="/mortgage-calculator"
                  className="inline-block border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white font-semibold px-6 py-3 rounded transition-colors duration-200"
                >
                  Mortgage Calculator
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { label: "Registered in Spain", value: "CIF: B70792536" },
                {
                  label: "Office",
                  value: "CC San Eugenio Local 94, Adeje, Tenerife",
                },
                { label: "Hours", value: "Monday – Friday, 10:00 – 14:00" },
                { label: "Languages", value: "English · Spanish · German" },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="flex gap-4 items-start border-b border-gray-100 pb-4 last:border-0 last:pb-0"
                >
                  <span className="w-2 h-2 rounded-full bg-brand-gold flex-shrink-0 mt-2" />
                  <div>
                    <p className="text-xs font-semibold text-brand-gold uppercase tracking-widest mb-0.5">
                      {label}
                    </p>
                    <p className="text-brand-blue font-medium text-sm">
                      {value}
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
              The team
            </p>
            <h2 className="section-heading text-center mb-3">
              The people behind your mortgage journey.
            </h2>
            <p className="text-center text-gray-500 text-sm max-w-xl mx-auto mb-16">
              Three specialists, one shared commitment — to make buying property
              in Spain feel manageable, transparent and entirely in your hands.
            </p>

            <div className="space-y-10">
              {TEAM.map(
                (
                  { initials, name, role, tag, photo, quote, credentials },
                  idx,
                ) => (
                  <article
                    key={initials}
                    className={`bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col ${
                      idx % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
                    }`}
                  >
                    {/* Photo panel */}
                    <div className="md:w-72 lg:w-80 flex-shrink-0 relative">
                      <div className="h-72 md:h-full w-full relative">
                        <img
                          src={photo}
                          alt={`${name} — ${role}`}
                          className="w-full h-full object-cover object-top"
                        />
                        {/* Initials badge */}
                        <div className="absolute top-4 left-4 w-11 h-11 rounded-full bg-gradient-to-br from-brand-lightblue to-brand-blue flex items-center justify-center shadow-lg">
                          <span className="font-display font-bold text-white text-base">
                            {initials}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Content panel */}
                    <div className="flex-1 p-8 lg:p-10 flex flex-col justify-between">
                      <div>
                        {/* Role tag */}
                        <p className="uppercase text-brand-gold text-xs tracking-widest font-semibold mb-2">
                          {tag}
                        </p>
                        <h3 className="font-display text-2xl font-bold text-brand-blue mb-0.5">
                          {name}
                        </h3>
                        <p className="text-sm font-medium text-brand-lightblue mb-6">
                          {role}
                        </p>

                        {/* First-person quote */}
                        <div className="relative mb-8">
                          <span className="absolute -top-3 -left-1 font-display text-5xl text-brand-gold/25 leading-none select-none">
                            "
                          </span>
                          <p className="text-gray-700 leading-relaxed pl-5 italic">
                            {quote}
                          </p>
                        </div>
                      </div>

                      {/* Credentials */}
                      <ul className="space-y-2">
                        {credentials.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 text-sm text-gray-600"
                          >
                            <svg
                              className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                ),
              )}
            </div>
          </div>
        </section>

        {/* ── Values strip ── */}
        <section className="py-16 bg-brand-blue">
          <div className="max-w-6xl mx-auto px-4">
            <p className="uppercase text-brand-gold text-xs tracking-widest font-semibold mb-10 text-center">
              How we operate
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Independent",
                  body: "We are not tied to any lender. We search the full market to find what is right for you.",
                },
                {
                  title: "Transparent",
                  body: "No hidden fees. No surprises. Every step is explained before you commit to anything.",
                },
                {
                  title: "Multilingual",
                  body: "We work in English, Spanish and German so nothing is lost in translation.",
                },
                {
                  title: "End-to-end",
                  body: "From first enquiry to notary signature, we stay with you for the entire journey.",
                },
              ].map(({ title, body }) => (
                <div
                  key={title}
                  className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors"
                >
                  <div className="w-8 h-0.5 bg-brand-gold mb-4" />
                  <h3 className="font-semibold text-white mb-2">{title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {body}
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
                Ready to start your mortgage journey?
              </h3>
              <p className="text-blue-200 text-sm">
                Book a free consultation — no obligation, pressure-less.
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
