import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {EmployeeComponent} from './employee/employee.component';
import {DepartmentComponent} from './department/department.component';
import { UsersComponent } from './users/users.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './about/contact/contact.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { ReactiveFormsComponent } from './registration/reactive-forms.component';
import { UserComponent } from './users/user/user.component';
import { AddressComponent } from './users/user/address/address.component';
import { CompanyComponent } from './users/user/company/company.component';
import { LocationComponent } from './location/location.component';
import { FeedbackComponent } from './about/feedback/feedback.component';
import { AuthGuard } from './guards/auth.guard';
import { AdminGuard } from './guards/admin.guard';
import { AdduserComponent } from './users/adduser/adduser.component';
import { UnsavedChangesGuard } from './guards/unsaved-changes.guard';
import { ResolveGuard } from './guards/resolve.guard';
import { HooksComponent } from './hooks/hooks/hooks.component';
import { AgGridComponent } from './ag-grid/ag-grid/ag-grid.component';
import { ViewchildComponent } from './viewchild/viewchild.component';
import { NtEmpComponent } from './nt-emp/nt-emp/nt-emp.component';
// import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NtEmplistingComponent } from './nt-emp/nt-emplisting/nt-emplisting.component';
import { NtEmpaddComponent } from './nt-emp/nt-empadd/nt-empadd.component';
import { StatusComponent } from './status/status.component';

const routes: Routes = [
  // {path:'',redirectTo:"home",pathMatch:"full"}, 
  {path:'home',component:HomeComponent,canActivate:[AuthGuard]}, 
  // {path:'login',component:LoginComponent}, 
  {path:'ntech',component:NtEmpComponent,children:[
    {path:'',component:NtEmplistingComponent}, 
    {path:'create',component:NtEmpaddComponent},
    {path:'edit/:id',component:NtEmpaddComponent},
  ],canActivate:[AuthGuard]}, 

  {path:'users',component:UsersComponent, 
   resolve:{
        data: ResolveGuard,
         // canActivate: [AuthGuard],
          }
  },

  {path:'user/:ID',component:UserComponent,
  canActivate: [AuthGuard],
  canActivateChild:[AdminGuard],
  children:[
    // {path:'',redirectTo:"address",pathMatch:"full"},
    {path: 'address', component:AddressComponent},
    {path: 'company', component:CompanyComponent},
  ]},

  {path:'employee-list',component:EmployeeListComponent},
  {path:'employee',component:EmployeeComponent},
  {path:'registration',component:ReactiveFormsComponent},
  {path:'department',component:DepartmentComponent},
  // {path:'product',component:ProductDashboardComponent},
  // {path:'product', loadChildren:'./product-dashboard/product-dashboard.module#ProductDashboardModule'},
  {path:'product', loadChildren: () => import('./product-dashboard/product-dashboard.module').then(x => x.ProductDashboardModule)},
  {path:'prcom', loadChildren: () => import('./parent-child-communication/parent-child-communication.module').then(x => x.ParentChildCommunicationModule)},
  {path:"access",loadChildren:()=>import('./access/access.module').then(opt=>opt.AccessModule)},
  {path:"admin",loadChildren:()=>import('./admin/admin.module').then(opt=>opt.AdminModule)},
  {path:"login",loadComponent:()=>import('./login/login.component').then(opt=>opt.LoginComponent)},
  {path:'hooks',component:HooksComponent},
  {path:'aggrid',component:AgGridComponent},
  {path:'viewchild',component:ViewchildComponent},
  {path:'ntech',component:NtEmpComponent},
  {path:'about',component:AboutComponent,
  children:[   
    {path: 'location', outlet:'map', component:LocationComponent},
    {path: 'feedback', outlet:'feeds', component:FeedbackComponent},
  ]},
  {path:'contact',component:ContactComponent},
  // Implemented Unsaved changes confirmation of Add User page
  {path:'adduser',component:AdduserComponent, canDeactivate: [UnsavedChangesGuard]},

  {path:"**",component:StatusComponent}, //Invalid Route  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
