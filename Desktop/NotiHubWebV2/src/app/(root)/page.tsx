"use client";

import { BentoGridThirdDemo } from "@/components/BentoHome";
import Features from "@/components/Features";
import { HeroParallaxDemo } from "@/components/Hero";
import { InfiniteMovingCardsDemo } from "@/components/InfiniteMovingTestimonials";
import { PricingCard } from "@/components/PricingCard";
import { Separator } from "@/components/shadcn/ui/Separator";
import UpdateEntries from "@/components/UpdateEntries";

import Navbar from "@/components/Navbar";

const HomePage = () => {
  return (
    <section className="w-full mx-auto">
      <Navbar />
      <HeroParallaxDemo />

      <div className="mx-auto pb-20">
        <Features />
      </div>

      <Separator />
      <div className="h-2" />
      <Separator />

      <div className="bg-neutral-50 dark:bg-neutral-900">
        <div className="py-40">
          <UpdateEntries />
        </div>

        <div className="mx-auto pb-20">
          <PricingCard />
        </div>
      </div>

      <div className="pb-32">
        <InfiniteMovingCardsDemo />
      </div>
    </section>
  );
};
export default HomePage;
