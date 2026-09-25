import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { useApp } from "../context/AppContext";
import { useReveal } from "../hooks/useReveal";
import { news } from "../mock/data";
import { formatDate } from "./Home";

const News = () => {
  const { t, pick, lang } = useApp();
  const cats = useMemo(() => {
    const set = new Map();
    news.forEach((n) => set.set(pick(n.category), n.category));
    return ["all", ...Array.from(set.values())];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang]);
  const [active, setActive] = useState("all");
  useReveal([active, lang]);

  const filtered = active === "all" ? news : news.filter((n) => pick(n.category) === pick(active));
  const [featured, ...rest] = filtered;

  return (
    <div className="pt-[74px]">
      <section className="bg-[#0B1120] text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-[0.07]" />
        <div className="defi-container relative py-20">
          <p className="text-[#00C2FF] font-semibold text-sm uppercase tracking-widest mb-3">{t("news.overline")}</p>
          <h1 className="font-display text-4xl lg:text-5xl font-bold">{t("news.title")}</h1>
          <p className="text-slate-300 mt-4 max-w-2xl text-lg">{t("news.subtitle")}</p>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="defi-container">
          {/* filters */}
          <div className="flex flex-wrap gap-2 mb-10">
            {cats.map((c, i) => {
              const label = c === "all" ? (lang === "fr" ? "Tout" : "All") : pick(c);
              const isActive = (c === "all" && active === "all") || (c !== "all" && pick(active) === pick(c));
              return (
                <button
                  key={i}
                  onClick={() => setActive(c)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    isActive ? "bg-[#0F172A] text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>

          {/* featured */}
          {featured && (
            <Link to={`/actualites/${featured.slug}`} className="group grid lg:grid-cols-2 gap-8 items-center mb-14 reveal">
              <div className="h-72 lg:h-96 rounded-2xl overflow-hidden">
                <img src={featured.image} alt={pick(featured.title)} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div>
                <div className="flex items-center gap-3 text-xs mb-4">
                  <span className="bg-[#E4002B] text-white font-medium px-2.5 py-1 rounded-full">{pick(featured.category)}</span>
                  <span className="text-slate-400">{formatDate(featured.date, lang)}</span>
                </div>
                <h2 className="font-display text-2xl lg:text-3xl font-bold text-[#0F172A] group-hover:text-[#E4002B] transition-colors text-balance">{pick(featured.title)}</h2>
                <p className="text-slate-600 mt-4">{pick(featured.excerpt)}</p>
                <span className="inline-flex items-center gap-1.5 text-[#E4002B] font-semibold mt-5">
                  {t("news.readMore")}<ArrowUpRight size={16} />
                </span>
              </div>
            </Link>
          )}

          {/* grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {rest.map((n, i) => (
              <Link key={n.slug} to={`/actualites/${n.slug}`} className="group bg-white rounded-2xl border border-slate-100 overflow-hidden hover-lift reveal flex flex-col" style={{ transitionDelay: `${i * 70}ms` }}>
                <div className="h-52 overflow-hidden">
                  <img src={n.image} alt={pick(n.title)} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 text-xs mb-3">
                    <span className="bg-slate-100 text-slate-700 font-medium px-2.5 py-1 rounded-full">{pick(n.category)}</span>
                    <span className="text-slate-400">{formatDate(n.date, lang)}</span>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-[#0F172A] leading-snug group-hover:text-[#E4002B] transition-colors line-clamp-3">{pick(n.title)}</h3>
                  <p className="text-slate-500 text-sm mt-2 line-clamp-2">{pick(n.excerpt)}</p>
                  <span className="inline-flex items-center gap-1.5 text-[#E4002B] text-sm font-semibold mt-auto pt-4">
                    {t("news.readMore")}<ArrowUpRight size={15} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
