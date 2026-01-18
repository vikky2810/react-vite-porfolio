
import React from 'react';
import { Project, SkillGroup, BlogPost } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'fyp-01',
    name: 'Distributed Task Orchestrator',
    description: 'A cloud-native orchestration tool designed to manage microservices execution across multiple nodes. It handles failure recovery and load balancing autonomously.',
    techStack: ['Node.js', 'Redis', 'Docker', 'Next.js'],
    lessons: 'Architected a custom scheduling algorithm; learned deep concurrency patterns and state synchronization across distributed instances.',
    githubLink: 'https://github.com/vikky2810/distributed-orchestrator',
    isFyp: true
  },
  {
    id: 'proj-02',
    name: 'DevSync: Collaborative Editor',
    description: 'Real-time collaborative code editor supporting multiple users with syntax highlighting and integrated chat features.',
    techStack: ['Angular', 'WebSockets', 'Tailwind CSS', 'Firebase'],
    lessons: 'Optimized WebSocket payload delivery to reduce latency; implemented operational transformation for consistent document state.',
    githubLink: 'https://github.com/vikky2810/devsync',
    liveLink: 'https://devsync-demo.vercel.app'
  },
  {
    id: 'proj-03',
    name: 'AgriSense IoT Dashboard',
    description: 'Full-stack monitoring solution for agricultural IoT sensors, visualizing humidity, temperature, and soil pH data in real-time.',
    techStack: ['React', 'D3.js', 'Express', 'PostgreSQL'],
    lessons: 'Built complex data visualizations with D3; managed high-frequency data ingestion from simulated IoT gateways.',
    githubLink: 'https://github.com/vikky2810/agrisense'
  }
];

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
