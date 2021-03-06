import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{ResourceDetailsComponent} from './resource-details.component';
import { ResourceDetailsRoutingModule } from './resource-details-routing.module';
import { ResourceSummaryComponent } from '../components/resource.summary';
import { ResourcePersonaldetailsComponent } from '../components/resource.personaldetails';
import { PageHeaderModule } from './../../../shared/modules/page-header/page-header.module';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import{MatSelectModule, MatTableModule} from '@angular/material';
//import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResourceBackgrounddetailsComponent } from '../components/resource.backgrounddetails.component';
import {MatExpansionModule, MatExpansionPanel} from '@angular/material/expansion';

@NgModule({
  imports: [
    CommonModule,
    ResourceDetailsRoutingModule,PageHeaderModule,MatTabsModule,MatFormFieldModule,MatSelectModule,FormsModule,MatInputModule,ReactiveFormsModule,MatTableModule,MatExpansionModule
  ],
  declarations: [ResourceDetailsComponent,ResourceSummaryComponent,ResourcePersonaldetailsComponent,ResourceBackgrounddetailsComponent]
})
export class ResourceDetailsModule { }
