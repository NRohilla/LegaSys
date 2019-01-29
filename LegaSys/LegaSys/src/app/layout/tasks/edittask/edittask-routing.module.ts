import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EdittaskComponent } from './edittask.component';

const routes: Routes = [
    {
        path: '',
        component: EdittaskComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EdittaskRoutingModule {}
