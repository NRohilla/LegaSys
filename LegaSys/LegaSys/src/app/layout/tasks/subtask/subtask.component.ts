import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TasksService } from '../tasks.service';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { ViewChild } from '@angular/core';
import { TaskModel } from '../tasks.component';
import { FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective } from "@angular/forms";
import { ToastrManager } from 'ng6-toastr-notifications';
import { EditComponent } from '../../project/edit/edit.component';
import { Variable } from '@angular/compiler/src/render3/r3_ast';




@Component({
  selector: 'app-subtask',
  templateUrl: './subtask.component.html',
  styleUrls: ['./subtask.component.scss']
})
export class SubtaskComponent implements OnInit {
  LebalForm :FormGroup;
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
  newPath : any;
  
 

  displayedColumns: string[] = ['SubTask_Title','SubTask_AssignTo','SubTask_Status','SubTask_Priority','SubTask_Activity','SubTaskStart_Date','SubTaskTarget_Date','SubTaskOriginal_Estimate','Action',];

  constructor(public dataService: TasksService, private router: Router, public Formbuilder: FormBuilder, public toastr: ToastrManager)
   {
    this.subtaskForm = this.Formbuilder.group
      ({
        //for special char validation pattern ,Validators.pattern(/^[a-zA-Z0-9]+$/)
        ProjectSubTaskID: [''],
        SubTask_Title: ['', [Validators.required, Validators.maxLength(25)]],
        SubTask_Description: [''],
      });


      this.LebalForm=this.Formbuilder.group
      (
        {
          Project_ID:[''],
          taskTitle:[''],
        }
      );
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

    this.ProjectTaskId = sessionStorage.getItem("currentId");

    this.GetAllSubTaskByTaskID(this.ProjectTaskId);

  }

  //tOASTER mETHODS
  showSuccess() {
    this.toastr.successToastr('Success!');
  }

  //  Method For Fetch Data against ID
  GetAllSubTaskByTaskID(ID) 
  {
    debugger;
//vaibhav

    this.dataService.GetAllProjectSubTaskbyTaskId(ID).subscribe(
      res => {
        this.dataSource = new MatTableDataSource<TaskModel>();
        this.dataSource.data = res;
        if (this.dataSource.data.value != null) {
          this.disable = false;
        }
        else {

          this.disable = true;
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

  //Method to save Uploads
  onFileChanged(event: any) {
    debugger;
    this.files = event.target.files;
    this.attachmentType =  this.files[0].type;
    this.attachmentPath = event.target.value;
    this.attachmentName = this.files[0].name;
    this.postFiles(this.files);
        

  }

  highlight(row) {
    debugger;
    this.selectedRowIndex = row.ProjectSubTaskID;
    this.formType = "Update";
    this.subtaskForm.setValue({
      ProjectSubTaskID: row.ProjectSubTaskID,
      SubTask_Title: row.SubTask_Title,
      SubTask_Description: row.SubTask_Description,

    });
  }


  //Method to aad Record In Grid

  addnewSubTaskInGrid() {
    debugger;
    this.myModel = this.subtaskForm.value;
    this.myModel.ProjectSubTaskID = 0;
    this.myModel.ProjectTaskID = this.ProjectTaskId;
    this.myModel.AttachmentPath = this.newPath ;
    this.myModel.AttachmentName = this.attachmentName;
    if(this.attachmentName!=null)  
           {
            this.myModel.AttachmentType= "."+this.attachmentName.split('.').pop();
           }
    //Checking that is there any record in subtask Table

    if (this.dataSource.data.length > 0) {
      this.myModel.TaskTitle = this.dataSource.data[0].TaskTitle;
      this.myModel.Description = this.dataSource.data[0].Description;
      this.myModel.Project_Title = this.dataSource.data[0].Project_Title;
    }
    if (this.formType == "Add") {
      const data = this.dataSource.data;
      data.push(this.myModel);
      this.dataSource.data = data;
      this.reset(/*this.subtaskForm, this.formDirective*/);

    }

    else {
      debugger;
      this.dataSource.data.forEach(element => {
        if (element.ProjectSubTaskID == this.selectedRowIndex) {

          element.SubTask_Title = this.myModel.SubTask_Title;
          element.SubTask_Description = this.myModel.SubTask_Description;
        
        }
        this.reset(/*this.subtaskForm, this.formDirective*/);

      });

    }


  }

  //Method to add record in DB
  SaveTaskInDB() {
    debugger

    //save data in database

    var id = this.ProjectTaskId;
    this.dataService.CreateProjectSubTask(id, this.dataSource.data)
      .subscribe((result) => {
        console.log(this.dataSource.data);
        this.showSuccess();
      
        this.subtaskForm.reset();
        this.formType = "Add";
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

  postFiles(files) {
    debugger;
    if (files.length === 0)
      return;

    const formData = new FormData();

    for (let file of files)
      formData.append(file.name, file);

      this.dataService. addAttechmentatServer(formData)
      .subscribe((result) => {
        debugger;
        console.log(result);
        this.newPath = result; 
      })
      
  }


  edit() {
    debugger;

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
    debugger;

    this.isAddItem = false;
    this.disableFooter = true;
    this.disable = true;
    this.subtaskForm.reset();

    this.formType = "Add";

  }

  reset(/* formData: any,  formDirective: FormGroupDirective*/) {
    debugger;
    // formDirective.resetForm();
    this.subtaskForm.reset();
    this.formType = "Add";

  }


 


}
