import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import {Cliente} from './models/Client';

@Injectable({
  providedIn: 'root'
})
export class NoteAddDashboardService {

  constructor(protected Http:HttpClient) { }

  postClient(client : Cliente): Observable<any>{
    return this.Http.post( 'https://redes-back-app.herokuapp.com/clients',client);
  }

  putClient(client : Cliente): Observable<any>{
    return this.Http.put( 'https://redes-back-app.herokuapp.com/clients',client);
  }

  getClient(id:string){
    return this.Http.get(`https://redes-back-app.herokuapp.com/clients${id}`);
  }
}
