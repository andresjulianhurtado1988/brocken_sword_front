import { Component } from '@angular/core';
import { ThemesWorldService } from 'src/app/services/themes-world.service';

@Component({
  selector: 'app-the-world',
  templateUrl: './the-world.component.html',
  styleUrls: ['./the-world.component.css'],
})
export class TheWorldComponent {
  public themesWorld: any[] = [];
  public longText: string =
    'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting';
  constructor(private _themesWorldService: ThemesWorldService) {
    this.themesWorld = [];
    this.themesWorldAll();
  }

  themesWorldAll() {
    this._themesWorldService.getThemesWorldAll().subscribe((resp) => {
      this.themesWorld = resp.themes_world;
      console.log(this.themesWorld);
    });
  }
}
