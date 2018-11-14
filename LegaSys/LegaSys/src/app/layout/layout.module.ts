import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';import { HeaderComponent } from './components/header/header.component';
import { CreateResourceComponent } from './resource/create-resource.component';
import { MatFormFieldModule, MatOptionModule, MatSelectModule, MatInputModule, MatButtonModule } from '@angular/material';
//import { CreateResourceComponent } from './resource/create-resource.component';
//import { ResourceDetailsComponent } from './resource/resource-details/resource-details.component';

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
        NgbDropdownModule.forRoot()
    ],
    declarations: [LayoutComponent, SidebarComponent, HeaderComponent,CreateResourceComponent]
})
export class LayoutModule {}

