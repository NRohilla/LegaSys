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
import { TechnologiesService } from './technologies.service';
import { TechnologiesComponent } from './technologies.component';
import { TechnologiesRoutingModule } from './technologies-routing.module';

@NgModule({
    imports: [
        CommonModule,
        MatGridListModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatButtonModule, MatToolbarModule, MatFormFieldModule,
        FormsModule, ReactiveFormsModule,
        TechnologiesRoutingModule,
        PageHeaderModule,
        MatInputModule,
        MatSelectModule, MatIconModule, MatDialogModule, MatSnackBarModule
    ],
    providers: [TechnologiesService],
    declarations: [TechnologiesComponent]
})

export class TechnologiesModule { }