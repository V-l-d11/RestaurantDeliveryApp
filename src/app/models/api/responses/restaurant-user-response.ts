import { FoodSearchResponse } from './Food-search-response';
import { Address } from './Restaurant-response';
import { ContactInfo } from './contact-info';
import { OderResponse } from './oder-response';
import { UserProfile } from './user-profile';

export interface RestaurantUserResponse {
  id: number;
  owner: UserProfile;
  name: string;
  description: string;
  cuisineType: string;
  address: Address;
  contactInformathion: ContactInfo;
  openingHours: string;
  oders: OderResponse[];
  images: Array<string>;
  registristrationDate: any;
  open: boolean;
  foods: FoodSearchResponse[];
}
