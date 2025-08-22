import React from 'react';
import { Award, Calendar, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "Yomi Denzel Foundation",
      subtitle: "Python, ML & Data science",
      period: "Aug,2023 - Mar,2024",
      description: "Comprehensive training in Python programming, machine learning algorithms, and data science.",
      status: "Completed",
      link: "#"
    },
    {
      title: "NerdzFactory",
      subtitle: "Frontend Development",
      period: "Oct,2024 - Dec,2024",
      description: "Intensive frontend development training covering modern web technologies and responsive design principles.",
      status: "Completed",
      link: "#"
    },
    {
      title: "Personal ML Courses",
      subtitle: "Advanced Machine Learning",
      period: "Ongoing",
      description: "Continuous learning through various online platforms including Coursera, edX, and specialized ML bootcamps.",
      status: "In Progress",
      link: "#"
    },
    // {
    //   title: "AWS Certification",
    //   subtitle: "Machine Learning/Artificial Intelligence Engineering",
    //   period: "Jul,2025 - Aug,2025",
    //   description: "Currently working towards TensorFlow certification to validate deep learning and neural network skills.",
    //   status: "In Progress",
    //   link: "#"
    // }
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Certifications & Training
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Continuous learning and professional development in machine learning and technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                    <Award className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {cert.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {cert.subtitle}
                    </p>
                  </div>
                </div>
                <div className="flex items-center text-gray-500 dark:text-gray-400">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span className="text-sm">{cert.period}</span>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {cert.description}
              </p>

              <div className="flex items-center justify-between">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    cert.status === 'Completed'
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                      : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                  }`}
                >
                  {cert.status}
                </span>
                <a
                  href={cert.link}
                  className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
                >
                  <span className="mr-1">View Details</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;