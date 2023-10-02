import { Component, inject } from '@angular/core';
import { MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'app-character-alert',
  templateUrl: './character-alert.component.html',
  styleUrls: ['./character-alert.component.css'],
})
export class CharacterAlertComponent {
  snackBarRef = inject(MatSnackBarRef);
}
