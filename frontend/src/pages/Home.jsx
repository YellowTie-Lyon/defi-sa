import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight, ArrowUpRight, Download, HeartHandshake, Ear, BadgeCheck,
  Wrench, ShieldCheck, Sparkles, CheckCircle2,
} from "lucide-react";
import { useApp } from "../context/AppContext";
import { useReveal } from "../hooks/useReveal";
import {
  stats, missionItems, categories, news, partners, values,
  BROCHURE_URL,
} from "../mock/data";

const iconMap = { HeartHandshake, Ear, BadgeCheck, Wrench, ShieldCheck, Sparkles };

const Home = () => {
  const { t, pick } = useApp();
  useReveal([]);

  const featured = news.slice(0, 3);

  return (
    <div>
      {/* ===== HERO ===== */}
      <section data-section="hero" className="relative pt-[74px] overflow-hidden bg-primary-deep">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1503694978374-8a2fa686963a"
            alt=""
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-deep via-primary-deep/85 to-primary-deep/60" />
          <div className="absolute inset-0 grid-lines opacity-[0.08]" />
        </div>

        <div className="defi-container relative">
          <div className="grid lg:grid-cols-12 gap-10 items-center min-h-[calc(100vh-74px)] py-20">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-slate-200 mb-6">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                {t("hero.tag")}
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.05] text-balance">
                {t("hero.title")}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-brand-magenta to-brand-yellow">
                  {t("hero.titleAccent")}
                </span>
              </h1>
              <p className="mt-6 text-lg text-slate-300 max-w-xl leading-relaxed">
                {t("hero.subtitle")}
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  to="/equipements/machines"
                  className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-semibold px-7 py-3.5 rounded-full transition-colors duration-300"
                >
                  {t("hero.ctaPrimary")}
                  <ArrowRight size={18} />
                </Link>
                <a
                  href={BROCHURE_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 border border-white/25 hover:bg-white/10 text-white font-semibold px-7 py-3.5 rounded-full transition-colors duration-300"
                >
                  <Download size={18} />
                  {t("hero.ctaSecondary")}
                </a>
              </div>
            </div>

            {/* floating stat card */}
            <div className="lg:col-span-5 hidden lg:block">
              <div className="relative animate-floaty">
                <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                  <img
                    src="https://images.pexels.com/photos/19316517/pexels-photo-19316517.png"
                    alt="Machine d'impression"
                    className="w-full h-[420px] object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 w-56">
                  <p className="font-display text-4xl font-bold text-primary">1990</p>
                  <p className="text-sm text-slate-500 mt-1">
                    {pick({ fr: "Une expertise reconnue depuis", en: "Recognized expertise since" })}
                  </p>
                  <div className="cmyk-bar h-1.5 rounded-full mt-3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section data-section="stats" className="bg-white border-b border-slate-100">
        <div className="defi-container">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-slate-100">
            {stats.map((s, i) => (
              <div key={i} className="py-8 px-4 text-center reveal" style={{ transitionDelay: `${i * 80}ms` }}>
                <p className="font-display text-4xl lg:text-5xl font-bold text-primary">{s.value}</p>
                <p className="text-sm text-slate-500 mt-1">{t(`hero.${s.key}`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MISSION ===== */}
      <section data-section="mission" className="py-24 bg-slate-50 relative">
        <div className="defi-container">
          <div className="max-w-2xl reveal">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">{t("mission.overline")}</p>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-primary text-balance">"{t("mission.title")}"</h2>
            <p className="text-slate-600 mt-4 text-lg">{t("mission.subtitle")}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mt-14">
            {missionItems.map((m, i) => {
              const Icon = iconMap[m.icon];
              return (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-8 border border-slate-100 hover-lift reveal"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-5">
                    <Icon size={26} className="text-white" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-primary mb-2">{pick(m.title)}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{pick(m.text)}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== EQUIPMENT ===== */}
      <section data-section="equipment" className="py-24 bg-white">
        <div className="defi-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 reveal">
            <div className="max-w-xl">
              <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">{t("equipment.overline")}</p>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-primary text-balance">{t("equipment.title")}</h2>
              <p className="text-slate-600 mt-4">{t("equipment.subtitle")}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((c, i) => (
              <Link
                key={c.slug}
                to={`/equipements/${c.slug}`}
                className={`group relative overflow-hidden rounded-2xl reveal ${i === 0 ? "lg:col-span-2 lg:row-span-1" : ""}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className={`${i === 0 ? "h-72" : "h-64"} w-full overflow-hidden`}>
                  <img
                    src={c.image}
                    alt={pick(c.name)}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary-deep via-primary-deep/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="font-display text-2xl font-bold text-white">{pick(c.name)}</h3>
                  <p className="text-slate-200 text-sm mt-1 max-w-md line-clamp-2 opacity-0 group-hover:opacity-100 max-h-0 group-hover:max-h-24 transition-all duration-500">
                    {pick(c.short)}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-white text-sm font-semibold mt-3">
                    {t("equipment.discover")}
                    <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRECISION / WHY (split) ===== */}
      <section data-section="precision" className="py-24 bg-primary-deep text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-[0.06]" />
        <div className="defi-container relative">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="reveal">
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1715154470884-1c2be0b0129f"
                  alt="Précision d'impression"
                  className="w-full h-[440px] object-cover"
                />
                <div className="absolute top-5 left-5 cmyk-bar h-2 w-28 rounded-full" />
              </div>
            </div>
            <div className="reveal">
              <p className="text-brand-cyan font-semibold text-sm uppercase tracking-widest mb-3">{t("about.whyTitle")}</p>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-balance">
                {pick({ fr: "La précision au c\u0153ur de votre production", en: "Precision at the heart of your production" })}
              </h2>
              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                {values.map((v, i) => {
                  const Icon = iconMap[v.icon];
                  return (
                    <div key={i} className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                      <div className="w-11 h-11 rounded-lg bg-accent flex items-center justify-center shrink-0">
                        <Icon size={20} className="text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">{pick(v.title)}</h4>
                        <p className="text-slate-400 text-sm mt-0.5">{pick(v.text)}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <Link to="/a-propos" className="inline-flex items-center gap-2 mt-8 text-white font-semibold border-b-2 border-accent pb-1 hover:gap-3 transition-all">
                {pick({ fr: "En savoir plus sur DEFI", en: "Learn more about DEFI" })}
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== NEWS ===== */}
      <section data-section="news" className="py-24 bg-white">
        <div className="defi-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 reveal">
            <div className="max-w-xl">
              <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">{t("news.overline")}</p>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-primary">{t("news.title")}</h2>
              <p className="text-slate-600 mt-4">{t("news.subtitle")}</p>
            </div>
            <Link to="/actualites" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors shrink-0">
              {t("news.viewAll")}
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-7">
            {featured.map((n, i) => (
              <Link
                key={n.slug}
                to={`/actualites/${n.slug}`}
                className="group bg-white rounded-2xl border border-slate-100 overflow-hidden hover-lift reveal flex flex-col"
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <div className="h-52 overflow-hidden">
                  <img src={n.image} alt={pick(n.title)} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 text-xs mb-3">
                    <span className="bg-slate-100 text-slate-700 font-medium px-2.5 py-1 rounded-full">{pick(n.category)}</span>
                    <span className="text-slate-400">{formatDate(n.date, "fr")}</span>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-primary leading-snug group-hover:text-accent transition-colors line-clamp-3">{pick(n.title)}</h3>
                  <p className="text-slate-500 text-sm mt-2 line-clamp-2">{pick(n.excerpt)}</p>
                  <span className="inline-flex items-center gap-1.5 text-accent text-sm font-semibold mt-auto pt-4">
                    {t("news.readMore")}
                    <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PARTNERS marquee ===== */}
      <section data-section="partners" className="py-16 bg-slate-50 border-y border-slate-100 overflow-hidden">
        <div className="defi-container mb-8">
          <p className="text-center text-sm uppercase tracking-widest text-slate-400 font-semibold">{t("partners.overline")}</p>
        </div>
        <div className="relative overflow-hidden">
          <div className="flex gap-16 w-max animate-marquee">
            {[...partners, ...partners].map((p, i) => (
              <span key={i} className="font-display text-2xl font-bold text-slate-300 whitespace-nowrap select-none">{p}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section data-section="cta" className="py-20 bg-white">
        <div className="defi-container">
          <div className="relative rounded-3xl overflow-hidden bg-primary px-8 py-16 sm:px-16 reveal">
            <div className="absolute inset-0 grid-lines opacity-10" />
            <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-accent/20 blur-3xl" />
            <div className="relative max-w-2xl">
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-white text-balance">{t("cta.title")}</h2>
              <p className="text-slate-300 mt-4 text-lg">{t("cta.subtitle")}</p>
              <Link to="/contact" className="inline-flex items-center gap-2 mt-8 bg-accent hover:bg-accent-hover text-white font-semibold px-7 py-3.5 rounded-full transition-colors">
                {t("cta.button")}
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export const formatDate = (iso, lang) => {
  try {
    return new Date(iso).toLocaleDateString(lang === "en" ? "en-US" : "fr-FR", {
      day: "numeric", month: "long", year: "numeric",
    });
  } catch { return iso; }
};

export default Home;
