import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Calendar, Tag } from "lucide-react";
import { useApp } from "../context/AppContext";
import { useReveal } from "../hooks/useReveal";
import { news } from "../mock/data";
import { formatDate } from "./Home";

const NewsDetail = () => {
  const { slug } = useParams();
  const { t, pick, lang } = useApp();
  const article = news.find((n) => n.slug === slug);
  useReveal([slug]);

  if (!article) return <Navigate to="/actualites" replace />;

  const related = news.filter((n) => n.slug !== slug).slice(0, 3);

  return (
    <div>
      {/* hero */}
      <section className="relative bg-[#0B1120] text-white pt-[74px]">
        <div className="absolute inset-0">
          <img src={article.image} alt="" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-[#0B1120]/85 to-[#0B1120]/70" />
        </div>
        <div className="defi-container relative py-20">
          <Link to="/actualites" className="inline-flex items-center gap-2 text-slate-300 hover:text-white text-sm mb-6">
            <ArrowLeft size={16} /> {t("news.back")}
          </Link>
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-300 mb-4">
            <span className="inline-flex items-center gap-1.5 bg-[#E4002B] text-white font-medium px-3 py-1 rounded-full"><Tag size={13} />{pick(article.category)}</span>
            <span className="inline-flex items-center gap-1.5"><Calendar size={14} />{formatDate(article.date, lang)}</span>
          </div>
          <h1 className="font-display text-3xl lg:text-4xl font-bold max-w-3xl leading-tight text-balance">{pick(article.title)}</h1>
        </div>
      </section>

      {/* body */}
      <section className="py-16 bg-white">
        <div className="defi-container max-w-3xl">
          <div className="cmyk-bar h-1.5 w-24 rounded-full mb-8 reveal" />
          <p className="text-xl text-slate-700 font-medium leading-relaxed reveal">{pick(article.excerpt)}</p>
          <p className="text-slate-600 mt-6 leading-relaxed reveal">{pick(article.body)}</p>
          <p className="text-slate-600 mt-4 leading-relaxed reveal">{pick(article.body)}</p>

          <div className="mt-10 p-6 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 reveal">
            <p className="font-semibold text-[#0F172A]">{t("cta.title")}</p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-[#E4002B] hover:bg-[#c40025] text-white font-semibold px-6 py-3 rounded-full transition-colors shrink-0">
              {t("cta.button")}<ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* related */}
      <section className="py-16 bg-slate-50">
        <div className="defi-container">
          <h2 className="font-display text-2xl font-bold text-[#0F172A] mb-8">{t("news.related")}</h2>
          <div className="grid md:grid-cols-3 gap-7">
            {related.map((n, i) => (
              <Link key={n.slug} to={`/actualites/${n.slug}`} className="group bg-white rounded-2xl border border-slate-100 overflow-hidden hover-lift reveal flex flex-col" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="h-44 overflow-hidden">
                  <img src={n.image} alt={pick(n.title)} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <span className="text-xs text-slate-400">{formatDate(n.date, lang)}</span>
                  <h3 className="font-display font-semibold text-[#0F172A] mt-1 group-hover:text-[#E4002B] transition-colors line-clamp-2">{pick(n.title)}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsDetail;
