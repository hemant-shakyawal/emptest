import { NgModule } from '@angular/core';
import {Routes,RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './user/login/login.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
const routes: Routes = [
  // {path: '', redirectTo: 'employees/employees-list', pathMatch: 'full'},
//   {path: 'user', component: UserComponent,
// children: [
//   {path: 'registration', component: RegistrationComponent},
//   {path: 'login', component: LoginComponent}
// ] },
{ path: 'employee-list', component:EmployeeListComponent}

];
@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]

})
export class AppRoutingModule {


}
