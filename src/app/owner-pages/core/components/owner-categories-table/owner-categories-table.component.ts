import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/baseModals/category';

@Component({
  selector: 'app-owner-categories-table',
  templateUrl: './owner-categories-table.component.html',
  styleUrls: ['./owner-categories-table.component.scss'],
})
export class OwnerCategoriesTableComponent implements OnInit {
  @Input()
  categories!: Observable<Category[]>;
  displayedColumns: string[] = ['id', 'name'];
  dataSource = new MatTableDataSource<Category | null>();

  ngOnInit(): void {
    this.categories.subscribe((data) => {
      console.log(data, 'Data');
      this.dataSource.data = data;
    });
  }
}
