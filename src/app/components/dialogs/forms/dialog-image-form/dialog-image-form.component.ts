import { Component, Inject } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-imagen-form',
  templateUrl: './dialog-image-form.component.html',
  styleUrls: ['./dialog-image-form.component.css'],
})
export class DialogImagenFormComponent {
  public status: string;
  public character_id: any;
  public selectedFile!: File;
  public fileCharacter: any[] = [];

  constructor(
    private _characterService: CharacterService,
    public dialogRef: MatDialogRef<DialogImagenFormComponent>,
    @Inject(MAT_DIALOG_DATA) public id_character: any
  ) {
    this.status = '';

    this.character_id = id_character['id_character'].toString();
  }

  cargarImagen(event: any) {
    this.selectedFile = <File>event.target.files[0];
  }

  enviarImagen() {
    const fd = new FormData();
    const id_character = 1;

    fd.append('image', this.selectedFile, this.selectedFile.name);
    fd.append('id_chacaracter', this.character_id);

    this._characterService.registerCharacterImage(fd).subscribe((resp) => {
      console.log(resp);
    });

    this.dialogRef.close();
  }
}
