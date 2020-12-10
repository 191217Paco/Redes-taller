import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientSeeDashboardService {

  constructor(protected Http:HttpClient) { }

  getClients () {
    return this.Http.get('https://redes-back-app.herokuapp.com/clients')
  }
  deleteClient (id : string){
    return this.Http.delete(`https://redes-back-app.herokuapp.com/clients${id}`)
  }
}
