import { OwnerFoodBase } from './foodOwnerBase';

export interface OwnerOderItemBase {
  id: number;
  food: OwnerFoodBase;
  quantity: number;
  totalPrice: number;
  ingredients: string[];
}
