import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from 'src/app/shared/domain/interfaces/character';
import { HttpService } from 'src/app/shared/services/http-service/http-service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  character: Character | any;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _httpService: HttpService
  ) { }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(param => {
      if (param.get('id')) {
        this.getDetailsFrom(param.get('id')?.toString());
      }
    });
  }


  getDetailsFrom(id?: string | number) {
    this._httpService.getCharacterById(id!).subscribe((data: any) => {
      if (data.data.results[0]) {
        this.character = data.data.results[0];
        console.log(this.character)
      }
    });
  }
}
