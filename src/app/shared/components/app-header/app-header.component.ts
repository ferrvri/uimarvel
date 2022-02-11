import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HttpService } from '../../services/http-service/http-service';
import { UserStorageService } from '../../services/user-storage/user-storage.service';
import { AppHeaderService } from './app-header.service';
import { HeaderLink } from './extensions/header.link';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {

  searchTerm: string = '';

  @Input('links') links: HeaderLink[] = [];

  constructor(
    private _userStorageService: UserStorageService,
    private _appHeaderService: AppHeaderService
  ) { }

  ngOnInit(): void { }

  logOut() {
    this._userStorageService.logOut();
    window.location.reload();
  }

  search() {
    this._appHeaderService.searchTerm$.next(this.searchTerm);
  }
}
