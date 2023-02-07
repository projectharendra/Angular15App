import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentComponent } from './department/department.component';
import { ShowDepComponent } from './department/show-dep/show-dep.component';
import { AddEditDepComponent } from './department/add-edit-dep/add-edit-dep.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { GlobalErrorHandler } from './handlers/global-error-handler';
import { ServerErrorInterceptor } from './interceptor/server-error.interceptor';
import { HeaderInterceptor } from './interceptor/header.interceptor';
import { LoggingInterceptor } from './interceptor/logging.interceptor';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NtEmpModule } from './nt-emp/nt-emp.module';
import { TokenInterceptor } from './interceptor/token.interceptor';
import { StatusComponent } from './status/status.component';
import { AccessModule } from './access/access.module';
import { AdminModule } from './admin/admin.module';
import { ModalpopupComponent } from './modalpopup/modalpopup.component';
import { TemplateFormComponent } from './registration/template-form/template-form.component';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';




@NgModule({
  declarations: [
    AppComponent,DepartmentComponent,ShowDepComponent,AddEditDepComponent,EmployeeComponent,
    ShowEmpComponent,AddEditEmpComponent,UsersComponent,AboutComponent,ContactComponent,
    EmployeeListComponent,
    ReactiveFormsComponent,UserComponent,AddressComponent,
    CompanyComponent,LocationComponent,FeedbackComponent, AdduserComponent,
    AgGridComponent,CounterComponent,ViewchildComponent, HomeComponent, StatusComponent, ModalpopupComponent, TemplateFormComponent
  
  ],
  imports: [
    BrowserModule,AppRoutingModule,HttpClientModule,
    FormsModule,ReactiveFormsModule,
    BrowserAnimationsModule,MatSnackBarModule,
    MaterialModule,HooksModule,AngularCrudModule,AgGridModule,NtEmpModule,AccessModule,
    AdminModule,
    //NgbModule.forRoot()
  ],
  providers: [ { provide: ErrorHandler, useClass: GlobalErrorHandler },
               { provide: HTTP_INTERCEPTORS, useClass: ServerErrorInterceptor, multi: true },
               { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true },
               { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true },
               { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
              SharedService,UsersService,MasterService,
              AuthGuard,AdminGuard,UnsavedChangesGuard,ResolveGuard             
            ],
  bootstrap: [AppComponent]
})
export class AppModule { }
