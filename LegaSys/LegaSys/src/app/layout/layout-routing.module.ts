import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { ShiftsComponent } from './masters/shifts/shifts.component';
//import { ResourceDetailsComponent } from './resource/resource-details/resource-details.component';
import { CreateResourceComponent } from './resource/create-resource.component';


const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
            { path: 'forms', loadChildren: './form/form.module#FormModule' },
            { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
            { path: 'grid', loadChildren: './grid/grid.module#GridModule' },
            { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
            { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' },
            { path: 'client', loadChildren: './client/client.module#ClientModule' },
            { path: 'resource', loadChildren: './resource/resource.module#ResourceModule' },
            { path: 'resource-details', loadChildren: './resource/resource-details/resource-details.module#ResourceDetailsModule' },
            { path: 'client', loadChildren: './client/client.module#ClientModule' },
            { path: 'client-details', loadChildren: './client/client-details/client-details.module#ClientDetailsModule' },
            { path: 'add-client', loadChildren: './client/addclient/addclient.module#AddclientModule' },
            { path: 'project', loadChildren: './project/project.module#ProjectModule' },
            { path: 'resource-details', loadChildren: './resource/resource-details/resource-details.module#ResourceDetailsModule' },
            { path: 'shifts', loadChildren: './masters/shifts/shifts.module#ShiftsModule' },
            { path: 'create-resource', component: CreateResourceComponent },
            { path: 'locations', loadChildren: './masters/locations/locations.module#LocationsModule' },
            { path: 'roles', loadChildren: './masters/roles/roles.module#RolesModule' },
            { path: 'domains', loadChildren: './masters/domains/domains.module#DomainsModule' },
            { path: 'technologies', loadChildren: './masters/technologies/technologies.module#TechnologiesModule' },
            { path: 'leaves', loadChildren: './masters/leaves/leaves.module#LeavesModule' },
            { path: 'leavetype', loadChildren: './masters/leavetype/leavetype.module#LeavetypeModule' },
            { path: 'addtask', loadChildren: './tasks/addtask/addtask.module#AddtaskModule' },
            { path: 'tasks', loadChildren: './tasks/tasks.module#TasksModule' },
            { path: 'edittask', loadChildren: './tasks/edittask/edittask.module#EdittaskModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
