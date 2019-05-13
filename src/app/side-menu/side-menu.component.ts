import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ObservableService } from '../observable.service';
import { Router } from '@angular/router';

@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  categories: string [];
  locations: string [];
  maxPrice: number = 100;
  currentLocation: string = 'All';

  constructor(
    private productService: ProductService,
    private observableService: ObservableService,
    private router: Router
  ) { }

  ngOnInit() {
    this.updateDetails();
  }

  getProductsCategories(): void {
    this.productService.getProducts(null).subscribe(
      data => {
        this.categories = data.map(product => product.category)
        .filter((value, index, self) => self.indexOf(value) == index);
      },
      err => console.error(err),
    );
  }

  getProductsLocations(): void {
    this.productService.getProducts(null).subscribe(
      data => {
        this.locations = data.map(product => product.location)
        .filter((value, index, self) => self.indexOf(value) == index)
      },
      err => console.error(err),
    );
  }

  onClickLocation (location: string): void {
     this.currentLocation =  location || 'All';
     this.observableService.productsLocation.next(location)
  }
  
  onChangePrice (event: any): void {
    this.maxPrice = event.value;
    this.observableService.productsMaxPrice.next(event.value);
  }

  updateDetails (): void {
    this.getProductsCategories();
    this.getProductsLocations();
  }

  formatLabel(value: number | null): string {
    if (!value) {
      return ;
    }

    return value + '$';
  }
};
