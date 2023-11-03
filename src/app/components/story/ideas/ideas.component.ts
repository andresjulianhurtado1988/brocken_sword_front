import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IdeasService } from 'src/app/services/ideas.service';

@Component({
  selector: 'app-ideas',
  templateUrl: './ideas.component.html',
  styleUrls: ['./ideas.component.css'],
})
export class IdeasComponent {
  public ideas: any[] = [];
  constructor(
    private ideasService: IdeasService,
    @Inject(MAT_DIALOG_DATA) public theme_id: any,
    public dialogRef: MatDialogRef<IdeasComponent>
  ) {
    this.getIdeas(theme_id.theme_id);
  }

  getIdeas(theme_id: any) {
    this.ideasService.getIdeas(theme_id).subscribe((resp) => {
      this.ideas = resp.ideas;
    });
  }
}
