import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { translations } from "../i18n/translations";

const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  const [lang, setLang] = useState("fr");

  useEffect(() => {
    localStorage.setItem("defi_lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === "fr" ? "en" : "fr"));
  }, []);

  // translation helper: supports dot notation keys
  const t = useCallback(
    (key) => {
      const parts = key.split(".");
      let node = translations[lang];
      for (const p of parts) {
        if (node == null) return key;
        node = node[p];
      }
      return node == null ? key : node;
    },
    [lang]
  );

  // pick localized field from an object with {fr, en}
  const pick = useCallback(
    (obj) => {
      if (obj == null) return "";
      if (typeof obj === "string") return obj;
      return obj[lang] ?? obj.fr ?? "";
    },
    [lang]
  );

  return (
    <AppContext.Provider value={{ lang, setLang, toggleLang, t, pick }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
};
