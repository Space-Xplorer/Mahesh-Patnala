/* © 2025 Maheshwar Patnala */
import CodeAnimation from "../components/CodeAnimation"
import { TbBrandOpenai } from 'react-icons/tb';
import { FaCode, FaBrain, FaRocket, FaLightbulb, FaCheckCircle, FaCogs, FaFileAlt, FaTachometerAlt } from 'react-icons/fa';

const AIEdge = () => {
  const aiFeatures = [
    {
      icon: <FaRocket className="text-blue-400" />,
      title: "Rapid Prototyping",
      description: "AI-assisted code generation for 5× faster development",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: <FaBrain className="text-purple-400" />,
      title: "Intelligent Debugging",
      description: "Smart optimization and error detection",
      color: "from-purple-400 to-purple-600"
    },
    {
      icon: <FaCheckCircle className="text-green-400" />,
      title: "Automated Testing",
      description: "Comprehensive testing and documentation",
      color: "from-green-400 to-green-600"
    },
    {
      icon: <FaTachometerAlt className="text-pink-400" />,
      title: "Enhanced Productivity",
      description: "Superior code quality and efficiency",
      color: "from-pink-400 to-rose-500"
    }
  ];

  const aiTools = [
    { name: "GPT-4o", icon: <TbBrandOpenai className="text-green-400" />, color: "from-green-400 to-teal-500" },
    { name: "v0.dev", icon: <FaCode className="text-blue-400" />, color: "from-blue-400 to-indigo-500" },
    { name: "ComfyUI", icon: <FaBrain className="text-purple-400" />, color: "from-purple-400 to-pink-500" },
    { name: "Prompt Engineering", icon: <FaLightbulb className="text-yellow-400" />, color: "from-yellow-400 to-orange-500" },
  ];

  return (
    <section id="ai-edge" className="py-20 relative overflow-hidden bg-black">
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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="section-fade-up">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-accent via-primary to-pink-400 bg-clip-text text-transparent">
              AI-Powered <span className="bg-gradient-to-r from-pink-400 via-accent to-purple-400 bg-clip-text text-transparent">Development</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              <span className="font-semibold text-white">Leveraging cutting-edge AI tools like GPT-4o and v0.dev</span> to accelerate development cycles and prototype
              solutions 5× faster than traditional methods.
            </p>

            {/* AI Tools Section */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                AI Tools Arsenal
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {aiTools.map((tool, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-black/60 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 hover:scale-105 group hover:border-accent/40"
                  >
                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg group-hover:shadow-lg transition-all duration-300">
                      {tool.icon}
                    </div>
                    <span className="font-medium text-gray-200 group-hover:text-white transition-colors duration-300 text-sm">
                      {tool.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {aiFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="group relative bg-black/60 backdrop-blur-xl border border-purple-400/40 rounded-2xl p-4 hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-500 hover:scale-105 hover:border-accent/60"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Gradient background overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg group-hover:shadow-lg transition-all duration-300">
                        {feature.icon}
                      </div>
                      <h4 className="font-semibold text-white text-sm">
                        {feature.title}
                      </h4>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="section-fade-up">
            <div className="relative">
              {/* Code Animation Container with enhanced styling */}
              <div className="group relative bg-black/60 backdrop-blur-xl border border-accent/40 rounded-3xl p-6 hover:shadow-2xl hover:shadow-accent/30 transition-all duration-500 hover:scale-105 hover:border-accent/60">
                {/* Gradient background overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-pink-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <CodeAnimation />
                </div>
              </div>
              
              {/* Floating accent elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-accent to-pink-400 rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-purple-400 to-primary rounded-full opacity-40 animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AIEdge