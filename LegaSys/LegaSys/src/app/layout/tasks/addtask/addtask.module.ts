import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PageHeaderModule } from '../../../shared/modules/page-header/page-header.module';
import { AddtaskComponent } from './addtask.component';


import {
    MatButtonModule,
    MatGridListModule,
    MatInputModule,
    MatListModule,
    MatPaginatorModule,
    MatSelectModule,
    MatDatepickerModule,
    MatIconModule,
    MatNativeDateModule ,
    MatExpansionModule,
    MatTooltipModule
    
   
} from '@angular/material';
import { AddtaskRoutingModule } from './addtask-routing.module';

@NgModule({
    imports: [
        ReactiveFormsModule,
        FormsModule,
        CommonModule,
        MatButtonModule,
        MatGridListModule,
        MatListModule,
        MatPaginatorModule,
        MatInputModule,
        MatSelectModule,
        PageHeaderModule,
        MatDatepickerModule,
        MatIconModule,
        MatNativeDateModule,
        AddtaskRoutingModule,
        MatExpansionModule,
        MatTooltipModule,
    ],
    declarations: [[AddtaskComponent]],
    providers:[],
})
export class AddtaskModule { }