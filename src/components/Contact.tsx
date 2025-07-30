"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Download, Phone, MapPin, Send, CheckCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
      
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="section-fade-up text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 gradient-text">
            Let's Connect
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Ready to collaborate on your next project? Let's discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            className="section-fade-up"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 gradient-text">
                Send a Message
              </h3>
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
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl focus:border-accent focus:outline-none transition-all duration-300 text-white placeholder-gray-400"
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
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl focus:border-accent focus:outline-none transition-all duration-300 text-white placeholder-gray-400"
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
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl focus:border-accent focus:outline-none transition-all duration-300 resize-none text-white placeholder-gray-400"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className={`w-full py-3 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 shadow-lg ${
                    isSubmitted 
                      ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white' 
                      : 'bg-gradient-to-r from-accent to-primary hover:from-accent/80 hover:to-primary/80 text-white hover:shadow-xl hover:shadow-accent/25'
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
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="section-fade-up space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Contact Details */}
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 gradient-text">
                Get in Touch
              </h3>
              <div className="space-y-4">
                <a
                  href="mailto:maheshwarpatn@gmail.com"
                  className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors p-4 rounded-xl hover:bg-gray-800/50 group"
                >
                  <div className="p-3 bg-accent/20 rounded-xl group-hover:bg-accent/30 transition-all duration-300">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <span className="font-medium">maheshwarpatn@gmail.com</span>
                </a>
                
                <div className="flex items-center gap-4 text-gray-300 p-4 rounded-xl bg-gray-800/20">
                  <div className="p-3 bg-green-500/20 rounded-xl">
                    <Phone className="w-5 h-5 text-green-400" />
                  </div>
                  <span className="font-medium">+91-9515871625</span>
                </div>
                
                <div className="flex items-center gap-4 text-gray-300 p-4 rounded-xl bg-gray-800/20">
                  <div className="p-3 bg-purple-500/20 rounded-xl">
                    <MapPin className="w-5 h-5 text-purple-400" />
                  </div>
                  <span className="font-medium">Bachupally, Hyderabad</span>
                </div>
              </div>
            </div>

            {/* Social Links & Resume */}
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-6 gradient-text">
                Social Links
              </h3>
              
              <div className="flex gap-4 mb-6">
                <a
                  href="https://github.com/Space-Xplorer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-gray-800/50 border border-gray-700 rounded-xl hover:border-accent transition-all duration-300 hover:scale-110 hover:shadow-lg group"
                  aria-label="GitHub"
                >
                  <Github className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
                </a>
                
                <a
                  href="https://linkedin.com/in/maheshwarpatnala"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-gray-800/50 border border-gray-700 rounded-xl hover:border-accent transition-all duration-300 hover:scale-110 hover:shadow-lg group"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
                </a>
              </div>

              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-3 bg-gradient-to-r from-accent to-primary hover:from-accent/80 hover:to-primary/80 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-accent/25 hover:scale-105"
              >
                <Download className="w-5 h-5" />
                Download Résumé
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;