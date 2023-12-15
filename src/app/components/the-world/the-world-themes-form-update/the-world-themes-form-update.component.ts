import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ThemesWorldService } from 'src/app/services/themes-world.service';
import { TheWorldInfoComponent } from '../the-world-info/the-world-info.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-the-world-themes-form-update',
  templateUrl: './the-world-themes-form-update.component.html',
  styleUrls: ['./the-world-themes-form-update.component.css'],
})
export class TheWorldThemesFormUpdateComponent {
  public form: FormGroup;
  public status: string = '';
  public durationInSeconds: number = 5;
  constructor(
    private _snackBar: MatSnackBar,
    public _themeWorldService: ThemesWorldService,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<TheWorldThemesFormUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public id_theme: any
  ) {
    this.form = this.fb.group({
      allDescription: [''],
      title: [''],
    });

    this.uploadData();
  }

  uploadData() {
    this._themeWorldService
      .getThemesWorldUpdate(this.id_theme.id_theme)
      .subscribe((resp) => {
        this.form.reset({
          title: resp.themeWorld[0]['title'],
          allDescription: resp.themeWorld[0]['allDescription'],
        });
      });
  }

  onSubmit() {
    this.form.value.id = this.id_theme.id_theme;

    this._themeWorldService
      .updateThemesWorld(this.form.value)
      .subscribe((resp) => {
        if (resp.status == 'success') {
          this.form.reset();
          this.openSnackBar();
        } else {
          this.status = 'error';
        }
      });
  }

  openSnackBar() {
    this._snackBar.openFromComponent(TheWorldInfoComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }
}
