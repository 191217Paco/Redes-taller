import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() {   }

  login?: boolean;

  ngOnInit(): void {
    if(window.location.pathname == "/"){
      this.login = true;
    }else{
      this.login = false;
    }
  }

}
