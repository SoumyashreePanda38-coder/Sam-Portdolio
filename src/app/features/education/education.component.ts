import { Component } from '@angular/core';

interface EducationItem {
  number: string;
  degree: string;
  field: string;
  institution: string;
  location: string;
  duration: string;
  status?: string;
}

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {

  educationList: EducationItem[] = [
    {
      number: '01',
      degree: 'MBA',
      field: 'Marketing & Finance',
      institution: 'Regional College of Management',
      location: 'Bhubaneswar',
      duration: '2025 — Present',
      status: 'Currently Pursuing'
    },
    {
      number: '02',
      degree: 'B.Com',
      field: 'Bachelor of Commerce',
      institution: 'Christ Degree College',
      location: 'Cuttack',
      duration: '2022 — 2025',
      status: 'Completed'
    }
  ];

}