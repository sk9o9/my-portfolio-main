import React, { useState, useEffect, useRef } from 'react';
import { FaCode, FaPython, FaReact, FaNodeJs, FaWindows, FaApple, FaDatabase, FaEnvelope, FaPuzzlePiece, FaComments, FaUsers, FaRegClock, FaLightbulb, FaChalkboardTeacher } from "react-icons/fa";

const technicalSkills = [
  { name: 'JavaScript', icon: <FaCode className="text-yellow-400" />, level: 90 },
  { name: 'Python', icon: <FaPython className="text-blue-400" />, level: 65 },
  { name: 'C#', icon: <FaCode className="text-purple-600" />, level: 55 },
  { name: 'React.js', icon: <FaReact className="text-cyan-400" />, level: 92 },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-600" />, level: 88 },
  { name: 'Express.js', icon: <FaCode className="text-gray-800" />, level: 85 },
  { name: 'MongoDB', icon: <FaDatabase className="text-green-700" />, level: 80 },
  { name: 'React Native', icon: <FaReact className="text-blue-500" />, level: 75 },
  { name: 'ASP.NET MVC', icon: <FaCode className="text-purple-600" />, level: 50 },
  { name: 'Postman', icon: <FaEnvelope className="text-orange-500" />, level: 80 },
];

const softSkills = [
  { name: 'Problem Solving', icon: <FaPuzzlePiece className="text-blue-400" /> },
  { name: 'Communication Skills', icon: <FaComments className="text-green-500" /> },
  { name: 'Teamwork', icon: <FaUsers className="text-purple-500" /> },
  { name: 'Time Management', icon: <FaRegClock className="text-yellow-500" /> },
  { name: 'Critical Thinking', icon: <FaLightbulb className="text-orange-400" /> },
  { name: 'Presentation', icon: <FaChalkboardTeacher className="text-pink-500" /> },
];

const SkillBar = ({ skill, isVisible, delay = 0 }) => {
  const [animatedLevel, setAnimatedLevel] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setAnimatedLevel(skill.level);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [isVisible, skill.level, delay]);

  return (
    <div className="mb-6 transform transition-all duration-500 hover:scale-105">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-xl">{skill.icon}</span>
          <span className="font-semibold text-gray-800">{skill.name}</span>
        </div>
        <span className="text-sm font-medium text-blue-600">{animatedLevel}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-1000 ease-out shadow-sm"
          style={{ width: `${animatedLevel}%` }}
        >
          <div className="h-full bg-white/20 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

const SoftSkillCard = ({ skill, isVisible, delay = 0 }) => {
  return (
    <div 
      className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-center mb-3">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-lg mr-4">
          {skill.icon}
        </div>
        <h4 className="font-semibold text-gray-800 text-lg">{skill.name}</h4>
      </div>
    </div>
  );
};

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="skills" 
      className="py-20 px-4 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            My Skills & Expertise
          </h2>
          <p className={`text-xl text-gray-600 max-w-2xl mx-auto transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{ transitionDelay: '200ms' }}>
            A comprehensive overview of my technical skills and personal strengths
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div className={`transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`} style={{ transitionDelay: '400ms' }}>
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white text-2xl mr-4">
                  💻
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Technical Skills</h3>
              </div>
              <div className="space-y-2">
                {technicalSkills.map((skill, index) => (
                  <SkillBar 
                    key={skill.name} 
                    skill={skill} 
                    isVisible={isVisible}
                    delay={index * 100}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Soft Skills */}
          <div className={`transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`} style={{ transitionDelay: '600ms' }}>
            <div className="mb-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center text-white text-2xl mr-4">
                  🧠
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Soft Skills</h3>
              </div>
            </div>
            <div className="grid gap-4">
              {softSkills.map((skill, index) => (
                <SoftSkillCard 
                  key={skill.name} 
                  skill={skill} 
                  isVisible={isVisible}
                  delay={800 + (index * 100)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Achievement Stats */}
        <div className={`mt-16 grid grid-cols-3 gap-8 justify-center transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: '1000ms' }}>
          {[
            { number: '2', label: 'Projects Completed', icon: '🚀' },
            { number: '5', label: 'Technologies Mastered', icon: '⚡' },
            { number: '4', label: 'Certificates Earned', icon: '📜' }
          ].map((stat, index) => (
            <div key={index} className="text-center bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-blue-600 mb-1">{stat.number}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;