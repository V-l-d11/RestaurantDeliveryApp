import { createReducer, on } from '@ngrx/store';
import { UserProfile } from 'src/app/models/api/responses/user-profile';
import * as ownerProfilesActions from './../actions/actions-owner-profile';

export interface OwnerProfiles {
  loading: boolean;
  loaded: boolean;
  serverError: string;
  profile: UserProfile | null;
}

export const OWNER_PROFILES_FEATURE_NAME = 'owner-profiles';

export const initalState: OwnerProfiles = {
  loaded: true,
  loading: false,
  serverError: '',
  profile: null,
};

export const OwnerProfilesReducer = createReducer(
  initalState,
  on(ownerProfilesActions.getOnwerProfiles, (state) => ({
    ...state,
    loading: true,
    loaded: false,
  })),
  on(ownerProfilesActions.getOwnerProfileSucess, (state, { profile }) => ({
    ...state,
    profile: profile,
    loading: false,
    loaded: true,
  })),
  on(ownerProfilesActions.getOwnerProfilesFailed, (state, { serverError }) => ({
    ...state,
    loading: false,
    loaded: true,
    serverError,
  }))
);
