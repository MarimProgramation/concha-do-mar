"use client";

import Image from "next/image";
import { Instagram } from "lucide-react";
import { instagramImages } from "@/lib/data";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations/ScrollReveal";
import { useLanguage } from "@/hooks/useLanguage";

export function InstagramSection() {
  const { t } = useLanguage();

  return (
    <section className="py-24 px-6 lg:px-8 bg-gradient-to-b from-ivory to-pearl">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <ScrollReveal className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-shell-500 mb-4">
            <Instagram size={22} />
            <span className="text-sm font-semibold uppercase tracking-widest">
              @conchadomar
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-ocean-800 mb-4">
            {t("Vida à Beira-Mar", "Life by the Shore")}
          </h2>
          <p className="mx-auto max-w-xl text-driftwood text-lg">
            {t(
              "Siga a nossa jornada e partilhe os seus momentos Concha do Mar com #ConchaDoMar",
              "Follow our journey and share your Concha do Mar moments with #ConchaDoMar"
            )}
          </p>
        </ScrollReveal>

        {/* Instagram grid */}
        <StaggerContainer
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3"
          staggerDelay={0.08}
        >
          {instagramImages.map((image, i) => (
            <StaggerItem key={i}>
              <div className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer">
                <Image
                  src={image}
                  alt={`Instagram post ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 16vw"
                />
                <div className="absolute inset-0 bg-ocean-800/0 group-hover:bg-ocean-800/40 transition-all duration-500 flex items-center justify-center">
                  <Instagram
                    size={28}
                    className="text-white opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-500"
                  />
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
