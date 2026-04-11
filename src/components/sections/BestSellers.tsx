"use client";

import { products } from "@/lib/data";
import { ProductCard } from "@/components/product/ProductCard";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { useLanguage } from "@/hooks/useLanguage";

export function BestSellers() {
  const { t } = useLanguage();

  // Show packs only
  const packs = products.filter((p) => p.packInfo);

  return (
    <section id="novidades" className="py-24 px-6 lg:px-8 bg-gradient-to-b from-ocean-50/30 to-ivory">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <ScrollReveal className="text-center mb-12">
          <p className="text-sm font-semibold text-sand-500 uppercase tracking-widest mb-3">
            {t("Mais Valor · Menos Preço", "More Value · Less Price")}
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-ocean-800 mb-4">
            {t("Packs Especiais", "Special Packs")}
          </h2>
          <p className="mx-auto max-w-xl text-driftwood text-lg">
            {t(
              "Para quem já conhece e quer repetir — ou para quem quer oferecer algo especial. Produção limitada.",
              "For those who already know and want more — or for those who want to give something special. Limited production."
            )}
          </p>
        </ScrollReveal>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {packs.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
