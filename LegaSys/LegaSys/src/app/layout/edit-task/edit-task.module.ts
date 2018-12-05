import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { EditTaskRoutingModule } from './edit-task-routing.module';
import { EditTaskComponent } from './edit-task.component';
import { PageHeaderModule } from '../../shared';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
    imports: [FormsModule,
        ReactiveFormsModule,
        CommonModule, 
        EditTaskRoutingModule,
        PageHeaderModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule
],
    declarations: [EditTaskComponent]
})
export class EditTaskModule

{

    MatSelectModule


}
