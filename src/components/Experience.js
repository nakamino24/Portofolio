import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: 'Software Engineer',
      company: 'PT Wijaya Karya',
      period: '2023 - Present',
      description: [
        'Developed and maintained web applications using modern technologies',
        'Collaborated with cross-functional teams to deliver high-quality software solutions',
        'Implemented responsive web designs and optimized application performance',
        'Contributed to the development of Web Admin Portal systems'
      ],
      technologies: ['JavaScript', 'PHP', 'SQL', 'HTML/CSS']
    },
    {
      title: 'Teaching Assistant & Research Staff',
      company: 'IPB University',
      period: '2022 - 2023',
      description: [
        'Assisted in teaching computer engineering courses to undergraduate students',
        'Conducted research in software engineering and computer systems',
        'Mentored students in programming and technical problem-solving',
        'Contributed to academic research projects and publications'
      ],
      technologies: ['Python', 'Research Methodologies', 'Academic Writing', 'Mentoring']
    },
    {
      title: 'Helpdesk Support',
      company: 'Cisco Networking Academy & Python Professional Academy',
      period: '2021 - 2022',
      description: [
        'Provided technical support for Cisco Networking Academy students',
        'Assisted students with Python Professional Academy coursework',
        'Troubleshot network configuration issues and programming challenges',
        'Created documentation and tutorials for common technical problems'
      ],
      technologies: ['Cisco Networking', 'Python', 'Network Troubleshooting', 'Documentation']
    },
    {
      title: 'Administrative Intern',
      company: 'PT Compotec International',
      period: '2020 - 2021',
      description: [
        'Managed administrative tasks and office operations',
        'Supported various departments with data entry and documentation',
        'Assisted in project coordination and communication',
        'Gained experience in corporate environment and business processes'
      ],
      technologies: ['Microsoft Office', 'Data Management', 'Project Coordination']
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
