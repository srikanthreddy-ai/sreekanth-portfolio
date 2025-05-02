import React from 'react';
import { portfolioData, Skill } from '../data/portfolioData';

const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => {
  return (
    <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg transition-transform hover:translate-y-[-4px] cursor-default">
      <div className="flex justify-between items-center mb-2">
        <h4 className="font-medium text-slate-800 dark:text-white">{skill.name}</h4>
        <span className="text-xs text-slate-500 dark:text-slate-400 px-2 py-1 bg-slate-200 dark:bg-slate-700 rounded-full">
          {skill.category}
        </span>
      </div>
      
      <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full mt-2">
        <div 
          className="h-full bg-teal-500 dark:bg-teal-600 rounded-full transition-all duration-1000"
          style={{ 
            width: `${(skill.level / 5) * 100}%`,
            animation: 'growWidth 1.5s ease-out' 
          }}
        ></div>
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  // Group skills by category
  const groupedSkills = portfolioData.skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  // Prepare category labels
  const categoryLabels = {
    frontend: 'Frontend',
    backend: 'Backend',
    devops: 'DevOps',
    tools: 'Tools & Methods',
    soft: 'Soft Skills'
  };

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">
              My Skills
            </h2>
            <div className="w-16 h-1 bg-teal-600 mx-auto mb-6"></div>
            <p className="text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              A comprehensive overview of my technical expertise and professional capabilities.
            </p>
          </div>

          <div className="space-y-10">
            {Object.keys(groupedSkills).map((category) => (
              <div key={category} className="animate-fadeIn" style={{ 
                animationDelay: `${Object.keys(groupedSkills).indexOf(category) * 150}ms` 
              }}>
                <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-4 flex items-center">
                  <span className="w-8 h-1 bg-teal-500 mr-3"></span>
                  {categoryLabels[category as keyof typeof categoryLabels]}
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {groupedSkills[category].map((skill) => (
                    <SkillCard key={skill.name} skill={skill} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;