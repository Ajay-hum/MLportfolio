import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const projects = [
    {
      name: "Multi-Agent-RAG(Retrieval Augmented Generation)",
      description: "A sophisticated multi-agent system that leverages RAG architecture to enhance information retrieval and generation capabilities using LLMs.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=500",
      technologies: ["React", "TypeScript", "Tailwind CSS", "AI APIs"],
      tags: ["Python", "FastAPI", "AI", "RAG", "LLMs"],
      github: "https://github.com/Ajay-hum/multi-agent-rag",
      live: "#"
    },
    {
      name: "Salary Prediction Model",
      description: "A machine learning model that predicts salaries based on experience, location, and skills using linear regression. Deployed with Flask on Render.",
      image: "https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=500",
      technologies: ["Python", "Scikit-learn", "Flask", "Pandas"],
      tags: ["Regression", "Deployment"],
      github: "https://github.com/Ajay-hum/salary-predictor",
      live: "https://salary-predictor-5txl.onrender.com"
    },
    {
      name: "Iris Flower Classification",
      description: "Deep learning model for classifying iris flowers with 95% accuracy using Keras and neural networks. Deployed with Streamlit on Render.",
      image: "https://images.pexels.com/photos/414660/pexels-photo-414660.jpeg?auto=compress&cs=tinysrgb&w=500",
      technologies: ["Python", "Keras", "TensorFlow", "Streamlit"],
      tags: ["Classification", "Deep Learning"],
      github: "https://github.com/Ajay-hum/iris-classification",
      live: "https://iris-classification-0rxj.onrender.com"
    },
    {
      name: "House Price Prediction",
      description: "A machine learning model that predicts housing prices using regression and feature engineering techniques. Deployed with Streamlit on Render.",
      image: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=500",
      technologies: ["Python", "Scikit-learn", "Streamlit", "Pandas"],
      tags: ["Regression", "Deployment"],
      github: "https://github.com/Ajay-hum/house-price-prediction",
      live: "https://house-price-prediction-4ie4.onrender.com"
    },
    {
      name: "Supermarket Sales EDA",
      description: "Comprehensive exploratory data analysis of supermarket sales data using Seaborn and Pandas for business insights.",
      image: "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=500",
      technologies: ["Python", "Pandas", "Seaborn", "Matplotlib"],
      tags: ["EDA", "Data Visualization"],
      github: "https://github.com/Ajay-hum/supermarket-eda",
      live: "https://supermarket-analysis.netlify.app"
    },
    {
      name: "CurateChain",
      description: "Frontend AI social platform built as a group project, featuring modern UI and intelligent content curation.",
      image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=500",
      technologies: ["React", "TypeScript", "Tailwind CSS", "AI APIs"],
      tags: ["Frontend", "AI", "Social Platform"],
      github: "https://github.com/Ajay-hum/curatechain",
      live: "#"
    }
  ];

  const filters = ['All', 'Regression', 'Classification', 'EDA', 'Deep Learning', 'Frontend', 'AI'];

  const filteredProjects = selectedFilter === 'All' 
    ? projects 
    : projects.filter(project => project.tags.includes(selectedFilter));

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            Explore some of my key machine learning projects and applications
          </p>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  selectedFilter === filter
                    ? 'bg-blue-600 text-white'
                    : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 flex space-x-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-blue-600 text-white text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                  >
                    <Github className="h-4 w-4 mr-1" />
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                  >
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
