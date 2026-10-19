import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit, OnDestroy {

  /* ============================================================
     CAROUSEL IMAGES
     ============================================================ */

  internshipImages: string[] = [
    'assets/images/experience/E1.jpeg',
    'assets/images/experience/E2.jpeg',
    'assets/images/experience/E3.jpeg',
    'assets/images/experience/E4.jpeg',
    'assets/images/experience/E5.jpeg',
    'assets/images/experience/E6.jpeg',
    'assets/images/experience/E7.jpeg',
    'assets/images/experience/E8.jpeg',
    'assets/images/experience/E9.jpeg'
  ];

  /* ============================================================
     CAROUSEL STATE
     ============================================================ */

  currentImageIndex = 0;

  private autoPlayInterval?: ReturnType<typeof setInterval>;

  /* ============================================================
     LIFECYCLE
     ============================================================ */

  ngOnInit(): void {
    this.startAutoPlay();
  }

  ngOnDestroy(): void {
    this.stopAutoPlay();
  }

  /* ============================================================
     CAROUSEL CONTROLS
     ============================================================ */

  nextImage(): void {
    this.currentImageIndex =
      (this.currentImageIndex + 1) %
      this.internshipImages.length;

    this.restartAutoPlay();
  }

  previousImage(): void {
    this.currentImageIndex =
      (this.currentImageIndex - 1 +
        this.internshipImages.length) %
      this.internshipImages.length;

    this.restartAutoPlay();
  }

  goToImage(index: number): void {
    if (
      index < 0 ||
      index >= this.internshipImages.length
    ) {
      return;
    }

    this.currentImageIndex = index;

    this.restartAutoPlay();
  }

  /* ============================================================
     AUTOPLAY
     ============================================================ */

  startAutoPlay(): void {

    this.stopAutoPlay();

    if (this.internshipImages.length <= 1) {
      return;
    }

    this.autoPlayInterval = setInterval(() => {

      this.currentImageIndex =
        (this.currentImageIndex + 1) %
        this.internshipImages.length;

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

  /* ============================================================
     TRACK BY
     ============================================================ */

  trackByImage(index: number, image: string): string {
    return image;
  }

}