import { Component, OnInit } from '@angular/core';
import {Product} from 'src/app/models/product/product';
import { ProductService } from 'src/app/services/pages/products/products.service';
import {SelectItem} from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import {ActivatedRoute, Router,Params} from "@angular/router";
@Component({
  selector: 'app-product-details-list',
  templateUrl: './product-details-list.component.html',
  styleUrls: ['./product-details-list.component.scss']
})
export class ProductDetailsListComponent implements OnInit {
  products : Product[]=[];
  p: Product=new Product();
  movie: any;
  id!:string;
  constructor(private route: ActivatedRoute,private ProdServ: ProductService , private router: Router) { }

  ngOnInit(): void {       
    this.id = this.route.snapshot.params['id'];
    this.ProdServ.GetProduct2(this.id).subscribe(data => this.p = data);
  }
  getSingleProduct(id:string){
    this.ProdServ.GetProduct2(id).subscribe((res: any) => {
      this.movie = res;
    });
  }
}
