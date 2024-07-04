import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/baseModals/category';

export interface PeriodicElement {
  name: string;
  position: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen' },
  { position: 2, name: 'Helium' },
  { position: 3, name: 'Lithium' },
  { position: 4, name: 'Beryllium' },
  { position: 5, name: 'Boron' },
  { position: 6, name: 'Carbon' },
  { position: 7, name: 'Nitrogen' },
  { position: 8, name: 'Oxygen' },
  { position: 9, name: 'Fluorine' },
  { position: 10, name: 'Neon' },
];

@Component({
  selector: 'app-owner-categories-table',
  templateUrl: './owner-categories-table.component.html',
  styleUrls: ['./owner-categories-table.component.scss'],
})
export class OwnerCategoriesTableComponent implements OnInit {
  @Input()
  categories!: Observable<Category[] | null>;
  displayedColumns: string[] = ['id', 'name'];
  dataSource = new MatTableDataSource<Category | null>();

  ngOnInit(): void {
    this.categories.subscribe((data) => {
      this.dataSource.data = data;
    });
  }
}
