import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product/product';
import { ProductService } from 'src/app/services/pages/products/products.service';
import { SelectItem } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import { ActivatedRoute, Router } from "@angular/router";
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  p:Product=new Product()
sortOptions!: SelectItem[];

sortOrder!: number;

sortField!: string;

constructor(private productService: ProductService, private primengConfig: PrimeNGConfig, private router: Router) { }

ngOnInit() {
  this.productService.getProducts().then(products => {
    this.products = products;
  });

  this.sortOptions = [
    { label: 'Price High to Low', value: '!price' },
    { label: 'Price Low to High', value: 'price' }
  ];

  this.primengConfig.ripple = true;
}
}
