import { Component, inject } from '@angular/core';
import { MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'app-mystical-places-alert',
  templateUrl: './mystical-places-alert.component.html',
  styleUrls: ['./mystical-places-alert.component.css'],
})
export class MysticalPlacesAlertComponent {
  snackBarRef = inject(MatSnackBarRef);
}
