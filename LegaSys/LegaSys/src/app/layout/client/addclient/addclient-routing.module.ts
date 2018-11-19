import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddclientComponent } from './addclient.component';

const routes: Routes = [
  {
    path: '',
    component: AddclientComponent
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddclientRoutingModule { }
