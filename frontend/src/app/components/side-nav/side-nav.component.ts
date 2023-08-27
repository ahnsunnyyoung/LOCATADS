import { Component, Injectable, Input, OnInit } from '@angular/core';


@Injectable()
class SideNavService {

  public getSideNavData(userType:String): Array<NavigationData>{
    switch(userType){
      case UserType.Advertiser: {
        return [
          {
            "routerLink":"/advertisers/dashboard",
            "title":"Dashboard",
          },
          {
            "routerLink":"/advertisers/manage",
            "title":"Manage ADs",
          },
          {
            "routerLink":"/advertisers/support",
            "title":"Support",
          },
          {
            "routerLink":"/advertisers/logout",
            "title":"Logout",
          },
        ]
      }
      case UserType.Driver: {
        return [
          {
            "routerLink":"/drivers/dashboard",
            "title":"Dashboard",
          },
          {
            "routerLink":"/drivers/manage",
            "title":"Manage Taxis",
          },
          {
            "routerLink":"/drivers/support",
            "title":"Support",
          },
          {
            "routerLink":"/drivers/logout",
            "title":"Logout",
          },
        ]
      }
      default: {
        return [
          {
            "routerLink":"/drivers/dashboard",
            "title":"Dashboard",
          },
          {
            "routerLink":"/drivers/manage",
            "title":"Manage Taxis",
          },
          {
            "routerLink":"/drivers/support",
            "title":"Support",
          },
          {
            "routerLink":"/drivers/logout",
            "title":"Logout",
          },
        ]
      }
    }
  }
}

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  providers: [SideNavService]
})
export class SideNavComponent implements OnInit{
  @Input() userType!: string;
  public navData: Array<NavigationData> | undefined;


  constructor(private sideNavService: SideNavService) {
  }

  ngOnInit(): void {
    this.navData = this.sideNavService.getSideNavData(this.userType);
  }
  

}

interface NavigationData {
  routerLink: string;
  title: string;
}


enum UserType {
  Advertiser = "advertiser",
  Driver = "driver",
}