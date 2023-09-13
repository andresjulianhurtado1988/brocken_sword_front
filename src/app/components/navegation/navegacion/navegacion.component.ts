import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css']
})
export class NavegacionComponent {
  private breakpointObserver = inject(BreakpointObserver);

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      /* if (matches) {
          return [
            { title: 'Card 1', cols: 1, rows: 1 },
            { title: 'Card 2', cols: 1, rows: 1 },
            { title: 'Card 3', cols: 1, rows: 1 },
            { title: 'Card 4', cols: 1, rows: 1 }
          ];
        }
  */
      return [
        { title: 'Card number uan', cols: 1, rows: 1, content: 'hola mundo' },
        { title: 'Card number tu', cols: 1, rows: 1, content: 'hola mundo' },
        { title: 'Card number tri', cols: 2, rows: 1, content: 'hola mundo' },
        { title: 'Card number for', cols: 2, rows: 1, content: 'hola mundo' },
      ];
    })
  );
}
