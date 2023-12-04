import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IdeasService } from 'src/app/services/ideas.service';
import { Ideas } from 'src/app/models/ideas';
import { IdeasComponent } from '../read-ideas/ideas.component';
import { global_url } from 'src/app/global/url_back';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-list-ideas',
  templateUrl: './list-ideas.component.html',
  styleUrls: ['./list-ideas.component.css'],
})
export class ListIdeasComponent {
  @Input() ideas: any;

  private restartIdeas: any;
  public initIdeas: Ideas = {
    aboutThemes: [],
    status: '',
    durationInSeconds: 5,
    selectedOption: true,
    allData: [],
    ideas: [],
  };
  public url: string;
  constructor(public dialog: MatDialog, private ideasService: IdeasService) {
    this.url = global_url.url;
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
