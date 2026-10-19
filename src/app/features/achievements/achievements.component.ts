import {
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';

interface Achievement {
  title: string;
  category: string;
  event: string;
  year: string;
  description: string;
  icon: string;
  accent: string;
}

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css']
})
export class AchievementsComponent implements OnInit, OnDestroy {

  /* =========================================
     ACHIEVEMENT IMAGES
  ========================================== */

  achievementImages: string[] = [
    'assets/images/achievements/a1.jpeg',
    'assets/images/achievements/a2.jpeg',
    'assets/images/achievements/a3.jpeg',
    'assets/images/achievements/a4.jpeg',
    'assets/images/achievements/a5.jpeg'
  ];

  currentImageIndex = 0;


  /* =========================================
     ACHIEVEMENT INFORMATION
  ========================================== */

  achievements: Achievement[] = [

    {
      title: '1st Position — Pakshala',
      category: 'WINNING MOMENT',
      event: 'Brahmastra 2026 · RCM Bhubaneswar',
      year: '2026',
      description:
        'Wrap & Crunch secured 1st position in the Pakshala food-stall competition among 15+ teams, earning a ₹10,000 prize.',
      icon: 'bi-trophy-fill',
      accent: 'gold'
    },

    {
      title: 'Wrap & Crunch',
      category: 'BUSINESS PARTICIPATION',
      event: 'AA KA MA BUZZ · RCM Bhubaneswar',
      year: '2026',
      description:
        'Actively participated in the annual fair fest with the Wrap & Crunch team, serving burritos, chips chaat and mojito while handling a live food-stall environment.',
      icon: 'bi-shop-window',
      accent: 'orange'
    },

    {
      title: 'Inter-College Cricket',
      category: 'SPORTS',
      event: 'Brahmastra · RCM Bhubaneswar',
      year: '2026',
      description:
        'Represented the RCM cricket team at the Brahmastra inter-college sporting event.',
      icon: 'bi-trophy',
      accent: 'green'
    },

    {
      title: 'Intra-College Cricket',
      category: 'SPORTS',
      event: 'RCM Bhubaneswar',
      year: '2026',
      description:
        'Participated in intra-college cricket and was part of the team journey that reached the semi-final stage.',
      icon: 'bi-dribbble',
      accent: 'cyan'
    },

    {
      title: 'Assistant General Secretary',
      category: 'LEADERSHIP',
      event: 'Victor Club · Sports Club Election',
      year: '2026',
      description:
        'Stood for the position of Assistant General Secretary in the Victor Club election. Although he missed the position by a few votes, the experience reflected his willingness to take responsibility and step into student leadership.',
      icon: 'bi-person-badge-fill',
      accent: 'magenta'
    }

  ];


  /* =========================================
     AUTOPLAY
  ========================================== */

  private autoPlayInterval?: ReturnType<typeof setInterval>;


  ngOnInit(): void {
    this.startAutoPlay();
  }


  ngOnDestroy(): void {
    this.stopAutoPlay();
  }


  /* =========================================
     NEXT IMAGE
  ========================================== */

  nextImage(): void {

    if (!this.achievementImages.length) {
      return;
    }

    this.currentImageIndex =
      (this.currentImageIndex + 1) %
      this.achievementImages.length;

    this.restartAutoPlay();
  }


  /* =========================================
     PREVIOUS IMAGE
  ========================================== */

  previousImage(): void {

    if (!this.achievementImages.length) {
      return;
    }

    this.currentImageIndex =
      (this.currentImageIndex -
        1 +
        this.achievementImages.length) %
      this.achievementImages.length;

    this.restartAutoPlay();
  }


  /* =========================================
     GO TO IMAGE
  ========================================== */

  goToImage(index: number): void {

    if (
      index < 0 ||
      index >= this.achievementImages.length
    ) {
      return;
    }

    this.currentImageIndex = index;

    this.restartAutoPlay();
  }


  /* =========================================
     AUTOPLAY
  ========================================== */

  startAutoPlay(): void {

    this.stopAutoPlay();

    if (this.achievementImages.length <= 1) {
      return;
    }

    this.autoPlayInterval = setInterval(() => {

      this.currentImageIndex =
        (this.currentImageIndex + 1) %
        this.achievementImages.length;

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


  /* =========================================
     TRACK BY
  ========================================== */

  trackByImage(
    index: number,
    image: string
  ): string {

    return image;
  }


  trackByAchievement(
    index: number,
    achievement: Achievement
  ): string {

    return achievement.title;
  }

}