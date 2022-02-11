import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AppHeaderService {

    searchTerm$: Subject<string> = new Subject();

    constructor() { }
    
}