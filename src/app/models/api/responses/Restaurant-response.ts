import { FoodSearchResponse } from './Food-search-response';

export interface RestaurantCustomer {
  id: number;
  name: string;
  description: string;
  cuisineType: string;
  address: Address;
  contactInformathion: ContactInformathion;
  openingHours: string;
  open: boolean;
  foods: FoodSearchResponse[] | null;
}

interface Address {
  id: number;
  street: string;
  city: string;
  state: string;
  zipCode: number;
  country: string;
}

interface ContactInformathion {
  email: string;
  mobile: string;
  twitter: string;
  instagram: string;
}
