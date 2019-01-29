import { DialogComponent } from "./dialog.component";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatDialogModule } from "@angular/material";


@NgModule({
    imports: [
        FormsModule,
        MatDialogModule
    ],
    providers: [],
    declarations: [DialogComponent]
})

export class DialogModule { }