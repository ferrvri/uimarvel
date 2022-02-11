import { Component } from '@angular/core';
import { HeaderLink } from './shared/components/app-header/extensions/header.link';
import { UserStorageService } from './shared/services/user-storage/user-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  headerLinks: HeaderLink[] = [
    {
      name: 'Characters',
      path: '/characters'
    },
    {
      name: 'Favorites',
      path: '/favorites'
    }
  ];

  isUserLoggedIn: boolean = false;

  constructor(
    private _userStorageService: UserStorageService
  ) {
    this._userStorageService.getUserData().then(data => {
      this.isUserLoggedIn = data.email.length > 0 && data.password.length > 0;
    });
  }
}
