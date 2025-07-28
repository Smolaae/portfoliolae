
import { Mail, MapPin, Github, Linkedin } from "lucide-react"
import {
  FadeInUp,
  FadeInLeft,
  FadeInRight,
  ScaleIn,
  RotateIn,
  TypewriterText,
  ParallaxSection,
  CounterAnimation,
} from "./ScrollAnimations"



export default function Contact() {
  return (
    <div className="min-h-screen bg-black backdrop-blur-sm text-white">
      

      {/* Contenu principal */}
      <div className="pt-24 px-8 max-w-4xl mx-auto">
        {/* Trait horizontal décoratif */}
        <div className="h-px w-32 bg-gradient-to-r from-transparent via-green-200 to-transparent opacity-70 mb-8"></div>
        <FadeInUp>
        <h1 className="text-5xl font-bold mb-12 leading-relaxed">CONTACT</h1>
        </FadeInUp>

        {/* Section de contact */}
        <div className="flex justify-center  gap-12">
          {/* Informations de contact */}
          <div>
            <FadeInLeft>
              <h2 className="text-2xl font-semibold mb-6">Parlons de votre projet</h2>
              <p className="text-gray-300 mb-8 ">
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
            </FadeInLeft>
            {/* Réseaux sociaux */}
            <div className="flex gap-4 mt-8">
              <a href="https://github.com/Smolaae" className="p-3 bg-gray-800 rounded-full hover:bg-green-900 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/laetitiadoss/" className="p-3 bg-gray-800 rounded-full hover:bg-green-900 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-emerald-950/30 to-transparent pointer-events-none" />
     
            </div>
          </div>
        </div>
        
      </div>
      
    </div>
  )
}
