import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
})
export class ResourceModule { }
