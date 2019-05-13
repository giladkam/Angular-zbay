import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
    ) {}

  ngOnInit() {
    this.route.params.subscribe(routeParams => {
      this.getProduct(routeParams.id)
    });
  }

  getProduct(productId): void {
    this.productService.getProduct(productId).subscribe(
     data => { console.log(data); this.product = data},
     err => console.error(err)
   );
 }

}
