import React from 'react';
import { portfolioData, Experience } from '../data/portfolioData';

const ExperienceCard: React.FC<{ experience: Experience; index: number }> = ({ experience, index }) => {
  return (
    <div className={`flex flex-col md:flex-row gap-4 md:gap-8 mb-12 last:mb-0 ${
      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
    }`}>
      {/* Timeline vertical line */}
      <div className="hidden md:block w-px bg-slate-200 dark:bg-slate-700 relative flex-shrink-0">
        <div className="absolute w-4 h-4 bg-teal-500 rounded-full top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      
      {/* Timeline content */}
      <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
        <span className="inline-block px-3 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-800 
        text-slate-800 dark:text-slate-300 rounded-full mb-2">
          {experience.period}
        </span>
        
        <h3 className="text-xl font-bold text-slate-800 dark:text-white">{experience.role}</h3>
        <p className="text-teal-600 dark:text-teal-400 mb-3">{experience.company}</p>
        
        <p className="text-slate-600 dark:text-slate-400 mb-4">{experience.description}</p>
        
        <ul className={`list-none space-y-2 ${index % 2 === 0 ? 'md:ml-auto' : ''}`}>
          {experience.achievements.map((achievement) => (
            <li 
              key={achievement} 
              className="flex items-start gap-2 text-slate-600 dark:text-slate-400"
            >
              <span className="inline-block w-2 h-2 bg-teal-500 dark:bg-teal-400 rounded-full mt-2 flex-shrink-0"></span>
              <span>{achievement}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">
              Professional Experience
            </h2>
            <div className="w-16 h-1 bg-teal-600 mx-auto mb-6"></div>
            <p className="text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              My career journey and key achievements in the industry.
            </p>
          </div>

          <div className="relative">
            {/* Main vertical timeline line (visible only on desktop) */}
            <div className="hidden md:block absolute h-full w-px bg-slate-200 dark:bg-slate-700 left-1/2 top-0 transform -translate-x-1/2"></div>
            
            <div className="space-y-8">
              {portfolioData.experience.map((exp, index) => (
                <div 
                  key={exp.company + exp.period}
                  className="animate-fadeIn"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <ExperienceCard experience={exp} index={index} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;