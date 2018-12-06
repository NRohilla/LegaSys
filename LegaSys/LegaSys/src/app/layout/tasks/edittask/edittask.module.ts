import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { EdittaskRoutingModule } from './edittask-routing.module';
import { PageHeaderModule } from '../../../shared/modules/page-header/page-header.module';
import { EdittaskComponent } from './edittask.component';


@NgModule({
    imports: [FormsModule,
        ReactiveFormsModule,
        CommonModule,
        EdittaskRoutingModule,
        PageHeaderModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule
    ],
    declarations: [EdittaskComponent]
})
export class EdittaskModule {
}
