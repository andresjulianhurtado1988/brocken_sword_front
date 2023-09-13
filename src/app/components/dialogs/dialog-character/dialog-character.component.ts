import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-character',
  templateUrl: './dialog-character.component.html',
  styleUrls: ['./dialog-character.component.css'],
})
export class DialogCharacterComponent {
  public biography_character: any;

  constructor(@Inject(MAT_DIALOG_DATA) public info_character: any) {
    this.biography_character = info_character['data_character'];
  }
}
