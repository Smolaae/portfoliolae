import Link from "next/link"
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react"



export default function Contact() {
  return (
    <div className="min-h-screen bg-black text-white">
      

      {/* Contenu principal */}
      <div className="pt-24 px-8 max-w-4xl mx-auto">
        {/* Trait horizontal décoratif */}
        <div className="h-px w-32 bg-gradient-to-r from-transparent via-green-200 to-transparent opacity-70 mb-8"></div>

        <h1 className="text-5xl font-bold mb-12">CONTACT</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Informations de contact */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Parlons de votre projet</h2>
            <p className="text-gray-300 mb-8">
              Je suis toujours intéressée par de nouveaux défis et collaborations. N'hésitez pas à me contacter !
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-green-200" />
                <span>laedev@icloud.com</span>
              </div>
              
              <div className="flex items-center gap-4">
                <MapPin className="w-5 h-5 text-green-200" />
                <span>France, Paris</span>
              </div>
            </div>

            {/* Réseaux sociaux */}
            <div className="flex gap-4 mt-8">
              <a href="https://github.com/Smolaae" className="p-3 bg-gray-800 rounded-full hover:bg-green-900 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/laetitiadoss/" className="p-3 bg-gray-800 rounded-full hover:bg-green-900 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Formulaire de contact */}
          <div>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-green-400 focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-green-400 focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-green-400 focus:outline-none resize-none"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full py-3 bg-smolae-green hover:bg-smolae-green-dark rounded-lg font-medium transition-colors"
              >
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
