import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="text-xl font-bold">
                {portfolioData.name.split(' ')[0]}<span className="text-teal-500">.</span>
              </div>
              <p className="text-slate-400 text-sm mt-1">
                Lead Software Engineer
              </p>
            </div>
            
            <div className="flex space-x-4">
              {portfolioData.socials.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center
                    text-slate-400 hover:bg-teal-900/50 hover:text-teal-400 transition"
                    aria-label={social.name}
                  >
                    <IconComponent size={16} />
                  </a>
                );
              })}
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-6 pt-6 flex flex-col md:flex-row justify-between items-center">
            <div className="text-slate-400 text-sm">
              © {currentYear} {portfolioData.name}. All rights reserved.
            </div>
            
            <nav className="mt-4 md:mt-0">
              <ul className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm">
                <li>
                  <a href="#about" className="text-slate-400 hover:text-teal-400 transition">About</a>
                </li>
                <li>
                  <a href="#skills" className="text-slate-400 hover:text-teal-400 transition">Skills</a>
                </li>
                <li>
                  <a href="#projects" className="text-slate-400 hover:text-teal-400 transition">Projects</a>
                </li>
                <li>
                  <a href="#experience" className="text-slate-400 hover:text-teal-400 transition">Experience</a>
                </li>
                <li>
                  <a href="#contact" className="text-slate-400 hover:text-teal-400 transition">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;