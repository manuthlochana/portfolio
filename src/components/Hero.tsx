import React, { useState, useEffect } from 'react';
import { ChevronDown, Code, Palette, Zap } from 'lucide-react';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const roles = [
    "Developer",
    "Software Innovator", 
    "Tech Visionary"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentRole((prev) => (prev + 1) % roles.length);
        setIsAnimating(false);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, [roles.length]);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const highlights = [
    { icon: Code, text: "Full-Stack Developer", color: "text-blue-400" },
    { icon: Zap, text: "AI Enthusiast", color: "text-blue-300" },
    { icon: Palette, text: "Creative Designer", color: "text-blue-200" }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Fixed Profile Picture */}
          <div className="mb-8 fade-in-up">
            <div className="profile-fixed mx-auto mb-6">
              <img 
                src="/openart-image_xHLq8lFQ_1757313481016_raw.jpg" 
                alt="Manuth Lochana" 
                className="w-full h-full object-cover rounded-full"
                loading="eager"
              />
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 fade-in-up" style={{ animationDelay: '0.2s' }}>
            <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-blue-200 bg-clip-text text-transparent">
              Manuth Lochana
            </span>
          </h1>

          {/* Dynamic Tagline */}
          <div className="h-16 mb-8 fade-in-up" style={{ animationDelay: '0.4s' }}>
            <h2 className={`text-2xl md:text-3xl font-semibold text-gray-300 transition-all duration-300 ${
              isAnimating ? 'opacity-0 transform scale-95' : 'opacity-100 transform scale-100'
            }`}>
              {roles[currentRole]} • Software Innovator • Tech Visionary
            </h2>
          </div>

          {/* Description */}
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed fade-in-up" style={{ animationDelay: '0.6s' }}>
            Passionate about technology, AI, and creative innovation. Building the future through 
            cutting-edge software solutions and stunning visual experiences.
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 fade-in-up" style={{ animationDelay: '0.8s' }}>
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={item.text} className="glass-card glass-curved p-6 hover:glow-primary">
                  <Icon className={`w-8 h-8 mx-auto mb-3 ${item.color}`} />
                  <p className="text-gray-300 font-medium">{item.text}</p>
                </div>
              );
            })}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 fade-in-up" style={{ animationDelay: '1s' }}>
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="glass-intense glass-curved px-8 py-4 text-white font-semibold hover:glow-primary transition-all duration-300 hover:scale-105"
            >
              View My Work
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="glass glass-curved px-8 py-4 text-white font-semibold hover:glow-secondary transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </button>
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={scrollToAbout}
            className="animate-bounce glass-subtle p-3 rounded-full hover:glow-primary transition-all duration-300 fade-in-up"
            style={{ animationDelay: '1.2s' }}
            aria-label="Scroll to about section"
          >
            <ChevronDown className="w-6 h-6 text-blue-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;