import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FavoritesComponent } from "./favorites.component";

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: FavoritesComponent
            }
        ])
    ]
})
export class FavoritesRoutingModule { }