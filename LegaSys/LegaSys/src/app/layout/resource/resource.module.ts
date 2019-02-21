import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResourceRoutingModule } from './resource-routing.module';
import { ResourceComponent } from './resource.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule, MatFormFieldModule, MatIconModule, MatInputModule, MatChipsModule, MatDividerModule, MatProgressBarModule, MatProgressSpinnerModule, MatCardModule, MatStepperModule, MatVerticalStepper, MatAutocompleteModule } from '@angular/material';
import { ResourceService } from './resource.service';
import { PageHeaderModule } from '../../shared/modules/page-header/page-header.module';
import { FormsModule } from '@angular/forms';
//import { Resource } from './components/resource.skillset.component';
//import { Resource } from './components/resource.allocation/resource.allocation.component';
//import { Resource } from './components/resource.qualification/resource.qualification.component';

@NgModule({

    imports: [
        CommonModule,
        ResourceRoutingModule,
        MatGridListModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        FormsModule,
        MatButtonModule, MatToolbarModule, MatFormFieldModule, PageHeaderModule, MatIconModule,
        MatInputModule,MatProgressSpinnerModule,MatCardModule
    ],
    providers: [ResourceService],
    declarations: [ResourceComponent ],
})

export class ResourceModule { }
