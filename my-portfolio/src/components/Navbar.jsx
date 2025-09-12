import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Efek untuk mendeteksi scroll
  useEffect(() => {
    const handleScroll = () => {
      // Deteksi scroll untuk background change
      setIsScrolled(window.scrollY > 20);

      // Deteksi section yang aktif
      const sections = ['hero', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fungsi untuk smooth scroll
  const handleSmoothScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
    setActiveSection(id);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button 
              onClick={() => handleSmoothScroll('hero')}
              className="text-white font-bold text-xl flex items-center group"
            >
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent transition-all duration-300 group-hover:scale-105">
                <span className="text-2xl">{"</>"}</span> MyPortfolio
              </span>
            </button>
          </div>
          
          {/* Menu desktop - DI TENGAH */}
          <div className="hidden md:flex items-center space-x-1">
            <NavItem 
              onClick={() => handleSmoothScroll('hero')} 
              text="Home" 
              isActive={activeSection === 'hero'}
            />
            <NavItem 
              onClick={() => handleSmoothScroll('about')} 
              text="About" 
              isActive={activeSection === 'about'}
            />
            <NavItem 
              onClick={() => handleSmoothScroll('projects')} 
              text="Projects" 
              isActive={activeSection === 'projects'}
            />
            <NavItem 
              onClick={() => handleSmoothScroll('contact')} 
              text="Contact" 
              isActive={activeSection === 'contact'}
            />
          </div>

          {/* CTA Button dan Hamburger menu */}
          <div className="flex items-center space-x-3">
            {/* GitHub Button - Desktop */}
            <a
              href="https://github.com/lussii07"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center px-4 py-2 text-sm text-gray-300 hover:text-white transition-all duration-300 rounded-lg hover:bg-gray-800/50 group"
              aria-label="GitHub Profile"
            >
              <svg className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              GitHub
            </a>

            {/* Resume Button */}
            <a
              href="/CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center px-4 py-2 text-sm bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-lg transition-all duration-300 hover:from-emerald-600 hover:to-cyan-600 hover:shadow-lg hover:shadow-emerald-500/25"
            >
              Resume
            </a>
            
            {/* Hamburger menu (mobile) */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800/50 transition duration-300"
              aria-expanded="false"
            >
              <span className="sr-only">Open menu</span>
              <div className="w-5 h-5 relative">
                <span className={`block absolute h-0.5 w-5 bg-current transform transition duration-300 ${isOpen ? 'rotate-45' : '-translate-y-1.5'}`}></span>
                <span className={`block absolute h-0.5 w-5 bg-current transition duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`block absolute h-0.5 w-5 bg-current transform transition duration-300 ${isOpen ? '-rotate-45' : 'translate-y-1.5'}`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile */}
      <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 pt-2 pb-4 space-y-1 bg-black/95 backdrop-blur-lg border-t border-gray-800">
          <MobileNavItem 
            onClick={() => handleSmoothScroll('hero')} 
            text="Home" 
            isActive={activeSection === 'hero'}
          />
          <MobileNavItem 
            onClick={() => handleSmoothScroll('about')} 
            text="About" 
            isActive={activeSection === 'about'}
          />
          <MobileNavItem 
            onClick={() => handleSmoothScroll('projects')} 
            text="Projects" 
            isActive={activeSection === 'projects'}
          />
          <MobileNavItem 
            onClick={() => handleSmoothScroll('contact')} 
            text="Contact" 
            isActive={activeSection === 'contact'}
          />
          
          <div className="pt-3 border-t border-gray-800 space-y-2">
            <a
              href="https://github.com/lussii07"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-3 text-gray-300 hover:text-white transition-all duration-300 rounded-lg hover:bg-gray-800/50"
            >
              <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              GitHub
            </a>
            
            <a
              href="/CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-4 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-lg transition-all duration-300 hover:from-emerald-600 hover:to-cyan-600"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Komponen untuk item navigasi desktop
const NavItem = ({ onClick, text, isActive }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 text-sm font-medium transition-all duration-300 relative group ${
        isActive 
          ? 'text-emerald-400' 
          : 'text-gray-400 hover:text-white'
      }`}
    >
      {text}
      <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full ${
        isActive ? 'w-full' : ''
      }`}></span>
    </button>
  );
};

// Komponen untuk item navigasi mobile
const MobileNavItem = ({ onClick, text, isActive }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 flex items-center ${
        isActive 
          ? 'text-emerald-400 bg-gray-800/50' 
          : 'text-gray-400 hover:text-white hover:bg-gray-800/30'
      }`}
    >
      <span className={`w-2 h-2 rounded-full mr-3 ${
        isActive 
          ? 'bg-emerald-400 animate-pulse' 
          : 'bg-gray-500'
      }`}></span>
      {text}
    </button>
  );
};

export default Navbar;