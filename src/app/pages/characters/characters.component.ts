import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { AppHeaderService } from 'src/app/shared/components/app-header/app-header.service';
import { Character } from 'src/app/shared/domain/interfaces/character';
import { HttpService } from 'src/app/shared/services/http-service/http-service';
import { UserStorageService } from 'src/app/shared/services/user-storage/user-storage.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit, OnDestroy {

  loading: boolean = false;
  characters: Character[] = [];
  charactersOriginal: Character[] = [];

  searchTermSubscription: Subscription = new Subscription();

  constructor(
    private _httpService: HttpService,
    private _userStorageService: UserStorageService,
    private _messageService: MessageService,
    private _router: Router,
    private _appHeaderService: AppHeaderService
  ) { }

  ngOnInit(): void {
    this.searchTermSubscription = this._appHeaderService.searchTerm$.subscribe(searchTerm => {
      this.filterCharactersData(searchTerm);
    });

    this.getCharactersData();
  }

  filterCharactersData(searchTerm: string) {
    if (searchTerm.length < 1) {
      this.characters = this.charactersOriginal
    } else {
      this.characters = this.charactersOriginal.filter(e => {
        return e.name.toLocaleLowerCase().indexOf(searchTerm.toLocaleLowerCase()) != -1;
      });
    }
  }

  getCharactersData() {
    this.loading = true;
    this._httpService.getCharacters().subscribe(data => {
      this.charactersOriginal = this.characters = data.data.results
      this.loading = false;
    }, e => this.loading = false);
  }

  onFavorite(character: Character) {
    let favorited = this._userStorageService.setFavorite(character);

    if (!favorited) {
      this._messageService.add({ key: 'tr', severity: 'error', detail: 'Já adicionado aos favoritos', closable: false, life: 1500 });
    } else {
      this._messageService.add({ key: 'tr', severity: 'info', detail: 'Adicionado aos favoritos', closable: false, life: 1500 });
    }
  }

  onClicked(character: Character) {
    this._router.navigate(['/details/' + character.id]);
  }

  ngOnDestroy(): void {
    this.searchTermSubscription.unsubscribe();
  }

}
