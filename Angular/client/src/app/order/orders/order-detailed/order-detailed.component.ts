import { OrdersService } from './../../orders.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IOrder } from 'src/app/shared/models/order';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-order-detailed',
  templateUrl: './order-detailed.component.html',
  styleUrls: ['./order-detailed.component.scss']
})
export class OrderDetailedComponent implements OnInit {
  order: IOrder;

  constructor(private route: ActivatedRoute, private breadcrumbService: BreadcrumbService, private ordersService: OrdersService) {
    this.breadcrumbService.set('@OrderDetailed', '');
  }

  ngOnInit() {
    this.ordersService.getOrderDetailed(+this.route.snapshot.paramMap.get('id'))
      .subscribe((order: IOrder) => {
      this.order = order;
      this.breadcrumbService.set('@OrderDetailed', `Order# ${order.id} - ${order.status}`);
    }, error => {
      console.log(error);
    });
  }

}