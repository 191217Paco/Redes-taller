import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { DashboardService } from '../dashboard.service'
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../models/Client';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  content : any = [];
  constructor(public dashBS : DashboardService, public router : Router) { }

  ngOnInit(): void {
    this.getClient();
  }

  getClient() {
    this.dashBS.getClients().subscribe(
      res => {
        this.content = res;
        console.log(res)
      },
      err => console.log(err)
    );
  }
  deleteClient(id : string ) {
    this.dashBS.deleteClient(id).subscribe(
      res => {
        this.getClient();
      }
    )
  }


}
