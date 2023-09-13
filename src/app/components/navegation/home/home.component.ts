import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
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
