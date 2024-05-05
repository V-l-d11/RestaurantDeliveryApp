import { Address } from '../responses/Restaurant-response';

export interface OderCreateRequest {
  restaurantId: number;
  deliveryAddress: Address;
}
