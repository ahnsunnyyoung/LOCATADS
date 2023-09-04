import { Component, OnInit } from '@angular/core';
import { ADs } from 'src/app/model/mock-ad';
import { Router } from '@angular/router';
import { AdService } from 'src/app/service/ad.service';
import { Ad } from 'src/app/model/Ad';

@Component({
  selector: 'app-advertisers-manage',
  templateUrl: './advertisers-manage.component.html',
  styleUrls: ['./advertisers-manage.component.scss']
})
export class AdvertisersManageComponent implements OnInit {
	constructor(private router: Router, private adService: AdService) {}
	adData = ADs;
	userId!: number;

  ngOnInit(): void {
		this.userId = Number(sessionStorage.getItem("loginID"))
		this.adService.getUserAds(this.userId).subscribe(
			(response: Ad[]) => {
				console.log(response);
        this.adData = response;
			}
		);
  }
  
  onAdd() {
    this.router.navigate(['/advertisers/add']);
  }

  editAd(ad: Ad) {

  }

  deleteAd(adId: number) {
		this.adService.deleteAd(adId).subscribe(
			(res:Ad) => {
        window.location.reload();
        alert("Deleted");
			}
		);
  }
}

