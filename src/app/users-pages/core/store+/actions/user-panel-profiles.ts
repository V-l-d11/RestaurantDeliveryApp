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
  props<{ obj: RestaurantDto }>()
);

export const addToFavoritesRestaurantFailed = createAction(
  '[User Panel] add to favorites  restaurant failed',
  props<{ serverError: number }>()
);

export const createOder = createAction(
  '[User Panel] create oder',
  props<{ oder: OderRequest }>()
);

export const createOderSucess = createAction(
  '[User Panel] create oder sucess',
  props<{ obj: OderResponse }>()
);

export const createOderFailed = createAction(
  '[User Panel] create oder failed',
  props<{ serverError: number }>()
);

export const getOderHistory = createAction('[User Panel] get oder history');

export const getOderHistorySucess = createAction(
  '[User Panel] get oder hostory sucess',
  props<{ obj: OderResponse }>()
);

export const getOderHistoryFailed = createAction(
  '[User Panel] get oder history failed',
  props<{ serverError: string }>()
);
