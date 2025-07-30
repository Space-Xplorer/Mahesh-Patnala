"use client";

import { useState, useEffect } from "react";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("hero");

  const navItems = [
    { name: "Home", id: "hero" },
    { name: "Projects", id: "projects" },
    { name: "Skills", id: "skills" },
    { name: "Experience", id: "experience" },
    { name: "Contact", id: "contact" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-black/60 backdrop-blur-md rounded-full px-2 py-2 shadow-lg border border-gray-800">
      <div className="flex space-x-1">
        {navItems.map((item) => (
          <button
            key={item.name}
            onClick={() => scrollToSection(item.id)}
            className={`text-sm transition-all duration-300 cursor-pointer rounded-full px-4 py-2 font-medium ${
              activeSection === item.id
                ? "bg-accent text-white"
                : "text-gray-300 hover:text-white hover:bg-gray-800"
            }`}
          >
            {item.name}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;