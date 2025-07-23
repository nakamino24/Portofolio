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
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Computer Engineering Graduate
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              I'm Muhammad Quways Al-Qarany, a recent graduate from IPB University with a Diploma in Computer Engineering 
              (GPA 3.69). I have a passion for technology and administration, with extensive experience in helpdesk support, 
              software development, and administrative roles.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              My journey has taken me through various roles including Software Engineer at PT Wijaya Karya, 
              Assistant Lecturer and Research Staff at IPB University, and Helpdesk support for Cisco Networking Academy 
              and Python Professional Academy. I'm skilled in Microsoft Office, databases, and front-end web technologies.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              As a fast learner and team player with strong problem-solving skills, I believe in continuous learning 
              and staying updated with the latest technologies to deliver innovative solutions.
            </p>
            <button
              onClick={downloadCV}
              className="btn-primary inline-flex items-center"
            >
              <svg
                className="w-5 h-5 mr-2"
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
            </button>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-8">
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Personal Information
            </h4>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Education:</span>
                <span className="text-gray-900 dark:text-white font-medium">IPB University</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Degree:</span>
                <span className="text-gray-900 dark:text-white font-medium">Diploma Computer Engineering</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">GPA:</span>
                <span className="text-gray-900 dark:text-white font-medium">3.69</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Location:</span>
                <span className="text-gray-900 dark:text-white font-medium">Pondok Gede, Bekasi</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Email:</span>
                <span className="text-gray-900 dark:text-white font-medium">faiz.quways@gmail.com</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Phone:</span>
                <span className="text-gray-900 dark:text-white font-medium">0895-0327-9320</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
