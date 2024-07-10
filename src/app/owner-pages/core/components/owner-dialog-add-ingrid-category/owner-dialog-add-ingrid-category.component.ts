import { Component, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-owner-dialog-add-ingrid-category',
  templateUrl: './owner-dialog-add-ingrid-category.component.html',
  styleUrls: ['./owner-dialog-add-ingrid-category.component.scss'],
})
export class OwnerDialogAddIngridCategoryComponent {
  @ViewChild(MatAccordion) accordion!: MatAccordion;
}
