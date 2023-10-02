import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/navegation/home/home.component';
import { AboutAuthorComponent } from './components/abouth-author/about-author.component';
import { CharactersComponent } from './components/abouth-characters/characters/characters.component';
import { TheLandsComponent } from './components/abouth-lands/the-lands/the-lands.component';
import { TheWorldComponent } from './components/the-know-world/the-world/the-world.component';
import { LandDetailComponent } from './components/abouth-lands/land-detail/land-detail.component';
import { CharacterDetailComponent } from './components/abouth-characters/character-detail/character-detail.component';
import { ReligionComponent } from './components/the-know-world/religion/religion.component';
import { MysticalPlacesComponent } from './components/the-know-world/mystical-places/mystical-places.component';
import { MagicSystemComponent } from './components/the-know-world/magic-system/magic-system.component';
import { RacesComponent } from './components/the-know-world/races/races.component';
import { TheBrokenSwordComponent } from './components/the-broken-sword/the-broken-sword/the-broken-sword.component';
import { LandsInfoComponent } from './components/abouth-lands/lands-info/lands-info.component';
import { ChaptersComponent } from './components/the-broken-sword/abouth-chapters/chapters/chapters.component';

export const ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'autor', component: AboutAuthorComponent },
  { path: 'characters', component: CharactersComponent },
  { path: 'lands', component: LandsInfoComponent },
  { path: 'world', component: TheWorldComponent },
  { path: 'detail-land/id', component: LandDetailComponent },
  { path: 'detail-character/id', component: CharacterDetailComponent },
  { path: 'religion', component: ReligionComponent },
  { path: 'mystical-places', component: MysticalPlacesComponent },
  { path: 'magic-system', component: MagicSystemComponent },
  { path: 'races', component: RacesComponent },
  { path: 'the-broken-sword', component: TheBrokenSwordComponent },
  { path: 'chapters/:id', component: ChaptersComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];
