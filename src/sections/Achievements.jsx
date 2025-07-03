/* © 2025 Maheshwar Patnala */
import { Trophy, Shield, Camera, Users, BookOpen, Code } from "lucide-react"

const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "Startup Race Winner",
      description: "2nd Prize @ VNR Innovation Cell",
      color: "text-yellow-400",
      bgColor: "bg-yellow-500/20",
    },
    {
      icon: Shield,
      title: "Bug Bounty Champion",
      description: "2nd Prize by CSI BVRIT",
      color: "text-blue-400",
      bgColor: "bg-blue-500/20",
    },
    {
      icon: Users,
      title: "MUN Core Organizer",
      description: "VJ Model United Nations",
      color: "text-green-400",
      bgColor: "bg-green-500/20",
    },
    {
      icon: Camera,
      title: "Event Photographer",
      description: "Fresher's Event Coverage",
      color: "text-purple-400",
      bgColor: "bg-purple-500/20",
    },
    {
      icon: Code,
      title: "GDG Volunteer",
      description: "Google Developer Group VNR",
      color: "text-red-400",
      bgColor: "bg-red-500/20",
    },
    {
      icon: BookOpen,
      title: "Literature Club",
      description: "Stentorian Core Member",
      color: "gradient-text",
      bgColor: "bg-accent/20",
    },
  ]

  return (
    <section id="achievements" className="py-20 bg-gray-50 dark:bg-dark-surface/30">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="section-fade-up text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Achievements & <span className="gradient-text">Recognition</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Awards, leadership roles, and community contributions that showcase my diverse interests and capabilities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon
            return (
              <div
                key={index}
                className="section-fade-up bg-white dark:bg-dark-surface border border-gray-300 dark:border-dark-border rounded-xl p-6 hover:border-accent/50 hover:shadow-lg transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg ${achievement.bgColor} ${achievement.color}`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2 transition-colors gradient-text">{achievement.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{achievement.description}</p>
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
