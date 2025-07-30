"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Calendar } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "LYNK",
      description: "Mental health platform with user-centric design and content strategy. Currently in construction phase.",
      tags: ["Firebase", "Next.js", "TailwindCSS", "Express.js"],
      role: "Backend Developer",
      status: "Alpha Testing - Live July 15",
      isComingSoon: true,
      launchDate: "July 14, 2025",
    },
    {
      title: "Erimuga",
      description: "Custom e-commerce platform showcasing ethnic Assamese textiles with minimalistic elegance and cultural identity.",
      tags: ["Vite", "React", "TailwindCSS", "Express", "EJS"],
      role: "Full-stack Developer",
      liveUrl: "#",
      githubUrl: "https://github.com/Space-Xplorer/business-ecom-site",
    },
    {
      title: "Samyati",
      description: "Feature-rich travel blogging platform with dynamic post rendering, user authentication, and planned Google Maps integration.",
      tags: ["MongoDB", "Express", "React", "Node.js"],
      role: "Full-stack Developer",
      githubUrl: "https://github.com/Space-Xplorer/Samyati",
    },
    {
      title: "Campus Events",
      description: "Student event coordination platform built in 12-hour hackathon with full scheduling features.",
      tags: ["MongoDB", "Express", "Node.js", "EJS"],
      role: "Full-stack Developer",
      githubUrl: "https://github.com/SpoorthyBoga/Webathon",
      achievement: "12-hour Hackathon Project",
    },
    {
      title: "LSTM Stock Prediction",
      description: "High-precision stock price forecasting model achieving 98.95% accuracy for minute-level predictions.",
      tags: ["Python", "TensorFlow", "Keras", "LSTM"],
      role: "ML Engineer",
      githubUrl: "https://github.com/Space-Xplorer/LSTM-Model-1",
      achievement: "98.95% Accuracy",
    },
    {
      title: "UNet Object Detection",
      description: "Object detection system using CNN + UNet architecture achieving 90.74% accuracy. Built a Solar power estimation website using the model.",
      tags: ["Python", "OpenCV", "TensorFlow", "UNet"],
      role: "ML Engineer",
      githubUrl: "https://github.com/SpoorthyBoga/SolarSwitch",
      achievement: "90.74% Accuracy",
    },
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-teal-900/20" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="section-fade-up text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 gradient-text">
            Featured Projects
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A showcase of my recent work, from mental health platforms to AI-powered solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="section-fade-up group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 h-full hover:border-accent/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-accent/10">
                {/* Project Header */}
                <div className="mb-4">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    {project.isComingSoon && (
                      <div className="flex items-center gap-1 bg-accent/20 text-accent px-2 py-1 rounded-full text-xs">
                        <Calendar className="w-3 h-3" />
                        Soon
                      </div>
                    )}
                  </div>
                  <p className="text-accent text-sm font-medium mb-2">{project.role}</p>
                  {project.achievement && (
                    <div className="inline-block bg-green-500/20 text-green-400 px-2 py-1 rounded text-xs font-medium mb-2">
                      {project.achievement}
                    </div>
                  )}
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-gray-800/50 text-gray-300 text-xs rounded border border-gray-700"
                    >
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
                      className="flex items-center gap-2 flex-1 bg-accent hover:bg-accent/80 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 justify-center"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 flex-1 border border-gray-600 text-gray-300 hover:border-accent hover:text-accent px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 justify-center"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                  )}
                  {project.isComingSoon && (
                    <div className="flex-1 bg-gray-700/50 text-gray-400 px-4 py-2 rounded-lg text-sm font-medium text-center cursor-not-allowed">
                      {project.launchDate}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;