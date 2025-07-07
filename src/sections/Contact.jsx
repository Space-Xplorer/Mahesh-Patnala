"use client"

/* © 2025 Maheshwar Patnala */
import { useState, useEffect } from "react"
import { Mail, Github, Linkedin, Download, Phone, MapPin, Send, CheckCircle } from "lucide-react"
import emailjs from '@emailjs/browser'
import { EMAILJS_CONFIG } from '../config/emailjs'
import FluidCursor from '../components/FluidCursor'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY)
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")
    
    const { name, email, message } = formData
    
    try {
      // EmailJS template parameters
      const templateParams = {
        from_name: name,
        from_email: email,
        message: message,
        to_email: "maheshwarpatn@gmail.com", // Your email address
      }

      // Send email using EmailJS
      const response = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      )

      if (response.status === 200) {
        setIsSubmitted(true)
        setFormData({ name: "", email: "", message: "" })
        
        // Reset success state after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false)
        }, 3000)
      }
    } catch (error) {
      console.error("Email sending failed:", error)
      
      // Check if it's a configuration error
      if (EMAILJS_CONFIG.PUBLIC_KEY === "your_public_key_here" || 
          EMAILJS_CONFIG.SERVICE_ID === "your_service_id_here" || 
          EMAILJS_CONFIG.TEMPLATE_ID === "your_template_id_here") {
        setError("Email service not configured. Please contact me directly at maheshwarpatn@gmail.com")
      } else {
        setError("Failed to send message. Please try again or contact me directly at maheshwarpatn@gmail.com")
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <FluidCursor>
      <section id="contact" className="py-20 relative overflow-hidden" style={{ backgroundColor: 'transparent' }}>
        
        {/* Cosmic background with midnight sea theme - matching Projects */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-teal-900/20 to-slate-900/40 opacity-0"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.15),transparent_50%)] opacity-0"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(20,184,166,0.15),transparent_50%)] opacity-0"></div>
        
        {/* Floating particles with sea-themed colors */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-3 h-3 bg-blue-400 rounded-full animate-float opacity-50" style={{top: '20%', left: '10%', animationDelay: '0s'}}></div>
          <div className="absolute w-1 h-1 bg-teal-400 rounded-full animate-float opacity-60" style={{top: '70%', left: '85%', animationDelay: '2s'}}></div>
          <div className="absolute w-2 h-2 bg-cyan-400 rounded-full animate-float opacity-40" style={{top: '40%', left: '80%', animationDelay: '1s'}}></div>
          <div className="absolute w-1 h-1 bg-blue-300 rounded-full animate-float opacity-50" style={{top: '80%', left: '15%', animationDelay: '3s'}}></div>
          <div className="absolute w-2 h-2 bg-teal-300 rounded-full animate-float opacity-30" style={{top: '30%', left: '5%', animationDelay: '4s'}}></div>
          <div className="absolute w-1 h-1 bg-cyan-300 rounded-full animate-float opacity-40" style={{top: '60%', left: '90%', animationDelay: '5s'}}></div>
        </div>
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="section-fade-up text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Let's <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-400 bg-clip-text text-transparent">Connect</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              <span className="font-semibold text-white">Ready to collaborate on your next project? Let's discuss how we can bring your ideas to life.</span>
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="section-fade-up">
              <div className="bg-black/60 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 transition-all duration-500">
                <h3 className="text-2xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Send a Message
                </h3>
                {(EMAILJS_CONFIG.PUBLIC_KEY === "your_public_key_here" || 
                  EMAILJS_CONFIG.SERVICE_ID === "your_service_id_here" || 
                  EMAILJS_CONFIG.TEMPLATE_ID === "your_template_id_here") && (
                  <div className="mb-6 p-4 bg-yellow-500/20 border border-yellow-500/50 rounded-xl text-yellow-300 text-sm">
                    ⚠️ Email service is being configured. For now, please contact me directly at{" "}
                    <a href="mailto:maheshwarpatn@gmail.com" className="text-yellow-200 underline hover:text-yellow-100">
                      maheshwarpatn@gmail.com
                    </a>
                  </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black/40 backdrop-blur-sm border border-gray-600/50 rounded-xl focus:border-blue-400 focus:outline-none transition-all duration-300 text-white placeholder-gray-400"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black/40 backdrop-blur-sm border border-gray-600/50 rounded-xl focus:border-blue-400 focus:outline-none transition-all duration-300 text-white placeholder-gray-400"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-black/40 backdrop-blur-sm border border-gray-600/50 rounded-xl focus:border-blue-400 focus:outline-none transition-all duration-300 resize-none text-white placeholder-gray-400"
                      placeholder="Tell me about your project..."
                    ></textarea>
                  </div>

                  {error && (
                    <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-xl text-red-300 text-sm">
                      {error}
                    </div>
                  )}
                  
                  <button
                    type="submit"
                    disabled={isSubmitting || isSubmitted}
                    className={`w-full py-3 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 shadow-lg ${
                      isSubmitted 
                        ? 'bg-gradient-to-r from-green-400 to-emerald-500 text-white' 
                        : error
                        ? 'bg-gradient-to-r from-red-400 to-red-500 text-white'
                        : 'bg-gradient-to-r from-blue-400 to-cyan-500 hover:from-blue-500 hover:to-cyan-600 text-white hover:shadow-xl hover:shadow-blue-400/25'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : isSubmitted ? (
                      <>
                        <CheckCircle className="w-5 h-5" />
                        Message Sent!
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="section-fade-up space-y-8">
              {/* Contact Details */}
              <div className="bg-black/60 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 transition-all duration-500">
                <h3 className="text-2xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Get in Touch
                </h3>
                <div className="space-y-4">
                  <a
                    href="mailto:maheshwarpatn@gmail.com"
                    className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors p-4 rounded-xl hover:bg-blue-400/10 border border-transparent hover:border-blue-400/30 group"
                  >
                    <div className="p-3 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-xl group-hover:from-blue-400/30 group-hover:to-cyan-400/30 transition-all duration-300">
                      <Mail className="w-5 h-5 text-blue-400" />
                    </div>
                    <span className="font-medium">maheshwarpatn@gmail.com</span>
                  </a>
                  
                  <div className="flex items-center gap-4 text-gray-300 p-4 rounded-xl bg-gray-800/20">
                    <div className="p-3 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-xl">
                      <Phone className="w-5 h-5 text-green-400" />
                    </div>
                    <span className="font-medium">+91-9515871625</span>
                  </div>
                  
                  <div className="flex items-center gap-4 text-gray-300 p-4 rounded-xl bg-gray-800/20">
                    <div className="p-3 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-xl">
                      <MapPin className="w-5 h-5 text-purple-400" />
                    </div>
                    <span className="font-medium">Bachupally, Hyderabad</span>
                  </div>
                </div>
              </div>

              {/* Social Links & Resume */}
              <div className="bg-black/60 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 transition-all duration-500">
                <h3 className="text-xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Social Links
                </h3>
                
                <div className="flex gap-4 mb-6">
                  <a
                    href="https://github.com/Space-Xplorer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-black/40 backdrop-blur-sm border border-gray-600/50 rounded-xl hover:border-blue-400/60 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-400/25 group"
                    aria-label="GitHub"
                  >
                    <Github className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
                  </a>
                  
                  <a
                    href="https://linkedin.com/in/maheshwarpatnala"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-black/40 backdrop-blur-sm border border-gray-600/50 rounded-xl hover:border-blue-400/60 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-400/25 group"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
                  </a>
                </div>

                <a
                  href="/Patnala Maheshwar-VNRVJIET.pdf"
                  download
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-teal-400 to-cyan-500 hover:from-teal-500 hover:to-cyan-600 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-teal-400/25 hover:scale-105"
                >
                  <Download className="w-5 h-5" />
                  Download Résumé
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </FluidCursor>
  )
}

export default Contact