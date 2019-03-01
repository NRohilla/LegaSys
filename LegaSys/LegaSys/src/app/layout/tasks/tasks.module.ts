import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PageHeaderModule } from './../../shared';
import { MatCardModule } from '@angular/material/card';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule, MatFormFieldModule, MatInputModule, MatPaginatorModule, MatButtonModule, MatDialogModule, MatTabsModule, MatSortModule, MatProgressSpinnerModule,MatTooltipModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { TaskComponent } from './tasks.component';
import { TasksService } from './tasks.service';
import { TasksRoutingModule } from './task-routing.module';

import { MatDatepickerModule,
         MatIconModule,MatChipsModule,
         MatNativeDateModule,} from '@angular/material'
       


@NgModule({
    imports: [CommonModule,
        TasksRoutingModule,
        PageHeaderModule, NgbModule.forRoot(),
        MatGridListModule,
        MatTableModule,
        MatFormFieldModule,
        MatInputModule,
        MatPaginatorModule,
        MatButtonModule,
        MatDialogModule,
        FormsModule,
        PageHeaderModule,
        MatTabsModule,MatChipsModule,
        MatSortModule,
        MatProgressSpinnerModule,
        MatCardModule,
        MatDatepickerModule,
        MatIconModule,
        MatNativeDateModule,
        MatTooltipModule
    ],


    providers: [TasksService,MatDatepickerModule],
    declarations: [TaskComponent],
   

})
export class TasksModule { }



