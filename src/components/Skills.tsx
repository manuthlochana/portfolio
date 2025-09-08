import React, { useState } from 'react';
import { Code, Database, Palette, Settings, Wrench } from 'lucide-react';
import skillsData from '../data/skills.json';

const iconMap = {
  Code,
  Database,
  Palette,
  Settings,
  Wrench
};

const colorMap = {
  primary: 'text-blue-400',
  secondary: 'text-blue-200',
  accent: 'text-blue-300',
  highlight: 'text-blue-100'
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 text-white fade-in-up">
            <span className="bg-gradient-to-r from-blue-200 to-blue-100 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          
          {/* Current Focus Banner */}
          <div className="glass-intense glass-curved p-6 mb-12 text-center fade-in-up">
            <h3 className="text-xl font-semibold text-blue-300 mb-3">🚀 Current Focus</h3>
            <p className="text-gray-200 text-lg">{skillsData.currentFocus}</p>
          </div>
          
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 fade-in-up" style={{ animationDelay: '0.2s' }}>
            {skillsData.categories.map((category, index) => {
              const Icon = iconMap[category.icon as keyof typeof iconMap];
              return (
                <button
                  key={category.title}
                  onClick={() => setActiveTab(index)}
                  className={`glass-card glass-curved px-6 py-3 flex items-center gap-2 transition-all duration-300 ${
                    activeTab === index 
                      ? 'glass-intense glow-primary text-white' 
                      : 'text-gray-400 hover:text-white hover:glow-accent'
                  }`}
                >
                  <Icon className={`w-5 h-5 ${activeTab === index ? colorMap[category.color as keyof typeof colorMap] : ''}`} />
                  <span className="font-medium">{category.title}</span>
                </button>
              );
            })}
          </div>
          
          {/* Tab Content */}
          <div className="relative min-h-[400px] overflow-hidden">
            {skillsData.categories.map((category, index) => (
              <div
                key={category.title}
                className={`tab-content absolute inset-0 ${activeTab === index ? 'active' : ''}`}
              >
                <div className="glass-intense glass-curved p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="glass-card glass-curved p-6 hover:glow-primary">
                        <div className="flex justify-between items-center mb-3">
                          <h3 className="font-semibold text-white">{skill.name}</h3>
                          <span className="text-blue-300 text-sm font-medium">{skill.level}%</span>
                        </div>
                        
                        <div className="w-full bg-gray-700/50 rounded-full h-2 mb-3 overflow-hidden">
                          <div
                            className={`h-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-300 transition-all duration-1000 ease-out skill-bar ${
                              activeTab === index ? 'animate-skill-bar' : ''
                            }`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                        
                        <p className="text-gray-400 text-sm">{skill.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;