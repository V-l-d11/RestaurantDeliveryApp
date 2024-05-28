export interface AdminRestaurantResponse {
  id: number;
  admin: any;
  name: string;
  description: string;
  cuisineType: string;
  address: Address;
  contactInformathion: ContactInformation;
  openingHours: string;
  oders: Oder[];
  images: string[];
  registristrationDate: string;
  open: boolean;
}

interface Address {
  id: number;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

interface ContactInformation {
  email: string;
  mobile: string;
  twitter: string;
  instagram: string;
}

interface Oder {
  id: number;
  customer: any;
  totalAmount: number;
  oderStatus: string;
  createAt: string;
  deliveryAddress: Address;
  items: any;
  totalItem: number;
  totalPrice: number;
}
