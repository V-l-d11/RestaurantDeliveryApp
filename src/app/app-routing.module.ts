import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'foodapp', pathMatch: 'full' },
  {
    path: 'foodapp',
    loadChildren: () =>
      import('./home-food-page/home-food-page.module').then(
        (m) => m.HomeFoodPageModule
      ),
  },

  {
    path: '**',
    redirectTo: '/foodapp',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
