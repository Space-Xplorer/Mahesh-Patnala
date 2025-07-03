"use client"

/* © 2025 Maheshwar Patnala */
import { useState } from "react"

const Button3D = ({ children, href, download, className = "", onClick }) => {
  const [isPressed, setIsPressed] = useState(false)

  const baseClasses = `
    relative inline-flex items-center justify-center gap-3 mt-12 px-8 py-4 
    font-bold text-white rounded-2xl transition-all duration-200 
    transform-gpu cursor-pointer select-none overflow-hidden
    bg-transparent border-2 border-transparent
    group
  `

  const buttonStyle = {
    transform: isPressed ? "translateY(4px) scale(0.98)" : "translateY(0px) scale(1)",
    // No shadow or border by default, handled by hover classes
  }

  const handleMouseDown = () => setIsPressed(true)
  const handleMouseUp = () => setIsPressed(false)
  const handleMouseLeave = () => setIsPressed(false)

  if (href) {
    return (
      <a
        href={href}
        download={download}
        className={`${baseClasses} ${className} hover:border-blue-400 hover:shadow-2xl`}
        style={buttonStyle}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        {/* Shine effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

        {/* Content */}
        <div className="relative z-10 flex items-center gap-3">{children}</div>

        {/* Bottom shadow */}
        <div className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl"></div>
      </a>
    )
  }

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${className} hover:border-pink-400 hover:shadow-2xl`}
      style={buttonStyle}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
    >
      {/* Shine effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center gap-3">{children}</div>

      {/* Bottom shadow */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-700 to-accent-800 rounded-b-2xl"></div>
    </button>
  )
}

export default Button3D
