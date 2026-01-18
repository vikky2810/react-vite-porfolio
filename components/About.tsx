
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
      <div className="relative group overflow-hidden rounded-2xl">
        <div className="absolute -inset-1 bg-gradient-to-r from-brand-orange to-amber-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative bg-brand-zinc p-4 sm:p-6 md:p-8 rounded-2xl border border-brand-gray overflow-hidden">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-brand-orange/20 flex items-center justify-center text-brand-orange">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-bold">Academic Core</h3>
          </div>
          <p className="text-zinc-400 leading-relaxed mb-4">
            Currently in my <span className="text-zinc-100 font-medium">Final Year of B.Tech CSE</span>.
            My education hasn't just been about clearing exams—it's been about understanding the "why" behind every line of code.
          </p>
          <div className="space-y-2 font-mono text-sm text-zinc-500">
            <div className="flex justify-between border-b border-brand-gray pb-1">
              <span>Focus</span>
              <span className="text-brand-orange">Full Stack Web</span>
            </div>
            <div className="flex justify-between border-b border-brand-gray pb-1">
              <span>Current City</span>
              <span className="text-zinc-300">Kolhapur, IN</span>
            </div>
            <div className="flex justify-between">
              <span>GPA Equivalent</span>
              <span className="text-zinc-300">Strong/First Class</span>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-bold border-l-4 border-brand-orange pl-4">The Mindset</h2>
        <p className="text-lg text-zinc-400">
          I believe code is a medium for storytelling and problem-solving. Whether it's crafting a pixel-perfect component in <span className="text-zinc-200">Angular</span> or optimizing a query in <span className="text-zinc-200">PostgreSQL</span>, I approach every challenge with curiosity and a focus on long-term maintainability.
        </p>
        <p className="text-zinc-400">
          My growth as a developer is fueled by consistent learning. From starting with simple HTML templates to now building distributed systems for my final year projects, the journey has been about embracing errors as lessons.
        </p>
        <div className="flex gap-4 items-center p-4 bg-brand-zinc/50 border border-brand-gray rounded-xl italic text-zinc-500 text-sm">
          "I don't just build features; I build experiences that solve real-world friction."
        </div>
      </div>
    </div>
  );
};

export default About;
