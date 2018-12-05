import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule, MatFormFieldModule, MatSelectModule, MatIconModule, MatDialogModule, MatSnackBarModule, MatInputModule } from '@angular/material';
import { PageHeaderModule } from '../../../shared/modules/page-header/page-header.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LeavetypeRoutingModule } from './leavetype-routing.module';
import { LeavetypeService } from './leavetype.service';
import { LeavetypeComponent } from './leavetype.component';

@NgModule({
    imports: [
        CommonModule,
        MatGridListModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatButtonModule, MatToolbarModule, MatFormFieldModule,
        FormsModule, ReactiveFormsModule,
        LeavetypeRoutingModule,
        PageHeaderModule,
        MatInputModule,
        MatSelectModule, MatIconModule, MatDialogModule, MatSnackBarModule
    ],
    providers: [LeavetypeService],
    declarations: [LeavetypeComponent]
})

export class LeavetypeModule { }