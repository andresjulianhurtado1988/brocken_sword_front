import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CreaturesAlertComponent } from '../creatures-alert/creatures-alert.component';
import { LandService } from 'src/app/services/land.service';
import { WorldService } from 'src/app/services/world.service';

@Component({
  selector: 'app-creatures-form',
  templateUrl: './creatures-form.component.html',
  styleUrls: ['./creatures-form.component.css'],
  providers: [LandService],
})
export class CreaturesFormComponent {
  public form: FormGroup;
  public status: string = '';
  public durationInSeconds: number = 5;
  public dataLand: any[] = [];
  constructor(
    private _snackBar: MatSnackBar,
    private _landService: LandService,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<CreaturesFormComponent>,
    private _worldService: WorldService
  ) {
    this.form = this.fb.group({
      description: ['', [Validators.required]],
      land_id: [],
      creature_name: ['', [Validators.required]],
    });

    this._landService.getAllLands().subscribe((resp) => {
      this.dataLand = resp.lands;
    });
  }
  onSubmit() {
    console.log(this.form.value);
    this._worldService.createCreature(this.form.value).subscribe((resp) => {
      if (resp.status == 'success') {
        this.form.reset();
        this.openSnackBar();
      } else {
        this.status = 'error';
      }
    });
  }

  openSnackBar() {
    this._snackBar.openFromComponent(CreaturesAlertComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }
}
