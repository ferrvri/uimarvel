import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { UserStorageService } from "../services/user-storage/user-storage.service";

@Injectable()
export class CanActivateHomeRoute implements CanActivate {

    constructor(
        private _userStorageService: UserStorageService,
        private _router: Router
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return this._userStorageService.getUserData().then(data => {
            if (data.email && data.email.length > 0 && data.password && data.password.length > 0) {
                return true;
            }

            this._router.navigate(['/']);
            return false;
        });
    }
}