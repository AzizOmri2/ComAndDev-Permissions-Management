import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss',
              '../../assets/dist/css/style.min.css',
              '../../assets/libs/flot/css/float-chart.css']
})
export class DashboardComponent {

  constructor(private router : Router){

  }  

  logout(){
    this.router.navigate(['/login/user'])
  }

  permissionsList(){
    this.router.navigate(['/list/conge'])
  }

  permissionCreate(){
    this.router.navigate(['/create/conge'])
  }

  usersList(){
    this.router.navigate(['/list/users'])
  }

  dashboard(){
    this.router.navigate(['home'])
  }

}
