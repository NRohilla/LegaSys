import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderModule } from '../../shared';
import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTableModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatButtonModule} from '@angular/material/button';
import {ClientServiceService} from './client-service.service'

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
    PageHeaderModule
    
    
  ],
  providers: [ClientServiceService],
  declarations: [ClientComponent]

})
export class ClientModule { }
