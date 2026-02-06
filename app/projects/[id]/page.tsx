"use client"
import { use } from "react"
import Image from "next/image"
import { useState } from "react"
import { FadeInUp } from "@/components/ScrollAnimations"

const projects = [
  {
    id: 1,
    title: "Portfolio Mannequin",
    description: "Portfolio pour un mannequin professionnel",
    tech: ["Tailwind", "Next.js", "JavaScript"],
    image: "/mannequin.png",
    content:
      "Ce projet est un portfolio pour un mannequin professionnel, conçu avec Next.js et Tailwind CSS pour offrir une expérience utilisateur moderne et responsive. ",
  },
  {
    id: 2,
    title: "Plateforme jeu vidéo",
    description: "Plateforme de gestion pour un jeu vidéo (FiveM)",
    tech: ["HTML", "Tailwind", "MongoDB"],
    image: "/yllusion2.png",
    content:
      "Un site dédié à la gestion d'un serveur de jeu vidéo FiveM, permettant aux administrateurs de gérer les joueurs, les permissions et les ressources du serveur. Le projet a été réalisé en collaboration avec une équipe, où j'ai principalement travaillé sur le front-end du site ainsi que le dashboard client et administrateur. le site a été développé en HTML, Tailwind CSS et MongoDB pour la gestion des données.",
  },
  {
    id: 3,
    title: "EF PEINTURE",
    description: "Site vitrine pour une entreprise de peinture et rénovation",
    tech: ["Tailwind", "Html", "JavaScript"],
    image: "/efpeinture.png",
    content:
      "Un site vitrine conçu pour présenter les services d'une entreprise spécialisée dans la peinture et la rénovation, mettant en avant ses réalisations et son expertise. Le design a été pensé pour refléter le professionnalisme et la créativité de l'entreprise, avec une navigation intuitive et un contenu visuellement attrayant mais neutre. page réalisé en Html, TailwindCSS et JavaScript.",
  },
  {
    id: 4,
    title: "Learning Lua",
    description: "Site de partage de ressources pour apprendre le Lua",
    tech: ["Tailwind", "Php", "JavaScript"],
    image: "/learninglua.png",
    content:
      "Un site dédié à l'apprentissage du langage de programmation Lua, offrant des ressources, tutoriels et exemples de code pour aider les développeurs à maîtriser ce langage. collaboration avec une team, je me suis occupé du front de la page d'accueil avec la possibilité de changer la langue en Anglais ou Français. Le site a été développé en Tailwind CSS pour le design, PHP pour la gestion du contenu dynamique et JavaScript pour les interactions utilisateur.",
  },
  {
    id: 5,
    title: "Site d'Hébergement",
    description: "Site vitrine pour une entreprise d'hébergement web et de services numériques",
    tech: ["Tailwind", "Php", "JavaScript", "MySQL"],
    image: "/host.png",
    content:
      "Un site vitrine pour une entreprise d'hébergement web et de services numériques, conçu pour présenter les services offerts de manière claire et professionnelle. Le site a été développé en Tailwind CSS, PHP pour la gestion du contenu dynamique et JavaScript pour les interactions utilisateur. Il met en avant les différentes offres d'hébergement, les services associés et les témoignages clients, avec une navigation intuitive et un design moderne. Le projet a été réalisé en collaboration avec une équipe, où j'ai principalement travaillé sur le front-end du site ainsi que le dashboard client et administrateur.",
  },
  {
    id: 6,
    title: "UI INVENTAIRE",
    description: "Interface utilisateur pour un système d'inventaire dans un serveur FiveM",
    tech: ["SCSS", "Lua"],
    image: "/inv.png",
    content:
      "Une interface utilisateur développée pour gérer l'inventaire dans un serveur FiveM, offrant une expérience utilisateur fluide et intuitive. Le design a été imaginé pour un serveur sur le thème futuriste avec des tons rouge, rose et bleu. Le code est 100% en scss et lua.",
  },
  {
    id: 7,
    title: "Loading Screen pour FiveM",
    description: "Écran de chargement personnalisé pour un serveur FiveM",
    tech: ["Tailwind", "Lua"],
    image: "/loading.png",
    content:
      "Un écran de chargement personnalisé conçu pour un serveur FiveM, offrant une expérience visuelle attrayante pendant le chargement du jeu. Le design a été pensé pour s'intégrer parfaitement à l'esthétique du serveur, avec des animations fluides et des éléments graphiques captivants. Le code est 100% en Tailwind CSS et Lua.",
  },
]

// ✅ Cette interface est OBLIGATOIRE
interface PageProps {
  params: Promise<{ id: string }>
}

// ✅   signature de fonction est OBLIGATOIRE
export default function ProjectPage({ params }: PageProps) {
  const [isOpen, setIsOpen] = useState(false)

  // ✅ Cette ligne est OBLIGATOIRE pour Next.js 15
  const { id } = use(params)

  // Debug params
  console.log("params.id =", id)

  const projectId = Number(id)

  if (isNaN(projectId)) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white bg-stone-950">
        <p>Paramètre id invalide : {String(id)}</p>
      </div>
    )
  }

  const project = projects.find((p) => p.id === projectId)

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white bg-stone-950">
        <p>Projet non trouvé pour l'id : {projectId}</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen px-18 py-10 text-white bg-stone-950 backdrop-blur-sm">
      <FadeInUp>
        <h1 className="text-4xl font-semibold mb-12 leading-relaxed font-sans">{project.title}</h1>
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
          <div className="flex flex-col text-center px-10 md:text-left">
            <p className="mb-2 text-2xl font-sans font-semibold">{project.description}</p>
            <p className="mb-2 text-sm text-neutral-500">Langages utilisés : {project.tech.join(", ")}</p>
            <p className="leading-relaxed text-base font-sans">{project.content}</p>
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
