import { Component, OnInit } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TaskComponent implements OnInit {

  dataSource: any = [];
  isLoading = true;

  //Project Updated Date and project Updated By will Change as required.........
  //'ProjectUpdated_By','projectUpdated_Date', 'Updated_By' ,'Updated_Date',

  displayedColumns: string[] = ['TaskTitle', 'Description', 'Project_Title', 'Project_Description', 'Action'];

  constructor(public dataService: TasksService, private router: Router) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit()
   {
    this.FetchDataTable();
   
  }

  //  Method to get data from database
  
  FetchDataTable() {
    this.dataService.GetAllProjectsTask().subscribe(
      res => {
        this.dataSource = new MatTableDataSource<TaskModel>();
        this.isLoading = false;
        this.dataSource.data = res;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error => {
        this.isLoading = false
        console.log('There was an error while retrieving data !!!' + error);
      });
  }
  //send id
  ViewTask(ID) {
    sessionStorage.setItem("currentId", ID);
    this.router.navigate(['/viewtask']);
  }


}

export class TaskModel {
  //Fields Of Task Table

  ProjectTaskID : number ;
  TaskTitle : string;
  Description: string;
  Attachment_ID : number;
  Created_By : number;
  Updated_By : number;
  Created_Date : Date ;
  Updated_Date : Date ;

  //Fields For Projects Table

  Project_ID :number;
  Project_Title : string;
  Project_Description : string ;
  Client_ID : number ;
  ClientName :string;
  Project_Domain_ID : number ;
  ProjectCreated_By : number ;
  ProjectUpdated_By : number ;
  ProjectCreated_Date :Date;
  projectUpdated_Date : Date;
  Project_Status : Number ;

  //Fields For Attachment Table

  AttachmentPath : string;
  AttachmentType :string;

  //Fields For SubTask Table

  ProjectSubTaskID:number;
  SubTask_Title:string;
  SubTask_Description: string;
  SubTaskCreated_By : number ;
  SubTaskUpdated_By : number ;
  SubTaskCreated_Date :Date;
  SubTaskUpdated_Date : Date;



}