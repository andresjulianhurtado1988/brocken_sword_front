import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LandService } from 'src/app/services/land.service';

@Component({
  selector: 'app-lands-info',
  templateUrl: './lands-info.component.html',
  styleUrls: ['./lands-info.component.css'],
  providers: [LandService],
})
export class LandsInfoComponent {
  public lands: any[] = [];
  public the_land: any[] = [];
  public status: string;
  public displayedColumns: string[] = [];
  public id_land: number;

  constructor(private _landService: LandService) {
    this.status = '';
    this.lands = [];
    this.the_land = [];
    this.id_land = 1;
  }

  ngOnInit(): void {
    this.getLands();
    this.showLand(this.id_land);
  }

  getLands() {
    this._landService.getLands().subscribe(
      (response) => {
        if (response.status == 'success') {
          this.lands = response.lands;

          this.displayedColumns = ['position', 'name'];
        } else {
          this.status = 'error';
        }
      },
      (error) => {
        this.status = 'error';
      }
    );
  }

  showLand(id_land: number) {
    this._landService.showLand(id_land).subscribe(
      (response) => {
        if (response.status == 'success') {
          this.the_land = response.lands;
        } else {
          this.status = 'error';
        }
      },
      (error) => {
        this.status = 'error';
      }
    );
  }
}
