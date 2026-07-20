import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useScrolled } from "../hooks/useScrolled";
import { useIsHomePage } from "../hooks/useIsHomePage";
import logoSrc from "../assets/img/logo.svg";

const NAV_LINKS = [
  { to: "/about", label: "About" },
  { to: "/our-services", label: "Services" },
  { to: "/mortgage-calculator", label: "Calculator" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useScrolled(60);
  const isHome = useIsHomePage();
  const transparent = isHome && !scrolled;

  // Lock body scroll while the full-screen mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `transition-colors duration-300 ${
      isActive
        ? "text-brand-gold"
        : transparent
          ? "text-white/90 hover:text-brand-gold"
          : "text-brand-blue hover:text-brand-gold"
    }`;

  return (
    <header className="w-full">
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          transparent
            ? "bg-transparent shadow-none"
            : "bg-white/95 backdrop-blur-md shadow-md"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex-shrink-0 flex items-center"
            aria-label="Tenerife Mortgage Consultancy — home"
          >
            <img
              src={logoSrc}
              alt="Tenerife Mortgage Consultancy"
              className={`h-11 w-auto transition-all duration-500 ${
                transparent ? "brightness-0 invert" : "brightness-100 invert-0"
              }`}
            />
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            <NavLink to="/about" className={linkClass}>
              About
            </NavLink>
            <NavLink to="/our-services" className={linkClass}>
              Services
            </NavLink>
            <NavLink to="/mortgage-calculator" className={linkClass}>
              Calculator
            </NavLink>
            <NavLink to="/faq" className={linkClass}>
              FAQ
            </NavLink>
            <NavLink to="/contact" className={linkClass}>
              Contact
            </NavLink>
            <Link to="/contact" className="btn-primary text-sm py-2 px-4">
              Free Consultation
            </Link>
          </div>

          {/* Mobile hamburger — hidden once the full-screen menu is open */}
          <button
            className={`md:hidden p-2 transition-colors duration-300 ${
              menuOpen ? "opacity-0 pointer-events-none" : "opacity-100"
            } ${transparent ? "text-white" : "text-brand-blue"}`}
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu — full-screen animated overlay */}
      <div
        className={`md:hidden fixed inset-0 z-[60] bg-brand-blue transition-opacity duration-300 ease-in-out ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Close button */}
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          aria-label="Close menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Links — each slides/fades in with a staggered delay */}
        <nav className="h-full flex flex-col items-center justify-center gap-2 px-6">
          {NAV_LINKS.map(({ to, label }, i) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setMenuOpen(false)}
              className="text-white/90 hover:text-brand-gold text-2xl font-display font-semibold py-3 transition-all duration-500 ease-out"
              style={{
                transitionProperty: "opacity, transform",
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "translateY(0)" : "translateY(16px)",
                transitionDelay: menuOpen ? `${100 + i * 60}ms` : "0ms",
              }}
            >
              {label}
            </NavLink>
          ))}

          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="btn-primary text-sm py-3 px-8 text-center mt-6 transition-all duration-500 ease-out"
            style={{
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? "translateY(0)" : "translateY(16px)",
              transitionDelay: menuOpen ? "400ms" : "0ms",
            }}
          >
            Free Consultation
          </Link>
        </nav>
      </div>

      {/* Spacer on non-home pages so content clears the fixed nav */}
      {!isHome && <div className="h-16" />}
    </header>
  );
}
