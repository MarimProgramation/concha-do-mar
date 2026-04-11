"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Clock,
  MessageCircle,
  Package,
  Truck,
  CreditCard,
  Shell,
} from "lucide-react";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { useLanguage } from "@/hooks/useLanguage";

export default function ContactosPage() {
  const { t } = useLanguage();

  const contactMethods = [
    {
      icon: Mail,
      title: t("Email", "Email"),
      value: "conchadomarft@gmail.com",
      description: t(
        "Envie-nos um email com a sua encomenda ou questões",
        "Send us an email with your order or questions"
      ),
      action: "mailto:conchadomarft@gmail.com",
      actionLabel: t("Enviar Email", "Send Email"),
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "+351 910 157 752",
      description: t(
        "Fale connosco pelo WhatsApp para encomendas rápidas",
        "Chat with us on WhatsApp for quick orders"
      ),
      action: "https://wa.me/351910157752",
      actionLabel: t("Enviar Mensagem", "Send Message"),
    },
  ];

  const orderInfo = [
    {
      icon: Package,
      title: t("Como Encomendar", "How to Order"),
      items: [
        t(
          "Contacte-nos por email ou WhatsApp",
          "Contact us by email or WhatsApp"
        ),
        t(
          "Indique os produtos e quantidades desejadas",
          "Specify the products and quantities you want"
        ),
        t(
          "Receba a confirmação e os detalhes de pagamento",
          "Receive confirmation and payment details"
        ),
        t(
          "A sua encomenda será preparada e enviada",
          "Your order will be prepared and shipped"
        ),
      ],
    },
    {
      icon: Truck,
      title: t("Envio & Entrega", "Shipping & Delivery"),
      items: [
        t("Envio para todo o território nacional", "Shipping across Portugal"),
        t("Envio em 2-5 dias úteis", "Shipping in 2-5 business days"),
        t("Envio internacional disponível sob consulta", "International shipping available on request"),
      ],
    },
    {
      icon: CreditCard,
      title: t("Pagamento", "Payment"),
      items: [
        t("Transferência Bancária", "Bank Transfer"),
        t("MB Way", "MB Way"),
        t("Pagamento confirmado antes do envio", "Payment confirmed before shipping"),
      ],
    },
  ];

  return (
    <>
      <div className="pt-28 pb-16 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex justify-center mb-4">
              <Shell className="h-10 w-10 text-ocean-400" />
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-ocean-800 mb-4">
              {t("Contactos & Encomendas", "Contact & Orders")}
            </h1>
            <p className="text-lg text-driftwood max-w-2xl mx-auto leading-relaxed">
              {t(
                "Entre em contacto connosco para fazer a sua encomenda ou esclarecer qualquer dúvida. Estamos aqui para ajudar!",
                "Get in touch with us to place your order or ask any questions. We're here to help!"
              )}
            </p>
          </motion.div>

          {/* Contact Methods */}
          <ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 max-w-2xl mx-auto gap-6 mb-20">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={method.title}
                  href={method.action}
                  target={method.action.startsWith("http") ? "_blank" : undefined}
                  rel={method.action.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group rounded-3xl bg-white border border-ocean-100 p-6 shadow-sm hover:shadow-lg hover:border-ocean-200 transition-all duration-300 text-center"
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-ocean-50 flex items-center justify-center group-hover:bg-ocean-100 transition-colors">
                      <method.icon className="h-6 w-6 text-ocean-500" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-ocean-800 mb-1">
                    {method.title}
                  </h3>
                  <p className="text-sm font-medium text-ocean-600 mb-2">
                    {method.value}
                  </p>
                  <p className="text-xs text-driftwood mb-4 leading-relaxed">
                    {method.description}
                  </p>
                  <span className="inline-block text-sm font-semibold text-ocean-500 group-hover:text-ocean-600 transition-colors">
                    {method.actionLabel} →
                  </span>
                </motion.a>
              ))}
            </div>
          </ScrollReveal>

          {/* Order Information */}
          <ScrollReveal>
            <div className="mb-20">
              <h2 className="font-display text-3xl font-bold text-ocean-800 mb-10 text-center">
                {t("Informações de Encomenda", "Order Information")}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {orderInfo.map((section, index) => (
                  <motion.div
                    key={section.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    className="rounded-3xl bg-pearl/50 border border-ocean-100 p-8"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-ocean-50 flex items-center justify-center mb-5">
                      <section.icon className="h-6 w-6 text-ocean-500" />
                    </div>
                    <h3 className="text-lg font-semibold text-ocean-800 mb-4">
                      {section.title}
                    </h3>
                    <ul className="space-y-3">
                      {section.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-driftwood">
                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-ocean-100 flex items-center justify-center text-xs font-bold text-ocean-600 mt-0.5">
                            {i + 1}
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Business Hours */}
          <ScrollReveal>
            <div className="rounded-3xl bg-ocean-800 text-white p-10 md:p-14 text-center">
              <Clock className="h-8 w-8 text-ocean-300 mx-auto mb-4" />
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">
                {t("Horário de Atendimento", "Service Hours")}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
                <div>
                  <p className="text-sm font-semibold text-ocean-300 uppercase tracking-wider mb-1">
                    {t("Segunda a Sexta", "Monday to Friday")}
                  </p>
                  <p className="text-lg font-medium">09:00 – 18:00</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-ocean-300 uppercase tracking-wider mb-1">
                    {t("Sábado", "Saturday")}
                  </p>
                  <p className="text-lg font-medium">10:00 – 14:00</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-ocean-300 uppercase tracking-wider mb-1">
                    {t("Domingo", "Sunday")}
                  </p>
                  <p className="text-lg font-medium">{t("Encerrado", "Closed")}</p>
                </div>
              </div>
              <p className="mt-8 text-sm text-ocean-200">
                {t(
                  "As encomendas feitas por email ou WhatsApp fora do horário serão respondidas no próximo dia útil.",
                  "Orders placed by email or WhatsApp outside business hours will be answered on the next business day."
                )}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
      <Footer />
    </>
  );
}
