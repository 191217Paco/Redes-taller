import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { RegisterService } from '../services/register.service'
import { Router } from '@angular/router'
import { User } from '../models/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name : any = '';
  lastname : any ='';
  username : any = '';
  password : any = '';
  constructor(protected RS : RegisterService, private router:Router) { }

  ngOnInit(): void {
  }

  createUser(){
    const user: User ={
      name : this.name,
      lastname : this.lastname,
      username : this.username,
      password : this.password
    }
    this.RS.createUser(user).subscribe(
      res => {
        this.router.navigate([
          "/"
        ])
      }
    )
  }

}
