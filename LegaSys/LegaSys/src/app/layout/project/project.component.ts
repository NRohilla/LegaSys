import { Component, OnInit, Inject, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { HttpClient, HttpClientModule, HttpResponse, HttpRequest } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { stringify } from '@angular/core/src/render3/util';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { MatTable, MatTableDataSource, MatPaginator, MatSort, MatDialog, MatSnackBar  } from '@angular/material';
import { StorageService, SESSION_STORAGE } from 'angular-webstorage-service';
import { SharedService } from '../Shared/shared.service';
import { Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';
import { EditComponent } from './edit/edit.component';
import { Project } from '../project/projenctModel';
import { AddComponent } from './add/add.component';
import { BehaviorSubject, fromEvent } from 'rxjs';
//import { SnackBarComponentExampleComponent } from './snack-bar-component-example/snack-bar-component-example.component';
@Component({
    selector: 'app-project',
    templateUrl: './project.component.html',
    styleUrls: ['./project.component.scss'],
    animations: [routerTransition()]
})

export class ProjectComponent implements OnInit, AfterViewInit {
    project: any;
    displayedColumns = ['ProjectID','Title', 'ClientName', 'DomainName', 'Description', 'actions'];
    projectdetails: any;
    exampleDatabase: SharedService | null;
    index: number;
    id: number;
    componentRef: any;
    disableforadd: Boolean = true;
    @ViewChild('filter') filter: ElementRef;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    dataSource: any;
    constructor(private http: HttpClient, @Inject(SESSION_STORAGE) private storage: StorageService,
        private apiService: SharedService, private router: Router, public dialog: MatDialog) {
        this.RenderDataTable();
        this.dataSource = new MatTableDataSource(this.project);
    }

    ngOnInit() {

    }

    // addProject(project: Project) {
    addProject() {        
        this.router.navigate(['./project/add']);
        // {path: 'project', component: ProjectComponent}


        // const dialogRef = this.dialog.open(AddComponent, {
        //     data: { issue: project }
        // });
        // dialogRef.afterClosed().subscribe(result => {
        //     if (result === 1) {
        //         this.refreshTable();
        //         this.RenderDataTable();
        //     }
        // });
    }

    RenderDataTable() {
        this.apiService.getAllProject()
            .subscribe(
                res => {
                    this.project = res;
                    this.dataSource = new MatTableDataSource(this.project);
                    this.dataSource.paginator = this.paginator;
                    this.dataSource.sort = this.sort;
                    console.log("project"+JSON.stringify (this.project));
                },
                error => {
                    console.log('There was an error while retrieving Posts !!!' + error);
                });


    }
    editproject(data: any) {
        this.router.navigate(['./project/edit', data.ProjectID]);
    }
    private refreshTable() {
    }
    deleteproject(id, status) {
        // const dialogRef = this.dialog.open("Test", {
        //     width: '250px',
        //   //data: {name: this.name, animal: this.animal}
        //   });
        if (status = 1) {
            const Id = id;
            if (confirm('Are you sure to Activate this record ?' + id) === true) {
                this.apiService.DeletProject(id).subscribe(res => {
                    this.RenderDataTable();
                });
            }
        } else {

            const Id = id;
            if (confirm('Are you sure to delete this record ?' + id) === true) {
                this.apiService.DeletProject(id).subscribe(res => {
                    this.RenderDataTable();
                });
            }
        }
    }

    applyFilter(filterValue: string) {
        filterValue = filterValue.trim();
        filterValue = filterValue.toLowerCase();
        this.dataSource.filter = filterValue;
    }
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }
    // openSnackBar() {
    //     this.snackBar.openFromComponent(SnackBarComponentExampleComponent, {
    //       duration: 500,
    //     });
    // }
}
