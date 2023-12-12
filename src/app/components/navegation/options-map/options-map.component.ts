import { Component } from '@angular/core';

@Component({
  selector: 'app-options-map',
  templateUrl: './options-map.component.html',
  styleUrls: ['./options-map.component.css'],
})
export class OptionsMapComponent {
  public mapOptions: any[] = [];
  constructor() {
    this.mapOptions = [
      {
        routes: '/lands',
        options: 'The Lands',
      },
      {
        routes: '/mystical-places',
        options: 'Mystical Places',
      },
    ];
  }
}
