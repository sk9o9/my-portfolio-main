import React from 'react';

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center py-6 px-8 bg-white shadow-md sticky top-0 z-50">
      <div className="font-bold text-xl">Sumit Khadka</div>
      <ul className="flex gap-8 text-lg">
        <li><a href="#home" className="hover:text-blue-500 transition">Home</a></li>
        <li><a href="#about" className="hover:text-blue-500 transition">About</a></li>
        <li><a href="#skills" className="hover:text-blue-500 transition">Skills</a></li>
        <li><a href="#projects" className="hover:text-blue-500 transition">Projects</a></li>
        <li><a href="#contact" className="hover:text-blue-500 transition">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar; 