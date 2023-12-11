import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { global_url } from 'src/app/global/url_back';
import { WorldService } from 'src/app/services/world.service';

@Component({
  selector: 'app-creatures-img-galery',
  templateUrl: './creatures-img-galery.component.html',
  styleUrls: ['./creatures-img-galery.component.css'],
})
export class CreaturesImgGaleryComponent {
  public creatureImg: any[] = [];
  public noImage: string = 'assets/img/noimage.png';
  public url: any = global_url.url;


  constructor(
    public dialogRef: MatDialogRef<CreaturesImgGaleryComponent>,
    private _worlService: WorldService,
    @Inject(MAT_DIALOG_DATA) public info_creature: any
  ) {
    this.getCreatureImageAll(info_creature.creature_id);
  }

  getCreatureImageAll(creature_id: number) {
    this._worlService.getCreatureImageAll(creature_id).subscribe((resp) => {

        this.creatureImg = resp.creatures;

    });
  }
}
