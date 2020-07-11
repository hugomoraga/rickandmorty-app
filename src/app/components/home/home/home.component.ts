import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';
import { Observable } from 'rxjs';
import { map, take, tap} from 'rxjs/operators';
import { Character } from '../../../core/models/character';
import { SearchResult } from '../../../core/models/response/search-results';
import { Search } from '../../../core/models/search/search';
import { CharactersService } from '../../../core/services/character/characters.service';
import { UtilFunctions } from 'src/app/utils/CommonUtils';
import { Swiper } from 'swiper';
import { MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  loading = true;
  showDefaultGrid: boolean;
  test: boolean;
  characterList: Character[];
  mySwiper: Swiper;

  totalRecords: number;
  page: number;
  pageSize: number;
  asyncCharacterList: Observable<Character[]>;

  constructor(private charactersService: CharactersService, private snackBar: MatSnackBar) {
    this.showDefaultGrid = true;
    this.test = false;
    this.characterList = [];
    this.page = 1;
    this.pageSize = 20;
    this.totalRecords = 0;
   }

  ngOnInit() {
    this.findCharacterByLucky();
  }

  ngAfterViewInit() {
    this.mySwiper = new Swiper('.swiper-container');
  }

  doSearch(event: Search): void {
    if (event) {
      this.test = true;
      this.page = 1;
      if (this.searchingById(event)) {
        this.findCharacter(event.id);
      } else {
        this.showDefaultGrid = false;
        this.characterList = [];
        this.loading = true;
        this.getCharacterList(event);
      }
    }
  }

  doTryLuck(event: boolean): void {
    if (event) {
      this.loading = true;
      this.showDefaultGrid = false;
      this.totalRecords = 0;
      this.showSnackBar();
      this.findCharacterByLucky();
    }
  }

  pageChanged(page: number): void {
    this.page = page;
    this.getCharacterList(null);
  }

  private findCharacterByLucky(): void {
    this.charactersService.findAllCharacters().pipe(take(1)).subscribe(resp => {
      this.findCharactersByIds(resp.info.count, 9);
    });
  }

  private findCharactersByIds(totalCharacters: number, characterToShow: number): void {
  const ids = UtilFunctions.getRandomIdsToFinds(totalCharacters, characterToShow);
  this.charactersService.findCharactersByIds(ids).pipe(take(1)).subscribe(response => {
       this.characterList = response;
       this.loading = false;
       this.showDefaultGrid = true;
    });
  }

  private getCharacterList(search: Search): void {
    this.asyncCharacterList = this.loadCharacters(search).pipe(
      tap(response => {
        this.totalRecords = response.info.count;
        this.loading = false;
      }),
      map (response => response.results)
    );
  }

  private loadCharacters(search: Search): Observable<SearchResult<Character>> {
    return this.charactersService.findByFiltersAndPage(search, this.page);
  }

  private findCharacter(id: number): void {
    let doFindById = true;
    if (this.characterList.length === 1) {
      if (this.characterList[0].id === id) {
        doFindById = false;
      }
    }

    if (doFindById) {
      this.findCharacterById(id.toString());
    }
  }

    private findCharacterById(id: string): void {
      this.showDefaultGrid = false;
      this.characterList = [];
      this.loading = true;
      this. charactersService.findById(id).pipe(take(1)).subscribe(
        response => {
          this.characterList.push(response);
          this.loading = false;
          this.showDefaultGrid = true;
        });
    }
  private searchingById(search: Search): boolean {
    let itsTrue = false;
    if (search && search.id !== 0) {
      itsTrue = true;
    }
    return itsTrue;
  }

  private showSnackBar(): void {
    const message = 'Wubba Lubba Dub Dub !';
    const setAutoHide = true;
    const autoHide = 1500;
    const horizontalPosition: MatSnackBarHorizontalPosition = 'center';
    const verticalPosition: MatSnackBarVerticalPosition = 'bottom';
    const config = new MatSnackBarConfig();
    config.verticalPosition = verticalPosition;
    config.horizontalPosition = horizontalPosition;
    config.duration = setAutoHide ? autoHide : 0;
    this.snackBar.open(message, undefined, config);
  }
}
