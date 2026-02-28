
export interface Project {
  id: string;
  name: string;
  description: string;
  techStack: string[];
  lessons: string;
  githubLink: string;
  liveLink?: string;
  image?: string;
  isFyp?: boolean;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
}
