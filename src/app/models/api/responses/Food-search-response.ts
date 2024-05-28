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

interface Restaurant {
  id: number;
  owner: {
    id: number;
    fullName: string;
    email: string;
    role: string;
    favorites: any[];
    addresses: Address[];
  };
  name: string;
  description: string;
  cuisineType: string;
  address: Address;
  contactInformation: string | null;
  openingHours: string;
  images: string[];
  registrationDate: string;
  open: boolean;
}

interface Address {
  id: number;
  street: string | null; // возможно null
  city: string | null;
  state: string | null;
  zipCode: string | null;
  country: string | null;
}

export interface Food {
  id: number;
  name: string;
  description: string;
  price: number;
  foodCategory: {
    id: number;
    name: string;
  };
  images: string[];
  available: boolean;
  restaurant: Restaurant;
  ingredients: any[]; // здесь может быть определен другой тип
  creationDate: string | null; // возможно null
  seasonal: boolean;
  vegetarian: boolean;
}
