import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ReligionService } from 'src/app/services/religion.service';
import { DialogReligionComponent } from '../../dialogs/dialog-religion/dialog-religion.component';

@Component({
  selector: 'app-religion',
  templateUrl: './religion.component.html',
  styleUrls: ['./religion.component.css'],
})
export class ReligionComponent {
  orders: any[] = [];

  constructor(
    public dialog: MatDialog,
    private _religionService: ReligionService
  ) {
    this.orders = [];
  }

  ngOnInit(): void {
    this._religionService.getReligion().subscribe((resp) => {
      this.orders = resp.religion;
    });
  }

  openDialogJudges(id: number) {
    const dialogRef = this.dialog.open(DialogReligionComponent, {
      data: {
        id_order: id,
        option: 1,
      },
    });
  }
  openDialogDeity(id: number) {
    const dialogRef = this.dialog.open(DialogReligionComponent, {
      data: {
        id_order: id,
        option: 2,
      },
    });
  }
}
