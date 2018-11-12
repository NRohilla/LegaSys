import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { Resource } from './resource.model';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { ResourceService } from './resource.service'
import { StorageService, SESSION_STORAGE } from 'angular-webstorage-service';

const ELEMENT_DATA: Resource[] = [
    { UserDetailID: 1, Firstname: 'Virtual ', Middlename: 'I', Lastname: 'Block', TotalExp: "1.5", EmailId: "aaa@gmail.com", Shift_ID: "S01", Location_ID: "L01", ReportingHead_ID: "RH01" },
    { UserDetailID: 2, Firstname: 'Virtual', Middlename: 'K', Lastname: 'Block', TotalExp: "2.5", EmailId: "aaa@gmail.com", Shift_ID: "S01", Location_ID: "L01", ReportingHead_ID: "RH01" },
    { UserDetailID: 3, Firstname: 'Virtual', Middlename: 'L', Lastname: 'Block', TotalExp: "3.5", EmailId: "aaa@gmail.com", Shift_ID: "S01", Location_ID: "L01", ReportingHead_ID: "RH01" },
    { UserDetailID: 4, Firstname: 'Virtual', Middlename: 'M', Lastname: 'Block', TotalExp: "4.5", EmailId: "aaa@gmail.com", Shift_ID: "S01", Location_ID: "L01", ReportingHead_ID: "RH01" },
    { UserDetailID: 5, Firstname: 'Virtual', Middlename: 'N', Lastname: 'Block', TotalExp: "5.5", EmailId: "aaa@gmail.com", Shift_ID: "S01", Location_ID: "L01", ReportingHead_ID: "RH01" },
    { UserDetailID: 6, Firstname: 'Virtual', Middlename: 'O', Lastname: 'Block', TotalExp: "6.5", EmailId: "aaa@gmail.com", Shift_ID: "S01", Location_ID: "L01", ReportingHead_ID: "RH01" },
    { UserDetailID: 7, Firstname: 'Virtual', Middlename: 'P', Lastname: 'Block', TotalExp: "7.5", EmailId: "aaa@gmail.com", Shift_ID: "S01", Location_ID: "L01", ReportingHead_ID: "RH01" },
    { UserDetailID: 8, Firstname: 'Virtual', Middlename: 'Q', Lastname: 'Block', TotalExp: "8.5", EmailId: "aaa@gmail.com", Shift_ID: "S01", Location_ID: "L01", ReportingHead_ID: "RH01" },
    { UserDetailID: 9, Firstname: 'Virtual', Middlename: 'R', Lastname: 'Block', TotalExp: "9.5", EmailId: "aaa@gmail.com", Shift_ID: "S01", Location_ID: "L01", ReportingHead_ID: "RH01" },
    { UserDetailID: 10, Firstname: 'Virtual', Middlename: 'S', Lastname: 'Block', TotalExp: "10.5", EmailId: "aaa@gmail.com", Shift_ID: "S01", Location_ID: "L01", ReportingHead_ID: "RH01" },
    { UserDetailID: 11, Firstname: 'Virtual', Middlename: 'T', Lastname: 'Block', TotalExp: "11.5", EmailId: "aaa@gmail.com", Shift_ID: "S01", Location_ID: "L01", ReportingHead_ID: "RH01" },
    { UserDetailID: 12, Firstname: 'Virtual', Middlename: 'U', Lastname: 'Block', TotalExp: "12.5", EmailId: "aaa@gmail.com", Shift_ID: "S01", Location_ID: "L01", ReportingHead_ID: "RH01" },

];
@Component({
    selector: 'app-resource',
    templateUrl: './resource.component.html',
    styleUrls: ['./resource.component.scss']
})

export class ResourceComponent implements OnInit {

    dataSource: any = [];
    //resources :Resource[];
    displayedColumns: string[] = ['UserDetailID', 'FullName', 'TotalExp', 'EmailId', 'Shift_ID', 'Location_ID', 'ReportingHead_ID', 'Action'];
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
