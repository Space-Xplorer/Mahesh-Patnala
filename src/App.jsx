"use client"

/* © 2025 Maheshwar Patnala */
import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import Hero from "./sections/Hero"
import Projects from "./sections/Projects"
import Skills from "./sections/Skills"
import Achievements from "./sections/Achievements"
import AIEdge from "./sections/AIEdge"
import Timeline from "./sections/Timeline"
import Contact from "./sections/Contact"

function App() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    // Set initial theme
    document.documentElement.classList.add("dark")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold: 0.1 },
    )

    const sections = document.querySelectorAll(".section-fade-up")
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
    if (isDark) {
      document.documentElement.classList.remove("dark")
      document.body.style.backgroundColor = "#ffffff"
      document.body.style.color = "#000000"
    } else {
      document.documentElement.classList.add("dark")
      document.body.style.backgroundColor = "#0a0a0a"
      document.body.style.color = "#ffffff"
    }
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  return (
    <div className="min-h-screen bg-white dark:bg-dark-bg/60 text-black dark:text-white transition-colors duration-300">
      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        className="fixed top-6 right-6 z-50 p-3 bg-gray-100 dark:bg-dark-surface border border-gray-300 dark:border-dark-border rounded-full hover:bg-accent/20 transition-colors shadow-lg"
        aria-label="Toggle theme"
      >
        {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </button>
      {/* <section className="gap-4 flex flex-col w-100 max-w-10xl mx-auto px-6 pt-20 overflow-hidden bg-white dark:bg-slate parallax-bg relative"> */}
      {/* Navigation */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-40 bg-white/60 dark:bg-dark-surface/50 backdrop-blur-md rounded-full px-6 py-3 shadow-lg">
        <div className="flex space-x-6 fill-black dark:fill-white">
          {[
            { name: "Hero", id: "hero" },
            { name: "Projects", id: "projects" },
            { name: "Skills", id: "skills" },
            { name: "Awards", id: "achievements" },
            { name: "AI Edge", id: "ai-edge" },
            { name: "Timeline", id: "timeline" },
            { name: "Contact", id: "contact" },
          ].map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.id)}
              className="text-sm text-gray-700 dark:text-gray-300 transition-colors cursor-pointer font-medium"
            >
              {item.name}
            </button>
          ))}
        </div>
      </nav>
    {/* </section> */}
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Achievements />
        <AIEdge />
        <Timeline />
        <Contact />
      </main>
    </div>
  )
}

export default App
