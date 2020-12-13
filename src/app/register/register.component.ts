import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { RegisterService } from '../register.service'
import { Router } from '@angular/router'

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
    const user ={
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
