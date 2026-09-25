import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, ArrowRight, Linkedin, Facebook } from "lucide-react";
import { useApp } from "../context/AppContext";
import { categories, contactInfo } from "../mock/data";

const Footer = () => {
  const { t, pick } = useApp();
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (!email) return;
    setDone(true);
    setEmail("");
    setTimeout(() => setDone(false), 2500);
  };

  return (
    <footer className="bg-[#0B1120] text-slate-300 relative overflow-hidden">
      <div className="absolute inset-0 grid-lines opacity-[0.06] pointer-events-none" />
      <div className="defi-container relative pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="bg-white rounded-xl inline-flex p-3 mb-5">
              <img src="/defi-logo.png" alt="DEFI" className="h-10 w-auto" />
            </div>
            <p className="text-sm leading-relaxed text-slate-400 max-w-xs">{t("footer.tagline")}</p>
            <div className="flex gap-3 mt-5">
              <a href="#" className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#E4002B] flex items-center justify-center transition-colors"><Linkedin size={16} /></a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#E4002B] flex items-center justify-center transition-colors"><Facebook size={16} /></a>
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">{t("footer.navTitle")}</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">{t("nav.home")}</Link></li>
              <li><Link to="/actualites" className="hover:text-white transition-colors">{t("nav.news")}</Link></li>
              <li><Link to="/a-propos" className="hover:text-white transition-colors">{t("nav.about")}</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">{t("nav.contact")}</Link></li>
            </ul>
          </div>

          {/* Equipment */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">{t("footer.equipTitle")}</h4>
            <ul className="space-y-2.5 text-sm">
              {categories.map((c) => (
                <li key={c.slug}>
                  <Link to={`/equipements/${c.slug}`} className="hover:text-white transition-colors">{pick(c.name)}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">{t("footer.contactTitle")}</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-3"><MapPin size={17} className="text-[#E4002B] shrink-0 mt-0.5" /><span>{contactInfo.address}</span></li>
              <li className="flex gap-3"><Phone size={17} className="text-[#E4002B] shrink-0 mt-0.5" /><a href={`tel:${contactInfo.phone}`} className="hover:text-white">{contactInfo.phone}</a></li>
              <li className="flex gap-3"><Mail size={17} className="text-[#E4002B] shrink-0 mt-0.5" /><a href={`mailto:${contactInfo.email}`} className="hover:text-white">{contactInfo.email}</a></li>
            </ul>
            <form onSubmit={submit} className="mt-5">
              <p className="text-xs text-slate-400 mb-2">{t("footer.newsletter")}</p>
              <div className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t("footer.newsletterPlaceholder")}
                  className="flex-1 min-w-0 bg-white/5 border border-white/10 rounded-l-lg px-3 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#E4002B]"
                />
                <button type="submit" className="bg-[#E4002B] hover:bg-[#c40025] rounded-r-lg px-3.5 flex items-center justify-center transition-colors">
                  <ArrowRight size={17} className="text-white" />
                </button>
              </div>
              {done && <p className="text-xs text-emerald-400 mt-2">{t("footer.subscribed")}</p>}
            </form>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} DEFI. {t("footer.rights")}</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-slate-300">{t("footer.legal")}</a>
            <a href="#" className="hover:text-slate-300">{t("footer.privacy")}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
