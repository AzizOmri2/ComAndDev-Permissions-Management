import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CongeService {

  url: string = "http://127.0.0.1:3000";
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  // List all permissions
  listConge() {
    return this.http.get(this.url + '/demandeConge');
  }

  // Add a new permission
  addConge(data: any) {
    return this.http.post(this.url + '/demandeConge', data, this.httpOptions);
  }

  // Find one permission
  findConge(id: any) {
    return this.http.get(this.url + '/demandeConge/' + id);
  }

  // Update a permission
  updateConge(data: any, id: any) {
    return this.http.put(this.url + '/demandeConge/' + id, data, this.httpOptions);
  }

  // Delete a permission
  deleteConge(id: any) {
    return this.http.delete(this.url + '/demandeConge/' + id);
  }

  // Accept a permission
  acceptConge(id: any) {
    return this.http.put(this.url + '/demandeCongeAccept/' + id, {}, this.httpOptions);
  }

  // Reject a permission
  rejectConge(id: any) {
    return this.http.put(this.url + '/demandeCongeReject/' + id, {}, this.httpOptions);
  }
}
