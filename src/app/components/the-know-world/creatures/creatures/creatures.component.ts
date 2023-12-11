import { Component, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { WorldService } from 'src/app/services/world.service';
import { CreaturesImgFormComponent } from '../creatures-img-form/creatures-img-form.component';
import { CreaturesImgGaleryComponent } from '../creatures-img-galery/creatures-img-galery.component';
import { CreaturesFormComponent } from '../creatures-form/creatures-form.component';
import { Creatures } from 'src/app/models/craeture';

@Component({
  selector: 'app-creatures',
  templateUrl: './creatures.component.html',
  styleUrls: ['./creatures.component.css'],
})
export class CreaturesComponent {
  public getAllCreatures: any[] = [];
  public creatureColumns: any[] = [];
  public dataSource: any;
  public creature_id: any;
  public creatureNew: Creatures = new Creatures('', 0, '');
  public ensayo: any;

  constructor(private wolrdService: WorldService, public dialog: MatDialog) {
    this.creatureColumns = ['creature_name', 'id'];
  }

  ngOnInit(): void {
    this.creatures();
  }

  creatures() {
    this.wolrdService.getAllCreatures().subscribe((resp) => {
      this.getAllCreatures = resp.creatures;
      this.allCreatures(this.getAllCreatures);
    });
  }

  allCreatures(getAllCreatures: any) {
    this.dataSource = new MatTableDataSource(getAllCreatures);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openNewImageCreature(creature_id: number) {
    this.creature_id = creature_id;

    const dialogRef = this.dialog.open(CreaturesImgFormComponent, {
      data: {
        creature_id: creature_id,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.creatures();
    });
  }

  openDetailCreature(creature_id: number) {
    this.dialog.open(CreaturesImgGaleryComponent, {
      data: {
        creature_id: creature_id,
      },
    });
  }

  newCreature() {
    const dialogRef = this.dialog.open(CreaturesFormComponent, {
      data: {},
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.ensayo = result;
      this.saveCreature(this.ensayo);
    });
  }

  saveCreature(ensayo: any) {
    this.creatureNew = {
      creature_name: ensayo.creature_name,
      land_id: ensayo.land,
      description: ensayo.description,
    };

    console.log(this.creatureNew);
    this.wolrdService.createCreature(ensayo).subscribe((resp) => {});
  }

  // openDialog(): void {
  //   const dialogRef = this.dialog.open(CreaturesImgFormComponent, {
  //     data: {},
  //   });

  //   dialogRef.afterClosed().subscribe((result) => {
  //     console.log(result);
  //     console.log('The dialog was closed');
  //     // this.name = result;
  //   });
  // }
}
