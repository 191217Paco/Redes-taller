import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../login.service'
import {  FormsAddDashboardService } from '../forms-add-dashboard.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user : any = '';
  password : any = '';

  constructor(
    protected LS : LoginService,
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  validar(){
    const login ={
      username : this.user,
      password : this.password
    }
    this.LS.postLogin(login).subscribe(
      res =>{
        localStorage.setItem("token",res['token']);
        this.router.navigate([
          '/home'
        ]);
      }
    )
  }

}
