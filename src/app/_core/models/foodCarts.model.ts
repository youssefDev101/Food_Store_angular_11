import { FoodCheckout } from './foodCheckout.model';

export class FoodCarts {
  id?: number;
  userId?: number;
  userEmail?: string;
  status?: string;
  dateCreated?: Date;
  foods?: FoodCheckout[];
}
