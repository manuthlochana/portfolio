import React from 'react';
import { GraduationCap, Target, BookOpen, Award } from 'lucide-react';

const Education = () => {
  const educationItems = [
    {
      icon: GraduationCap,
      title: "Formal Education",
      description: "Completed Python + Web Development (Beginner) courses at Open University",
      color: "text-blue-400"
    },
    {
      icon: BookOpen,
      title: "Current Learning",
      description: "AI, programming, creative design, cybersecurity - Currently in 4 specialized training programs",
      color: "text-blue-300"
    },
    {
      icon: Target,
      title: "Career Goals",
      description: "Aspiring software engineer with strong technical + creative expertise",
      color: "text-blue-200"
    },
    {
      icon: Award,
      title: "Specializations",
      description: "AI fine-tuning, system optimization, motion graphics, and creative problem-solving",
      color: "text-blue-100"
    }
  ];

  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 text-white fade-in-up">
            <span className="bg-gradient-to-r from-blue-200 to-blue-100 bg-clip-text text-transparent">
              Education & Growth
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {educationItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div 
                  key={item.title} 
                  className="glass-card glass-intense rounded-2xl p-8 hover:glow-primary fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="glass-subtle p-4 rounded-xl">
                      <Icon className={`w-8 h-8 ${item.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Learning Journey Timeline */}
          <div className="glass-intense rounded-2xl p-8 mt-12 fade-in-up" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-2xl font-semibold text-center text-blue-300 mb-8">Learning Journey</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="glass-subtle rounded-xl p-6">
                <div className="text-3xl font-bold text-blue-400 mb-2">3+</div>
                <p className="text-gray-300">Years of Learning</p>
              </div>
              <div className="glass-subtle rounded-xl p-6">
                <div className="text-3xl font-bold text-blue-300 mb-2">4</div>
                <p className="text-gray-300">Active Training Programs</p>
              </div>
              <div className="glass-subtle rounded-xl p-6">
                <div className="text-3xl font-bold text-blue-200 mb-2">∞</div>
                <p className="text-gray-300">Continuous Growth</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;