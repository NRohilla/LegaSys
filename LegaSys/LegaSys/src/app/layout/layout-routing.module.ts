import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
//import { ResourceDetailsComponent } from './resource/resource-details/resource-details.component';

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
            { path: 'client', loadChildren: './client/client.module#ClientModule'},
            { path: 'resource', loadChildren: './resource/resource.module#ResourceModule' },
            { path: 'resource-details', loadChildren: './resource/resource-details/resource-details.module#ResourceDetailsModule' }
            { path: 'client', loadChildren: './client/client.module#ClientModule'},
            { path: 'client-details', loadChildren: './client/client-details/client-details.module#ClientDetailsModule'},
            { path: 'add-client', loadChildren: './client/addclient/addclient.module#AddclientModule'}

        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
