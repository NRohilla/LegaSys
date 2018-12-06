import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { CreateResourceComponent } from './resource/create-resource.component';
import { MatFormFieldModule, MatOptionModule, MatSelectModule, MatInputModule, MatButtonModule, MatDialogModule, MatSnackBarModule } from '@angular/material';
import { DialogComponent } from './masters/dialog/dialog.component';
import { PageHeaderModule } from '../shared';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        MatFormFieldModule,
        MatOptionModule,
        MatSelectModule,
        MatInputModule,
        MatButtonModule,
        LayoutRoutingModule,
        TranslateModule,
        NgbDropdownModule.forRoot(),
        MatDialogModule,
        PageHeaderModule,
        FormsModule,
        ReactiveFormsModule,
        MatSnackBarModule
    ],
    declarations: [LayoutComponent, SidebarComponent, HeaderComponent, CreateResourceComponent, DialogComponent],
    entryComponents: [DialogComponent]
})
export class LayoutModule { }

