import { Component } from '@angular/core';
import { AboutBookService } from 'src/app/services/about-book.service';

@Component({
  selector: 'app-the-broken-sword',
  templateUrl: './the-broken-sword.component.html',
  styleUrls: ['./the-broken-sword.component.css'],
})
export class TheBrokenSwordComponent {
  public AllBooksNames: any[] = [];

  constructor(private _aboutBooks: AboutBookService) {}

  ngOnInit(): void {
    this._aboutBooks.getBooks().subscribe((response) => {
      this.AllBooksNames = response.books;
     
    });
  }
}
