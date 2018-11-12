import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD
import {ResourceComponent} from './resource.component';



const routes: Routes = [
  
  { 
    path: '',
    component: ResourceComponent,
    children: [
       
        //{ path: 'add-resource', component:AddResourceComponent },
    ]
  }
  
=======
import { ResourceComponent } from './resource.component';

const routes: Routes = [
  {
    path:'', component:ResourceComponent
  }
>>>>>>> Bder
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResourceRoutingModule { }
<<<<<<< HEAD
 
=======
>>>>>>> Bder
