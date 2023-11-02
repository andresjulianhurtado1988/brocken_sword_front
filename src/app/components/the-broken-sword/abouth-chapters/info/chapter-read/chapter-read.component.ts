import { Component, Inject } from '@angular/core';
import { WorldService } from 'src/app/services/world.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-chapter-read',
  templateUrl: './chapter-read.component.html',
  styleUrls: ['./chapter-read.component.css'],
})
export class ChapterReadComponent {
  public chapters: any[] = [];
  // public chapter_id: number;
  constructor(
    private _worlService: WorldService,
    @Inject(MAT_DIALOG_DATA) public info_chapter: any
  ) {
    //  this.chapter_id = info_chapter.chapter_id;
    this.getChapters(info_chapter.chapter_id);
  }

  getChapters(chapter_id: number) {
    this._worlService.getStoryByChapter(chapter_id).subscribe((resp) => {
      this.chapters = resp.chapters;
    });
  }
}
