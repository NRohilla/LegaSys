import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientDetailsRoutingModule } from './client-details-routing.module';
import { ClientDetailsComponent } from './client-details.component';
import { PageHeaderModule } from './../../../shared/modules/page-header/page-header.module';
import { MatTabsModule } from '@angular/material/tabs';
import { ClientDetailsSummaryComponent } from '../components/client-details-summary.component';
import { ClientDetailsPersonalDetailsComponent } from '../components/client-details-personal-details.component';
import { ClientDetailsCoClientDetailsComponent } from '../components/client-details-co-client-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ClientProjectsComponent } from '../components/client-projects.component';
import { MatTableModule, MatNativeDateModule, MatSelectModule } from '@angular/material';
import {MatPaginatorModule} from '@angular/material/paginator';
import { ClientProfesionalDetailsComponent } from '../components/client-profesional-details.component';
import {MatDatepickerModule} from '@angular/material/datepicker';

@NgModule({
  imports: [
    CommonModule,
    ClientDetailsRoutingModule,
    PageHeaderModule,
    MatTabsModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    MatAutocompleteModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule
   
   
   
  ],
  
  declarations: [ClientDetailsComponent, ClientDetailsSummaryComponent, ClientDetailsPersonalDetailsComponent, ClientDetailsCoClientDetailsComponent,
    ClientProjectsComponent,ClientProfesionalDetailsComponent]
})
export class ClientDetailsModule { }
