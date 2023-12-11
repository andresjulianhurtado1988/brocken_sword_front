import { Component, Inject } from '@angular/core';
import { DialogData } from '../componente-padre/componente-padre.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { global_url } from 'src/app/global/url_back';
import { WorldService } from 'src/app/services/world.service';

@Component({
  selector: 'app-componente-hijo',
  templateUrl: './componente-hijo.component.html',
  styleUrls: ['./componente-hijo.component.css'],
})
export class ComponenteHijoComponent {
  public creatureInfo: any[] = [];
  public noImage: string = 'assets/img/noimage.png';
  public url: any = global_url.url;
  public prevImage: any = null;
  public selectedFile!: File;

  constructor(
    public _worlService: WorldService,
    public dialogRef: MatDialogRef<ComponenteHijoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
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
    // let fd = new FormData();
    // fd.append('image', this.selectedFile, this.selectedFile.name);
    // fd.append('creature_id', id);
    // this._worlService.registerCreatureImage(fd).subscribe((resp) => {
    //   this.dialogRef.close();
    // });
  }
}
