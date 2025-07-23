import React from 'react';

const Hero = () => {
  return (
    <div id="home" className="flex flex-col justify-center items-center text-center bg-gray-100 dark:bg-gray-800 h-screen">
      <div className="max-w-3xl">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">Hi, I'm Muhammad Quways Al-Qarany</h1>
        <p className="text-lg mb-8 text-gray-600 dark:text-gray-300">
          A Computer Engineering Graduate and Software Engineer passionate about developing innovative solutions.
        </p>
        <a href="#contact" className="btn-primary">
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default Hero;
