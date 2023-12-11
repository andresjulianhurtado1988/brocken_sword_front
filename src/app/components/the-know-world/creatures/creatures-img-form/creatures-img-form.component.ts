import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogCharacterFormComponent } from 'src/app/components/abouth-characters/dialogs/dialog-character-form/dialog-character-form.component';
import { global_url } from 'src/app/global/url_back';
import { WorldService } from 'src/app/services/world.service';

@Component({
  selector: 'app-creatures-img-form',
  templateUrl: './creatures-img-form.component.html',
  styleUrls: ['./creatures-img-form.component.css'],
})
export class CreaturesImgFormComponent {
  public creatureInfo: any[] = [];
  public noImage: string = 'assets/img/noimage.png';
  public url: any = global_url.url;
  public prevImage: any = null;
  public selectedFile!: File;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<DialogCharacterFormComponent>,
    private _worlService: WorldService
  ) {
    this._worlService.getCreature(data['creature_id']).subscribe((resp) => {
      this.creatureInfo = resp.creatures;
    });
  }

  cargarImagen(event: any) {
    this.selectedFile = <File>event.target.files[0];
    let file = event.target.files[0];

    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.prevImage = reader.result;
    };
  }

  enviarImagen(id: string) {
    let fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name);
    fd.append('creature_id', id);
    this._worlService.registerCreatureImage(fd).subscribe((resp) => {
      this.dialogRef.close();
    });
  }
}
