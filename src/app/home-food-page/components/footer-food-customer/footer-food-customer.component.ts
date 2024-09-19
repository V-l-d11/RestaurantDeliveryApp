import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getCtaegoriesFood } from 'src/app/home-food-page/+store/selectors/home-page-selectors';
import { Category } from 'src/app/models/baseModals/category';

@Component({
  selector: 'app-footer-food-customer',
  templateUrl: './footer-food-customer.component.html',
  styleUrls: ['./footer-food-customer.component.scss'],
})
export class FooterFoodCustomerComponent implements OnInit {
  categoriesFood$!: Observable<Category[]>;
  columns = [
    {
      label: 'Food Delivery App',
      open: false,
      subColumns: [
        { label: 'Food Delivery App For Business', open: false },
        { label: 'Recommend a restauran', open: false },
        { label: 'Become a courier', open: false },
        { label: 'Regulamin', open: false },
        { label: 'Legal notice', open: false },
        { lable: 'Politics cookies', open: false },
      ],
    },
    {
      label: 'New Restaurants',
      open: false,
      subColumns: [
        { label: 'Sub-column 2.1', open: false },
        { label: 'Sub-column 2.2', open: false },
      ],
    },
    {
      label: 'Kategories Food',
      open: false,
      subColumns: [
        { label: 'Sub-column 3.1', open: false },
        { label: 'Sub-column 3.2', open: false },
      ],
    },
    {
      label: 'Gift Cards',
      open: false,
      subColumns: [
        { label: 'Create Gift Card', open: false },
        { label: 'Use Gift Card', open: false },
        { label: 'Political Gifts', open: false },
      ],
    },
    {
      label: 'Open new',
      open: false,
      subColumns: [
        { label: 'Delivery Food', open: false },
        { label: 'Trends Food 2024', open: false },
        { label: 'Prezents', open: false },
      ],
    },
    {
      label: 'Kontakts',
      open: false,
      subColumns: [
        { label: 'foodDeliveryApp@gmail.com', open: false },
        { label: 'Sczcecin, ul Parkowa 4a, 71-600,d 4', open: false },
        { label: '+48 678 578', open: false },
        { label: '+48 778 888 079', open: false },
        { label: '+48 668 888 009', open: false },
      ],
    },
  ];

  constructor(private store$: Store, private router: Router) {}

  ngOnInit(): void {
    this.categoriesFood$ = this.store$.select(getCtaegoriesFood);
    this.categoriesFood$.subscribe((categories) => {
      const kategoriesColumn = this.columns.find(
        (column) => column.label === 'Kategories Food'
      );
      if (kategoriesColumn) {
        kategoriesColumn.subColumns = categories.map((category) => ({
          label: category.name,
          open: false,
        }));
      }
    });
  }

  toggle(column: any) {
    column.open = !column.open;
  }

  toggleSubColumn(subColumn: any) {
    subColumn.open = !subColumn.open;
  }
}
