import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { MessageService } from "primeng/api";
import { UserStorageService } from "../user-storage/user-storage.service";

@Injectable({
    providedIn: 'root'
})
export class LoginMockService {

    constructor(
        private _userStorageService: UserStorageService,
        private _messageService: MessageService,
        private _router: Router
    ) { }

    login(formValue: any) {
        return new Promise((resolve, _) => {
            this._userStorageService.setUserData(formValue);
            this._messageService.add({ key: 'tr', severity: 'info', detail: 'Login realizado com sucesso', closable: false, life: 1500 });
            resolve(true);
        });
    }
}