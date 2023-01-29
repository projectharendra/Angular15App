import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentComponent } from './department/department.component';
import { ShowDepComponent } from './department/show-dep/show-dep.component';
import { AddEditDepComponent } from './department/add-edit-dep/add-edit-dep.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { EmployeeComponent } from './employee/employee.component';
import { ShowEmpComponent } from './employee/show-emp/show-emp.component';
import { AddEditEmpComponent } from './employee/add-edit-emp/add-edit-emp.component';
import { UsersComponent } from './users/users.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './about/contact/contact.component';

import { SharedService } from './services/shared.service';
import { UsersService } from './services/users.service';
import { MaterialModule } from '../material-module';
import { MasterService } from './services/master.service';

import { EmployeeListComponent } from './employee-list/employee-list.component';
import { ReactiveFormsComponent } from './registration/reactive-forms.component';
import { UserComponent } from './users/user/user.component';
import { AddressComponent } from './users/user/address/address.component';
import { CompanyComponent } from './users/user/company/company.component';
import { LocationComponent } from './location/location.component';
import { FeedbackComponent } from './about/feedback/feedback.component';
import { AdduserComponent } from './users/adduser/adduser.component';

import { AuthGuard } from './guards/auth.guard';
import { AdminGuard } from './guards/admin.guard';
import { UnsavedChangesGuard } from './guards/unsaved-changes.guard';
import { ResolveGuard } from './guards/resolve.guard';

import { HooksModule } from './hooks/hooks.module';
import { AngularCrudModule } from './angular-crud/angular-crud.module';
import { AgGridComponent } from './ag-grid/ag-grid/ag-grid.component';
import { AgGridModule } from 'ag-grid-angular';
import { CounterComponent } from './viewchild/counter/counter.component';
import { ViewchildComponent } from './viewchild/viewchild.component';


@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent,
    ShowDepComponent,
    AddEditDepComponent,
    EmployeeComponent,
    ShowEmpComponent,
    AddEditEmpComponent,
    UsersComponent,
    AboutComponent,
    ContactComponent,
    EmployeeListComponent,
    ReactiveFormsComponent,
    UserComponent,
    AddressComponent,
    CompanyComponent,
    LocationComponent,   
    FeedbackComponent, AdduserComponent,AgGridComponent,CounterComponent,ViewchildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,HooksModule,AngularCrudModule,AgGridModule
    
    
      
  ],
  providers: [SharedService,UsersService,MasterService,
    AuthGuard,AdminGuard,UnsavedChangesGuard,ResolveGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
