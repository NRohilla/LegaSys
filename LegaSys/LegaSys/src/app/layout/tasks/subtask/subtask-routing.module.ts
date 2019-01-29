import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{SubtaskComponent} from './subtask.component';
const routes: Routes = [
  { 
    path: '',
    component: SubtaskComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubTaskRoutingModule { }
