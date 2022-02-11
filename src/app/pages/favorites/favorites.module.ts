import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesComponent } from './favorites.component';
import { FavoritesRoutingModule } from './favorites.routing.module';
import { CharacterCardModule } from 'src/app/shared/components/character-card/character-card.module';

@NgModule({
  declarations: [
    FavoritesComponent
  ],
  imports: [
    CommonModule,
    FavoritesRoutingModule,
    CharacterCardModule
  ]
})
export class FavoritesModule { }
