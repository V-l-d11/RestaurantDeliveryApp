import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AdminRestaurantResponse } from 'src/app/models/api/responses/admin/admin-restaurant';
import { OwnerRestaurantBase } from 'src/app/models/baseModals/restaurantOwnerbase';
import { findRestaurant } from 'src/app/owner-pages/store+/actions/actions-owner-retsuarant';
import { getRestaurantAll } from 'src/app/owner-pages/store+/selectors/owner-dashboard-selectors';

@Component({
  selector: 'app-owner-update-dashboard-info',
  templateUrl: './owner-update-dashboard-info.component.html',
  styleUrls: ['./owner-update-dashboard-info.component.scss'],
})
export class OwnerUpdateDashboardInfoComponent implements OnInit {
  form!: FormGroup;
  restaurantData$: Observable<OwnerRestaurantBase | null>;

  constructor(private store$: Store) {
    this.store$.dispatch(findRestaurant());
    this.restaurantData$ = this.store$.select(getRestaurantAll);
  }

  onSubmit() {}

  ngOnInit(): void {
    this.form = new FormGroup({
      id: new FormControl(null, [Validators.required]),
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(4),
      ]),
      description: new FormControl(null, [
        Validators.required,
        Validators.minLength(1),
      ]),
      cuisineType: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
      address: new FormGroup({
        street: new FormControl(null, [
          Validators.required,
          Validators.minLength(3),
        ]),
        city: new FormControl(null, [
          Validators.required,
          Validators.minLength(3),
        ]),
        state: new FormControl(null, [
          Validators.required,
          Validators.minLength(3),
        ]),
        zipCode: new FormControl(null, [Validators.required]),
        country: new FormControl(null, [Validators.required]),
      }),
      contactInformathion: new FormGroup({
        email: new FormControl(null, [
          Validators.required,
          Validators.minLength(4),
        ]),
        mobile: new FormControl(null, [Validators.required]),
        twitter: new FormControl(null, [Validators.required]),
        instagram: new FormControl(null, [Validators.required]),
      }),
      opiningHours: new FormControl(null, [Validators.required]),
      images: new FormArray([]),
      register: new FormControl(null, [Validators.required]),
    });

    this.restaurantData$.subscribe((data) => {
      if (data) {
        this.form.patchValue({
          id: data.id,
          name: data.name,
          description: data.description,
          cuisineType: data.cuisineType,
          images: data.images,
          address: {
            street: data.address.street,
            city: data.address.city,
            state: data.address.state,
            zipCode: data.address.zipCode,
            country: data.address.country,
          },
          contactInformathion: {
            email: data.contactInformathion.email,
            mobile: data.contactInformathion.mobile,
            twitter: data.contactInformathion.twitter,
            instagram: data.contactInformathion.instagram,
          },
          opiningHours: data.openingHours,
          register: data.registristrationDate,
        });
      }
    });
  }
}
