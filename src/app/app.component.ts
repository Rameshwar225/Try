// app.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  // Add any necessary logic or methods here
  toggleDropdown() {
    // Add your dropdown toggle logic if needed
  }

  validateForm() {
    // Add your form validation logic if needed
  }
}


