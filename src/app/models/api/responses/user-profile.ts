import { Address } from './Restaurant-response';
import { RestaurantDto } from './favorites';

export interface UserProfile {
  id: number;
  fullName: string;
  email: string;
  role: USER_ROLE;
  oders: any;
  favorites: RestaurantDto;
  adresses: Address;
}
export enum USER_ROLE {
  ROLE_CUSTOMER,
  ROLE_RESTAURANT_OWNER,
  ROLE_ADMIN,
}
