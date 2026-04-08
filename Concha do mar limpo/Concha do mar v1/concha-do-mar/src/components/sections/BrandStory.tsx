"use client";

import Image from "next/image";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

export function BrandStory() {
  const { t } = useLanguage();

  return (
    <section id="story" className="py-24 px-6 lg:px-8 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Images */}
          <ScrollReveal direction="left" className="relative">
            <div className="relative">
              {/* Main image */}
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-ocean-200/30">
                <Image
                  src="/img/tia.jpeg"
                  alt={t("Concha do Mar - Pôr do sol no mar", "Concha do Mar - Sunset over the sea")}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Decorative element */}
              <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-gradient-to-br from-ocean-100 to-seafoam-100 blur-sm opacity-60" />
            </div>
          </ScrollReveal>

          {/* Content */}
          <ScrollReveal direction="right">
            <div className="lg:pl-8">
              <p className="text-sm font-semibold text-shell-500 uppercase tracking-widest mb-4">
                {t("A Nossa História", "Our Story")}
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-ocean-800 mb-6 leading-tight">
                {t("Onde o Mar", "Where the Ocean")}
                <br />
                <span className="gradient-text">{t("Encontra a Tradição", "Meets Tradition")}</span>
              </h2>
              <div className="space-y-5 text-driftwood leading-relaxed">
                <p>
                  {t(
                    "A Concha do Mar nasceu de uma paixão pela costa portuguesa — o brilho dourado do sol sobre o Atlântico, o aroma fresco do mar e a riqueza dos seus sabores.",
                    "Concha do Mar was born from a passion for the Portuguese coast — the golden shine of the sun over the Atlantic, the fresh aroma of the sea and the richness of its flavors."
                  )}
                </p>
                <p>
                  {t(
                    "Acreditamos que as melhores conservas nascem da combinação perfeita entre ingredientes frescos e métodos tradicionais. Cada lata é uma homenagem à tradição conserveira portuguesa.",
                    "We believe the best preserves come from the perfect combination of fresh ingredients and traditional methods. Each can is a tribute to the Portuguese preserving tradition."
                  )}
                </p>
                <p>
                  {t(
                    "Do mar à lata, cada produto é cuidadosamente preparado com ingredientes naturais e azeite virgem extra, honrando a beleza natural que nos inspira e o legado dos pescadores portugueses.",
                    "From sea to can, each product is carefully prepared with natural ingredients and extra virgin olive oil, honoring the natural beauty that inspires us and the legacy of Portuguese fishermen."
                  )}
                </p>
              </div>

              {/* Brand values */}
              <div className="grid grid-cols-2 gap-6 mt-10 mb-10">
                {[
                  { number: "2020", label: t("Fundada", "Founded") },
                  { number: "100%", label: t("Natural", "Natural") },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="text-2xl font-display font-bold gradient-text">
                      {stat.number}
                    </p>
                    <p className="text-xs text-driftwood mt-1 uppercase tracking-wider">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              <Button size="lg">
                {t("Saber Mais", "Discover More")} <ArrowRight size={18} />
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
