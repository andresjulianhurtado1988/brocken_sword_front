import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogCharacterComponent } from '../../dialogs/dialog-character/dialog-character.component';
import { CharacterService } from 'src/app/services/character.service';
import { CharacterFormComponent } from '../../dialogs/forms/character-form/character-form.component';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css'],
})
export class CharacterDetailComponent {
  @Input() the_character: any;
  public status: string;

  constructor(
    public dialog: MatDialog,
    private _characterService: CharacterService
  ) {
    this.status = '';
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
    const dialogRef = this.dialog.open(CharacterFormComponent);
  }
}

//C0C-9C7-3DD
