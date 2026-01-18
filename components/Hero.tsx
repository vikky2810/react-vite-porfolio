
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="pt-40 pb-20 flex flex-col items-start gap-8">
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-mono">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-orange"></span>
          </span>
          Available for Internships & Freelance
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
          I'm <span className="text-brand-orange">Vikram Kamble.</span>
        </h1>
        <h2 className="text-2xl md:text-4xl font-semibold text-zinc-400">
          Software Developer & CSE Student
        </h2>
        
        <p className="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-2xl">
          I bridge the gap between complex engineering concepts and intuitive user interfaces. 
          Focusing on <span className="text-zinc-200">Angular</span>, <span className="text-zinc-200">Next.js</span>, and <span className="text-zinc-200">Scalable Architecture</span>.
        </p>
      </div>

      <div className="flex flex-wrap gap-4 mt-4">
        <button 
          onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          className="px-8 py-3 rounded-xl bg-brand-orange text-black font-bold hover:scale-105 transition-transform shadow-[0_0_20px_rgba(249,115,22,0.3)]"
        >
          View Projects
        </button>
        <button 
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="px-8 py-3 rounded-xl border border-brand-gray hover:border-brand-orange transition-colors font-medium"
        >
          Contact Me
        </button>
      </div>
      
      {/* Decorative Code Block Snippet */}
      <div className="hidden lg:block absolute right-10 top-48 opacity-20 pointer-events-none select-none">
        <pre className="font-mono text-sm leading-6">
          <code className="text-brand-orange">class</code> <code className="text-blue-400">Developer</code> {'{'}<br/>
          &nbsp;&nbsp;<code className="text-brand-orange">constructor</code>() {'{'}<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;<code className="text-zinc-500">this</code>.name = <code className="text-green-400">'Vikram Kamble'</code>;<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;<code className="text-zinc-500">this</code>.focus = [<code className="text-green-400">'Frontend'</code>, <code className="text-green-400">'Algorithms'</code>];<br/>
          &nbsp;&nbsp;{'}'}<br/>
          <br/>
          &nbsp;&nbsp;<code className="text-blue-400">solveProblem</code>(issue) {'{'}<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;<code className="text-brand-orange">return</code> buildRobustSolution(issue);<br/>
          &nbsp;&nbsp;{'}'}<br/>
          {'}'}
        </pre>
      </div>
    </section>
  );
};

export default Hero;
