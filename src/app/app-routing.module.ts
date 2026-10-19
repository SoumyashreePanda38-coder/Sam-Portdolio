import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './features/home/home.component';
import { AboutComponent } from './features/about/about.component';
import { EducationComponent } from './features/education/education.component';
import { ExperienceComponent } from './features/experience/experience.component';
import { SkillsComponent } from './features/skills/skills.component';
import { AchievementsComponent } from './features/achievements/achievements.component';
import { CertificationsComponent } from './features/certifications/certifications.component';
import { ContactComponent } from './features/contact/contact.component';

import { ProjectsComponent } from './features/projects/projects.component';


const routes: Routes = [

  {
    path: '',
    component: HomeComponent
  },

  {
    path: 'about',
    component: AboutComponent
  },

  {
    path: 'education',
    component: EducationComponent
  },

  {
    path: 'experience',
    component: ExperienceComponent
  },

  {
    path: 'projects',
    component: ProjectsComponent
  },

  {
    path: 'skills',
    component: SkillsComponent
  },

  {
    path: 'achievements',
    component: AchievementsComponent
  },

  {
    path: 'certifications',
    component: CertificationsComponent
  },

  {
    path: 'contact',
    component: ContactComponent
  },

  {
    path: '**',
    redirectTo: ''
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled'
    })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }