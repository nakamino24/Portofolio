import React, { useState } from 'react';

const About = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 relative z-10">
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent text-sm font-semibold tracking-wide uppercase">
            👋 Get to Know Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">About Me</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full shadow-lg"></div>
        </div>

        <div className="max-w-4xl mx-auto flip-card" onClick={() => setIsFlipped(!isFlipped)}>
          <div className={`flip-card-inner ${isFlipped ? 'flipped' : ''}`}>
            {/* Front Side */}
            <div className="flip-card-front bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/20 dark:border-gray-700/30">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">👨‍💻 Personal Info</h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li><strong>Name:</strong> Muhammad Quways Al-Qarany</li>
                <li><strong>Email:</strong> faiz.quways@gmail.com</li>
                <li><strong>Phone:</strong> 0895-0327-9320</li>
                <li><strong>Location:</strong> Pondok Gede, Bekasi</li>
                <li><strong>Education:</strong> IPB University</li>
                <li><strong>Degree:</strong> Diploma in Computer Engineering</li>
                <li><strong>GPA:</strong> 3.69 / 4.00</li>
              </ul>
              <p className="mt-6 text-sm text-indigo-600 dark:text-indigo-400">💡 Click to read my story!</p>
            </div>

            {/* Back Side */}
            <div className="flip-card-back bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/20 dark:border-gray-700/30">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">📚 Who I Am</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                I'm <strong>Muhammad Quways Al-Qarany</strong>, a fresh graduate of IPB University passionate about full-stack development and ethical hacking.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                I've worked on software engineering projects at PT Wijaya Karya, assisted academic activities as a teaching assistant, and supported IT operations at Cisco Networking Academy.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                I'm constantly learning and building — aiming to grow into a world-class developer and AI innovator.
              </p>
              <p className="mt-6 text-sm text-indigo-600 dark:text-indigo-400">💡 Click to go back!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
