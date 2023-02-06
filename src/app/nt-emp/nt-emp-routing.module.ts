import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NtEmpComponent } from './nt-emp/nt-emp.component';
import { NtEmpaddComponent } from './nt-empadd/nt-empadd.component';
import { NtEmplistingComponent } from './nt-emplisting/nt-emplisting.component';


const routes: Routes = [
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NtEmpRoutingModule { }
