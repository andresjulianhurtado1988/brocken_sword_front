import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { global_url } from 'src/app/global/url_back';
import { LandService } from 'src/app/services/land.service';
import { MatTableDataSource } from '@angular/material/table';
import { MysticalPlacesAlertComponent } from '../mystical-places-alert/mystical-places-alert.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MysticalPlacesImageFormComponent } from '../mystical-places-image-form/mystical-places-image-form.component';
import { MatDialog } from '@angular/material/dialog';
import { MysticalPlacesGalleryComponent } from '../mystical-places-gallery/mystical-places-gallery.component';

@Component({
  selector: 'app-mystical-places',
  templateUrl: './mystical-places.component.html',
  styleUrls: ['./mystical-places.component.css'],
  providers: [LandService],
})
export class MysticalPlacesComponent {
  public form: FormGroup;
  public allLandsNames: any[] = [];
  public selectedOption: boolean;
  public selectedFile!: File;
  public noImage: string = 'assets/img/noimage.png';
  public rectangularNoImage: string = 'assets/img/rectangularNoImage.jpg';
  public url: any = global_url.url;
  public prevImage: any = null;
  public dataSource: any;
  public getAllMysticalPlaces: any[] = [];
  public mysticalPlacesColumns: any[] = [];
  public status: string = '';
  public durationInSeconds: number = 5;

  constructor(
    private fb: FormBuilder,
    private _landService: LandService,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {
    this.mysticalPlacesColumns = ['mystical_place_name', 'land_name', 'id'];
    this.form = this.fb.group({});

    this.selectedOption = false;
    this._landService.getAllLands().subscribe((resp) => {
      this.allLandsNames = resp.lands;
    });
  }

  ngOnInit(): void {
    this.getAllmysticalPlaces();
    this.loadForm();
  }

  loadForm() {
    this.form = this.fb.group({
      mystical_place_name: ['', [Validators.required]],
      land_name_id: ['', [Validators.required]],
      description: ['', [Validators.required]],
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getAllmysticalPlaces() {
    this._landService.getAllMysticalPlaces().subscribe((resp) => {
      this.getAllMysticalPlaces = resp.mysticalPlaces;
      this.allMysticalPlaces(this.getAllMysticalPlaces);
    });
  }

  allMysticalPlaces(getAllMysticalPlaces: any) {
    this.dataSource = new MatTableDataSource(getAllMysticalPlaces);
  }

  onSubmit() {
    this._landService.registerMysticalPlace(this.form.value).subscribe(
      (response) => {
        if (response.status == 'success') {
          this.status = response.status;
          this.form.reset();
          this.getAllmysticalPlaces();
          this.openSnackBar();
        } else {
          this.status = 'error';
        }
      },
      (error) => {
        this.status = 'error';
      }
    );
  }

  uploadImage(event: any) {
    this.selectedFile = <File>event.target.files[0];
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.prevImage = reader.result;
    };
  }

  openNewImageMysticalPlace(mystical_place_id: number) {
    const dialogRef = this.dialog.open(MysticalPlacesImageFormComponent, {
      data: {
        mystical_place_id: mystical_place_id,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.getAllmysticalPlaces();
      this.openSnackBar();
    });
  }

  openGalleryMysticalPlace(mystical_place_id: number) {
    this.dialog.open(MysticalPlacesGalleryComponent, {
      data: {
        mystical_place_id: mystical_place_id,
      },
    });
  }

  openSnackBar() {
    this._snackBar.openFromComponent(MysticalPlacesAlertComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }
}
