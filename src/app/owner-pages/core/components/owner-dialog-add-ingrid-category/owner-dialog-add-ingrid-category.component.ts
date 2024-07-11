import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-owner-dialog-add-ingrid-category',
  templateUrl: './owner-dialog-add-ingrid-category.component.html',
  styleUrls: ['./owner-dialog-add-ingrid-category.component.scss'],
})
export class OwnerDialogAddIngridCategoryComponent implements OnInit {
  form!: FormGroup;
  previewData: any;
  @ViewChild(MatAccordion) accordion!: MatAccordion;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      sections: this.fb.array([]),
    });
    this.previewData = {};
    this.form.valueChanges.subscribe(() => {
      this.updatePreview();
    });
  }
  get sections(): FormArray {
    return this.form.get('sections') as FormArray;
  }
  updatePreview() {}
  addNewSection() {
    const newSection = this.fb.group({
      name: [''],
      price: [''],
    });
    this.sections.push(newSection);
  }
  removeSection(index: number) {
    this.sections.removeAt(index);
  }
  onSubmit() {
    console.log(this.form.value);
  }
}
