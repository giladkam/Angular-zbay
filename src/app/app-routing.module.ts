import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductComponent } from './product/product.component';
import { AddProductComponent } from './add-product/add-product.component';

const routes: Routes = [
  {path: 'products', component: ProductsListComponent},
  {path: 'products/:category', component: ProductsListComponent},
  {path: 'product/:id', component: ProductComponent},
  {path: 'add-product', component: AddProductComponent},
  {path: '', redirectTo: '/products', pathMatch: 'full' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
