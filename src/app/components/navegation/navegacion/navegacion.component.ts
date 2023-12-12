import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css'],
})
export class NavegacionComponent {
  public dashboardOptions: any[] = [];

  constructor() {
    this.dashboardOptions = [
      {
        routes: '/magic-system',
        options: 'Magic System',
      },
      {
        routes: '/religion',
        options: 'The Orders (Religion)',
      },
      {
        routes: '/races',
        options: 'Races',
      },
      {
        routes: '/creatures',
        options: 'Creatures',
      },
    ];
  }

  private breakpointObserver = inject(BreakpointObserver);

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      return [
        { title: 'Card number uan', cols: 1, rows: 1, content: 'hola mundo' },
        { title: 'Card number tu', cols: 1, rows: 1, content: 'hola mundo' },
        { title: 'Card number tri', cols: 2, rows: 1, content: 'hola mundo' },
        { title: 'Card number for', cols: 2, rows: 1, content: 'hola mundo' },
      ];
    })
  );
}
