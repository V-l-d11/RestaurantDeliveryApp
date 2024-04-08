import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { UiLibraryModule } from './ui-library/ui-library.module';
import { HomeFoodPageModule } from './home-food-page/home-food-page.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    SharedModule,
    UiLibraryModule,
    HomeFoodPageModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
