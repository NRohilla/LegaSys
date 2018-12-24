import { Component, OnInit, Input, Inject, ViewChild } from '@angular/core';
import { Project } from '../../projenctModel';
import {MatTableModule, MatTableDataSource} from '@angular/material/table';
import { MatDialog, MatSort, MatPaginator } from '@angular/material';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';
import { SharedService } from '../../../Shared/shared.service';
import { Router } from '@angular/router';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { HttpClient, HttpClientModule, HttpResponse, HttpRequest } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-resource',
  templateUrl: './project-resource.component.html',
  styleUrls: ['./project-resource.component.scss']
  })
export class ProjectResourceComponent implements OnInit {
  @Input('resourceDetails') resourcedetails: Project; 
  projectid: any;
  resourcelist:any;
  datasource:any;
  //@ViewChild(MatPaginator) paginator: MatPaginator;
   // @ViewChild(MatSort) sort: MatSort;
  displayedColumns = ['Resource_ID','ResourceName','TotalExp','ResourceEmailId','Shift','ReportingHeadName','Master_Role','actions'];
  // paginator: any;
  // sort: any;
  constructor(private route: ActivatedRoute,private http: HttpClient,@Inject(SESSION_STORAGE) private storage: StorageService,
  private apiService: SharedService, private router: Router, public dialog: MatDialog) {
      
    const id = this.route.snapshot.paramMap.get('ProjectID');
    this.projectid = id;
    this.RenderDataTable();
   }

  ngOnInit() {
  }
  selectedRowIndex: number;

  highlight(row:any){
       console.log("highlight"+ JSON.stringify(row));
      this.selectedRowIndex = row.ProjectResourceId;
  }
  RenderDataTable() {
    debugger;
    this.apiService.getAllResourceOnProject(this.projectid)
        .subscribe(
            res => { 
                this.resourcelist=res;               
                this.datasource = new MatTableDataSource(this.resourcelist);
                // this.datasource.paginator = this.paginator;
                // this.datasource.sort = this.sort;
                console.log("resource"+JSON.stringify (this.resourcelist));
            },
            error => {
                console.log('There was an error while retrieving Posts !!!' + error);
            });


}

}
