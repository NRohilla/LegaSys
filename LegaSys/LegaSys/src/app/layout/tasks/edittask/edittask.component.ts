import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";
import { Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-edittask',
  templateUrl: './edittask.component.html',
  styleUrls: ['./edittask.component.scss']
})
export class EdittaskComponent implements OnInit {

  //Declaration
  responce: any;
  Id: any;
  dataSource: any = []
  taskeditForm: FormGroup;
  disable: boolean = true;
  myclients: any = [];
  myprojects: any;
  taskStatus : any=[];
  taskPriority : any =[];
  taskRisk :any =[];
  taskAssignee: any =[];
  startDate:any;
  targetDate:any;
  taskActivity:any=[];
  taskClassification: any = 
    [
        {value: '1', viewValue: 'Functional'},
        {value: '2', viewValue: 'Business'},
     ];
  
   constructor(public Formbuilder: FormBuilder, public dataService: TasksService, public router: Router, public toastr: ToastrManager) {

    this.taskeditForm = this.Formbuilder.group
      ({
       
        TaskTitle: ['', [Validators.required, Validators.maxLength(25)]],
        Description: [''],
        Project_ID: [0, Validators.required],
        projectDescription:[''],
        Status_Id: ['', Validators.required],
        Priority_Id: ['', Validators.required],
        Risk_Id: ['', Validators.required],
        Activity_Id:['', Validators.required],
        Task_AssignTo:['',Validators.required],
        Classification:['', Validators.required ],
        Original_Estimate:['',Validators.required],
        Remaining:[''],
        Completed:[''],
        ProjectTaskID:[''],
        Target_Date:['',Validators.required],
     
      });
  }

  ngOnInit() {

    //Fetching Id From Session.
    this.Id = sessionStorage.getItem("currentId");
    this.GetTaskByID(this.Id);
    this.GetTaskStatus();
    this.GetTaskRisk();
    this. GetTaskPriority();
    this.GetAllAssignee();
    this.GetTaskActivity();
   // this.GetProject();
    this.taskeditForm.disable();
  }

  

  // Method For Fetch Data
  GetTaskByID(ID) {
debugger;
    this.dataService.GetProjectTaskbyId(ID).subscribe(
      res => {
        debugger;
        this.dataSource = res;
     
      },
      err => {
        console.log(err);
      }
    );
  }

  //Method For Update data
  UpdateTaskByID()
   {
     debugger;

    this.taskeditForm.value.ProjectTaskID = this.Id;
    this.taskeditForm.value.Project_ID = this.dataSource.Project_ID;
    this.dataService.UpdateProjectTaskDetail(this.taskeditForm.value).subscribe(
      res => {
       
        this.showSuccessWithTimeout("Updated Successfully","Success","25000");
        this.MakeFieldEditable();
       
      },
      err => {
        console.log(err);
      }
    );
  }

  //method for form Disable on load
  MakeFieldEditable() {
    if (this.disable) {
      this.disable = false;
      // this.issreadOnly = false;
      // this.isReadOnly = false;
      this.taskeditForm.enable();
    }
    else {
      this.disable = true;
      // this.isReadOnly = true;
      // this.issreadOnly = true;
      this.taskeditForm.disable();
    }
  }

  //method for binding drop down Client name
  GetClientName() {
  
    this.dataService.GetAllClients().subscribe
      (
      data => {
        //console.log("data from Clients:" + JSON.stringify(data));
        this.myclients = data;		// FILL THE ARRAY WITH DATA.
      },
      (err) => {
        console.log(err);
      }
      );
  }

  GetProject() {
    this.dataService.GetAllProjects().subscribe
      (
      data => {
        //console.log("data from Projects:" + JSON.stringify(data));
        this.myprojects = data;		// FILL THE ARRAY WITH DATA.
      },
      (err) => {
        console.log(err);
      }
      );
  }


  //Toster Notifications
  showSuccessWithTimeout(message, title, timespan){ 
    debugger; 
    this.toastr.successToastr(message, title ,{
        timeOut :  timespan
    })
}
  showSuccess() {
    this.toastr.successToastr('Task Updated Successfully', 'Success!');
  }

  showCancel() {
    this.toastr.infoToastr('Task Cancelled', 'Cancel');
  }


      //method for getting status from db
      GetTaskStatus()
      {
        debugger;
          this.dataService.GetTaskStatus().subscribe
          (
              data =>{
  
              this.taskStatus= data; // FILL THE ARRAY WITH DATA.
              },
              (err) =>
              
              {
                console.log(err);
              }
  
          );
      }
  
  
   //method for getting risk from db
   GetTaskRisk()
   {
     debugger;
       this.dataService.GetTaskRisk().subscribe
       (
           data =>{
  
           this.taskRisk= data; // FILL THE ARRAY WITH DATA.
           },
           (err) =>
           
           {
             console.log(err);
           }
  
       );
   }
  
  
    //method for getting risk from db
    GetTaskPriority()
    {
      debugger;
        this.dataService.GetTaskPriority().subscribe
        (
            data =>{
   
            this.taskPriority= data; // FILL THE ARRAY WITH DATA.
            },
            (err) =>
            
            {
              console.log(err);
            }
   
        );
    }
      
  
    //method for getting risk from db
    GetAllAssignee()
    {
      debugger;
        this.dataService.GetTaskAssignee().subscribe
        (
            data =>{
   
            this.taskAssignee= data; // FILL THE ARRAY WITH DATA.
            },
            (err) =>
            
            {
              console.log(err);
            }
   
        );
    }
  
    //binding dropdown task activity
    GetTaskActivity()
    {
      debugger;
        this.dataService.GetTaskActivity().subscribe
        (
            data =>{
   
            this.taskActivity= data; // FILL THE ARRAY WITH DATA.
            },
            (err) =>
            
            {
              console.log(err);
            }
   
        );
    }
    
  
}
  









