import { Component, inject } from '@angular/core';
import { MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'app-the-world-info',
  templateUrl: './the-world-info.component.html',
  styleUrls: ['./the-world-info.component.css'],
})
export class TheWorldInfoComponent {
  snackBarRef = inject(MatSnackBarRef);
}
