
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-brand-gray py-12 bg-brand-black">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="text-xl font-bold tracking-tighter">
            <span className="text-brand-orange">&lt;</span>
            <span>Vikram Kamble</span>
            <span className="text-brand-orange">/&gt;</span>
          </div>
          <p className="text-zinc-500 text-sm">Engineered with focus, Pune IN.</p>
        </div>

        <div className="flex items-center gap-8 text-sm text-zinc-500 font-medium">
          <a href="https://github.com/vikky2810" className="hover:text-brand-orange transition-colors">GitHub</a>
          <a href="https://linkedin.com/in/vikramkamble" className="hover:text-brand-orange transition-colors">LinkedIn</a>
          <a href="mailto:kamblevikram2810@gmail.com" className="hover:text-brand-orange transition-colors">Email</a>
        </div>

        <div className="text-zinc-500 text-sm font-mono">
          &copy; {currentYear} • All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
