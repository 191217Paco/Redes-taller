import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  headers : any;
  constructor(protected Http : HttpClient) {}

  createUser(user : User):Observable<any>{
    
    return this.Http.post(environment.apiUrl+'/register',user)
  }
}
