import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateComponent } from './components/products/create/create.component';
import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component'

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "products",
    component: ProductCrudComponent
  },
  {
    path: "products/create",
    component: CreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
