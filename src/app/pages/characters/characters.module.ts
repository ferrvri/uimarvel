import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersRoutingModule } from './characters.routing.module';
import { CharactersComponent } from './characters.component';
import { CharacterCardModule } from 'src/app/shared/components/character-card/character-card.module';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@NgModule({
  declarations: [
    CharactersComponent
  ],
  imports: [
    CommonModule,
    CharactersRoutingModule,
    CharacterCardModule,
    ProgressSpinnerModule
  ]
})
export class CharactersModule { }
