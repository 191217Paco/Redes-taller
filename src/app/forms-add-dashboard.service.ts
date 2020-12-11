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
  
  postCar(car : Car): Observable<any>{
    return this.Http.post(environment.apiUrl+'/cars',car);
  }

  
  

  putClient(client : Cliente): Observable<any>{
    return this.Http.put( environment.apiUrl+'/clients/'+client.id,client);
  }
  putCar(car : Car): Observable<any>{
    return this.Http.put(environment.apiUrl+'/cars/'+car.id,car);
  }


  getClient(id:any){
    return this.Http.get(environment.apiUrl+'/clients/'+id);
  }
  getAllClients(){
    return this.Http.get(environment.apiUrl+'/clients');
  }
  getCar(id:string){
    return this.Http.get(environment.apiUrl+'/cars/'+id);
  }
  getService(id : any){
    return this.Http.get(environment.apiUrl+'/services/'+id);
  }
  getAllServices(){
    return this.Http.get(environment.apiUrl+'/services');
  } 
  getSpare_part(id:any){
    return this.Http.get(environment.apiUrl+'/spare_parts/'+id);
  }
  getAllSpare_parts(){
    return this.Http.get(environment.apiUrl+'/spare_parts');
  }




}
