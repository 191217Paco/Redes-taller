import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { from } from 'rxjs';
import { DashboardComponent } from './dashboard/dashboard.component';
import {ClientAddDashboardComponent} from './client-add-dashboard/client-add-dashboard.component';
import { ClientSeeDashboardComponent } from './client-see-dashboard/client-see-dashboard.component'
import { FormsAddDashboardComponent } from './forms-add-dashboard/forms-add-dashboard.component';
const routes: Routes = [
  {
    path:'',
    component: DashboardComponent,
    pathMatch: 'full'
  },
  {
    path:'addC',
    component: ClientAddDashboardComponent,
    pathMatch: 'full'
  },
  {
    path:"addEdit/:id",
    component: ClientAddDashboardComponent,
    
  },
  {
    path:'seeC',
    component: ClientSeeDashboardComponent,
    pathMatch: 'full'
  },
  {
    path:'addFormS',
    component: FormsAddDashboardComponent,
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
