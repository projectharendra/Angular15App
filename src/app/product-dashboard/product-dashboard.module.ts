import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDashboardComponent } from './product-dashboard/product-dashboard.component';
import { Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {path:'',component:ProductDashboardComponent}
];

@NgModule({
  declarations: [
    ProductDashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]

})
export class ProductDashboardModule {
  constructor(){
    console.log('ProductDashboard Module Loaded!! Lazy loading');
  }
 }

 /*
Lazy loading (Angular handles lazy loading with the help of featured module)
-----------------------------------------------------------------------------
1. Add code in App.routing module 
	FROM
  	// {path:'product',component:ProductDashboardComponent},
	TO
	{path:'product', loadChildren: () => import('./product-dashboard/product-dashboard.module').then(x => x.ProductDashboardModule)},

2. In featured module (product-dashboard.module.ts) Add below code

	a. import { Routes, RouterModule} from '@angular/router';
	b. Add child component
		const routes: Routes = 
			[
  			{path:'',component:ProductDashboardComponent}
			];
	c. Add in import section 
	 	RouterModule.forChild(routes)
3. In App.component.ts - in menu add fetured-child component - product

 */