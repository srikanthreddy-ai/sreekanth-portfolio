import React, { useState, useEffect } from 'react';
import { portfolioData, Testimonial } from '../data/portfolioData';

const TestimonialCard: React.FC<{ testimonial: Testimonial; isActive: boolean }> = ({ testimonial, isActive }) => {
  return (
    <div 
      className={`bg-white dark:bg-slate-800 p-8 rounded-lg shadow-md transition-all duration-500 
      ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-95 absolute'}`}
    >
      <div className="mb-6">
        <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 34.125L12.25 0H21.4375L14.875 34.125H0ZM13.5625 34.125L25.8125 0H35L28.4375 34.125H13.5625Z" 
            fill="currentColor" className="text-teal-500/20" />
        </svg>
      </div>
      
      <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed italic mb-6">
        "{testimonial.quote}"
      </p>
      
      <div className="flex items-center">
        <div className="w-12 h-12 bg-slate-200 dark:bg-slate-700 rounded-full flex items-center justify-center mr-4">
          <span className="text-xl font-bold text-teal-600 dark:text-teal-400">
            {testimonial.author.charAt(0)}
          </span>
        </div>
        <div>
          <div className="font-semibold text-slate-800 dark:text-white">{testimonial.author}</div>
          <div className="text-sm text-slate-600 dark:text-slate-400">{testimonial.role} at {testimonial.company}</div>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % portfolioData.testimonials.length);
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">
              Testimonials
            </h2>
            <div className="w-16 h-1 bg-teal-600 mx-auto mb-6"></div>
            <p className="text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              What colleagues and clients say about working with me.
            </p>
          </div>

          <div className="relative h-[300px] md:h-[250px]">
            {portfolioData.testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.author}
                className={`absolute inset-0 transition-all duration-500 ease-in-out`}
                style={{ zIndex: activeIndex === index ? 10 : 0 }}
              >
                <TestimonialCard testimonial={testimonial} isActive={activeIndex === index} />
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-8">
            {portfolioData.testimonials.map((_, index) => (
              <button 
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full mx-1 transition-all ${
                  activeIndex === index
                    ? 'bg-teal-600 dark:bg-teal-500'
                    : 'bg-slate-300 dark:bg-slate-600'
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;