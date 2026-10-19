import {
  Component,
  HostListener,
  OnInit
} from '@angular/core';

interface NavItem {
  label: string;
  section: string;
  number: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  /* =====================================================
     NAVIGATION ITEMS
     ===================================================== */

  navItems: NavItem[] = [

    {
      label: 'Home',
      section: 'home',
      number: '01'
    },

    {
      label: 'About',
      section: 'about',
      number: '02'
    },

    {
      label: 'Education',
      section: 'education',
      number: '03'
    },

    {
      label: 'Experience',
      section: 'experience',
      number: '04'
    },

    {
      label: 'Projects',
      section: 'projects',
      number: '05'
    },

    {
      label: 'Skills',
      section: 'skills',
      number: '06'
    },

    {
      label: 'Achievements',
      section: 'achievements',
      number: '07'
    },

    {
      label: 'Certifications',
      section: 'certifications',
      number: '08'
    },

    {
      label: 'Contact',
      section: 'contact',
      number: '09'
    }

  ];


  /* =====================================================
     STATE
     ===================================================== */

  isScrolled = false;

  isMenuOpen = false;

  activeSection = 'home';


  /* =====================================================
     INITIALIZATION
     ===================================================== */

  ngOnInit(): void {

    this.updateActiveSection();

  }


  /* =====================================================
     WINDOW SCROLL
     ===================================================== */

  @HostListener('window:scroll')
  onWindowScroll(): void {

    this.isScrolled =
      window.scrollY > 30;

    this.updateActiveSection();

  }


  /* =====================================================
     DETECT ACTIVE SECTION
     ===================================================== */

  private updateActiveSection(): void {

    const scrollPosition =
      window.scrollY + 180;


    let currentSection = 'home';


    for (const item of this.navItems) {

      const section =
        document.getElementById(item.section);


      if (!section) {
        continue;
      }


      const sectionTop =
        section.offsetTop;


      const sectionBottom =
        sectionTop + section.offsetHeight;


      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionBottom
      ) {

        currentSection =
          item.section;

        break;

      }

    }


    this.activeSection =
      currentSection;

  }


  /* =====================================================
     SCROLL TO SECTION
     ===================================================== */

  scrollToSection(
    sectionId: string,
    event?: Event
  ): void {

    if (event) {
      event.preventDefault();
    }


    const section =
      document.getElementById(sectionId);


    if (!section) {
      return;
    }


    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });


    this.activeSection =
      sectionId;


    this.closeMenu();

  }


  /* =====================================================
     MOBILE MENU
     ===================================================== */

  toggleMenu(): void {

    this.isMenuOpen =
      !this.isMenuOpen;


    if (this.isMenuOpen) {

      document.body.style.overflow =
        'hidden';

    } else {

      document.body.style.overflow =
        '';

    }

  }


  /* =====================================================
     CLOSE MOBILE MENU
     ===================================================== */

  closeMenu(): void {

    this.isMenuOpen =
      false;

    document.body.style.overflow =
      '';

  }


  /* =====================================================
     RESUME DOWNLOAD
     ===================================================== */

  downloadResume(): void {

    const resumePath =
      'assets/documents/Sambhab-Resume.pdf';


    const link =
      document.createElement('a');


    link.href =
      resumePath;


    link.download =
      'Sambhab-Resume.pdf';


    document.body.appendChild(link);


    link.click();


    document.body.removeChild(link);

  }


  /* =====================================================
     GO TO CONTACT
     ===================================================== */

  goToContact(): void {

    this.scrollToSection('contact');

  }

}