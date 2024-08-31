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
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class OwnerOdersTableComponent implements AfterViewInit, OnInit {
  @Input() odersList!: Observable<OwnerOderBase[]>;
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
          console.log(orders, 'Orders');
          this.dataSource.data = orders;
        },
        error: (error) => {
          console.error('Ошибка при получении заказов', error);
        },
      });
    }
  }

  toggleRow(row: OwnerOderBase): void {
    this.expandedElement = this.expandedElement === row ? null : row;
  }
}
