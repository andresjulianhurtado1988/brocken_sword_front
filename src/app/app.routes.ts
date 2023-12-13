import { Routes } from '@angular/router';
import { HomeComponent } from './components/navegation/home/home.component';
import { AboutAuthorComponent } from './components/abouth-author/about-author.component';
import { CharactersComponent } from './components/abouth-characters/characters/characters.component';
import { TheWorldComponent } from './components/the-world/the-world/the-world.component';
import { LandDetailComponent } from './components/abouth-lands/land-detail/land-detail.component';
import { CharacterDetailComponent } from './components/abouth-characters/character-detail/character-detail.component';
import { ReligionComponent } from './components/the-know-world/religion/religion.component';
import { MysticalPlacesComponent } from './components/the-know-world/mystical-places/mystical-places/mystical-places.component';
import { MagicSystemComponent } from './components/the-know-world/magic-system/magic-system.component';
import { RacesComponent } from './components/the-know-world/races/races.component';
import { TheBrokenSwordComponent } from './components/the-broken-sword/the-broken-sword/the-broken-sword.component';
import { LandsInfoComponent } from './components/abouth-lands/lands-info/lands-info.component';
import { ChaptersComponent } from './components/the-broken-sword/abouth-chapters/chapters/chapters.component';
import { FormIdeasComponent } from './components/story/form-ideas/form-ideas.component';
import { CreaturesComponent } from './components/the-know-world/creatures/creatures/creatures.component';
import { TheWorldThemesComponent } from './components/the-world/the-world-themes/the-world-themes.component';

export const ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'autor', component: AboutAuthorComponent },
  { path: 'characters', component: CharactersComponent },
  { path: 'lands', component: LandsInfoComponent },
  { path: 'the-world', component: TheWorldComponent },
  { path: 'the-world-themes/:id', component: TheWorldThemesComponent },
  { path: 'detail-land/id', component: LandDetailComponent },
  { path: 'detail-character/id', component: CharacterDetailComponent },
  { path: 'religion', component: ReligionComponent },
  { path: 'creatures', component: CreaturesComponent },
  { path: 'mystical-places', component: MysticalPlacesComponent },
  { path: 'magic-system', component: MagicSystemComponent },
  { path: 'races', component: RacesComponent },
  { path: 'the-broken-sword', component: TheBrokenSwordComponent },
  { path: 'form-ideas', component: FormIdeasComponent },
  { path: 'chapters/:id', component: ChaptersComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];
