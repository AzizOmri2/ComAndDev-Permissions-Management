import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {

  user: any = null;

  constructor() { }

  ngOnInit(): void {
    // Get user data from localStorage
    const storedData = localStorage.getItem('c_user');
    if (storedData) {
      this.user = JSON.parse(storedData).user;
    }
  }

}
