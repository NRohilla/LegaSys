import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { CreateResourceComponent } from './resource/create-resource.component';
import { MatFormFieldModule, MatOptionModule, MatSelectModule, MatInputModule, MatButtonModule, MatDialogModule, MatSnackBarModule, MatAutocompleteModule } from '@angular/material';
import { DialogComponent } from './masters/dialog/dialog.component';
import { PageHeaderModule } from '../shared';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material';
import { SubtaskComponent } from './tasks/subtask/subtask.component';
import { EdittaskComponent } from './tasks/edittask/edittask.component';
import { TimelineComponent, ChatComponent } from './dashboard/components';
import { FilterPipe } from './project/filter.pipe';

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
        MatSnackBarModule,
        MatPaginatorModule,
        MatAutocompleteModule
       
    ],
    providers: [],
    declarations: [LayoutComponent, SidebarComponent, HeaderComponent, CreateResourceComponent,FilterPipe,DialogComponent],
    entryComponents: [DialogComponent],
    exports: [
        FilterPipe
     ]
})
export class LayoutModule { }

