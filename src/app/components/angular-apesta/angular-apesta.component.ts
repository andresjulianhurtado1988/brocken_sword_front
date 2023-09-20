import { Component } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-angular-apesta',
  templateUrl: './angular-apesta.component.html',
  styleUrls: ['./angular-apesta.component.css'],
})
export class AngularApestaComponent {
  public selectedFile!: File;
  public fileCharacter: any[] = [];
  constructor(private _characterService: CharacterService) {
    this.fileCharacter = [];
  }

  cargarImagen(event: any) {
    this.selectedFile = <File>event.target.files[0];
  }

  enviarImagen() {
    const fd = new FormData();
    const id_character = 1;

    fd.append('image', this.selectedFile, this.selectedFile.name);
    fd.append('id_chacaracter', '5');

    this._characterService.registerCharacterImage(fd).subscribe((resp) => {});
  }
}
