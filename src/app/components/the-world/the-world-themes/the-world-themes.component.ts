import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ThemesWorldService } from 'src/app/services/themes-world.service';
import { TheWorldInfoComponent } from '../the-world-info/the-world-info.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-the-world-themes',
  templateUrl: './the-world-themes.component.html',
  styleUrls: ['./the-world-themes.component.css'],
})
export class TheWorldThemesComponent {
  public id_theme_world: any;
  public form: FormGroup;
  public durationInSeconds: number = 5;
  public status: string = '';
  public themeWorld: any[] = [];
  public Ifthemes: boolean = false;

  constructor(
    public _themeWorldService: ThemesWorldService,
    private _route: ActivatedRoute,
    private _router: Router,
    private fb: FormBuilder,
    private _snackBar: MatSnackBar
  ) {
    this.form = this.fb.group({});
    this._route.params.subscribe((params) => {
      this.id_theme_world = params['id'];
    });

    this.getThemesWorld(this.id_theme_world);

    this.form = this.fb.group({
      allDescription: ['', [Validators.required]],
      title: ['', [Validators.required]],
    });
  }

  getThemesWorld(id_theme_world: number) {
    this._themeWorldService.getThemesWorld(id_theme_world).subscribe((data) => {
      this.themeWorld = data.themeWorld;
      if (this.themeWorld.length > 0) {
        this.Ifthemes = true;
      }
    });
  }

  onSubmit() {
    this.form.value.id_img_theme_world = this.id_theme_world;
    this._themeWorldService
      .createThemeWorld(this.form.value)
      .subscribe((resp) => {
        if (resp.status == 'success') {
          this.getThemesWorld(this.id_theme_world);
          this.openSnackBar();
          this.form.reset();
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

  returnToThemesWorld() {
    this._router.navigate(['the-world']);
  }
}
