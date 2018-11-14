import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule, MatFormFieldModule } from '@angular/material';
import { ShiftsRoutingModule } from './shifts-routing.module';
import { PageHeaderModule } from '../../../shared/modules/page-header/page-header.module';
import { ShiftsComponent } from './shifts.component';
import { ShiftsService } from './shifts.service';

@NgModule({
    imports: [
        CommonModule,
        MatGridListModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatButtonModule, MatToolbarModule, MatFormFieldModule,
        ShiftsRoutingModule,
        PageHeaderModule
    ],
    providers: [ShiftsService],
    declarations: [ShiftsComponent]
})

export class ShiftsModule { }