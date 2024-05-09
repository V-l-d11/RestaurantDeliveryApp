import { UserProfile } from 'src/app/models/api/responses/user-profile';
import * as UserProfileActions from './../actions/user-panel-profiles';
import { RestaurantDto } from 'src/app/models/api/responses/favorites';
import { createReducer, on } from '@ngrx/store';
export interface UserProfilesState {
  loading: boolean;
  loaded: boolean;
  serverError: string;
  userProfile: UserProfile | null;
  favorites: RestaurantDto[] | null;
}

export const USER_PROFILE_FEATURE_NAME = 'profiles';

export const initalState: UserProfilesState = {
  loading: false,
  loaded: true,
  serverError: '',
  userProfile: null,
  favorites: null,
};

export const UserProfilesReducer = createReducer(
  initalState,
  on(UserProfileActions.userProfile, (state) => ({
    ...state,
    loading: true,
    loaded: false,
  })),
  on(UserProfileActions.userProfileSucces, (state, { obj }) => ({
    ...state,
    loading: false,
    loaded: true,
    userProfile: obj,
  })),
  on(UserProfileActions.userProfileFailed, (state, { serverError }) => ({
    ...state,
    loading: false,
    loaded: true,
    serverError,
  })),
  on(UserProfileActions.addToFavoritesRestaurant, (state) => ({
    ...state,
    loading: true,
    loaded: false,
  })),
  on(UserProfileActions.addToFavoritesRestaurantSucess, (state, { obj }) => ({
    ...state,
    loading: false,
    loaded: true,
    favorites: obj,
  })),
  on(
    UserProfileActions.addToFavoritesRestaurantFailed,
    (state, { serverError }) => ({
      ...state,
      loading: false,
      loaded: true,
      serverError,
    })
  )
);
