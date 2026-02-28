
import { SkillGroup, BlogPost } from './types';

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'Frontend',
    skills: ['HTML5', 'CSS3 (Tailwind)', 'JavaScript (ES6+)', 'Angular', 'Next.js', 'TypeScript']
  },
  {
    category: 'Core CS',
    skills: ['Data Structures & Algorithms', 'OOPs', 'DBMS (SQL/NoSQL)', 'Operating Systems', 'Computer Networks']
  },
  {
    category: 'Tools & DevOps',
    skills: ['Git & GitHub', 'VS Code', 'Docker Basics', 'Vercel/Netlify Deployment', 'Linux Terminal']
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-01',
    title: 'Migrating from Angular to Next.js: A Student Perspective',
    date: 'Oct 12, 2023',
    excerpt: 'The transition between two heavyweights of the web ecosystem isn’t just about syntax. Here is what I learned about Hydration vs. Rendering.',
    content: 'Long content about the differences in dependency injection, signal patterns in Angular vs. Hook-based state in React...'
  },
  {
    id: 'blog-02',
    title: 'Why I Prefer "Building in Public"',
    date: 'Sep 28, 2023',
    excerpt: 'Visibility brings accountability. How sharing my messy git commits helped me land my first freelance client.',
    content: 'A story about growth mindset and the importance of showing your work even when it is incomplete...'
  }
];
