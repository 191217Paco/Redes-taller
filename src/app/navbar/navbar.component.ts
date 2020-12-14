import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(protected _activatedRoute: ActivatedRoute) {   }

  login?: boolean;

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((params: ParamMap) =>{
      if(window.location.pathname == "/"){
        this.login = true;
      }else{
        this.login = false;
      }
    });
  }

  logout(){
    localStorage.clear();
  }

}
