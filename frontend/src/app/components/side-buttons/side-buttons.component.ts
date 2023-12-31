import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-side-buttons',
  templateUrl: './side-buttons.component.html',
  styleUrls: ['./side-buttons.component.scss']
})
export class SideButtonsComponent {
  @Input() title!: string;
  @Input() routerLink!: string;
}
