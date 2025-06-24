"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Menu, X } from 'lucide-react'


const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFolder, setOpenFolder] = useState<string | null>(null);

  return (
    <section className="relative h-screen  flex items-center justify-center">

      {/* Background Image */}
      <Image src="/bg.png" alt="Background" fill className="object-cover" priority />

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
          
          {/* Menu desktop */}
          <div className="hidden md:flex gap-6">
            <Link href="/" className="text-white hover:text-green-400 transition-colors">
              Accueil
            </Link>
            <Link href="/about" className="text-white hover:text-green-400 transition-colors">
              À propos
            </Link>
            <Link href="/projects" className="text-white hover:text-green-400 transition-colors">
              Projets
            </Link>
            <Link href="/contact" className="text-white hover:text-green-400 transition-colors">
              Contact
            </Link>
          </div>

          {/* Menu mobile */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menu mobile dropdown */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur-sm p-6">
            <div className="flex flex-col gap-4">
              <Link href="/" className="text-white hover:text-smolae-gray-light transition-colors">
                Accueil
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                À propos
              </Link>
              <Link href="/projects" className="text-gray-300 hover:text-white transition-colors">
                Projets
              </Link>
              <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>

    
        {/* image */}
        <div className="absolute bottom-1 left-50 z-10">
        <Image
          src="/nature.jpg"
          alt="Logo"
          width={250}
          height={300}
          className="rounded-2xl shadow-lg"
        />
      </div>
      {/* image */}
        <div className="absolute top-1 left-70 z-10">
        <Image
          src="/girl.jpg"
          alt="Logo"
          width={250}
          height={300}
          className="rounded-2xl shadow-lg"
        />
    </div>

        {/* trait au dessus de smolae */}
        <div className="absolute top-25 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-px bg-green-100 opacity-70 z-20"></div>
       
       {/* // Folder section bottom right */}
<div className="absolute bottom-6 right-6 z-30 flex gap-4">
  {['À propos', 'Projets', 'Contact'].map((folder) => (
    <button
      key={folder}
      onClick={() => setOpenFolder(folder)}
      className="text-center p-2 bg-yellow-100 hover:bg-yellow-200 rounded-md shadow-md transition"
    >
      <div className="text-4xl">📁</div>
      <p className="text-xs text-black">{folder}</p>
    </button>
  ))}
</div>

      {/* Contenu principal */}
      <div className="relative z-20 text-center text-white">
        
        <h1 className="text-6xl font-bold mb-4">SMOLAE</h1>
        <h2 className="text-4xl font-light">PORTFOLIO</h2>
      </div>

      {/* Année */}
        <div className="absolute left-12 top-1/2 transform -translate-y-1/2 z-20 flex flex-col items-center">
            <div className="w-px h-32 bg-green-100 opacity-70"></div>
            <div className="-rotate-90 mt-8">
                <p className="text-xl text-white font-light tracking-widest">2025</p>
            </div>
        </div>
        {openFolder && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 animate-fadeIn">
          <div className="bg-white p-6 rounded-lg w-[90%] max-w-md shadow-lg">
            <h2 className="text-xl font-bold mb-4">{openFolder}</h2>
            <p className="text-gray-700">
              Contenu de la section <strong>{openFolder}</strong> (tu peux mettre du texte, une image, ou un lien ici).
            </p>
            <button
              onClick={() => setOpenFolder(null)}
              className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Fermer
            </button>
          </div>
      </div>
  )}

    </section>
    



  )
}

export default Hero
