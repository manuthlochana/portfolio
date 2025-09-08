import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="glass-intense py-8 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-2 text-gray-400 mb-4 md:mb-0">
            <span>© {currentYear} Manuth Lochana. Made with</span>
            <Heart size={16} className="text-blue-400 fill-current" />
            <span>and lots of ☕</span>
          </div>
          
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/manuthlochana"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300 glass-subtle p-2 rounded-lg hover:glow-primary"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/manuth-lochana/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300 glass-subtle p-2 rounded-lg hover:glow-secondary"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:manuth@example.com"
              className="text-gray-400 hover:text-white transition-colors duration-300 glass-subtle p-2 rounded-lg hover:glow-primary"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-white/10 text-center text-gray-500 text-sm">
          <p>Built with React, TypeScript, and Tailwind CSS • Thunder Storm Studio</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;