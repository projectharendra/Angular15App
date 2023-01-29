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
// import { ProductDashboardComponent } from './product-dashboard/product-dashboard/product-dashboard.component';

const routes: Routes = [
  {path:'',redirectTo:"users",pathMatch:"full"},

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
  {path:'hooks',component:HooksComponent},
   {path:'aggrid',component:AgGridComponent},
   {path:'viewchild',component:ViewchildComponent},
  {path:'about',component:AboutComponent,
  children:[   
    {path: 'location', outlet:'map', component:LocationComponent},
    {path: 'feedback', outlet:'feeds', component:FeedbackComponent},
  ]},
  {path:'contact',component:ContactComponent},
  // Implemented Unsaved changes confirmation of Add User page
  {path:'adduser',component:AdduserComponent, canDeactivate: [UnsavedChangesGuard]},

   {path:'**',redirectTo:"users"}, //Invalid Route  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
