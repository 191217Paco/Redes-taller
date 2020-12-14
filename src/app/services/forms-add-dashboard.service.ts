import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../models/Client';
import { Car } from '../models/Car';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FormsAddDashboardService {
  headers : HttpHeaders;
  constructor(protected Http : HttpClient) { 
    this.headers = new HttpHeaders({
      'Accept':"application/json",
      'Authorization':"Bearer "+localStorage.getItem('token')
    })
  }

  postClient(client : any): Observable<any>{
    return this.Http.post( environment.apiUrl+'/clients',client,{headers : this.headers});
  }
  
  postCar(car : any): Observable<any>{
    return this.Http.post(environment.apiUrl+'/cars',car,{headers : this.headers});
  }

  
  

  putClient(client : Cliente): Observable<any>{
    return this.Http.put( environment.apiUrl+'/clients/'+client.id,client,{headers : this.headers});
  }
  putCar(car : Car): Observable<any>{
    return this.Http.put(environment.apiUrl+'/cars/'+car.id,car,{headers : this.headers});
  }


  getClient(id:any){
    return this.Http.get(environment.apiUrl+'/clients/'+id,{headers : this.headers});
  }
  getAllClients(){
    return this.Http.get(environment.apiUrl+'/clients',{headers : this.headers});
  }
    
  getCar(id:string){
    return this.Http.get(environment.apiUrl+'/cars/'+id,{headers : this.headers});
  }
  getService(id : any){
    return this.Http.get(environment.apiUrl+'/services/'+id,{headers : this.headers});
  }
  getAllServices(){
    return this.Http.get(environment.apiUrl+'/services',{headers : this.headers});
  } 
  getSpare_part(id:any){
    return this.Http.get(environment.apiUrl+'/parts/'+id,{headers : this.headers});
  }
  getAllSpare_parts(){
    return this.Http.get(environment.apiUrl+'/parts',{headers : this.headers});
  }
}
