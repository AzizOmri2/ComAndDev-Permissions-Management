import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';
import { ListCongesComponent } from './list-conges/list-conges.component';
import { CreateCongeComponent } from './create-conge/create-conge.component';
import { EditCongeComponent } from './edit-conge/edit-conge.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {  path: '', redirectTo: '/login/user', pathMatch: 'full'  },
  {  path: 'home', component: DashboardComponent  },
  {  path: 'list/users', component: ListUsersComponent   },
  {  path: 'list/conge', component: ListCongesComponent   },
  {  path: 'create/conge', component: CreateCongeComponent  },
  {  path: 'edit/conge/:congeID', component: EditCongeComponent  },
  {  path: 'register/user', component: RegistrationComponent  },
  {  path: 'login/user', component: LoginComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
