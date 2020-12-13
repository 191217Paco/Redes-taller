import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../environments/environment'
import { User } from './models/User'
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(protected Http : HttpClient) { }

  postLogin (login : User):Observable<any> {
    return this.Http.post(environment.apiUrl+'/login/',login)
  }
}


