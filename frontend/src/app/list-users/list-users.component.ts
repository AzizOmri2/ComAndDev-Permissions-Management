import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss',
              '../../assets/dist/css/style.min.css',
              '../../assets/libs/flot/css/float-chart.css']
})
export class ListUsersComponent {

  users:any;

  constructor(private userService: UserService, private router : Router){

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

  ngOnInit(){
    this.CongeList()
  }

  CongeList(){
    this.users = this.userService.listUser().subscribe(
      user => {
        this.users = user
        console.log(this.users);
      }
    )
  }

}
