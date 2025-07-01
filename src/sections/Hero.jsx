import React from 'react';
import Button from '../components/Button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-white to-blue-50">
      <h1 className="text-5xl md:text-7xl font-extrabold mb-4">Hi, I'm Sumit Khadka</h1>
      <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-blue-600">A Self-Driven Full-Stack Developer</h2>
      <p className="max-w-xl mb-8 text-lg text-gray-700">
        Passionate about building scalable and robust web applications with HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB.
      </p>
      <div className="flex gap-4 justify-center">
        <Button as="a" href="#projects">View My Work</Button>
        <Button as="a" href="#contact" className="bg-gray-800 hover:bg-gray-900">Get in Touch</Button>
      </div>
    </section>
  );
};

export default Hero; 