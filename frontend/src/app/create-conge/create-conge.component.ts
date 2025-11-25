import { Component } from '@angular/core';
import { FormGroup , FormControl } from '@angular/forms'
import { CongeService } from '../services/conge.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-conge',
  templateUrl: './create-conge.component.html',
  styleUrls: ['./create-conge.component.css',]
})
export class CreateCongeComponent {

  conge: any;

  congeForm = new FormGroup({
    dateDebut: new FormControl(''),
    dateFin: new FormControl(''),
    commentaire: new FormControl('')

  })

  constructor(private congeService: CongeService, private router:Router){

  }

  onSubmit(){
    this.congeService.addConge(this.congeForm.value).subscribe(
      conge => {
        this.conge=conge;
        alert("Permission added successfully !");
        this.router.navigate(['/list/conge']);
      }
    );
  }

}
