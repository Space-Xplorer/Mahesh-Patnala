"use client";

import { motion } from "framer-motion";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["C", "C++", "Java", "Python", "JavaScript"],
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Web Development",
      skills: ["React", "Next.js", "Node.js", "Express", "TailwindCSS", "Vite"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Databases",
      skills: ["SQL", "MySQL", "MongoDB"],
      color: "from-green-500 to-teal-500",
    },
    {
      title: "AI/ML & Data",
      skills: ["TensorFlow", "Keras", "Pandas", "OpenCV", "Tableau", "Power BI"],
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Tools & Design",
      skills: ["Git", "GitHub", "Figma", "Canva", "VS Code"],
      color: "from-indigo-500 to-purple-500",
    },
    {
      title: "AI Tools",
      skills: ["GPT-4o", "v0.dev", "ComfyUI", "Prompt Engineering"],
      color: "from-accent to-primary",
    },
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="section-fade-up text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 gradient-text">
            My Skills
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Full-stack development, AI/ML, creative design, and more!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="section-fade-up"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 h-full hover:border-accent/50 transition-all duration-300 hover:transform hover:scale-105">
                <h3 className="text-xl font-bold mb-6 gradient-text">
                  {category.title}
                </h3>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-all duration-300"
                    >
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.color}`} />
                      <span className="text-gray-200 font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;