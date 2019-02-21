import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { ProjectComponent } from './project.component';
import {
    MatProgressSpinnerModule, MatDialogModule, MatIconModule, MatSidenavModule, MatSnackBarModule, MatMenuModule, MatProgressBarModule,
    MatCardModule, MatToolbarModule, MatButtonModule, MatTableModule, MatInputModule,
    MatPaginatorModule, MatPaginator, MatSortModule, MatSelectModule, MatTooltipModule, MatTooltip, MatListModule, MatExpansionModule,
    MatCheckboxModule, MatCheckbox, MatTabsModule, MatDatepickerModule, MatNativeDateModule, MatChipsModule, MatSlideToggleModule,
     MatAutocompleteModule, DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatFormFieldModule, MatRadioModule,
  } from '@angular/material';
import { EditComponent } from './edit/edit.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PageHeaderModule } from '../../shared';
import { Project } from '../project/projenctModel';
import { AddComponent } from './add/add.component';
import { SnackBarComponentExampleComponent } from './snack-bar-component-example/snack-bar-component-example.component';
import { ProjectInfoComponent } from './edit/project-info/project-info.component';
import { ProjectResourceComponent } from './edit/project-resource/project-resource.component';
import { ProjectClientComponent } from './edit/project-client/project-client.component';
import { ProjectTaskComponent } from './edit/project-task/project-task.component';
import { DialogComponent } from '../masters/dialog/dialog.component';
import { DeleteDialog } from '../client/deleteDialog';

@NgModule({
  imports: [
    CommonModule,
    ProjectRoutingModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule, PageHeaderModule 

  ],
  declarations: [ProjectComponent, EditComponent, AddComponent, SnackBarComponentExampleComponent,ProjectInfoComponent, ProjectResourceComponent, ProjectClientComponent, ProjectTaskComponent,DeleteDialog],
  entryComponents: [AddComponent, SnackBarComponentExampleComponent,DeleteDialog],
  providers: [Project]
})
export class ProjectModule { }
