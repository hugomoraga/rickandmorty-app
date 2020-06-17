import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CharacterComponent } from './components/character/components/character/character.component';
import { CharacterListComponent } from './components/character/components/character-list/character-list.component';
import { HomeComponent } from './components/home/home.component';
import { LayoutComponent } from './components/layout/layout.component';
import { EpisodeComponent } from './components/episode/episode/episode.component';
import { EpisodeListComponent } from './components/episode/episode-list/episode-list.component';
import { BannerComponent } from './components/home/banner/banner.component';
import { SearchCharacterComponent } from './components/home/component/search-character/search-character.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found/page-not-found.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterComponent,
    CharacterListComponent,
    HomeComponent,
    LayoutComponent,
    EpisodeComponent,
    EpisodeListComponent,
    BannerComponent,
    SearchCharacterComponent,
    PageNotFoundComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
