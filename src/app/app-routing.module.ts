import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './shared/menu/menu.component';
import { ProductListComponent } from './shared/product-list/product-list.component';
import { ProductDetailsListComponent } from './shared/product-details-list/product-details-list.component';
import { ProductCRUDComponent } from './shared/product-crud/product-crud.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

const routes: Routes = [
  {path:'',component:MenuComponent  },
  {path:'accueil',component:MenuComponent  },
  {path:'productList',component:ProductListComponent},
  {path:'productList/productDetails/:id',component:ProductDetailsListComponent},
  {path:'tabProduct',component:ProductCRUDComponent},
  {path:'navbar',component:NavbarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
