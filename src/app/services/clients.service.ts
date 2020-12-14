import { HttpClient, HttpHeaders } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Car } from '../models/Car';
import { Cliente } from '../models/Client';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  headers: HttpHeaders;

  constructor(protected _http : HttpClient) {
    this.headers = new HttpHeaders({
      'Accept': 'application/json',
      'Authorization': 'Bearer '+localStorage.getItem('token')
    });
  }

  postClient(client : Cliente): Observable<any>{
    console.log(this.headers.keys());
    return this._http.post(environment.apiUrl+'/clients',client,{headers:this.headers});
  }

  putClient(client : Cliente): Observable<any>{
    return this._http.put(environment.apiUrl+'/clients/'+client.id,client,{headers:this.headers});
  }

  getClient(id:any): Observable<any>{
    return this._http.get<Cliente>(environment.apiUrl+'/clients/'+id,{headers:this.headers});
  }

  getClients(): Observable<any> {
    return this._http.get<any>(environment.apiUrl+'/clients',{headers: this.headers});
  }
  deleteClient (id: number): Observable<any>{
    return this._http.delete<any>(environment.apiUrl+'/clients/'+id,{headers : this.headers});
  }

  addCar(car: Car): Observable<any>{
    return this._http.post(environment.apiUrl+'/cars',car,{headers: this.headers});
  }

  getCar(id: number): Observable<any>{
    return this._http.get<any>(environment.apiUrl+'/cars/'+id,{headers: this.headers});
  }

  deleteCar(id: any): Observable<any>{
    return this._http.delete(environment.apiUrl+'/cars/'+id,{headers: this.headers});
  }
}
