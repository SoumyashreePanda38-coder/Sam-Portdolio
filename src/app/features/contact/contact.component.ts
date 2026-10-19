import { Component } from '@angular/core';

interface ContactMethod {
  label: string;
  value: string;
  icon: string;
  type: string;
  href: string;
  accent: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  contactMethods: ContactMethod[] = [
    {
      label: 'EMAIL',
      value: 'sambhab307@gmail.com',
      icon: 'bi-envelope-fill',
      type: 'mailto',
      href: 'mailto:sambhab307@gmail.com',
      accent: 'purple'
    },
    {
      label: 'PHONE',
      value: '+91 8018318024',
      icon: 'bi-telephone-fill',
      type: 'tel',
      href: 'tel:+918018318024',
      accent: 'cyan'
    },
    {
      label: 'LINKEDIN',
      value: 'sambhabshreesahoo-mba',
      icon: 'bi-linkedin',
      type: 'social',
      href: 'https://www.linkedin.com/in/sambhabshreesahoo-mba',
      accent: 'blue'
    }
  ];

  activeContactIndex = 0;

  setActiveContact(index: number): void {
    if (
      index < 0 ||
      index >= this.contactMethods.length
    ) {
      return;
    }

    this.activeContactIndex = index;
  }

  trackByContact(
    index: number,
    contact: ContactMethod
  ): string {
    return contact.label;
  }
}