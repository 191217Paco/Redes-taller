import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from './models/Client'
import { Car } from './models/Car'
@Injectable({
  providedIn: 'root'
})
export class FormsAddDashboardService {

  constructor(protected Http : HttpClient) { }

  postClient(client : Cliente): Observable<any>{
    return this.Http.post( 'https://redes-back-app.herokuapp.com/clients',client);
  }
  putClient(client : Cliente): Observable<any>{
    return this.Http.put( 'https://redes-back-app.herokuapp.com/clients',client);
  }
  getClient(id:any){
    return this.Http.get(`https://redes-back-app.herokuapp.com/clients${id}`);
  }


  postCar(car : Car): Observable<any>{
    return this.Http.post('https://redes-back-app.herokuapp.com/cars',car);
  }
 
  putCar(car : Car): Observable<any>{
    return this.Http.put('https://redes-back-app.herokuapp.com/cars',car);
  }
  getCar(id:string){
    return this.Http.get(`https://redes-back-app.herokuapp.com/cars${id}`);
  }



}
