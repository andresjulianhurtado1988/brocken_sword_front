import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogCharacterComponent } from '../dialogs/dialog-character/dialog-character.component';
import { CharacterService } from 'src/app/services/character.service';
import { DialogCharacterFormComponent } from '../dialogs/dialog-character-form/dialog-character-form.component';
import { global_url } from 'src/app/global/url_back';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css'],
})
export class CharacterDetailComponent {
  @Input() the_character: any;

  public selectedFile!: File;
  public character_id: any;
  public url: any;
  public prevImage: any;
  public noImage: string;

  private sanitizer!: DomSanitizer;

  constructor(
    public dialog: MatDialog,
    private _characterService: CharacterService
  ) {
    this.url = global_url.url;
    this.prevImage = null;
    this.noImage = 'assets/img/noimage.png';
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

  openDialogFormCharacter() {
    const dialogRef = this.dialog.open(DialogCharacterFormComponent);
  }

  cargarImagen(event: any) {
    this.selectedFile = <File>event.target.files[0];
    const file = event.target.files[0];

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.prevImage = reader.result;
     
    };
  }

  enviarImagen(id: number) {
    const fd = new FormData();
    this.character_id = id;

    fd.append('image', this.selectedFile, this.selectedFile.name);
    fd.append('id_chacaracter', this.character_id);

    this._characterService.registerCharacterImage(fd).subscribe((resp) => {
     
    });
  }
}
