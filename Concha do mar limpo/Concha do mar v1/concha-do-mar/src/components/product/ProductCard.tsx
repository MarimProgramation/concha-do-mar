"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { formatPrice } from "@/lib/utils";
import { useLanguage } from "@/hooks/useLanguage";
import type { Product } from "@/lib/data";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { locale, t } = useLanguage();

  const name = locale === "pt" ? product.name : product.nameEn;
  const category = locale === "pt" ? product.category : product.categoryEn;
  const badge = locale === "pt" ? product.badge : product.badgeEn;

  const badgeVariant = product.badge === "Mais Vendido" || product.badge === "Best Seller"
    ? "bestseller"
    : product.badge === "Novidade" || product.badge === "New Arrival"
    ? "new"
    : "default";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="card-hover rounded-3xl bg-white overflow-hidden shadow-sm border border-ocean-50">
        {/* Image */}
        <div className="relative aspect-[3/4] overflow-hidden">
          <Image
            src={product.image}
            alt={name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />

          {/* Overlay actions */}
          <div className="absolute inset-0 bg-gradient-to-t from-ocean-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Badge */}
          {badge && (
            <div className="absolute top-3 left-3 z-10">
              <Badge variant={badgeVariant}>{badge}</Badge>
            </div>
          )}

          {/* Sale badge */}
          {product.originalPrice && (
            <div className="absolute top-3 right-3 z-10">
              <Badge variant="sale">
                -{Math.round((1 - product.price / product.originalPrice) * 100)}%
              </Badge>
            </div>
          )}

          {/* Action buttons on hover */}
          <div className="absolute bottom-4 left-4 right-4 z-10 flex gap-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
            <Link href={`/product/${product.id}`} className="flex-1">
              <Button className="w-full text-sm" size="sm">
                <Eye size={16} /> {t("Ver Detalhes", "View Details")}
              </Button>
            </Link>
          </div>
        </div>

        {/* Info */}
        <Link href={`/product/${product.id}`} className="block p-4 space-y-2">
          <p className="text-xs font-medium text-driftwood uppercase tracking-wider">
            {category}
          </p>
          <h3 className="font-semibold text-ocean-800 leading-snug group-hover:text-ocean-600 transition-colors">
            {name}
          </h3>

          {/* Price */}
          <div className="flex items-center gap-2 pt-1">
            <span className="text-lg font-bold text-ocean-700">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-driftwood line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>

          {/* Weight */}
          {product.weight && (
            <p className="text-xs text-driftwood pt-1">{product.weight}</p>
          )}
        </Link>
      </div>
    </motion.div>
  );
}
