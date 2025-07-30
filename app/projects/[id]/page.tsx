"use client"
import { use } from "react"
import Image from "next/image"
import { useState } from "react"
import { FadeInUp } from "@/components/ScrollAnimations"

const projects = [
  {
    id: 1,
    title: "Plateforme jeu vidéo",
    description: "Plateforme de gestion pour un jeu vidéo (FiveM)",
    tech: ["HTML", "Tailwind", "MongoDB"],
    image: "/yllusion2.png",
    content:
      "Ce projet est une plateforme de gestion pour un jeu vidéo basé sur FiveM, permettant aux utilisateurs de gérer divers aspects du jeu pour faciliter leur expérience RP.",
  },
  {
    id: 2,
    title: "Learning Lua",
    description: "Site de partage de ressources pour apprendre le Lua",
    tech: ["HTML", "Tailwind", "JavaScript"],
    image: "/learninglua.png",
    content:
      "Un site dédié à l'apprentissage du langage de programmation Lua, offrant des ressources, tutoriels et exemples de code pour aider les développeurs à maîtriser ce langage. collaboration avec une team, je me suis occupé du front de la page d'accueil avec la possibilité de changer la langue en Anglais ou Français.",
  },
  {
    id: 3,
    title: "Entreprise de Peinture et Rénovation",
    description: "Site vitrine pour une entreprise de peinture et rénovation",
    tech: ["Tailwind", "Html", "JavaScript"],
    image: "/efpeinture.png",
    content:
      "Un site vitrine conçu pour présenter les services d'une entreprise spécialisée dans la peinture et la rénovation, mettant en avant ses réalisations et son expertise.",
  },
  {
    id: 4,
    title: "Site d'Hébergement",
    description: "Site vitrine pour une entreprise d'hébergement web et de services numériques",
    tech: ["Tailwind", "Php", "JavaScript", "MySQL"],
    image: "/fullpagehost.png",
    content:
      "Un site vitrine pour une entreprise d'hébergement web, offrant des services numériques variés, avec une interface utilisateur moderne et intuitive. Possibilité de gestion des clients, des paiements et des tickets de support. La page d'accueil est disponible en Anglais ou Francais.",
  },
  {
    id: 5,
    title: "Loading Screen pour FiveM",
    description: "Écran de chargement personnalisé pour un serveur FiveM",
    tech: ["Tailwind", "Lua"],
    image: "/loading.png",
    content:
      "Un écran de chargement personnalisé développé pour un serveur FiveM, améliorant l'expérience utilisateur avec un design attrayant. L'image a été faites en Tailwind et le code en Lua.",
  },
  {
    id: 6,
    title: "UI inventaire pour FiveM",
    description: "Interface utilisateur pour un système d'inventaire dans un serveur FiveM",
    tech: ["SCSS", "Lua"],
    image: "/inv.png",
    content:
      "Une interface utilisateur développée pour gérer l'inventaire dans un serveur FiveM, offrant une expérience utilisateur fluide et intuitive. Le design à été imaginé pour un serveur sur le theme futuriste avec des ton rouge, rose et bleu. le code est 100% en scss et lua.",
  },
]

interface PageProps {
  params: Promise<{ id: string }>
}

export default function ProjectPage({ params }: PageProps) {
  const [isOpen, setIsOpen] = useState(false)

  // Utilisation correcte de use() pour déballer la Promise
  const { id } = use(params)

  // Debug params
  console.log("params.id =", id)

  const projectId = Number(id)

  if (isNaN(projectId)) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white bg-stone-900">
        <p>Paramètre id invalide : {String(id)}</p>
      </div>
    )
  }

  const project = projects.find((p) => p.id === projectId)

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white bg-stone-900">
        <p>Projet non trouvé pour l'id : {projectId}</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen px-18 py-10 text-white bg-stone-900">
      <FadeInUp>
        <h1 className="text-5xl font-bold mb-12 leading-relaxed">{project.title}</h1>
      </FadeInUp>

      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* image */}
        <FadeInUp>
          <div
            className="flex-shrink-0 w-[400px] h-[200px] overflow-hidden rounded cursor-zoom-in"
            onClick={() => setIsOpen(true)}
            aria-label={`Voir l'image complète de ${project.title}`}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter") setIsOpen(true)
            }}
          >
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              width={400}
              height={300}
              className="object-cover"
              priority
            />
          </div>
        </FadeInUp>

        {/* texte */}
        <FadeInUp>
          <div className="flex flex-col text-center md:text-left">
            <p className="mb-2 text-xl">{project.description}</p>
            <p className="mb-2 text-sm text-gray-400">Langages utilisés : {project.tech.join(", ")}</p>
            <p className="leading-relaxed text-xl">{project.content}</p>
          </div>
        </FadeInUp>
      </div>

      {/* Modale d'image complète */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex justify-center items-start p-6 overflow-auto"
          onClick={() => setIsOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Image agrandie"
        >
          <div
            className="relative max-w-full max-h-full"
            onClick={(e) => e.stopPropagation()} // empêcher fermeture au clic sur l'image
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-white text-3xl font-bold bg-black bg-opacity-50 rounded px-3 py-1 hover:bg-opacity-80 transition"
              aria-label="Fermer la modale"
            >
              ×
            </button>
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              width={1000}
              height={1500}
              className="object-contain max-w-full h-auto"
              priority
            />
          </div>
        </div>
      )}
    </div>
  )
}
