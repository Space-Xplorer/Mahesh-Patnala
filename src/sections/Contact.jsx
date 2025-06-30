"use client"

/* © 2025 Maheshwar Patnala */
import { useState } from "react"
import { Mail, Github, Linkedin, Download, Phone, MapPin, Send } from "lucide-react"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, email, message } = formData
    const mailtoLink = `mailto:maheshwarpatn@gmail.com?subject=Contact from ${name}&body=${message}%0D%0A%0D%0AFrom: ${email}`
    window.location.href = mailtoLink
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="section-fade-up text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Let's <span className="text-accent">Connect</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to collaborate on your next project? Let's discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="section-fade-up">
            <div className="bg-white dark:bg-dark-surface border border-gray-300 dark:border-dark-border rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-dark-bg border border-gray-300 dark:border-dark-border rounded-lg focus:border-accent focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-dark-bg border border-gray-300 dark:border-dark-border rounded-lg focus:border-accent focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-dark-bg border border-gray-300 dark:border-dark-border rounded-lg focus:border-accent focus:outline-none transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent/80 text-white py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>
          </div>

          <div className="section-fade-up space-y-8">
            <div className="bg-white dark:bg-dark-surface border border-gray-300 dark:border-dark-border rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <a
                  href="mailto:maheshwarpatn@gmail.com"
                  className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-accent transition-colors p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-dark-bg"
                >
                  <Mail className="w-5 h-5" />
                  maheshwarpatn@gmail.com
                </a>
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300 p-3">
                  <Phone className="w-5 h-5" />
                  +91-9515871625
                </div>
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300 p-3">
                  <MapPin className="w-5 h-5" />
                  Bachupally, Hyderabad
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-dark-surface border border-gray-300 dark:border-dark-border rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-bold mb-4">Social Links</h3>
              <div className="flex gap-4 mb-6">
                <a
                  href="https://github.com/Space-Xplorer"
                  className="p-3 bg-gray-100 dark:bg-dark-bg border border-gray-300 dark:border-dark-border rounded-lg hover:border-accent hover:text-accent transition-all duration-300 hover:scale-110"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/maheshwarpatnala"
                  className="p-3 bg-gray-100 dark:bg-dark-bg border border-gray-300 dark:border-dark-border rounded-lg hover:border-accent hover:text-accent transition-all duration-300 hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>

              <a
                href="/Patnala Maheshwar-VNRVJIET.pdf"
                download
                className="inline-flex items-center gap-2 bg-gray-100 dark:bg-dark-bg border border-accent text-accent hover:bg-accent hover:text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <Download className="w-5 h-5" />
                Download Résumé
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
