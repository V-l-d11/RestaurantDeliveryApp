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
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenIntercaptor } from './interceptors/token-interceptor';
import { FoodSearchPageModule } from './food-search-page/food-search-page.module';
import { SearchReducer } from './food-search-page/core/store+/reducer/food-search-reducer';
import { FoodRestaurantsPageModule } from './food-restaurants-page/food-restaurants-page.module';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    SharedModule,
    HomeFoodPageModule,
    MatDialogModule,
    FoodSearchPageModule,
    FoodRestaurantsPageModule,
    StoreModule.forRoot({
      auth: AuthReducer,
      search: SearchReducer,
    }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: false }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: TokenIntercaptor,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(store$: Store) {
    //    store$.dispatch(initAuth());
  }
}
