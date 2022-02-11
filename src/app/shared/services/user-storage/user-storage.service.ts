import { Injectable } from "@angular/core";
import { Character } from "../../domain/interfaces/character";
import { User } from "../../extensions/user/user.interface";

@Injectable({
    providedIn: 'root'
})
export class UserStorageService {

    #storage = localStorage;

    constructor() { }

    public getUserData(): Promise<User> {
        return new Promise((resolve, reject) => {
            let mock = this.#storage.getItem('mock')!;
            if (!mock) reject({ notfound: true });

            let mock_parsed = JSON.parse(mock);
            if (!mock_parsed.email) reject({ notfound: true });
            resolve(mock_parsed);
        });
    }

    public setUserData(data: User) {
        this.#storage.setItem('mock', JSON.stringify(data));
        return this.#storage.getItem('mock')!.length > 0;
    }

    public setFavorite(character: Character) {
        let favorites = JSON.parse(this.#storage.getItem('favorites') || '[]');
        let alreadyHave = favorites.filter((e: any) => { return e.id == character.id }).length > 0;

        if (alreadyHave) {
            return false;
        }

        favorites.push(character);
        this.#storage.setItem('favorites', JSON.stringify(favorites));
        return this.#storage.getItem('favorites')!.length > 0;
    }

    public getFavorites(): Character[] {
        let characters: Character[] = [];

        if (this.#storage.getItem('favorites')) {
            characters = JSON.parse(this.#storage.getItem('favorites')!);
        }

        return characters;
    }

    public logOut() {
        this.#storage.removeItem('mock');
        this.#storage.removeItem('favorites');
    }
}