import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import { FormsModule }   from '@angular/forms';
import { ResourceRoutingModule } from './resource-routing.module';
import { ResourceComponent } from './resource.component';
import {MatGridListModule  } from '@angular/material/grid-list';

import {MatFormFieldModule} from '@angular/material/form-field';
import { PageHeaderModule } from '../../shared';

@NgModule({
  imports: [
    CommonModule,
    ResourceRoutingModule,MatGridListModule,MatFormFieldModule,PageHeaderModule,FormsModule
  ],
  declarations: [ResourceComponent,]
=======
import { ResourceRoutingModule } from './resource-routing.module';
import { ResourceComponent } from './resource.component';
import{ MatGridListModule} from '@angular/material/grid-list';
import{MatTableModule} from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule} from '@angular/material/sort';
import {MatButtonModule}from '@angular/material/button';
import { MatToolbarModule, MatFormFieldModule } from '@angular/material';
import { ResourceService } from './resource.service';
@NgModule({
  imports: [
    CommonModule,
    ResourceRoutingModule,
    MatGridListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,MatToolbarModule,MatFormFieldModule
  ],
  providers:[ResourceService],
  declarations: [ResourceComponent]
>>>>>>> Bder
})
export class ResourceModule { }
