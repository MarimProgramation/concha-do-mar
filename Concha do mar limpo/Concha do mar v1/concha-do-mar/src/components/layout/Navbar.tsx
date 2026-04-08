"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Menu,
  X,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";
import { products } from "@/lib/data";
import { formatPrice } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { locale, setLocale, t } = useLanguage();

  const navLinks = [
    { href: "/", label: t("Início", "Home") },
    { href: "/#collections", label: t("Coleções", "Collections") },
    { href: "/#story", label: t("A Nossa História", "Our Story") },
    { href: "/#faq", label: t("FAQ", "FAQ") },
    { href: "/contactos", label: t("Contactos & Encomendas", "Contact & Orders") },
  ];

  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase();
    return products.filter((p) => {
      const name = locale === "pt" ? p.name : p.nameEn;
      const category = locale === "pt" ? p.category : p.categoryEn;
      const desc = locale === "pt" ? p.description : p.descriptionEn;
      return (
        name.toLowerCase().includes(q) ||
        category.toLowerCase().includes(q) ||
        desc.toLowerCase().includes(q)
      );
    });
  }, [searchQuery, locale]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass shadow-lg shadow-ocean-100/20"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 lg:px-8">
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-ocean-700 hover:text-ocean-500 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="transition duration-200 group-hover:brightness-125">
              <Image
                src="/img/Logo%20png.png"
                alt="Logo Concha do Mar"
                width={128}
                height={128}
                className="h-32 w-auto object-contain drop-shadow"
                priority
              />
            </div>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-sm font-medium text-ocean-700 transition-colors hover:text-ocean-500 group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-ocean-400 transition-all duration-300 group-hover:w-full rounded-full" />
              </Link>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-1">
            {/* Language toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setLocale(locale === "pt" ? "en" : "pt")}
              aria-label={t("Mudar para inglês", "Switch to Portuguese")}
              className="text-ocean-700 hover:text-ocean-500 relative"
              title={t("English", "Português")}
            >
              <Globe size={20} />
              <span className="absolute -bottom-0.5 -right-0.5 text-[9px] font-bold bg-ocean-100 text-ocean-700 rounded px-0.5 leading-none">
                {locale === "pt" ? "PT" : "EN"}
              </span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSearchOpen(true)}
              aria-label={t("Pesquisar", "Search")}
              className="text-ocean-700 hover:text-ocean-500"
            >
              <Search size={20} />
            </Button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-18 z-40 glass border-b border-ocean-100 lg:hidden"
          >
            <div className="flex flex-col gap-1 p-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-xl px-4 py-3 text-base font-medium text-ocean-700 transition-colors hover:bg-ocean-50 hover:text-ocean-600"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-4 flex flex-col gap-2 border-t border-ocean-100 pt-4">
                <div className="flex gap-3 mt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    onClick={() => setLocale(locale === "pt" ? "en" : "pt")}
                  >
                    <Globe size={16} /> {locale === "pt" ? "English" : "Português"}
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search overlay */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-start justify-center bg-ocean-900/30 backdrop-blur-sm pt-32"
            onClick={() => setSearchOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: -30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-2xl mx-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="glass rounded-2xl p-6 shadow-2xl">
                <div className="flex items-center gap-4">
                  <Search className="h-6 w-6 text-ocean-400" />
                  <input
                    autoFocus
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={t("Pesquisar produtos...", "Search products...")}
                    className="flex-1 bg-transparent text-lg text-ocean-800 placeholder:text-driftwood/50 outline-none"
                  />
                  <button
                    onClick={() => { setSearchOpen(false); setSearchQuery(""); }}
                    className="p-2 rounded-full hover:bg-ocean-50 text-ocean-500"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Search Results */}
                {searchQuery.trim() ? (
                  <div className="mt-4 border-t border-ocean-100 pt-4 max-h-80 overflow-y-auto">
                    {searchResults.length > 0 ? (
                      <div className="space-y-2">
                        {searchResults.map((product) => {
                          const name = locale === "pt" ? product.name : product.nameEn;
                          const category = locale === "pt" ? product.category : product.categoryEn;
                          return (
                            <Link
                              key={product.id}
                              href={`/product/${product.id}`}
                              onClick={() => { setSearchOpen(false); setSearchQuery(""); }}
                              className="flex items-center gap-4 rounded-xl p-3 hover:bg-ocean-50 transition-colors"
                            >
                              <div className="relative h-14 w-14 rounded-lg overflow-hidden flex-shrink-0">
                                <Image
                                  src={product.image}
                                  alt={name}
                                  fill
                                  className="object-cover"
                                  sizes="56px"
                                />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-semibold text-ocean-800 truncate">{name}</p>
                                <p className="text-xs text-driftwood">{category}</p>
                              </div>
                              <p className="text-sm font-bold text-ocean-700 flex-shrink-0">
                                {formatPrice(product.price)}
                              </p>
                            </Link>
                          );
                        })}
                      </div>
                    ) : (
                      <p className="text-sm text-driftwood text-center py-6">
                        {t("Nenhum produto encontrado", "No products found")}
                      </p>
                    )}
                  </div>
                ) : (
                  <div className="mt-4 border-t border-ocean-100 pt-4">
                    <p className="text-xs font-medium text-driftwood uppercase tracking-wider mb-3">
                      {t("Pesquisas Populares", "Popular Searches")}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {[
                        t("Cavala", "Mackerel"),
                        t("Polvo", "Octopus"),
                        t("Sardinha", "Sardine"),
                        t("Atum", "Tuna"),
                      ].map((term) => (
                        <span
                          key={term}
                          onClick={() => setSearchQuery(term)}
                          className="rounded-full bg-ocean-50 px-4 py-1.5 text-sm text-ocean-600 cursor-pointer hover:bg-ocean-100 transition-colors"
                        >
                          {term}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
