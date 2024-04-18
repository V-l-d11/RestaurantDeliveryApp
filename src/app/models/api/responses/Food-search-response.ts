export interface FoodSearchResponse {
  id: number;
  name: string;
  description: string;
  price: number;
  foodCategoryId: number;
  restaurantId: number;
  images: Array<string>;
  available: boolean;
}
