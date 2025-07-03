/* © 2025 Maheshwar Patnala */
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
    <section id="projects" className="py-20 bg-gray-50 dark:bg-dark-surface/50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="section-fade-up text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my recent work, from mental health platforms to AI-powered solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="section-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
