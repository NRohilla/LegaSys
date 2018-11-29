import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './list-task.routing.module';
import { ListTaskComponent } from './list-task.component';
import { PageHeaderModule } from './../../shared';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule, MatFormFieldModule, MatInputModule, MatPaginatorModule, MatButtonModule, MatDialogModule, MatTabsModule, MatSortModule } from '@angular/material';
import { TaskServiceService } from '../taskservice.service';
import { FormsModule } from '@angular/forms';
import { ViewChild } from '@angular/core'


@NgModule({
    imports: [  CommonModule, 
                TaskRoutingModule, 
                PageHeaderModule,NgbModule.forRoot(),
                MatGridListModule,
                MatTableModule,
                MatFormFieldModule,
                MatInputModule,
                MatPaginatorModule,
                MatButtonModule,
                MatDialogModule,
                FormsModule,
                PageHeaderModule,
                MatTabsModule,
                MatSortModule,
            ],
            providers: [TaskServiceService],
    declarations: [ListTaskComponent]
})
export class ListTaskModule {}






