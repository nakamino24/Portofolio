import React, { useState, useEffect, useRef } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const skillsRef = useRef(null);
  
  const technicalSkills = [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 85 },
    { name: 'JavaScript', level: 88 },
    { name: 'PHP', level: 82 },
    { name: 'SQL', level: 85 },
    { name: 'PostgreSQL', level: 80 },
    { name: 'Microsoft Office', level: 95 },
  ];
  
  const administrationSkills = [
    { name: 'Project Coordination', level: 92 },
    { name: 'Data Management', level: 88 },
    { name: 'Office Operations', level: 95 },
    { name: 'Documentation', level: 90 },
    { name: 'Process Optimization', level: 85 },
    { name: 'Team Support', level: 88 },
    { name: 'Client Relations', level: 87 },
    { name: 'Administrative Planning', level: 89 },
  ];
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );
    
    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

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

  const getSkillIcon = (skillName) => {
    const icons = {
      'HTML': '🌐',
      'CSS': '🎨',
      'JavaScript': '⚡',
      'PHP': '🐘',
      'SQL': '🗄️',
      'PostgreSQL': '🐘',
      'Microsoft Office': '📊',
      'Project Coordination': '📋',
      'Data Management': '📈',
      'Office Operations': '🏢',
      'Documentation': '📝',
      'Process Optimization': '⚙️',
      'Team Support': '🤝',
      'Client Relations': '💼',
      'Administrative Planning': '📅'
    };
    return icons[skillName] || '💻';
  };

  const categories = [
    { id: 'all', name: 'All Skills', count: technicalSkills.length + administrationSkills.length },
    { id: 'technical', name: 'Technical', count: technicalSkills.length },
    { id: 'administration', name: 'Administration', count: administrationSkills.length }
  ];

  const filteredSkills = () => {
    if (activeCategory === 'technical') return technicalSkills;
    if (activeCategory === 'administration') return administrationSkills;
    return [...technicalSkills, ...administrationSkills];
  };

  return (
    <section ref={skillsRef} id="skills" className="py-20 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent text-sm font-semibold tracking-wide uppercase">
              💪 Professional Expertise
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Skills & Competencies
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive blend of technical programming skills and administrative excellence
          </p>
        </div>

        {/* Skill Categories Filter */}
        <div className="flex flex-wrap justify-center mb-12 gap-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600'
              }`}
            >
              {category.name}
              <span className="ml-2 px-2 py-1 rounded-full text-xs bg-white/20">
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredSkills().map((skill, index) => (
            <div
              key={index}
              className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="text-3xl animate-bounce">{getSkillIcon(skill.name)}</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white text-lg group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {skill.name}
                    </h4>
                    <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      {technicalSkills.includes(skill) ? 'Technical' : 'Administration'}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">{skill.level}%</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Proficiency</div>
                </div>
              </div>
              
              {/* Animated Progress Bar */}
              <div className="relative">
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                  <div
                    className="h-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 transition-all duration-1000 ease-out relative overflow-hidden"
                    style={{ 
                      width: isVisible ? `${skill.level}%` : '0%',
                      transition: `width ${1 + index * 0.1}s ease-out ${index * 0.1}s`
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 animate-pulse"></div>
                  </div>
                </div>
              </div>
              
              {/* Skill Level Badge */}
              <div className="mt-4 flex justify-center">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  skill.level >= 90 ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                  skill.level >= 80 ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
                  'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                }`}>
                  {skill.level >= 90 ? 'Expert' : skill.level >= 80 ? 'Advanced' : 'Intermediate'}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Professional Skills
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {softSkills.map((skill, index) => (
              <div
                key={index}
                className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-4 text-center border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 dark:hover:from-indigo-900/20 dark:hover:to-purple-900/20"
              >
                <div className="text-2xl mb-2 group-hover:animate-bounce">💡</div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies & Tools */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Technologies & Tools
          </h3>
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 shadow-lg">
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { name: 'React.js', icon: '⚛️', color: 'from-cyan-400 to-blue-500' },
                { name: 'Node.js', icon: '🟢', color: 'from-green-400 to-green-600' },
                { name: 'Git', icon: '📚', color: 'from-orange-400 to-red-500' },
                { name: 'Linux', icon: '🐧', color: 'from-yellow-400 to-orange-500' },
                { name: 'Cisco Networking', icon: '🌐', color: 'from-blue-500 to-indigo-600' },
                { name: 'Cybersecurity', icon: '🔒', color: 'from-red-500 to-pink-600' },
                { name: 'Database Design', icon: '🗄️', color: 'from-purple-500 to-indigo-600' },
                { name: 'Web Development', icon: '🌍', color: 'from-teal-400 to-blue-500' },
                { name: 'System Administration', icon: '⚙️', color: 'from-gray-500 to-gray-700' },
                { name: 'Network Configuration', icon: '🔧', color: 'from-indigo-500 to-purple-600' },
              ].map((tech, index) => (
                <div
                  key={index}
                  className={`group bg-gradient-to-r ${tech.color} p-3 rounded-xl text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 cursor-default flex items-center gap-2 hover:animate-pulse`}
                >
                  <span className="text-lg group-hover:animate-spin">{tech.icon}</span>
                  <span className="text-sm">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
