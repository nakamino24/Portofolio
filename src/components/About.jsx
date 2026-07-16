import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">About Me</h2>
        <p className="text-lg text-center mb-8">
          I am Muhammad Quways Al-Qarany, a Computer Engineering graduate from IPB University with experience in software development, administrative work, and technical support.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Education</h3>
            <p><strong>Diploma in Computer Engineering</strong></p>
            <p>IPB University | GPA: 3.69/4.00</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Experience</h3>
            <div className="space-y-3">
              <h4 className="font-medium">Software Engineer</h4>
              <p className="text-sm">PT Wijaya Karya | Aug 2024 - Jan 2025</p>
            </div>
            <div className="space-y-3">
              <h4 className="font-medium">Assistant Lecturer</h4>
              <p className="text-sm">IPB University | Jan - Jul 2024</p>
            </div>
            <div className="space-y-3">
              <h4 className="font-medium">Helpdesk Support</h4>
              <p className="text-sm">Cisco Networking Academy | May - Jun 2024</p>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200">
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
