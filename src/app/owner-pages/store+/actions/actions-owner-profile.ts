import { createAction, props } from '@ngrx/store';
import { UserProfile } from 'src/app/models/api/responses/user-profile';

export enum OwnerProfiles {
  GET_OWNER_PROFILES = '[Owner Panel] get owner profiles',
  GET_OWNER_PROFILES_SUCESS = '[Owner Panel] get owner profiles sucess',
  GET_OWNER_PROFILES_FAILED = '[Owner Panel] get owner profiles failed ',
}

export const getOnwerProfiles = createAction(OwnerProfiles.GET_OWNER_PROFILES);

export const getOwnerProfileSucess = createAction(
  OwnerProfiles.GET_OWNER_PROFILES_SUCESS,
  props<{ profile: UserProfile }>()
);

export const getOwnerProfilesFailed = createAction(
  OwnerProfiles.GET_OWNER_PROFILES_FAILED,
  props<{ serverError: string }>()
);
