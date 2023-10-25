"use client";

import { Hero } from "@/common/components/hero/hero.component";
import About from "../about/about.component";


function Dashboard() {
  const bg = "url('./img/home.png')";
  return(
    <>
      <Hero 
        bg={bg} 
        heading="Ensuring Peace of Mind in Luxury Shipping" 
        linkBtn="Get a Quote"
        title="- HOME"
        desc="Tailored insurance solutions for discerning businesses and collectors."
      />
      <About />
    </>
  )
}

export default Dashboard;
