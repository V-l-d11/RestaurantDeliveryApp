import { Category } from './category';
import { IngridientsItemBase } from './ingridientsItemBase';
import { OwnerRestaurantBase } from './restaurantOwnerbase';

export interface OwnerFoodBase {
  id: number;
  name: string;
  description: string;
  price: number;
  foodCategory: Category;
  images: string[];
  available: boolean;
  restaurant: OwnerRestaurantBase;
  isVegetarian: boolean;
  isSeasonal: boolean;
  ingredients: IngridientsItemBase[];
  creationDate: string;
}
