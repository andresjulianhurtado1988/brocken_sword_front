import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { global_url } from 'src/app/global/url_back';
import { ThemesWorldService } from 'src/app/services/themes-world.service';

@Component({
  selector: 'app-the-world',
  templateUrl: './the-world.component.html',
  styleUrls: ['./the-world.component.css'],
})
export class TheWorldComponent {
  public themesWorld: any[] = [];
  public url: any;

  constructor(
    private _themesWorldService: ThemesWorldService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.themesWorld = [];
    this.url = global_url.url + 'themesWorld/getThemesWorldAllImages/';

    this.themesWorldAll();
  }

  themesWorldAll() {
    this._themesWorldService.getThemesWorldAll().subscribe((resp) => {
      this.themesWorld = resp.themes_world;
    });
  }

  choseThemeWorld(id: number) {
    this._router.navigate(['the-world-themes/' + id]);
  }
}
