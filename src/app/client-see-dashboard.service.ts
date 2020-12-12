import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { environment } from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ClientSeeDashboardService {
  headers : any;
  constructor(protected Http:HttpClient) { 
    this.headers = new HttpHeaders({
      'Accept':"application/json",
      'Authorization':"Bearer "+localStorage.getItem('token')
    })
  }

  getClients () {
    return this.Http.get(environment.apiUrl+'/clients',{headers : this.headers})
  }
  deleteClient (id : string){
    return this.Http.delete(environment.apiUrl+'/clients/'+id,{headers : this.headers})
  }
}
