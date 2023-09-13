import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-land',
  templateUrl: './dialog-land.component.html',
  styleUrls: ['./dialog-land.component.css'],
})
export class DialogLandComponent {
  public biography_land: any;

  constructor(@Inject(MAT_DIALOG_DATA) public info_land: any) {
    this.biography_land = info_land['data_land'];
  }
}
