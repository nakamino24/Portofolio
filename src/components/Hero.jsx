import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    "Full-Stack Developer",
    "Software Engineer", 
    "System Administrator",
    "Network Specialist"
  ];

  const stats = [
    { label: "Years Experience", value: "2+", icon: "💻" },
    { label: "Projects Completed", value: "15+", icon: "🚀" },
    { label: "Technologies Mastered", value: "10+", icon: "⚡" },
    { label: "Certifications", value: "8", icon: "🏆" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="home" className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 flex flex-col justify-center items-center text-center px-4 min-h-screen">
        <div className="max-w-5xl mx-auto">
          {/* Main Hero Content */}
          <div className="mb-8">
            <div className="inline-block mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-sm font-semibold tracking-wide uppercase">
                👋 Welcome to my digital space
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Muhammad Quways
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Al-Qarany
              </span>
            </h1>
            
            <div className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-700 dark:text-gray-200 mb-6 h-12">
              <span className="inline-block transition-all duration-500 transform">
                {roles[currentRole]}
              </span>
            </div>
            
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              2+ Years of Programming Excellence | Computer Engineering Graduate with Full-Stack Development Expertise
              <span className="block mt-2 text-base text-gray-500 dark:text-gray-400">
                Transforming ideas into powerful digital solutions with modern web technologies
              </span>
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#projects" 
              className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              View My Work
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            
            <a 
              href="#contact" 
              className="group bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-8 py-4 rounded-full font-semibold text-lg border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Let's Talk
            </a>
          </div>

          {/* Tech Stack Preview */}
          <div className="mt-16">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 uppercase tracking-wide">Powered by</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {['React', 'JavaScript', 'Python', 'SQL', 'Node.js', 'Git'].map((tech, index) => (
                <span key={index} className="text-gray-400 dark:text-gray-500 font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-default">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
