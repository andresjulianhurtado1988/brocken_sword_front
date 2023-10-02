import { Component, inject } from '@angular/core';
import { MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'app-chapter-alert',
  templateUrl: './chapter-alert.component.html',
  styleUrls: ['./chapter-alert.component.css'],
})
export class ChapterAlertComponent {
  snackBarRef = inject(MatSnackBarRef);
}
