import { AddressBase } from './address';
import { favorites } from './favorites';

export interface User {
  id: number;
  fullName: string;
  email: string;
  password: string;
  role: UserRole;
  favorites: favorites[];
  adresses: AddressBase[];
}

export enum UserRole {
  Admin = 'ROLE_ADMIN',
  User = 'ROLE_CUSTOMER',
  Owner = 'ROLE_RESTAURANT_OWNER',
}
