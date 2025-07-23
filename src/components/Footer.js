import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 py-8 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Profile */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Muhammad Quways Al-Qarany
            </h3>
            <p className="text-sm leading-relaxed">
              Computer Engineering Graduate passionate about creating innovative software solutions 
              and contributing to technological advancement.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">About</a></li>
              <li><a href="#skills" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Skills</a></li>
              <li><a href="#experience" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Experience</a></li>
              <li><a href="#projects" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Projects</a></li>
              <li><a href="#certifications" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Certifications</a></li>
              <li><a href="#contact" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Connect With Me
            </h3>
            <div className="space-y-2 text-sm">
              <p>📧 quways.alqarany@example.com</p>
              <p>🎓 Computer Engineering Graduate</p>
              <p>🏢 IPB University</p>
              <p>📍 Indonesia</p>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4 mt-4">
              <a
                href="www.linkedin.com/in/muhammadquways"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/nakamino24"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="border-t dark:border-gray-700 mt-8 pt-8 text-center">
          <p className="text-sm">
            © {currentYear} Muhammad Quways Al-Qarany. All rights reserved.
          </p>
          <p className="text-xs mt-2 text-gray-500 dark:text-gray-400">
            Built with React.js and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
