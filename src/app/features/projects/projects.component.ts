import {
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit, OnDestroy {

  /* =========================================
     COFFEE SALES DASHBOARD
  ========================================== */

  coffeeImages: string[] = [
    'assets/images/projects/coffee1.jpeg',
    'assets/images/projects/c2.jpeg',
    'assets/images/projects/c3.jpeg'
  ];

  coffeeIndex = 0;


  /* =========================================
     E-COMMERCE SALES DASHBOARD
  ========================================== */

  ecommerceImages: string[] = [
    'assets/images/projects/ecommerce1.jpeg',
    'assets/images/projects/e2.jpeg',
    'assets/images/projects/e3.jpeg',
    'assets/images/projects/e4.jpeg'
  ];

  ecommerceIndex = 0;


  /* =========================================
     FINANCIAL MODELLING
     DCF MODEL VALUATION
  ========================================== */

  financialImages: string[] = [
    'assets/images/projects/f1.jpeg',
    'assets/images/projects/f2.jpeg',
    'assets/images/projects/f3.jpeg',
    'assets/images/projects/f4.jpeg',
    'assets/images/projects/f5.jpeg',
    'assets/images/projects/f6.jpeg',
    'assets/images/projects/f7.jpeg'
  ];

  financialIndex = 0;


  /* =========================================
     AUTOPLAY TIMERS
  ========================================== */

  private coffeeInterval?: ReturnType<typeof setInterval>;
  private ecommerceInterval?: ReturnType<typeof setInterval>;
  private financialInterval?: ReturnType<typeof setInterval>;


  ngOnInit(): void {
    this.startCoffeeAutoPlay();
    this.startEcommerceAutoPlay();
    this.startFinancialAutoPlay();
  }


  ngOnDestroy(): void {
    this.stopCoffeeAutoPlay();
    this.stopEcommerceAutoPlay();
    this.stopFinancialAutoPlay();
  }


  /* =========================================
     COFFEE CAROUSEL
  ========================================== */

  nextCoffeeImage(): void {
    if (!this.coffeeImages.length) {
      return;
    }

    this.coffeeIndex =
      (this.coffeeIndex + 1) % this.coffeeImages.length;

    this.restartCoffeeAutoPlay();
  }


  previousCoffeeImage(): void {
    if (!this.coffeeImages.length) {
      return;
    }

    this.coffeeIndex =
      (this.coffeeIndex - 1 + this.coffeeImages.length) %
      this.coffeeImages.length;

    this.restartCoffeeAutoPlay();
  }


  goToCoffeeImage(index: number): void {
    if (
      index < 0 ||
      index >= this.coffeeImages.length
    ) {
      return;
    }

    this.coffeeIndex = index;
    this.restartCoffeeAutoPlay();
  }


  startCoffeeAutoPlay(): void {
    this.stopCoffeeAutoPlay();

    if (this.coffeeImages.length <= 1) {
      return;
    }

    this.coffeeInterval = setInterval(() => {
      this.coffeeIndex =
        (this.coffeeIndex + 1) % this.coffeeImages.length;
    }, 5000);
  }


  stopCoffeeAutoPlay(): void {
    if (this.coffeeInterval) {
      clearInterval(this.coffeeInterval);
      this.coffeeInterval = undefined;
    }
  }


  restartCoffeeAutoPlay(): void {
    this.startCoffeeAutoPlay();
  }


  /* =========================================
     E-COMMERCE CAROUSEL
  ========================================== */

  nextEcommerceImage(): void {
    if (!this.ecommerceImages.length) {
      return;
    }

    this.ecommerceIndex =
      (this.ecommerceIndex + 1) % this.ecommerceImages.length;

    this.restartEcommerceAutoPlay();
  }


  previousEcommerceImage(): void {
    if (!this.ecommerceImages.length) {
      return;
    }

    this.ecommerceIndex =
      (this.ecommerceIndex - 1 + this.ecommerceImages.length) %
      this.ecommerceImages.length;

    this.restartEcommerceAutoPlay();
  }


  goToEcommerceImage(index: number): void {
    if (
      index < 0 ||
      index >= this.ecommerceImages.length
    ) {
      return;
    }

    this.ecommerceIndex = index;
    this.restartEcommerceAutoPlay();
  }


  startEcommerceAutoPlay(): void {
    this.stopEcommerceAutoPlay();

    if (this.ecommerceImages.length <= 1) {
      return;
    }

    this.ecommerceInterval = setInterval(() => {
      this.ecommerceIndex =
        (this.ecommerceIndex + 1) % this.ecommerceImages.length;
    }, 5500);
  }


  stopEcommerceAutoPlay(): void {
    if (this.ecommerceInterval) {
      clearInterval(this.ecommerceInterval);
      this.ecommerceInterval = undefined;
    }
  }


  restartEcommerceAutoPlay(): void {
    this.startEcommerceAutoPlay();
  }


  /* =========================================
     FINANCIAL MODELLING CAROUSEL
  ========================================== */

  nextFinancialImage(): void {
    if (!this.financialImages.length) {
      return;
    }

    this.financialIndex =
      (this.financialIndex + 1) %
      this.financialImages.length;

    this.restartFinancialAutoPlay();
  }


  previousFinancialImage(): void {
    if (!this.financialImages.length) {
      return;
    }

    this.financialIndex =
      (this.financialIndex - 1 + this.financialImages.length) %
      this.financialImages.length;

    this.restartFinancialAutoPlay();
  }


  goToFinancialImage(index: number): void {
    if (
      index < 0 ||
      index >= this.financialImages.length
    ) {
      return;
    }

    this.financialIndex = index;
    this.restartFinancialAutoPlay();
  }


  startFinancialAutoPlay(): void {
    this.stopFinancialAutoPlay();

    if (this.financialImages.length <= 1) {
      return;
    }

    this.financialInterval = setInterval(() => {
      this.financialIndex =
        (this.financialIndex + 1) %
        this.financialImages.length;
    }, 5200);
  }


  stopFinancialAutoPlay(): void {
    if (this.financialInterval) {
      clearInterval(this.financialInterval);
      this.financialInterval = undefined;
    }
  }


  restartFinancialAutoPlay(): void {
    this.startFinancialAutoPlay();
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
}