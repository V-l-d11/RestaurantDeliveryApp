import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { OwnerDashboardPageComponent } from './core/pages/owner-dashboard-page/owner-dashboard-page.component';
import { OwnerOdersComponent } from './core/pages/owner-oders/owner-oders.component';
import { OwnerMenuComponent } from './core/pages/owner-menu/owner-menu.component';
import { OwnerFoodCategoryComponent } from './core/pages/owner-food-category/owner-food-category.component';
import { OwnerEventsComponent } from './core/pages/ower-events/ower-events.component';
import { OwnerDetailsComponent } from './core/pages/ower-details/ower-details.component';
import { OwnerContainerComponent } from './core/pages/owner-container/owner-container.component';
import { OwnerDashboardService } from './services/api-owner-dashboard-service/owner-dashboard.service';
import { OwnerFoodService } from './services/api-owner-food-service/owner-food.service';

const routes: Routes = [
  {
    path: '',
    component: OwnerContainerComponent,
    children: [
      { path: 'dashboard', component: OwnerDashboardPageComponent },
      { path: 'oders', component: OwnerOdersComponent },
      { path: 'menu', component: OwnerMenuComponent },
      { path: 'foodCategory', component: OwnerFoodCategoryComponent },
      { path: 'events', component: OwnerEventsComponent },
      { path: 'details', component: OwnerDetailsComponent },
    ],
  },
];

@NgModule({
  declarations: [
    OwnerContainerComponent,
    OwnerDashboardPageComponent,
    OwnerOdersComponent,
    OwnerMenuComponent,
    OwnerFoodCategoryComponent,
    OwnerEventsComponent,
    OwnerDetailsComponent,
  ],
  imports: [CommonModule],
  providers: [OwnerDashboardService, OwnerFoodService],
})
export class OwnerPagesModule {}
