export interface ingridientsCategory {
  id: number;
  name: string;
  ingredients: IngridientsItem[];
}

export interface IngridientsItem {
  id: number;
  name: string;
  inStoke: boolean;
  price: number;
}
