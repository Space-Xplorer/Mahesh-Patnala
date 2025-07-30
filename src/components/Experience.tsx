"use client";

import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      year: "2024",
      title: "VJ MUN (Model United Nations)",
      role: "Core Organizer",
      description: "Organized and coordinated Model United Nations events, facilitating diplomatic simulations and international relations discussions for students.",
    },
    {
      year: "2024",
      title: "Startup Race @ VNR Innovation Cell",
      role: "Participant",
      description: "Secured 2nd prize in startup competition, demonstrating innovative business solutions and entrepreneurial skills.",
      achievement: "🏆 2nd Prize Winner",
    },
    {
      year: "2024",
      title: "Bug Bounty by CSI BVRIT",
      role: "Security Researcher",
      description: "Identified and reported critical security vulnerabilities, earning recognition for cybersecurity expertise.",
      achievement: "🛡️ 2nd Prize Winner",
    },
    {
      year: "2023",
      title: "Google Developer Group (VNR)",
      role: "Volunteer",
      description: "Actively participated in tech community events, workshops, and knowledge sharing sessions to promote developer growth.",
    },
    {
      year: "2023",
      title: "Stentorian Literature Club",
      role: "Core Member",
      description: "Contributed to literary activities, creative writing initiatives, and cultural events within the college community.",
    },
    {
      year: "2022",
      title: "Fresher's Event",
      role: "Photographer",
      description: "Captured memorable moments during college orientation events, developing skills in event photography and visual storytelling.",
    },
  ];

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-teal-900/20" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="section-fade-up text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 gradient-text">
            Experience & Leadership
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A journey of continuous learning, leadership, and technical growth
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="section-fade-up relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start gap-8 pb-12">
                {/* Year Badge */}
                <div className="flex-shrink-0 w-24 text-right">
                  <div className="inline-block px-3 py-1 bg-gradient-to-r from-accent to-primary text-white text-sm font-bold rounded-full shadow-lg">
                    {exp.year}
                  </div>
                </div>

                {/* Timeline Connector */}
                <div className="relative flex-shrink-0">
                  <div className="w-4 h-4 bg-gradient-to-r from-accent to-primary rounded-full shadow-lg relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary rounded-full animate-pulse opacity-75"></div>
                  </div>
                  {index < experiences.length - 1 && (
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-gradient-to-b from-accent/60 to-primary/60"></div>
                  )}
                </div>

                {/* Content Card */}
                <div className="flex-1 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-accent/50 transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-2 gradient-text">
                    {exp.title}
                  </h3>
                  <p className="text-accent font-medium mb-2 text-sm">
                    {exp.role}
                  </p>
                  {exp.achievement && (
                    <div className="inline-block px-3 py-1 bg-yellow-500/20 text-yellow-400 text-sm font-medium rounded-full mb-3">
                      {exp.achievement}
                    </div>
                  )}
                  <p className="text-gray-300 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;