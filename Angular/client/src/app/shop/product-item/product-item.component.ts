import { BasketService } from './../../basket/basket.service';
import { IProduct } from './../../shared/models/product';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  // allow you to accept property from a parent component
@Input() product: IProduct;

  constructor(private basketService: BasketService) { }

  ngOnInit(): void {
  }
  addItemToBasket(){
    this.basketService.addItemToBasket(this.product);

  }
}
