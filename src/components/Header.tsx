import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useScrolled } from "../hooks/useScrolled";
import { useIsHomePage } from "../hooks/useIsHomePage";
import logoSrc from "../assets/img/logo.svg";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useScrolled(60);
  const isHome = useIsHomePage();

  const transparent = isHome && !scrolled;

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
            <Link to="/contact" className="btn-primary text-sm py-2 px-4">
              Free Consultation
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className={`md:hidden p-2 transition-colors duration-300 ${
              transparent ? "text-white" : "text-brand-blue"
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 px-4 py-4 flex flex-col gap-3 text-sm font-medium shadow-md">
            <NavLink
              to="/about"
              onClick={() => setMenuOpen(false)}
              className="text-brand-blue hover:text-brand-gold transition-colors"
            >
              About
            </NavLink>
            <NavLink
              to="/our-services"
              onClick={() => setMenuOpen(false)}
              className="text-brand-blue hover:text-brand-gold transition-colors"
            >
              Services
            </NavLink>
            <NavLink
              to="/mortgage-calculator"
              onClick={() => setMenuOpen(false)}
              className="text-brand-blue hover:text-brand-gold transition-colors"
            >
              Calculator
            </NavLink>
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="btn-primary text-sm py-2 px-4 text-center"
            >
              Free Consultation
            </Link>
          </div>
        )}
      </nav>

      {/* Spacer on non-home pages so content clears the fixed nav */}
      {!isHome && <div className="h-16" />}
    </header>
  );
}
