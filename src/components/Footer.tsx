import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-brand-blue text-white">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div className="md:col-span-2">
          <div className="font-display font-bold text-xl mb-2">
            TM <span className="text-brand-gold">Tenerife</span> Mortgage
            Consultancy SL
          </div>
          <p className="text-sm text-gray-300 leading-relaxed mb-4">
            Independent mortgage consultancy for buying property in Spain.
          </p>
          <p className="text-xs text-gray-400">CIF: B70792536</p>
          <p className="text-xs text-gray-400 mt-1">
            Avda de los Pueblos, CC San Eugenio Local 94,
            <br />
            Adeje 38660, S/C de Tenerife
          </p>
          <a
            href="mailto:admin@tenerifemortgage.com"
            className="inline-block mt-3 text-sm text-brand-gold hover:text-brand-lightgold"
          >
            admin@tenerifemortgage.com
          </a>
          <br />
          <a
            href="mailto:matthew@tenerifemortgage.com"
            className="inline-block mt-3 text-sm text-brand-gold hover:text-brand-lightgold"
          >
            matthew@tenerifemortgage.com
          </a>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold text-brand-gold mb-3 uppercase text-xs tracking-widest">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link to="/mortgage-calculator" className="hover:text-white">
                Mortgage Calculator
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link to="/our-services" className="hover:text-white">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-4">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-400">
          <span>© Tenerife Mortgage Consultancy SL — CIF: B70792536</span>
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/cookies" className="hover:text-white">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
