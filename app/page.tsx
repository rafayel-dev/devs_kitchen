import { CTA } from "@/components/CTA";
import { PageTransition } from "@/components/PageTransition";
import { AboutTeaser } from "@/components/home/AboutTeaser";
import { Global } from "@/components/home/Global";
import { Hero } from "@/components/home/Hero";
import { Principles } from "@/components/home/Principles";
import { Process } from "@/components/home/Process";
import { ProductsSection } from "@/components/home/ProductsSection";
import { Technology } from "@/components/home/Technology";
import { WhatWeMake } from "@/components/home/WhatWeMake";

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <WhatWeMake />
      <ProductsSection />
      <Process />
      <AboutTeaser />
      <Principles />
      <Technology />
      <Global />
      <CTA />
    </PageTransition>
  );
}
