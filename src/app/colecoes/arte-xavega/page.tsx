"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Anchor, Fish, Users, Sun, Waves } from "lucide-react";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { useLanguage } from "@/hooks/useLanguage";

export default function ArteXavegaPage() {
  const { t } = useLanguage();

  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
        <Image
          src="/img/por%20do%20sol%202.jpeg"
          alt="Arte Xávega"
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
          <p className="text-xs font-semibold text-shell uppercase tracking-widest mb-2">
            {t("Tradição & Cultura", "Tradition & Culture")}
          </p>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-3">
            Arte Xávega
          </h1>
          <p className="text-ocean-100 text-lg max-w-2xl">
            {t(
              "Uma arte milenar de pesca artesanal que sobrevive nas praias da costa portuguesa, unindo comunidades e preservando tradições.",
              "An ancient artisanal fishing art that survives on the beaches of the Portuguese coast, uniting communities and preserving traditions."
            )}
          </p>
        </div>
      </section>

      {/* Intro - newspaper style */}
      <section className="py-16 px-6 lg:px-8 bg-ivory">
        <div className="mx-auto max-w-5xl">
          <ScrollReveal>
            <div className="border-b-4 border-t-4 border-ocean-800 py-6 mb-12 text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-ocean-800 tracking-tight">
                {t("O Jornal da Arte Xávega", "The Arte Xávega Journal")}
              </h2>
              <p className="text-driftwood text-sm mt-2 uppercase tracking-widest">
                {t(
                  "Tradição · Comunidade · Mar Português",
                  "Tradition · Community · Portuguese Sea"
                )}
              </p>
            </div>
          </ScrollReveal>

          {/* Article 1 - What is Arte Xávega */}
          <ScrollReveal>
            <article className="mb-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Anchor size={18} className="text-seafoam-500" />
                    <p className="text-xs font-semibold text-seafoam-500 uppercase tracking-widest">
                      {t("A Tradição", "The Tradition")}
                    </p>
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-ocean-800 mb-4">
                    {t("O que é a Arte Xávega?", "What is Arte Xávega?")}
                  </h3>
                  <div className="space-y-4 text-driftwood leading-relaxed">
                    <p>
                      {t(
                        "A Arte Xávega é uma técnica de pesca artesanal ancestral praticada ao longo da costa portuguesa, especialmente na região centro. Consiste no lançamento de uma grande rede ao mar a partir de um barco — o chamado \"barco de xávega\" — que é depois puxada para terra por grupos de pescadores e, tradicionalmente, com a ajuda de bois.",
                        "Arte Xávega is an ancestral artisanal fishing technique practiced along the Portuguese coast, especially in the central region. It consists of casting a large net into the sea from a boat — the so-called 'xávega boat' — which is then pulled ashore by groups of fishermen and, traditionally, with the help of oxen."
                      )}
                    </p>
                    <p>
                      {t(
                        "Esta arte de pesca remonta a séculos de história e é considerada um património cultural imaterial de Portugal. O processo envolve toda a comunidade piscatória — homens, mulheres e crianças — num esforço coletivo que espelha os valores de solidariedade e união que caracterizam estas populações costeiras.",
                        "This fishing art dates back centuries and is considered an intangible cultural heritage of Portugal. The process involves the entire fishing community — men, women and children — in a collective effort that reflects the values of solidarity and unity that characterize these coastal populations."
                      )}
                    </p>
                  </div>
                </div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl"
                >
                  <Image
                    src="/img/por%20do%20sol%201.jpeg"
                    alt={t("Pôr do sol na praia da Arte Xávega", "Sunset at the Arte Xávega beach")}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </motion.div>
              </div>
            </article>
          </ScrollReveal>

          {/* Divider */}
          <div className="border-t border-ocean-200 my-8" />

          {/* Article 2 - How it works */}
          <ScrollReveal>
            <article className="mb-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1"
                >
                  <Image
                    src="/img/por%20do%20sol%203.jpeg"
                    alt={t("Pescadores na praia", "Fishermen on the beach")}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </motion.div>
                <div className="order-1 lg:order-2">
                  <div className="flex items-center gap-2 mb-3">
                    <Fish size={18} className="text-seafoam-500" />
                    <p className="text-xs font-semibold text-seafoam-500 uppercase tracking-widest">
                      {t("O Processo", "The Process")}
                    </p>
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-ocean-800 mb-4">
                    {t("Como Funciona?", "How Does It Work?")}
                  </h3>
                  <div className="space-y-4 text-driftwood leading-relaxed">
                    <p>
                      {t(
                        "O processo começa ao amanhecer, quando os pescadores levam o barco de xávega ao mar. A rede, que pode ter centenas de metros de comprimento, é lançada em semicírculo a partir do barco.",
                        "The process begins at dawn, when the fishermen take the xávega boat out to sea. The net, which can be hundreds of meters long, is cast in a semicircle from the boat."
                      )}
                    </p>
                    <p>
                      {t(
                        "De volta à praia, dois grupos puxam as extremidades da rede em direção à areia, num esforço conjunto que pode demorar várias horas. O peixe capturado — sardinhas, cavalas, carapaus e outras espécies — é depois dividido entre os pescadores e vendido diretamente na praia à comunidade local.",
                        "Back on the beach, two groups pull the ends of the net towards the sand, in a joint effort that can take several hours. The caught fish — sardines, mackerel, horse mackerel and other species — is then divided among the fishermen and sold directly on the beach to the local community."
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </ScrollReveal>

          {/* Divider */}
          <div className="border-t border-ocean-200 my-8" />

          {/* Steps infographic */}
          <ScrollReveal>
            <div className="mb-16">
              <h3 className="font-display text-2xl font-bold text-ocean-800 mb-8 text-center">
                {t("As Etapas da Arte Xávega", "The Stages of Arte Xávega")}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    icon: Sun,
                    step: "1",
                    title: t("Madrugada", "Dawn"),
                    desc: t(
                      "Os pescadores preparam o barco e a rede ao nascer do sol",
                      "Fishermen prepare the boat and net at sunrise"
                    ),
                  },
                  {
                    icon: Waves,
                    step: "2",
                    title: t("O Lanço", "The Cast"),
                    desc: t(
                      "A rede é lançada ao mar em semicírculo pelo barco",
                      "The net is cast into the sea in a semicircle by the boat"
                    ),
                  },
                  {
                    icon: Users,
                    step: "3",
                    title: t("Alar", "The Pull"),
                    desc: t(
                      "A comunidade puxa a rede para terra em conjunto",
                      "The community pulls the net ashore together"
                    ),
                  },
                  {
                    icon: Fish,
                    step: "4",
                    title: t("A Partilha", "The Share"),
                    desc: t(
                      "O peixe é dividido e vendido na praia",
                      "The fish is divided and sold on the beach"
                    ),
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="bg-white rounded-2xl p-6 border border-ocean-100 shadow-sm text-center"
                  >
                    <div className="w-12 h-12 rounded-full bg-ocean-50 flex items-center justify-center mx-auto mb-3">
                      <item.icon size={22} className="text-ocean-600" />
                    </div>
                    <span className="text-xs font-bold text-seafoam-500 uppercase tracking-widest">
                      {t("Etapa", "Step")} {item.step}
                    </span>
                    <h4 className="font-display text-lg font-bold text-ocean-800 mt-1 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-sm text-driftwood">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Divider */}
          <div className="border-t border-ocean-200 my-8" />

          {/* Article 3 - Local commerce */}
          <ScrollReveal>
            <article className="mb-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Users size={18} className="text-seafoam-500" />
                    <p className="text-xs font-semibold text-seafoam-500 uppercase tracking-widest">
                      {t("Comércio Local", "Local Commerce")}
                    </p>
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-ocean-800 mb-4">
                    {t("O Papel no Comércio Local", "The Role in Local Commerce")}
                  </h3>
                  <div className="space-y-4 text-driftwood leading-relaxed">
                    <p>
                      {t(
                        "A Arte Xávega sempre foi mais do que uma simples técnica de pesca — é o motor económico de muitas comunidades costeiras portuguesas. O peixe fresco é vendido diretamente na praia aos moradores locais e comerciantes, garantindo um circuito curto entre o mar e a mesa.",
                        "Arte Xávega has always been more than a simple fishing technique — it is the economic engine of many Portuguese coastal communities. Fresh fish is sold directly on the beach to local residents and traders, ensuring a short circuit from sea to table."
                      )}
                    </p>
                    <p>
                      {t(
                        "Este modelo de comércio direto preserva a frescura do peixe, apoia a economia local e mantém viva uma relação de confiança entre pescadores e consumidores que perdura há gerações. As conservas artesanais, como as da Concha do Mar, nascem desta mesma tradição — levando o sabor autêntico do peixe da Fonte Da Telha, feito de maneira caseira, a todo o país.",
                        "This direct commerce model preserves fish freshness, supports the local economy and keeps alive a trust relationship between fishermen and consumers that has endured for generations. Artisanal preserves, like those from Concha do Mar, are born from this same tradition — bringing the authentic homemade taste of Fonte Da Telha fish to the whole country."
                      )}
                    </p>
                  </div>
                </div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl"
                >
                  <Image
                    src="/img/Por%20do%20sol%204.jpeg"
                    alt={t("Comércio local de peixe", "Local fish commerce")}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </motion.div>
              </div>
            </article>
          </ScrollReveal>

          {/* Quote / highlight */}
          <ScrollReveal>
            <div className="bg-ocean-800 text-white rounded-3xl p-10 md:p-14 text-center mb-16">
              <blockquote className="font-display text-2xl md:text-3xl font-bold italic mb-4 leading-snug">
                &ldquo;{t(
                  "A Arte Xávega não é apenas pesca — é a alma das nossas comunidades costeiras.",
                  "Arte Xávega is not just fishing — it is the soul of our coastal communities."
                )}&rdquo;
              </blockquote>
              <p className="text-ocean-200 text-sm uppercase tracking-widest">
                {t("Tradição Portuguesa", "Portuguese Tradition")}
              </p>
            </div>
          </ScrollReveal>

          {/* Photo gallery */}
          <ScrollReveal>
            <div className="mb-16">
              <h3 className="font-display text-2xl font-bold text-ocean-800 mb-6 text-center">
                {t("Galeria", "Gallery")}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { src: "/img/por%20do%20sol%201.jpeg", alt: t("Pôr do sol 1", "Sunset 1") },
                  { src: "/img/por%20do%20sol%202.jpeg", alt: t("Pôr do sol 2", "Sunset 2") },
                  { src: "/img/por%20do%20sol%203.jpeg", alt: t("Pôr do sol 3", "Sunset 3") },
                  { src: "/img/Por%20do%20sol%204.jpeg", alt: t("Pôr do sol 4", "Sunset 4") },
                ].map((img, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.03 }}
                    className="relative aspect-square rounded-xl overflow-hidden shadow-md"
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* CTA */}
          <ScrollReveal>
            <div className="bg-ocean-50/50 rounded-3xl p-10 border border-ocean-100 text-center">
              <h3 className="font-display text-2xl font-bold text-ocean-800 mb-3">
                {t("Prove o Sabor da Tradição", "Taste the Flavor of Tradition")}
              </h3>
              <p className="text-driftwood mb-6 max-w-lg mx-auto">
                {t(
                  "As nossas conservas artesanais são feitas de maneira caseira com peixe fresco da Fonte Da Telha. Encomende já!",
                  "Our artisanal preserves are homemade with fresh fish from Fonte Da Telha. Order now!"
                )}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/colecoes/conservas-peixe">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="px-6 py-3 bg-ocean-800 text-white rounded-full font-medium hover:bg-ocean-700 transition"
                  >
                    {t("Ver Produtos", "View Products")}
                  </motion.button>
                </Link>
                <Link href="/contactos">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="px-6 py-3 bg-white text-ocean-800 rounded-full font-medium border border-ocean-200 hover:bg-ocean-50 transition"
                  >
                    {t("Contactar para Encomendar", "Contact to Order")}
                  </motion.button>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </>
  );
}
