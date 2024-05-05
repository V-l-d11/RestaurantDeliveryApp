import { FoodSearchResponse } from './Food-search-response';
import { Address } from './Restaurant-response';
import { UserProfile } from './user-profile';

export interface OderCreateResponse {
  id: number;
  customer: UserProfile;
  totalAmount: number;
  oderStatus: string;
  createAt: string;
  deliveryAddress: Address;
  items: Item[];
  totalItem: number;
  totalPrice: number;
}

interface Item {
  id: number;
  food: FoodSearchResponse;
  quantity: number;
  totalPrice: number;
  ingredients: Array<string> | null;
}
