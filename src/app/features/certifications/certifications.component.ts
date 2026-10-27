import {
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';

interface Certification {
  title: string;
  category: string;
  description: string;
  icon: string;
  accent: string;
  number: string;
  image: string;
}

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css']
})
export class CertificationsComponent implements OnInit, OnDestroy {

  certifications: Certification[] = [

    // 01
    {
      title: 'Tally Prime with GST',
      category: 'FINANCE & ACCOUNTING',
      description:
        'Certification focused on Tally Prime and GST-based accounting workflows.',
      icon: 'bi-calculator-fill',
      accent: 'gold',
      number: '01',
      image: 'assets/images/certificates/c1.jpeg'
    },

    // 02
    {
      title: 'Power BI',
      category: 'DATA & ANALYTICS',
      description:
        'Certification focused on Power BI, data visualization and analytical reporting.',
      icon: 'bi-bar-chart-fill',
      accent: 'cyan',
      number: '02',
      image: 'assets/images/certificates/c2.png'
    },

    // 03
    {
      title: 'Marketing Fundamentals',
      category: 'MARKETING',
      description:
        'Certification focused on digital branding and building a stronger online brand presence.',
      icon: 'bi-megaphone-fill',
      accent: 'orange',
      number: '03',
      image: 'assets/images/certificates/c3.jpeg'
    },

    // 04
    {
      title: 'Introduction to AI',
      category: 'ARTIFICIAL INTELLIGENCE',
      description:
        'Certification covering the fundamentals of artificial intelligence and its applications.',
      icon: 'bi-robot',
      accent: 'purple',
      number: '04',
      image: 'assets/images/certificates/c4.png'
    },

    // 05
    {
      title: 'Graphic Design',
      category: 'DESIGN',
      description:
        'Certification focused on graphic design concepts, visual communication and creative design principles.',
      icon: 'bi-palette-fill',
      accent: 'pink',
      number: '05',
      image: 'assets/images/certificates/c5.png'
    },

    // 06
    {
      title: 'Introduction to Microsoft Excel',
      category: 'PRODUCTIVITY & ANALYTICS',
      description:
        'Certification covering the fundamentals of Microsoft Excel and spreadsheet-based data handling.',
      icon: 'bi-file-earmark-spreadsheet-fill',
      accent: 'green',
      number: '06',
      image: 'assets/images/certificates/c6.png'
    },

    // 07
    {
      title: 'Getting Started with MS PowerPoint',
      category: 'PRESENTATION & PRODUCTIVITY',
      description:
        'Certification focused on the fundamentals of Microsoft PowerPoint and effective presentation creation.',
      icon: 'bi-file-earmark-slides-fill',
      accent: 'orange',
      number: '07',
      image: 'assets/images/certificates/c7.png'
    },

    // 08
    {
      title: 'Introduction to Cybersecurity Essentials',
      category: 'CYBERSECURITY',
      description:
        'Certification covering essential cybersecurity concepts, digital security and safe computing practices.',
      icon: 'bi-shield-lock-fill',
      accent: 'cyan',
      number: '08',
      image: 'assets/images/certificates/c8.png'
    },

    // 09
    {
      title: 'Carlsberg Summer Internship',
      category: 'INTERNSHIP EXPERIENCE',
      description:
        'Summer internship experience at Carlsberg India focused on market research, brand visibility, stock availability and promotional activities.',
      icon: 'bi-briefcase-fill',
      accent: 'gold',
      number: '09',
      image: 'assets/images/certificates/c9.png'
    }
  ];

  currentIndex = 0;

  private autoPlayInterval?: ReturnType<typeof setInterval>;

  ngOnInit(): void {
    this.startAutoPlay();
  }

  ngOnDestroy(): void {
    this.stopAutoPlay();
  }

  nextCertification(): void {
    if (!this.certifications.length) {
      return;
    }

    this.currentIndex =
      (this.currentIndex + 1) %
      this.certifications.length;

    this.restartAutoPlay();
  }

  previousCertification(): void {
    if (!this.certifications.length) {
      return;
    }

    this.currentIndex =
      (this.currentIndex - 1 + this.certifications.length) %
      this.certifications.length;

    this.restartAutoPlay();
  }

  goToCertification(index: number): void {
    if (
      index < 0 ||
      index >= this.certifications.length
    ) {
      return;
    }

    this.currentIndex = index;
    this.restartAutoPlay();
  }

  startAutoPlay(): void {
    this.stopAutoPlay();

    if (this.certifications.length <= 1) {
      return;
    }

    this.autoPlayInterval = setInterval(() => {
      this.currentIndex =
        (this.currentIndex + 1) %
        this.certifications.length;
    }, 5000);
  }

  stopAutoPlay(): void {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
      this.autoPlayInterval = undefined;
    }
  }

  restartAutoPlay(): void {
    this.startAutoPlay();
  }

  trackByCertification(
    index: number,
    certification: Certification
  ): string {
    return certification.title;
  }
}