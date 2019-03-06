import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";
import { Router } from '@angular/router';
import { TosterService } from '../../../shared/services/toster.service';
import { TasksService } from '../tasks.service';
import { MatTableDataSource,MatDialog } from '@angular/material';
import{TaskModel}from '../tasks.component'

@Component({
  selector: 'app-edittask',
  templateUrl: './edittask.component.html',
  styleUrls: ['./edittask.component.scss']
})
export class EdittaskComponent implements OnInit {

  //Declaration
  responce: any;
  Id: any;
  dataSource: any;
  taskeditForm: FormGroup;
  disable: boolean = true;
  myclients: any = [];
  myprojects: any;
  taskStatus : any=[];
  taskPriority : any =[];
  taskRisk :any =[];
  taskAssignee: any =[];
  startDate:any;
 
  taskTitle:any;
  projectTitle:any;
  taskAssignTo:any;
  projectId:any;
  subtaskActivity:any;
  taskStartDate:any;
  taskTargetDate:any;
  updatedBy :any;

 
  taskActivity:any=[];
  taskClassification: any = 
    [
        {value: '1', viewValue: 'Functional'},
        {value: '2', viewValue: 'Business'},
     ];
  
   constructor(public Formbuilder: FormBuilder, public dataService: TasksService, public router: Router, public toastr:TosterService) 
   {

    this.taskeditForm = this.Formbuilder.group
      ({
       
        TaskTitle: ['', [Validators.required, Validators.maxLength(25)]],
        Description: [''],
        Project_ID: [0, Validators.required],
        projectDescription:[''],
        Acceptance_Criteria:[''],
        Status_Id: ['', Validators.required],
        Priority_Id: ['', Validators.required],
       // Risk_Id: ['', Validators.required],

        Activity_Id:['', Validators.required],
        UserId:['',Validators.required],
      
        Original_Estimate:['',Validators.required],
        Remaining:[''],
        Completed:[''],
        ProjectTaskID:[''],
        Target_Date:['',Validators.required],
        Start_Date:['',Validators.required],
      },
      {
          validator: this.matchval // your validation method
      });
 
     
      
  }

  ngOnInit() {

    if(localStorage.getItem('isLoggedin')=='true')
    {
      debugger; 

       //Fetching Id From Session.
      
         this.Id = sessionStorage.getItem("currentId");
          this.GetTaskByID(this.Id);
         
           this.GetTaskStatus();
             this.GetTaskRisk();
               this. GetTaskPriority();
                
                  this.GetTaskActivity();
                     this.GetProject();
                     this.taskeditForm.disable();

    }
  else
     {
        this.router.navigateByUrl("/login");
     }
  }

 
  // Method For Fetch Data
  GetTaskByID(ID) {
    debugger;
    
    this.dataService.GetProjectTaskbyId(ID).subscribe(
      res => {
        debugger;
      
        this.dataSource = res;
        console.log(this.dataSource);        
        this.projectId =this.dataSource.Project_ID;
        this.projectTitle=this.dataSource.Project_Title;
        this.taskTitle=this.dataSource.TaskTitle;
        this.taskAssignTo=this.dataSource.Task_AssignTo;
        this.subtaskActivity=this.dataSource.Task_Activity;
        this.taskStartDate = this.dataSource.Start_Date;
        this.taskTargetDate=this.dataSource.Target_Date;
      


        localStorage.setItem("projectTitle" , this.projectTitle );

        localStorage.setItem("taskTitle",  this.taskTitle);
   
        localStorage.setItem("taskAssignTo",this.taskAssignTo);
   
        localStorage.setItem("subtaskActivity",this.subtaskActivity);

        localStorage.setItem("taskStartDate",this.taskStartDate);
   
        localStorage.setItem("taskTargetDate",this.taskTargetDate);
     
        
        this.GetAllAssignee();
       
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
  
    this.updatedBy=localStorage.getItem('userDetailsID');
    this.taskeditForm.value.ProjectTaskID = this.Id;
    this.taskeditForm.value.Project_ID = this.dataSource.Project_ID;
    this.dataService.UpdateProjectTaskDetail(this.updatedBy,this.taskeditForm.value).subscribe
    (
      res => {
       
        this.showSuccess();
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
      this.taskeditForm.enable();
    }
    else {
      this.disable = true;
      this.taskeditForm.disable();
      //this.showCancel();
    }
  }

  //method for binding drop down Client name
  GetClientName() {
  
    this.dataService.GetAllClients().subscribe
      (
      data => {
      
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
       
        this.myprojects = data;		// FILL THE ARRAY WITH DATA.
      },
      (err) => {
        console.log(err);
      }
      );
  }


  
  showSuccess() {
    this.toastr.showSuccess("Task Updated Successfully");
  }

  showCancel() {
    this.toastr.showInfo("Task Cancelled");
  }


      //method for getting status from db
      GetTaskStatus()
      {
       
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
     
     
        this.dataService.GetTaskAssignee(this.projectId).subscribe
        (
            data =>{
   
            this.taskAssignee= data; 
            // FILL THE ARRAY WITH DATA.

          
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
    

//tO CHECK validation of target date and staet date
    matchval(group: FormGroup) {
   
      let startDate = group.controls['Start_Date'].value;
      let targetDate = group.controls['Target_Date'].value;
       if (targetDate > startDate) {
        
        return null;
  
          }
       else {
         return group.controls['Target_Date'].setErrors({ matchval: true });
  
       }
    }
  

  
}
  









