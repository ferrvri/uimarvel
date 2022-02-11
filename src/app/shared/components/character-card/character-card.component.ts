import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
    selector: 'app-character-card',
    templateUrl: './character-card.component.html',
    styleUrls: ['./character-card.component.css']
})
export class CharacterCardComponent implements OnInit {

    @Input('name') name: string = '';
    @Input('image') image: string = '';
    @Input('showFavoriteIcon') showFavoriteIcon: boolean = true;

    @Output('favorited') favorited: EventEmitter<any> = new EventEmitter();
    @Output('clicked') clicked: EventEmitter<any> = new EventEmitter();

    constructor() { }

    ngOnInit(): void {

    }

}