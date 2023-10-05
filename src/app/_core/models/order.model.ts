import { FoodCheckout } from './foodCheckout.model';

export class Order {
  id?: number;
  status?: string;
  dateCreated?: Date;
  userId?: number;
  userEmail?: string;
  foods?: FoodCheckout[];
}
