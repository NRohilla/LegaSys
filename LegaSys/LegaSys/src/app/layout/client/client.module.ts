import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule, MatFormFieldModule, MatInputModule, MatPaginatorModule, MatButtonModule, MatDialogModule, MatTabsModule, MatSortModule } from '@angular/material';
import { ClientServiceService } from './client-service.service';
import { FormsModule } from '@angular/forms';
import { PageHeaderModule } from '../../shared';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCardModule} from '@angular/material/card';


    

@NgModule({
  imports: [
    CommonModule,
    ClientRoutingModule,
    NgbModule.forRoot(),
    MatGridListModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    PageHeaderModule,
    MatTabsModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatCardModule
   
  ],
  providers: [ClientServiceService],
  declarations: [ClientComponent]
})
export class ClientModule { }
