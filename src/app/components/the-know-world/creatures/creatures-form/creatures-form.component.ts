import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { LandService } from 'src/app/services/land.service';

@Component({
  selector: 'app-creatures-form',
  templateUrl: './creatures-form.component.html',
  styleUrls: ['./creatures-form.component.css'],
  providers: [LandService],
})
export class CreaturesFormComponent {
  public landsNames: any[] = [];
  constructor(
    private _landService: LandService,
    public dialogRef: MatDialogRef<CreaturesFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this._landService.getAllLands().subscribe((resp) => {
      this.landsNames = resp.lands;
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
