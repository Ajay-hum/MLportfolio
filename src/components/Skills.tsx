import React, { useState } from 'react';
import { Brain, Code, Database, Server, GitBranch, Users } from 'lucide-react';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('ML Tools');

  const skillCategories = {
    'ML Tools': {
      icon: <Brain className="h-5 w-5" />,
      skills: [
        { name: 'Scikit-learn', level: 90 },
        { name: 'Pandas', level: 95 },
        { name: 'NumPy', level: 90 },
        { name: 'TensorFlow', level: 85 },
        { name: 'Keras', level: 80 },
        { name: 'Matplotlib', level: 85 },
        { name: 'Seaborn', level: 90 }
      ]
    },
    'Languages': {
      icon: <Code className="h-5 w-5" />,
      skills: [
        { name: 'Python', level: 95 },
        { name: 'SQL', level: 80 },
        { name: 'JavaScript', level: 70 },
        { name: 'HTML/CSS', level: 75 },
        { name: 'R', level: 60 }
      ]
    },
    'Deployment': {
      icon: <Server className="h-5 w-5" />,
      skills: [
        { name: 'Flask', level: 80 },
        { name: 'Streamlit', level: 70 },
        { name: 'Docker', level: 50 },
        { name: 'AWS', level: 45 },
        { name: 'Heroku', level: 70 }
      ]
    },
    'Version Control': {
      icon: <GitBranch className="h-5 w-5" />,
      skills: [
        { name: 'Git', level: 85 },
        { name: 'GitHub', level: 90 },
        { name: 'GitLab', level: 70 }
      ]
    }
  };

  const softSkills = [
    'Problem Solving',
    'Communication',
    'Teamwork',
    'Leadership',
    'Critical Thinking',
    'Time Management',
    'Adaptability',
    'Continuous Learning'
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Technical skills and tools I use to build intelligent solutions
          </p>
        </div>

        {/* Technical Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
            Technical Skills
          </h3>
          
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {Object.keys(skillCategories).map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`flex items-center px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                  activeTab === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {skillCategories[category as keyof typeof skillCategories].icon}
                <span className="ml-2">{category}</span>
              </button>
            ))}
          </div>

          {/* Skills Display */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8">
            <div className="grid md:grid-cols-2 gap-6">
              {skillCategories[activeTab as keyof typeof skillCategories].skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-900 dark:text-white font-medium">
                      {skill.name}
                    </span>
                    <span className="text-gray-600 dark:text-gray-400 text-sm">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
            Soft Skills
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {softSkills.map((skill, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 text-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                <Users className="h-6 w-6 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                <span className="text-gray-900 dark:text-white font-medium text-sm">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;