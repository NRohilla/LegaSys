import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubTaskRoutingModule} from './subtask-routing.module';
import { SubtaskComponent } from './subtask.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { PageHeaderModule } from '../../../shared';
import { MatCardModule } from '@angular/material/card';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule, MatFormFieldModule, MatInputModule, MatPaginatorModule, MatButtonModule, MatDialogModule, MatTabsModule, MatSortModule, MatSpinner } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks.service';


@NgModule({
    imports: [CommonModule,
              SubTaskRoutingModule,
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
              MatTabsModule,
              MatSortModule,
              MatProgressSpinnerModule,
              MatCardModule 
            
            ],
            providers: [TasksService],
    declarations: [SubtaskComponent]
})
export class SubTaskModule {}
