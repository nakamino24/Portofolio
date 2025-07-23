import React from 'react';

const Skills = () => {
  const technicalSkills = [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 85 },
    { name: 'JavaScript', level: 88 },
    { name: 'PHP', level: 82 },
    { name: 'SQL', level: 85 },
    { name: 'PostgreSQL', level: 80 },
    { name: 'Microsoft Office', level: 95 },
  ];

  const softSkills = [
    'Communication',
    'Teamwork',
    'Problem Solving',
    'Time Management',
    'Critical Thinking',
    'Adaptability',
    'Leadership',
    'Project Management',
  ];

  return (
    <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading">Skills</h2>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div className="card">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Technical Skills
            </h3>
            <div className="space-y-4">
              {technicalSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {skill.name}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-primary-600 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="card">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Soft Skills
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {softSkills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3 text-center transition-colors duration-300 hover:bg-primary-100 dark:hover:bg-primary-900"
                >
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Technologies */}
        <div className="mt-12 card">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
            Technologies & Tools
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'React.js',
              'Node.js',
              'Git',
              'Linux',
              'Cisco Networking',
              'Cybersecurity',
              'Database Design',
              'Web Development',
              'System Administration',
              'Network Configuration',
            ].map((tech, index) => (
              <span
                key={index}
                className="bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
