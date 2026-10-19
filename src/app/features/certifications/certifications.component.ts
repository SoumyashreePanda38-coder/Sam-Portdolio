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

    {
      title: 'Digital Branding',
      category: 'MARKETING',
      description:
        'Certification focused on digital branding and building a stronger online brand presence.',
      icon: 'bi-megaphone-fill',
      accent: 'orange',
      number: '03',
      image: 'assets/images/certificates/c3.jpeg'
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