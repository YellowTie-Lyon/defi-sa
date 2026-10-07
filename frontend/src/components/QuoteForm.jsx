import React, { useState, useEffect } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { useApp } from "../context/AppContext";

// Reusable quote/contact form (frontend-only mock submission)
const QuoteForm = ({ subjectDefault = "", dark = false }) => {
  const { t } = useApp();
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", subject: subjectDefault, message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    setForm((f) => ({ ...f, subject: subjectDefault }));
  }, [subjectDefault]);

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
      setForm({ name: "", email: "", phone: "", company: "", subject: subjectDefault, message: "" });
      setTimeout(() => setSent(false), 4000);
    }, 900);
  };

  const inputCls = dark
    ? "w-full bg-white/5 border border-white/15 rounded-lg px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition"
    : "w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition";
  const labelCls = dark ? "block text-sm font-medium text-slate-300 mb-1.5" : "block text-sm font-medium text-slate-700 mb-1.5";

  return (
    <form onSubmit={submit}>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className={labelCls}>{t("contact.formName")}</label>
          <input name="name" value={form.name} onChange={onChange} required className={inputCls} />
        </div>
        <div>
          <label className={labelCls}>{t("contact.formEmail")}</label>
          <input type="email" name="email" value={form.email} onChange={onChange} required className={inputCls} />
        </div>
        <div>
          <label className={labelCls}>{t("contact.formPhone")}</label>
          <input name="phone" value={form.phone} onChange={onChange} className={inputCls} />
        </div>
        <div>
          <label className={labelCls}>{t("contact.formCompany")}</label>
          <input name="company" value={form.company} onChange={onChange} className={inputCls} />
        </div>
      </div>
      <div className="mt-4">
        <label className={labelCls}>{t("contact.formSubject")}</label>
        <input name="subject" value={form.subject} onChange={onChange} className={inputCls} />
      </div>
      <div className="mt-4">
        <label className={labelCls}>{t("contact.formMessage")}</label>
        <textarea name="message" value={form.message} onChange={onChange} required rows={4} className={inputCls + " resize-none"} />
      </div>

      <button
        type="submit"
        disabled={sending}
        className="mt-6 inline-flex items-center gap-2 bg-accent hover:bg-accent-hover disabled:opacity-70 text-white font-semibold px-7 py-3.5 rounded-full transition-colors"
      >
        {sending ? t("contact.formSending") : t("contact.formSend")}
        <Send size={17} />
      </button>

      {sent && (
        <div className="mt-5 flex items-center gap-2 text-emerald-500 bg-emerald-500/10 border border-emerald-500/20 rounded-lg px-4 py-3 text-sm">
          <CheckCircle2 size={18} />{t("contact.success")}
        </div>
      )}
    </form>
  );
};

export default QuoteForm;
