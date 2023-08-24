import { Component } from '@angular/core';
import { ADs } from 'src/app/data/mock-ad';

@Component({
  selector: 'app-advertisers-manage',
  templateUrl: './advertisers-manage.component.html',
  styleUrls: ['./advertisers-manage.component.scss']
})
export class AdvertisersManageComponent {
	adData = ADs;
}
