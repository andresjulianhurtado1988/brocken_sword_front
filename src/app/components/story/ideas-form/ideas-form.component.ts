import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IdeasService } from 'src/app/services/ideas.service';
import { IdeasInfoComponent } from '../ideas-info/ideas-info.component';

@Component({
  selector: 'app-ideas-form',
  templateUrl: './ideas-form.component.html',
  styleUrls: ['./ideas-form.component.css'],
})
export class IdeasFormComponent {
  public form: FormGroup;
  public aboutThemes: any[] = [];
  public status: string;
  public durationInSeconds = 5;
  public selectedOption: boolean;
  constructor(
    private fb: FormBuilder,
    private ideasService: IdeasService,
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
    // switch (theme_id) {
    //   case 1:
    //     break;
    //   case 2:
    //     break;
    //   case 3:
    //     break;
    //   case 4:
    //     break;
    //   case 5:
    //     break;
    //   case 6:
    //     break;
    //   case 7:
    //     break;
    //   case 8:
    //     break;
    //   case 9:
    //     break;
    //   case 10:
    //     break;
    // }

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
