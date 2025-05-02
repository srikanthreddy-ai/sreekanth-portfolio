import React, { useEffect, useState } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

type HeaderProps = {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
};

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Experience', id: 'experience' },
    { name: 'Testimonials', id: 'testimonials' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md py-3 shadow-md'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-xl font-bold text-slate-800 dark:text-white">
          {portfolioData.name.split(' ')[0]}<span className="text-teal-600">.</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="text-slate-600 hover:text-teal-600 dark:text-slate-300 dark:hover:text-teal-400 
                  transition font-medium text-sm"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 
            hover:bg-slate-200 dark:hover:bg-slate-700 transition"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </nav>

        {/* Mobile Controls */}
        <div className="flex items-center md:hidden space-x-3">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 
            hover:bg-slate-200 dark:hover:bg-slate-700 transition"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 
            hover:bg-slate-200 dark:hover:bg-slate-700 transition"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute w-full bg-white dark:bg-slate-900 shadow-md transition-all duration-300 
        ease-in-out ${isMenuOpen ? 'max-h-96 py-4' : 'max-h-0 py-0 overflow-hidden'}`}
      >
        <ul className="flex flex-col space-y-3 px-4">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className="text-slate-600 hover:text-teal-600 dark:text-slate-300 dark:hover:text-teal-400 
                transition font-medium text-sm py-2"
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;