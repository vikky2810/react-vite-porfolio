
import React from 'react';
import { SKILL_GROUPS } from '../constants';

const Skills: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold">Technical Arsenal</h2>
        <p className="text-zinc-500">Tools and technologies I use to bring ideas to life</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {SKILL_GROUPS.map((group) => (
          <div key={group.category} className="bg-brand-zinc border border-brand-gray p-6 rounded-2xl hover:border-brand-orange/50 transition-colors group">
            <h3 className="text-brand-orange font-bold text-lg mb-4 flex items-center gap-2">
              <span className="w-1 h-1 bg-brand-orange rounded-full"></span>
              {group.category}
            </h3>
            <ul className="space-y-3">
              {group.skills.map((skill) => (
                <li key={skill} className="flex items-center gap-3 text-zinc-400 group-hover:text-zinc-200 transition-colors">
                  <svg className="w-4 h-4 text-brand-orange/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
