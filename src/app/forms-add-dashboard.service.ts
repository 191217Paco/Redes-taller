import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from './models/Client'
import { Car } from './models/Car'
import { environment } from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class FormsAddDashboardService {

  constructor(protected Http : HttpClient) { }

  postClient(client : Cliente): Observable<any>{
    return this.Http.post( environment.apiUrl+'/clients',client);
  }
  putClient(client : Cliente): Observable<any>{
    return this.Http.put( environment.apiUrl+'/clients/'+client.id,client);
  }
  getClient(id:any){
    return this.Http.get(environment.apiUrl+'/clients/'+id);
  }


  postCar(car : Car): Observable<any>{
    return this.Http.post(environment.apiUrl+'/cars',car);
  }
  putCar(car : Car): Observable<any>{
    return this.Http.put(environment.apiUrl+'/cars/'+car.id,car);
  }
  getCar(id:string){
    return this.Http.get('https://redes-back-app.herokuapp.com/cars/'+id);
  }



}
