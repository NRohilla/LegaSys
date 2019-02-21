import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import{ResourceDetailsComponent} from './resource-details.component';
import { ResourceDetailsRoutingModule } from './resource-details-routing.module';
import { ResourceSummaryComponent } from '../components/resource.summary';
import { ResourcePersonaldetailsComponent } from '../components/resource.personaldetails';
import { PageHeaderModule } from './../../../shared/modules/page-header/page-header.module';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import{MatSelectModule, MatTableModule, MatSnackBarModule, MatDatepickerModule, MatChipsModule, MatIconModule, MatDividerModule, MatAutocompleteModule, MatToolbarModule, MatCheckboxModule, MatListModule, MatStepperModule, MatVerticalStepper, MatSortModule, MatTooltipModule} from '@angular/material';
//import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResourceBackgrounddetailsComponent } from '../components/resource.backgrounddetails.component';
import {MatExpansionModule, MatExpansionPanel} from '@angular/material/expansion';
import {MatNativeDateModule} from '@angular/material';
import { ResourceQualificationComponent } from '../components/resource.qualification.component';
import { ResourceAllocationComponent } from '../components/resource.allocation.component';
import { ResourceSkillsetComponent } from '../components/resource.skillset.component';

@NgModule({
  imports: [
    CommonModule,
    ResourceDetailsRoutingModule,PageHeaderModule,MatTabsModule,MatFormFieldModule,MatSelectModule,FormsModule,
    MatInputModule,ReactiveFormsModule,MatTableModule,MatExpansionModule,MatSnackBarModule,MatNativeDateModule,
    MatDatepickerModule,MatChipsModule,MatIconModule,MatAutocompleteModule,MatToolbarModule,MatCheckboxModule,MatListModule,MatSortModule,MatTooltipModule
  ],
  declarations: [ResourceDetailsComponent,ResourceSummaryComponent,ResourcePersonaldetailsComponent,ResourceBackgrounddetailsComponent,ResourceQualificationComponent,ResourceAllocationComponent,ResourceSkillsetComponent],
  providers: [DatePipe]
})
export class ResourceDetailsModule { }
