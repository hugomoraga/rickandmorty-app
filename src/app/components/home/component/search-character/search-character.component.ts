import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Search } from '../../../../core/models/search/search';

@Component({
  selector: 'app-search-character',
  templateUrl: './search-character.component.html',
  styleUrls: ['./search-character.component.scss']
})
export class SearchCharacterComponent implements OnInit {

  @Output() public filters = new EventEmitter<Search>();
  @Output() public tryluck = new EventEmitter<boolean>();

  characterId: string;
  characterName: string;
  characterStatus: string;
  characterGender: string;

  constructor() {
    this.characterId = '';
    this.characterName = '';
  }

  ngOnInit() {
  }

  search(): void {
    const search: Search = new Search();
    search.id = this.getId();
    search.name = this.characterName;
    search.status = this.characterStatus;
    search.gender = this.characterGender;
    this.filters.emit(search);
  }
  doTryLuck(): void {
    this.tryluck.emit(true);
  }

  private getId(): any {
    let id = 0;
    if(this.characterId && this.characterId !== '') {
      id = parseFloat(this.characterId);
    }
  }
}
