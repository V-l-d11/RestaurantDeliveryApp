import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactInformation } from 'src/app/models/baseModals/contactInformation';

@Component({
  selector: 'app-owner-dashboard-contact-retaurant-card',
  templateUrl: './owner-dashboard-contact-retaurant-card.component.html',
  styleUrls: ['./owner-dashboard-contact-retaurant-card.component.scss'],
})
export class OwnerDashboardContactRetaurantCardComponent implements OnInit {
  @Input()
  contactInfo!: Observable<ContactInformation | null>;

  ngOnInit(): void {}
}
