import { Component } from '@angular/core';
import { Taxis } from 'src/app/model/mock-taxi';
import { Router } from '@angular/router';

@Component({
  selector: 'app-drivers-manage',
  templateUrl: './drivers-manage.component.html',
  styleUrls: ['./drivers-manage.component.scss']
})
export class DriversManageComponent {
  constructor(private router: Router) { }
	taxiData = Taxis;

  
  onAdd() {
    this.router.navigate(['/drivers/add']);
  }

}
