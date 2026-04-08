"use client";

import { products } from "@/lib/data";
import { ProductCard } from "@/components/product/ProductCard";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { useLanguage } from "@/hooks/useLanguage";

export function FeaturedProducts() {
  const { t } = useLanguage();

  return (
    <section className="py-24 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <ScrollReveal className="text-center mb-16">
          <p className="text-sm font-semibold text-ocean-400 uppercase tracking-widest mb-3">
            {t("Selecionados Para Si", "Curated For You")}
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-ocean-800 mb-4">
            {t("Os Nossos Produtos", "Our Products")}
          </h2>
          <p className="mx-auto max-w-xl text-driftwood text-lg">
            {t(
              "Conservas artesanais que capturam o melhor sabor do mar português — frescura e tradição em cada lata.",
              "Artisanal preserves that capture the best flavor of the Portuguese sea — freshness and tradition in every can."
            )}
          </p>
        </ScrollReveal>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
