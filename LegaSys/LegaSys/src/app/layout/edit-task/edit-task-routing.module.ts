import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditTaskComponent } from './edit-task.component';

const routes: Routes = [
    {
        path: '',
        component: EditTaskComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EditTaskRoutingModule {}
