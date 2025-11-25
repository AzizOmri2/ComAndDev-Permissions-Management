import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css',]
})
export class RegistrationComponent {

  user: any;
  isLoading = false;
  success = false;
  shake = false;
  registrationError: string = ''; // <-- Add error property

  userForm = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    password_confirmation: new FormControl('', Validators.required),
    avatar: new FormControl('', Validators.required)
  });

  constructor(private userService: UserService, private router: Router) {}

  login() {
    this.router.navigate(['/login/user']);
  }

  onSubmit() {

    if (this.userForm.invalid) return;

    // ❌ Password mismatch → Shake animation
    if (this.userForm.value.password !== this.userForm.value.password_confirmation) {
      this.shake = true;
      setTimeout(() => this.shake = false, 600);
      return;
    }

    // Start loader
    this.isLoading = true;
    this.registrationError = ''; // Reset previous errors

    this.userService.getRegistered(this.userForm.value).subscribe(
      response => {
        this.isLoading = false;
        this.success = true;

        // Success animation then redirect
        setTimeout(() => {
          this.router.navigate(['/login/user']);
        }, 1200);
      },

      error => {
        this.isLoading = false;

        // Handle Rails backend errors (e.g., 422 Unprocessable Entity)
        if (error.status === 422 && error.error) {
          this.registrationError = error.error?.error || "Registration failed. Email may already exist.";
        } else {
          this.registrationError = "Registration failed. Please try again.";
        }

        // Optional: Shake animation on error
        this.shake = true;
        setTimeout(() => this.shake = false, 600);

        console.error(error);
      }
    );
  }
}
