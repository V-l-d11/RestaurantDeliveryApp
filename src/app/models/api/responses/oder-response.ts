import { FoodSearchResponse } from './Food-search-response';
import { Address } from './Restaurant-response';
import { RestaurantUserResponse } from './restaurant-user-response';
import { UserProfile } from './user-profile';

export interface OderResponse {
  id: number;
  customer: UserProfile;
  restaurant: RestaurantUserResponse;
  totalAmount: number;
  oderStatus: string;
  createAt: any;
  deliveryAddress: Address;
  items: OderItem[];
  totalItem: number;
  totalPrice: number;
}

export interface OderItem {
  id: number;
  food: FoodSearchResponse;
  quantity: number;
  totalPrice: number;
  ingredients: any;
}
