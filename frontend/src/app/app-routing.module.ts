import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListCongesComponent } from './list-conges/list-conges.component';
import { CreateCongeComponent } from './create-conge/create-conge.component';
import { EditCongeComponent } from './edit-conge/edit-conge.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout.component';
import { MyAccountComponent } from './my-account/my-account.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  // Authentication pages
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },

  // Main pages
  {
    path: '',
    component: LayoutComponent, // navbar + sidebar + footer
    children: [
      { path: 'myaccount', component: MyAccountComponent },

      { path: 'home', component: DashboardComponent },
      { path: 'users/list', component: ListUsersComponent },
      { path: 'permissions/list', component: ListCongesComponent },
      { path: 'permissions/create', component: CreateCongeComponent },
      { path: 'permissions/edit/:congeID', component: EditCongeComponent },
    ]
  },

  // Wildcard route
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
