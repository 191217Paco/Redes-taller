import { Component, OnInit, Inject, inject } from '@angular/core';
import {  ClientAddDashboardService } from '../client-add-dashboard.service';
import { ActivatedRoute, Router,ParamMap, Route } from '@angular/router';
import {  Cliente } from '../models/Client';
import { from } from 'rxjs';


@Component({
   
  selector: 'app-client-add-dashboard',
  templateUrl: './client-add-dashboard.component.html',
  styleUrls: ['./client-add-dashboard.component.css']

})
export class ClientAddDashboardComponent implements OnInit {
  clients:any = []
  id : number =0;
  name ='';
  lastname = ''
  phone = ''
  email = ''
 
  edit : boolean = false;

  constructor(
    protected CADbS:ClientAddDashboardService, 
    public router:Router,
    private route:ActivatedRoute, 
    
    ) 
  { }
  
 

  ngOnInit(): void {
    //this.id = parseInt(this.route.snapshot.paramMap.get("id"));
    //this.id = this.route.snapshot.paramMap.get("id");
    
    const params = this.route.snapshot.params;
    this.CADbS.getClient(params.id).subscribe(
      res => {
        this.id = params.id;
        this.clients = res;
        this.edit = true;
      },
      err => console.log(err)
    )
  }

  /*selectImage(event:any){
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.image = file;
      console.log(this.image);
    } else {
      this.image = undefined;
    }
  }*/
  
  postClient(){
    const cliente = {
      id : this.id,
      name : this.name,
      lastname : this.lastname,
      phone : this.phone,
      email : this.email
    };
    this.CADbS.postClient(cliente).subscribe(
      res => {
        console.log(res);
        this.router.navigate([
          '/'
        ]);
      },
      err => console.log(err)
    );
  }

  putClient(){    
    const cliente = {
      id : this.id,
      name : this.name,
      lastname : this.lastname,
      phone : this.phone,
      email : this.email
    };    
    this.CADbS.putClient(cliente).subscribe(
      res => {
        this.router.navigate([
          '/'
        ]);
      },
      err => console.log(err)
    );
  }

}
