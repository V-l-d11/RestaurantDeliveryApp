import { createAction, props } from '@ngrx/store';
import { OderRequest } from 'src/app/models/api/requests/oder-request';
import { RestaurantDto } from 'src/app/models/api/responses/favorites';
import { OderResponse } from 'src/app/models/api/responses/oder-response';
import { UserProfile } from 'src/app/models/api/responses/user-profile';

export const userProfile = createAction('[User Panel] user profile');

export const userProfileSucces = createAction(
  '[User Panel] user profile sucess',
  props<{ obj: UserProfile }>()
);

export const userProfileFailed = createAction(
  '[User Panel[ user profile failed',
  props<{ serverError: string }>()
);

export const addToFavoritesRestaurant = createAction(
  '[User Panel] add to  favorites restaurant',
  props<{ id: number }>()
);

export const addToFavoritesRestaurantSucess = createAction(
  '[User Panel] add to favorites restaurant sucess',
  props<{ obj: RestaurantDto[] }>()
);

export const addToFavoritesRestaurantFailed = createAction(
  '[User Panel] add to favorites  restaurant failed',
  props<{ serverError: string }>()
);
