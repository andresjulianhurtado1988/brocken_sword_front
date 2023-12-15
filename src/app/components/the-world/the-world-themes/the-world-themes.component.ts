import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ThemesWorldService } from 'src/app/services/themes-world.service';
import { TheWorldInfoComponent } from '../the-world-info/the-world-info.component';

import { TheWorldThemesFormComponent } from '../the-world-themes-form/the-world-themes-form.component';
import { MatDialog } from '@angular/material/dialog';
import { TheWorldThemesFormUpdateComponent } from '../the-world-themes-form-update/the-world-themes-form-update.component';

@Component({
  selector: 'app-the-world-themes',
  templateUrl: './the-world-themes.component.html',
  styleUrls: ['./the-world-themes.component.css'],
})
export class TheWorldThemesComponent {
  public id_theme_world: any;
  public theme_world: any[] = [];
  public status: string = '';
  public themeWorld: any[] = [];
  public Ifthemes: boolean = true;
  public data: any;

  public theme: string = '';

  constructor(
    public _themeWorldService: ThemesWorldService,
    private _route: ActivatedRoute,
    private _router: Router,
    public dialog: MatDialog
  ) {
    this._route.params.subscribe((params) => {
      this.id_theme_world = params['id'];
    });

    this.getThemesWorld(this.id_theme_world);

    this._themeWorldService.getThemesWorldAll().subscribe((resp) => {
      resp.themes_world.forEach((theme: any) => {});

      let themeFilter = resp.themes_world.filter(
        (data: any) => data.id == this.id_theme_world
      );

      this.theme = themeFilter[0]['theme_world_title'];
    });
  }

  getThemesWorld(id_theme_world: number) {
    this._themeWorldService.getThemesWorld(id_theme_world).subscribe((data) => {
      this.themeWorld = data.themeWorld;
      if (this.themeWorld.length > 0) {
        this.Ifthemes = false;
      }
    });
  }

  openFormThemeWorld(id_theme_world: number) {
    const dialogRef = this.dialog.open(TheWorldThemesFormComponent, {
      data: {
        id_theme_world: id_theme_world,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.getThemesWorld(this.id_theme_world);
    });
  }

  returnToThemesWorld() {
    this._router.navigate(['the-world']);
  }

  openFormThemeWorldUpdate(id_theme: number) {
    const dialogRef = this.dialog.open(TheWorldThemesFormUpdateComponent, {
      data: {
        id_theme: id_theme,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.getThemesWorld(this.id_theme_world);
    });
  }

  deleteThemeWorld(id_theme: number) {
    this._themeWorldService.deleteThemeWorld(id_theme).subscribe((resp) => {
      this.getThemesWorld(this.id_theme_world);
    });
  }
}
