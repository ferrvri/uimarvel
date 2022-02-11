import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import * as md5 from 'md5';
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class HttpService {

    API_URL: string = 'http://gateway.marvel.com/v1/public/';

    constructor(
        private _http: HttpClient
    ) { }

    getCharacters(): Observable<any> {
        return this._http.get(this.API_URL + 'characters');
    }

    getCharacterById(id: string | number) {
        return this._http.get(this.API_URL + `characters/${id}`);
    }
}