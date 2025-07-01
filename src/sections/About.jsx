import React, { useState, useEffect, useRef } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('story');
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

  const tabs = [
    { id: 'story', label: 'My Story', icon: '📖' },
    { id: 'education', label: 'Education', icon: '🎓' },
    { id: 'experience', label: 'Experience', icon: '💼' },
    { id: 'interests', label: 'Interests', icon: '🎯' }
  ];

  const achievements = [
    { icon: '🏆', title: 'Academic Excellence', description: 'Consistent high performance in computing studies' },
    { icon: '💡', title: 'Innovation Focus', description: 'Always exploring new technologies and methodologies' },
    { icon: '🤝', title: 'Team Player', description: 'Strong collaboration skills in cross-functional teams' },
    { icon: '🚀', title: 'Problem Solver', description: 'Passionate about tackling complex challenges' }
  ];

  return (
    <section 
      id="about" 
      className="py-20 px-4 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            About Me
          </h2>
          <p className={`text-xl text-gray-600 max-w-2xl mx-auto transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{ transitionDelay: '200ms' }}>
            Passionate developer dedicated to creating innovative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Tab Navigation */}
            <div className={`flex flex-wrap gap-2 mb-8 transition-all duration-1000 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`} style={{ transitionDelay: '400ms' }}>
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-blue-50 shadow-md'
                  }`}
                >
                  <span>{tab.icon}</span>
                  <span className="font-medium">{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className={`bg-white rounded-2xl p-8 shadow-xl transition-all duration-1000 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`} style={{ transitionDelay: '600ms' }}>
              
              {activeTab === 'story' && (
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                      S
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">My Journey</h3>
                      <p className="text-lg text-gray-700 leading-relaxed mb-4">
                        I am a <span className="font-semibold text-blue-600">self-driven full-stack developer</span> committed to my work, with hands-on experience in both front-end and back-end development. My passion for technology drives me to constantly learn and adapt to new challenges.
                      </p>
                      <p className="text-lg text-gray-700 leading-relaxed mb-4">
                        With <span className="font-semibold text-purple-600">proven ability to collaborate effectively</span> in cross-functional teams, I bring a keen eye for detail and a passion for solving complex problems through innovative solutions.
                      </p>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        I'm seeking a dynamic role where I can leverage my experience in design and development, contribute to real-world projects, and grow within a forward-thinking company committed to <span className="font-semibold text-blue-600">digital transformation and continuous learning</span>.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'education' && (
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl flex-shrink-0">
                      🎓
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-800 mb-6">Educational Background</h3>
                      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border-l-4 border-blue-500">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-xl font-semibold text-gray-800">BSc (Hons) Computing</h4>
                          <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                            2022 - Present
                          </span>
                        </div>
                        <p className="text-gray-700 mb-2">
                          <span className="font-medium">Islington College</span> - London Metropolitan University
                        </p>
                        <p className="text-gray-600 text-sm">
                          Focusing on software development, database systems, and modern web technologies
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'experience' && (
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white text-2xl flex-shrink-0">
                      💼
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-6">Professional Experience</h3>
                      <div className="space-y-4">
                        <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-6 border-l-4 border-orange-500">
                          <h4 className="text-lg font-semibold text-gray-800 mb-2">Full-Stack Development</h4>
                          <p className="text-gray-700 mb-2">
                            Hands-on experience in both front-end and back-end development using modern technologies
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {['React.js', 'Node.js', 'MongoDB', 'Express.js'].map((tech) => (
                              <span key={tech} className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border-l-4 border-purple-500">
                          <h4 className="text-lg font-semibold text-gray-800 mb-2">Design & Development Internship</h4>
                          <p className="text-gray-700">
                            Gained valuable experience in design principles and development methodologies
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'interests' && (
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl flex-shrink-0">
                      🎯
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-6">Interests & Hobbies</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                          { icon: '💻', title: 'Open Source', desc: 'Contributing to community projects' },
                          { icon: '📚', title: 'Learning', desc: 'Staying updated with latest tech trends' },
                          { icon: '🎮', title: 'Gaming', desc: 'Exploring game development concepts' },
                          { icon: '🏃‍♂️', title: 'Fitness', desc: 'Maintaining work-life balance' }
                        ].map((interest, index) => (
                          <div key={index} className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-lg p-4 border border-pink-200">
                            <div className="flex items-center gap-3 mb-2">
                              <span className="text-2xl">{interest.icon}</span>
                              <h4 className="font-semibold text-gray-800">{interest.title}</h4>
                            </div>
                            <p className="text-sm text-gray-600">{interest.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Achievements */}
            <div className={`bg-white rounded-2xl p-6 shadow-xl transition-all duration-1000 transform ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`} style={{ transitionDelay: '800ms' }}>
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <span className="text-2xl">⭐</span>
                Key Strengths
              </h3>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                    <span className="text-2xl">{achievement.icon}</span>
                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm">{achievement.title}</h4>
                      <p className="text-xs text-gray-600">{achievement.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Facts */}
            <div className={`bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-6 text-white shadow-xl transition-all duration-1000 transform ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`} style={{ transitionDelay: '1000ms' }}>
              <h3 className="text-xl font-bold mb-6">Quick Facts</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-lg">📍</span>
                  <span className="text-sm">Based in Kathmandu, Nepal</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-lg">💼</span>
                  <span className="text-sm">Full-Stack Developer</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-lg">🎯</span>
                  <span className="text-sm">MERN Stack Specialist</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-lg">🌟</span>
                  <span className="text-sm">Open to Opportunities</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;