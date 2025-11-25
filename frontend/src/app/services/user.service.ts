import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string = environment.apiUrl;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  // List all users
  listUser() {
    return this.http.get(this.url + '/users');
  }

  // Get a single user by ID
  findUser(id: any) {
    return this.http.get(this.url + '/users/' + id);
  }

  // Delete a user by ID
  deleteUser(id: any) {
    return this.http.delete(`${this.url}/users/${id}`);
  }

  // Create a session / login
  getConnected(data: any) {
    return this.http.post(this.url + '/sessions', {
      email: data.email,
      password: data.password
    }, this.httpOptions);
  }

  // Register a new user
  getRegistered(data: any) {
    return this.http.post(this.url + '/registrations', data, this.httpOptions);
  }
}
