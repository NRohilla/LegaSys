import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListTaskComponent } from './list-task.component';

const routes: Routes = [
    {
        path: '', component: ListTaskComponent
        
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }

