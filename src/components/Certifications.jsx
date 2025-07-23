import React from 'react';

const Certifications = () => {
  const certifications = [
    {
      title: 'Junior Web Developer',
      issuer: 'Digital Talent Scholarship',
      description: 'Latest certification focusing on junior-level web development skills and modern programming practices.',
      skills: ['Web Development', 'Programming Fundamentals', 'Modern Frameworks', 'Best Practices'],
      category: 'Development'
    },
    {
      title: 'Fullstack Developer',
      issuer: 'ITBox',
      description: 'Comprehensive fullstack development certification covering both frontend and backend technologies.',
      skills: ['Frontend Development', 'Backend Development', 'Database Design', 'API Development'],
      category: 'Development'
    },
    {
      title: 'Web Development',
      issuer: 'MySkill',
      description: 'Professional certification in modern web development technologies and best practices.',
      skills: ['HTML/CSS', 'JavaScript', 'Responsive Design', 'Web Standards'],
      category: 'Development'
    },
    {
      title: 'CyberOps Associate',
      issuer: 'Cisco Networking Academy',
      description: 'Certification focused on cybersecurity operations, monitoring, and threat detection in enterprise environments.',
      skills: ['Security Monitoring', 'Threat Detection', 'Log Analysis', 'Security Tools'],
      category: 'Security'
    },
    {
      title: 'Cybersecurity Essentials',
      issuer: 'Cisco Networking Academy',
      description: 'Essential cybersecurity principles, threat analysis, and security implementation strategies.',
      skills: ['Threat Analysis', 'Security Implementation', 'Risk Assessment', 'Security Fundamentals'],
      category: 'Security'
    },
    {
      title: 'CCNA - Enterprise Networking',
      issuer: 'Cisco Networking Academy',
      description: 'Enterprise-level networking concepts including network security, QoS, and network management.',
      skills: ['Enterprise Networks', 'Network Security', 'QoS', 'Network Management'],
      category: 'Networking'
    },
    {
      title: 'CCNA - Switching, Routing',
      issuer: 'Cisco Networking Academy',
      description: 'Advanced networking certification covering switching and routing technologies for enterprise networks.',
      skills: ['Switching Technologies', 'Routing Protocols', 'VLAN Configuration', 'Network Troubleshooting'],
      category: 'Networking'
    },
    {
      title: 'CCNA - Introduction to Networks',
      issuer: 'Cisco Networking Academy',
      description: 'Fundamental networking concepts including network protocols, network models, and basic network configuration.',
      skills: ['Network Fundamentals', 'OSI Model', 'TCP/IP', 'Basic Configuration'],
      category: 'Networking'
    }
  ];

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Networking':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'Security':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      case 'Development':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  return (
    <section id="certifications" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading">Certifications</h2>
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="text-center p-6 bg-gray-100 dark:bg-gray-800 rounded-xl">
            <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">8</div>
            <div className="text-gray-600 dark:text-gray-300">Total Certifications</div>
          </div>
          <div className="text-center p-6 bg-gray-100 dark:bg-gray-800 rounded-xl">
            <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">5</div>
            <div className="text-gray-600 dark:text-gray-300">Cisco Certifications</div>
          </div>
          <div className="text-center p-6 bg-gray-100 dark:bg-gray-800 rounded-xl">
            <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">3</div>
            <div className="text-gray-600 dark:text-gray-300">Development Certifications</div>
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div key={index} className="card group hover:scale-105 transition-transform duration-300">
              <div className="flex justify-between items-start mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(cert.category)}`}>
                  {cert.category}
                </span>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {cert.title}
              </h3>
              
              <h4 className="text-sm text-primary-600 dark:text-primary-400 font-medium mb-3">
                {cert.issuer}
              </h4>
              
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                {cert.description}
              </p>
              
              <div className="border-t dark:border-gray-700 pt-4">
                <h5 className="text-xs font-semibold text-gray-900 dark:text-white mb-2 uppercase tracking-wide">
                  Key Skills:
                </h5>
                <div className="flex flex-wrap gap-1">
                  {cert.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center bg-gray-100 dark:bg-gray-800 rounded-2xl p-8">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Continuous Learning
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            I believe in staying current with technology trends and continuously expanding my skill set. 
            These certifications represent my commitment to professional development and expertise in various domains.
          </p>
          <a href="#contact" className="btn-primary">
            Let's Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
