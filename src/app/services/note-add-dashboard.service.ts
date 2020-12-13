import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { Cliente } from '../models/Client';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NoteAddDashboardService {

  constructor(protected Http:HttpClient) { }

  postClient(client : Cliente): Observable<any>{
    return this.Http.post( environment.apiUrl+'clients',client);
  }

  putClient(client : Cliente): Observable<any>{
    return this.Http.put( environment.apiUrl+'clients/'+client.id,client);
  }

  getClient(id:string){
    return this.Http.get(environment.apiUrl+'clients' + id);
  }
}
