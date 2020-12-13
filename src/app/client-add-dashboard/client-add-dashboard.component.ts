import { Component, OnInit, Inject, inject } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Cliente } from '../models/Client';
import { ClientsService } from '../services/clients.service';


@Component({
   
  selector: 'app-client-add-dashboard',
  templateUrl: './client-add-dashboard.component.html',
  styleUrls: ['./client-add-dashboard.component.css']

})
export class ClientAddDashboardComponent implements OnInit {
   
  edit : boolean;

  constructor(
    protected CADbS:ClientsService, 
    public router:Router,
    private route:ActivatedRoute, 
    ) 
  {
    this.edit = false;
  }
  

  client!: Cliente;
  clients:any = []
  response: any;
  id?: number;
  name ='';
  lastname = ''
  phone = ''
  email = ''

  ngOnInit(): void {
    this.route.paramMap.subscribe(parametros => {
      if(parametros.has("id")){
        this.edit = true;
        this.CADbS.getClient(parametros.get("id")).subscribe( res => {
          this.response = res;
          this.id = this.response.content.id;
          this.name = this.response.content.name;
          this.lastname = this.response.content.lastname;
          this.email = this.response.content.email;
          this.phone = this.response.content.phone;
        });
      }
    })
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
    this.client = {
      name : this.name,
      lastname : this.lastname,
      phone : this.phone,
      email : this.email
    };
    this.CADbS.postClient(this.client).subscribe(
      res => {
        console.log(res);
        this.router.navigate([
          '/home'
        ]);
      },
      err => console.log(err)
    );
  }

  putClient(id: any){    
    this.client = {
      id: id,
      name : this.name,
      lastname : this.lastname,
      phone : this.phone,
      email : this.email
    };    
    this.CADbS.putClient(this.client).subscribe(
      res => {
        console.log(res);
        this.router.navigate([
          '/home'
        ]);
      },
      err => console.log(err)
    );
  }

}
