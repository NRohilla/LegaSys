import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{ResourceDetailsComponent} from './resource-details.component';
import { ResourceDetailsRoutingModule } from './resource-details-routing.module';
import { ResourceSummaryComponent } from '../components/resource.summary';
import { ResourcePersonaldetailsComponent } from '../components/resource.personaldetails';
import { PageHeaderModule } from './../../../shared/modules/page-header/page-header.module';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import{MatSelectModule} from '@angular/material';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    ResourceDetailsRoutingModule,PageHeaderModule,MatTabsModule,MatFormFieldModule,MatSelectModule,FormsModule
  ],
  declarations: [ResourceDetailsComponent,ResourceSummaryComponent,ResourcePersonaldetailsComponent]
})
export class ResourceDetailsModule { }
