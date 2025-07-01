import React from 'react';

const projects = [
  {
    title: 'TideBite',
    description: 'A mobile application made using MERN with React Native. It helps users manage groceries in their house or restaurants and allows them to buy new groceries from different stores. Features Khalti payment integration.',
    technologies: 'MERN, React Native',
    link: 'https://github.com/sk909/TideBite',
  },
  {
    title: 'BookLib',
    description: 'An e-commerce platform for books, made with React for the frontend and ASP.NET for the backend. Users can buy different books, and there\'s an admin panel for CRUD operations on books. This project was made by 3 members, where I developed the frontend and some RESTful APIs.',
    technologies: 'React, ASP.NET, PostgreSQL',
    link: 'https://github.com/sk909/BookLib',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">My Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="bg-blue-50 rounded-lg shadow p-6 flex flex-col">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="mb-2 text-gray-700">{project.description}</p>
              <div className="mb-4 text-sm text-blue-700">Technologies: {project.technologies}</div>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-auto text-blue-600 hover:underline">View on GitHub</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 