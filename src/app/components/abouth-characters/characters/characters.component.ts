import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CharacterService } from 'src/app/services/character.service';
import { global_url } from 'src/app/global/url_back';
import { DialogCharacterFormComponent } from '../dialogs/dialog-character-form/dialog-character-form.component';
import { DialogCharacterComponent } from '../dialogs/dialog-character/dialog-character.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CharacterAlertComponent } from '../alerts/character-alert/character-alert.component';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
})
export class CharactersComponent {
  characters: any[] = [];
  public id_character: number;
  public status: string;
  public the_character: any[] = [];
  public url: any;
  public prevImage: any;
  public noImage: string;
  public inavilityButton: boolean = true;
  public selectedFile!: File;
  public durationInSeconds = 5;

  constructor(
    private _characterService: CharacterService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) {
    this.id_character = 1;
    this.status = '';
    this.the_character = [];
    this.url = global_url.url;
    this.prevImage = null;
    this.noImage = 'assets/img/noimage.png';
  }

  ngOnInit(): void {
    this.getCharacters();
    this.showCharacter(this.id_character);
  }

  getCharacters() {
    this._characterService.getCharacters().subscribe((response) => {
      this.characters = response.characters;
      this.prevImage = null;
    });
  }

  showCharacter(id_character: number) {
    this.inavilityButton = true;
    this.id_character = id_character;

    this._characterService.showCharacter(id_character).subscribe((response) => {
      this.the_character = response.characters;
    });
    this.prevImage = null;
  }

  cargarImagen(event: any) {
    this.inavilityButton = false;
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
    fd.append('id_chacaracter', id);

    this._characterService.registerCharacterImage(fd).subscribe((resp) => {
      if (resp.status == 'success') {
        this.status = resp.status;

        this.openSnackBar();
        this.showCharacter(this.id_character);
        this.getCharacters();
      } else {
        this.status = 'error';
      }
    });
  }

  openSnackBar() {
    this._snackBar.openFromComponent(CharacterAlertComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }

  openDialogFormCharacter() {
    const dialogRef = this.dialog.open(DialogCharacterFormComponent);
  }

  openDialogBiography(id: number) {
    this._characterService.showCharacter(id).subscribe((response) => {
      const dialogRef = this.dialog.open(DialogCharacterComponent, {
        data: {
          data_character: response.characters,
        },
      });
    });
  }
}
