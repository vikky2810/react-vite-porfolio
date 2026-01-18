
import React from 'react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold">Featured Projects</h2>
          <p className="text-zinc-500">A selection of my recent engineering work</p>
        </div>
        <a 
          href="https://github.com/vikky2810" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-brand-orange hover:underline flex items-center gap-2 font-medium"
        >
          View GitHub Repository
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>

      <div className="grid gap-8">
        {PROJECTS.map((project) => (
          <div 
            key={project.id} 
            className={`group relative grid md:grid-cols-5 gap-8 bg-brand-zinc p-6 md:p-10 rounded-3xl border border-brand-gray hover:border-brand-orange/30 transition-all ${project.isFyp ? 'ring-2 ring-brand-orange/20' : ''}`}
          >
            {project.isFyp && (
              <div className="absolute top-0 left-10 -translate-y-1/2 bg-brand-orange text-black px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                Final Year Project
              </div>
            )}
            
            <div className="md:col-span-3 space-y-6">
              <h3 className="text-2xl font-bold group-hover:text-brand-orange transition-colors">
                {project.name}
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                {project.description}
              </p>
              
              <div className="space-y-3">
                <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-500">Key Learnings</h4>
                <p className="text-zinc-300 italic">
                  "{project.lessons}"
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-brand-gray rounded-md text-xs font-mono text-zinc-400">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="md:col-span-2 flex flex-col justify-center gap-4">
              <div className="aspect-video bg-black rounded-xl border border-brand-gray flex items-center justify-center group-hover:scale-[1.02] transition-transform overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/5 to-transparent"></div>
                <div className="font-mono text-zinc-700 text-xs">Project Preview Container</div>
              </div>
              
              <div className="flex gap-3">
                <a 
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-2.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white text-sm font-semibold transition-colors"
                >
                  GitHub Link
                </a>
                {project.liveLink && (
                  <a 
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-2.5 rounded-lg bg-brand-orange text-black text-sm font-semibold hover:opacity-90 transition-opacity"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
