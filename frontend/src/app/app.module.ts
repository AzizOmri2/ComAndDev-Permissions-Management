import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule , FormsModule }  from '@angular/forms';
import { AppComponent } from './app.component';
import { ListCongesComponent } from './list-conges/list-conges.component';
import { CreateCongeComponent } from './create-conge/create-conge.component';
import { EditCongeComponent } from './edit-conge/edit-conge.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    ListCongesComponent,
    CreateCongeComponent,
    EditCongeComponent,
    RegistrationComponent,
    LoginComponent,
    ListUsersComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
