import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsListComponent } from './product-details-list/product-details-list.component';
import { ProductCRUDComponent } from './product-crud/product-crud.component';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [
    MenuComponent,
    ProductListComponent,
    ProductDetailsListComponent,
    ProductCRUDComponent,
    NavbarComponent
  ],
  exports:[
    MenuComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ]
})
export class SharedModule { }
