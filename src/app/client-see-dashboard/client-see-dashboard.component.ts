import { Component, OnInit } from '@angular/core';
import { ClientSeeDashboardService } from '../client-see-dashboard.service'

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-client-see-dashboard',
  templateUrl: './client-see-dashboard.component.html',
  styleUrls: ['./client-see-dashboard.component.css']
})
export class ClientSeeDashboardComponent implements OnInit {

  content: any = [];
  constructor(public clientSBdS: ClientSeeDashboardService, public router: Router) { }

  ngOnInit(): void {
    this.getClient();
  }

  getClient() {
    this.clientSBdS.getClients().subscribe(
      res => {
        this.content = res;
        console.log(res)
      },
      err => console.log(err)
    );
  }
  deleteClient(id: string) {
    this.clientSBdS.deleteClient(id).subscribe(
      res => {
        this.getClient();
      }
    )
  }

}
