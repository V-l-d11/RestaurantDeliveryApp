import { IngridItemsBase } from './ingridients-item-base';

export interface IngridCategoryBase {
  id: number;
  name: string;
  ingredients: IngridItemsBase[];
}
