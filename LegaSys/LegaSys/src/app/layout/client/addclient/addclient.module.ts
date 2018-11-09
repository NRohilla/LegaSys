import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddclientRoutingModule } from './addclient-routing.module';
import { AddclientComponent } from './addclient.component';
import { PageHeaderModule } from './../../../shared';
import { MatFormFieldModule,MatInputModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ClientServiceService} from '../client-service.service';

@NgModule({
  imports: [
    CommonModule,
    AddclientRoutingModule,
    PageHeaderModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ClientServiceService],
    declarations: [AddclientComponent]
})
export class AddclientModule { }
