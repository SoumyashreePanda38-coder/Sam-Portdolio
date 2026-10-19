export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  liveDemo?: string;
  github?: string;
  featured?: boolean;
  imageUrl?: string;
}
