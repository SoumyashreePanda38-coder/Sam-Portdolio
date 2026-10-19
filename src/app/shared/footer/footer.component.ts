import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  currentYear = new Date().getFullYear();

  quickLinks = [
    {
      label: 'Home',
      route: '/'
    },
    {
      label: 'About',
      route: '/about'
    },
    {
      label: 'Education',
      route: '/education'
    },
    {
      label: 'Experience',
      route: '/experience'
    },
    {
      label: 'Projects',
      route: '/projects'
    },
    {
      label: 'Skills',
      route: '/skills'
    },
    {
      label: 'Achievements',
      route: '/achievements'
    },
    {
      label: 'Certifications',
      route: '/certifications'
    }
  ];

  constructor(private router: Router) {}

  navigateTo(route: string): void {
    this.router.navigate([route]);

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  goToContact(): void {
    this.router.navigate(['/contact']);

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

}