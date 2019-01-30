import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { Resource } from './resource.model';
import { MatSort, MatPaginator, MatTableDataSource, MatSnackBar, MatDialog } from '@angular/material';
import { ResourceService } from './resource.service';
import { Router } from '@angular/router';
import { StorageService, SESSION_STORAGE } from 'angular-webstorage-service';
import { Title } from '@angular/platform-browser';
import { DialogComponent } from '../masters/dialog/dialog.component';

@Component({
    selector: 'app-resource',
    templateUrl: './resource.component.html',
    styleUrls: ['./resource.component.scss']
})

export class ResourceComponent implements OnInit {
    isLoading=true;
    dataSource: any = [];

    displayedColumns: string[] = ['FullName', 'TotalExp', 'EmailId', 'Shift', 'Location_ID', 'ReportingHead_ID', 'Action'];

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
   
    constructor(public dataService: ResourceService, public dialog: MatDialog, private router: Router, public snackBar: MatSnackBar, public titleService: Title) {
        titleService.setTitle("LegaSys - Resources");
    }

    ViewResourceDetails(userDetailID: any, isExperienced: any,dateofJoining:any) {
        debugger;
        localStorage.setItem('UserDetailID', userDetailID);
        localStorage.setItem('IsExperienced', isExperienced);
        // localStorage.setItem('PrimarySkillSet',primarySkillSet);
        // localStorage.setItem('SecondarySkillSet',secondarySkillSet);
        // localStorage.setItem('Qualification',qualification);
        localStorage.setItem('DateOfJoining',dateofJoining);
        this.router.navigate(['/resource-details']);
    }

    DeleteResource(id): void {

        const dialogRef = this.dialog.open(DialogComponent, {
            width: '325px',
            data: { status: "delete", confirm: true }
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.dataService.deleteResource(id).subscribe(res => {
                    if (res) {
                        this.snackBar.open("User deleted successfully", "Ok", {
                            duration: 3000,
                        });
                        this.ngOnInit();
                    }
                });
            }
        }); 
    }

    ngOnInit() {
        this.RenderDataTable();
    }

    RenderDataTable() {
        debugger;
        this.dataService.getResource()
            .subscribe( 
                res => {
                    debugger;
                    this.isLoading=false;
                    this.dataSource = new MatTableDataSource<Resource>();                   
                    this.dataSource.data = res;

                    //console.log(res);
                    this.dataSource.paginator = this.paginator;
                    this.dataSource.sort = this.sort;
                },
                error => {
                    console.log('There was an error while retrieving data !!!' + error);
                });
    }   
}
