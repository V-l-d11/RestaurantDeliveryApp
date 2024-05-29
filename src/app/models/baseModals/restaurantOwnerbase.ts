import { AddressBase } from './address';
import { ContactInformation } from './contactInformation';
import { OwnerOderBase } from './owerOderBase';
import { User } from './user';

export interface OwnerRestaurantBase {
  id: number;
  owner: User;
  name: string;
  description: string;
  cuisineType: string;
  address: AddressBase;
  contactInformathion: ContactInformation;
  openingHours: string;
  oders: OwnerOderBase[];
  images: string[];
  registristrationDate: string;
  open: boolean;
}
