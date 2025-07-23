import React from 'react';

const About = () => {
  const downloadCV = () => {
    // Create a temporary link to download CV
    const link = document.createElement('a');
    link.href = '/cv-muhammad-quways-al-qarany.pdf'; // You'll need to add this file to public folder
    link.download = 'CV-Muhammad-Quways-Al-Qarany.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
              I'm Muhammad Quways Al-Qarany, a dedicated Computer Engineering graduate from IPB University 
              with a GPA of 3.69. I have a passion for technology and software development, with extensive 
              experience in both technical and administrative roles.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              My journey in technology has taken me through various roles including Software Engineer at 
              PT Wijaya Karya, Teaching Assistant and Research Staff at IPB University, and Helpdesk support 
              for prestigious programs like Cisco Networking Academy and Python Professional Academy.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              I believe in continuous learning and staying updated with the latest technologies to deliver 
              innovative solutions that make a real impact.
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
                <span className="text-gray-900 dark:text-white font-medium">Computer Engineering</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">GPA:</span>
                <span className="text-gray-900 dark:text-white font-medium">3.69</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Experience:</span>
                <span className="text-gray-900 dark:text-white font-medium">3+ Years</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Specialization:</span>
                <span className="text-gray-900 dark:text-white font-medium">Software Engineering</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
