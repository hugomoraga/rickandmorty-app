import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { HomeComponent } from './components/home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SearchCharacterComponent } from './components/search-character/search-character.component';
import { CharacterComponent } from './components/character/character.component';
import { BannerComponent } from './components/banner/banner.component';

@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    CharacterComponent,
    SearchCharacterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
    MaterialModule,
    FormsModule,
    NgxPaginationModule
  ],
  exports: [
    HomeComponent
  ],
  providers: [
   
  ]
})
export class HomeModule { }
