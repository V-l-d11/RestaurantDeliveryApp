import { AddressBase } from './address';
import { OwnerOderItemBase } from './ownerOderItem';
import { User } from './user';

export interface OwnerOderBase {
  id: number;
  customer: User;
  totalAmount: number;
  oderStatus: string;
  createAt: string;
  deliveryAddress: AddressBase;
  items: OwnerOderItemBase[];
  totalItem: number;
  totalPrice: number;
}
