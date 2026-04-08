"use client";

import { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Truck,
  RotateCcw,
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
  const [activeImage, setActiveImage] = useState(0);
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
                        product.badge === "Mais Vendido" || product.badge === "Best Seller"
                          ? "bestseller"
                          : "new"
                      }
                    >
                      {badge}
                    </Badge>
                  </div>
                )}
              </div>

              {/* Thumbnail gallery (simulated with same image) */}
              <div className="flex gap-3 mt-4">
                {[0, 1, 2, 3].map((i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`relative w-20 h-24 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                      activeImage === i
                        ? "border-ocean-400 shadow-md"
                        : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={product.image}
                      alt={`${name} ${t("vista", "view")} ${i + 1}`}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </button>
                ))}
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
              <p className="text-driftwood leading-relaxed mb-6">
                {description}
              </p>

              {/* Weight & Ingredients */}
              <div className="space-y-3 mb-8 rounded-2xl bg-pearl/50 p-5 border border-ocean-100">
                {product.weight && (
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-ocean-800">
                      {t("Peso Líquido:", "Net Weight:")}
                    </span>
                    <span className="text-sm text-driftwood">{product.weight}</span>
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

              {/* Contact to Order */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/contactos" className="flex-1">
                  <Button size="xl" className="w-full">
                    <Phone size={20} /> {t("Encomendar — Contacte-nos", "Order — Contact Us")}
                  </Button>
                </Link>
              </div>

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
              <div className="grid grid-cols-3 gap-4 rounded-2xl bg-ocean-50/50 p-5 border border-ocean-100">
                {[
                  { icon: Truck, label: t("Envio Grátis", "Free Shipping"), sub: t("Acima de 25€", "Over €25") },
                  { icon: RotateCcw, label: t("Devoluções Fáceis", "Easy Returns"), sub: t("30 dias", "30-day policy") },
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
