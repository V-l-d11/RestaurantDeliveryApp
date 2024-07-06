import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/baseModals/category';
import {
  deleteOwnerCategoryFood,
  deleteOwnerCategoryFoodFailed,
} from 'src/app/owner-pages/store+/actions/actions-owner-category-food';

@Component({
  selector: 'app-owner-categories-table',
  templateUrl: './owner-categories-table.component.html',
  styleUrls: ['./owner-categories-table.component.scss'],
})
export class OwnerCategoriesTableComponent implements OnInit {
  @Input()
  categories!: Observable<Category[]>;
  displayedColumns: string[] = ['id', 'name', 'actions'];
  dataSource = new MatTableDataSource<Category | null>();

  constructor(private store$: Store) {}

  deleteCategoryFood(id: number): void {
    this.store$.dispatch(deleteOwnerCategoryFood({ id }));
  }

  ngOnInit(): void {
    this.categories.subscribe((data) => {
      console.log(data, 'Data');
      this.dataSource.data = data;
    });
  }
}
