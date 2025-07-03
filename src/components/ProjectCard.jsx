"use client"

/* © 2025 Maheshwar Patnala */
import { useState } from "react"
import { ExternalLink, Github, Play, Calendar } from "lucide-react"

const ProjectCard = ({
  title,
  description,
  image,
  tags,
  role,
  liveUrl,
  githubUrl,
  demoUrl,
  isComingSoon,
  launchDate,
  status,
  achievement,
}) => {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div
      className="relative h-80 w-full perspective-1000 cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front of card */}
        <div className="absolute inset-0 w-full h-full backface-hidden">
          <div className="bg-white dark:bg-dark-surface border border-gray-300 dark:border-dark-border rounded-xl overflow-hidden h-full card-tilt shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="relative h-48 overflow-hidden">
              <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
              {isComingSoon && (
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                  <div className="text-center">
                    <Calendar className="w-8 h-8 gradient-text mx-auto mb-2" />
                    <p className="gradient-text font-medium">{launchDate}</p>
                  </div>
                </div>
              )}
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{title}</h3>
              <p className="gradient-text text-sm font-medium mb-2">{role}</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">{description}</p>
              <div className="flex flex-wrap gap-2">
                {achievement && (
                  <div className="inline-block bg-accent/20 gradient-text px-2 py-1 rounded text-xs font-medium">
                    {achievement}
                  </div>
                )}
                {status && (
                  <div className="inline-block bg-blue-500/20 text-blue-400 px-2 py-1 rounded text-xs font-medium">
                    {status}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
          <div className="bg-white dark:bg-dark-surface border border-accent rounded-xl p-6 h-full flex flex-col justify-between shadow-lg">
            <div>
              <h3 className="text-xl font-bold mb-4 gradient-text">{title}</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {tags.map((tag, index) => (
                  <span key={index} className="px-3 py-1 bg-accent/20 gradient-text text-xs rounded-full font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {!isComingSoon && (
              <div className="space-y-3">
                {liveUrl && (
                  <a
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 w-full bg-accent hover:bg-accent/80 text-white py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Site
                  </a>
                )}
                {demoUrl && (
                  <a
                    href={demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 w-full border border-accent gradient-text hover:bg-accent hover:text-white py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    <Play className="w-4 h-4" />
                    Demo
                  </a>
                )}
                {githubUrl && (
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 w-full border border-gray-600 text-gray-600 dark:text-gray-300 hover:border-accent hover:text-accent py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                )}
              </div>
            )}

            {isComingSoon && (
              <div className="text-center">
                <div className="animate-pulse">
                  <div className="w-16 h-16 bg-accent/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Calendar className="w-8 h-8 gradient-text" />
                  </div>
                  <p className="gradient-text font-medium">Coming Soon</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{launchDate}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
