import { Address } from '../responses/Restaurant-response';

export interface OderRequest {
  restaurantId: number;
  deliveryAddress: Address;
}
