import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">
              Get In Touch
            </h2>
            <div className="w-16 h-1 bg-teal-600 mx-auto mb-6"></div>
            <p className="text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Interested in working together or have a question? Feel free to reach out!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="animate-fadeIn">
              <div className="bg-white dark:bg-slate-900 p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">
                  Contact Information
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-teal-100 dark:bg-teal-900/40 flex items-center justify-center mr-4 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-1">Email</h4>
                      <a href={`mailto:${portfolioData.email}`} className="text-slate-800 dark:text-white hover:text-teal-600 dark:hover:text-teal-400 transition">
                        {portfolioData.email}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-teal-100 dark:bg-teal-900/40 flex items-center justify-center mr-4 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-1">Location</h4>
                      <p className="text-slate-800 dark:text-white">
                        {portfolioData.location}
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-3">Social Media</h4>
                    <div className="flex space-x-4">
                      {portfolioData.socials.map((social) => {
                        const IconComponent = social.icon;
                        return (
                          <a
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center
                            text-slate-600 dark:text-slate-400 hover:bg-teal-100 dark:hover:bg-teal-900/40 
                            hover:text-teal-600 dark:hover:text-teal-400 transition"
                            aria-label={social.name}
                          >
                            <IconComponent size={18} />
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="animate-fadeIn animation-delay-200">
              <div className="bg-white dark:bg-slate-900 p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">
                  Send Me a Message
                </h3>
                
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-2 
                      focus:ring-teal-500 dark:focus:ring-teal-600 focus:border-transparent bg-white dark:bg-slate-800 
                      text-slate-800 dark:text-white"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-2 
                      focus:ring-teal-500 dark:focus:ring-teal-600 focus:border-transparent bg-white dark:bg-slate-800 
                      text-slate-800 dark:text-white"
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-2 
                      focus:ring-teal-500 dark:focus:ring-teal-600 focus:border-transparent bg-white dark:bg-slate-800 
                      text-slate-800 dark:text-white resize-none"
                      placeholder="I'd like to discuss a potential project..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full py-3 px-6 bg-teal-600 hover:bg-teal-700 text-white rounded-lg font-medium transition
                    shadow-lg hover:shadow-xl hover:translate-y-[-2px]"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;