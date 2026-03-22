// src/components/LanguageSwitcher.jsx
import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const LanguageSwitcher = ({ isScrolled }) => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const languages = [
    { code: "uz", label: "UZ", name: "O'zbek" },
    { code: "ru", label: "RU", name: "Русский" },
    { code: "en", label: "EN", name: "English" },
  ];

  const changeLanguage = (langCode) => {
    i18n.changeLanguage(langCode);
  };

  return (
    <div className="relative group">
      <button
        className={`flex items-center space-x-1 px-3 py-1.5 rounded-full transition-all ${
          isScrolled
            ? "text-gray-700 hover:text-primary"
            : "text-white hover:text-primary"
        }`}
      >
        <span className="font-medium">
          {languages.find((l) => l.code === currentLang)?.label}
        </span>
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      <div className="absolute top-full right-0 mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden min-w-[120px]">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className={`w-full px-4 py-2 text-left hover:bg-accent transition-colors ${
                currentLang === lang.code
                  ? "text-primary font-semibold bg-accent"
                  : "text-gray-700"
              }`}
            >
              {lang.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
