'use client'

import { firstName, lastName } from "@/library/const";
import Image from "next/image";
import { BlogHero, Footer, HomeHero, InvestmentsHero, ProgrammerHero, AppContainer } from "./components";
import { useRef } from "react";

export default function Home() {

  const containerRef = useRef<HTMLDivElement>(null);


  return (
    <AppContainer>
      <HomeHero />
      <InvestmentsHero />  
      <ProgrammerHero />  
      <BlogHero />
    </AppContainer>
  );
}
