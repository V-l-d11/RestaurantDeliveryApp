import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  AuthReducer,
  FOOD_AUTH_FEATURE_NAME,
} from './core/store/reducers/food-auth-reducer';
import { EffectsModule } from '@ngrx/effects';
import { FoodAuthEffects } from './core/store/effects/food-auth.effects';
import { FoodAuthLoginDialogComponent } from './core/components/food-auth-login-dialog/food-auth-login-dialog.component';
import { FoodAuthRegisterDialogComponent } from './core/components/food-auth-register-dialog/food-auth-register-dialog.component';
import { Routes } from '@angular/router';

FoodAuthLoginDialogComponent;
const routes: Routes = [
  {
    path: 'login',
    component: FoodAuthLoginDialogComponent,
  },
  {
    path: 'registration',
    component: FoodAuthRegisterDialogComponent,
  },
];

@NgModule({
  declarations: [FoodAuthLoginDialogComponent, FoodAuthRegisterDialogComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forFeature(FOOD_AUTH_FEATURE_NAME, AuthReducer),
    EffectsModule.forFeature([FoodAuthEffects]),
  ],
  exports: [],
})
export class AuthModule {}
