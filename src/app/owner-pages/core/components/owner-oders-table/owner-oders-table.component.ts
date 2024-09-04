import {
  Component,
  Input,
  OnInit,
  AfterViewInit,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { OwnerOderBase } from 'src/app/models/baseModals/owerOderBase';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { User } from 'src/app/models/baseModals/user';
import { PageableResponse } from 'src/app/models/baseModals/pagaeble';

@Component({
  selector: 'app-owner-oders-table',
  templateUrl: './owner-oders-table.component.html',
  styleUrls: ['./owner-oders-table.component.scss'],
  animations: [
    trigger('detailExpand', [
      state(
        'collapsed',
        style({
          height: '0px',
          opacity: 0,
          overflow: 'hidden',
        })
      ),
      state(
        'expanded',
        style({
          height: '*',
          opacity: 1,
          overflow: 'hidden',
        })
      ),
      transition(
        'expanded <=> collapsed',
        animate('325ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class OwnerOdersTableComponent implements AfterViewInit, OnInit {
  @Input() odersList!: Observable<PageableResponse<OwnerOderBase>>;
  displayedColumns: string[] = [
    'number',
    'Customer',
    'Status',
    'CreateAt',
    'TotalPrice',
    'Address',
    'expand',
  ];
  expandedElement: OwnerOderBase | null = null;
  dataSource = new MatTableDataSource<OwnerOderBase>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    if (this.odersList) {
      this.odersList.subscribe({
        next: (orders) => {
          if (orders.content) {
            this.dataSource.data = orders.content;

            setTimeout(() => {
              if (this.paginator) {
                this.paginator.length = orders.totalElements;
                this.paginator.pageSize = orders.size;
              }
              if (this.sort) {
                this.dataSource.sort = this.sort;
              }
            });
          }
        },
        error: (error) => {
          console.error('Error to recive odersList', error);
        },
      });
    }
  }

  toggleRow(row: OwnerOderBase): void {
    this.expandedElement = this.expandedElement === row ? null : row;
  }
}
