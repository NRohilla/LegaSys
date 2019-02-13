import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import {
    ProjectsComponent,
    NotificationComponent,
    ClientsComponent,
    TasksComponent,
    ResourcesComponent,
    ChatComponent,
    TimelineComponent
} from './components';
import { StatModule } from '../../shared';
import { DashbordService } from './dashbord.service';

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        DashboardRoutingModule,
        StatModule
    ],
    declarations: [
        DashboardComponent,
        ProjectsComponent,
        NotificationComponent,
        ClientsComponent,
        TasksComponent,
        ResourcesComponent,
        TimelineComponent,ChatComponent
    ],
    providers: [DashbordService],
})
export class DashboardModule {}
