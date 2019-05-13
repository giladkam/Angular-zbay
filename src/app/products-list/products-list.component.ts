import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { ObservableService } from '../observable.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products: Product[];
  category: string;
  location: string;
  maxPrice: number = 100;
  locationSubscription: Subscription;
  maxPriceSubscription: Subscription;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private observableService: ObservableService
    ) {}

  ngOnInit() {
    this.route.params.subscribe(routeParams => {
      this.category = routeParams.category;
      this.getProducts();
    });
     this.updateLocation();
     this.updateMaxPrice();
  }

  ngOnDestroy() {
   this.locationSubscription.unsubscribe();
   this.maxPriceSubscription.unsubscribe();
  }

  getProducts(): void {
     let options = { category: this.category, location: this.location };
     this.productService.getProducts(options).subscribe(
      data => { this.products = data.sort((a, b) =>(a.price - b.price));},
      err => console.error(err)
    );
  }

  updateLocation(): void {
    this.locationSubscription = this.observableService.productsLocation.subscribe(
      (location: string) => {
        this.location = location;
        this.getProducts();
      }
    )
  }

  updateMaxPrice(): void {
    this.maxPriceSubscription = this.observableService.productsMaxPrice.subscribe(
      (maxPrice: number) => {
        this.maxPrice = maxPrice;
      }
    )
  }
}
