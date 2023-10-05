import { Component, Input, OnInit } from '@angular/core';
import { Order } from 'src/app/_core/models/order.model';
import { OrderStatusEnum } from 'src/app/_shared/helpers/enums/orderStatus.enum';
import { Globals } from 'src/app/_shared/helpers/models/globals';
import { Utils } from 'src/app/_shared/helpers/utils/utils';

@Component({
  selector: 'app-orders-table',
  templateUrl: './orders-table.component.html',
  styleUrls: ['./orders-table.component.scss'],
})
export class OrdersTableComponent implements OnInit {
  @Input() orders: Order[] = [];
  constructor(public globals: Globals, public utils: Utils) {}

  ngOnInit() {}

  onColorStatus(status: string) {
    switch (status) {
      case OrderStatusEnum.STATUS_INPROGRESS:
        return 'status-progress';
      case OrderStatusEnum.STATUS_VALID:
        return 'status-valid';
      case OrderStatusEnum.STATUS_INVALID:
        return 'status-invalid';
      default:
        return 'status-progress';
    }
  }
}
