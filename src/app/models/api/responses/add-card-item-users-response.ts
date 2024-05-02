import { FoodSearchResponse } from './Food-search-response';
import { IngridientsItem } from './ingridients-category-from-restaurant';
import { UserProfile } from './user-profile';

export interface AddCardItemResponse {
  id: number;
  card: Card;
  food: FoodSearchResponse;
  quantity: number;
  ingredients?: IngridientsItem[];
  totalPrice: number;
}

export interface Card {
  id: number;
  customer: UserProfile;
  total: number;
  item: CardItem[];
}

export interface CardItem {
  id: number;
  food: FoodSearchResponse;
  quantity: number;
  ingredients: IngridientsItem[];
  totalPrice: number;
}
