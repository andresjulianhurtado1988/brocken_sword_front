import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Characters } from 'src/app/models/character';
import { CharacterService } from 'src/app/services/character.service';
import { LandService } from 'src/app/services/land.service';
import { WorldService } from 'src/app/services/world.service';

@Component({
  selector: 'app-character-form',
  templateUrl: './character-form.component.html',
  styleUrls: ['./character-form.component.css'],
  providers: [LandService],
})
export class CharacterFormComponent {
  // form: FormGroup;
  public lands: any[] = [];
  public magic_system: any[] = [];
  public allRaces: any[] = [];

  public status: string;
  public newCharacter: Characters;

  constructor(
    private fb: FormBuilder,
    private _characterService: CharacterService,
    private _landService: LandService,
    private _worldService: WorldService
  ) {
    this.status = '';
    this.lands = [];
    this.magic_system = [];
    this.allRaces = [];

    this.newCharacter = new Characters('', 0, 0, 0, 0, 0, '', '');

    // this.form = this.fb.group({});
  }

  ngOnInit(): void {
    this.getLands();
    this.getMagicSystem();
    this.getRaces();
  }

  getLands() {
    this._landService.getLands().subscribe(
      (response) => {
        if (response.status == 'success') {
          this.lands = response.lands;
        } else {
          this.status = 'error';
        }
      },
      (error) => {
        this.status = 'error';
      }
    );
  }

  getMagicSystem() {
    this._worldService.getMagicSystem().subscribe(
      (response) => {
        if (response.status == 'success') {
          this.magic_system = response.magic_system;
        } else {
          this.status = 'error';
        }
      },
      (error) => {
        this.status = 'error';
      }
    );
  }

  getRaces() {
    this._worldService.getRaces().subscribe(
      (response) => {
        if (response.status == 'success') {
          this.allRaces = response.races;
        } else {
          this.status = 'error';
        }
      },
      (error) => {
        this.status = 'error';
      }
    );
  }

  onSubmit(form: any) {
   
    this._characterService.registerCharacter(this.newCharacter).subscribe(
      (response) => {
        console.log(this.newCharacter);
        if (response.status == 'success') {
          this.status = response.status;
          form.reset();
          //this.getOrders();
        } else {
          this.status = 'error';
        }
      },
      (error) => {
        this.status = 'error';
        console.log(<any>error);
      }
    );
  }
}
