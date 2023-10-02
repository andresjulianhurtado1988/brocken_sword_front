import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { WorldService } from 'src/app/services/world.service';

@Component({
  selector: 'app-chapter-detail',
  templateUrl: './chapter-detail.component.html',
  styleUrls: ['./chapter-detail.component.css'],
})
export class ChapterDetailComponent {
  public chapter_id: number;

  public chapter: any[] = [];

  public description: string;
  public name: string;
  public pages: number;
  public protagonist: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public info_chapter: any,
    private _worlService: WorldService
  ) {
    this.chapter_id = info_chapter.chapter_id;
    this.chapter = [];
    this.description = '';
    this.name = '';
    this.pages = 0;
    this.protagonist = '';

    this.getChapters(this.chapter_id);
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
}
