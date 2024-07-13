export interface CreateCategoryWthIngridients {
  name: string;
  restaurantId: number;
  ingredients: IngridientsInter[];
}

export interface IngridientsInter {
  name: string;
  price: number;
  restaurantId: number;
}
