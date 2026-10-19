import { Component } from '@angular/core';

interface Skill {
  name: string;
  icon: string;
  description: string;
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  marketingSkills: Skill[] = [
    {
      name: 'Market Research',
      icon: 'bi-search',
      description: 'Researching markets to understand trends, opportunities and competitive presence.'
    },
    {
      name: 'Consumer Behaviour Analysis',
      icon: 'bi-people',
      description: 'Understanding consumer preferences, behaviour and purchasing patterns.'
    },
    {
      name: 'Brand Promotion',
      icon: 'bi-megaphone',
      description: 'Supporting brand visibility and promotional activities across market touchpoints.'
    },
    {
      name: 'Digital Branding',
      icon: 'bi-globe2',
      description: 'Building and strengthening brand presence through digital platforms and content.'
    }
  ];

  dataTools: Skill[] = [
    {
      name: 'Microsoft Excel',
      icon: 'bi-file-earmark-spreadsheet',
      description: 'Data organization, analysis and spreadsheet-based reporting.'
    },
    {
      name: 'Power BI',
      icon: 'bi-bar-chart',
      description: 'Data visualization and dashboard-based business analysis.'
    },
    {
      name: 'Tally Prime with GST',
      icon: 'bi-calculator',
      description: 'Accounting and GST-related financial management using Tally Prime.'
    },
    {
      name: 'MS PowerPoint',
      icon: 'bi-file-earmark-slides',
      description: 'Creating structured business presentations and visual reports.'
    }
  ];

}