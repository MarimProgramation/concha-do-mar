"use client";

import Image from "next/image";
import Link from "next/link";
import { Shell, Instagram, Facebook, Mail, Phone, MessageCircle, ArrowUpRight } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { useLanguage } from "@/hooks/useLanguage";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="bg-ocean-800 text-ocean-100">
      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-20 pb-12">
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
            {/* Brand column */}
            <div className="lg:col-span-4">
              <Link href="/" className="flex items-center gap-2 mb-6">
                <Shell className="h-7 w-7 text-ocean-300" />
                <span className="font-display text-2xl font-bold text-white tracking-wide">
                  Concha do Mar
                </span>
              </Link>
              <p className="text-ocean-200 text-sm leading-relaxed mb-6 max-w-xs">
                {t(
                  "De raízes no mar nasce o nosso sabor. Conservas feitas à mão na Fonte Da Telha. Produção limitada.",
                  "We fish at night, prepare at dawn. Handmade preserves from Fonte Da Telha. Limited production."
                )}
              </p>
              {/* Contact info */}
              <div className="space-y-3 text-sm text-ocean-200">
                <a href="mailto:conchadomarft@gmail.com" className="flex items-center gap-3 hover:text-white transition-colors">
                  <Mail size={16} className="text-ocean-400" />
                  <span>conchadomarft@gmail.com</span>
                </a>
                <a href="tel:+351910157752" className="flex items-center gap-3 hover:text-white transition-colors">
                  <Phone size={16} className="text-ocean-400" />
                  <span>+351 910 157 752</span>
                </a>
                <a href="https://wa.me/351910157752" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-white transition-colors">
                  <MessageCircle size={16} className="text-ocean-400" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Navigation */}
            <div className="lg:col-span-2">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                {t("Navegação", "Navigation")}
              </h3>
              <ul className="space-y-2.5">
                <li>
                  <Link href="/" className="text-sm text-ocean-200 hover:text-white transition-colors duration-300">
                    {t("Início", "Home")}
                  </Link>
                </li>
                <li>
                  <Link href="/#collections" className="text-sm text-ocean-200 hover:text-white transition-colors duration-300">
                    {t("Coleções", "Collections")}
                  </Link>
                </li>
                <li>
                  <Link href="/#story" className="text-sm text-ocean-200 hover:text-white transition-colors duration-300">
                    {t("A Nossa História", "Our Story")}
                  </Link>
                </li>
                <li>
                  <Link href="/contactos" className="text-sm text-ocean-200 hover:text-white transition-colors duration-300">
                    {t("Contactos & Encomendas", "Contact & Orders")}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div className="lg:col-span-3">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                {t("Apoio", "Support")}
              </h3>
              <ul className="space-y-2.5">
                <li>
                  <Link href="/contactos" className="text-sm text-ocean-200 hover:text-white transition-colors duration-300">
                    {t("Como Encomendar", "How to Order")}
                  </Link>
                </li>
                <li>
                  <Link href="/contactos" className="text-sm text-ocean-200 hover:text-white transition-colors duration-300">
                    {t("Informações de Envio", "Shipping Information")}
                  </Link>
                </li>
                <li>
                  <Link href="/#faq" className="text-sm text-ocean-200 hover:text-white transition-colors duration-300">
                    {t("Perguntas Frequentes", "FAQ")}
                  </Link>
                </li>
              </ul>
            </div>

            {/* CTA / Encomendas */}
            <div className="lg:col-span-3">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                {t("Faça a Sua Encomenda", "Place Your Order")}
              </h3>
              <p className="text-sm text-ocean-200 leading-relaxed mb-5">
                {t(
                  "Contacte-nos por telefone, email ou WhatsApp para fazer a sua encomenda. Respondemos em menos de 24h!",
                  "Contact us by phone, email or WhatsApp to place your order. We respond within 24h!"
                )}
              </p>
              <Link
                href="/contactos"
                className="inline-flex items-center gap-2 rounded-xl bg-ocean-600 hover:bg-ocean-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-300"
              >
                {t("Contactar", "Contact Us")}
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </ScrollReveal>

        {/* Divider */}
        <div className="mt-16 pt-8 border-t border-ocean-700">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Social icons */}
            <div className="flex items-center gap-4">
              {[
                { Icon: Instagram, label: "Instagram", href: "https://www.instagram.com/conchadomarft?igsh=MndvbGt6eW5zMzl2" },
                { Icon: Facebook, label: "Facebook", href: "https://www.facebook.com/share/1NeWcy7NBW/?mibextid=wwXIfr" },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-ocean-700/50 text-ocean-300 hover:bg-ocean-600 hover:text-white transition-all duration-300"
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>

            {/* Copyright */}
            <p className="text-xs text-ocean-400 text-center">
              © {new Date().getFullYear()} Concha do Mar. {t("Todos os direitos reservados.", "All rights reserved.")} {t("Feito com", "Made with")} 🐚 {t("e amor.", "and love.")}
            </p>

            {/* Payment methods */}
            <div className="flex items-center gap-3 text-xs text-ocean-400">
              <span>{t("Pagamento:", "Payment:")}</span>
              {["MB Way", "Multibanco", t("Transferência", "Transfer")].map((method) => (
                <span
                  key={method}
                  className="rounded bg-ocean-700/50 px-2 py-1 text-ocean-300"
                >
                  {method}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Site credit */}
        <div className="mt-8 pt-6 border-t border-ocean-700/50">
          <div className="flex flex-col items-center gap-4 text-ocean-300">
            <span className="text-xs text-ocean-400 uppercase tracking-wider">
              {t("Site realizado por", "Website made by")}
            </span>
            <Image
              src="/img/mr2.png"
              alt="MR Designs"
              width={220}
              height={88}
              className="opacity-80 hover:opacity-100 transition-opacity"
            />
            <div className="flex items-center gap-4 text-sm">
              <a href="mailto:mariordesigns@gmail.com" className="flex items-center gap-1.5 hover:text-white transition-colors">
                <Mail size={14} className="text-ocean-400" />
                mariordesigns@gmail.com
              </a>
              <span className="text-ocean-600">|</span>
              <a href="https://wa.me/351966269426" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white transition-colors">
                <MessageCircle size={14} className="text-ocean-400" />
                966 269 426
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
