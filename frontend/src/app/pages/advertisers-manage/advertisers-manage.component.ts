import { Component } from '@angular/core';
import { ADs } from 'src/app/model/mock-ad';
import { Router } from '@angular/router';

@Component({
  selector: 'app-advertisers-manage',
  templateUrl: './advertisers-manage.component.html',
  styleUrls: ['./advertisers-manage.component.scss']
})
export class AdvertisersManageComponent {
  constructor(private router: Router) { }
	adData = ADs;

  
  onAdd() {
    this.router.navigate(['/advertisers/add']);
  }
}
