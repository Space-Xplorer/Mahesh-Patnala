import { useEffect, useRef } from "react"
import { Download, MessageCircle, ArrowRight, Code, Sparkles } from "lucide-react"
import Laptop3D from "../components/Laptop3D"

const Hero = () => {
  const heroRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        const x = ((e.clientX - rect.left) / rect.width) * 100
        const y = ((e.clientY - rect.top) / rect.height) * 100

        heroRef.current.style.setProperty("--mouse-x", `${x}%`)
        heroRef.current.style.setProperty("--mouse-y", `${y}%`)
      }
    }

    const hero = heroRef.current
    if (hero) {
      hero.addEventListener("mousemove", handleMouseMove)
      return () => hero.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  return (
    <section
      id="hero"
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden parallax-bg"
    >
      {/* Subtle Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-500/3 to-blue-500/3 rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center max-w-7xl">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-bold gradient-text leading-tight">
              Maheshwar
              <br />
              Patnala
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-lg leading-relaxed">
              Full Stack Developer crafting AI-powered solutions that bridge innovation and impact
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/Patnala Maheshwar-VNRVJIET.pdf"
              download
              className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent/80 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Download className="w-5 h-5" />
              Download Résumé
            </a>
            <button
              onClick={scrollToContact}
              className="inline-flex items-center justify-center gap-2 border-2 border-accent text-accent hover:bg-accent hover:text-white px-8 py-4 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              Let's Talk
            </button>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="w-80 h-80 lg:w-96 lg:h-96">
            <Laptop3D />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
