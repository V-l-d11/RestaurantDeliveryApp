import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { register } from '../../store/actions/food-auth-actions';

interface Role {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-food-auth-register-dialog',
  templateUrl: './food-auth-register-dialog.component.html',
  styleUrls: ['./food-auth-register-dialog.component.scss'],
})
export class FoodAuthRegisterDialogComponent implements OnInit {
  form!: FormGroup;
  selectedValue!: string;

  foods: Role[] = [
    { value: ' ROLE_RESTAURANT_OWNER', viewValue: 'Owner' },
    { value: 'ROLE_CUSTOMER', viewValue: 'Customer' },
  ];

  constructor(private store$: Store) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(9),
      ]),
      role: new FormControl(null, [Validators.required]),
    });
  }

  onSubmit() {
    console.log('Submit');
    this.store$.dispatch(register(this.form.value));
  }

  redirectToLogin() {}
}
