// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = ({ onAuthClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: t("nav.home"), href: "#home" },
    { name: t("nav.services"), href: "#services" },
    { name: t("nav.gallery"), href: "#gallery" },
    { name: t("nav.about"), href: "#about" },
    { name: t("nav.contact"), href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold"
          >
            <a
              href="#home"
              className={`${isScrolled ? "text-secondary" : "text-white"}`}
            >
              Mohinur
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`font-medium transition-colors hover:text-primary ${
                  isScrolled ? "text-gray-700" : "text-white"
                }`}
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitcher isScrolled={isScrolled} />
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={() => onAuthClick("login")}
              className={`px-4 py-2 rounded-full font-medium transition-all ${
                isScrolled
                  ? "text-gray-700 hover:text-primary"
                  : "text-white hover:text-primary"
              }`}
            >
              {t("auth.login")}
            </motion.button>
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={() => onAuthClick("register")}
              className="px-5 py-2 rounded-full bg-primary text-white font-medium hover:bg-primary-dark transition-all"
            >
              {t("auth.register")}
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden focus:outline-none"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`w-full h-0.5 transition-all ${isScrolled ? "bg-gray-800" : "bg-white"}`}
              ></span>
              <span
                className={`w-full h-0.5 transition-all ${isScrolled ? "bg-gray-800" : "bg-white"}`}
              ></span>
              <span
                className={`w-full h-0.5 transition-all ${isScrolled ? "bg-gray-800" : "bg-white"}`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-xl"
          >
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="block px-4 py-3 text-gray-700 hover:bg-accent hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="px-4 py-3 border-t border-gray-200">
              <LanguageSwitcher isScrolled={true} />
            </div>
            <div className="px-4 py-3 flex space-x-3">
              <button
                onClick={() => {
                  onAuthClick("login");
                  setIsMobileMenuOpen(false);
                }}
                className="flex-1 px-4 py-2 border border-primary text-primary rounded-full font-medium hover:bg-primary hover:text-white transition-all"
              >
                {t("auth.login")}
              </button>
              <button
                onClick={() => {
                  onAuthClick("register");
                  setIsMobileMenuOpen(false);
                }}
                className="flex-1 px-4 py-2 bg-primary text-white rounded-full font-medium hover:bg-primary-dark transition-all"
              >
                {t("auth.register")}
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
