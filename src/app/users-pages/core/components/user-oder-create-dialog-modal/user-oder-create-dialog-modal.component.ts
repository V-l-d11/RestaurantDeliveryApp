import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { createOder } from '../../store+/actions/oder-user-actions';

@Component({
  selector: 'app-user-oder-create-dialog-modal',
  templateUrl: './user-oder-create-dialog-modal.component.html',
  styleUrls: ['./user-oder-create-dialog-modal.component.scss'],
})
export class UserOderCreateDialogModalComponent implements OnInit {
  form!: FormGroup;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private store$: Store
  ) {}
  onSubmit() {
    if (this.form.valid) {
      this.store$.dispatch(createOder(this.form.value));
    } else {
      console.log('Form is not value');
    }
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      deliveryAddress: new FormGroup({
        street: new FormControl(null, [Validators.required]),
        city: new FormControl(null, [Validators.required]),
        state: new FormControl(null, [Validators.required]),
        zipCode: new FormControl(null, [Validators.required]),
        country: new FormControl(null, [Validators.required]),
      }),
    });
  }
}
