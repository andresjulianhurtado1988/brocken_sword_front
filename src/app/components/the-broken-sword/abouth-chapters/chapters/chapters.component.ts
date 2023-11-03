import { Component } from '@angular/core';
import { WorldService } from 'src/app/services/world.service';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { ChapterAlertComponent } from '../chapter-alert/chapter-alert.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ChapterDetailComponent } from '../chapter-detail/chapter-detail.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChapterReadComponent } from '../chapter-read/chapter-read.component';

@Component({
  selector: 'app-chapters',
  templateUrl: './chapters.component.html',
  styleUrls: ['./chapters.component.css'],
})
export class ChaptersComponent {
  public interludes: any[] = [];
  public protagonist: any[] = [];
  public chaptersByCharacter: any[] = [];
  public book_id: any;
  public status: string;
  public durationInSeconds = 5;
  public form: FormGroup;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _worlService: WorldService,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog,
    private fb: FormBuilder
  ) {
    this._route.params.subscribe((params) => {
      this.book_id = params['id'];
    });

    this.form = this.fb.group({});

    this.protagonist = [];
    this.interludes = [];
    this.chaptersByCharacter = [];
    this.status = '';

    this.getChaptersByCharacter(this.book_id, 1);
    this.loadForm();
    this.loadData();
  }

  loadForm() {
    this.form = this.fb.group({
      // el formbuilder es un objeto
      name: ['', [Validators.required, Validators.minLength(5)]], // es un arreglo por que tendrá el valor por defecto, como segundo argumento las validaciones sincronas, tercer argumento validaciones asíncronas
      protagonist_id: ['', Validators.required],
      description: [''],
      pages: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      book_id: ['', Validators.required],
    });
  }

  loadData() {
    this.form.reset({
      name: '',
      protagonist_id: 1,
      description: '',
      pages: 0,
      book_id: this.book_id,
    });
  }

  onSubmit() {
    this._worlService.registerChapter(this.form.value).subscribe(
      (response) => {
        let book = this.form.value.book_id;
        let protagonist = this.form.value.protagonist_id;
        if (response.status == 'success') {
          this.status = response.status;
          this.getChaptersByCharacter(book, protagonist);
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

  getChaptersByCharacter(book_id: number, character_id: number) {
    this._worlService
      .getChaptersByCharacter(book_id, character_id)
      .subscribe((resp) => {
        this.chaptersByCharacter = resp.chaptersByCharacter;
      });
  }

  openSnackBar() {
    this._snackBar.openFromComponent(ChapterAlertComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }

  openDialogChapterDetail(id: number) {
    const dialogRef = this.dialog.open(ChapterDetailComponent, {
      data: {
        chapter_id: id,
      },
    });
  }

  openDialogChapterRead(id: number) {
    const dialogRef = this.dialog.open(ChapterReadComponent, {
      data: {
        chapter_id: id,
      },
    });
  }
}
