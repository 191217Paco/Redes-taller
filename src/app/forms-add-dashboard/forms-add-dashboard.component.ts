import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import {  FormsAddDashboardService } from '../forms-add-dashboard.service';
import {  Cliente } from '../models/Client'

@Component({
  selector: 'app-forms-add-dashboard',
  templateUrl: './forms-add-dashboard.component.html',
  styleUrls: ['./forms-add-dashboard.component.css']
})
export class FormsAddDashboardComponent implements OnInit {
  clients : any = [];
  cars : any = [];
  id : any; 

  name ='';
  lastname = '';
  phone = '';
  email = '';

  marca = '';
  model_car = '';
  client_id = '';

  edit : boolean = false;

  


  constructor(
    protected fSADbS : FormsAddDashboardService,
    public router : Router,
    public activateRouter : ActivatedRoute
  ) { }

  ngOnInit(): void {
    const params = this.activateRouter.snapshot.params;
    this.fSADbS.getClient(params.id).subscribe(
      res => {
        this.id = params.id;
        this.clients = res;
        this.edit = true;
      },
      err => console.log(err)
    )
  }
  
  postNote(){
    const cliente = {
      id : '',
      name : this.name,
      lastname : this.lastname,
      phone : this.phone,
      email : this.email
    };
 
    this.fSADbS.postClient(cliente).subscribe(
      res => {
        this.client_id = res.content.id;
        //console.log(this.client_id);
      }
    )
    
    const car  = {
      marca : this.marca,
      model_car : this.model_car,
      client_id : this.client_id
    }
    car.client_id = this.client_id;
    console.log(car);
    this.fSADbS.postCar(car).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/']);
      }
    )
  }


  putNote(){
    const cliente = {
      id : '',
      name : this.name,
      lastname : this.lastname,
      phone : this.phone,
      email : this.email
    };
    const car  = {
      marca : this.marca,
      model_car : this.model_car,
      client_id : this.client_id
    }
    this.fSADbS.putClient(cliente).subscribe(
      res => {
        this.router.navigate(['/']);
      }
    )
    this.fSADbS.putCar(car).subscribe(
      res => {
        this.router.navigate(['/'])
      }
    )
  }

  putClient(){
    const cliente = {
      id : '',
      name : this.name,
      lastname : this.lastname,
      phone : this.phone,
      email : this.email
    };
    this.fSADbS.putClient(cliente).subscribe(
      res => {
        this.router.navigate(['/']);
      }
    )
  }


}
