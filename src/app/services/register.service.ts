import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../environments/environment'
import { HttpHeaders } from "@angular/common/http"
import { User } from './models/User'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  headers : any;
  constructor(protected Http : HttpClient) { 
    this.headers = new HttpHeaders({
      'Accept:':"application/json",
      'Authorization:':"Bearer Jz3kpn17jgikCDAIZp0rBQaCwUofNid2TtfsiYBOpVoe4qtSbxocp1w4n0f269vIawsrxiWqTDgwGit4T2U8jWLcpmsyi1wbPS99"
    })
  }

  createUser(user : any):Observable<any>{
    
    return this.Http.post(environment.apiUrl+'/users',user)
  }
}
