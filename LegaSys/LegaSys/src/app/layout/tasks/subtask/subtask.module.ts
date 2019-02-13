//changes by team
import { NgModule  } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubTaskRoutingModule} from './subtask-routing.module';
import { SubtaskComponent } from './subtask.component';
//import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { PageHeaderModule } from '../../../shared';
import { MatCardModule } from '@angular/material/card';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule, MatFormFieldModule, MatInputModule, MatPaginatorModule, MatButtonModule, MatDialogModule, MatTabsModule, MatSortModule ,MatProgressSpinnerModule,MatExpansionModule} from '@angular/material';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { TasksService } from '../tasks.service';
//TEAM 

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
              MatCardModule ,
              MatExpansionModule,
              ReactiveFormsModule
            
            ],
            providers: [TasksService],
    declarations: [],
 
})
export class SubTaskModule {}
