import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Ear, Wrench, ShieldCheck, Sparkles } from "lucide-react";
import { useApp } from "../context/AppContext";
import { useReveal } from "../hooks/useReveal";
import { values, whyChoose, stats } from "../mock/data";

const iconMap = { Ear, Wrench, ShieldCheck, Sparkles };

const About = () => {
  const { t, pick } = useApp();
  useReveal([]);

  return (
    <div>
      {/* hero */}
      <section className="relative bg-[#0B1120] text-white overflow-hidden pt-[74px]">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1562155695-fb6e1f95fcfd" alt="" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1120] via-[#0B1120]/85 to-[#0B1120]/50" />
          <div className="absolute inset-0 grid-lines opacity-[0.08]" />
        </div>
        <div className="defi-container relative py-24">
          <h1 className="font-display text-4xl lg:text-5xl font-bold">{t("about.hero")}</h1>
          <p className="text-slate-300 mt-4 max-w-2xl text-lg">{t("about.heroSub")}</p>
        </div>
      </section>

      {/* story */}
      <section className="py-24 bg-white">
        <div className="defi-container grid lg:grid-cols-2 gap-14 items-center">
          <div className="reveal">
            <p className="text-[#E4002B] font-semibold text-sm uppercase tracking-widest mb-3">{t("about.storyTitle")}</p>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#0F172A] text-balance">
              {pick({ fr: "Un partenaire de confiance depuis 1990", en: "A trusted partner since 1990" })}
            </h2>
            <p className="text-slate-600 mt-5 leading-relaxed">{t("about.story1")}</p>
            <p className="text-slate-600 mt-4 leading-relaxed">{t("about.story2")}</p>
            <div className="cmyk-bar h-1.5 w-32 rounded-full mt-8" />
          </div>
          <div className="relative reveal">
            <div className="rounded-2xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1700727448686-b314cb5f9948" alt="DEFI" className="w-full h-[460px] object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[#0F172A] text-white rounded-2xl p-6 shadow-xl">
              <p className="font-display text-4xl font-bold">35+</p>
              <p className="text-sm text-slate-300">{pick({ fr: "ans d'expertise", en: "years of expertise" })}</p>
            </div>
          </div>
        </div>
      </section>

      {/* stats band */}
      <section className="py-14 bg-[#0B1120] text-white">
        <div className="defi-container grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div key={i} className="text-center reveal" style={{ transitionDelay: `${i * 70}ms` }}>
              <p className="font-display text-4xl lg:text-5xl font-bold">{s.value}</p>
              <p className="text-sm text-slate-400 mt-1">{t(`hero.${s.key}`)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* values */}
      <section className="py-24 bg-white">
        <div className="defi-container">
          <div className="max-w-xl mb-12 reveal">
            <p className="text-[#E4002B] font-semibold text-sm uppercase tracking-widest mb-3">{t("about.valuesTitle")}</p>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#0F172A]">
              {pick({ fr: "Ce qui nous guide au quotidien", en: "What guides us every day" })}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => {
              const Icon = iconMap[v.icon];
              return (
                <div key={i} className="bg-slate-50 rounded-2xl p-7 border border-slate-100 hover-lift reveal" style={{ transitionDelay: `${i * 80}ms` }}>
                  <div className="w-13 h-13 w-12 h-12 rounded-xl bg-[#E4002B] flex items-center justify-center mb-5">
                    <Icon size={22} className="text-white" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-[#0F172A]">{pick(v.title)}</h3>
                  <p className="text-slate-500 text-sm mt-2">{pick(v.text)}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* why choose */}
      <section className="py-24 bg-slate-50">
        <div className="defi-container grid lg:grid-cols-2 gap-14 items-center">
          <div className="reveal">
            <p className="text-[#E4002B] font-semibold text-sm uppercase tracking-widest mb-3">{t("about.whyTitle")}</p>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#0F172A] text-balance">
              {pick({ fr: "Une expertise globale \u00e0 votre service", en: "Global expertise at your service" })}
            </h2>
            <ul className="mt-8 space-y-4">
              {whyChoose.map((w, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <CheckCircle2 size={22} className="text-[#E4002B] shrink-0 mt-0.5" />
                  <span className="text-slate-700">{pick(w)}</span>
                </li>
              ))}
            </ul>
            <Link to="/contact" className="inline-flex items-center gap-2 mt-9 bg-[#0F172A] hover:bg-[#E4002B] text-white font-semibold px-7 py-3.5 rounded-full transition-colors">
              {t("cta.button")}<ArrowRight size={18} />
            </Link>
          </div>
          <div className="rounded-2xl overflow-hidden reveal">
            <img src="https://images.pexels.com/photos/6620991/pexels-photo-6620991.jpeg" alt="" className="w-full h-[440px] object-cover" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
