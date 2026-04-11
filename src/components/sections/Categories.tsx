"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { categories } from "@/lib/data";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations/ScrollReveal";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const categoryLinks: Record<string, string> = {
  "conservas-peixe": "/colecoes/conservas-peixe",
  "arte-xavega": "/colecoes/arte-xavega",
};

export function Categories() {
  const { locale, t } = useLanguage();

  return (
    <section id="collections" className="py-24 px-6 lg:px-8 bg-gradient-to-b from-ivory to-ocean-50/30">
      <div className="mx-auto max-w-4xl">
        {/* Section header */}
        <ScrollReveal className="text-center mb-16">
          <p className="text-sm font-semibold text-seafoam-500 uppercase tracking-widest mb-3">
            {t("Descubra", "Discover")}
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-ocean-800 mb-4">
            {t("Conheça o Nosso Mundo", "Discover Our World")}
          </h2>
          <p className="mx-auto max-w-xl text-driftwood text-lg">
            {t(
              "Da pesca noturna ao frasco — conheça os nossos produtos e a tradição que nos move.",
              "From night fishing to jar — discover our products and the tradition that drives us."
            )}
          </p>
        </ScrollReveal>

        {/* Categories grid — 2 equal columns */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-6" staggerDelay={0.12}>
          {categories.map((category) => (
            <StaggerItem key={category.id}>
              <Link href={categoryLinks[category.id] ?? "#"}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="group relative overflow-hidden rounded-3xl cursor-pointer"
                >
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={category.image}
                      alt={locale === "pt" ? category.name : category.nameEn}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ocean-900/70 via-ocean-900/20 to-transparent" />
                  </div>

                  {/* Content overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-display font-bold text-white mb-1">
                      {locale === "pt" ? category.name : category.nameEn}
                    </h3>
                    <p className="text-sm text-ocean-100/80 mb-4">
                      {locale === "pt" ? category.description : category.descriptionEn}
                    </p>
                    <div className="flex items-center gap-2 text-white text-sm font-medium opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                      {t("Explorar Coleção", "Explore Collection")} <ArrowRight size={16} />
                    </div>
                  </div>
                </motion.div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
