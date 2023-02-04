import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsermasterComponent } from './usermaster/usermaster.component';

const routes: Routes = [  
  {path:"usermaster",component:UsermasterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
