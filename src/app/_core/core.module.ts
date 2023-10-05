import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from './services/api.service';
import { CommunService } from './services/commun.service';
import { MailService } from './services/mail.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { OrderService } from './services/order.service';
import { DeliveryService } from './services/delivery.service';

const DECLARATIONS: any[] = [];

@NgModule({
  imports: [CommonModule, HttpClientModule, RouterModule],
  declarations: [DECLARATIONS],
  exports: [DECLARATIONS],
  providers: [ApiService, CommunService, MailService, OrderService, DeliveryService],
})
export class CoreModule {}
