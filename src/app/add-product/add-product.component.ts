import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  addProductrForm: FormGroup;
  submitted: boolean = false;

  constructor(
    private productService: ProductService,
    private formBuilder: FormBuilder,
    private router: Router,
    ) { }

  ngOnInit() {
    this.addProductrForm = this.formBuilder.group({
      'name': ['', Validators.required],
      'title': ['', Validators.required],
      'description': ['', Validators.required],
      'price': ['', [Validators.min(1), Validators.max(100),Validators.pattern(/^-?(0|[1-9]\d*)?$/), Validators.required]],
      'location': ['', Validators.required],
      'category': ['', Validators.required],
      'image url': ['', Validators.required]
    })
  }

  get f() { return this.addProductrForm.controls; }

  onSubmit(): void {
    this.submitted = true;
    if (this.addProductrForm.invalid) {
        return;
    }
    this.addProductrForm.value['imageUrl'] = this.addProductrForm.value['image url']
    delete this.addProductrForm.value['image url'];
    this.addProductrForm.value['publishDate'] =  new Date();

    this.productService.addProduct(this.addProductrForm.value).subscribe(
      data => {
        this.router.navigate(['product', data.id]);
      },
      err => console.error(err)
    );
  }

}
