import React, { useEffect, useRef } from 'react';
import { MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Hero: React.FC = () => {
  const typingRef = useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    const roles = ["Lead Software Engineer", "Team Leader", "Problem Solver", "Architect", "AI Specialist", "Cloud Engineer"];
    let currentRoleIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let typingSpeed = 150;
    let deletingSpeed = 100;
    let pauseTime = 1500;
    
    const typeWriter = () => {
      const currentRole = roles[currentRoleIndex];
      
      if (isDeleting) {
        if (typingRef.current) {
          typingRef.current.textContent = currentRole.substring(0, currentCharIndex - 1);
          currentCharIndex--;
        }
        
        typingSpeed = deletingSpeed;
        
        if (currentCharIndex === 0) {
          isDeleting = false;
          currentRoleIndex = (currentRoleIndex + 1) % roles.length;
          typingSpeed = 500; // Pause before typing the next word
        }
      } else {
        if (typingRef.current) {
          typingRef.current.textContent = currentRole.substring(0, currentCharIndex + 1);
          currentCharIndex++;
        }
        
        typingSpeed = 150;
        
        if (currentCharIndex === currentRole.length) {
          isDeleting = true;
          typingSpeed = pauseTime; // Pause before deleting
        }
      }
      
      setTimeout(typeWriter, typingSpeed);
    };
    
    setTimeout(typeWriter, 1000);
    
    return () => {
      // Cleanup if needed
    };
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 z-0"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-40 right-20 w-64 h-64 bg-teal-300/20 dark:bg-teal-600/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-40 left-20 w-72 h-72 bg-blue-300/20 dark:bg-blue-600/10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block px-3 py-1 bg-teal-100 dark:bg-teal-900/40 text-teal-800 dark:text-teal-300 
          rounded-full text-sm font-medium mb-6 animate-fadeIn">
            <div className="flex items-center">
              <MapPin size={14} className="mr-1" />
              <span>{portfolioData.location}</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 dark:text-white mb-4 leading-tight animate-slideUp">
            Hi, I'm {portfolioData.name}
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-slate-600 dark:text-slate-300 mb-6 animate-slideUp animation-delay-200">
            I'm a <span ref={typingRef} className="text-teal-600 dark:text-teal-400 font-semibold"></span>
            <span className="typing-cursor">|</span>
          </h2>
          
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed animate-fadeIn animation-delay-400">
            {portfolioData.summary}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fadeIn animation-delay-600">
            <a 
              href="#contact" 
              className="px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-lg font-medium transition 
              shadow-lg hover:shadow-xl hover:translate-y-[-2px] w-full sm:w-auto"
            >
              Contact Me
            </a>
            <a 
              href="#projects" 
              className="px-6 py-3 bg-white dark:bg-slate-800 text-slate-800 dark:text-white border border-slate-200 
              dark:border-slate-700 rounded-lg font-medium transition hover:bg-slate-50 dark:hover:bg-slate-700 
              shadow-md hover:shadow-lg hover:translate-y-[-2px] w-full sm:w-auto"
            >
              View My Work
            </a>
          </div>
          
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <a 
              href="#about" 
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-slate-800 
              shadow-md text-slate-500 dark:text-slate-400"
              aria-label="Scroll down"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;