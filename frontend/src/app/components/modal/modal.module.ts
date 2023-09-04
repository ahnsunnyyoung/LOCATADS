import { NgModule } from "@angular/core";
import { MatDialogModule } from '@angular/material/dialog';
import { ModalService } from "src/app/components/modal/service/modal.service";
import { ModalComponent } from "./modal.component";

@NgModule({
	declarations: [ModalComponent],
	exports: [ModalComponent],
	imports: [MatDialogModule],
  providers: [ModalService],
})
export class ModalModule {}
