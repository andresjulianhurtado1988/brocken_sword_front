import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IdeasService } from 'src/app/services/ideas.service';
import { IdeasInfoComponent } from '../ideas-info/ideas-info.component';
import { WorldService } from 'src/app/services/world.service';
import { CharacterService } from 'src/app/services/character.service';
import { ReligionService } from 'src/app/services/religion.service';
import { LandService } from 'src/app/services/land.service';
import { AboutBookService } from 'src/app/services/about-book.service';

@Component({
  selector: 'app-ideas-form',
  templateUrl: './ideas-form.component.html',
  styleUrls: ['./ideas-form.component.css'],
  providers: [
    WorldService,
    CharacterService,
    ReligionService,
    LandService,
    AboutBookService,
  ],
})
export class IdeasFormComponent {
  public form: FormGroup;
  public aboutThemes: any[] = [];
  public status: string;
  public durationInSeconds = 5;
  public selectedOption: boolean;
  public allData: any[] = [];
  constructor(
    private fb: FormBuilder,
    private ideasService: IdeasService,
    private worldService: WorldService,
    private characterService: CharacterService,
    private religionService: ReligionService,
    private landService: LandService,
    private aboutBookService: AboutBookService,
    public dialogRef: MatDialogRef<IdeasFormComponent>,
    private _snackBar: MatSnackBar
  ) {
    this.selectedOption = true;
    this.form = this.fb.group({});
    this.status = '';
    this.themes();
    this.loadForm();
  }

  loadForm() {
    this.form = this.fb.group({
      themes_id: [''],
      description: ['', [Validators.required]],
    });
  }

  themes() {
    this.ideasService.getThemes().subscribe((resp) => {
      this.aboutThemes = resp.themes;
    });
  }

  selectedTheme(theme_id: any) {
    this.allData = new Array();

    switch (theme_id) {
      case 1:
        this.selectedOption = false;
        this.aboutBookService.getBooks().subscribe((resp) => {
          resp.books.forEach((datos: any) => {
            this.allData.push({
              ['id']: datos['id'],
              ['name']: datos['name'],
            });
          });
          console.log(this.allData);
        });
        break;
      case 2:
        this.selectedOption = false;
        this.characterService.getCharacters().subscribe((resp) => {
          resp.characters.forEach((datos: any) => {
            this.allData.push({
              ['id']: datos['id'],
              ['name']: datos['character_name'],
            });
          });
          console.log(this.allData);

          // console.log(resp);
        });
        break;
      case 3:
        this.selectedOption = false;
        console.log(theme_id);
        break;
      case 4:
        this.selectedOption = false;
        this.landService.getLands().subscribe((resp) => {
          console.log(resp);
        });
        break;
      case 5:
        this.selectedOption = false;
        this.worldService.getMagicSystem().subscribe((resp) => {
          console.log(resp);
        });
        break;
      case 6:
        this.selectedOption = false;
        console.log(theme_id);
        break;
      case 7:
        this.selectedOption = false;
        this.aboutBookService.getProtagonist().subscribe((resp) => {
          console.log(resp);
        });
        break;
      case 8:
        this.selectedOption = false;
        this.worldService.getRaces().subscribe((resp) => {
          console.log(resp);
        });
        break;
      case 9:
        this.selectedOption = false;
        this.religionService.getReligion().subscribe((resp) => {
          console.log(resp);
        });
        break;
      case 10:
        this.selectedOption = false;
        console.log(theme_id);
        break;
    }

    console.log(theme_id);
  }

  onSubmit() {
    console.log(this.form.value);

    this.ideasService.registerIdea(this.form.value).subscribe(
      (response) => {
        if (response.status == 'success') {
          this.status = response.status;
          this.openSnackBar();
          this.dialogRef.close();
        } else {
          this.status = 'error';
        }
      },
      (error) => {
        this.status = 'error';
      }
    );
  }

  openSnackBar() {
    this._snackBar.openFromComponent(IdeasInfoComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }
}
