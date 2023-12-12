import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { global_url } from 'src/app/global/url_back';
import { LandService } from 'src/app/services/land.service';

@Component({
  selector: 'app-mystical-places-image-form',
  templateUrl: './mystical-places-image-form.component.html',
  styleUrls: ['./mystical-places-image-form.component.css'],
  providers: [LandService],
})
export class MysticalPlacesImageFormComponent {
  public mysticalPLaceInfo: any[] = [];
  public noImage: string = 'assets/img/noimage.png';
  public url: any = global_url.url;
  public prevImage: any = null;
  public selectedFile!: File;
  constructor(
    private _landService: LandService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<MysticalPlacesImageFormComponent>
  ) {
    this._landService
      .getMysticalPlace(data['mystical_place_id'])
      .subscribe((resp) => {
        this.mysticalPLaceInfo = resp.mystical_place;
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
    fd.append('mystical_place_id', id);
    this._landService.registerMysticalPlaceImage(fd).subscribe((resp) => {
      this.dialogRef.close();
    });
  }
}
