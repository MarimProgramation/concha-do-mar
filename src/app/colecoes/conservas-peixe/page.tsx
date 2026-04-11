"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { useLanguage } from "@/hooks/useLanguage";
import { products } from "@/lib/data";
import { formatPrice } from "@/lib/utils";

export default function ConservasPeixePage() {
  const { locale, t } = useLanguage();

  return (
    <>
      {/* Hero banner */}
      <section className="relative h-[40vh] min-h-[320px] flex items-end overflow-hidden">
        <Image
          src="/img/cavalapolvo.png"
          alt={t("Conservas de Peixe", "Fish Preserves")}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ocean-900/80 via-ocean-900/30 to-transparent" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pb-10">
          <Link
            href="/#collections"
            className="inline-flex items-center gap-2 text-ocean-100 hover:text-white transition mb-4 text-sm"
          >
            <ArrowLeft size={16} /> {t("Voltar às Coleções", "Back to Collections")}
          </Link>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-2">
            {t("As Nossas Conservas", "Our Preserves")}
          </h1>
          <p className="text-ocean-100 text-lg max-w-xl">
            {t(
              "Peixe pescado de noite, preparado de madrugada e conservado à mão. Produção limitada — quando acaba, acaba.",
              "Fish caught at night, prepared at dawn and preserved by hand. Limited production — when it's gone, it's gone."
            )}
          </p>
        </div>
      </section>

      {/* Products grid */}
      <section className="py-16 px-6 lg:px-8 bg-gradient-to-b from-ivory to-white">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal className="mb-10">
            <p className="text-sm font-semibold text-seafoam-500 uppercase tracking-widest mb-1">
              {t("A nossa seleção", "Our selection")}
            </p>
            <h2 className="font-display text-3xl font-bold text-ocean-800">
              {products.length} {t("Produtos", "Products")}
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, i) => {
              const name = locale === "pt" ? product.name : product.nameEn;
              const category = locale === "pt" ? product.category : product.categoryEn;
              const badge = locale === "pt" ? product.badge : product.badgeEn;
              const badgeVariant =
                product.badge === "Produção Limitada" || product.badge === "Limited Batch" || product.badge === "Mais Vendido" || product.badge === "Best Seller"
                  ? "bestseller"
                  : product.badge === "Em Breve" || product.badge === "Coming Soon"
                  ? "new"
                  : "default";

              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="group relative"
                >
                  <div className="card-hover rounded-3xl bg-white overflow-hidden shadow-sm border border-ocean-50">
                    {/* Image */}
                    <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-ocean-50 to-sand-50">
                      <Image
                        src={product.image}
                        alt={name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      {badge && (
                        <div className="absolute top-4 left-4">
                          <Badge variant={badgeVariant as "bestseller" | "new" | "default"}>
                            {badge}
                          </Badge>
                        </div>
                      )}
                    </div>

                    {/* Info */}
                    <div className="p-5">
                      <p className="text-xs font-medium text-seafoam-500 uppercase tracking-wider mb-1">
                        {category}
                      </p>
                      <h3 className="font-display text-lg font-semibold text-ocean-800 mb-2 line-clamp-1">
                        {name}
                      </h3>
                      <div className="flex items-center justify-between">
                        <span className="text-xl font-bold text-ocean-800">
                          {formatPrice(product.price)}
                        </span>
                        <Link href={`/product/${product.id}`}>
                          <Button size="sm" variant="outline" className="gap-1.5">
                            <Eye size={15} /> {t("Ver Detalhes", "View Details")}
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* CTA */}
          <ScrollReveal className="mt-16 text-center">
            <div className="bg-ocean-50/50 rounded-3xl p-10 border border-ocean-100">
              <h3 className="font-display text-2xl font-bold text-ocean-800 mb-3">
                {t("Quer encomendar?", "Want to order?")}
              </h3>
              <p className="text-driftwood mb-6 max-w-md mx-auto">
                {t(
                  "Entre em contacto connosco para fazer a sua encomenda. Entrega em todo o país!",
                  "Get in touch with us to place your order. Delivery nationwide!"
                )}
              </p>
              <Link href="/contactos">
                <Button size="lg" className="gap-2">
                  {t("Contactar para Encomendar", "Contact to Order")}
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </>
  );
}
