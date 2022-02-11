import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { LoginMockService } from 'src/app/shared/services/login-mock/login.mock.service';
import { UserStorageService } from 'src/app/shared/services/user-storage/user-storage.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],

})
export class LoginPageComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });

  constructor(
    private _userStorageService: UserStorageService,
    private _router: Router,
    private _loginMock: LoginMockService
  ) { }

  ngOnInit(): void {
    this._userStorageService.getUserData().then(data => {
      if (data.email && data.email.length > 0 && data.password && data.password.length > 0) {
        this._router.navigate(['/characters']);
      }
    });
  }

  login() {
    if (this.loginForm.invalid) {
      return;
    }

    this._loginMock.login(this.loginForm.value).then(_ => {
      window.location.reload();
    });
  }
}
