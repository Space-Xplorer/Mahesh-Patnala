import { FaFigma, FaCode, FaPaintBrush, FaJava, FaChevronLeft, FaChevronRight, FaComments, FaBrain, FaRegStar, FaRegSmile, FaRegCheckCircle, FaUserFriends, FaLightbulb } from 'react-icons/fa';
import { 
  SiReact, SiJavascript, SiPython, SiCplusplus, SiNodedotjs, 
  SiExpress, SiTailwindcss, SiMongodb, SiMysql, SiTensorflow, 
  SiKeras, SiPandas, SiOpencv, SiTableau, SiCanva, 
  SiGit, SiGithub, SiVite, SiFramer, SiAdobepremierepro,
  SiFigma
} from 'react-icons/si';
import { BiLogoPostgresql, BiBarChart, BiBarChartAlt } from 'react-icons/bi';
import { TbBrandOpenai } from 'react-icons/tb';
import { VscSymbolMethod } from 'react-icons/vsc';
import React, { useRef, useState, useEffect } from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "C", icon: <SiCplusplus className="text-blue-400" />, color: "from-blue-400 to-blue-600" },
        { name: "C++", icon: <SiCplusplus className="text-blue-500" />, color: "from-blue-500 to-blue-700" },
        { name: "Java", icon: <FaJava className="text-red-400" />, color: "from-red-400 to-red-600" },
        { name: "Python", icon: <SiPython className="text-yellow-400" />, color: "from-yellow-400 to-blue-500" },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-300" />, color: "from-yellow-300 to-yellow-500" },
      ],
      bgGradient: "from-purple-600/20 to-pink-600/20",
      borderColor: "border-purple-400/40",
      glowColor: "hover:shadow-purple-500/30",
    },
    {
      title: "Web Development",
      skills: [
        { name: "React", icon: <SiReact className="text-cyan-400" />, color: "from-cyan-400 to-cyan-600" },
        { name: "Express", icon: <SiExpress className="text-gray-300" />, color: "from-gray-300 to-gray-500" },
        { name: "Node.js", icon: <SiNodedotjs className="text-green-400" />, color: "from-green-400 to-green-600" },
        { name: "TailwindCSS", icon: <SiTailwindcss className="text-cyan-300" />, color: "from-cyan-300 to-teal-400" },
        { name: "Vite", icon: <SiVite className="text-purple-400" />, color: "from-purple-400 to-yellow-400" },
        { name: "Framer Motion", icon: <SiFramer className="text-pink-400" />, color: "from-pink-400 to-purple-500" },
      ],
      bgGradient: "from-accent/20 to-purple-600/20",
      borderColor: "border-accent/40",
      glowColor: "hover:shadow-accent/30",
    },
    {
      title: "Databases",
      skills: [
        { name: "SQL", icon: <BiLogoPostgresql className="text-blue-400" />, color: "from-blue-400 to-blue-600" },
        { name: "MySQL", icon: <SiMysql className="text-orange-400" />, color: "from-blue-400 to-orange-500" },
        { name: "MongoDB", icon: <SiMongodb className="text-green-400" />, color: "from-green-400 to-green-600" },
      ],
      bgGradient: "from-primary/20 to-purple-800/20",
      borderColor: "border-primary/40",
      glowColor: "hover:shadow-primary/30",
    },
    {
      title: "AI/ML & Data",
      skills: [
        { name: "TensorFlow", icon: <SiTensorflow className="text-orange-400" />, color: "from-orange-400 to-orange-600" },
        { name: "Keras", icon: <SiKeras className="text-red-400" />, color: "from-red-400 to-red-600" },
        { name: "Pandas", icon: <SiPandas className="text-blue-400" />, color: "from-blue-400 to-purple-500" },
        { name: "OpenCV", icon: <SiOpencv className="text-green-400" />, color: "from-green-400 to-blue-500" },
        { name: "Tableau", icon: <SiTableau className="text-blue-300" />, color: "from-blue-300 to-blue-500" },
        { name: "Power BI", icon: <BiBarChartAlt className="text-yellow-400" />, color: "from-yellow-400 to-orange-500" },
      ],
      bgGradient: "from-pink-600/20 to-purple-600/20",
      borderColor: "border-pink-400/40",
      glowColor: "hover:shadow-pink-500/30",
    },
    {
      title: "Design & Tools",
      skills: [
        { name: "Canva", icon: <SiCanva className="text-blue-400" />, color: "from-blue-400 to-purple-500" },
        { name: "Figma", icon: <SiFigma className="text-purple-400" />, color: "from-purple-400 to-pink-500" },
        { name: "Git", icon: <SiGit className="text-orange-400" />, color: "from-orange-400 to-red-500" },
        { name: "GitHub", icon: <SiGithub className="text-gray-300" />, color: "from-gray-300 to-gray-500" },
        { name: "VS Code", icon: <VscSymbolMethod className="text-blue-400" />, color: "from-blue-400 to-blue-600" },
      ],
      bgGradient: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-400/40",
      glowColor: "hover:shadow-purple-500/30",
    },
    {
      title: "AI Tools",
      skills: [
        { name: "GPT-4o", icon: <TbBrandOpenai className="text-green-400" />, color: "from-green-400 to-teal-500" },
        { name: "v0.dev", icon: <FaCode className="text-blue-400" />, color: "from-blue-400 to-indigo-500" },
        { name: "ComfyUI", icon: <FaBrain className="text-purple-400" />, color: "from-purple-400 to-pink-500" },
        { name: "Prompt Engineering", icon: <FaLightbulb className="text-yellow-400" />, color: "from-yellow-400 to-orange-500" },
      ],
      bgGradient: "from-accent/20 to-pink-500/20",
      borderColor: "border-accent/40",
      glowColor: "hover:shadow-accent/30",
    },
    {
      title: "Soft Skills",
      skills: [
        { name: "Communication", icon: <FaComments className="text-blue-400" />, color: "from-blue-400 to-blue-600" },
        { name: "Problem-Solving", icon: <FaBrain className="text-purple-400" />, color: "from-purple-400 to-purple-600" },
        { name: "Adaptability", icon: <FaRegStar className="text-yellow-400" />, color: "from-yellow-400 to-orange-500" },
        { name: "Learning Agility", icon: <FaRegCheckCircle className="text-green-400" />, color: "from-green-400 to-green-600" },
        { name: "Teamwork", icon: <FaUserFriends className="text-cyan-400" />, color: "from-cyan-400 to-teal-500" },
        { name: "Creativity", icon: <FaRegSmile className="text-pink-400" />, color: "from-pink-400 to-rose-500" },
        { name: "Focus", icon: <FaLightbulb className="text-indigo-400" />, color: "from-indigo-400 to-purple-500" },
      ],
      bgGradient: "from-accent/20 to-pink-500/20",
      borderColor: "border-accent/40",
      glowColor: "hover:shadow-accent/30",
    },
  ];

  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  

  const designSkills = [
    { name: 'Figma', icon: <FaFigma className="text-purple-400" />, color: "from-purple-400 to-pink-500" },
    { name: 'Canva', icon: <SiCanva className="text-blue-400" />, color: "from-blue-400 to-purple-500" },
    { name: 'Premiere Pro', icon: <SiAdobepremierepro className="text-purple-400" />, color: "from-purple-400 to-indigo-500" },
  ];

  const softSkills = [
    { name: 'Communication', icon: <FaComments className="text-blue-400" />, color: "from-blue-400 to-blue-600" },
    { name: 'Problem-Solving', icon: <FaBrain className="text-purple-400" />, color: "from-purple-400 to-purple-600" },
    { name: 'Adaptability', icon: <FaRegStar className="text-yellow-400" />, color: "from-yellow-400 to-orange-500" },
    { name: 'Learning Agility', icon: <FaRegCheckCircle className="text-green-400" />, color: "from-green-400 to-green-600" },
    { name: 'Teamwork', icon: <FaUserFriends className="text-cyan-400" />, color: "from-cyan-400 to-teal-500" },
    { name: 'Creativity', icon: <FaRegSmile className="text-pink-400" />, color: "from-pink-400 to-rose-500" },
    { name: 'Focus', icon: <FaLightbulb className="text-indigo-400" />, color: "from-indigo-400 to-purple-500" },
  ];

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };
  
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };
  
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollButtons);
      checkScrollButtons(); // Check initial state
      
      return () => container.removeEventListener('scroll', checkScrollButtons);
    }
  }, []);


  return (
    <section id="skills" className="py-20 relative overflow-hidden bg-black">
      {/* Cosmic background with animated particles */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-pink-900/20 to-black opacity-80"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(225,86,169,0.15),transparent_50%)] opacity-70"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(124,58,237,0.15),transparent_50%)] opacity-70"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-2 h-2 bg-accent rounded-full animate-float opacity-60" style={{top: '20%', left: '10%', animationDelay: '0s'}}></div>
        <div className="absolute w-1 h-1 bg-primary rounded-full animate-float opacity-40" style={{top: '60%', left: '80%', animationDelay: '2s'}}></div>
        <div className="absolute w-3 h-3 bg-pink-400 rounded-full animate-float opacity-30" style={{top: '40%', left: '60%', animationDelay: '4s'}}></div>
        <div className="absolute w-1 h-1 bg-purple-400 rounded-full animate-float opacity-50" style={{top: '80%', left: '20%', animationDelay: '1s'}}></div>
      </div>
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="section-fade-up text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-accent via-primary to-pink-400 bg-clip-text text-transparent">
            My <span className="bg-gradient-to-r from-pink-400 via-accent to-purple-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            <span className="font-semibold text-white">Full-stack development, AI/ML, creative design, and more!</span>
          </p>
        </div>

        {/* Main skill categories - Horizontal Scroll */}
        <div className="relative mb-16">
          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mb-6">
            {/* <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Technical Skills
            </h3> */}
            <div className="flex gap-2">
              <button
                onClick={scrollLeft}
                disabled={!canScrollLeft}
                className={`p-3 rounded-full border transition-all duration-300 ${
                  canScrollLeft 
                    ? 'bg-black/60 border-accent/40 text-accent hover:bg-accent/10 hover:scale-110' 
                    : 'bg-gray-900/40 border-gray-700/40 text-gray-600 cursor-not-allowed'
                }`}
              >
                <FaChevronLeft size={16} />
              </button>
              <button
                onClick={scrollRight}
                disabled={!canScrollRight}
                className={`p-3 rounded-full border transition-all duration-300 ${
                  canScrollRight 
                    ? 'bg-black/60 border-accent/40 text-accent hover:bg-accent/10 hover:scale-110' 
                    : 'bg-gray-900/40 border-gray-700/40 text-gray-600 cursor-not-allowed'
                }`}
              >
                <FaChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* Scrollable Container */}
          <div 
            ref={scrollContainerRef}
            className="flex gap-7 overflow-x-auto scrollbar-hide pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className={`group relative bg-black/60 backdrop-blur-xl border ${category.borderColor} rounded-3xl p-6 hover:shadow-2xl ${category.glowColor} transition-all duration-500 hover:scale-105 hover:border-accent/60 flex-shrink-1`}
                style={{ 
                  minWidth: '340px',
                  maxWidth: '340px',
                  animationDelay: `${index * 0.1}s` 
                }}
              >
                {/* Gradient background overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.bgGradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    {category.title}
                  </h3>
                  <div className="grid gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="flex items-center gap-3 p-3 bg-gray-900/60 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 hover:scale-105 group/skill hover:border-accent/40"
                      >
                        <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg group-hover/skill:shadow-lg transition-all duration-300">
                          {skill.icon}
                        </div>
                        <span className="font-medium text-gray-200 group-hover/skill:text-white transition-colors duration-300">
                          {skill.name}
                        </span>
                        <div className="ml-auto">
                          <div className="w-2 h-2 bg-gradient-to-r from-accent to-pink-400 rounded-full opacity-60 group-hover/skill:opacity-100 group-hover/skill:scale-125 transition-all duration-300"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;