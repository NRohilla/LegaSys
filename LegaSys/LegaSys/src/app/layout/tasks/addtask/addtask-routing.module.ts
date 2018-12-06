import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddtaskComponent } from './addtask.component';

const routes: Routes = [
    {
        path: '', component: AddtaskComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AddtaskRoutingModule { }
