import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ReligionService } from 'src/app/services/religion.service';

@Component({
  selector: 'app-dialog-religion',
  templateUrl: './dialog-religion.component.html',
  styleUrls: ['./dialog-religion.component.css'],
})
export class DialogReligionComponent {
  public order_id: number;
  public option: number;
  public data: any[] = [];
  public label_text: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public info_order: any,
    public _religionService: ReligionService
  ) {
    this.order_id = info_order.id_order;
    this.option = info_order.option;
    this.data = [];
    this.label_text = '';

    this.getInfo(this.order_id, this.option);
  }

  getInfo(order_id: number, option: number) {
    if (option == 1) {
      this._religionService.getJudge(order_id).subscribe((datos) => {
        this.label_text = "Judges";
        this.data = datos.info;
        console.log(this.data, 'opcion uno');
      });
    } else {
      this._religionService.getDeity(order_id).subscribe((datos) => {
        this.label_text = "Deitys";
        this.data = datos.info;
        console.log(this.data, 'opcion dos');
      });
    }
  }
}
