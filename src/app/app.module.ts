import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Shared Components
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

// Feature Components
import { HomeComponent } from './features/home/home.component';
import { AboutComponent } from './features/about/about.component';
import { EducationComponent } from './features/education/education.component';
import { ExperienceComponent } from './features/experience/experience.component';
import { SkillsComponent } from './features/skills/skills.component';
import { AchievementsComponent } from './features/achievements/achievements.component';
import { CertificationsComponent } from './features/certifications/certifications.component';
import { ContactComponent } from './features/contact/contact.component';

// Project Components
import { ProjectsComponent } from './features/projects/projects.component';


@NgModule({
  declarations: [

    // Root
    AppComponent,

    // Shared
    NavbarComponent,
    FooterComponent,

    // Features
    HomeComponent,
    AboutComponent,
    EducationComponent,
    ExperienceComponent,
    SkillsComponent,
    AchievementsComponent,
    CertificationsComponent,
    ContactComponent,

    // Projects
    ProjectsComponent

  ],

  imports: [

    // Angular
    BrowserModule,

    // Routing
    AppRoutingModule,

    // Forms
    FormsModule,
    ReactiveFormsModule,

    // HTTP
    HttpClientModule

  ],

  providers: [],

  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }