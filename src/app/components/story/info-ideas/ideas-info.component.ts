import { Component, inject } from '@angular/core';
import { MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'app-ideas-info',
  templateUrl: './ideas-info.component.html',
  styleUrls: ['./ideas-info.component.css']
})
export class IdeasInfoComponent {
  snackBarRef = inject(MatSnackBarRef);
}
