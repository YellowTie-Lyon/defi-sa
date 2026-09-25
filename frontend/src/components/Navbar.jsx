import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ArrowUpRight, Globe } from "lucide-react";
import { useApp } from "../context/AppContext";
import { categories, BROCHURE_URL } from "../mock/data";

const Navbar = () => {
  const { t, pick, lang, toggleLang } = useApp();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [equipOpen, setEquipOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Use an IntersectionObserver sentinel to detect scroll state. This is
    // driven by the layout engine and is reliable even when scroll events or
    // requestAnimationFrame are throttled. A tiny off-flow sentinel is placed
    // at the very top of the document; once it scrolls out of view the navbar
    // switches to its solid state.
    const sentinel = document.createElement("div");
    sentinel.setAttribute("aria-hidden", "true");
    sentinel.style.cssText =
      "position:absolute;top:0;left:0;width:1px;height:30px;pointer-events:none;";
    document.body.appendChild(sentinel);

    const io = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { threshold: 0 }
    );
    io.observe(sentinel);

    // Immediate sync + light scroll listener as a fast-path fallback.
    const sync = () => setScrolled(window.scrollY > 24);
    sync();
    window.addEventListener("scroll", sync, { passive: true });

    return () => {
      io.disconnect();
      sentinel.remove();
      window.removeEventListener("scroll", sync);
    };
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setEquipOpen(false);
  }, [location.pathname]);

  // solid = white background state (scrolled or mobile menu open)
  const solid = scrolled || mobileOpen;

  const linkClass = ({ isActive }) =>
    `relative text-sm font-medium tracking-wide transition-colors py-2 ${
      isActive
        ? "text-[#E4002B]"
        : solid
        ? "text-slate-700 hover:text-slate-900"
        : "text-white/85 hover:text-white"
    }`;

  return (
    <header
      style={{
        backgroundColor: solid ? "rgba(255, 255, 255, 0.92)" : "transparent",
      }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        solid
          ? "backdrop-blur-md shadow-[0_2px_20px_-8px_rgba(15,23,42,0.25)]"
          : ""
      }`}
    >
      <div className="cmyk-bar h-1 w-full" />
      <div className="defi-container">
        <div className="flex items-center justify-between h-[74px]">
          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0">
            <img
              src="/defi-logo.png"
              alt="DEFI"
              className={`h-11 w-auto transition-all duration-300 ${
                solid ? "" : "brightness-0 invert"
              }`}
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <NavLink to="/" className={linkClass} end>
              {t("nav.home")}
            </NavLink>

            <div
              className="relative"
              onMouseEnter={() => setEquipOpen(true)}
              onMouseLeave={() => setEquipOpen(false)}
            >
              <button
                className={`flex items-center gap-1 text-sm font-medium py-2 transition-colors ${
                  solid ? "text-slate-700 hover:text-slate-900" : "text-white/85 hover:text-white"
                }`}
              >
                {t("nav.equipment")}
                <ChevronDown size={15} className={`transition-transform ${equipOpen ? "rotate-180" : ""}`} />
              </button>
              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-200 ${
                  equipOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-1"
                }`}
              >
                <div className="w-64 bg-white rounded-xl shadow-xl border border-slate-100 p-2">
                  {categories.map((c) => (
                    <Link
                      key={c.slug}
                      to={`/equipements/${c.slug}`}
                      className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm text-slate-700 hover:bg-slate-50 hover:text-[#E4002B] transition-colors group"
                    >
                      {pick(c.name)}
                      <ArrowUpRight size={15} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <NavLink to="/actualites" className={linkClass}>
              {t("nav.news")}
            </NavLink>
            <NavLink to="/a-propos" className={linkClass}>
              {t("nav.about")}
            </NavLink>
            <NavLink to="/contact" className={linkClass}>
              {t("nav.contact")}
            </NavLink>
          </nav>

          {/* Right actions */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={toggleLang}
              className={`flex items-center gap-1.5 text-sm font-semibold rounded-full px-3 py-1.5 border transition-colors ${
                solid
                  ? "text-slate-600 hover:text-slate-900 border-slate-200"
                  : "text-white/90 hover:text-white border-white/25 hover:bg-white/10"
              }`}
            >
              <Globe size={15} />
              {lang === "fr" ? "EN" : "FR"}
            </button>
            <Link
              to="/contact"
              className={`inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-full transition-colors duration-300 ${
                solid
                  ? "bg-[#0F172A] text-white hover:bg-[#E4002B]"
                  : "bg-white text-[#0F172A] hover:bg-[#E4002B] hover:text-white"
              }`}
            >
              {t("nav.quote")}
              <ArrowUpRight size={16} />
            </Link>
          </div>

          {/* Mobile toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleLang}
              className={`text-sm font-semibold rounded-full px-2.5 py-1.5 border transition-colors ${
                solid ? "text-slate-600 border-slate-200" : "text-white border-white/30"
              }`}
            >
              {lang === "fr" ? "EN" : "FR"}
            </button>
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className={`p-2 transition-colors ${solid ? "text-slate-800" : "text-white"}`}
              aria-label="Menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 bg-white border-t border-slate-100 ${
          mobileOpen ? "max-h-[560px]" : "max-h-0"
        }`}
      >
        <div className="defi-container py-4 flex flex-col gap-1">
          <NavLink to="/" className="py-2.5 text-slate-800 font-medium" end>{t("nav.home")}</NavLink>
          <div className="py-1">
            <p className="text-xs uppercase tracking-widest text-slate-400 mb-1">{t("nav.equipment")}</p>
            {categories.map((c) => (
              <Link key={c.slug} to={`/equipements/${c.slug}`} className="block py-2 pl-3 text-slate-700">
                {pick(c.name)}
              </Link>
            ))}
          </div>
          <NavLink to="/actualites" className="py-2.5 text-slate-800 font-medium">{t("nav.news")}</NavLink>
          <NavLink to="/a-propos" className="py-2.5 text-slate-800 font-medium">{t("nav.about")}</NavLink>
          <NavLink to="/contact" className="py-2.5 text-slate-800 font-medium">{t("nav.contact")}</NavLink>
          <a href={BROCHURE_URL} target="_blank" rel="noreferrer" className="mt-2 inline-flex items-center justify-center gap-2 bg-[#0F172A] text-white font-semibold px-5 py-3 rounded-full">
            {t("nav.brochure")}
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
