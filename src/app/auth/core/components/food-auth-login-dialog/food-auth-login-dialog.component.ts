import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FoodAuthServiceService } from '../../services/food-auth-service.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { login } from '../../store/actions/food-auth-actions';

@Component({
  selector: 'app-food-auth-login-dialog',
  templateUrl: './food-auth-login-dialog.component.html',
  styleUrls: ['./food-auth-login-dialog.component.scss'],
})
export class FoodAuthLoginDialogComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private auth: FoodAuthServiceService,
    private router: Router,
    private store$: Store
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(9),
      ]),
    });
  }

  onSubmit() {
    console.log('Submit');
    //  if (this.form.valid) {
    this.store$.dispatch(login(this.form.value));
    // }
  }

  redirectToRegister() {}
}
