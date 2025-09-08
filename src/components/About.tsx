import React from 'react';
import { Code, Palette, Zap, Building, Sparkles } from 'lucide-react';

const About = () => {
  const highlights = [
    { icon: Code, title: "Developer", description: "Full-stack development & AI systems" },
    { icon: Sparkles, title: "Innovator", description: "AI fine-tuning & model training" },
    { icon: Palette, title: "Creator", description: "Motion graphics & visual design" },
    { icon: Building, title: "Founder", description: "Thunder Storm Studio" }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 text-white fade-in-up">
            <span className="bg-gradient-to-r from-blue-200 to-blue-100 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="fade-in-up">
              <div className="glass-intense rounded-2xl p-8 mb-8">
                <p className="text-lg text-gray-200 leading-relaxed mb-6">
                  I'm <span className="text-blue-300 font-semibold">Manuth Lochana</span>, passionate about technology, coding, and creative innovation. 
                  I work on projects that combine software development, AI, and design.
                </p>
                
                <p className="text-lg text-gray-200 leading-relaxed mb-6">
                  I also founded <span className="text-blue-300 font-semibold">Thunder Storm Studio</span>, where I focus on video editing, 
                  motion graphics, and coding-driven projects.
                </p>
                
                <p className="text-lg text-gray-200 leading-relaxed">
                  Additionally, I explore advanced technologies including AI fine-tuning, system optimization, and creative problem-solving.
                </p>
              </div>
              
              {/* Current Focus */}
              <div className="glass rounded-xl p-6 border-l-4 border-blue-400">
                <h3 className="text-xl font-semibold text-blue-300 mb-3 flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  Current Focus
                </h3>
                <p className="text-gray-300">
                  Working on Hugging Face with LLaMA 4 model, experimenting with PEFT fine-tuning, 
                  and building a personal AI system.
                </p>
              </div>
            </div>
            
            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4 fade-in-up" style={{ animationDelay: '0.2s' }}>
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="glass-card glass rounded-xl p-6 text-center hover:glow-primary">
                    <div className="w-16 h-16 mx-auto mb-4 glass-subtle rounded-full flex items-center justify-center">
                      <Icon className="w-8 h-8 text-blue-300" />
                    </div>
                    <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;