import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { ChevronRight, Check, ArrowLeft, ArrowRight, Download } from "lucide-react";
import { useApp } from "../context/AppContext";
import { useReveal } from "../hooks/useReveal";
import { findProduct, BROCHURE_URL } from "../mock/data";
import QuoteForm from "../components/QuoteForm";

const ProductDetail = () => {
  const { slug, productSlug } = useParams();
  const { t, pick } = useApp();
  const result = findProduct(slug, productSlug);
  useReveal([slug, productSlug]);

  if (!result) return <Navigate to={`/equipements/${slug}`} replace />;
  const { category, product } = result;

  const related = category.products.filter((p) => p.slug !== productSlug).slice(0, 3);
  const subjectDefault = `${t("product.requestQuote")} – ${pick(product.name)}`;

  return (
    <div>
      {/* hero */}
      <section className="relative bg-[#0B1120] text-white overflow-hidden pt-[74px]">
        <div className="absolute inset-0 grid-lines opacity-[0.07]" />
        <div className="defi-container relative py-14">
          <nav className="flex items-center gap-2 text-sm text-slate-300 mb-8 flex-wrap">
            <Link to="/" className="hover:text-white">{t("nav.home")}</Link>
            <ChevronRight size={14} />
            <Link to={`/equipements/${category.slug}`} className="hover:text-white">{pick(category.name)}</Link>
            <ChevronRight size={14} />
            <span className="text-[#E4002B] font-medium">{pick(product.name)}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="reveal">
              <div className="rounded-2xl overflow-hidden border border-white/10">
                <img src={product.image} alt={pick(product.name)} className="w-full h-[360px] lg:h-[420px] object-cover" />
              </div>
            </div>
            <div className="reveal">
              <span className="inline-block bg-white/10 border border-white/15 text-xs font-medium px-3 py-1 rounded-full">{pick(category.name)}</span>
              <h1 className="font-display text-3xl lg:text-4xl font-bold mt-4 text-balance">{pick(product.name)}</h1>
              <p className="text-slate-300 mt-4 text-lg leading-relaxed">{pick(product.desc)}</p>
              <div className="cmyk-bar h-1.5 w-28 rounded-full mt-6" />
              <div className="flex flex-wrap gap-4 mt-8">
                <a href="#devis" className="inline-flex items-center gap-2 bg-[#E4002B] hover:bg-[#c40025] text-white font-semibold px-7 py-3.5 rounded-full transition-colors">
                  {t("product.requestQuote")}<ArrowRight size={18} />
                </a>
                <a href={BROCHURE_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border border-white/25 hover:bg-white/10 text-white font-semibold px-7 py-3.5 rounded-full transition-colors">
                  <Download size={17} />{t("product.catalog")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* overview + features + specs */}
      <section className="py-16 bg-white">
        <div className="defi-container grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <div className="reveal">
              <h2 className="font-display text-2xl font-bold text-[#0F172A] mb-4">{t("product.overview")}</h2>
              <p className="text-slate-600 leading-relaxed">{pick(product.longDesc)}</p>
            </div>

            <div className="mt-10 reveal">
              <h3 className="font-display text-xl font-semibold text-[#0F172A] mb-5">{t("product.features")}</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {product.features.map((f, i) => (
                  <div key={i} className="flex items-start gap-3 bg-slate-50 border border-slate-100 rounded-xl px-4 py-3">
                    <span className="w-6 h-6 rounded-full bg-[#E4002B] flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={14} className="text-white" />
                    </span>
                    <span className="text-slate-700 text-sm">{pick(f)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* specs */}
          <div className="reveal">
            <div className="bg-[#0F172A] rounded-2xl p-7 text-white sticky top-24">
              <h3 className="font-display text-lg font-semibold mb-5">{t("product.specs")}</h3>
              <dl className="divide-y divide-white/10">
                {product.specs.map((s, i) => (
                  <div key={i} className="flex items-center justify-between py-3">
                    <dt className="text-slate-400 text-sm">{pick(s.label)}</dt>
                    <dd className="font-semibold text-sm">{s.value}</dd>
                  </div>
                ))}
              </dl>
              <a href="#devis" className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-[#E4002B] hover:bg-[#c40025] text-white font-semibold px-5 py-3 rounded-full transition-colors">
                {t("product.requestQuote")}<ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* quote form */}
      <section id="devis" className="py-16 bg-slate-50 scroll-mt-24">
        <div className="defi-container">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div className="reveal">
              <p className="text-[#E4002B] font-semibold text-sm uppercase tracking-widest mb-3">{t("nav.quote")}</p>
              <h2 className="font-display text-3xl font-bold text-[#0F172A] text-balance">{t("product.quoteTitle")}</h2>
              <p className="text-slate-600 mt-4">{t("product.quoteSub")}</p>
              <div className="mt-8 flex items-center gap-4 bg-white rounded-2xl border border-slate-100 p-5">
                <img src={product.image} alt="" className="w-20 h-20 rounded-xl object-cover" />
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold">{pick(category.name)}</p>
                  <p className="font-display font-semibold text-[#0F172A]">{pick(product.name)}</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm reveal">
              <div className="cmyk-bar h-1.5 w-24 rounded-full mb-6" />
              <QuoteForm subjectDefault={subjectDefault} />
            </div>
          </div>
        </div>
      </section>

      {/* related */}
      {related.length > 0 && (
        <section className="py-16 bg-white">
          <div className="defi-container">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-display text-2xl font-bold text-[#0F172A]">{t("product.related")}</h2>
              <Link to={`/equipements/${category.slug}`} className="inline-flex items-center gap-2 text-slate-600 hover:text-[#0F172A] text-sm font-medium">
                <ArrowLeft size={16} />{t("product.backTo")} {pick(category.name)}
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-7">
              {related.map((p, i) => (
                <Link key={p.slug} to={`/equipements/${category.slug}/${p.slug}`} className="group bg-white rounded-2xl border border-slate-100 overflow-hidden hover-lift reveal" style={{ transitionDelay: `${i * 80}ms` }}>
                  <div className="h-48 overflow-hidden">
                    <img src={p.image} alt={pick(p.name)} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display font-semibold text-[#0F172A] group-hover:text-[#E4002B] transition-colors">{pick(p.name)}</h3>
                    <p className="text-slate-500 text-sm mt-1 line-clamp-2">{pick(p.desc)}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductDetail;
