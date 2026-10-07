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
    <div>
      {/* header */}
      <section data-section="category-hero" className="relative bg-primary-deep text-white overflow-hidden pt-[74px]">
        <div className="absolute inset-0">
          <img src={category.image} alt="" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-deep via-primary-deep/85 to-primary-deep/50" />
          <div className="absolute inset-0 grid-lines opacity-[0.08]" />
        </div>
        <div className="defi-container relative py-20">
          <nav className="flex items-center gap-2 text-sm text-slate-300 mb-5">
            <Link to="/" className="hover:text-white">{t("nav.home")}</Link>
            <ChevronRight size={14} />
            <span className="text-white">{t("nav.equipment")}</span>
            <ChevronRight size={14} />
            <span className="text-accent font-medium">{pick(category.name)}</span>
          </nav>
          <h1 className="font-display text-4xl lg:text-5xl font-bold">{pick(category.name)}</h1>
          <p className="text-slate-300 mt-4 max-w-2xl text-lg">{pick(category.short)}</p>
        </div>
      </section>

      {/* category chips */}
      <section data-section="category-nav" className="bg-white border-b border-slate-100 sticky top-[74px] z-30">
        <div className="defi-container py-4 flex gap-2 overflow-x-auto">
          {categories.map((c) => (
            <Link
              key={c.slug}
              to={`/equipements/${c.slug}`}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                c.slug === slug ? "bg-primary text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {pick(c.name)}
            </Link>
          ))}
        </div>
      </section>

      {/* products */}
      <section data-section="category-products" className="py-16 bg-slate-50">
        <div className="defi-container">
          <p className="text-sm text-slate-400 mb-8">{category.products.length} {t("common.products")}</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {category.products.map((p, i) => (
              <Link key={p.slug} to={`/equipements/${category.slug}/${p.slug}`} className="group bg-white rounded-2xl border border-slate-100 overflow-hidden hover-lift reveal flex flex-col" style={{ transitionDelay: `${i * 70}ms` }}>
                <div className="h-56 overflow-hidden bg-slate-100">
                  <img src={p.image} alt={pick(p.name)} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-display text-lg font-semibold text-primary group-hover:text-accent transition-colors">{pick(p.name)}</h3>
                  <p className="text-slate-500 text-sm mt-2 leading-relaxed line-clamp-2">{pick(p.desc)}</p>
                  <span className="inline-flex items-center gap-1.5 text-accent text-sm font-semibold mt-auto pt-4 group-hover:gap-2.5 transition-all">
                    {t("equipment.discover")}
                    <ArrowRight size={15} />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-14 flex items-center justify-between border-t border-slate-200 pt-8">
            <Link to="/" className="inline-flex items-center gap-2 text-slate-600 hover:text-primary font-medium">
              <ArrowLeft size={17} /> {t("nav.home")}
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-primary hover:bg-accent text-white font-semibold px-6 py-3 rounded-full transition-colors">
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
