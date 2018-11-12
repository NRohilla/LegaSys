import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{ResourceDetailsComponent} from './resource-details.component';
import { ResourceDetailsRoutingModule } from './resource-details-routing.module';
import { ResourceCommunicationdetailsComponent } from '../components/resource.communicationdetails';
import { ResourceEmploymentdetailsComponent } from '../components/resource.employmentdetails';
import { ResourceSummaryComponent } from '../components/resource.summary';
import { ResourcePersonaldetailsComponent } from '../components/resource.personaldetails';
import { ResourceQualificationdetailsComponent } from '../components/resource.qualificationdetails';
import { PageHeaderModule } from './../../../shared/modules/page-header/page-header.module';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
@NgModule({
  imports: [
    CommonModule,
    ResourceDetailsRoutingModule,PageHeaderModule,MatTabsModule,MatFormFieldModule
  ],
  declarations: [ResourceDetailsComponent,ResourceEmploymentdetailsComponent,ResourceCommunicationdetailsComponent,ResourceSummaryComponent,ResourcePersonaldetailsComponent,ResourceQualificationdetailsComponent]
})
export class ResourceDetailsModule { }
