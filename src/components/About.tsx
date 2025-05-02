import React from 'react';
import { portfolioData } from '../data/portfolioData';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">
              About Me
            </h2>
            <div className="w-16 h-1 bg-teal-600 mx-auto mb-6"></div>
            <p className="text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Get to know more about my professional journey and what drives me.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <div className="relative">
                {/* Profile image with decorative elements */}
                <div className="w-full h-[400px] bg-gradient-to-tr from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 
                rounded-lg overflow-hidden shadow-xl">
                  <img
                    src="src/data/profile.png"
                    alt="Sreekanth Polireddy"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -left-4 w-24 h-24 border-8 border-teal-500 dark:border-teal-600 rounded-md 
                hidden md:block"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 border-8 border-slate-200 dark:border-slate-700 rounded-md 
                hidden md:block"></div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
                Lead Software Engineer with a passion for elegant solutions
              </h3>
              
              <div className="space-y-4 text-slate-600 dark:text-slate-400">
                <p>{portfolioData.about}</p>
                
                <p>
                  As a leader, I emphasize collaboration, code quality, and continuous improvement. 
                  I believe in empowering team members to grow and innovate while maintaining a focus on delivering exceptional value.
                </p>
                
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
                  mentoring junior developers, and occasionally speaking at tech conferences.
                </p>
              </div>
              
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-teal-600 dark:text-teal-400">8+</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Years of experience</div>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-teal-600 dark:text-teal-400">20+</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Projects completed</div>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-teal-600 dark:text-teal-400">4</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Current Projects</div>
                </div>
                {/* <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-teal-600 dark:text-teal-400">12+</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Feature Projects</div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;