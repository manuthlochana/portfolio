import React from 'react';
import { Github, ExternalLink, Star } from 'lucide-react';
import projectsData from '../data/projects.json';

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 text-white fade-in-up">
            <span className="bg-gradient-to-r from-blue-200 to-blue-100 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {projectsData.map((project, index) => (
              <div 
                key={project.id} 
                className="glass-card glass-curved glass-card-tilt overflow-hidden hover:glow-primary fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Image */}
                <div className="h-48 bg-gradient-to-br from-blue-900/20 to-blue-700/20 overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4 glass-subtle px-3 py-1 rounded-full flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-yellow-400 text-sm font-medium">Featured</span>
                    </div>
                  )}
                </div>
                
                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className="glass-subtle px-3 py-1 rounded-full text-blue-300 text-sm font-medium border border-blue-400/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-subtle px-4 py-2 rounded-lg flex items-center gap-2 text-gray-300 hover:text-white hover:glow-primary transition-all duration-300 hover:scale-105"
                    >
                      <Github size={18} />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-intense px-4 py-2 rounded-lg flex items-center gap-2 text-blue-300 hover:text-white hover:glow-secondary transition-all duration-300 hover:scale-105"
                    >
                      <ExternalLink size={18} />
                      <span>Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* GitHub Profile Link */}
          <div className="text-center fade-in-up" style={{ animationDelay: '0.4s' }}>
            <a
              href="https://github.com/manuthlochana"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-intense glass-curved px-8 py-4 inline-flex items-center gap-3 text-white font-semibold hover:glow-primary transition-all duration-300 hover:scale-105"
            >
              <Github size={24} />
              <span>View All Projects on GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;