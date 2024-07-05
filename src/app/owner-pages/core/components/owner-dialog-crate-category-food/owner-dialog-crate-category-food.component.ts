import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { OwnerDialogServiceService } from 'src/app/owner-pages/services/owner-dialog-service/owner-dialog-service.service';
import {
  createOwnerCategoryFailed,
  createOwnerCategoryFood,
} from 'src/app/owner-pages/store+/actions/actions-owner-category-food';

@Component({
  selector: 'app-owner-dialog-crate-category-food',
  templateUrl: './owner-dialog-crate-category-food.component.html',
  styleUrls: ['./owner-dialog-crate-category-food.component.scss'],
})
export class OwnerDialogCrateCategoryFoodComponent implements OnInit {
  form!: FormGroup;
  constructor(
    private store$: Store,
    private dialog: OwnerDialogServiceService
  ) {}

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value, 'Form Category Food Value');
      this.store$.dispatch(createOwnerCategoryFood({ item: this.form.value }));
    }
  }

  generateNumericId(): number {
    return Math.floor(Math.random() * 1000);
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      id: new FormControl(this.generateNumericId()),
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
    });
  }
}
