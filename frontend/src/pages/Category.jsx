import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react";
import { useApp } from "../context/AppContext";
import { useReveal } from "../hooks/useReveal";
import { categories } from "../mock/data";

const Category = () => {
  const { slug } = useParams();
  const { t, pick } = useApp();
  const category = categories.find((c) => c.slug === slug);
  useReveal([slug]);

  if (!category) return <Navigate to="/" replace />;

  return (
    <div className="pt-[74px]">
      {/* header */}
      <section className="relative bg-[#0B1120] text-white overflow-hidden">
        <div className="absolute inset-0">
          <img src={category.image} alt="" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1120] via-[#0B1120]/85 to-[#0B1120]/50" />
          <div className="absolute inset-0 grid-lines opacity-[0.08]" />
        </div>
        <div className="defi-container relative py-20">
          <nav className="flex items-center gap-2 text-sm text-slate-300 mb-5">
            <Link to="/" className="hover:text-white">{t("nav.home")}</Link>
            <ChevronRight size={14} />
            <span className="text-white">{t("nav.equipment")}</span>
            <ChevronRight size={14} />
            <span className="text-[#E4002B] font-medium">{pick(category.name)}</span>
          </nav>
          <h1 className="font-display text-4xl lg:text-5xl font-bold">{pick(category.name)}</h1>
          <p className="text-slate-300 mt-4 max-w-2xl text-lg">{pick(category.short)}</p>
        </div>
      </section>

      {/* category chips */}
      <section className="bg-white border-b border-slate-100 sticky top-[74px] z-30">
        <div className="defi-container py-4 flex gap-2 overflow-x-auto">
          {categories.map((c) => (
            <Link
              key={c.slug}
              to={`/equipements/${c.slug}`}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                c.slug === slug ? "bg-[#0F172A] text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {pick(c.name)}
            </Link>
          ))}
        </div>
      </section>

      {/* products */}
      <section className="py-16 bg-slate-50">
        <div className="defi-container">
          <p className="text-sm text-slate-400 mb-8">{category.products.length} {t("common.products")}</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {category.products.map((p, i) => (
              <div key={i} className="group bg-white rounded-2xl border border-slate-100 overflow-hidden hover-lift reveal" style={{ transitionDelay: `${i * 70}ms` }}>
                <div className="h-56 overflow-hidden bg-slate-100">
                  <img src={p.image} alt={pick(p.name)} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-semibold text-[#0F172A]">{pick(p.name)}</h3>
                  <p className="text-slate-500 text-sm mt-2 leading-relaxed">{pick(p.desc)}</p>
                  <Link to="/contact" className="inline-flex items-center gap-1.5 text-[#E4002B] text-sm font-semibold mt-4 group-hover:gap-2.5 transition-all">
                    {t("nav.quote")}
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 flex items-center justify-between border-t border-slate-200 pt-8">
            <Link to="/" className="inline-flex items-center gap-2 text-slate-600 hover:text-[#0F172A] font-medium">
              <ArrowLeft size={17} /> {t("nav.home")}
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-[#0F172A] hover:bg-[#E4002B] text-white font-semibold px-6 py-3 rounded-full transition-colors">
              {t("cta.button")}
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Category;
