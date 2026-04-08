import { Hero } from "@/components/sections/Hero";
import { FeaturedProducts } from "@/components/sections/FeaturedProducts";
import { Categories } from "@/components/sections/Categories";
import { BrandStory } from "@/components/sections/BrandStory";
import { ParallaxBanner } from "@/components/sections/ParallaxBanner";

import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <Categories />
      <BrandStory />
      <ParallaxBanner />

      <FAQ />
      <Footer />
    </>
  );
}
