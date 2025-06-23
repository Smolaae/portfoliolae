import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-white hover:text-green-400 transition-colors">
            ← Accueil
          </Link>
          <div className="flex gap-6">
            <Link href="/about" className="text-gray-400 hover:text-green-400 transition-colors">
              À propos
            </Link>
            <Link href="/projects" className="text-gray-400 hover:text-green-400 transition-colors">
              Projets
            </Link>
            <Link href="/contact" className="text-gray-400 hover:text-green-400 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex min-h-screen items-center justify-center px-8">
        <div className="max-w-4xl">
          

          <h1 className="text-4xl font-bold mb-12 ">À PROPOS</h1>

          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p>
              Je m'appelle Laetitia, aussi connue sous le nom de Lae ou Smolae, fondatrice de mon entreprise 'Smolae' où je combine deux passions : le développement web et l’assistanat administratif.</p>

            <p>
             Diplômée en tant que Lead Développeuse Web, j’ai acquis de l’expérience à travers divers projets techniques et missions freelance. En parallèle, j’ai également développé mes compétences en gestion administrative, ce qui me permet d’apporter rigueur, organisation et polyvalence à chaque collaboration. J’aime autant coder une interface qu’organiser un planning ou gérer des dossiers — deux mondes différents, mais complémentaires, dans lesquels je m’épanouis pleinement.</p>

          </div>

          {/* Skills or additional info could go here */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-green-700">Développement</h3>
              <p className="text-sm text-gray-400">React, Node.js, Next.js, TypeScript, Php</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-green-700">Design</h3>
              <p className="text-sm text-gray-400">UI/UX, Tailwind CSS, Responsive Design</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-green-700">Outils</h3>
              <p className="text-sm text-gray-400">Git, Figma, Canva, Adobe Suite</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }

