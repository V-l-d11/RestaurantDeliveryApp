import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatAccordion } from '@angular/material/expansion';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  createIngridientsCategoryWth,
  createIngridientsCategoryWthFailed,
} from 'src/app/owner-pages/store+/actions/actions-owner-ingridients';
import { getRestaurantId } from 'src/app/owner-pages/store+/selectors/owner-dashboard-selectors';

@Component({
  selector: 'app-owner-dialog-add-ingrid-category',
  templateUrl: './owner-dialog-add-ingrid-category.component.html',
  styleUrls: ['./owner-dialog-add-ingrid-category.component.scss'],
})
export class OwnerDialogAddIngridCategoryComponent implements OnInit {
  form!: FormGroup;
  previewData: any;
  restaurantId$!: Observable<number>;
  restId!: number;
  @ViewChild(MatAccordion) accordion!: MatAccordion;

  constructor(
    private store$: Store,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<OwnerDialogAddIngridCategoryComponent>
  ) {}

  ngOnInit(): void {
    this.restaurantId$ = this.store$.select(getRestaurantId);

    this.form = this.fb.group({
      name: ['', Validators.required],
      restaurantId: [null, Validators.required],
      ingredients: this.fb.array([]),
    });
    this.previewData = {};
    this.form.valueChanges.subscribe(() => {
      this.updatePreview();
    });

    this.restaurantId$.subscribe((el) => {
      this.restId = el;
      this.form.patchValue({ restaurantId: this.restId });
    });
  }
  get ingredients(): FormArray {
    return this.form.get('ingredients') as FormArray;
  }
  updatePreview() {}

  addNewSection() {
    const newSection = this.fb.group({
      name: [''],
      price: [null, [Validators.required, Validators.pattern('^[0-9]*$')]],
      restaurantId: [+this.restId, Validators.required],
    });
    this.ingredients.push(newSection);
  }
  removeSection(index: number) {
    this.ingredients.removeAt(index);
  }
  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
      this.store$.dispatch(
        createIngridientsCategoryWth({ item: this.form.value })
      );
      this.dialogRef.close();
    }
  }
}
