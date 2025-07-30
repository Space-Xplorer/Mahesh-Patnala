"use client";

import { motion } from "framer-motion";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import { useState, useEffect } from "react";

const Hero = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const words = ["Web Developer", "Designer", "AIML Student"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(225,86,169,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(124,58,237,0.1),transparent_50%)]" />
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-accent/40 rounded-full animate-float"
            style={{
              top: `${20 + i * 15}%`,
              left: `${10 + i * 15}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            variants={itemVariants}
          >
            Hi, I'm{" "}
            <span className="gradient-text">Mahesh</span>
          </motion.h1>

          <motion.div
            className="text-3xl md:text-5xl font-medium mb-8 h-16 flex items-center justify-center"
            variants={itemVariants}
          >
            <span className="text-gray-300">I am a </span>
            <motion.span
              key={currentWord}
              className="gradient-text ml-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {words[currentWord]}
            </motion.span>
          </motion.div>

          <motion.p
            className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            🚀 I build intuitive, scalable, and beautiful digital experiences.
            <br />
            Currently merging AI with design to solve real-world problems.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            variants={itemVariants}
          >
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-3 bg-gradient-to-r from-accent to-primary hover:from-accent/80 hover:to-primary/80 text-white px-8 py-4 rounded-2xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-accent/25"
            >
              <Download className="w-5 h-5" />
              Download Résumé
            </a>
            
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-3 border-2 border-accent text-accent hover:bg-accent hover:text-white px-8 py-4 rounded-2xl font-bold transition-all duration-300 transform hover:scale-105"
            >
              <Mail className="w-5 h-5" />
              Get In Touch
            </a>
          </motion.div>

          <motion.div
            className="flex justify-center gap-6"
            variants={itemVariants}
          >
            <a
              href="https://github.com/Space-Xplorer"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-gray-800/50 hover:bg-gray-700/50 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/maheshwarpatnala"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-gray-800/50 hover:bg-gray-700/50 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;