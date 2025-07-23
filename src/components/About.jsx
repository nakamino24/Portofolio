import React from 'react';
import { generatePDF } from '../utils/pdfGenerator';

const About = () => {
  const downloadCV = () => {
    try {
      generatePDF();
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Sorry, there was an error generating the PDF. Please try again.');
    }
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-purple-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-indigo-400/10 to-cyan-600/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="text-center mb-16 relative z-10">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent text-sm font-semibold tracking-wide uppercase">
              👋 Get to Know Me
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About Me
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full shadow-lg"></div>
        </div>
        <div className="grid lg:grid-cols-3 gap-8 relative z-10">
          {/* Main Content Card */}
          <div className="lg:col-span-2">
            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/20 dark:border-gray-700/30 hover:shadow-2xl transition-all duration-300">
              <div className="mb-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-white text-xl">👨‍💻</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Who I Am</h3>
                </div>
                <div className="h-px bg-gradient-to-r from-indigo-500/50 to-purple-600/50 mb-6"></div>
              </div>
              
              <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                <p className="text-lg">
                  I'm <span className="font-semibold text-indigo-600 dark:text-indigo-400">Muhammad Quways Al-Qarany</span>, a recent graduate from IPB University with a Diploma in Computer Engineering 
                  (GPA 3.69). I have a passion for technology and administration, with extensive experience in helpdesk support, 
                  software development, and administrative roles.
                </p>
                <p>
                  My journey has taken me through various roles including Software Engineer at PT Wijaya Karya, 
                  Assistant Lecturer and Research Staff at IPB University, and Helpdesk support for Cisco Networking Academy 
                  and Python Professional Academy. I'm skilled in Microsoft Office, databases, and front-end web technologies.
                </p>
                <p>
                  As a fast learner and team player with strong problem-solving skills, I believe in continuous learning 
                  and staying updated with the latest technologies to deliver innovative solutions.
                </p>
              </div>
              
              <div className="mt-8">
                <button
                  onClick={downloadCV}
                  className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  <svg
                    className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Download CV
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </button>
              </div>
            </div>
          </div>
          
          {/* Personal Info Card */}
          <div className="lg:col-span-1">
            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/20 dark:border-gray-700/30 hover:shadow-2xl transition-all duration-300 h-full">
              <div className="mb-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-white text-xl">📋</span>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white">Personal Info</h4>
                </div>
                <div className="h-px bg-gradient-to-r from-emerald-500/50 to-teal-600/50 mb-6"></div>
              </div>
              
              <div className="space-y-6">
                <div className="group">
                  <div className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200">
                    <span className="text-gray-600 dark:text-gray-400 font-medium">🎓 Education</span>
                    <span className="text-gray-900 dark:text-white font-semibold">IPB University</span>
                  </div>
                </div>
                <div className="group">
                  <div className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200">
                    <span className="text-gray-600 dark:text-gray-400 font-medium">🎯 Degree</span>
                    <span className="text-gray-900 dark:text-white font-semibold text-right">Diploma Computer Engineering</span>
                  </div>
                </div>
                <div className="group">
                  <div className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200">
                    <span className="text-gray-600 dark:text-gray-400 font-medium">⭐ GPA</span>
                    <span className="text-gray-900 dark:text-white font-semibold">3.69/4.00</span>
                  </div>
                </div>
                <div className="group">
                  <div className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200">
                    <span className="text-gray-600 dark:text-gray-400 font-medium">📍 Location</span>
                    <span className="text-gray-900 dark:text-white font-semibold">Pondok Gede, Bekasi</span>
                  </div>
                </div>
                <div className="group">
                  <div className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200">
                    <span className="text-gray-600 dark:text-gray-400 font-medium">✉️ Email</span>
                    <span className="text-gray-900 dark:text-white font-semibold text-right break-all">faiz.quways@gmail.com</span>
                  </div>
                </div>
                <div className="group">
                  <div className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200">
                    <span className="text-gray-600 dark:text-gray-400 font-medium">📱 Phone</span>
                    <span className="text-gray-900 dark:text-white font-semibold">0895-0327-9320</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
