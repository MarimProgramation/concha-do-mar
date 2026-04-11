"use client";

import { products } from "@/lib/data";
import { ProductCard } from "@/components/product/ProductCard";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { useLanguage } from "@/hooks/useLanguage";

export function FeaturedProducts() {
  const { t } = useLanguage();

  // Show main products (not packs)
  const mainProducts = products.filter((p) => !p.packInfo);

  return (
    <section className="py-24 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <ScrollReveal className="text-center mb-16">
          <p className="text-sm font-semibold text-ocean-400 uppercase tracking-widest mb-3">
            {t("Disponível enquanto durar o lote", "Available while stocks last")}
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-ocean-800 mb-4">
            {t("O Que Temos Hoje", "What We Have Today")}
          </h2>
          <p className="mx-auto max-w-xl text-driftwood text-lg">
            {t(
              "Pescamos, preparamos e conservamos tudo à mão. Pequenos lotes, sabor grande. Quando acaba, acaba.",
              "We fish, prepare and preserve everything by hand. Small batches, big flavor. When it's gone, it's gone."
            )}
          </p>
        </ScrollReveal>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {mainProducts.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
