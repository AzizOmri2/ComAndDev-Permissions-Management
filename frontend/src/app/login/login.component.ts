import { Component } from '@angular/core';
import { FormGroup , FormControl } from '@angular/forms'
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss','./loginStyle.css']
})
export class LoginComponent {

  user: any;

  userForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    password_confirmation: new FormControl('')

  })

  constructor(private userService: UserService, private router: Router){

  }

  onSubmit(){
    this.userService.getConnected(this.userForm.value).subscribe(
      ( user: any ) => {
        this.user=user;
        this.userForm.reset();
        this.router.navigate(['home']);
      },
      (error) => {
        alert("Login Failed. Please check your credentials.");
        console.error(error);
      }
    );
    
  }

  register(){
    this.router.navigate(['register/user'])
  }

}
