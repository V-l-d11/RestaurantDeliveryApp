import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { OwnerOderBase } from 'src/app/models/baseModals/owerOderBase';

@Component({
  selector: 'app-owner-oders-details-table-line',
  templateUrl: './owner-oders-details-table-line.component.html',
  styleUrls: ['./owner-oders-details-table-line.component.scss'],
})
export class OwnerOdersDetailsTableLineComponent implements OnChanges {
  @Input()
  oderElement!: OwnerOderBase | null;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.oderElement, 'ODer Element child');
  }
}
