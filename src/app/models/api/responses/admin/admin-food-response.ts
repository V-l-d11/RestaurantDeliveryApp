import { AdminCategory } from '../../requests/admin/create-food-request';

export interface AdminFoodResponse {
  id: number;
  name: string;
  description: string;
  price: number;
  foodCategory: AdminCategory;
  images: string[];
  available: boolean;
}
