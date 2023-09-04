import { Injectable, TemplateRef, Type } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";

@Injectable()
export class ModalService {

  private dialogRef!: MatDialogRef<any, any>;

  constructor(
    public dialog: MatDialog
  ) {}

  public openModal(componentType: Type<any>): void {
    this.dialogRef = this.dialog.open(componentType, { width: '80%' });
  }

  public openModalTpl(template: TemplateRef<any>): void {
    this.dialogRef = this.dialog.open(template, { width: '80%' });
  }

  public close(): void {
    this.dialogRef.close();
  }

  public getDialogRef(): MatDialogRef<any, any> {
    return this.dialogRef;
  }
}
