/* © 2025 Maheshwar Patnala */
const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["C", "C++", "Java", "Python", "JavaScript"],
      color: "bg-blue-500/20 text-blue-400 border-blue-400/30",
    },
    {
      title: "Web Development",
      skills: ["React", "Express", "Node.js", "EJS", "TailwindCSS", "Vite", "Framer Motion"],
      color: "bg-green-500/20 text-green-400 border-green-400/30",
    },
    {
      title: "Databases",
      skills: ["SQL", "MySQL", "MongoDB"],
      color: "bg-purple-500/20 text-purple-400 border-purple-400/30",
    },
    {
      title: "AI/ML & Data",
      skills: ["TensorFlow", "Keras", "Pandas", "OpenCV", "Tableau", "Power BI"],
      color: "bg-accent/20 text-accent border-accent/30",
    },
    {
      title: "Design & Tools",
      skills: ["Canva", "Figma", "Git", "GitHub", "VS Code"],
      color: "bg-yellow-500/20 text-yellow-400 border-yellow-400/30",
    },
    {
      title: "AI Tools",
      skills: ["GPT-4o", "v0.dev", "ComfyUI", "Prompt Engineering"],
      color: "bg-red-500/20 text-red-400 border-red-400/30",
    },
  ]

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="section-fade-up text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Full-stack development, AI/ML, data analysis, and modern design tools
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="section-fade-up bg-white dark:bg-dark-surface border border-gray-300 dark:border-dark-border rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-bold mb-4 gradient-text">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`px-3 py-1 rounded-full text-sm font-medium border ${category.color} transition-all duration-300 hover:scale-105`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
