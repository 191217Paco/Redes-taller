import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';
import {Cliente} from './models/Client';
import { environment } from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ClientAddDashboardService {

  constructor(protected Http:HttpClient) { }

  postClient(client : Cliente): Observable<any>{
    console.log(client);
    return this.Http.post(environment.apiUrl+'/clients',client);
  }

  putClient(client : Cliente): Observable<any>{
    return this.Http.put(environment.apiUrl+'/clients/'+client.id,client);
  }

  getClient(id:any){
    return this.Http.get(environment.apiUrl+'/clients/'+id);
  }
}
