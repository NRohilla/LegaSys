import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResourceRoutingModule } from './resource-routing.module';
import { ResourceComponent } from './resource.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule, MatFormFieldModule } from '@angular/material';
import { ResourceService } from './resource.service';
import { PageHeaderModule } from '../../shared/modules/page-header/page-header.module';
//import { NewreseouseComponent } from './newreseouse/newreseouse.component';


@NgModule({
    
    imports: [
        CommonModule,
        ResourceRoutingModule,
        MatGridListModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatButtonModule, MatToolbarModule, MatFormFieldModule, PageHeaderModule,
    ],
    providers: [ResourceService],
    declarations: [ResourceComponent],
})

export class ResourceModule { }
