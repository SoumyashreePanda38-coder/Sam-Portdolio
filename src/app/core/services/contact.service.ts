import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  sendMessage(payload: { name: string; email: string; message: string }): boolean {
    console.log('Contact form submitted:', payload);
    return true;
  }
}
