import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css',]
})
export class LoginComponent {

  user: any;
  loading: boolean = false;
  loginError: string = '';

  userForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private userService: UserService, private router: Router) {}

  onSubmit() {
    this.loading = true;
    this.loginError = '';

    const payload = this.userForm.value;

    this.userService.getConnected(payload).subscribe({
      next: (res: any) => {
        this.loading = false;
        if (res.logged_in) {
          this.user = res.user;

          // Store user data and token in localStorage
          localStorage.setItem('c_user', JSON.stringify({
            user: res.user,
            token: res.token // assuming your API returns a token
          }));
          
          this.userForm.reset();
          this.router.navigate(['/home']); 
        } else {
          this.loginError = res.error || 'Login failed. Please check your credentials.';
        }
      },
      error: (err) => {
        this.loading = false;
        this.loginError = 'Login failed. Please check your credentials.';
        console.error(err);
      }
    });
  }
}
