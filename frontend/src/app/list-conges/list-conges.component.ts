import { Component } from '@angular/core';
import { CongeService } from '../services/conge.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-conges',
  templateUrl: './list-conges.component.html',
  styleUrls: ['./list-conges.component.scss',
              '../../assets/dist/css/style.min.css',
              '../../assets/libs/flot/css/float-chart.css']
})
export class ListCongesComponent {

  conges:any;

  constructor(private congeService: CongeService,private router : Router){

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
    this.conges = this.congeService.listConge().subscribe(
      conge => {
        this.conges = conge
        console.log(this.conges);
      }
    )
  }

  deleteConge(id:any){
    const shouldDelete = window.confirm("Are you sure you want to delete ?");

    if (shouldDelete) {
      this.congeService.deleteConge(id).subscribe(
        conge => {
          console.log("Conge has been deleted.");
        }
      )
      alert("Permission deleted successfully !");
      window.location.reload();
    }
    
  }

  changeStatus(id:any){
    this.congeService.updateStatus(id).subscribe(
      conge => {
        console.log("Conge has been accepted.");
      }
    )
    window.location.reload();
  }

}
