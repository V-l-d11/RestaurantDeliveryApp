import { IngridientsItemBase } from 'src/app/models/baseModals/ingridientsItemBase';

export interface GetRestaurantIngridCategoryResponse {
  id: number;
  name: string;
  ingredients: IngridientsItemBase[];
}
