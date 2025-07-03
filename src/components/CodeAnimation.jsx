"use client"

/* © 2025 Maheshwar Patnala */
import { useState, useEffect } from "react"

const CodeAnimation = () => {
  const [currentLine, setCurrentLine] = useState(0)
  const [displayedCode, setDisplayedCode] = useState([])

  const codeLines = [
    "// AI-powered development workflow",
    "const generateComponent = async (prompt) => {",
    "  const response = await ai.generate({",
    '    model: "gpt-4o",',
    "    prompt: prompt,",
    '    context: "React JSX"',
    "  });",
    "  ",
    "  return optimizeCode(response);",
    "};",
    "",
    "// 5x faster prototyping",
    "const result = await generateComponent(",
    '  "Create a responsive dashboard"',
    ");",
    "",
    "console.log('Generated:', result);",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentLine < codeLines.length) {
        setDisplayedCode((prev) => [...prev, codeLines[currentLine]])
        setCurrentLine((prev) => prev + 1)
      } else {
        // Reset animation
        setTimeout(() => {
          setCurrentLine(0)
          setDisplayedCode([])
        }, 2000)
      }
    }, 400)

    return () => clearInterval(interval)
  }, [currentLine, codeLines])

  const getLineColor = (line) => {
    if (line.startsWith("//")) return "text-gray-500"
    if (line.includes("const") || line.includes("async") || line.includes("await") || line.includes("return"))
      return "text-blue-400"
    if (line.includes('"') || line.includes("'")) return "text-green-400"
    if (line.includes("ai.") || line.includes("generateComponent") || line.includes("optimizeCode"))
      return "gradient-text"
    if (line.includes("console.log")) return "text-yellow-400"
    return "text-gray-700 dark:text-gray-300"
  }

  return (
    <div className="bg-white dark:bg-dark-surface border border-gray-300 dark:border-dark-border rounded-xl p-6 font-mono text-sm overflow-hidden shadow-lg">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        <span className="ml-4 text-gray-600 dark:text-gray-400 font-medium">ai-development.js</span>
      </div>

      <div className="space-y-1 min-h-[350px]">
        {displayedCode.map((line, index) => (
          <div
            key={index}
            className={`transition-all duration-300 ${index === displayedCode.length - 1 ? "animate-pulse" : ""}`}
          >
            <span className="text-gray-500 mr-4 select-none">{String(index + 1).padStart(2, "0")}</span>
            <span className={getLineColor(line)}>{line}</span>
          </div>
        ))}
        {currentLine < codeLines.length && (
          <div className="flex items-center">
            <span className="text-gray-500 mr-4 select-none">{String(displayedCode.length + 1).padStart(2, "0")}</span>
            <div className="w-2 h-4 bg-accent animate-pulse"></div>
          </div>
        )}
      </div>
    </div>
  )
}

export default CodeAnimation
