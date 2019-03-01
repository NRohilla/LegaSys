import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TasksService } from '../tasks.service';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { ViewChild } from '@angular/core';
import { TaskModel } from '../tasks.component';
import { FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective } from "@angular/forms";
import { TosterService } from '../../../shared/services/toster.service';
import { EditComponent } from '../../project/edit/edit.component';
import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { DataSource } from '@angular/cdk/table';
import { DatePipe } from '@angular/common';





@Component({
  selector: 'app-subtask',
  templateUrl: './subtask.component.html',
  styleUrls: ['./subtask.component.scss']
})
export class SubtaskComponent implements OnInit {
  LebalForm: FormGroup;
  subtaskForm: FormGroup;
  dataSource: any;
  isSave: boolean = true;
  isLoading = true;
  public files: any[];
  myModel: TaskModel;
  disable: boolean = true;
  ProjectTaskId: any;
  formType = "Add";
  selectedRowIndex: number = -1;
  isAddItem: boolean = false;
  disableFooter: boolean = true;
  selected: any = 'true';
  globalResponse: any;
  attachmentType: string;
  attachmentPath: any;
  attachmentName: string;
  selectedFile: File;
  formDirective: FormGroupDirective;
  newPath: any;
  project_Title: any;
  task_Title: any;
  subTask_ID: any;
  taskAssignTo: any;
  subtaskStatus: any;
  subtaskRisk: any;
  subtaskPriority: any;
  subtaskAssignee: any;
  subtaskActivity: any
  classif: any;
  acceptance: any;
  disableDatatable: any = true;
  disableMessage: any = false;
  taskActivity: any;
  date:any;



  projectTitle: any;

  projectId: any;
  subtaskClassification: any =
    [
      { value: '1', viewValue: 'Functional' },
      { value: '2', viewValue: 'Business' },
    ];




  displayedColumns: string[] = ['ProjectSubTaskID', 'SubTask_Title', 'SubTask_Status', 'SubTask_Priority', 'SubTaskStart_Date', 'SubTaskTarget_Date', 'SubTaskOriginal_Estimate', 'Action',];

  constructor(public dataService: TasksService, private router: Router, public Formbuilder: FormBuilder, public toastr: TosterService ,) {
    this.subtaskForm = this.Formbuilder.group
      ({
        SubTask_Title: ['', [Validators.required, Validators.maxLength(25)]],
        SubTask_Description: [''],
        Status_Id: ['', Validators.required],
        Priority_Id: ['', Validators.required],
        Risk_Id: ['', Validators.required],
        Classification: ['', Validators.required],
        SubTaskAcceptance_Criteria: ['', Validators.required],
        SubTaskOriginal_Estimate: ['', Validators.required],
        Remaining: [''],
        Completed: [''],
        SubTaskStart_Date: ['', Validators.required],
        SubTaskTarget_Date: ['', Validators.required],
      },
        {
          validator: this.matchval // my validation method
        });


    this.files = [];
    this.myModel = new TaskModel();


  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit() {

    debugger;
    if (localStorage.getItem('isLoggedin') == 'true') {

      this.ProjectTaskId = sessionStorage.getItem("currentId");

      this.project_Title = localStorage.getItem("projectTitle");

      this.task_Title = localStorage.getItem("taskTitle");

      this.taskAssignTo = localStorage.getItem("taskAssignTo");

      this.subtaskActivity = localStorage.getItem("subtaskActivity");

      this.GetAllSubTaskByTaskID(this.ProjectTaskId);
      this.GetTaskStatus();
      this.GetTaskRisk();
      this.GetTaskPriority();


    }
    else {
      this.router.navigateByUrl("/login");
    }

  }

  //tOASTER mETHODS
  showSuccess() {
    this.toastr.showSuccess('Subtask Created Successfully');
  }

  showupdateSuccess() {
    this.toastr.showSuccess('Subtask Updated Successfully');
  }
  //  Method For Fetch Data against ID
  GetAllSubTaskByTaskID(ID) {
    debugger;

    this.dataService.GetAllProjectSubTaskbyTaskId(ID).subscribe(
      res => {
        this.dataSource = new MatTableDataSource<TaskModel>();
        this.dataSource.data = res;

        if (this.dataSource.data.length == 0) {
          this.disableDatatable = false;
          this.disableMessage = true;
        }


        if (this.dataSource.data.value != null) {
          this.disable = false;

        }
        else {
          this.disable = true;

          // this.disableMessage=true;
        }
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.isLoading = false;
      },
      err => {
        this.isLoading = false
        console.log('There was an error while retrieving data !!!' + err);
      }
    );
  }

  //method for getting status from db
  GetTaskStatus() {

    this.dataService.GetTaskStatus().subscribe
      (
        data => {

          this.subtaskStatus = data; // FILL THE ARRAY WITH DATA.
        },
        (err) => {
          console.log(err);
        }

      );
  }


  //method for getting risk from db
  GetTaskRisk() {

    this.dataService.GetTaskRisk().subscribe
      (
        data => {

          this.subtaskRisk = data; // FILL THE ARRAY WITH DATA.
        },
        (err) => {
          console.log(err);
        }

      );
  }


  //method for getting risk from db
  GetTaskPriority() {

    this.dataService.GetTaskPriority().subscribe
      (
        data => {

          this.subtaskPriority = data; // FILL THE ARRAY WITH DATA.
        },
        (err) => {
          console.log(err);
        }

      );
  }




  //Method to save Uploads
  onFileChanged(event: any) {

    this.files = event.target.files;
    this.attachmentType = this.files[0].type;
    this.attachmentPath = event.target.value;
    this.attachmentName = this.files[0].name;
    this.postFiles(this.files);


  }



  highlight(row) {
    debugger;
    this.formType = "Update";
    this.edit();
    this.selectedRowIndex = row.ProjectSubTaskID;
    this.subTask_ID = row.ProjectSubTaskID;

    this.subtaskForm.setValue({

      SubTask_Title: row.SubTask_Title,
      SubTask_Description: row.SubTask_Description,
      Status_Id: row.Status_Id,
      Priority_Id: row.Priority_Id,
      Risk_Id: row.Risk_Id,

      SubTaskStart_Date: row.SubTaskStart_Date,
      SubTaskTarget_Date: row.SubTaskTarget_Date,
      Classification: "",
      SubTaskAcceptance_Criteria: row.SubTaskAcceptance_Criteria,
      SubTaskOriginal_Estimate: row.SubTaskOriginal_Estimate,
      Remaining: 0,
      Completed: 0,
    });

  }

  //Method to aad Record In Grid

  // addnewSubTaskInGrid() {

  //   this.myModel = this.subtaskForm.value;
  //   this.myModel.ProjectSubTaskID = 0;
  //   this.myModel.ProjectTaskID = this.ProjectTaskId;
  //   this.myModel.AttachmentPath = this.newPath ;
  //   this.myModel.AttachmentName = this.attachmentName;
  //   if(this.attachmentName!=null)  
  //          {
  //           this.myModel.AttachmentType= "."+this.attachmentName.split('.').pop();
  //          }
  //   //Checking that is there any record in subtask Table

  //   if (this.dataSource.data.length > 0) {
  //     this.myModel.TaskTitle = this.dataSource.data[0].TaskTitle;
  //     this.myModel.Description = this.dataSource.data[0].Description;
  //     this.myModel.Project_Title = this.dataSource.data[0].Project_Title;
  //   }
  //   if (this.formType == "Add") {
  //     const data = this.dataSource.data;
  //     data.push(this.myModel);
  //     this.dataSource.data = data;
  //     this.reset(/*this.subtaskForm, this.formDirective*/);

  //   }

  //   else {

  //     this.dataSource.data.forEach(element => {
  //       if (element.ProjectSubTaskID == this.selectedRowIndex) {

  //         element.SubTask_Title = this.myModel.SubTask_Title;
  //         element.SubTask_Description = this.myModel.SubTask_Description;

  //       }
  //       this.reset(/*this.subtaskForm, this.formDirective*/);

  //     });

  //   }


  // }

  //Method to add record in DB
  SaveTaskInDB() {
    debugger;
    if (this.formType == "Add")
    //Code to Create subtask.
    {

      this.myModel.SubTask_Title = this.subtaskForm.value.SubTask_Title;
      this.myModel.SubTask_Description = this.subtaskForm.value.SubTask_Description;
      this.myModel.Remaining = this.subtaskForm.value.Remaining;
      this.myModel.SubTaskStart_Date = this.subtaskForm.value.SubTaskStart_Date;
      this.myModel.Task_AssignTo = this.subtaskForm.value.Task_AssignTo;
      this.myModel.Priority_Id = this.subtaskForm.value.Priority_Id;
      this.myModel.Risk_Id = this.subtaskForm.value.Risk_Id;
      this.myModel.Status_Id = this.subtaskForm.value.Status_Id;
      this.myModel.SubTaskAcceptance_Criteria = this.subtaskForm.value.SubTaskAcceptance_Criteria;
      this.myModel.Classification = this.subtaskForm.value.Classification;
      this.myModel.SubTaskTarget_Date = this.subtaskForm.value.SubTaskTarget_Date;
      this.myModel.Completed = this.subtaskForm.value.Completed;
      this.myModel.SubTaskOriginal_Estimate = this.subtaskForm.value.SubTaskOriginal_Estimate;
      this.myModel.Remaining = this.subtaskForm.value.Remaining;
      this.myModel.Activity_Id = this.subtaskForm.value.Activity_Id;
      this.dataService.CreateProjectSubTask(this.ProjectTaskId, this.myModel)
        .subscribe((result) => {

          this.showSuccess();

          this.subtaskForm.reset();
          this.disableDatatable = true;
          this.disableMessage = false;
          this.GetAllSubTaskByTaskID(this.ProjectTaskId);


        },
          error => {
            console.log(error);
          },
          () => {
            if (this.formType == "Add") {
              this.isAddItem = false;
              this.disableFooter = true;
            }
            this.discard();
          })

    }

    //Code to Update subtask
    else {
      this.subtaskForm.value.ProjectSubTaskID = this.subTask_ID;

      this.dataService.UpdateProjectSubTaskDetail(this.subtaskForm.value).subscribe
        (
          res => {
            this.showupdateSuccess();

            this.subtaskForm.reset();
            this.formType = "Add";
            this.edit();
            this.GetAllSubTaskByTaskID(this.ProjectTaskId);

          },
          err => {
            console.log(err);
          }
        );
    }
  }

  postFiles(files) {

    if (files.length === 0)
      return;

    const formData = new FormData();

    for (let file of files)
      formData.append(file.name, file);

    this.dataService.addAttechmentatServer(formData)
      .subscribe((result) => {

        console.log(result);
        this.newPath = result;
      })

  }


  edit() {

    if (this.selected == 'true') {
      this.isAddItem = true;
      this.disable = false;

    }
    else {
      this.isAddItem = false;
    }

    this.disableFooter = false;
  }


  //method to hide form
  discard() {

    this.isAddItem = false;
    this.disableFooter = true;
    this.disable = true;
    this.subtaskForm.reset();

    this.formType = "Add";

  }

  ShowCustomMessage() {
    this.toastr.showError("SubTask Already Exsists");
  }



  // Method to check if any subtask already exsists.
  onSubTaskChanged(subtaskValue: string) {
    debugger
    if (subtaskValue.trim().length == 0) {
      this.toastr.showError("Invalid Task Title (Only Space not acceptable)");

    }

    else {

      this.dataService.CheckIsSubTaskExsists(subtaskValue).subscribe
        (
          data => {
            console.log(data);
            if (data == true) {
              this.ShowCustomMessage();
              this.subtaskForm.controls.SubTask_Title.reset();
            }
          },
          (err) => {
            console.log(err);
          }

        );

    }
  }

  matchval(group: FormGroup) {
    debugger;

    let datePipe :DatePipe=new DatePipe('en-US');

    let taskstartDate = (localStorage.getItem("taskStartDate"));

    let tasktargetDate = localStorage.getItem("taskTargetDate");

    let startDate= datePipe.transform((group.controls['SubTaskStart_Date'].value), "yyyy-MM-dd");
  
    let targetDate = datePipe.transform((group.controls['SubTaskTarget_Date'].value),"yyyy-MM-dd");

    if (startDate != null && targetDate != null) {
      debugger;
      if ((startDate > taskstartDate && startDate < tasktargetDate) && (targetDate > taskstartDate && targetDate < tasktargetDate))
      
      {

        if (targetDate > startDate) {

          return null;
    
        }
        else {
          return group.controls['SubTaskTarget_Date'].setErrors({ matchval: true });
    
        }
    
      }

      else {
        return group.controls['SubTaskStart_Date'].setErrors({ matchval: true });

      }
    }

  
  }




  reset() {

    this.subtaskForm.reset();
    this.formType = "Add";

  }





}
