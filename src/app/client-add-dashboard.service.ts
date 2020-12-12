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

  headers = new HttpHeaders();
  constructor(protected Http : HttpClient) { 
    this.headers.append('Accept',"application/json")
    this.headers.append('Authorization',"Bearer "+localStorage.getItem('token'))
  }


  postClient(client : Cliente): Observable<any>{
    console.log(this.headers.keys());
    return this.Http.post(environment.apiUrl+'/clients',client,{headers:this.headers});
  }

  putClient(client : Cliente): Observable<any>{
    return this.Http.put(environment.apiUrl+'/clients/'+client.id,client,{headers:this.headers});
  }

  getClient(id:any){
    return this.Http.get(environment.apiUrl+'/clients/'+id,{headers:this.headers});
  }
}
