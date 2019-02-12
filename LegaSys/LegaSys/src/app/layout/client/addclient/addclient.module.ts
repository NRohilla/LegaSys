import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddclientRoutingModule } from './addclient-routing.module';
import { AddclientComponent } from './addclient.component';
import { PageHeaderModule } from './../../../shared';
import { MatFormFieldModule,MatInputModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ClientServiceService} from '../client-service.service';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatStepperModule} from '@angular/material/stepper';
import {MatCheckboxModule} from '@angular/material/checkbox';


@NgModule({
  imports: [
    CommonModule,
    AddclientRoutingModule,
    PageHeaderModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatAutocompleteModule,
    NgbModule.forRoot(),
    MatStepperModule,
    MatCheckboxModule
  ],
  providers: [ClientServiceService],
    declarations: [AddclientComponent]
})
export class AddclientModule { }
