import Header from '../components/Header'
import Footer from '../components/Footer'

export default function ContactPage() {
  return (
    <>
      <title>Contact Us — TM Tenerife Mortgage Consultancy</title>
      <meta name="description" content="Get in touch with Tenerife Mortgage Consultancy. We help international buyers understand their mortgage options for buying property in Spain." />
      <Header />

      {/* Page hero */}
      <div className="relative bg-brand-blue py-16 text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1400&q=80')" }}
          aria-hidden="true"
        />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-3">Contact Us</h1>
          <p className="text-gray-300 text-lg">Ready to talk through your mortgage options?</p>
        </div>
      </div>

      <main className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">

            {/* Contact details */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <p className="uppercase text-brand-gold text-xs tracking-widest font-semibold mb-4">Get in touch</p>
              <h2 className="font-display text-2xl font-bold text-brand-blue mb-4">
                Send us your details and we will help you understand the next steps for
                financing a property purchase in Tenerife or wider Spain.
              </h2>

              <div className="mt-8 space-y-5 text-sm">
                <div>
                  <p className="font-semibold text-brand-blue text-base mb-1">Tenerife Mortgage Consultancy SL</p>
                  <p className="text-gray-500">CIF: B70792536</p>
                </div>
                <div className="flex gap-3">
                  <svg className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-gray-600 leading-relaxed">
                    Avda de los Pueblos, CC San Eugenio Local 94,<br />
                    Adeje 38660, S/C de Tenerife
                  </p>
                </div>
                <div className="flex gap-3 items-center">
                  <svg className="w-5 h-5 text-brand-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:info@tenerifemortgageconsultancy.com" className="text-brand-blue hover:text-brand-gold font-medium">
                    info@tenerifemortgageconsultancy.com
                  </a>
                </div>
                <div className="flex gap-3 items-center">
                  <svg className="w-5 h-5 text-brand-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-gray-600">Monday – Friday: 10:00 – 14:00</p>
                </div>
              </div>

              <a
                href="mailto:info@tenerifemortgageconsultancy.com"
                className="btn-primary inline-block mt-8"
              >
                Email us
              </a>
            </div>

            {/* Supporting info */}
            <div className="space-y-6">
              <div className="bg-brand-blue rounded-2xl p-6 text-white">
                <h3 className="font-semibold text-brand-gold mb-2 uppercase text-xs tracking-widest">Free consultation</h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Our initial consultation is completely free. We'll listen to your goals,
                  explain your options and outline the steps ahead — with no obligation.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-semibold text-brand-blue mb-3">What to expect</h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  {[
                    'We listen to your goals, budget and timeframe',
                    'We review suitable mortgage routes with you',
                    'We guide your documentation and application',
                    'We support you through to signing',
                  ].map((item) => (
                    <li key={item} className="flex gap-2 items-start">
                      <svg className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-brand-gold/10 border border-brand-gold/30 rounded-2xl p-5">
                <h4 className="font-semibold text-brand-blue mb-2">Want to run the numbers first?</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Use our mortgage calculator to get an estimate of your monthly payments before we talk.
                </p>
                <a
                  href="/mortgage-calculator"
                  className="block text-center bg-brand-gold hover:bg-brand-lightgold text-brand-cream hover:text-brand-blue font-semibold py-2 px-4 rounded transition-colors text-sm"
                >
                  Open Mortgage Calculator →
                </a>
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
