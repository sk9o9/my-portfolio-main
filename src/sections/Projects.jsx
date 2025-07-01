import React, { useState, useEffect, useRef } from 'react';

const projects = [
  {
    id: 1,
    title: 'TideBite',
    description: 'A comprehensive mobile application built with MERN stack and React Native for seamless grocery management. Features include inventory tracking for homes and restaurants, multi-store shopping capabilities, and secure Khalti payment integration for effortless transactions.',
    detailedDescription: 'TideBite revolutionizes grocery management by providing a unified platform for both household and restaurant inventory control. The app features real-time stock tracking, automated low-stock alerts, and seamless integration with multiple grocery stores for easy restocking.',
    technologies: ['React Native', 'Node.js', 'MongoDB', 'Express.js', 'Khalti API'],
    primaryTech: 'MERN + React Native',
    link: 'https://github.com/sk909/TideBite',
    icon: '🍎',
    gradient: 'from-green-400 to-blue-500',
    bgGradient: 'from-green-50 to-blue-50',
    features: [
      'Real-time inventory tracking',
      'Multi-store integration',
      'Secure payment gateway',
      'Push notifications',
      'User-friendly interface'
    ],
    status: 'Completed',
    type: 'Mobile App'
  },
  {
    id: 2,
    title: 'BookLib',
    description: 'A sophisticated e-commerce platform for book enthusiasts, featuring a React-powered frontend and robust ASP.NET backend. Includes comprehensive admin dashboard for inventory management, user authentication, and seamless book browsing experience.',
    detailedDescription: 'BookLib is a full-featured e-commerce solution designed specifically for book lovers. The platform offers an intuitive shopping experience with advanced search capabilities, personalized recommendations, and a powerful admin panel for complete store management.',
    technologies: ['React', 'ASP.NET Core', 'PostgreSQL', 'JWT', 'RESTful APIs'],
    primaryTech: 'React + ASP.NET',
    link: 'https://github.com/sk909/BookLib',
    icon: '📚',
    gradient: 'from-purple-400 to-pink-500',
    bgGradient: 'from-purple-50 to-pink-50',
    features: [
      'Advanced search & filtering',
      'Secure user authentication',
      'Admin CRUD operations',
      'Responsive design',
      'RESTful API architecture'
    ],
    status: 'Completed',
    type: 'Web Application',
    teamSize: '3 members'
  },
];

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
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

  const ProjectCard = ({ project, index }) => (
    <div
      className={`group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${600 + index * 200}ms` }}
      onMouseEnter={() => setHoveredProject(project.id)}
      onMouseLeave={() => setHoveredProject(null)}
    >
      {/* Gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${project.bgGradient} opacity-50 group-hover:opacity-70 transition-opacity duration-300`}></div>
      
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-4 right-4 w-20 h-20 bg-white rounded-full animate-pulse"></div>
        <div className="absolute bottom-4 left-4 w-16 h-16 bg-white rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 p-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className={`w-14 h-14 bg-gradient-to-br ${project.gradient} rounded-xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
              {project.icon}
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-gray-800 group-hover:to-blue-600 group-hover:bg-clip-text transition-all duration-300">
                {project.title}
              </h3>
              <div className="flex items-center gap-2 mt-1">
                <span className={`px-2 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${project.gradient} text-white`}>
                  {project.type}
                </span>
                <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-700">
                  {project.status}
                </span>
              </div>
            </div>
          </div>
          
          <button
            onClick={() => setActiveProject(activeProject === project.id ? null : project.id)}
            className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
          >
            <svg 
              className={`w-5 h-5 text-gray-600 transition-transform duration-300 ${activeProject === project.id ? 'rotate-180' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {/* Description */}
        <p className="text-gray-700 leading-relaxed mb-6 text-sm">
          {activeProject === project.id ? project.detailedDescription : project.description}
        </p>

        {/* Technologies */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <span className="text-blue-500">⚡</span>
            Technologies Used
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, techIndex) => (
              <span 
                key={techIndex}
                className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded-full hover:bg-blue-200 transition-colors duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Expanded Content */}
        {activeProject === project.id && (
          <div className="space-y-4 animate-fadeIn">
            <div>
              <h4 className="text-sm font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <span className="text-green-500">✨</span>
                Key Features
              </h4>
              <ul className="space-y-2">
                {project.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            
            {project.teamSize && (
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="text-purple-500">👥</span>
                Team Size: {project.teamSize}
              </div>
            )}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-3 mt-6">
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${project.gradient} text-white rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm font-medium`}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            View Code
          </a>
          
          <button 
            onClick={() => setActiveProject(activeProject === project.id ? null : project.id)}
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all duration-300 text-sm font-medium"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {activeProject === project.id ? 'Less Info' : 'More Info'}
          </button>
        </div>
      </div>

      {/* Hover effect indicator */}
      {hoveredProject === project.id && (
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse"></div>
      )}
    </div>
  );

  return (
    <section 
      id="projects" 
      className="py-20 px-4 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-20 right-40 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            My Projects
          </h2>
          <p className={`text-xl text-gray-600 max-w-2xl mx-auto transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{ transitionDelay: '200ms' }}>
            Showcasing innovative solutions built with modern technologies
          </p>
          
          {/* Stats */}
          <div className={`flex justify-center gap-8 mt-8 transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{ transitionDelay: '400ms' }}>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{projects.length}</div>
              <div className="text-sm text-gray-600">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">5+</div>
              <div className="text-sm text-gray-600">Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">100%</div>
              <div className="text-sm text-gray-600">Completion</div>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: '1000ms' }}>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            <span className="text-lg">🚀</span>
            <span className="font-medium">More projects coming soon!</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Projects;