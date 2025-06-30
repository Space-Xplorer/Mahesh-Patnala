/* © 2025 Maheshwar Patnala */
import CodeAnimation from "../components/CodeAnimation"

const AIEdge = () => {
  return (
    <section id="ai-edge" className="py-20">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="section-fade-up">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              AI-Powered <span className="text-accent">Development</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 leading-relaxed">
              Leveraging cutting-edge AI tools like GPT-4o and v0.dev to accelerate development cycles and prototype
              solutions 5× faster than traditional methods.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300">
                  Rapid prototyping with AI-assisted code generation
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300">Intelligent debugging and optimization</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300">Automated testing and documentation</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300">Enhanced productivity and code quality</span>
              </div>
            </div>
          </div>

          <div className="section-fade-up">
            <CodeAnimation />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AIEdge
