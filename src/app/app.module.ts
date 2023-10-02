import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ROUTES } from './app.routes';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { NoImagePipe } from './pipes/no-image.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// COMPONENTES
import { NavegacionComponent } from './components/navegation/navegacion/navegacion.component';
import { DashboardComponent } from './components/navegation/dashboard/dashboard.component';
import { TheWorldComponent } from './components/the-know-world/the-world/the-world.component';
import { CharactersComponent } from './components/abouth-characters/characters/characters.component';
import { AboutAuthorComponent } from './components/abouth-author/about-author.component';
import { TheLandsComponent } from './components/abouth-lands/the-lands/the-lands.component';
import { LandDetailComponent } from './components/abouth-lands/land-detail/land-detail.component';
import { CharacterDetailComponent } from './components/abouth-characters/character-detail/character-detail.component';
import { HomeComponent } from './components/navegation/home/home.component';
import { DialogLandComponent } from './components/dialogs/dialog-land/dialog-land.component';
import { MysticalPlacesComponent } from './components/the-know-world/mystical-places/mystical-places.component';
import { ReligionComponent } from './components/the-know-world/religion/religion.component';
import { DialogCharacterComponent } from './components/abouth-characters/dialogs/dialog-character/dialog-character.component';
import { MagicSystemComponent } from './components/the-know-world/magic-system/magic-system.component';
import { RacesComponent } from './components/the-know-world/races/races.component';
import { DialogReligionComponent } from './components/dialogs/dialog-religion/dialog-religion.component';
import { TheBrokenSwordComponent } from './components/the-broken-sword/the-broken-sword/the-broken-sword.component';
import { LandsFormComponent } from './components/abouth-lands/lands-form/lands-form.component';
import { LandsInfoComponent } from './components/abouth-lands/lands-info/lands-info.component';
import { DialogCharacterFormComponent } from './components/abouth-characters/dialogs/dialog-character-form/dialog-character-form.component';
import { CharacterAlertComponent } from './components/abouth-characters/alerts/character-alert/character-alert.component';
import { TheAncientHallowsComponent } from './components/the-know-world/the-ancient-hallows/the-ancient-hallows.component';
import { TheLordOfTheGraveComponent } from './components/the-know-world/the-lord-of-the-grave/the-lord-of-the-grave.component';
import { ChaptersComponent } from './components/the-broken-sword/abouth-chapters/chapters/chapters.component';
import { ChapterAlertComponent } from './components/the-broken-sword/abouth-chapters/info/chapter-alert/chapter-alert.component';
import { ChapterDetailComponent } from './components/the-broken-sword/abouth-chapters/info/chapter-detail/chapter-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    DashboardComponent,
    TheWorldComponent,
    CharactersComponent,
    AboutAuthorComponent,
    TheLandsComponent,
    LandDetailComponent,
    CharacterDetailComponent,
    HomeComponent,
    DialogLandComponent,
    MysticalPlacesComponent,
    ReligionComponent,
    DialogCharacterComponent,
    NoImagePipe,
    MagicSystemComponent,
    RacesComponent,
    DialogReligionComponent,
    TheBrokenSwordComponent,
    LandsFormComponent,
    LandsInfoComponent,
    DialogCharacterFormComponent,
    CharacterAlertComponent,
    TheAncientHallowsComponent,
    TheLordOfTheGraveComponent,
    ChaptersComponent,
    ChapterAlertComponent,
    ChapterDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES, { useHash: true }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
