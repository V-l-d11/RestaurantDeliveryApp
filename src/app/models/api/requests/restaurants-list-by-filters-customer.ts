export interface RestaurantListByFiltersRequest {
  city: string;
  cuisineType?: string;
  foodName?: string;
  restaurantName?: string;
  isOpen?: boolean;
}
