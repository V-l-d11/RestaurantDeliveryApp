import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { userProfile } from '../../store+/actions/user-panel-profiles';
import {
  getFavorites,
  getFavoritesArray,
  getFavoritesList,
} from '../../store+/selectors/user-profiles-selectors';
import { Observable } from 'rxjs';
import { RestaurantDto } from 'src/app/models/api/responses/favorites';

@Component({
  selector: 'app-favorites-users',
  templateUrl: './favorites-users.component.html',
  styleUrls: ['./favorites-users.component.scss'],
})
export class FavoritesUsersComponent implements OnInit {
  favorites$!: Observable<RestaurantDto[] | undefined>;
  constructor(private store$: Store, private router: Router) {
    this.store$.dispatch(userProfile());
  }

  ngOnInit(): void {
    this.favorites$ = this.store$.select(getFavoritesList);
    this.favorites$.subscribe((el) => console.log(el, 'Favorites List'));
  }
}
