import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { WorldService } from 'src/app/services/world.service';
import { ChapterAlertComponent } from '../chapter-alert/chapter-alert.component';

@Component({
  selector: 'app-chapter-detail',
  templateUrl: './chapter-detail.component.html',
  styleUrls: ['./chapter-detail.component.css'],
})
export class ChapterDetailComponent {
  public chapter_id: number;
  public form: FormGroup;
  public chapter: any[] = [];
  public durationInSeconds = 5;
  public description: string;
  public name: string;
  public pages: number;
  public protagonist: string;
  public status: string;
  constructor(
    @Inject(MAT_DIALOG_DATA) public info_chapter: any,
    private _worlService: WorldService,
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<ChapterDetailComponent>
  ) {
    this.chapter_id = info_chapter.chapter_id;
    this.chapter = [];
    this.description = '';
    this.name = '';
    this.pages = 0;
    this.protagonist = '';
    this.status = '';
    this.getChapters(this.chapter_id);
    this.form = this.fb.group({});
    this.loadForm();
    this.loadData();
  }

  loadForm() {
    this.form = this.fb.group({
      chapter: ['', [Validators.required]], // es un arreglo por que tendrá el valor por defecto, como segundo argumento las validaciones sincronas, tercer argumento validaciones asíncronas
      chapter_id: [''],
    });
  }

  loadData() {
    this.form.reset({
      chapter_id: this.chapter_id,
    });
  }

  getChapters(chapter_id: number) {
    this._worlService.getChapters(chapter_id).subscribe((resp) => {
      this.chapter = resp.chapters;

      this.description = resp.chapters.description;
      this.name = resp.chapters.name;
      this.pages = resp.chapters.pages;
      this.protagonist = resp.chapters.protagonist;
    });
  }

  onSubmit() {
    this._worlService.registerChapterContent(this.form.value).subscribe(
      (response) => {
        if (response.status == 'success') {
          this.status = response.status;
          this.dialogRef.close();
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

  openSnackBar() {
    this._snackBar.openFromComponent(ChapterAlertComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }
}
