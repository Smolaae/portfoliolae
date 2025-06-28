import Link from "next/link"
import Image from "next/image"
import {
  FadeInUp,
  FadeInLeft,
} from "./ScrollAnimations"



export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Plateforme jeu vidéo",
      description: "Plateforme de gestion pour un jeu vidéo (FiveM)",
      tech: ["HTML", "Tailwind", "MongoDB"],
      image: "/yllusion2.png?height=200&width=400",
      
    },
    {
      id: 2,
      title: "Learning Lua",
      description: "Site de partage de ressources pour apprendre le Lua",
      tech: ["HTML", "Tailwind", "JavaScript"],
      image: "/learninglua.png?height=300&width=400",
      link : "https://learn.sayzx.fr/",
    },
    {
      id: 3,
      title: "Entreprise de Peinture et Rénovation",
      description: "Site vitrine pour une entreprise de peinture et rénovation",
      tech: ["Tailwind", "Html", "JavaScript"],
      image: "/ef.png?height=300&width=400",
      link: "https://www.ef-peinture.fr/",
    },
    {
      id: 4,
      title: "Site d'Hébergement",
      description: "Site vitrine pour une entreprise d'hébergement web et de services numériques",
      tech: ["Tailwind", "Php", "JavaScript", "MySQL"],
      image: "/host.png?height=300&width=400",
    },
    {
      id: 5,
      title: "Loading Screen pour FiveM",
      description: "Écran de chargement personnalisé pour un serveur FiveM",
      tech: ["Tailwind", "Lua"],
      image: "/loading.png?height=300&width=400",
    },
    {
      id: 6,
      title: "UI inventaire pour FiveM",
      description: "Interface utilisateur pour un système d'inventaire dans un serveur FiveM",
      tech: ["SCSS", "Lua"],
      image: "/inv.png?height=300&width=400",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">

      {/* Contenu principal */}
      <div className="pt-24 px-8 max-w-6xl mx-auto">
        <FadeInUp>
          <h1 className="text-5xl font-bold mb-12 leading-relaxed">MES PROJETS</h1>
        </FadeInUp>
        {/* Grille de projets */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <FadeInLeft key={project.id}>
            <Link href={project.link || "#"} target="_blank" rel="noopener noreferrer" className="no-underline">
              <div
                className="bg-smolae-dark rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="relative h-48">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-smolae-green-dark text-smolae-green-light text-sm rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          </FadeInLeft>
        ))}
      </div>
        </div>
      </div>
  )
}
