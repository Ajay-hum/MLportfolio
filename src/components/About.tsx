import React from 'react';
import { Brain, Code, Database, Award } from 'lucide-react';

const About = () => {
  const timeline = [
    {
      title: "Yomi Denzel Foundation",
      period: "2023-2024",
      description: "Python, ML & Data science",
      icon: <Brain className="h-6 w-6" />
    },
    {
      title: "NerdzFactory",
      period: "Oct-Dec 2024",
      description: "Frontend Development Training",
      icon: <Code className="h-6 w-6" />
    },
    {
      title: "Personal ML Courses",
      period: "Ongoing",
      description: "Continuous learning in ML & AI",
      icon: <Database className="h-6 w-6" />
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            I'm a passionate Machine Learning Engineer with expertise in Python, TensorFlow, and data science. 
            I solve complex problems using AI and machine learning techniques.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              My Journey
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              I specialize in building intelligent systems that solve real-world problems. 
              My expertise spans across machine learning algorithms, data analysis, and model deployment. 
              I work with Python, Scikit-learn, TensorFlow, and various data science tools to create 
              impactful solutions.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              My approach combines solid technical foundations with creative problem-solving, 
              always focusing on practical applications that can make a difference. I enjoy 
              working on projects ranging from predictive modeling to deep learning applications.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900 rounded-full">
                <Brain className="h-4 w-4 text-blue-600 dark:text-blue-400 mr-2" />
                <span className="text-sm font-medium text-blue-800 dark:text-blue-200">Machine Learning</span>
              </div>
              <div className="flex items-center px-4 py-2 bg-green-100 dark:bg-green-900 rounded-full">
                <Database className="h-4 w-4 text-green-600 dark:text-green-400 mr-2" />
                <span className="text-sm font-medium text-green-800 dark:text-green-200">Data Science</span>
              </div>
              <div className="flex items-center px-4 py-2 bg-purple-100 dark:bg-purple-900 rounded-full">
                <Code className="h-4 w-4 text-purple-600 dark:text-purple-400 mr-2" />
                <span className="text-sm font-medium text-purple-800 dark:text-purple-200">Python Development</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Training & Development
            </h3>
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                    <div className="text-blue-600 dark:text-blue-400">
                      {item.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {item.title}
                      </h4>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {item.period}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;