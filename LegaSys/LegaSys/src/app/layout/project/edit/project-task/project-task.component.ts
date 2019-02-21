import { Component, OnInit, Input, Inject } from '@angular/core';
import { ProjectAll } from '../../projectModel';
//import { AlertPromise } from 'selenium-webdriver';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatSort, MatPaginator, MatSnackBar } from '@angular/material';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';
import { SharedService } from '../../../Shared/shared.service';
import { Router, RouterLinkWithHref } from '@angular/router';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { HttpClient, HttpClientModule, HttpResponse, HttpRequest } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { ResourceService } from '../../../../layout/resource/resource.service';
import { Resource } from '../../../../layout/resource/resource.model';
import { FormArray, FormControl, FormGroup, FormGroupDirective, FormBuilder, Validators, NgModel, ValidatorFn, AbstractControl } from '@angular/forms';
import { SnackBarComponentExampleComponent } from '../../../project/snack-bar-component-example/snack-bar-component-example.component';

import { RowContext } from '@angular/cdk/table';
import * as $ from 'jquery';
import { DialogComponent } from '../../../../layout/masters/dialog/dialog.component';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-project-task',
  templateUrl: './project-task.component.html',

  styleUrls: ['./project-task.component.scss']
})
export class ProjectTaskComponent implements OnInit {

  @Input('taskDetails') taskdetails: ProjectAll;
  projectid: any;
  datasource: any;
  tasklist: any;
  constructor(private route: ActivatedRoute, private http: HttpClient, @Inject(SESSION_STORAGE) private storage: StorageService,
    private apiService: SharedService, private router: Router, private formBuilder: FormBuilder, public dialog: MatDialog, public dataService: ResourceService, public snackBar: MatSnackBar) {

    const id = this.route.snapshot.paramMap.get('ProjectID');
    this.projectid = id;


    //this.isSelected = false;
    //this.isEdit=false;
    //this.disable = false;

  }
  displayedColumns = ['ProjectTaskID', 'TaskTitle', 'Status', 'Task_AssignTo', 'actions'];

  ngOnInit() {
    this.RenderDataTable();

    //alert("tsk : "+JSON.stringify(this.taskdetails.TaskTitle+""+this.taskdetails.TaskAttachmentName+""+this.taskdetails.Description));
  }
  RenderDataTable() {
    //debugger;
    this.apiService.getalltaskofproject(this.projectid)
      .subscribe(
        res => {

          //debugger;
          this.tasklist = res;
          this.datasource = new MatTableDataSource(this.tasklist);

        },
        error => {
          console.log('There was an error while retrieving Posts !!!' + error);
        });


  }

  Navigate(ptid: any) {
    sessionStorage.setItem("currentId", ptid);
    this.router.navigate(['/edittask']);
  }

  onNoClick(): void {
    this.router.navigate(['project']);
  }
  applyFilter(filterValue: string) {
    debugger;
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.datasource.filter = filterValue;
  }
}
