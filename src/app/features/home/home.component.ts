import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  // Profile information
  profile = {
    name: 'Sambhab Shree Sahoo',
    role: 'Marketing & Business Analytics',
    tagline:
      'Turning market insights into meaningful business decisions through analytics, strategy and consumer understanding.',
    location: 'Bhubaneswar, Odisha'
  };

  // Hero statistics
  stats = [
    {
      value: '70+',
      label: 'Outlets Analyzed'
    },
    {
      value: '400+',
      label: 'Brand Assets Studied'
    },
    {
      value: '20%',
      label: 'Engagement Growth'
    }
  ];

  // Navigation helpers
  exploreWork(): void {
    document.getElementById('projects')?.scrollIntoView({
      behavior: 'smooth'
    });
  }

  connect(): void {
    document.getElementById('contact')?.scrollIntoView({
      behavior: 'smooth'
    });
  }

  scrollToNextSection(): void {
    document.getElementById('about')?.scrollIntoView({
      behavior: 'smooth'
    });
  }

}