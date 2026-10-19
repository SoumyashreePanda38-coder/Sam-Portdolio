import { Injectable } from '@angular/core';
import { Experience } from '../models/experience.model';

@Injectable({
  providedIn: 'root',
})
export class ExperienceService {
  private experiences: Experience[] = [
    {
      id: 1,
      role: 'Developer',
      company: 'Company Name',
      location: 'Location',
      startDate: '2023',
      endDate: 'Present',
      description: ['Responsible for building and maintaining web applications.'],
      highlights: ['Delivered user-focused features', 'Improved platform performance'],
    },
  ];

  getExperiences(): Experience[] {
    return this.experiences;
  }
}
