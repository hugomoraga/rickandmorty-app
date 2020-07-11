import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterRoutingModule } from './character-routing.module';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterComponent } from './character/character.component';



@NgModule({
  declarations: [
    CharacterComponent,
    CharacterListComponent
  ],
  imports: [
    CommonModule,
    CharacterRoutingModule
  ]
})
export class CharacterModule { }
