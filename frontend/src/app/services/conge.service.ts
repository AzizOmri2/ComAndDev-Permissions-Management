import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CongeService {

  url:string = "http://127.0.0.1:3000";
  constructor(private http: HttpClient) { }


  listConge(){
    return this.http.get(this.url+'/demandeConge');
  }


  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type':'application/json'})
  };
  addConge(data:any){
    return this.http.post(this.url+'/demandeConge', data, this.httpOptions);
  }

  findConge(id:any){
    return this.http.get(this.url+'/demandeConge/'+id);
  }

  updateConge(data: any, id: any){
    return this.http.put(this.url+'/demandeConge/'+id, data, this.httpOptions);
  }

  deleteConge(id:any){
    return this.http.delete(this.url+'/demandeConge/'+id);
  }

  updateStatus(id: any){
    return this.http.put(this.url+'/demandeCongeStatus/'+id, this.httpOptions);
  }
}
