import React, { useState } from 'react';

const Experience = () => {
  const [hoveredExp, setHoveredExp] = useState(null);
  const experiences = [
    {
      title: 'Administrative Intern',
      company: 'PT Compotec International',
      period: 'May - June 2025',
      description: [
        'Managed administrative tasks and office operations',
        'Supported various departments with data entry and documentation',
        'Assisted in project coordination and communication',
        'Gained experience in corporate environment and business processes'
      ],
      technologies: ['Microsoft Office', 'Data Management', 'Project Coordination']
    },
    {
      title: 'Software Engineer',
      company: 'PT Wijaya Karya',
      period: 'August 2024 - January 2025',
      description: [
        'Developed a web-based internal system using JavaScript, SQL, and HTML/CSS',
        'Created and maintained Web Admin Portal for internal operations',
        'Collaborated with cross-functional teams to deliver software solutions',
        'Implemented responsive web designs and optimized application performance'
      ],
      technologies: ['JavaScript', 'SQL', 'HTML/CSS', 'Web Development']
    },
    {
      title: 'Assistant Lecturer',
      company: 'IPB University',
      period: 'January - July 2024',
      description: [
        'Assisted in teaching computer engineering courses to students',
        'Mentored students in programming and technical problem-solving',
        'Supported academic activities and course administration',
        'Helped students understand complex technical concepts'
      ],
      technologies: ['Teaching', 'Mentoring', 'Academic Support', 'Computer Engineering']
    },
    {
      title: 'Helpdesk Support',
      company: 'Cisco Networking Academy',
      period: 'May - June 2024',
      description: [
        'Provided technical support for Cisco Networking Academy students',
        'Troubleshot network configuration issues and technical challenges',
        'Created documentation and tutorials for common problems',
        'Assisted students with CCNA course materials and lab exercises'
      ],
      technologies: ['Cisco Networking', 'Network Troubleshooting', 'Documentation', 'Student Support']
    },
    {
      title: 'Helpdesk Support',
      company: 'Python Professional Academy',
      period: 'February - March 2024',
      description: [
        'Assisted students with Python Professional Academy coursework',
        'Provided technical support for programming challenges',
        'Created user support documentation and training materials',
        'Helped students understand Python programming concepts'
      ],
      technologies: ['Python', 'Programming Support', 'Documentation', 'Student Assistance']
    },
    {
      title: 'Research Staff',
      company: 'IPB University',
      period: 'July - December 2023',
      description: [
        'Conducted research in computer engineering and technology',
        'Supported academic research projects and data collection',
        'Assisted in research documentation and analysis',
        'Contributed to research publications and presentations'
      ],
      technologies: ['Research Methodologies', 'Data Analysis', 'Academic Writing', 'Technology Research']
    }
  ];

  const getExperienceIcon = (title) => {
    const icons = {
      'Administrative Intern': '📋',
      'Software Engineer': '💻',
      'Assistant Lecturer': '👨‍🏫',
      'Helpdesk Support': '🎧',
      'Research Staff': '🔬'
    };
    return icons[title] || '💼';
  };

  const getGradientClass = (index) => {
    const gradients = [
      'from-blue-500 to-purple-600',
      'from-purple-500 to-indigo-600', 
      'from-indigo-500 to-blue-600',
      'from-teal-500 to-green-600',
      'from-green-500 to-teal-600',
      'from-cyan-500 to-blue-600'
    ];
    return gradients[index % gradients.length];
  };

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 transition-colors duration-300 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-32 left-10 w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-10 animate-float"></div>
        <div className="absolute bottom-32 right-10 w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-10 animate-pulse"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-sm font-semibold tracking-wide uppercase">
              💼 Career Journey
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A progressive journey through technology, education, and administration
          </p>
        </div>

        <div className="relative">
          {/* Enhanced Timeline line */}
          <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-indigo-500 rounded-full shadow-lg"></div>
          
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="relative mb-16"
              onMouseEnter={() => setHoveredExp(index)}
              onMouseLeave={() => setHoveredExp(null)}
            >
              {/* Enhanced Timeline dot with icon */}
              <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center">
                <div className={`w-12 h-12 bg-gradient-to-r ${getGradientClass(index)} rounded-full border-4 border-white dark:border-gray-900 shadow-lg flex items-center justify-center text-white text-lg group-hover:scale-110 transition-transform duration-300`}>
                  {getExperienceIcon(exp.title)}
                </div>
              </div>
              
              {/* Content with enhanced design */}
              <div className={`ml-20 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-16' : 'md:ml-auto md:pl-16'}`}>
                <div 
                  className={`group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 relative overflow-hidden ${
                    hoveredExp === index ? 'ring-2 ring-blue-500/50' : ''
                  }`}
                >
                  {/* Animated background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${getGradientClass(index)} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}></div>
                  
                  {/* Header */}
                  <div className="mb-6 relative z-10">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                          {exp.title}
                        </h3>
                        <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mt-1">
                          {exp.company}
                        </h4>
                      </div>
                      <div className="text-right">
                        <span className="inline-block bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-semibold">
                          {exp.period}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Responsibilities */}
                  <div className="mb-6 relative z-10">
                    <h5 className="text-sm font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                      ⭐ Key Responsibilities:
                    </h5>
                    <div className="space-y-3">
                      {exp.description.map((item, i) => (
                        <div key={i} className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm leading-relaxed">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Technologies */}
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-6 relative z-10">
                    <h5 className="text-sm font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                      🛠️ Technologies & Skills:
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className={`bg-gradient-to-r ${getGradientClass(index)} text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-md hover:shadow-lg transform hover:scale-110 transition-all duration-300 cursor-default`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Hover Effect Overlay */}
                  {hoveredExp === index && (
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl pointer-events-none transition-all duration-500"></div>
                  )}
                </div>
              </div>

              {/* Floating elements on hover */}
              {hoveredExp === index && (
                <>
                  <div className="absolute -top-2 -right-2 w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-ping"></div>
                  <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-bounce"></div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-12 border border-gray-200/50 dark:border-gray-700/50 shadow-lg">
            <div className="mb-6">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Ready for the Next Challenge
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                With diverse experience across technology, education, and administration, I'm excited to contribute to innovative projects and continue growing professionally.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="#contact" 
                className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Let's Connect
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
