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
import { NgOptimizedImage } from '@angular/common';

// COMPONENTES
import { NavegacionComponent } from './components/navegation/navegacion/navegacion.component';
import { DashboardComponent } from './components/navegation/dashboard/dashboard.component';
import { CharactersComponent } from './components/abouth-characters/characters/characters.component';
import { AboutAuthorComponent } from './components/abouth-author/about-author.component';
import { TheLandsComponent } from './components/abouth-lands/the-lands/the-lands.component';
import { LandDetailComponent } from './components/abouth-lands/land-detail/land-detail.component';
import { CharacterDetailComponent } from './components/abouth-characters/character-detail/character-detail.component';
import { HomeComponent } from './components/navegation/home/home.component';
import { DialogLandComponent } from './components/dialogs/dialog-land/dialog-land.component';
import { MysticalPlacesComponent } from './components/the-know-world/mystical-places/mystical-places/mystical-places.component';
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
import { ChaptersComponent } from './components/the-broken-sword/abouth-chapters/chapters/chapters.component';
import { ChapterAlertComponent } from './components/the-broken-sword/abouth-chapters/chapter-alert/chapter-alert.component';
import { ChapterDetailComponent } from './components/the-broken-sword/abouth-chapters/chapter-detail/chapter-detail.component';
import { ChapterReadComponent } from './components/the-broken-sword/abouth-chapters/chapter-read/chapter-read.component';
import { IdeasComponent } from './components/story/read-ideas/ideas.component';
import { ListIdeasComponent } from './components/story/list-ideas/list-ideas.component';
import { IdeasInfoComponent } from './components/story/info-ideas/ideas-info.component';
import { FormIdeasComponent } from './components/story/form-ideas/form-ideas.component';
import { CreaturesComponent } from './components/the-know-world/creatures/creatures/creatures.component';
import { CreaturesFormComponent } from './components/the-know-world/creatures/creatures-form/creatures-form.component';
import { CreaturesImgFormComponent } from './components/the-know-world/creatures/creatures-img-form/creatures-img-form.component';
import { CreaturesAlertComponent } from './components/the-know-world/creatures/creatures-alert/creatures-alert.component';
import { CreaturesUpdateComponent } from './components/the-know-world/creatures/creatures-update/creatures-update.component';
import { CreaturesImgGaleryComponent } from './components/the-know-world/creatures/creatures-img-galery/creatures-img-galery.component';
import { ComponentePadreComponent } from './components/componentes-prueba/componente-padre/componente-padre.component';
import { ComponenteHijoComponent } from './components/componentes-prueba/componente-hijo/componente-hijo.component';
import { MysticalPlacesAlertComponent } from './components/the-know-world/mystical-places/mystical-places-alert/mystical-places-alert.component';
import { MysticalPlacesImageFormComponent } from './components/the-know-world/mystical-places/mystical-places-image-form/mystical-places-image-form.component';
import { MysticalPlacesGalleryComponent } from './components/the-know-world/mystical-places/mystical-places-gallery/mystical-places-gallery.component';
import { OptionsMapComponent } from './components/navegation/options-map/options-map.component';
import { TheWorldComponent } from './components/the-world/the-world/the-world.component';
import { TheAncientHallowsComponent } from './components/the-world/the-ancient-hallows/the-ancient-hallows.component';
import { TheLordOfTheGraveComponent } from './components/the-world/the-lord-of-the-grave/the-lord-of-the-grave.component';
import { TheConflictComponent } from './components/the-world/the-conflict/the-conflict.component';
import { TheClansComponent } from './components/the-world/the-clans/the-clans.component';
import { TheBridgesComponent } from './components/the-world/the-bridges/the-bridges.component';
import { TheEternalStormInTheSeaComponent } from './components/the-world/the-eternal-storm-in-the-sea/the-eternal-storm-in-the-sea.component';
import { TheNaventiComponent } from './components/the-world/the-naventi/the-naventi.component';
import { KaltherComponent } from './components/the-world/the-continents/kalther/kalther.component';
import { OstiriaComponent } from './components/the-world/the-continents/ostiria/ostiria.component';
import { VergginesComponent } from './components/the-world/the-continents/verggines/verggines.component';
import { GebietComponent } from './components/the-world/the-continents/gebiet/gebiet.component';
import { TheRedMirrorsComponent } from './components/the-world/the-red-mirrors/the-red-mirrors.component';
import { ThePrisonForImmortalsComponent } from './components/the-world/the-prison-for-immortals/the-prison-for-immortals.component';
import { TheCultureComponent } from './components/the-world/the-culture/the-culture.component';
import { TheCurrencySystemComponent } from './components/the-world/the-currency-system/the-currency-system.component';
import { ThePoliticalSystemComponent } from './components/the-world/the-political-system/the-political-system.component';
import { TheCurseOfMerakComponent } from './components/the-world/the-curse-of-merak/the-curse-of-merak.component';
import { TheTanabraWorldComponent } from './components/the-world/the-tanabra-world/the-tanabra-world.component';
import { TheContinentsComponent } from './components/the-world/the-continents/the-continents/the-continents.component';
import { TheWorldThemesComponent } from './components/the-world/the-world-themes/the-world-themes.component';
import { TheWorldInfoComponent } from './components/the-world/the-world-info/the-world-info.component';
import { TheWorldThemesFormComponent } from './components/the-world/the-world-themes-form/the-world-themes-form.component';
import { TheWorldThemesFormUpdateComponent } from './components/the-world/the-world-themes-form-update/the-world-themes-form-update.component';

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
    ChapterReadComponent,
    IdeasComponent,
    ListIdeasComponent,
    IdeasInfoComponent,
    FormIdeasComponent,
    CreaturesComponent,
    CreaturesFormComponent,
    CreaturesImgFormComponent,
    CreaturesAlertComponent,
    CreaturesUpdateComponent,
    CreaturesImgGaleryComponent,
    ComponentePadreComponent,
    ComponenteHijoComponent,
    MysticalPlacesAlertComponent,
    MysticalPlacesImageFormComponent,
    MysticalPlacesGalleryComponent,
    OptionsMapComponent,
    TheConflictComponent,
    TheClansComponent,
    TheBridgesComponent,
    TheEternalStormInTheSeaComponent,
    TheNaventiComponent,
    KaltherComponent,
    OstiriaComponent,
    VergginesComponent,
    GebietComponent,
    TheRedMirrorsComponent,
    ThePrisonForImmortalsComponent,
    TheCultureComponent,
    TheCurrencySystemComponent,
    ThePoliticalSystemComponent,
    TheCurseOfMerakComponent,
    TheTanabraWorldComponent,
    TheContinentsComponent,
    TheWorldThemesComponent,
    TheWorldInfoComponent,
    TheWorldThemesFormComponent,
    TheWorldThemesFormUpdateComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgOptimizedImage,
    RouterModule.forRoot(ROUTES, { useHash: true }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
