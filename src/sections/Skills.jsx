import React from 'react';

const technicalSkills = [
  { name: 'JavaScript' },
  { name: 'Python' },
  { name: 'C#' },
  { name: 'React.js' },
  { name: 'Node.js' },
  { name: 'Express.js' },
  { name: 'MongoDB' },
  { name: 'Windows' },
  { name: 'macOS' },
  { name: 'Visual Studio' },
  { name: 'Postman' },
];

const softSkills = [
  'Problem Solving',
  'Communication Skills',
  'Teamwork',
  'Time Management',
  'Critical Thinking',
  'Presentation',
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-blue-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
            <div className="flex flex-wrap gap-3">
              {technicalSkills.map(skill => (
                <span key={skill.name} className="bg-white border border-blue-200 px-4 py-2 rounded shadow text-blue-700 font-medium">
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Soft Skills</h3>
            <ul className="list-disc list-inside text-gray-700">
              {softSkills.map(skill => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 