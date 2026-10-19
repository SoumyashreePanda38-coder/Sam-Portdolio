import { Injectable } from '@angular/core';
import { Profile } from '../models/profile.model';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private profile: Profile = {
    name: 'Sam',
    title: 'Full Stack Developer',
    email: 'sam@example.com',
    phone: '+1 (555) 123-4567',
    location: 'Your City, Country',
    bio: 'A passionate developer building meaningful digital experiences.',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
    portfolioUrl: 'https://portfolio.example',
    imageUrl: 'assets/images/profile/profile.jpg',
  };

  getProfile(): Profile {
    return this.profile;
  }
}
