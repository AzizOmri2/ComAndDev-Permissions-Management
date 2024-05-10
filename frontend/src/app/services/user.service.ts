import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  url:string = "http://127.0.0.1:3000";
  constructor(private http: HttpClient) { }


  listUser(){
    return this.http.get(this.url+'/sessions');
  }


  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type':'application/json'})
  };
  
  getConnected(data:any){
    return this.http.post(this.url+'/sessions', data, this.httpOptions);
  }

  findUser(id:any){
    return this.http.get(this.url+'/sessions/'+id);
  }


  // Registration
  getRegistered(data:any){
    return this.http.post(this.url+'/registrations', data, this.httpOptions);
  }

  // updateConge(data: any, id: any){
  //   return this.http.put(this.url+'/demandeConge/'+id, data, this.httpOptions);
  // }

  // deleteConge(id:any){
  //   return this.http.delete(this.url+'/demandeConge/'+id);
  // }
}
