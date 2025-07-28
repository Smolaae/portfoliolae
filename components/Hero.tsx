"use client"

import Image from "next/image"
import { useState } from "react"
import {
  FadeInUp,
  TypewriterText,
 
} from "./ScrollAnimations"


const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-black via-emerald-950/30 to-stone-950/30 ">

    

      {/* Overlay pour la lisibilité */}
      <div className="absolute inset-0  z-10"></div>
        {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-30 p-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Logo"
              width={50}
              height={40}
              className="rounded-full"
            />
            <span className="text-white font-bold text-xl"></span>
          </div>
        </div>
      </nav>



        {/* trait au dessus de smolae */}
        <div className="hidden lg:block absolute top-25 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-px bg-green-100 opacity-70 z-20"></div>


      {/* Contenu principal */}
      <div className="relative z-20 text-center text-white">
        <FadeInUp>
        <h1 className="lg:text-6xl md:text-4xl sm:text-4xl font-bold mb-4"><TypewriterText text="SMOLAE" delay={2} /></h1>
        </FadeInUp>
        <FadeInUp delay={0.3}>
          <h2 className="lg:text-4xl md:text-4xl sm:text-4xl font-light"><TypewriterText text="PORTFOLIO" delay={2} /></h2>
        </FadeInUp>
      </div>

      {/* Année */}
        <div className="absolute left-12 top-1/2 transform -translate-y-1/2 z-20 flex flex-col items-center">
            <div className="w-px h-32 bg-green-100 opacity-70"></div>
            <div className="-rotate-90 mt-8">
                <p className="text-xl text-white font-light tracking-widest">2025</p>
            </div>
        </div>
     
    </section>
  )
}

export default Hero
