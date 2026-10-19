import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private projects: Project[] = [
    {
      id: 1,
      title: 'Portfolio Website',
      category: 'Web Application',
      description: 'A personal portfolio site showcasing work, experience, and skills.',
      technologies: ['Angular', 'TypeScript', 'Bootstrap'],
      liveDemo: '#',
      github: '#',
      featured: true,
      imageUrl: 'assets/images/projects/project-1.jpg',
    },
  ];

  getProjects(): Project[] {
    return this.projects;
  }
}
