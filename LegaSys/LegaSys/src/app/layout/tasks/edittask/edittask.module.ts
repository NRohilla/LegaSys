import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatNativeDateModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { EdittaskRoutingModule } from './edittask-routing.module';
import { PageHeaderModule } from '../../../shared/modules/page-header/page-header.module';
import { EdittaskComponent } from './edittask.component';

import {
    MatButtonModule,
    MatGridListModule,
  
    MatListModule,
    MatPaginatorModule,
    
    MatDatepickerModule,
   
 
  
    MatIconModule,
  
    MatExpansionModule,
    
   
} from '@angular/material';
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
        
    MatNativeDateModule ,
       
        EdittaskRoutingModule,
        MatExpansionModule,
        MatFormFieldModule,
    ],
    declarations: [[EdittaskComponent]],
  providers:[],
})
export class EdittaskModule {
}
