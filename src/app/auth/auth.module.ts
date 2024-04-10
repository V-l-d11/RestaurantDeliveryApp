import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import {
  AuthReducer,
  FOOD_AUTH_FEATURE_NAME,
} from './core/store/reducers/food-auth-reducer';
import { EffectsModule } from '@ngrx/effects';
import { FoodAuthEffects } from './core/store/effects/food-auth.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature(FOOD_AUTH_FEATURE_NAME, AuthReducer),
    EffectsModule.forFeature([FoodAuthEffects]),
  ],
})
export class AuthModule {}
