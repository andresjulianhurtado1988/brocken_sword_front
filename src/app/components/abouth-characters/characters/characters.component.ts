import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
})
export class CharactersComponent {
  characters: any[] = [];
  public id_character: number;
  public status: string;
  public the_character: any[] = [];

  constructor(private _characterService: CharacterService) {
    this.id_character = 1;
    this.status = '';
    this.the_character = [];
  }

  ngOnInit(): void {
    this.showCharacter(this.id_character);
    this.getCharacters();
  }

  getCharacters() {
    this._characterService.getCharacters().subscribe(
      (response) => {
        if (response.status == 'success') {
          this.characters = response.characters;
        } else {
          this.status = 'error';
        }
      },
      (error) => {
        this.status = 'error';
      }
    );
  }

  showCharacter(id_character: number) {
    this._characterService.showCharacter(id_character).subscribe(
      (response) => {
        if (response.status == 'success') {
          this.the_character = response.characters;
        } else {
          this.status = 'error';
        }
      },
      (error) => {
        this.status = 'error';
      }
    );
  }
}
