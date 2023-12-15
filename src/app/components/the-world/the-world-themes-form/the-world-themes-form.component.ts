import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ThemesWorldService } from 'src/app/services/themes-world.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TheWorldInfoComponent } from '../the-world-info/the-world-info.component';

@Component({
  selector: 'app-the-world-themes-form',
  templateUrl: './the-world-themes-form.component.html',
  styleUrls: ['./the-world-themes-form.component.css'],
})
export class TheWorldThemesFormComponent {
  public form: FormGroup;
  public status: string = '';
  public durationInSeconds: number = 5;

  constructor(
    private _snackBar: MatSnackBar,
    public _themeWorldService: ThemesWorldService,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<TheWorldThemesFormComponent>,
    @Inject(MAT_DIALOG_DATA) public id_theme_world: any
  ) {
    this.form = this.fb.group({
      allDescription: ['', [Validators.required]],
      title: ['', [Validators.required]],
    });
  }
  onSubmit() {
    this.form.value.id_img_theme_world = this.id_theme_world.id_theme_world;
    console.log(this.form.value);
    this._themeWorldService
      .createThemeWorld(this.form.value)
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
