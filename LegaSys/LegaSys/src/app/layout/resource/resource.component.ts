import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { Resource } from './resource.model';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { ResourceService } from './resource.service'
import { StorageService, SESSION_STORAGE } from 'angular-webstorage-service';

@Component({
    selector: 'app-resource',
    templateUrl: './resource.component.html',
    styleUrls: ['./resource.component.scss']
})

export class ResourceComponent implements OnInit {

    dataSource: any = [];
   
    displayedColumns: string[] = ['UserDetailID', 'FullName', 'TotalExp', 'EmailId', 'Shift', 'Location_ID', 'ReportingHead_ID', 'Action'];
    //dataSource = ELEMENT_DATA;
    //dataSource = new MatTableDataSource<Resource>();

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    constructor(public dataService: ResourceService) { }

    ngOnInit() {

        this.RenderDataTable();
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

    }

    RenderDataTable() {
        debugger;
        this.dataService.getResource()
            .subscribe(
                res => {
                    this.dataSource = new MatTableDataSource<Resource>();
                    this.dataSource.data = res;

                    this.dataSource.paginator = this.paginator;
                    this.dataSource.sort = this.sort;

                    console.log(this.dataSource.data);
                },
                error => {
                    console.log('There was an error while retrieving data !!!' + error);
                });

    }
}
