import { BasketService } from './../../../basket/basket.service';
import { Component, OnInit } from '@angular/core';
import { observable, Observable } from 'rxjs';
import {IBasketTotals} from '../../models/basket';

@Component({
  selector: 'app-order-totals',
  templateUrl: './order-totals.component.html',
  styleUrls: ['./order-totals.component.scss']
})
export class OrderTotalsComponent implements OnInit {
  basketTotals$: Observable<IBasketTotals>;

  constructor(private basketService: BasketService) { }

  ngOnInit(): void {
    this.basketTotals$ = this.basketService.basketTotal$;
  }

}
