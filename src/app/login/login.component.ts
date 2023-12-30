// login.component.ts
import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // Add any necessary logic or methods here
  constructor(private router: Router) { }
  login() {
    this.router.navigate(['/central']);
  }
  validateForm() {
    // Add your form validation logic if needed
    console.log('Form validated!'); // For demonstration purposes, you can replace this with your actual validation logic
  }
}
