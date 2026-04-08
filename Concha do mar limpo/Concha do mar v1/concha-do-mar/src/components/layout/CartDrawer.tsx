"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, Minus, Plus, ShoppingBag, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/useCart";
import { formatPrice } from "@/lib/utils";
import { useLanguage } from "@/hooks/useLanguage";

export function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalPrice, totalItems } =
    useCart();
  const { locale, t } = useLanguage();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-ocean-900/30 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 z-[80] w-full max-w-md bg-white shadow-2xl"
          >
            <div className="flex h-full flex-col">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-ocean-100 px-6 py-4">
                <div className="flex items-center gap-3">
                  <ShoppingBag className="h-5 w-5 text-ocean-500" />
                  <h2 className="text-lg font-semibold text-ocean-800">
                    {t("O Seu Carrinho", "Your Bag")}
                  </h2>
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-ocean-100 text-xs font-bold text-ocean-600">
                    {totalItems}
                  </span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="rounded-full p-2 text-driftwood hover:bg-ocean-50 hover:text-ocean-600 transition-colors"
                  aria-label={t("Fechar carrinho", "Close cart")}
                >
                  <X size={20} />
                </button>
              </div>

              {/* Items */}
              <div className="flex-1 overflow-y-auto px-6 py-4">
                {items.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-center">
                    <div className="w-20 h-20 rounded-full bg-ocean-50 flex items-center justify-center mb-4">
                      <ShoppingBag className="h-8 w-8 text-ocean-300" />
                    </div>
                    <p className="text-lg font-medium text-ocean-700 mb-2">
                      {t("O seu carrinho está vazio", "Your bag is empty")}
                    </p>
                    <p className="text-sm text-driftwood mb-6">
                      {t(
                        "Descubra a nossa coleção e encontre algo que adore",
                        "Discover our collection and find something you love"
                      )}
                    </p>
                    <Button onClick={() => setIsOpen(false)}>
                      {t("Continuar a Comprar", "Continue Shopping")}
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {items.map((item) => (
                      <motion.div
                        key={item.product.id}
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, x: 50 }}
                        className="flex gap-4 rounded-2xl bg-pearl/50 p-3"
                      >
                        <div className="relative h-24 w-20 flex-shrink-0 overflow-hidden rounded-xl">
                          <Image
                            src={item.product.image}
                            alt={locale === "pt" ? item.product.name : item.product.nameEn}
                            fill
                            className="object-cover"
                            sizes="80px"
                          />
                        </div>
                        <div className="flex flex-1 flex-col justify-between">
                          <div>
                            <h3 className="text-sm font-semibold text-ocean-800 leading-tight">
                              {locale === "pt" ? item.product.name : item.product.nameEn}
                            </h3>
                            <p className="text-xs text-driftwood mt-0.5">
                              {locale === "pt" ? item.product.category : item.product.categoryEn}
                            </p>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() =>
                                  updateQuantity(
                                    item.product.id,
                                    item.quantity - 1
                                  )
                                }
                                className="flex h-7 w-7 items-center justify-center rounded-full border border-ocean-200 text-ocean-600 hover:bg-ocean-50 transition-colors"
                              >
                                <Minus size={14} />
                              </button>
                              <span className="w-6 text-center text-sm font-medium">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() =>
                                  updateQuantity(
                                    item.product.id,
                                    item.quantity + 1
                                  )
                                }
                                className="flex h-7 w-7 items-center justify-center rounded-full border border-ocean-200 text-ocean-600 hover:bg-ocean-50 transition-colors"
                              >
                                <Plus size={14} />
                              </button>
                            </div>
                            <span className="text-sm font-bold text-ocean-700">
                              {formatPrice(item.product.price * item.quantity)}
                            </span>
                          </div>
                        </div>
                        <button
                          onClick={() => removeItem(item.product.id)}
                          className="self-start p-1 text-driftwood/50 hover:text-shell-500 transition-colors"
                          aria-label={t(`Remover ${item.product.name}`, `Remove ${item.product.nameEn}`)}
                        >
                          <X size={16} />
                        </button>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer */}
              {items.length > 0 && (
                <div className="border-t border-ocean-100 px-6 py-5 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-driftwood">{t("Subtotal", "Subtotal")}</span>
                    <span className="text-lg font-bold text-ocean-800">
                      {formatPrice(totalPrice)}
                    </span>
                  </div>
                  <p className="text-xs text-driftwood text-center">
                    {t(
                      "Portes e impostos calculados no checkout",
                      "Shipping & taxes calculated at checkout"
                    )}
                  </p>
                  <Button className="w-full" size="lg">
                    {t("Finalizar Compra", "Checkout")} <ArrowRight size={18} />
                  </Button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-full text-center text-sm text-ocean-500 hover:text-ocean-600 transition-colors"
                  >
                    {t("Continuar a Comprar", "Continue Shopping")}
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
