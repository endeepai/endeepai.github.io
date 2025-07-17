
import React from 'react';
import { Mail, Users, Shield, Zap, Linkedin, ChevronRight, Code, Database, Cpu } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Status Indicator */}
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
          
          {/* Updated Tagline */}
          <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Privacy-first infrastructure for LLMs and autonomous AI agents
          </p>

          {/* Animated Cursor */}
          <div className="flex items-center justify-center">
            <div className="text-lg text-slate-500">
              Building the future of private AI
              <span className="inline-block w-0.5 h-6 bg-blue-600 ml-1 animate-pulse"></span>
            </div>
          </div>
        </div>
      </section>

      {/* What We Build Section */}
      <section className="px-6 py-16 bg-white/60 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 text-center mb-12">
            What We Build
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center group">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                <Database className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">LLM Infrastructure</h3>
              <p className="text-slate-600">Production-ready systems for self-hosted and cloud language models with full data control.</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors duration-300">
                <Cpu className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Autonomous Agents</h3>
              <p className="text-slate-600">Task-driven AI agents that integrate into workflows as assistants, copilots, or automated actors.</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors duration-300">
                <Code className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Research Collaboration</h3>
              <p className="text-slate-600">Academic partnerships for novel LLM architectures and experimental AI agent systems.</p>
            </div>
          </div>

          <div className="text-center max-w-3xl mx-auto">
            <p className="text-lg text-slate-700 leading-relaxed">
              We build modular, resource-efficient infrastructure that transforms general-purpose models into 
              domain-specific solutions — optimized for privacy, performance, and real-world deployment constraints.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Serve Section */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-8">
            Who We Serve
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-white/20">
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Enterprises & Startups</h3>
              <p className="text-slate-600">Organizations needing private AI infrastructure without exposing sensitive data to third-party APIs.</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-white/20">
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Research Institutions</h3>
              <p className="text-slate-600">Universities and labs requiring transparent, customizable LLM systems for scientific applications.</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-white/20">
              <h3 className="text-xl font-semibold text-slate-800 mb-3">AI Product Teams</h3>
              <p className="text-slate-600">LLMops teams needing scalable infrastructure for fine-tuning, deployment, and AI solution management.</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-white/20">
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Government & Education</h3>
              <p className="text-slate-600">Institutions requiring compliant, auditable AI systems with full transparency and control.</p>
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
                  Whether you need private AI infrastructure, research collaboration, 
                  or technical consulting — we'd love to hear from you.
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
                    <option value="infrastructure">AI Infrastructure</option>
                    <option value="research">Research Collaboration</option>
                    <option value="consulting">Technical Consulting</option>
                    <option value="partnership">Partnership</option>
                  </select>
                </div>
                <div>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your project or research interests..."
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
