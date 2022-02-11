import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AppHeaderService } from 'src/app/shared/components/app-header/app-header.service';
import { Character } from 'src/app/shared/domain/interfaces/character';
import { UserStorageService } from 'src/app/shared/services/user-storage/user-storage.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  characters: Character[] = [];
  charactersOriginal: Character[] = [];

  searchTermSubscription: Subscription = new Subscription();

  constructor(
    private _userStorageService: UserStorageService,
    private _router: Router,
    private _appHeaderService: AppHeaderService
  ) { }

  ngOnInit(): void {
    this.searchTermSubscription = this._appHeaderService.searchTerm$.subscribe(searchTerm => {
      this.filterFavorites(searchTerm);
    });

    this.getFavorites();
  }

  getFavorites() {
    this.charactersOriginal = this.characters = this._userStorageService.getFavorites();
  }

  filterFavorites(searchTerm: string) {
    this.characters = this.charactersOriginal.filter(e => {
      return e.name.toLocaleLowerCase().indexOf(searchTerm.toLocaleLowerCase()) != -1
    });
  }

  onClicked(character: Character) {
    this._router.navigate(['/details/' + character.id]);
  }

}
