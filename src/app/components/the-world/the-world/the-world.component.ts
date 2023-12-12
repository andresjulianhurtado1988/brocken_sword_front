import { Component } from '@angular/core';
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

  constructor(private _themesWorldService: ThemesWorldService) {
    this.themesWorld = [];
    this.url = global_url.url + 'themesWorld/getThemesWorldAllImages/';

    this.themesWorldAll();
  }

  themesWorldAll() {
    this._themesWorldService.getThemesWorldAll().subscribe((resp) => {
      this.themesWorld = resp.themes_world;
      console.log(this.themesWorld);
    });
  }
}
