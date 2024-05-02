import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { isLogin } from './auth/core/store/actions/food-auth-actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'food-delivery-app';

  constructor(private store$: Store) {}

  ngOnInit(): void {
    const potentialToke = localStorage.getItem('token');
    if (potentialToke != null) {
      console.log(potentialToke, 'Potential Token');
      this.store$.dispatch(isLogin({ authData: potentialToke }));
    }
  }
}
