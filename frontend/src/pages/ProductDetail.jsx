import React, { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { ChevronRight, Check, ArrowLeft, ArrowRight, Download, Play, X, ImageIcon } from "lucide-react";
import { useApp } from "../context/AppContext";
import { useReveal } from "../hooks/useReveal";
import { findProduct, BROCHURE_URL } from "../mock/data";
import QuoteForm from "../components/QuoteForm";

const ProductDetail = () => {
  const { slug, productSlug } = useParams();
  const { t, pick } = useApp();
  const result = findProduct(slug, productSlug);
  const [tab, setTab] = useState("description");
  const [modal, setModal] = useState(null); // {type:'video'|'image', ...}
  useReveal([slug, productSlug, tab]);

  if (!result) return <Navigate to={`/equipements/${slug}`} replace />;
  const { category, product } = result;

  const related = category.products.filter((p) => p.slug !== productSlug).slice(0, 3);
  const subjectDefault = `${t("product.requestQuote")} \u2013 ${pick(product.name)}`;

  const photos = (product.media || []).filter((m) => m.type === "image");
  const videos = (product.media || []).filter((m) => m.type === "video");

  const tabs = [
    { id: "description", label: t("product.description") },
    { id: "features", label: t("product.features") },
    { id: "options", label: t("product.options") },
    { id: "media", label: t("product.media") },
  ];

  return (
    <div>
      {/* hero */}
      <section data-section="product-hero" className="relative bg-primary-deep text-white overflow-hidden pt-[74px]">
        <div className="absolute inset-0 grid-lines opacity-[0.07]" />
        <div className="defi-container relative py-14">
          <nav className="flex items-center gap-2 text-sm text-slate-300 mb-8 flex-wrap">
            <Link to="/" className="hover:text-white">{t("nav.home")}</Link>
            <ChevronRight size={14} />
            <Link to={`/equipements/${category.slug}`} className="hover:text-white">{pick(category.name)}</Link>
            <ChevronRight size={14} />
            <span className="text-accent font-medium">{pick(product.name)}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="reveal">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 group cursor-pointer" onClick={() => setModal({ type: "image", url: product.image })}>
                <img src={product.image} alt={pick(product.name)} className="w-full h-[360px] lg:h-[420px] object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
            </div>
            <div className="reveal">
              <span className="inline-block bg-white/10 border border-white/15 text-xs font-medium px-3 py-1 rounded-full">{pick(category.name)}</span>
              <h1 className="font-display text-3xl lg:text-4xl font-bold mt-4 text-balance">{pick(product.name)}</h1>
              <p className="text-slate-300 mt-4 text-lg leading-relaxed">{pick(product.desc)}</p>
              <div className="cmyk-bar h-1.5 w-28 rounded-full mt-6" />
              <div className="flex flex-wrap gap-4 mt-8">
                <a href="#devis" className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-semibold px-7 py-3.5 rounded-full transition-colors">
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

      {/* sub-menu tabs */}
      <section data-section="product-tabs" className="bg-white border-b border-slate-100 sticky top-[74px] z-30">
        <div className="defi-container flex gap-1 overflow-x-auto">
          {tabs.map((tb) => (
            <button
              key={tb.id}
              onClick={() => setTab(tb.id)}
              className={`relative whitespace-nowrap px-5 py-4 text-sm font-semibold transition-colors ${
                tab === tb.id ? "text-accent" : "text-slate-500 hover:text-slate-800"
              }`}
            >
              {tb.label}
              {tab === tb.id && <span className="absolute left-4 right-4 bottom-0 h-0.5 bg-accent rounded-full" />}
            </button>
          ))}
        </div>
      </section>

      {/* tab content + specs sidebar */}
      <section data-section="product-content" className="py-14 bg-white">
        <div className="defi-container grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 min-h-[220px]">
            {tab === "description" && (
              <div className="reveal" key="desc">
                <h2 className="font-display text-2xl font-bold text-primary mb-4">{t("product.description")}</h2>
                <p className="text-slate-600 leading-relaxed">{pick(product.longDesc)}</p>
                <p className="text-slate-600 leading-relaxed mt-4">{pick(product.desc)}</p>
              </div>
            )}

            {tab === "features" && (
              <div className="reveal" key="feat">
                <h2 className="font-display text-2xl font-bold text-primary mb-5">{t("product.features")}</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {product.features.map((f, i) => (
                    <div key={i} className="flex items-start gap-3 bg-slate-50 border border-slate-100 rounded-xl px-4 py-3">
                      <span className="w-6 h-6 rounded-full bg-accent flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={14} className="text-white" />
                      </span>
                      <span className="text-slate-700 text-sm">{pick(f)}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {tab === "options" && (
              <div className="reveal" key="opt">
                <h2 className="font-display text-2xl font-bold text-primary mb-5">{t("product.options")}</h2>
                <ul className="divide-y divide-slate-100 border border-slate-100 rounded-2xl overflow-hidden">
                  {product.options.map((o, i) => (
                    <li key={i} className="flex items-center gap-4 px-5 py-4 hover:bg-slate-50 transition-colors">
                      <span className="w-8 h-8 rounded-lg bg-primary text-white flex items-center justify-center text-sm font-semibold shrink-0">{i + 1}</span>
                      <span className="text-slate-700">{pick(o)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {tab === "media" && (
              <div className="reveal" key="media">
                <h2 className="font-display text-2xl font-bold text-primary mb-5">{t("product.media")}</h2>
                {videos.length > 0 && (
                  <div className="grid sm:grid-cols-2 gap-4 mb-5">
                    {videos.map((v, i) => (
                      <button key={i} onClick={() => setModal({ type: "video", youtubeId: v.youtubeId })} className="group relative rounded-2xl overflow-hidden text-left">
                        <img src={v.thumb || product.image} alt="" className="w-full h-52 object-cover transition-transform duration-700 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-black/35 group-hover:bg-black/25 transition-colors flex items-center justify-center">
                          <span className="w-16 h-16 rounded-full bg-white/95 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                            <Play size={26} className="text-accent ml-1" fill="var(--color-accent)" />
                          </span>
                        </div>
                        <span className="absolute bottom-3 left-4 text-white text-sm font-medium drop-shadow">{pick(v.title)}</span>
                      </button>
                    ))}
                  </div>
                )}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {photos.map((ph, i) => (
                    <button key={i} onClick={() => setModal({ type: "image", url: ph.url })} className="group relative rounded-xl overflow-hidden aspect-[4/3]">
                      <img src={ph.url} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      <span className="absolute inset-0 bg-primary/0 group-hover:bg-primary/25 transition-colors flex items-center justify-center">
                        <ImageIcon size={22} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* specs sidebar (always visible) */}
          <div className="reveal">
            <div className="bg-primary rounded-2xl p-7 text-white sticky top-36">
              <h3 className="font-display text-lg font-semibold mb-5">{t("product.specs")}</h3>
              <dl className="divide-y divide-white/10">
                {product.specs.map((s, i) => (
                  <div key={i} className="flex items-center justify-between py-3">
                    <dt className="text-slate-400 text-sm">{pick(s.label)}</dt>
                    <dd className="font-semibold text-sm">{s.value}</dd>
                  </div>
                ))}
              </dl>
              <a href="#devis" className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white font-semibold px-5 py-3 rounded-full transition-colors">
                {t("product.requestQuote")}<ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* quote form */}
      <section data-section="product-quote" id="devis" className="py-16 bg-slate-50 scroll-mt-28">
        <div className="defi-container">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div className="reveal">
              <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">{t("nav.quote")}</p>
              <h2 className="font-display text-3xl font-bold text-primary text-balance">{t("product.quoteTitle")}</h2>
              <p className="text-slate-600 mt-4">{t("product.quoteSub")}</p>
              <div className="mt-8 flex items-center gap-4 bg-white rounded-2xl border border-slate-100 p-5">
                <img src={product.image} alt="" className="w-20 h-20 rounded-xl object-cover" />
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold">{pick(category.name)}</p>
                  <p className="font-display font-semibold text-primary">{pick(product.name)}</p>
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
        <section data-section="product-related" className="py-16 bg-white">
          <div className="defi-container">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-display text-2xl font-bold text-primary">{t("product.related")}</h2>
              <Link to={`/equipements/${category.slug}`} className="inline-flex items-center gap-2 text-slate-600 hover:text-primary text-sm font-medium">
                <ArrowLeft size={16} />{t("product.backTo")} {pick(category.name)}
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-7">
              {related.map((p, i) => (
                <Link key={p.slug} to={`/equipements/${category.slug}/${p.slug}`} onClick={() => setTab("description")} className="group bg-white rounded-2xl border border-slate-100 overflow-hidden hover-lift reveal" style={{ transitionDelay: `${i * 80}ms` }}>
                  <div className="h-48 overflow-hidden">
                    <img src={p.image} alt={pick(p.name)} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display font-semibold text-primary group-hover:text-accent transition-colors">{pick(p.name)}</h3>
                    <p className="text-slate-500 text-sm mt-1 line-clamp-2">{pick(p.desc)}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* media modal (video / image lightbox) */}
      {modal && (
        <div className="fixed inset-0 z-[70] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setModal(null)}>
          <button className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors" onClick={() => setModal(null)} aria-label="Fermer">
            <X size={22} />
          </button>
          <div className="w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            {modal.type === "video" ? (
              <div>
                <div className="relative w-full rounded-xl overflow-hidden shadow-2xl bg-black" style={{ aspectRatio: "16 / 9" }}>
                  <iframe
                    title="video"
                    src={`https://www.youtube.com/embed/${modal.youtubeId}?autoplay=1&rel=0`}
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <a
                  href={`https://www.youtube.com/watch?v=${modal.youtubeId}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex items-center gap-2 text-white/80 hover:text-white text-sm"
                >
                  <Play size={14} /> Ouvrir sur YouTube
                  <ArrowRight size={14} />
                </a>
              </div>
            ) : (
              <img src={modal.url} alt="" className="w-full max-h-[85vh] object-contain rounded-xl shadow-2xl" />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
