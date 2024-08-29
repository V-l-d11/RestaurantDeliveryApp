import { Component } from '@angular/core';

@Component({
  selector: 'app-owner-oders',
  templateUrl: './owner-oders.component.html',
  styleUrls: ['./owner-oders.component.scss'],
})
export class OwnerOdersPageComponent {
  navLinks: string[] = ['All', 'Pending', 'Completed', 'Failed'];
}
