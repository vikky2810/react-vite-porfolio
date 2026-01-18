
import React from 'react';
import { BLOG_POSTS } from '../constants';

const Blog: React.FC = () => {
  return (
    <div className="space-y-8 md:space-y-12">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold">Notes & Learnings</h2>
        <p className="text-zinc-500">Sharing insights from my development journey</p>
      </div>

      <div className="grid gap-6">
        {BLOG_POSTS.map((post) => (
          <article
            key={post.id}
            className="group p-4 sm:p-6 md:p-8 rounded-2xl bg-brand-zinc border border-brand-gray hover:border-brand-orange/30 transition-all cursor-pointer"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
              <h3 className="text-xl font-bold group-hover:text-brand-orange transition-colors">
                {post.title}
              </h3>
              <time className="text-sm font-mono text-zinc-500">{post.date}</time>
            </div>
            <p className="text-zinc-400 leading-relaxed mb-6">
              {post.excerpt}
            </p>
            <div className="flex items-center gap-2 text-brand-orange text-sm font-bold group-hover:gap-3 transition-all">
              Read Note
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </article>
        ))}
      </div>

      <div className="p-6 md:p-8 rounded-2xl bg-brand-orange/5 border border-dashed border-brand-orange/30 text-center">
        <p className="text-zinc-400">Writing about <span className="text-brand-orange italic font-medium">System Design</span> and <span className="text-brand-orange italic font-medium">Angular Signals</span> coming soon.</p>
      </div>
    </div>
  );
};

export default Blog;
