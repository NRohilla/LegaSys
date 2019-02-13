import { Component, OnInit } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource,MatDialog } from '@angular/material';
import { ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TasksService } from './tasks.service';
import { ToastrManager } from 'ng6-toastr-notifications';
import { DecimalPipe } from '@angular/common';
import { TosterService } from './../../shared/services/toster.service';
import { DialogComponent } from '../masters/dialog/dialog.component';



@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TaskComponent implements OnInit {

  dataSource: any = [];
  isLoading = true;
  ID : any;

  displayedColumns: string[] = ['TaskTitle', 'Project_Title','Task_AssignTo','Task_Status','Task_Priority','Task_Activity','Start_Date','Target_Date','Action'];

  constructor(public dataService: TasksService, private router: Router, public  toastr: TosterService,public dialog: MatDialog) { }

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
    debugger;
    this.dataService.GetAllProjectsTask().subscribe(
      res => {
        debugger;
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
  ViewTask(ID) 
  {
    sessionStorage.setItem("currentId", ID);
    this.router.navigate(['/viewtask']);
  }
 //tOASTER mETHODS
 showSuccess()
  {
    this.toastr.showSuccess('Task Deleted Successfully.');
  }

  deleteTask(ID)
  {
    debugger

    const dialogRef = this.dialog.open(DialogComponent, 
      {
          width: '325px',
          data: { status: "delete", confirm: true }
      });

  dialogRef.afterClosed().subscribe(result => {
      if (result) {
     this.dataService.DeleteProjectTask(ID).subscribe(

      res=>
      {
       this.dataSource=res;
       this.ID = this.dataSource.ProjectTaskID;
       this.showSuccess();
       this.FetchDataTable();
      
      },
      error =>
      {
        console.log('There was an error while retrieving data !!!' + error);
 
      });


  }
        }); 


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
  Original_Estimate:number;
  Remaining:number;
  Completed:number;
  Task_Status:number;
  Status_Icon:string;
  Task_Priority:number;
  Task_Risk: number;
  Task_Activity:number;
  Task_Assigne_Id:number;
  Task_AssignTo:string;
  Start_Date:Date;
  Target_Date:Date;
  Classification:string;
  Acceptance_Criteria:string
  Status_Id:number;
  Priority_Id:number;
  Risk_Id:number;
  Activity_Id:number;
 
  
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
  AttachmentName :string;
  AttachmentPath : string;
  AttachmentType :string;
  AttachmentTypeID:number;

  //Fields For SubTask Table

  ProjectSubTaskID:number;
  SubTask_Title:string;
  SubTask_Description: string;
  SubTaskCreated_By : number ;
  SubTaskUpdated_By : number ;
  SubTaskCreated_Date :Date;
  SubTaskUpdated_Date : Date;
  SubTask_Status:number;
  SubTask_Status_Icon:string;
  SubTask_Priority:number;
  SubTask_Risk: number;
  SubTask_Activity:number;
  SubTask_Assigne_Id:number;
  SubTask_AssignTo:string;
  SubTaskStart_Date:Date;
  SubTaskTarget_Date:Date;
  SubTaskClassification:string;
  SubTaskAcceptance_Criteria:string
  SubTaskStatus_Id:number;
  SubTaskPriority_Id:number;
  SubTaskRisk_Id:number;
  SubTaskActivity_Id:number;
  SubTaskOriginal_Estimate:number;
 

  



}