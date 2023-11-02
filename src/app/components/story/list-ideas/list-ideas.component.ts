import { Component } from '@angular/core';
import { IdeasFormComponent } from '../ideas-form/ideas-form.component';
import { MatDialog } from '@angular/material/dialog';
import { IdeasService } from 'src/app/services/ideas.service';

@Component({
  selector: 'app-list-ideas',
  templateUrl: './list-ideas.component.html',
  styleUrls: ['./list-ideas.component.css'],
})
export class ListIdeasComponent {
  public ideas: any[] = [];

  constructor(public dialog: MatDialog, private ideasService: IdeasService) {
    this.getIdeas();
  }

  openDialogFormIdea() {
    const dialogRef = this.dialog.open(IdeasFormComponent);
  }

  getIdeas() {
    this.ideasService.getIdeas().subscribe((resp) => {
      this.ideas = resp.ideas;
    });
  }

  allIdeas(theme_id: any) {}
}
