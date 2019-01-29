import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ViewdetailComponent} from './viewdetail.component';
const routes: Routes = [
  { 
    path: '',
    component: ViewdetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewDetailRoutingModule { }
