import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { global_url } from 'src/app/global/url_back';
import { LandService } from 'src/app/services/land.service';

@Component({
  selector: 'app-mystical-places-gallery',
  templateUrl: './mystical-places-gallery.component.html',
  styleUrls: ['./mystical-places-gallery.component.css'],
  providers: [LandService],
})
export class MysticalPlacesGalleryComponent {
  public mysticalPlaceImg: any[] = [];
  public url: any = global_url.url;

  constructor(
    public dialogRef: MatDialogRef<MysticalPlacesGalleryComponent>,
    private _landService: LandService,
    @Inject(MAT_DIALOG_DATA) public info_mystical_place: any
  ) {
    this.getMysticalPlaceImages(info_mystical_place.mystical_place_id);
  }

  getMysticalPlaceImages(mystical_place_id: number) {
    this._landService
      .getMysticalPlaceAllImages(mystical_place_id)
      .subscribe((resp) => {
        this.mysticalPlaceImg = resp.mystical_place;

        console.log(this.mysticalPlaceImg);
      });
  }
}
