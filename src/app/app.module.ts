import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http' 
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientAddDashboardComponent } from './client-add-dashboard/client-add-dashboard.component';
import { ClientSeeDashboardComponent } from './client-see-dashboard/client-see-dashboard.component';
import { NoteAddDashboardComponent } from './note-add-dashboard/note-add-dashboard.component';
import { FormsAddDashboardComponent } from './forms-add-dashboard/forms-add-dashboard.component';
import { FormsSeeDashboardComponent } from './forms-see-dashboard/forms-see-dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ClientAddDashboardComponent,
    ClientSeeDashboardComponent,
    NoteAddDashboardComponent,
    FormsAddDashboardComponent,
    FormsSeeDashboardComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
