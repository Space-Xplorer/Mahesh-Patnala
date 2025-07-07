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
    <section id="timeline" className="py-20 relative overflow-hidden" style={{ backgroundColor: '#000000' }}>
      {/* Cosmic background with midnight sea theme - matching Projects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-teal-900/20 to-slate-900/40 opacity-0"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.15),transparent_50%)] opacity-0"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(20,184,166,0.15),transparent_50%)] opacity-0"></div>
      
      {/* Floating particles with sea-themed colors */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-2 h-2 bg-blue-400 rounded-full animate-float opacity-50" style={{top: '15%', left: '8%', animationDelay: '0s'}}></div>
        <div className="absolute w-1 h-1 bg-teal-400 rounded-full animate-float opacity-60" style={{top: '65%', left: '92%', animationDelay: '3s'}}></div>
        <div className="absolute w-3 h-3 bg-cyan-400 rounded-full animate-float opacity-40" style={{top: '40%', left: '85%', animationDelay: '1.5s'}}></div>
        <div className="absolute w-1 h-1 bg-blue-300 rounded-full animate-float opacity-50" style={{top: '75%', left: '12%', animationDelay: '2.5s'}}></div>
        <div className="absolute w-2 h-2 bg-teal-300 rounded-full animate-float opacity-30" style={{top: '25%', left: '5%', animationDelay: '4s'}}></div>
        <div className="absolute w-1 h-1 bg-cyan-300 rounded-full animate-float opacity-40" style={{top: '85%', left: '88%', animationDelay: '5s'}}></div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="section-fade-up text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
            Experience & <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-400 bg-clip-text text-transparent">Leadership</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            <span className="font-semibold text-white">A journey of continuous learning, leadership, and technical growth</span>
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="section-fade-up relative" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="flex items-start gap-8 pb-12">
                {/* Year Badge */}
                <div className="flex-shrink-0 w-24 text-right">
                  <div className="inline-block px-3 py-1 bg-gradient-to-r from-blue-400 to-cyan-500 text-white text-sm font-bold rounded-full shadow-lg">
                    {exp.year}
                  </div>
                </div>

                {/* Timeline Connector */}
                <div className="relative flex-shrink-0">
                  {/* Glowing dot */}
                  <div className="w-4 h-4 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full shadow-lg relative">
                    {/* Pulsing ring effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full animate-ping opacity-75"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full opacity-100"></div>
                  </div>
                  
                  {/* Connecting line with gradient */}
                  {index < experiences.length - 1 && (
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-gradient-to-b from-cyan-400/60 via-blue-400/40 to-teal-400/60"></div>
                  )}
                </div>

                {/* Content Card */}
                <div className="flex-1 bg-black/60 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-6 transition-all duration-500 transform perspective-1000">
                  {/* Subtle animated border glow */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-400/20 via-transparent to-cyan-400/20 opacity-0 animate-pulse"></div>
                  
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-white mb-2 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                      {exp.title}
                    </h3>
                    <p className="text-teal-400 font-medium mb-2 text-sm">
                      {exp.role}
                    </p>
                    {exp.achievement && (
                      <div className="inline-block px-3 py-1 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 border border-yellow-400/30 text-yellow-400 text-sm font-medium rounded-full mb-3">
                        {exp.achievement}
                      </div>
                    )}
                    <p className="text-gray-300 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>

                  {/* Subtle floating elements inside cards */}
                  <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
                    <div className="absolute w-1 h-1 bg-blue-400/40 rounded-full animate-float opacity-60" style={{top: '15%', right: '15%', animationDelay: `${index * 0.3}s`}}></div>
                    <div className="absolute w-1 h-1 bg-teal-400/40 rounded-full animate-float opacity-40" style={{top: '70%', right: '20%', animationDelay: `${index * 0.3 + 1}s`}}></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Creative timeline end element */}
        <div className="max-w-4xl mx-auto flex justify-center">
          <div className="flex items-center gap-4">
            <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full animate-pulse"></div>
            <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-teal-500 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
            <div className="w-4 h-4 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
            <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-teal-500 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Timeline