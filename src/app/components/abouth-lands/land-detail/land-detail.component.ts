import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogLandComponent } from '../../dialogs/dialog-land/dialog-land.component';
import { LandService } from 'src/app/services/land.service';

@Component({
  selector: 'app-land-detail',
  templateUrl: './land-detail.component.html',
  styleUrls: ['./land-detail.component.css'],
})
export class LandDetailComponent {
  @Input() the_land: any;
  public status: string;

  constructor(public dialog: MatDialog, private _landService: LandService) {
    this.status = '';
  }

  openDialogBio(id: number) {
    this._landService.showLand(id).subscribe((response) => {
      const dialogRef = this.dialog.open(DialogLandComponent, {
        data: {
          data_land: response.lands,
        },
      });
    });
  }
}
