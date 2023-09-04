import { Component, ViewChild, EventEmitter, Input, Output, OnChanges, SimpleChanges, TemplateRef } from "@angular/core";
import { ModalService } from "src/app/components/modal/service/modal.service";

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html'
})
export class ModalComponent implements OnChanges {
  @ViewChild('customTemplate') customTemplate!: TemplateRef<any>;
  @Input() open = false;
  @Output() openChange = new EventEmitter<boolean>;

  constructor(
    private modalService: ModalService
  ) {}

  public ngOnChanges(changes: SimpleChanges): void {
    if(!changes['isFirstChange']) {
      const { currentValue, previousValue } = changes['open'];
      const isOpening = !previousValue && currentValue;
      const isClosing = previousValue && !currentValue;

      if(isOpening) {
        this.modalService.openModalTpl(this.customTemplate);
        this.modalService
          .getDialogRef()
          .afterClosed()
          .subscribe(() => {
            this.open = false;
            this.openChange.emit(false);
          });
      } else if(isClosing) {
        this.modalService.close();
      }
    }
  }
}
