/* © 2025 Maheshwar Patnala */
import { Sparkles, Zap } from 'lucide-react'
import ProjectCard from "../components/ProjectCard"

const Projects = () => {
  const projects = [
    {
      title: "LYNK",
      description:
        "Mental health platform with user-centric design and content strategy. Currently in alpha testing phase.",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Vite", "React", "TailwindCSS", "Animate.js"],
      role: "Frontend Developer",
      status: "Alpha Testing - Live July 14",
      isComingSoon: true,
      launchDate: "July 14, 2025",
    },
    {
      title: "Edimund",
      description:
        "Custom e-commerce platform showcasing ethnic Assamese textiles with minimalistic elegance and cultural identity.",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Vite", "React", "TailwindCSS", "Framer Motion"],
      role: "Full-stack Developer",
      liveUrl: "https://edimund-demo.com",
      githubUrl: "https://github.com/Space-Xplorer/edimund",
    },
    {
      title: "Samyati",
      description:
        "Feature-rich travel blogging platform with dynamic post rendering, user authentication, and planned Google Maps integration.",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["MongoDB", "Express", "React", "Node.js"],
      role: "Full-stack Developer",
      githubUrl: "https://github.com/Space-Xplorer/samyati",
    },
    {
      title: "Campus Events",
      description: "Student event coordination platform built in 12-hour hackathon with full scheduling features.",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["MongoDB", "Express", "Node.js", "EJS"],
      role: "Full-stack Developer",
      githubUrl: "https://github.com/Space-Xplorer/campus-events",
      achievement: "12-hour Hackathon Project",
    },
    {
      title: "LSTM Stock Prediction",
      description:
        "High-precision stock price forecasting model achieving 98.95% accuracy for minute-level predictions.",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Python", "TensorFlow", "Keras", "LSTM"],
      role: "ML Engineer",
      githubUrl: "https://github.com/Space-Xplorer/lstm-stock-prediction",
      achievement: "98.95% Accuracy",
    },
    {
      title: "UNet Object Detection",
      description: "Object detection system using CNN + UNet architecture achieving 90.74% accuracy.",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Python", "OpenCV", "TensorFlow", "UNet"],
      role: "ML Engineer",
      githubUrl: "https://github.com/Space-Xplorer/unet-object-detection",
      achievement: "90.74% Accuracy",
    },
  ]

  return (
    <section id="projects" className="py-20 relative overflow-hidden" style={{ backgroundColor: '#000000' }}>
      {/* Updated cosmic background with midnight sea theme */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-teal-900/20 to-slate-900/40 opacity-0"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.15),transparent_50%)] opacity-0"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(20,184,166,0.15),transparent_50%)] opacity-0"></div>
      
      {/* Floating particles with sea-themed colors */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-3 h-3 bg-blue-400 rounded-full animate-float opacity-50" style={{top: '15%', left: '15%', animationDelay: '0s'}}></div>
        <div className="absolute w-1 h-1 bg-teal-400 rounded-full animate-float opacity-60" style={{top: '70%', left: '85%', animationDelay: '3s'}}></div>
        <div className="absolute w-2 h-2 bg-cyan-400 rounded-full animate-float opacity-40" style={{top: '30%', left: '70%', animationDelay: '1.5s'}}></div>
        <div className="absolute w-1 h-1 bg-blue-300 rounded-full animate-float opacity-50" style={{top: '85%', left: '25%', animationDelay: '2.5s'}}></div>
        <div className="absolute w-2 h-2 bg-teal-300 rounded-full animate-float opacity-30" style={{top: '50%', left: '5%', animationDelay: '4s'}}></div>
        <div className="absolute w-1 h-1 bg-cyan-300 rounded-full animate-float opacity-40" style={{top: '25%', left: '90%', animationDelay: '5s'}}></div>
        <div className="absolute w-2 h-2 bg-blue-500 rounded-full animate-float opacity-30" style={{top: '60%', left: '10%', animationDelay: '6s'}}></div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="section-fade-up text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
            Featured <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            <span className="font-semibold text-white">A showcase of my recent work, from mental health platforms to AI-powered solutions</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="section-fade-up group" style={{ animationDelay: `${index * 0.1}s` }}>
              {/* Project Card */}
              <div className="relative h-[480px] bg-black/60 backdrop-blur-xl border border-gray-700/50 rounded-3xl overflow-hidden hover:border-blue-400/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-400/25">
                {/* Gradient overlay that appears on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-teal-400/10 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 to-teal-400/30 flex items-center justify-center">
                    <div className="text-6xl text-white/40 font-bold">
                      {project.title.charAt(0)}
                    </div>
                  </div>
                  {/* Status badge for coming soon projects */}
                  {project.isComingSoon && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-400 to-cyan-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Coming Soon
                    </div>
                  )}
                  {/* Achievement badge */}
                  {project.achievement && (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-green-400 to-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.achievement}
                    </div>
                  )}
                </div>

                {/* Card Content */}
                <div className="relative p-6 h-[calc(100%-12rem)] flex flex-col">
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  {/* Role */}
                  <div className="text-blue-400 text-sm font-medium mb-3 opacity-80">
                    {project.role}
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed mb-4 flex-grow">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-2 py-1 bg-white/10 text-white text-xs rounded-lg backdrop-blur-sm border border-white/80">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3 mt-auto">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gradient-to-r from-blue-400 to-cyan-500 hover:from-blue-400/80 hover:to-cyan-500/80 text-white px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-400/25 text-center"
                      >
                        Live Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 backdrop-blur-sm border border-white/20 hover:border-white/40 text-center"
                      >
                        GitHub
                      </a>
                    )}
                    {project.isComingSoon && (
                      <div className="flex-1 bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-4 py-2 rounded-xl text-sm font-medium text-center opacity-80 cursor-not-allowed">
                        {project.launchDate}
                      </div>
                    )}
                  </div>
                </div>

                {/* Hover Effect Particles */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute w-1 h-1 bg-blue-400 rounded-full animate-bounce" style={{top: '20%', left: '80%', animationDelay: '0s'}}></div>
                  <div className="absolute w-1 h-1 bg-teal-400 rounded-full animate-bounce" style={{top: '70%', left: '20%', animationDelay: '0.5s'}}></div>
                  <div className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-bounce" style={{top: '40%', left: '60%', animationDelay: '1s'}}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects;