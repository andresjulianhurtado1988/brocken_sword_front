import { Component, inject } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { dashboardData } from 'src/app/global/globalDashboard';
import { OptionsMapComponent } from '../options-map/options-map.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  public dashboardData: any[] = [];

  constructor(public dialog: MatDialog) {
    this.dashboardData = dashboardData.myDashBoard;
  }

  private breakpointObserver = inject(BreakpointObserver);

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      return this.dashboardData;
    })
  );

  openOptions(): void {
    const dialogRef = this.dialog.open(OptionsMapComponent);

    dialogRef.afterClosed().subscribe((result) => {});
  }
}
