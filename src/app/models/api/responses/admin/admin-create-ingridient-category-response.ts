import { IngridientCategoryBase } from 'src/app/models/baseModals/ingridientCategoryBase';

export interface createIngridnetCategoryResponse {
  id: number;
  name: string;
  ingredients: IngridientCategoryBase[];
}
