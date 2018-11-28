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
import { RolesRoutingModule } from './roles-routing.module';
import { RolesComponent } from './roles.component';
import { RolesService } from './roles.service';

@NgModule({
    imports: [
        CommonModule,
        MatGridListModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatButtonModule, MatToolbarModule, MatFormFieldModule,
        FormsModule, ReactiveFormsModule,
        RolesRoutingModule,
        PageHeaderModule,
        MatInputModule,
        MatSelectModule, MatIconModule, MatDialogModule, MatSnackBarModule
    ],
    providers: [RolesService],
    declarations: [RolesComponent]
})

export class RolesModule { }