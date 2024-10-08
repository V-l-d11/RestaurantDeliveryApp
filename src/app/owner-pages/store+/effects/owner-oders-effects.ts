import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { OwnerOdersService } from '../../services/api-owner-oders-service/owner-oders.service';
import { OwnerDialogServiceService } from '../../services/owner-dialog-service/owner-dialog-service.service';
import * as odersActions from './../actions/actions-owner-oders';
import * as restaurantActions from './../actions/actions-owner-retsuarant';
import {
  catchError,
  debounce,
  delay,
  distinctUntilChanged,
  filter,
  map,
  of,
  switchMap,
  tap,
  withLatestFrom,
} from 'rxjs';
import { getPrevioseName } from '../selectors/owner-oders-selectors';

@Injectable()
export class OwnerOdersEffects {
  constructor(
    private actions$: Actions,
    private store$: Store,
    private oderService: OwnerOdersService,
    private dialog: OwnerDialogServiceService
  ) {}

  loadOdersHistory$ = createEffect(() =>
    this.actions$.pipe(
      ofType(odersActions.getOwnerHistoryOders),
      switchMap((action) =>
        this.oderService
          .getOderHistory(action.restaurantId, action.oderStatus)
          .pipe(
            map((response) =>
              odersActions.getOwnerHistoryOdersSucess({
                items: response,
              })
            ),
            catchError((error) =>
              of(
                odersActions.getOwnerHistoryFailed({
                  serverError: error.massage,
                })
              )
            )
          )
      )
    )
  );

  loadOdersHistoryByCustomerName$ = createEffect(() =>
    this.actions$.pipe(
      ofType(odersActions.getOdersByCustomer),
      debounce(() => of(null).pipe(delay(400))),
      distinctUntilChanged((prev, cur) => prev.fullName === cur.fullName),
      switchMap((action) =>
        this.oderService.getOdersByCustomerFullName(action.fullName).pipe(
          map((response) =>
            odersActions.getOdersByCustomerSucess({ items: response })
          ),
          catchError((error) =>
            of(
              odersActions.getOdersByCustomerFailed({
                serverError: error.massage,
              })
            )
          )
        )
      )
    )
  );

  loadOdersHistoryByDateCreateAt$ = createEffect(() =>
    this.actions$.pipe(
      ofType(odersActions.getOdersCreateAt),
      map((action) => action.createAt),
      filter((date) => this.isValidDate(date)),
      withLatestFrom(this.store$.select(getPrevioseName)),
      distinctUntilChanged(([prevDate, currDate]) => prevDate === currDate),
      map(([_, curDate]) => curDate),
      filter((date): date is string => date !== null && date.trim() !== ''),
      switchMap((date) =>
        this.oderService.getOdersHistoryByDate(date).pipe(
          map((items) => odersActions.getOdersCreateAtSucess({ items })),
          catchError((error) =>
            of(
              odersActions.getOdersByCustomerFailed({
                serverError: error.massage,
              })
            )
          )
        )
      )
    )
  );

  loadOdersHistoryByDateRange$ = createEffect(() =>
    this.actions$.pipe(ofType(odersActions.getOdersRangeDate))
  );

  loadOdersStatusSummary$ = createEffect(() =>
    this.actions$.pipe(
      ofType(odersActions.getOdersStatusSummary),
      switchMap((action) =>
        this.oderService.getOdersStatusSummary(action.restaurantId).pipe(
          map((response) =>
            odersActions.getOdersStatusSummarySucess({ item: response })
          ),
          catchError((error) =>
            of(
              odersActions.getOdersStatusSammaryFailed({
                serverError: error.massage,
              })
            )
          )
        )
      )
    )
  );

  loadOdersListByTotalPrice$ = createEffect(() =>
    this.actions$.pipe(
      ofType(odersActions.getOdersFilterByTotalPrice),
      switchMap((action) =>
        this.oderService.getOdersByTotalPrice(action.obj).pipe(
          map((response) =>
            odersActions.getOdersFilterByTotalPriceSucess({ items: response })
          ),
          catchError((error) =>
            of(
              odersActions.getOdersFilterByTotalPriceFailed({
                serverError: error.massage,
              })
            )
          )
        )
      )
    )
  );

  updateOderStatus$ = createEffect(() =>
    this.actions$.pipe(
      ofType(odersActions.updateOwnerOderStatus),
      switchMap((action) =>
        this.oderService
          .updateOderStatus(action.oderId, action.oderStatus)
          .pipe(
            map((response) =>
              odersActions.updateOwnerOderStatusSucess({ item: response })
            ),
            tap(() => {
              this.dialog.openSnackBar(
                'Status Oder Sucessfully Changed!',
                5000
              );
            }),
            catchError((error) =>
              of(
                odersActions.updateOwnerOderStatusFailed({
                  serverError: error.massage,
                })
              )
            )
          )
      )
    )
  );

  private isValidDate(date: string): boolean {
    const datePattern = /^\d{4}-\d{2}-\d{2}$/;
    return datePattern.test(date);
  }
}
