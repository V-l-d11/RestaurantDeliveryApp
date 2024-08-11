import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-owner-add-menu-item-food',
  templateUrl: './owner-add-menu-item-food.component.html',
  styleUrls: ['./owner-add-menu-item-food.component.scss'],
})
export class OwnerAddMenuItemFoodComponent implements OnInit {
  form!: FormGroup;

  constructor(private store$: Store, private router: Router) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(4),
      ]),
      description: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
      ]),
      price: new FormControl(0, [Validators.required]),
      category: new FormControl('', [Validators.required]),
      images: new FormArray([], [Validators.required]),
      restaurantid: new FormControl(null, [Validators.required]),
      vegetarian: new FormControl(false, [Validators.required]),
      seasional: new FormControl(false, [Validators.required]),
      ingridients: new FormArray([], [Validators.required]),
    });
  }

  ngSubmit() {}
}
