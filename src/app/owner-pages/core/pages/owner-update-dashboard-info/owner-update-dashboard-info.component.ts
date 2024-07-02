import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AdminRestaurantResponse } from 'src/app/models/api/responses/admin/admin-restaurant';
import { OwnerRestaurantBase } from 'src/app/models/baseModals/restaurantOwnerbase';
import { OwnerDialogServiceService } from 'src/app/owner-pages/services/owner-dialog-service/owner-dialog-service.service';
import {
  findRestaurant,
  updateOwerRestaurant,
} from 'src/app/owner-pages/store+/actions/actions-owner-retsuarant';
import { getRestaurantAll } from 'src/app/owner-pages/store+/selectors/owner-dashboard-selectors';

@Component({
  selector: 'app-owner-update-dashboard-info',
  templateUrl: './owner-update-dashboard-info.component.html',
  styleUrls: ['./owner-update-dashboard-info.component.scss'],
})
export class OwnerUpdateDashboardInfoComponent implements OnInit {
  form!: FormGroup;
  restaurantData$: Observable<OwnerRestaurantBase | null>;

  constructor(
    private store$: Store,
    private dialogService: OwnerDialogServiceService
  ) {
    this.store$.dispatch(findRestaurant());
    this.restaurantData$ = this.store$.select(getRestaurantAll);
  }

  clearInput(controlName: string): void {
    this.form.get(controlName)?.setValue('');
  }
  restoreInput(controlName: string, originalValue: string): void {
    if (!this.form.get(controlName)?.value) {
      this.form.get(controlName)?.setValue(originalValue);
    }
  }

  onSubmit() {
    console.log('Click');
    if (this.form.valid) {
      this.dialogService.askingForEditRestaurantInfo().subscribe((result) => {
        if (result) {
          console.log(this.form.value.id, 'IIIIDDD');
          console.log(
            this.form.value,
            'This form form valid ______----_________'
          );
          this.store$.dispatch(updateOwerRestaurant({ item: this.form.value }));
        }
      });
    }
    console.log('No');
  }

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
      console.log(data?.images, 'Images HAHH');
      if (data) {
        const imagesArray = this.form.get('images') as FormArray;
        imagesArray.clear();
        data.images.forEach((image: string) => {
          imagesArray.push(new FormControl(image));
        });
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

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    console.log(file, 'File');
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const imagesArray = this.form.get('images') as FormArray;
        imagesArray.push(new FormControl(reader.result as string));
        console.log(imagesArray.value, 'Images Array');
      };
      reader.readAsDataURL(file);
    }
  }

  removeImage(index: number): void {
    const imagesArray = this.form.get('images') as FormArray;
    imagesArray.removeAt(index);
    console.log(imagesArray.value, 'Images Array after removal');
  }

  hasError(controlName: string, errorName: string): boolean {
    const control = this.form.get(controlName);
    return control ? control.hasError(errorName) && control.touched : false;
  }
}
