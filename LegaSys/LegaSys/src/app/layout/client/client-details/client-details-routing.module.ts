import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ClientDetailsComponent} from './client-details.component'

const routes: Routes = [
  {
    path: '',
    component:ClientDetailsComponent,
   
    
}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientDetailsRoutingModule { }
