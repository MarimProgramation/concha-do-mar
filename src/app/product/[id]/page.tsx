"use client";

import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Truck,
  Shield,
  Share2,
  Phone,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ProductCard } from "@/components/product/ProductCard";
import { Footer } from "@/components/layout/Footer";
import { useLanguage } from "@/hooks/useLanguage";
import { products } from "@/lib/data";
import { formatPrice } from "@/lib/utils";

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const product = products.find((p) => p.id === id);
  const { locale, t } = useLanguage();

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-display font-bold text-ocean-800 mb-4">
            {t("Produto Não Encontrado", "Product Not Found")}
          </h1>
          <Link href="/">
            <Button>
              <ArrowLeft size={18} /> {t("Voltar à Loja", "Back to Shop")}
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const name = locale === "pt" ? product.name : product.nameEn;
  const category = locale === "pt" ? product.category : product.categoryEn;
  const description = locale === "pt" ? product.description : product.descriptionEn;
  const badge = locale === "pt" ? product.badge : product.badgeEn;
  const ingredients = locale === "pt" ? product.ingredients : product.ingredientsEn;
  const seasonal = locale === "pt" ? product.seasonal : product.seasonalEn;
  const suggestion = locale === "pt" ? product.suggestion : product.suggestionEn;
  const packInfo = locale === "pt" ? product.packInfo : product.packInfoEn;
  const drainWeight = locale === "pt" ? product.drainWeight : product.drainWeightEn;
  const characteristics = locale === "pt" ? product.characteristics : product.characteristicsEn;
  const conservationProcess = locale === "pt" ? product.conservationProcess : product.conservationProcessEn;
  const storageConditions = locale === "pt" ? product.storageConditions : product.storageConditionsEn;
  const shelfLife = locale === "pt" ? product.shelfLife : product.shelfLifeEn;
  const packagingInfo = locale === "pt" ? product.packaging : product.packagingEn;
  const intendedUse = locale === "pt" ? product.intendedUse : product.intendedUseEn;
  const observations = locale === "pt" ? product.observations : product.observationsEn;

  const relatedProducts = products
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  return (
    <>
      <div className="pt-24 pb-16 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-sm text-driftwood mb-8"
          >
            <Link href="/" className="hover:text-ocean-500 transition-colors">
              {t("Início", "Home")}
            </Link>
            <span>/</span>
            <span className="hover:text-ocean-500 transition-colors cursor-pointer">
              {category}
            </span>
            <span>/</span>
            <span className="text-ocean-700 font-medium">{name}</span>
          </motion.nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Image section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden bg-pearl shadow-lg">
                <Image
                  src={product.image}
                  alt={name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                {badge && (
                  <div className="absolute top-4 left-4">
                    <Badge
                      variant={
                        product.badge === "Produção Limitada" || product.badge === "Limited Batch" || product.badge === "Mais Vendido" || product.badge === "Best Seller"
                          ? "bestseller"
                          : product.badge === "Em Breve" || product.badge === "Coming Soon"
                          ? "new"
                          : "default"
                      }
                    >
                      {badge}
                    </Badge>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Product details */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col"
            >
              <p className="text-sm font-semibold text-ocean-400 uppercase tracking-widest mb-2">
                {category}
              </p>

              <h1 className="font-display text-3xl md:text-4xl font-bold text-ocean-800 mb-4">
                {name}
              </h1>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-3xl font-bold text-ocean-700">
                  {formatPrice(product.price)}
                </span>
                {product.originalPrice && (
                  <>
                    <span className="text-lg text-driftwood line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                    <Badge variant="sale">
                      {t("Poupa", "Save")} {formatPrice(product.originalPrice - product.price)}
                    </Badge>
                  </>
                )}
              </div>

              {/* Description */}
              <p className="text-driftwood leading-relaxed mb-4">
                {description}
              </p>

              {/* Seasonal info */}
              {seasonal && (
                <p className="text-sm font-medium text-ocean-500 bg-ocean-50 rounded-xl px-4 py-2 mb-4 border border-ocean-100">
                  {seasonal}
                </p>
              )}

              {/* Pack info */}
              {packInfo && (
                <p className="text-sm font-medium text-seafoam-600 bg-seafoam-50 rounded-xl px-4 py-2 mb-4 border border-seafoam-100">
                  {packInfo}
                </p>
              )}

              {/* Coming soon notice */}
              {product.comingSoon && (
                <div className="rounded-2xl bg-shell-50 p-5 border border-shell-200 mb-6">
                  <p className="text-sm font-semibold text-ocean-800 mb-1">
                    {t("Volta em breve!", "Coming back soon!")}
                  </p>
                  <p className="text-sm text-driftwood">
                    {t(
                      "Este produto regressa no final do mês. Contacte-nos para ser notificado quando estiver disponível.",
                      "This product returns at the end of the month. Contact us to be notified when available."
                    )}
                  </p>
                </div>
              )}

              {/* Suggestion */}
              {suggestion && (
                <div className="rounded-2xl bg-pearl/50 p-5 border border-ocean-100 mb-4">
                  <p className="text-sm font-semibold text-ocean-800 mb-1">
                    {t("Sugestão de consumo:", "Serving suggestion:")}
                  </p>
                  <p className="text-sm text-driftwood">{suggestion}</p>
                </div>
              )}

              {/* Weight & Ingredients */}
              <div className="space-y-3 mb-6 rounded-2xl bg-pearl/50 p-5 border border-ocean-100">
                {product.weight && (
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-ocean-800">
                      {t("Peso Líquido:", "Net Weight:")}
                    </span>
                    <span className="text-sm text-driftwood">{product.weight}</span>
                  </div>
                )}
                {drainWeight && (
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-ocean-800">
                      {t("Peso Escorrido:", "Drained Weight:")}
                    </span>
                    <span className="text-sm text-driftwood">{drainWeight}</span>
                  </div>
                )}
                {ingredients && (
                  <div>
                    <span className="text-sm font-semibold text-ocean-800">
                      {t("Ingredientes:", "Ingredients:")}
                    </span>
                    <p className="text-sm text-driftwood mt-1">{ingredients}</p>
                  </div>
                )}
              </div>

              {/* Characteristics */}
              {characteristics && characteristics.length > 0 && (
                <div className="mb-6 rounded-2xl bg-pearl/50 p-5 border border-ocean-100">
                  <p className="text-sm font-semibold text-ocean-800 mb-2">
                    {t("Características:", "Characteristics:")}
                  </p>
                  <ul className="space-y-1">
                    {characteristics.map((item, i) => (
                      <li key={i} className="text-sm text-driftwood flex items-start gap-2">
                        <span className="text-ocean-400 mt-0.5">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Conservation, Storage, Shelf Life, Packaging */}
              {(conservationProcess || storageConditions || shelfLife || packagingInfo) && (
                <div className="space-y-4 mb-6 rounded-2xl bg-pearl/50 p-5 border border-ocean-100">
                  {conservationProcess && (
                    <div>
                      <p className="text-sm font-semibold text-ocean-800 mb-1">
                        {t("Processo de Conservação:", "Conservation Process:")}
                      </p>
                      <p className="text-sm text-driftwood">{conservationProcess}</p>
                    </div>
                  )}
                  {storageConditions && (
                    <div>
                      <p className="text-sm font-semibold text-ocean-800 mb-1">
                        {t("Condições de Conservação:", "Storage Conditions:")}
                      </p>
                      <p className="text-sm text-driftwood">{storageConditions}</p>
                    </div>
                  )}
                  {shelfLife && (
                    <div>
                      <p className="text-sm font-semibold text-ocean-800 mb-1">
                        {t("Prazo de Validade:", "Shelf Life:")}
                      </p>
                      <p className="text-sm text-driftwood">{shelfLife}</p>
                    </div>
                  )}
                  {packagingInfo && (
                    <div>
                      <p className="text-sm font-semibold text-ocean-800 mb-1">
                        {t("Embalagem:", "Packaging:")}
                      </p>
                      <p className="text-sm text-driftwood">{packagingInfo}</p>
                    </div>
                  )}
                </div>
              )}

              {/* Observations */}
              {observations && (
                <p className="text-xs italic text-driftwood mb-8">
                  {observations}
                </p>
              )}

              {/* Contact to Order */}
              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <Link href="/contactos" className="flex-1">
                  <Button size="xl" className="w-full">
                    <Phone size={20} /> {product.comingSoon
                      ? t("Avisar Quando Disponível", "Notify When Available")
                      : t("Quero Encomendar", "I Want to Order")
                    }
                  </Button>
                </Link>
              </div>

              {/* Scarcity message */}
              {!product.comingSoon && product.inStock && (
                <p className="text-xs text-center text-ocean-500 font-medium mb-8">
                  {t("Disponível enquanto durar o lote.", "Available while stocks last.")}
                </p>
              )}

              {/* Action row */}
              <div className="flex items-center gap-4 mb-10">
                <Link
                  href="/contactos"
                  className="flex items-center gap-2 text-sm text-driftwood hover:text-ocean-500 transition-colors"
                >
                  <Mail size={18} /> {t("Informações de Encomenda", "Order Information")}
                </Link>
                <button className="flex items-center gap-2 text-sm text-driftwood hover:text-ocean-500 transition-colors">
                  <Share2 size={18} /> {t("Partilhar", "Share")}
                </button>
              </div>

              {/* Trust badges */}
              <div className="grid grid-cols-2 gap-4 rounded-2xl bg-ocean-50/50 p-5 border border-ocean-100">
                {[
                  { icon: Truck, label: t("Envio Grátis", "Free Shipping"), sub: t("Acima de 25€", "Over €25") },
                  { icon: Shield, label: t("Pagamento Seguro", "Secure Payment"), sub: t("SSL encriptado", "SSL encrypted") },
                ].map(({ icon: Icon, label, sub }) => (
                  <div key={label} className="text-center">
                    <Icon
                      size={22}
                      className="mx-auto text-ocean-400 mb-1.5"
                    />
                    <p className="text-xs font-semibold text-ocean-700">
                      {label}
                    </p>
                    <p className="text-[10px] text-driftwood">{sub}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Related products */}
          {relatedProducts.length > 0 && (
            <div className="mt-24">
              <h2 className="font-display text-3xl font-bold text-ocean-800 mb-8 text-center">
                {t("Também Vai Gostar", "You May Also Love")}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 max-w-3xl mx-auto gap-6">
                {relatedProducts.map((p, i) => (
                  <ProductCard key={p.id} product={p} index={i} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
