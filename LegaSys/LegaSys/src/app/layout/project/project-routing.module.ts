import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectComponent } from './project.component';
import { EditComponent } from './edit/edit.component';
import { AddComponent } from './add/add.component';

const routes: Routes = [
    {
        path: '', children: [

            {path: '', component: ProjectComponent},
             {path: 'edit/:ProjectID', component: EditComponent},
            //{path: 'edit', component: EditComponent}
            {path: 'add', component: AddComponent}

        ]
    },
    {

    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
