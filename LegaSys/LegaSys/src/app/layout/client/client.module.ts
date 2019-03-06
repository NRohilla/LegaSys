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
import {DeleteDialog} from './deleteDialog';   
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
//import { JwtModule } from '@auth0/angular-jwt';

import { ClientProjectsComponent } from './components/client-projects.component';


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
    MatCardModule,
    MatTooltipModule,
    MatSnackBarModule,
    // JwtModule.forRoot({   
    // })
   
  ],
  providers: [ClientServiceService],
  entryComponents: [DeleteDialog],
  declarations: [ClientComponent,DeleteDialog]
})
export class ClientModule { }
