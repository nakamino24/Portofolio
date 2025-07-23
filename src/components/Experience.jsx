import React from 'react';

const Experience = () => {
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

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading">Professional Experience</h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-primary-200 dark:bg-primary-800"></div>
          
          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-12">
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white dark:border-gray-900"></div>
              
              {/* Content */}
              <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:ml-auto md:pl-12'}`}>
                <div className="card">
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {exp.title}
                    </h3>
                    <h4 className="text-lg text-primary-600 dark:text-primary-400 font-medium">
                      {exp.company}
                    </h4>
                    <p className="text-gray-500 dark:text-gray-400 font-medium">
                      {exp.period}
                    </p>
                  </div>
                  
                  <ul className="list-disc list-inside space-y-2 mb-4 text-gray-600 dark:text-gray-300">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
