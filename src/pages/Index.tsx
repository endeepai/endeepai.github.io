
import React from 'react';
import { Mail, Users, Shield, Zap, Linkedin, ChevronRight } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Animated Status Indicator */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-white/20">
              <div className="w-3 h-3 bg-amber-500 rounded-full animate-pulse"></div>
              <span className="text-slate-700 font-medium">Under Construction</span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6 leading-tight">
            EnDeep<span className="text-blue-600">.AI</span>
          </h1>
          
          {/* Tagline */}
          <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Private, efficient AI systems that put you in control
          </p>

          {/* Animated Cursor */}
          <div className="flex items-center justify-center">
            <div className="text-lg text-slate-500">
              Building the future of AI
              <span className="inline-block w-0.5 h-6 bg-blue-600 ml-1 animate-pulse"></span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="px-6 py-16 bg-white/60 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 text-center mb-12">
            About EnDeep.AI
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center group">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Privacy First</h3>
              <p className="text-slate-600">Your data stays under your control with local and secure cloud deployment options.</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors duration-300">
                <Zap className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">High Performance</h3>
              <p className="text-slate-600">Optimized AI systems that deliver fast, reliable results when you need them.</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors duration-300">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Fully Customizable</h3>
              <p className="text-slate-600">Tailored AI solutions that adapt to your specific business needs and workflows.</p>
            </div>
          </div>

          <div className="text-center max-w-3xl mx-auto">
            <p className="text-lg text-slate-700 leading-relaxed">
              We help companies and researchers run private, efficient AI systems using large language models. 
              Our platform enables you to deploy AI locally or in the cloud — fast, secure, and completely under your control. 
              We also collaborate with universities to advance research in language models and AI agents.
            </p>
          </div>
        </div>
      </section>

      {/* Why Contact Us Section */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-8">
            Why Contact Us Now?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-white/20 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Research Collaboration</h3>
              <p className="text-slate-600">Partner with us on cutting-edge AI research and academic publications.</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-white/20 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Early Partnerships</h3>
              <p className="text-slate-600">Get priority access to our platform and shape the future of private AI.</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-white/20 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Join Our Team</h3>
              <p className="text-slate-600">Explore internship opportunities and careers in AI innovation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-6 py-16 bg-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Let's Build Together
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <a href="mailto:hello@endeep.ai" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">
                    hello@endeep.ai
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Linkedin className="w-5 h-5 text-blue-400" />
                  <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">
                    LinkedIn
                  </a>
                </div>
              </div>
              
              <div className="mt-8">
                <p className="text-slate-300 leading-relaxed">
                  Ready to revolutionize how you work with AI? Whether you're a researcher, 
                  enterprise, or startup, we'd love to hear from you.
                </p>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
                <div>
                  <select className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200">
                    <option value="">I'm interested in...</option>
                    <option value="research">Research Collaboration</option>
                    <option value="enterprise">Enterprise Partnership</option>
                    <option value="career">Career Opportunities</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your project or interests..."
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2 group"
                >
                  <span>Send Message</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 bg-slate-900 border-t border-slate-700">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-slate-400">
              © 2024 EnDeep.AI. All rights reserved.
            </div>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
