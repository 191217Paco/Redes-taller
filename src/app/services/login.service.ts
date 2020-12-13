import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment'
import { from, Observable } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(protected Http : HttpClient) { }

  postLogin (login : User):Observable<any> {
    return this.Http.post(environment.apiUrl+'/login/',login)
  }
}


