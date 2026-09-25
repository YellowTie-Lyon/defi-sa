import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react";
import { useApp } from "../context/AppContext";
import { useReveal } from "../hooks/useReveal";
import { contactInfo } from "../mock/data";

const Contact = () => {
  const { t } = useApp();
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  useReveal([]);

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
      setForm({ name: "", email: "", phone: "", company: "", subject: "", message: "" });
      setTimeout(() => setSent(false), 4000);
    }, 1000);
  };

  const info = [
    { icon: MapPin, label: t("contact.address"), value: contactInfo.address },
    { icon: Phone, label: t("contact.phone"), value: contactInfo.phone },
    { icon: Mail, label: t("contact.email"), value: contactInfo.email },
    { icon: Clock, label: t("contact.hours"), value: t("contact.hoursValue") },
  ];

  const inputCls = "w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#E4002B] focus:ring-2 focus:ring-[#E4002B]/10 transition";

  return (
    <div className="pt-[74px]">
      <section className="bg-[#0B1120] text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-[0.07]" />
        <div className="defi-container relative py-20">
          <h1 className="font-display text-4xl lg:text-5xl font-bold">{t("contact.hero")}</h1>
          <p className="text-slate-300 mt-4 max-w-2xl text-lg">{t("contact.heroSub")}</p>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="defi-container grid lg:grid-cols-5 gap-10">
          {/* info */}
          <div className="lg:col-span-2 reveal">
            <h2 className="font-display text-2xl font-bold text-[#0F172A] mb-6">{t("contact.infoTitle")}</h2>
            <div className="space-y-4">
              {info.map((it, i) => {
                const Icon = it.icon;
                return (
                  <div key={i} className="flex gap-4 bg-white rounded-xl p-5 border border-slate-100">
                    <div className="w-11 h-11 rounded-lg bg-[#0F172A] flex items-center justify-center shrink-0">
                      <Icon size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold">{it.label}</p>
                      <p className="text-slate-800 mt-1">{it.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mt-6 rounded-xl overflow-hidden border border-slate-100 h-56">
              <iframe
                title="map"
                src="https://www.openstreetmap.org/export/embed.html?bbox=4.85%2C45.75%2C4.92%2C45.79&layer=mapnik"
                className="w-full h-full"
                loading="lazy"
              />
            </div>
          </div>

          {/* form */}
          <div className="lg:col-span-3 reveal">
            <form onSubmit={submit} className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
              <div className="cmyk-bar h-1.5 w-24 rounded-full mb-6" />
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">{t("contact.formName")}</label>
                  <input name="name" value={form.name} onChange={onChange} required className={inputCls} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">{t("contact.formEmail")}</label>
                  <input type="email" name="email" value={form.email} onChange={onChange} required className={inputCls} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">{t("contact.formPhone")}</label>
                  <input name="phone" value={form.phone} onChange={onChange} className={inputCls} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">{t("contact.formCompany")}</label>
                  <input name="company" value={form.company} onChange={onChange} className={inputCls} />
                </div>
              </div>
              <div className="mt-4">
                <label className="block text-sm font-medium text-slate-700 mb-1.5">{t("contact.formSubject")}</label>
                <input name="subject" value={form.subject} onChange={onChange} className={inputCls} />
              </div>
              <div className="mt-4">
                <label className="block text-sm font-medium text-slate-700 mb-1.5">{t("contact.formMessage")}</label>
                <textarea name="message" value={form.message} onChange={onChange} required rows={5} className={inputCls + " resize-none"} />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="mt-6 inline-flex items-center gap-2 bg-[#E4002B] hover:bg-[#c40025] disabled:opacity-70 text-white font-semibold px-7 py-3.5 rounded-full transition-colors"
              >
                {sending ? t("contact.formSending") : t("contact.formSend")}
                <Send size={17} />
              </button>

              {sent && (
                <div className="mt-5 flex items-center gap-2 text-emerald-600 bg-emerald-50 border border-emerald-100 rounded-lg px-4 py-3 text-sm">
                  <CheckCircle2 size={18} />{t("contact.success")}
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
