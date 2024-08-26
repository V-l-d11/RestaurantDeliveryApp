export interface AdminCreateFoodRequest {
  name: string;
  description: string;
  price: number;
  category: AdminCategory;
  images: string[];
  restaurantId: number;
  vegetarian: boolean;
  seasional: boolean;
  ingredientIds: number[];
}

export interface AdminCategory {
  id: number;
  name: string;
}

export interface AdminIngridientsItem {
  id: number;
  name: string;
  inStoke: boolean;
  price: number;
}
