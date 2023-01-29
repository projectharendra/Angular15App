import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentdemoComponent } from './parentdemo/parentdemo.component';
import { ChilddemoComponent } from './parentdemo/childdemo/childdemo.component';
import { Routes, RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Childdemo1Component } from './parentdemo/childdemo1/childdemo1.component';

const routes: Routes = [
  {path:'',component:ParentdemoComponent},
  {path:'childdemo',component:ChilddemoComponent},
];
@NgModule({
  declarations: [
    ParentdemoComponent,
    ChilddemoComponent,
    Childdemo1Component
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class ParentChildCommunicationModule { 
  constructor(){
    console.log('ParentChildCommunicationModule loaded - Lazy loading')

  }
}
/*
Lazy loading (Angular handles lazy loading with the help of featured module)
-----------------------------------------------------------------------------
1. Add code in App.routing module 
	FROM
  	// {path:'product',component:ProductDashboardComponent},
	TO
	{path:'prcom', loadChildren: () => import('./parent-child-communication/parent-child-communication.module').then(x => x.ParentChildCommunicationModule)},

2. In featured module (parent-child-communication.module.ts) Add below code

	a. import { Routes, RouterModule} from '@angular/router';
	b. Add child component
	const routes: Routes = [
  {path:'',component:ParentdemoComponent},
  {path:'childdemo',component:ChilddemoComponent},
];
	c. Add in import section 
	 	RouterModule.forChild(routes)
3. In App.component.ts - in menu add fetured-child module path - prcom

 */