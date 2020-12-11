import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(protected Http : HttpClient) { }

  getClients () {
    return this.Http.get(environment.apiUrl+'/clients')
  }
  deleteClient (id : string){
    return this.Http.delete(environment.apiUrl+'/clients/'+id)
  }

}
