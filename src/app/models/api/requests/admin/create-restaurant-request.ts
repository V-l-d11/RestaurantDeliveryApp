export interface AdminCreateRestaurantRequest {
  id: number;
  name: string;
  description: string;
  cuisineType: string;
  address: Address;
  contactInformathion: ContactInformation;
  opiningHours: string;
  images: string[];
  register: string;
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
