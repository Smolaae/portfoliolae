import React from "react";
import {
  FadeInUp,
  FadeInLeft,
  FadeInRight,
} from "./ScrollAnimations"


export default function About() {
  return (
    <div className="min-h-screen bg-stone-950 text-white">
      <div className="flex min-h-screen items-center justify-center px-8">
        <div className="max-w-4xl">
          <FadeInLeft>
          <h1 className="text-4xl font-bold mb-12 leading-relaxed">À PROPOS</h1>

          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p>
              Je m'appelle Laetitia, aussi connue sous le nom de Lae ou Smolae, fondatrice de mon entreprise 'Smolae'.</p>

            <p>
            Développeuse front-end freelance, je conçois et intègre des interfaces web modernes, claires et accessibles pour les indépendants, startups et petites entreprises.</p>

            <p> J’interviens sur des projets de création, refonte ou amélioration de sites et applications web, avec une attention particulière portée à l’expérience utilisateur, à la cohérence visuelle et à la performance.</p>

            <p> Ce que je peux vous apporter :
            • Intégration de maquettes (HTML, CSS, Tailwind CSS)
            • Développement front-end en JavaScript / React
            • Refonte et optimisation d’interfaces existantes
            • Amélioration de l’ergonomie et de la lisibilité
            </p>
            <p>
            J’accorde une grande importance à la communication, à la compréhension des besoins et au respect des délais, afin de proposer des solutions simples, efficaces et adaptées à chaque projet.

            Technologies principales : HTML, CSS, Tailwind CSS, JavaScript, React.

            Disponible pour des missions ponctuelles ou des collaborations plus longues.</p>

          </div>
          </FadeInLeft>
          <FadeInRight>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-smolae-green-light leading-relaxed">Développement</h3>
                <p className="text-sm text-gray-400">React, Node.js, Next.js, TypeScript, Php</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-smolae-green-light leading-relaxed">Design</h3>
                <p className="text-sm text-gray-400">UI/UX, Tailwind CSS, Responsive Design</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-smolae-green-light leading-relaxed">Outils</h3>
                <p className="text-sm text-gray-400">Git, Figma, Canva, Adobe Suite</p>
              </div>
            </div>
          </FadeInRight>
        </div>
      </div>
    </div>
    );
  }

