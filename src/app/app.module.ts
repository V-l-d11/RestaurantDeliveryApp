import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { HomeFoodPageModule } from './home-food-page/home-food-page.module';
import { Store, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { initAuth } from './auth/core/store/actions/food-auth-actions';
import { AuthReducer } from './auth/core/store/reducers/food-auth-reducer';
import { MatDialogModule } from '@angular/material/dialog';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    SharedModule,
    HomeFoodPageModule,
    MatDialogModule,
    StoreModule.forRoot({
      auth: AuthReducer,
    }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: false }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(store$: Store) {
    //    store$.dispatch(initAuth());
  }
}
