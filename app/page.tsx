"use client"

import About from "@/components/about";
import Hero from "@/components/hero";
import Navigation from "@/components/navigation"
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navigation />
      <Hero />
      <About />
    </div>
  );
}
