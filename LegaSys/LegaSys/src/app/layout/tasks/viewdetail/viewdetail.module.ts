import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import{ViewdetailComponent} from './viewdetail.component';
import {ViewDetailRoutingModule } from './viewdetail-routing.module';
import { SubtaskComponent } from '../subtask/subtask.component';
import { EdittaskComponent } from '../edittask/edittask.component';
import { PageHeaderModule } from './../../../shared/modules/page-header/page-header.module';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import{MatSelectModule, MatTableModule, MatSnackBarModule, MatDatepickerModule,MatSortModule,MatTooltipModule} from '@angular/material';
import {MatInputModule,MatPaginatorModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatExpansionModule, MatExpansionPanel} from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  imports: [
    CommonModule,
    MatPaginatorModule,
    ViewDetailRoutingModule,
    PageHeaderModule,
    MatTabsModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatTableModule,
    MatExpansionModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTooltipModule
  
  ],
  declarations: [ViewdetailComponent,SubtaskComponent,EdittaskComponent],
  providers: []
})
export class viewdetailModule { }
