
import React from 'react';
import { Mail, Users, Shield, Zap, Linkedin, ChevronRight, Code, Database, Cpu } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative px-6 py-24 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Status Indicator */}
          <div className="flex items-center justify-center mb-12">
            <div className="flex items-center space-x-4 bg-white/90 backdrop-blur-sm rounded-full px-8 py-4 shadow-xl border border-white/30">
              <div className="w-3 h-3 bg-amber-500 rounded-full animate-pulse shadow-lg"></div>
              <span className="text-slate-700 font-semibold text-lg">Under Construction</span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl font-bold text-slate-800 mb-8 leading-tight tracking-tight">
            EnDeep<span className="text-blue-600">.AI</span>
          </h1>
          
          {/* Updated Tagline */}
          <p className="text-2xl md:text-3xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            Privacy-first infrastructure for LLMs and autonomous AI agents
          </p>

          {/* Animated Cursor */}
          <div className="flex items-center justify-center">
            <div className="text-xl text-slate-500 font-medium">
              Building the future of private AI
              <span className="inline-block w-0.5 h-7 bg-blue-600 ml-2 animate-pulse"></span>
            </div>
          </div>
        </div>
      </section>

      {/* What We Build Section */}
      <section className="px-6 py-20 bg-white/70 backdrop-blur-sm border-y border-white/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 text-center mb-16 tracking-tight">
            What We Build
          </h2>
          
          <div className="grid md:grid-cols-3 gap-10 mb-16">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-500 shadow-lg">
                <Database className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">LLM Infrastructure</h3>
              <p className="text-slate-600 leading-relaxed text-lg">Production-ready systems for self-hosted and cloud language models with full data control.</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-green-200 group-hover:to-green-300 transition-all duration-500 shadow-lg">
                <Cpu className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">Autonomous Agents</h3>
              <p className="text-slate-600 leading-relaxed text-lg">Task-driven AI agents that integrate into workflows as assistants, copilots, or automated actors.</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-purple-200 group-hover:to-purple-300 transition-all duration-500 shadow-lg">
                <Code className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">Research Collaboration</h3>
              <p className="text-slate-600 leading-relaxed text-lg">Academic partnerships for novel LLM architectures and experimental AI agent systems.</p>
            </div>
          </div>

          <div className="text-center max-w-4xl mx-auto bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/30">
            <p className="text-xl text-slate-700 leading-relaxed font-light">
              We build modular, resource-efficient infrastructure that transforms general-purpose models into 
              domain-specific solutions — optimized for privacy, performance, and real-world deployment constraints.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Serve Section */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-16 tracking-tight">
            Who We Serve
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/30 hover:shadow-2xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">Enterprises & Startups</h3>
              <p className="text-slate-600 leading-relaxed">Organizations needing private AI infrastructure without exposing sensitive data to third-party APIs.</p>
            </div>
            
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/30 hover:shadow-2xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">Research Institutions</h3>
              <p className="text-slate-600 leading-relaxed">Universities and labs requiring transparent, customizable LLM systems for scientific applications.</p>
            </div>
            
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/30 hover:shadow-2xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">AI Product Teams</h3>
              <p className="text-slate-600 leading-relaxed">LLMops teams needing scalable infrastructure for fine-tuning, deployment, and AI solution management.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-6 py-20 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16 tracking-tight">
            Let's Build Together
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Info */}
            <div className="lg:pr-8">
              <h3 className="text-2xl font-semibold text-white mb-8">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <a href="mailto:hello@endeep.ai" className="text-blue-400 hover:text-blue-300 transition-colors duration-200 text-lg">
                    hello@endeep.ai
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                    <Linkedin className="w-6 h-6 text-white" />
                  </div>
                  <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors duration-200 text-lg">
                    LinkedIn
                  </a>
                </div>
              </div>
              
              <div className="mt-10 p-6 bg-slate-800/80 rounded-2xl border border-slate-700">
                <p className="text-slate-300 leading-relaxed text-lg">
                  Whether you need private AI infrastructure, research collaboration, 
                  or technical consulting — we'd love to hear from you.
                </p>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-6 py-4 bg-slate-700/80 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-lg"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-6 py-4 bg-slate-700/80 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-lg"
                  />
                </div>
                <div>
                  <select className="w-full px-6 py-4 bg-slate-700/80 border border-slate-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-lg">
                    <option value="">I'm interested in...</option>
                    <option value="infrastructure">AI Infrastructure</option>
                    <option value="research">Research Collaboration</option>
                    <option value="consulting">Technical Consulting</option>
                    <option value="partnership">Partnership</option>
                  </select>
                </div>
                <div>
                  <textarea
                    rows={5}
                    placeholder="Tell us about your project or research interests..."
                    className="w-full px-6 py-4 bg-slate-700/80 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none text-lg"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200 flex items-center justify-center space-x-3 group shadow-lg text-lg"
                >
                  <span>Send Message</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-10 bg-slate-950 border-t border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="text-slate-400 text-lg">
              © 2024 EnDeep.AI. All rights reserved.
            </div>
            <div className="flex items-center space-x-8">
              <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200 text-lg">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200 text-lg">
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
