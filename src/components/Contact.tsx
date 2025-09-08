import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send, MapPin, MessageCircle, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Show confirmation bubble
      setShowConfirmation(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Hide confirmation after 3 seconds
      setTimeout(() => {
        setShowConfirmation(false);
      }, 3000);
      
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "manuthlochana01@gmail.com",
      href: "mailto:manuthlochana01@gmail.com",
      color: "text-blue-400"
    },
    {
      icon: Github,
      title: "GitHub",
      value: "github.com/manuthlochana",
      href: "https://github.com/manuthlochana",
      color: "text-blue-300"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "Manuth Lochana",
      href: "https://www.linkedin.com/in/manuth-lochana/",
      color: "text-blue-200"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Sri Lanka",
      href: "#",
      color: "text-blue-100"
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 text-white fade-in-up">
            <span className="bg-gradient-to-r from-blue-200 to-blue-100 bg-clip-text text-transparent">
              Get in Touch
            </span>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="fade-in-up">
              <div className="glass-intense glass-curved p-8 mb-8">
                <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
                  <MessageCircle className="w-6 h-6 text-blue-400" />
                  Let's Connect
                </h3>
                <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                  I'm always interested in new opportunities, collaborations, and creative projects. 
                  Whether you want to discuss technology, AI innovations, or creative solutions, I'd love to hear from you!
                </p>
                
                <div className="space-y-6">
                  {contactMethods.map((method) => {
                    const Icon = method.icon;
                    return (
                      <div key={method.title} className="flex items-center gap-4">
                        <div className="glass-subtle w-14 h-14 rounded-xl flex items-center justify-center">
                          <Icon className={`w-6 h-6 ${method.color}`} />
                        </div>
                        <div>
                          <h4 className="text-white font-semibold mb-1">{method.title}</h4>
                          <a 
                            href={method.href} 
                            target={method.href.startsWith('http') ? '_blank' : '_self'}
                            rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="text-gray-400 hover:text-blue-300 transition-colors duration-300"
                          >
                            {method.value}
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="fade-in-up" style={{ animationDelay: '0.2s' }}>
              <form onSubmit={handleSubmit} className="glass-intense glass-curved p-8 relative">
                <h3 className="text-2xl font-semibold text-white mb-6">Send a Message</h3>
                
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-white font-medium mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 glass-subtle rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
                      placeholder="Enter your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-white font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 glass-subtle rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
                      placeholder="Enter your email"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-white font-medium mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 glass-subtle rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 resize-vertical"
                      placeholder="Tell me about your project or just say hello..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full glass-card glass-intense py-4 px-6 rounded-xl text-white font-semibold hover:glow-primary transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Bubble */}
      {showConfirmation && (
        <div className="confirmation-bubble">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 glass-subtle rounded-full flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-green-400" />
            </div>
            <h4 className="text-xl font-semibold text-white mb-2">Message Sent!</h4>
            <p className="text-gray-300">Your message has been sent successfully. I'll get back to you soon!</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;