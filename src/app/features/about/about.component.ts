import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  profile = {
    title: 'Marketing & Business Analytics',
    location: 'Bhubaneswar, Odisha',
    education: 'MBA – Marketing & Finance',
    institution: 'Regional College of Management'
  };

  aboutText = [
    'I am an MBA student specializing in Marketing & Finance with a strong interest in understanding markets, customers and business performance.',
    'My approach combines marketing thinking with data analysis. I enjoy working with tools such as Microsoft Excel and Power BI to transform raw information into meaningful insights and visual dashboards.',
    'Through academic projects, digital branding work and my summer internship, I have explored market research, brand visibility, consumer behaviour, sales trends and business strategy.'
  ];

  focusAreas = [
    {
      number: '01',
      title: 'Market Research',
      description: 'Understanding markets, competition and customer patterns.',
      icon: 'bi-search'
    },
    {
      number: '02',
      title: 'Marketing Analytics',
      description: 'Turning business data into clear and useful insights.',
      icon: 'bi-bar-chart-line'
    },
    {
      number: '03',
      title: 'Brand Strategy',
      description: 'Building visibility through research and creative thinking.',
      icon: 'bi-megaphone'
    },
    {
      number: '04',
      title: 'Consumer Behaviour',
      description: 'Studying customer preferences and decision patterns.',
      icon: 'bi-people'
    }
  ];

  tools = [
    {
      name: 'Microsoft Excel',
      icon: 'bi-file-earmark-spreadsheet',
      level: 'Analytics'
    },
    {
      name: 'Power BI',
      icon: 'bi-bar-chart-fill',
      level: 'Visualization'
    },
    {
      name: 'PowerPoint',
      icon: 'bi-easel2',
      level: 'Presentation'
    },
    {
      name: 'Tally Prime',
      icon: 'bi-calculator',
      level: 'Finance'
    }
  ];

  journey = [
    {
      year: '2022',
      title: 'Started B.Com',
      description: 'Began the academic journey in Commerce at Christ Degree College, Cuttack.'
    },
    {
      year: '2025',
      title: 'MBA – Marketing & Finance',
      description: 'Started MBA at Regional College of Management, Bhubaneswar.'
    },
    {
      year: '2026',
      title: 'Industry Exposure',
      description: 'Worked on retail market analysis, brand visibility, stock availability and market share during the Carlsberg India summer internship.'
    },
    {
      year: '2026',
      title: 'Building Through Projects',
      description: 'Worked on dashboards, digital branding, market surveys and a responsive digital platform.'
    }
  ];

  scrollToProjects(): void {
    const projectsSection = document.getElementById('projects');

    if (projectsSection) {
      projectsSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }

  scrollToContact(): void {
    const contactSection = document.getElementById('contact');

    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }

}