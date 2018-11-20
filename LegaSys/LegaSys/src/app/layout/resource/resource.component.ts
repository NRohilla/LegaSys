import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { Resource } from './resource.model';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { ResourceService } from './resource.service';
import { Router } from '@angular/router';
import { StorageService, SESSION_STORAGE } from 'angular-webstorage-service';
import { ResourceDataServiceService } from '../../resource-data-service.service'

@Component({
    selector: 'app-resource',
    templateUrl: './resource.component.html',
    styleUrls: ['./resource.component.scss']
})

export class ResourceComponent implements OnInit {

    dataSource: any = [];

    displayedColumns: string[] = [ 'FullName', 'TotalExp', 'EmailId', 'Shift', 'Location_ID', 'ReportingHead_ID', 'Action'];
  
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    constructor(public dataService: ResourceService, private router: Router, private ResourceDataService: ResourceDataServiceService) {
    }

    ViewResourceDetails(element: any) {
        debugger;
        this.ResourceDataService.currentresoursedetails = element;
        this.router.navigate(['/resource-details']);
    }

    ngOnInit() {

        this.RenderDataTable();
    }

    RenderDataTable() {
        debugger;
        this.dataService.getResource()
            .subscribe(
                res => {
                    this.dataSource = new MatTableDataSource<Resource>();
                    this.dataSource.data = res;
                    console.log(res);

                    this.dataSource.paginator = this.paginator;
                    this.dataSource.sort = this.sort;
                },
                error => {
                    console.log('There was an error while retrieving data !!!' + error);
                });

    }
}
