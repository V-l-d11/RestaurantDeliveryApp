import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { MatDialogModule } from '@angular/material/dialog';

import {
  AuthReducer,
  FOOD_AUTH_FEATURE_NAME,
} from './core/store/reducers/food-auth-reducer';
import { EffectsModule } from '@ngrx/effects';
import { FoodAuthEffects } from './core/store/effects/food-auth.effects';
import { FoodAuthLoginDialogComponent } from './core/components/food-auth-login-dialog/food-auth-login-dialog.component';

@NgModule({
  declarations: [
    FoodAuthLoginDialogComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    HttpClientModule,
    StoreModule.forFeature(FOOD_AUTH_FEATURE_NAME, AuthReducer),
    EffectsModule.forFeature([FoodAuthEffects]),
  ],
})
export class AuthModule {}
