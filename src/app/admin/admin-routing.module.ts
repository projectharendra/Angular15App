import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleGuard } from '../guards/role.guard';
import { UsermasterComponent } from './usermaster/usermaster.component';

const routes: Routes = [  
  {path:"usermaster",component:UsermasterComponent,canActivate:[RoleGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
