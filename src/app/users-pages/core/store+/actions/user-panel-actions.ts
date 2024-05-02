import { createAction, props } from '@ngrx/store';
import { CardItemRequestAdd } from 'src/app/models/api/requests/card-item-add-user-request';
import { OderRequest } from 'src/app/models/api/requests/oder-request';
import { updateItemRequest } from 'src/app/models/api/requests/update-item-request';
import {
  AddCardItemResponse,
  Card,
  CardItem,
} from 'src/app/models/api/responses/add-card-item-users-response';

export const addItemToCard = createAction(
  '[User Panel] add Item To Card',
  props<{ item: CardItemRequestAdd }>()
);

export const addItemToCardSucess = createAction(
  '[User Panel] add Item To Card Sucess',
  props<{ obj: AddCardItemResponse }>()
);

export const addItemToCardFailed = createAction(
  '[User Panel] add Item To Card Failed',
  props<{ serverError: string }>()
);

export const clearCard = createAction('[User Panel] clear Card');

export const clearCardSucess = createAction(
  '[User Panel] clear Card Sucess',

  props<{ obj: Card }>()
);

export const clearCardFailed = createAction(
  '[User Panel] clear Card Filed',
  props<{ serverError: string }>()
);

export const findUserCard = createAction('[User Panel] find user card');

export const findUserCardSucess = createAction(
  '[User Panel] find user card sucess',
  props<{ obj: Card }>()
);

export const findUserCardFailed = createAction(
  '[User Panel] find user card failed',
  props<{ serverError: string }>()
);

export const removeCardItem = createAction(
  '[User Panel] remove card Item',
  props<{ id: number }>()
);

export const removeCardItemSucess = createAction(
  '[User Panel] remove card Item Sucess',
  props<{ obj: Card }>()
);

export const removeCardItemFailed = createAction(
  '[User Panel] remove card Item Failed',
  props<{ serverError: string }>()
);

export const updateCardItem = createAction(
  '[User Panel] update Card Item',
  props<{ req: updateItemRequest }>()
);

export const updateCardItemSucess = createAction(
  '[User Panel] update Card Item Sucess',
  props<{ obj: CardItem }>()
);

export const updateCardItemFailed = createAction(
  '[User Panel] update Card Item Failed',
  props<{ serverError: string }>()
);
