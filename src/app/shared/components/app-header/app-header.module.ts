import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { InputTextModule } from "primeng/inputtext";
import { AppHeaderComponent } from "./app-header.component";

@NgModule({
    declarations: [
        AppHeaderComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        InputTextModule,
        FormsModule
    ],
    exports: [
        AppHeaderComponent
    ]
})
export class HeaderModule {}