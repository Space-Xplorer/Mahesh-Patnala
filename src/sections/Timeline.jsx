/* © 2025 Maheshwar Patnala */
const Timeline = () => {
  const experiences = [
    {
      year: "2024",
      title: "VJ MUN (Model United Nations)",
      role: "Core Organizer",
      description:
        "Organized and coordinated Model United Nations events, facilitating diplomatic simulations and international relations discussions for students.",
    },
    {
      year: "2024",
      title: "Startup Race @ VNR Innovation Cell",
      role: "Participant",
      description:
        "Secured 2nd prize in startup competition, demonstrating innovative business solutions and entrepreneurial skills.",
      achievement: "🏆 2nd Prize Winner",
    },
    {
      year: "2024",
      title: "Bug Bounty by CSI BVRIT",
      role: "Security Researcher",
      description:
        "Identified and reported critical security vulnerabilities, earning recognition for cybersecurity expertise.",
      achievement: "🛡️ 2nd Prize Winner",
    },
    {
      year: "2023",
      title: "Google Developer Group (VNR)",
      role: "Volunteer",
      description:
        "Actively participated in tech community events, workshops, and knowledge sharing sessions to promote developer growth.",
    },
    {
      year: "2023",
      title: "Stentorian Literature Club",
      role: "Core Member",
      description:
        "Contributed to literary activities, creative writing initiatives, and cultural events within the college community.",
    },
    {
      year: "2022",
      title: "Fresher's Event",
      role: "Photographer",
      description:
        "Captured memorable moments during college orientation events, developing skills in event photography and visual storytelling.",
    },
  ]

  return (
    <section id="timeline" className="py-20 bg-gray-50 dark:bg-dark-surface/30">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="section-fade-up text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Experience & <span className="text-accent">Leadership</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            A journey of continuous learning, leadership, and technical growth
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="section-fade-up relative" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="flex items-start gap-8 pb-12">
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="text-accent font-bold text-lg">{exp.year}</span>
                </div>

                <div className="relative flex-shrink-0">
                  <div className="w-4 h-4 bg-accent rounded-full shadow-lg"></div>
                  {index < experiences.length - 1 && (
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-gray-300 dark:bg-dark-border"></div>
                  )}
                </div>

                <div className="flex-1 bg-white dark:bg-dark-surface border border-gray-300 dark:border-dark-border rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                  <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                  <p className="text-accent font-medium mb-2">{exp.role}</p>
                  {exp.achievement && <p className="text-yellow-400 font-medium mb-2">{exp.achievement}</p>}
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Timeline
