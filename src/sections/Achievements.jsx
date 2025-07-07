/* © 2025 Maheshwar Patnala */
import { Trophy, Shield, Camera, Users, BookOpen, Code } from "lucide-react"

const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "Startup Race Winner",
      description: "2nd Prize @ VNR Innovation Cell",
      color: "text-yellow-400",
      bgGradient: "from-yellow-400/30 to-orange-400/30",
      hoverGradient: "from-yellow-400/20 via-orange-400/10 to-amber-500/20",
    },
    {
      icon: Shield,
      title: "Bug Bounty Champion",
      description: "2nd Prize by CSI BVRIT",
      color: "text-blue-400",
      bgGradient: "from-blue-400/30 to-cyan-400/30",
      hoverGradient: "from-blue-400/20 via-cyan-400/10 to-indigo-500/20",
    },
    {
      icon: Users,
      title: "MUN Core Organizer",
      description: "VJ Model United Nations",
      color: "text-green-400",
      bgGradient: "from-green-400/30 to-emerald-400/30",
      hoverGradient: "from-green-400/20 via-emerald-400/10 to-teal-500/20",
    },
    {
      icon: Camera,
      title: "Event Photographer",
      description: "Fresher's Event Coverage",
      color: "text-purple-400",
      bgGradient: "from-purple-400/30 to-pink-400/30",
      hoverGradient: "from-purple-400/20 via-pink-400/10 to-violet-500/20",
    },
    {
      icon: Code,
      title: "GDG Volunteer",
      description: "Google Developer Group VNR",
      color: "text-red-400",
      bgGradient: "from-red-400/30 to-rose-400/30",
      hoverGradient: "from-red-400/20 via-rose-400/10 to-pink-500/20",
    },
    {
      icon: BookOpen,
      title: "Literature Club",
      description: "Stentorian Core Member",
      color: "text-teal-400",
      bgGradient: "from-teal-400/30 to-cyan-400/30",
      hoverGradient: "from-teal-400/20 via-cyan-400/10 to-blue-500/20",
    },
  ]

  return (
    <section id="achievements" className="py-20 relative overflow-hidden" style={{ backgroundColor: '#000000' }}>
      {/* Cosmic background with midnight sea theme - matching Projects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-teal-900/20 to-slate-900/40 opacity-0"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.15),transparent_50%)] opacity-0"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(20,184,166,0.15),transparent_50%)] opacity-0"></div>
      
      {/* Floating particles with sea-themed colors */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-2 h-2 bg-blue-400 rounded-full animate-float opacity-50" style={{top: '20%', left: '10%', animationDelay: '0s'}}></div>
        <div className="absolute w-1 h-1 bg-teal-400 rounded-full animate-float opacity-60" style={{top: '60%', left: '90%', animationDelay: '2s'}}></div>
        <div className="absolute w-3 h-3 bg-cyan-400 rounded-full animate-float opacity-40" style={{top: '35%', left: '75%', animationDelay: '1s'}}></div>
        <div className="absolute w-1 h-1 bg-blue-300 rounded-full animate-float opacity-50" style={{top: '80%', left: '15%', animationDelay: '3s'}}></div>
        <div className="absolute w-2 h-2 bg-teal-300 rounded-full animate-float opacity-30" style={{top: '45%', left: '5%', animationDelay: '4s'}}></div>
        <div className="absolute w-1 h-1 bg-cyan-300 rounded-full animate-float opacity-40" style={{top: '15%', left: '85%', animationDelay: '5s'}}></div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="section-fade-up text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
            Achievements & <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-400 bg-clip-text text-transparent">Recognition</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            <span className="font-semibold text-white">Awards, leadership roles, and community contributions that showcase my diverse interests and capabilities</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon
            return (
              <div
                key={index}
                className="section-fade-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Achievement Card */}
                <div className="relative h-[180px] bg-black/60 backdrop-blur-xl border border-gray-700/50 rounded-3xl overflow-hidden hover:border-blue-400/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-400/25">
                  {/* Gradient overlay that appears on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${achievement.hoverGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  {/* Card Content */}
                  <div className="relative p-6 h-full flex flex-col justify-center">
                    <div className="flex items-start gap-4">
                      {/* Icon */}
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${achievement.bgGradient} ${achievement.color} group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                          {achievement.title}
                        </h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Hover Effect Particles */}
                  <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute w-1 h-1 bg-blue-400 rounded-full animate-bounce" style={{top: '20%', right: '20%', animationDelay: '0s'}}></div>
                    <div className="absolute w-1 h-1 bg-teal-400 rounded-full animate-bounce" style={{top: '70%', right: '15%', animationDelay: '0.5s'}}></div>
                    <div className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-bounce" style={{top: '40%', right: '25%', animationDelay: '1s'}}></div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Achievements