import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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
import { Ideas } from 'src/app/models/ideas';
import { IdeasComponent } from '../ideas/ideas.component';
import { global_url } from 'src/app/global/url_back';

@Component({
  selector: 'app-list-ideas',
  templateUrl: './list-ideas.component.html',
  styleUrls: ['./list-ideas.component.css'],
  providers: [
    WorldService,
    CharacterService,
    ReligionService,
    LandService,
    AboutBookService,
  ],
})
export class ListIdeasComponent {
  public form: FormGroup;
  public initIdeas: Ideas = {
    aboutThemes: [],
    status: '',
    durationInSeconds: 5,
    selectedOption: true,
    allData: [],
    ideas: [],
  };
  public url: string;
  constructor(
    public dialog: MatDialog,
    private fb: FormBuilder,
    private ideasService: IdeasService,
    private worldService: WorldService,
    private characterService: CharacterService,
    private religionService: ReligionService,
    private landService: LandService,
    private aboutBookService: AboutBookService,
    private _snackBar: MatSnackBar
  ) {
    this.form = this.fb.group({});
    this.url = global_url.url;
    this.themes();
    this.loadForm();

    this.ideasService.getAllIdeas().subscribe((resp) => {
      this.initIdeas.ideas = resp.ideas;
    });
  }

  loadForm() {
    this.form = this.fb.group({
      themes_id: ['', [Validators.required]],
      abouth_id: [''],
      description: ['', [Validators.required]],
    });
  }

  themes() {
    this.ideasService.getThemes().subscribe((resp) => {
      this.initIdeas.aboutThemes = resp.themes;
    });
  }

  selectedTheme(theme_id: any) {
    this.initIdeas.allData = new Array();

    switch (theme_id) {
      case 1:
        this.initIdeas.selectedOption = false;
        this.aboutBookService.getBooks().subscribe((resp) => {
          resp.books.forEach((datos: any) => {
            this.initIdeas.allData.push({
              ['id']: datos['id'],
              ['name']: datos['name'],
            });
          });
          console.log(this.initIdeas.allData);
        });
        break;
      case 2:
        this.initIdeas.selectedOption = false;
        this.characterService.getAllCharacters().subscribe((resp) => {
          resp.charactersNames.forEach((datos: any) => {
            this.initIdeas.allData.push({
              ['id']: datos['id'],
              ['name']: datos['name'],
            });
          });
          console.log(this.initIdeas.allData);
        });

        break;
      case 3:
        this.initIdeas.selectedOption = false;
        this.religionService.getAllJudges().subscribe((resp) => {
          resp.judges.forEach((datos: any) => {
            this.initIdeas.allData.push({
              ['id']: datos['id'],
              ['name']: datos['judge_name'],
            });
          });
          console.log(this.initIdeas.allData);
        });

        break;
      case 4:
        this.initIdeas.selectedOption = false;
        this.landService.getAllLands().subscribe((resp) => {
          resp.lands.forEach((datos: any) => {
            this.initIdeas.allData.push({
              ['id']: datos['id'],
              ['name']: datos['name'],
            });
          });
          console.log(this.initIdeas.allData);
        });
        break;
      case 5:
        this.initIdeas.selectedOption = false;
        this.worldService.getMagicSystem().subscribe((resp) => {
          resp.magic_system.forEach((datos: any) => {
            this.initIdeas.allData.push({
              ['id']: datos['id'],
              ['name']: datos['magic_name'],
            });
          });
          console.log(this.initIdeas.allData);
        });
        break;
      case 6:
        this.initIdeas.selectedOption = false;
        this.religionService.getOrders().subscribe((resp) => {
          resp.orders.forEach((datos: any) => {
            this.initIdeas.allData.push({
              ['id']: datos['id'],
              ['name']: datos['order_name'],
            });
          });
          console.log(this.initIdeas.allData);
        });

        break;
      case 7:
        this.initIdeas.selectedOption = false;
        this.characterService.getProtagonist().subscribe((resp) => {
          resp.protagonist.forEach((datos: any) => {
            this.initIdeas.allData.push({
              ['id']: datos['id'],
              ['name']: datos['name'],
            });
          });
          console.log(this.initIdeas.allData);
        });
        break;
      case 8:
        this.initIdeas.selectedOption = false;
        this.worldService.getRaces().subscribe((resp) => {
          resp.races.forEach((datos: any) => {
            this.initIdeas.allData.push({
              ['id']: datos['id'],
              ['name']: datos['race_name'],
            });
          });
          console.log(this.initIdeas.allData);
        });
        break;
      case 9:
        this.initIdeas.selectedOption = false;
        this.religionService.getOrders().subscribe((resp) => {
          resp.deitiys.forEach((datos: any) => {
            this.initIdeas.allData.push({
              ['id']: datos['id'],
              ['name']: datos['deity'],
            });
          });
          console.log(this.initIdeas.allData);
        });
        break;
      case 10:
        this.initIdeas.selectedOption = true;
        break;
    }
  }

  onSubmit() {
    this.ideasService.registerIdea(this.form.value).subscribe(
      (response) => {
        if (response.status == 'success') {
          this.initIdeas.status = response.status;
          this.themes();
          this.openSnackBar();
        } else {
          this.initIdeas.status = 'error';
        }
      },
      (error) => {
        this.initIdeas.status = 'error';
      }
    );
  }

  openSnackBar() {
    this._snackBar.openFromComponent(IdeasInfoComponent, {
      duration: this.initIdeas.durationInSeconds * 1000,
    });
  }

  allIdeas(theme_id: any) {
    const dialogRef = this.dialog.open(IdeasComponent, {
      data: {
        theme_id: theme_id,
      },
    });
  }

  pdfIdeas(theme_id: any) {
    window.open(this.url + 'ideas/pdfIdeas/' + theme_id);
  }
}
