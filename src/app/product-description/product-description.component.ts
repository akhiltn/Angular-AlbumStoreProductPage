import { Component, OnInit } from '@angular/core';
import { ProductService } from 'app/product.service';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {
  albumInfo: any;
  private _productService: ProductService;

  constructor(_productService: ProductService) {
   this._productService = _productService;

   }

  ngOnInit() {
    this._productService.getAlbum(1).subscribe(response => this.albumInfo = response);
  }

}
