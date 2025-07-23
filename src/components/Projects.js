import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Web Admin Portal',
      company: 'PT Wijaya Karya',
      description: 'Developed a comprehensive web-based administrative portal for managing company operations, user accounts, and system configurations. The portal features role-based access control, real-time data visualization, and responsive design.',
      technologies: ['JavaScript', 'PHP', 'MySQL', 'HTML/CSS', 'Bootstrap'],
      features: [
        'User Management System',
        'Role-based Access Control',
        'Real-time Dashboard',
        'Data Export/Import',
        'Responsive Design'
      ],
      status: 'Completed'
    },
    {
      title: 'Scholarship Helpdesk System',
      company: 'IPB University',
      description: 'Built a comprehensive helpdesk system for managing scholarship applications and student inquiries. The system streamlines the application process and provides efficient communication channels between students and administrators.',
      technologies: ['Python', 'Django', 'PostgreSQL', 'JavaScript', 'CSS'],
      features: [
        'Application Tracking',
        'Document Management',
        'Automated Notifications',
        'Reporting Dashboard',
        'Multi-language Support'
      ],
      status: 'Completed'
    },
    {
      title: 'Network Configuration Tools',
      company: 'Cisco Networking Academy',
      description: 'Developed automation tools and scripts for network configuration and troubleshooting. Created educational materials and interactive tutorials for networking students.',
      technologies: ['Python', 'Cisco IOS', 'Network Protocols', 'Shell Scripting'],
      features: [
        'Automated Configuration',
        'Network Monitoring',
        'Troubleshooting Scripts',
        'Educational Tutorials',
        'Interactive Labs'
      ],
      status: 'Completed'
    },
    {
      title: 'Portfolio Website',
      company: 'Personal Project',
      description: 'A modern, responsive portfolio website built with React.js and Tailwind CSS. Features dark mode support, smooth animations, and optimized performance.',
      technologies: ['React.js', 'Tailwind CSS', 'JavaScript', 'HTML5'],
      features: [
        'Responsive Design',
        'Dark Mode Support',
        'Smooth Animations',
        'SEO Optimized',
        'Performance Optimized'
      ],
      status: 'In Progress'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="card group hover:scale-105 transition-transform duration-300">
              <div className="mb-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Completed' 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                      : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <h4 className="text-sm text-primary-600 dark:text-primary-400 font-medium mb-3">
                  {project.company}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="mb-4">
                <h5 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Key Features:
                </h5>
                <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="border-t dark:border-gray-700 pt-4">
                <h5 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Technologies:
                </h5>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 px-2 py-1 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Want to see more of my work or collaborate on a project?
          </p>
          <a href="#contact" className="btn-primary">
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
